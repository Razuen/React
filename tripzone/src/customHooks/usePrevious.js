import { useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [ref]);

  const setPrevious = (value) => {
    ref.current = value;
  };

  const resetPrevious = () => {
    ref.current = null;
  };
  return [ref.current, setPrevious, resetPrevious];
}

export default usePrevious;
