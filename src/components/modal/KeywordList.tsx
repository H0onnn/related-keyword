import KeywordItem from './KeywordItem';
import { KeywordDataTypes } from '../../constants/types';

interface KeywordListProps {
  queries: KeywordDataTypes[];
}

const KeywordList = ({ queries }: KeywordListProps) => {
  return (
    <div>
      {queries.map(query => (
        <KeywordItem key={query.sickCd} query={query.sickNm} />
      ))}
    </div>
  );
};

export default KeywordList;
