import { useState, useEffect, useCallback, useRef } from 'react';
import { getKeywordData } from '../../api/data';
import { KeywordDataTypes } from '../../constants/types';
import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { KeywordQueryData } from '../../constants/types';
import KeywordList from './KeywordList';
import useDebounce from '../../hooks/useDebounce';
import localCache from '../../utils/localCache';
import useKeyPress from '../../hooks/useKeyPress';
import LoadingUI from '../UI/LoadingUI';

interface ModalProps extends KeywordQueryData {
  useCache: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ query, useCache, setQuery }: ModalProps) => {
  const [keywordData, setKeywordData] = useState<KeywordDataTypes[]>([]);
  const debouncedValue = useDebounce(query, DELAY_TIME);
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const downPressed = useKeyPress('ArrowDown');
  const upPressed = useKeyPress('ArrowUp');
  const enterPressed = useKeyPress('Enter');

  const fetchKeywordData = useCallback(async () => {
    if (debouncedValue && debouncedValue.length) {
      setIsLoading(true);
      let data = useCache ? localCache.readFromCache(debouncedValue) : null;

      if (!data || !data.length) {
        console.info('calling api');
        data = await getKeywordData(debouncedValue, useCache);
      }

      setKeywordData(data);
      setIsLoading(false);
    }
  }, [debouncedValue, useCache]);

  const adjustScroll = () => {
    const container = modalRef.current;
    const selectedItem = itemRefs.current[currentItem];

    if (container && selectedItem) {
      const topPos = selectedItem.offsetTop;
      const itemHeight = selectedItem.offsetHeight;

      container.scrollTop = topPos - container.offsetHeight / 2 + itemHeight / 2;
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      fetchKeywordData();
    } else {
      setKeywordData([]);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (keywordData.length && downPressed) {
      const nextItem = (currentItem + 1) % keywordData.length;
      if (nextItem !== currentItem) {
        setCurrentItem(nextItem);
      }
    }
  }, [downPressed]);

  useEffect(() => {
    if (keywordData.length && upPressed) {
      const prevItem = (currentItem - 1 + keywordData.length) % keywordData.length;
      if (prevItem !== currentItem) {
        setCurrentItem(prevItem);
      }
    }
  }, [upPressed]);

  useEffect(() => {
    if (keywordData.length && enterPressed) {
      const selectedKeyword = keywordData[currentItem]?.sickNm;

      if (selectedKeyword) setQuery(selectedKeyword);
      else setQuery(query);
    }
  }, [enterPressed]);

  useEffect(() => {
    if (keywordData.length && (downPressed || upPressed)) {
      adjustScroll();
    }
  }, [downPressed, upPressed, keywordData, currentItem]);

  return (
    <ModalContainer show={debouncedValue.trim().length > 0} ref={modalRef}>
      <CommentBox>
        <ModalComment>추천 검색어</ModalComment>
      </CommentBox>

      {isLoading ? (
        <LoadingUI />
      ) : (
        <>
          <KeywordList queries={keywordData} selectedItem={currentItem} refs={itemRefs} />
          <NoDataCommentBox>{!keywordData.length && <span>검색어 없음</span>}</NoDataCommentBox>
        </>
      )}
    </ModalContainer>
  );
};

export default Modal;

const DELAY_TIME = 400;

const ModalContainer = styled.div<{ show: boolean }>`
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 10px);
  width: 490px;
  max-height: 300px;
  background-color: ${colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 20px;
  left: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentBox = styled.div`
  border-bottom: 1px solid ${colors.grey};
  padding: 10px;
  margin-bottom: 10px;
`;

const ModalComment = styled.span`
  font-size: 14px;
  color: ${colors.secondary};
`;

const NoDataCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${colors.grey};
  height: 250px;
`;
