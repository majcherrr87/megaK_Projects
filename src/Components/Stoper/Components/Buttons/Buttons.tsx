import { useContext } from "react";
import { StoperContext } from "../../Stoper";
import { Button } from "../Button/Button";
import "./style.scss";

export const Buttons = () => {
  const { loopTime, handleLoopTime, handleReset, handleStart, handleStop } =
    useContext(StoperContext);

  return (
    <div className="buttons">
      <Button text="Start" onClick={handleStart} role="PrimaryAction" />
      <Button text="Stop" onClick={handleStop} role="PrimaryAction" />
      <Button
        text="Loop"
        onClick={() => handleLoopTime(loopTime)}
        role="PrimaryAction"
      />
      <Button text="Reset" onClick={handleReset} role="PrimaryAction" />
    </div>
  );
};
