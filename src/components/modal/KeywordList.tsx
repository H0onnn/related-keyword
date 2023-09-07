import KeywordItem from './KeywordItem';
import { KeywordDataTypes } from '../../constants/types';
import { styled } from 'styled-components';

interface KeywordListProps {
  queries: KeywordDataTypes[];
  selectedItem: number;
  refs: React.MutableRefObject<HTMLDivElement[]>;
}

const KeywordList = ({ queries, selectedItem, refs }: KeywordListProps) => {
  return (
    <KeywordListContainer>
      {queries.map((query, index) => (
        <KeywordItem
          key={query.sickCd}
          query={query.sickNm}
          isSelected={index === selectedItem}
          ref={el => {
            if (el) refs.current[index] = el;
          }}
        />
      ))}
    </KeywordListContainer>
  );
};

export default KeywordList;

const KeywordListContainer = styled.div`
  flex: 1;
`;
