import { useState, useEffect } from "react";

export function getMaxSize() {
  const { clientHeight: docHeight, clientWidth: docWidth } = document.body;
  return {
    docHeight,
    docWidth,
  };
}

export default function useMaxSize() {
  const [windowMaxSize, setMaxSize] = useState(getMaxSize());

  useEffect(() => {
    function handleMaxSize() {
      setMaxSize(getMaxSize());
    }

    window.addEventListener("resize", handleMaxSize());
    return () => window.removeEventListener("resize", handleMaxSize);
  }, []);

  return windowMaxSize;
}
