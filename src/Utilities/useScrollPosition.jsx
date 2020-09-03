import { useState, useEffect } from "react";

export function getWindowScroll() {
  const { scrollX: scrollXPos, scrollY: scrollYPos } = window;
  return {
    scrollXPos,
    scrollYPos,
  };
}

export default function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(getWindowScroll());

  useEffect(() => {
    function handleScroll() {
      setWindowScroll(getWindowScroll());
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowScroll;
}
