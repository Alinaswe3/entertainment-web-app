import {useState, useEffect} from "react";

/**
 * Gets the current browser window width and height
 */
function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}

/**
 * A custom hook that returns the browser dimensions,
 * stores the dimensions as state, and
 * listens for any changes in the browser width
 */
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({});

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Listens for any changes in the browser window dimensions
    window.addEventListener("resize", handleResize);

    // Make sure event listener is removed when component is unmounted
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
