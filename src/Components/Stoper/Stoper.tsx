import { useRef, useState, createContext } from "react";
import { StoperView } from "./View/StoperView/StoperView";
import { contextProviderType } from "./types/types";
import { ResultView } from "./View/ResultView/ResultView";
import "./style.scss";

const contextInitialValue = {
  mainTime: 0,
  loopTime: 0,
  loops: [],
  handleStart: () => {},
  handleStop: () => {},
  handleLoopTime: () => {},
  handleReset: () => {},
};

export const StoperContext =
  createContext<contextProviderType>(contextInitialValue);

export const Stoper = () => {
  const [mainTime, setMainTime] = useState<number>(0);
  const [loopTime, setLoopTime] = useState<number>(0);
  const [isViewResult, setIsViewResult] = useState(false);
  const [loops, setLoops] = useState<number[]>([]);

  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setMainTime((prev) => prev + 10);
      setLoopTime((prev) => prev + 10);
    }, 10);
  };
  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setLoops((prev) => [...prev, loopTime]);
      setIsViewResult(true);
    }
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
    <StoperContext.Provider
      value={{
        mainTime,
        loopTime,
        loops,
        handleStart,
        handleStop,
        handleLoopTime,
        handleReset,
      }}
    >
      <div className="main">
        <h1>MegaK project 2</h1>

        {isViewResult ? <ResultView /> : <StoperView />}
      </div>
    </StoperContext.Provider>
  );
};
