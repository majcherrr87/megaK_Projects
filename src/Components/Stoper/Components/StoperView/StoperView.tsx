import { useContext } from "react";
import { formatTime } from "../../heplers/formatTime";
import { LoopCounter } from "../LoopCounter/LoopCounter";
import { TotalTime } from "../TotalTime/TotalTime";
import { StoperContext } from "../../Stoper";
import { kotType } from "../../Stoper";

export const StoperView = () => {
  const {
    mainTime,
    loops,
    loopTime,
    handleLoopTime,
    handleReset,
    handleStart,
    handleStop,
  } = useContext<kotType>(StoperContext);
  return (
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
  );
};
