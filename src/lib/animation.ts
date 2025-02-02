interface smoothScroll {
  targetY: number,
  offset?: number,
  duration?: number,
}
export const smoothScroll = ({offset = 100, targetY,duration = 1000}: smoothScroll): void => {
    const startY: number = window.scrollY;
    const distance: number = (targetY - offset) - startY;
    let startTime: number | null = null;
  
    const animationStep = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed: number = currentTime - startTime;
      
  
      const easeInOutQuad = (t: number): number =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      const progress: number = Math.min(timeElapsed / duration, 1);
      const scrollY: number = startY + distance * easeInOutQuad(progress);
  
      window.scrollTo(0, scrollY);

      if (timeElapsed < duration) {
        requestAnimationFrame(animationStep);
      }
    };

    requestAnimationFrame(animationStep);
};
