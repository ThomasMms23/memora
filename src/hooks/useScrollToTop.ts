import { useCallback } from "react";

/**
 * Hook pour scroller en haut de la page avec animation smooth
 */
export function useScrollToTop() {
  return useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
}



