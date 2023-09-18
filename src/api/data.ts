import { httpClient } from './axios';
import { KeywordDataTypes } from '../constants/types';
import localCache from '../utils/localCache';

export const getKeywordData = async (
  query: string,
  cacheResponse: boolean,
): Promise<KeywordDataTypes[]> => {
  const data = await httpClient.search(query);

  cacheResponse && localCache.writeToCache(query, data);

  return data;
};
