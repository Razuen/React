import React, { useEffect, useState } from "react";
import Chip from "../chip/Chip";

function Timer(props) {
  console.log("Timer");

  const [timer, settimer] = useState(props.initialValue);
  useEffect(() => {
    const interval = setInterval(() => {
      settimer((time) => time + props.countDown);
    }, props.timeInterval);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return <Chip heading="SESSION TIME" text={timer + " MIN"} />;
}

export default Timer;
