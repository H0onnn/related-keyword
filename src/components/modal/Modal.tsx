import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import { KeywordQueryData } from '../../constants/types';
import KeywordList from './KeywordList';
import useKeyPress from '../../hooks/useKeyPress';
import useDebounce from '../../hooks/useDebounce';
import useMovingScrollToKeyboard from '../../hooks/useMovingScrollToKeyboard';
import { useKeywordData } from '../../hooks/useKeywordData';
import LoadingUI from '../UI/LoadingUI';

interface ModalProps extends KeywordQueryData {
  useCache: boolean;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ query, useCache, setQuery }: ModalProps) => {
  const debouncedValue = useDebounce(query, DELAY_TIME);
  const { keywordData, isLoading } = useKeywordData(debouncedValue, useCache);
  const currentItem = useKeyPress(keywordData, setQuery);
  const [modalRef, itemRefs, movingScrollToKeyboard] = useMovingScrollToKeyboard(currentItem);

  useEffect(() => {
    movingScrollToKeyboard();
  }, [currentItem]);

  return (
    <ModalContainer $isVisible={debouncedValue.trim().length > 0} ref={modalRef}>
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

const ModalContainer = styled.div<{ $isVisible: boolean }>`
  display: ${props => (props.$isVisible ? 'flex' : 'none')};
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
