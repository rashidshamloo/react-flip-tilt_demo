// react
import { MutableRefObject, RefObject } from 'react';

// react-flip-tilt
import { FlipTiltRef } from 'react-flip-tilt';

// resets flipped items, does two animations
// and runs the callback function at the end
export const animate = (
  refs: RefObject<Array<FlipTiltRef>>,
  animationIsRunning: MutableRefObject<boolean>,
  col: number,
  itemCount: number,
  onEnd?: () => void
): void => {
  if (animationIsRunning.current || !refs.current) return;
  animationIsRunning.current = true;

  const itemStagger = 100;

  // reset flipped components
  for (let i = 0; i < itemCount; i++)
    if (refs.current[i].isFlipped()) refs.current[i].flip();
  // animation #1
  for (let i = 0; i < itemCount; i++) {
    const currentRow = Math.floor(i / col);
    if ((currentRow % 2 && i % 2) || (!(currentRow % 2) && !(i % 2))) {
      setTimeout(() => refs.current && refs.current[i].flip(), itemStagger);
      setTimeout(
        () => refs.current && refs.current[i].flip(),
        itemStagger + 1000
      );
    } else {
      setTimeout(
        () => refs.current && refs.current[i].flip(),
        500 + itemStagger
      );
      setTimeout(
        () => refs.current && refs.current[i].flip(),
        500 + itemStagger + 1000
      );
    }
  }
  // animation #2
  for (let i = 0; i < itemCount; i++) {
    setTimeout(
      () => refs.current && refs.current[i].flip(),
      itemStagger + 2000 + itemStagger * i
    );
    setTimeout(
      () => refs.current && refs.current[itemCount - i - 1].flip(),
      itemStagger + 2000 + itemStagger * itemCount + itemStagger * i + 500
    );
  }
  setTimeout(() => {
    if (!refs.current) return;

    animationIsRunning.current = false;
    // reset flipped components
    for (let i = 0; i < itemCount; i++)
      if (refs.current[i].isFlipped()) refs.current[i].flip();
    // onEnd() callback
    if (onEnd) onEnd();
  }, itemStagger + 2000 + itemStagger * itemCount + itemStagger * itemCount + 500 + 100);
};
