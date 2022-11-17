import { useState, useEffect } from 'react';

// 建立 custom hook 都要以 useXXXXXX 開頭
const useCounter = (forwardsFlag = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwardsFlag) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwardsFlag]);

  return counter
};

export default useCounter;
