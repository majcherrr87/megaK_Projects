import { useRef, useState } from "react";
import { formatTime } from "./heplers/formatTime";
import { useSortLoops } from "./hooks/useSortLoops";
import "./style.scss";
import { TotalTime } from "./Components/TotalTime/TotalTime";
import { LoopCounter } from "./Components/LoopCounter/LoopCounter";

export const Stoper = () => {
  const [mainTime, setMainTime] = useState<number>(0);
  const [loopTime, setLoopTime] = useState<number>(0);
  const [runTime, setRunTime] = useState(false);
  const [isViewResult, setIsViewResult] = useState(false);
  const [loops, setLoops] = useState<number[]>([]);
  const { averageLoopTime, fastestLoop, slowestLoop } = useSortLoops(loops);

  const intervalRef = useRef(0);

  const handleStart = () => {
    if (runTime) return;
    intervalRef.current = setInterval(() => {
      setMainTime((prev) => prev + 10);
      setLoopTime((prev) => prev + 10);
      setRunTime(true);
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
    setLoops((prev) => [...prev, loopTime]);
    setRunTime(false);
    setIsViewResult(true);
  };
  const handleLoopTime = (loopTime: number) => {
    setLoops((prev) => [...prev, loopTime]);
    setLoopTime(0);
  };
  const handleReset = () => {
    setMainTime(0);
    setLoopTime(0);
    setLoops([]);
  };

  return (
    <div className="main">
      <h1>MegaK project 2</h1>
      {isViewResult ? (
        <div>
          <p>Łączny czas {formatTime(mainTime)}</p>
          <p>Średni czas {formatTime(averageLoopTime)}</p>
          <p>liczba okrążeń {loops.length}</p>
          <p>najszybsze okrążenie {formatTime(fastestLoop)}</p>
          <p>najwolniejsze okrążenie {formatTime(slowestLoop)}</p>
        </div>
      ) : (
        <div className="stoper">
          <TotalTime mainTime={mainTime} />
          <LoopCounter loopTime={loopTime} />

          <div className="buttons">
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={() => handleLoopTime(loopTime)}>Loop</button>
            <button onClick={handleReset}>Reset</button>
          </div>

          <div className="tabLoop">
            <ol>
              {loops.map((loop, index) => (
                <li key={index}>{formatTime(loop)}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
