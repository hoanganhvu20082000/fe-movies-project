import { useEffect, useState } from "react";

export const useViewport = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerHeight || document.documentElement.clientWidth
  );
  useEffect(() => {
    const handleWindowWidth = () => {
      const width = window.innerHeight || document.documentElement.clientWidth;
      setWindowWidth(width);
    };
    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);
  return [windowWidth];
};
