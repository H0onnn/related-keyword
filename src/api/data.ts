import { axiosBase } from './axios';
import { KeywordDataTypes } from '../constants/types';

export const getKeywordData = async (query: string): Promise<KeywordDataTypes> => {
  const response = await axiosBase.get(`data?q=${query}`);
  const data = response.data;

  return data;
};
