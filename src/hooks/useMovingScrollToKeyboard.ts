import { useRef } from 'react';

const useMovingScrollToKeyboard = (focusIdx: number) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const movingScrollToKeyboard = () => {
    const container = modalRef.current;
    const selectedItem = itemRefs.current[focusIdx];

    if (container && selectedItem) {
      const topPos = selectedItem.offsetTop;
      const itemHeight = selectedItem.offsetHeight;

      container.scrollTop = topPos - container.offsetHeight / 2 + itemHeight / 2;
    }
  };

  return [modalRef, itemRefs, movingScrollToKeyboard] as const;
};

export default useMovingScrollToKeyboard;
