export type AnimationDirection = 'left' | 'right' | 'top' | 'bottom';

export const getDirectionalAnimation = (direction: AnimationDirection, delay: number = 0) => {
  let initial = { opacity: 0, x: 0, y: 0 };

  switch (direction) {
    case 'left':
      initial = { opacity: 0, x: -60, y: 0 };
      break;
    case 'right':
      initial = { opacity: 0, x: 60, y: 0 };
      break;
    case 'top':
      initial = { opacity: 0, x: 0, y: -50 };
      break;
    case 'bottom':
      initial = { opacity: 0, x: 0, y: 50 };
      break;
  }

  return {
    initial,
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: '-20px' },
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier curve
    },
  };
};

export const getCardAnimationByIndex = (index: number, baseDelay: number = 0) => {
  const directions: AnimationDirection[] = ['left', 'bottom', 'right', 'top'];
  const direction = directions[index % directions.length];
  const stagger = (index % 3) * 0.08 + baseDelay;
  return getDirectionalAnimation(direction, stagger);
};
