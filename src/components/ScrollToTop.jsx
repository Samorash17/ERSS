import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple fallback methods to ensure scrolling works
    const scrollToTop = () => {
      // Method 1: Standard scrollTo
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }
      
      // Method 2: Fallback for older browsers
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      
      // Method 3: Body fallback
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // Use requestAnimationFrame for better performance
    const timer = requestAnimationFrame(() => {
      scrollToTop();
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;