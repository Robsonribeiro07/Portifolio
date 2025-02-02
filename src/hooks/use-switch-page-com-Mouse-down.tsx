import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export function useHandleSwitchPageComMousedon() {
  const [startX, setStartX] = useState(0);
  const [direction, setDirection] = useState('');
  const handleNavigate = useNavigate();
  const { pathname } = useLocation();

  const handleSwitchPage = useCallback(() => {
    const directions = ["/", "project", "about"];
    const currentPage = pathname.split('/')[1];
    const currentIndex = directions.findIndex(item => item === currentPage);

    if (direction === 'left' && currentIndex > 0) {
      const nextPage = directions[currentIndex - 1];
      handleNavigate(`/${nextPage}`);
    } else if (direction === 'right' && currentIndex < directions.length - 1) {
      const nextPage = directions[currentIndex + 1];
      handleNavigate(`/${nextPage}`);
    }
  }, [direction, pathname, handleNavigate]);

  const handleMouseDown = (e: MouseEvent) => {
    setStartX(e.clientX);
    };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (startX !== 0) {
        const currentX = e.clientX;
        if (currentX < startX - 200 && direction !== 'right') { // Move to the right
          setDirection('right');
          requestAnimationFrame(handleSwitchPage);
        } else if (currentX > startX + 200 && direction !== 'left') { // Move to the left
          setDirection('left');
          handleSwitchPage()
        }
      }
    },
    [startX, direction, handleSwitchPage]
  );

  // Add event listeners on mouse events
  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return { direction };
}
