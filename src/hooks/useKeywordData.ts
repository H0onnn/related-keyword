import { useState, useEffect, useCallback } from 'react';
import { getKeywordData } from '../api/data';
import useDebounce from '../hooks/useDebounce';
import localCache from '../utils/localCache';
import { KeywordDataTypes } from '../constants/types';

export const useKeywordData = (debouncedValue: string, useCache: boolean) => {
  const [keywordData, setKeywordData] = useState<KeywordDataTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchKeywordData = useCallback(async () => {
    if (debouncedValue && debouncedValue.length) {
      setIsLoading(true);
      let data = useCache ? localCache.readFromCache(debouncedValue) : null;

      if (!data || !data.length) {
        data = await getKeywordData(debouncedValue, useCache);
      }

      setKeywordData(data);
      setIsLoading(false);
    }
  }, [debouncedValue, useCache]);

  useEffect(() => {
    if (debouncedValue) {
      fetchKeywordData();
    } else {
      setKeywordData([]);
    }
  }, [debouncedValue]);

  return { keywordData, isLoading };
};
