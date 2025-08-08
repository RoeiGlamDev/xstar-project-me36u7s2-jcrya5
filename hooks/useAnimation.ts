import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury LRP cosmetics website.
 * This hook provides a way to animate elements with a luxurious feel, 
 * using 3D effects and transitions that align with the high-end cosmetics brand.
 * 
 * @param {boolean} isVisible - Determines if the element should be animated.
 * @param {string} animationType - The type of animation to apply (e.g., 'fade', 'slide').
 * @returns {object} - Contains the ref for the animated element and the animation class.
 */
export interface AnimationProps {
  isVisible: boolean;
  animationType: 'fade' | 'slide' | 'zoom';
}

export interface UseAnimationReturn {
  ref: React.RefObject<HTMLDivElement>;
  animationClass: string;
}

export const useAnimation = ({ isVisible, animationType }: AnimationProps): UseAnimationReturn => {
  const ref = useRef<HTMLDivElement>(null);
  const animationClass = isVisible ? animate-${animationType} : '';

  useEffect(() => {
    if (ref.current) {
      // Apply 3D luxury effects based on the animation type
      ref.current.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      ref.current.style.transform = isVisible ? 'translateZ(0) scale(1)' : 'translateZ(-100px) scale(0.9)';
      ref.current.style.opacity = isVisible ? '1' : '0';
    }
  }, [isVisible]);

  return { ref, animationClass };
};