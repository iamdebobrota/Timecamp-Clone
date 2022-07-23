import React from "react";
import { getTimeInString } from "./getTimeInString";

export default function SetInterval_TitleChange({ initial = 0, end }) {
  const [isRunning, setIsRunning] = React.useState(false);
  const [time, setTime] = React.useState(initial);
  const timer = React.useRef();
  const timeout = React.useRef();

  const startTimerInterval = () => {
    if (isRunning) {
      return null;
    }
    timer.current = setInterval(() => {
      setTime((prev) => prev + 1);
      setIsRunning(true);
    }, 1000);
    document.title = getTimeInString(time);
  };
  if (isRunning && end == time) {
    clearInterval(timer.current);
  }
  const stopTimer = () => {
    clearInterval(timer.current);
    setIsRunning(false);
  };

  // document.title = getTimeInString(time);
  React.useEffect(() => {
    return () => stopTimer();
  }, []);

  return (
    <div>
      <button>Reset</button>
      <h1>{getTimeInString(time)}</h1>
      <button onClick={isRunning ? stopTimer : startTimerInterval}>
        {isRunning ? "stop" : "start"}
      </button>
    </div>
  );
}
