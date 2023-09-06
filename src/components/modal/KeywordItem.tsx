import { KeywordData } from '../../constants/types';
import { styled } from 'styled-components';
import InputImage from '../InputImage';
import { colors } from '../../constants/colors';

const KeywordItem = ({ query }: KeywordData) => {
  return (
    <KeywordItemContainer>
      <InputImage />
      <span>{query}</span>
    </KeywordItemContainer>
  );
};

export default KeywordItem;

const KeywordItemContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 45px;
  align-items: center;

  &:hover {
    background-color: ${colors.grey};
  }
`;
