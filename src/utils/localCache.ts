import { KeywordDataTypes } from '../constants/types';

const localCache = (() => {
  const writeToCache = (key: string, data: KeywordDataTypes[]) => {
    const storageValue = {
      data,
      timestamp: new Date().getTime(),
    };

    localStorage.setItem(key, JSON.stringify(storageValue));
  };

  const readFromCache = (key: string) => {
    const storageValueString = localStorage.getItem(key);
    if (!storageValueString) return [];

    const storageValue = JSON.parse(storageValueString);

    if (new Date().getTime() - storageValue.timestamp > EXPIRE_TIME) {
      localStorage.removeItem(key);
      return [];
    }

    return storageValue.data;
  };

  return {
    writeToCache,
    readFromCache,
  };
})();

export default localCache;

const EXPIRE_TIME = 5 * 60 * 1000; // 5분
