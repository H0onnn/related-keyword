import React from 'react';
import { KeywordQueryData } from '../../constants/types';
import styled from 'styled-components';
import InputImage from '../input/InputImage';
import { colors } from '../../constants/colors';

interface KeywordItemProps extends KeywordQueryData {
  isSelected?: boolean;
}

const KeywordItem = React.forwardRef<HTMLDivElement, KeywordItemProps>(
  ({ query, isSelected }, ref) => {
    return (
      <KeywordItemContainer ref={ref} isSelected={isSelected}>
        <InputImage />
        <span>{query}</span>
      </KeywordItemContainer>
    );
  },
);

export default KeywordItem;

const KeywordItemContainer = styled.div<{ isSelected?: boolean }>`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 45px;
  align-items: center;
  background-color: ${props => (props.isSelected ? colors.grey : colors.white)};
  border-radius: 10px;

  &:hover {
    background-color: ${colors.grey};
  }
`;
