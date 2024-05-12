import { useRef, useState } from "react";
import "./style.scss";
import { formatTime } from "./formatTime";

export const Stoper = () => {
  const [mainTime, setMainTime] = useState<number>(0);
  const [loopTime, setLoopTime] = useState<number>(0);
  const [loop, setLoop] = useState<number[]>([]);

  const intervalRef = useRef(0);

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setMainTime((prev) => prev + 10);
      setLoopTime((prev) => prev + 10);
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };
  const handleLoopTime = (loopTime: number) => {
    setLoop((prev) => [...prev, loopTime]);
    setLoopTime(0);
    console.log(loop);
  };
  const handleReset = () => {};

  return (
    <div className="stoper">
      <h1>MegaK project 2</h1>
      <h2>Stoper {formatTime(mainTime)}</h2>
      {loopTime && <p>licznik okrążenia {formatTime(loopTime)}</p>}

      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={() => handleLoopTime(loopTime)}>Loop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
