import { axiosBase } from './axios';
import { KeywordDataTypes } from '../constants/types';
import localCache from '../utils/localCache';

export const getKeywordData = async (
  query: string,
  cacheResponse: boolean,
): Promise<KeywordDataTypes[]> => {
  const response = await axiosBase.get(`?q=${query}`);
  const data = response.data;

  cacheResponse && localCache.writeToCache(query, data);

  return data;
};

export const getCachedKeywordData = (query: string): KeywordDataTypes[] => {
  return localCache.readFromCache(query);
};
