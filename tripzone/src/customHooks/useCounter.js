import { useEffect, useState } from "react";

function useCounter(initialValue, incrementValue) {
  const [count, setcount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setcount(count + incrementValue);
    }, 60000);
    return () => {
      clearInterval(interval);
    }
  }, [count]);
  return count;
}

export { useCounter };
