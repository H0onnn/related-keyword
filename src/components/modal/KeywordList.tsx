import KeywordItem from './KeywordItem';
import { KeywordDataTypes } from '../../constants/types';

interface KeywordListProps {
  queries: KeywordDataTypes[];
  selectedItem: number;
  refs: React.MutableRefObject<HTMLDivElement[]>;
}

const KeywordList = ({ queries, selectedItem, refs }: KeywordListProps) => {
  return (
    <div>
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
    </div>
  );
};

export default KeywordList;
