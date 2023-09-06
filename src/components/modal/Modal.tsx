import { useState, useEffect } from 'react';
import { getKeywordData } from '../../api/data';
import { KeywordDataTypes } from '../../constants/types';
import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { KeywordQueryData } from '../../constants/types';
import KeywordList from './KeywordList';
import useDebounce from '../../hooks/useDebounce';
import localCache from '../../utils/localCache';

const Modal = ({ query }: KeywordQueryData, useCache: boolean) => {
  const [keywordData, setKeywordData] = useState<KeywordDataTypes[]>([]);
  const debouncedValue = useDebounce(query, DELAY_TIME);

  useEffect(() => {
    if (debouncedValue && debouncedValue.length) {
      const fetchKeywordData = async () => {
        let data = useCache ? localCache.readFromCache(debouncedValue) : null;

        if (!data || !data.length) {
          console.info('calling api');
          data = await getKeywordData(debouncedValue, useCache);
        }

        setKeywordData(data);
      };

      fetchKeywordData();
    }
  }, [debouncedValue]);

  return (
    <ModalContainer>
      <CommentBox>
        <ModalComment>추천 검색어</ModalComment>
      </CommentBox>
      <KeywordList queries={keywordData} />
      <NoDataCommentBox>{!keywordData.length && <span>검색어 없음</span>}</NoDataCommentBox>
    </ModalContainer>
  );
};

export default Modal;

const DELAY_TIME = 500;

const ModalContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  width: 490px;
  height: 300px;
  background-color: ${colors.white};
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 20px;
  left: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.grey};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
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
