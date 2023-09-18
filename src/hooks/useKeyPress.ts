import { useState, useEffect } from 'react';
import { KeywordDataTypes } from '../constants/types';

const useKeyPress = (
  keywordData: KeywordDataTypes[],
  setQuery: React.Dispatch<React.SetStateAction<string>>,
) => {
  const [currentItem, setCurrentItem] = useState<number>(0);

  const [downPressed, setDownPressed] = useState<boolean>(false);
  const [upPressed, setUpPressed] = useState<boolean>(false);
  const [enterPressed, setEnterPressed] = useState<boolean>(false);

  useEffect(() => {
    const downUpHandler = ({ key, type }: KeyboardEvent) => {
      const isKeyPressed = type === 'keydown'; // keydown 이면 true, keyup 이면 false

      switch (key) {
        case 'ArrowDown':
          setDownPressed(isKeyPressed);
          break;
        case 'ArrowUp':
          setUpPressed(isKeyPressed);
          break;
        case 'Enter':
          setEnterPressed(isKeyPressed);
          break;
      }
    };

    window.addEventListener('keydown', downUpHandler);
    window.addEventListener('keyup', downUpHandler);

    return () => {
      window.removeEventListener('keydown', downUpHandler);
      window.removeEventListener('keyup', downUpHandler);
    };
  }, []);

  // 네비게이션 동작
  useEffect(() => {
    if (keywordData.length && downPressed) {
      const nextItem = (currentItem + 1) % keywordData.length;
      setCurrentItem(nextItem);
    }
  }, [downPressed]);

  useEffect(() => {
    if (keywordData.length && upPressed) {
      const prevItem = (currentItem - 1 + keywordData.length) % keywordData.length;
      setCurrentItem(prevItem);
    }
  }, [upPressed]);

  useEffect(() => {
    if (keywordData.length && enterPressed) {
      const selectedKeyword = keywordData[currentItem]?.sickNm;

      if (selectedKeyword) setQuery(selectedKeyword);
    }
  }, [enterPressed]);

  return currentItem;
};

export default useKeyPress;
