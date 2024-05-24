import { useContext } from "react";
import { LoopCounter } from "../../Components/LoopCounter/LoopCounter";
import { TotalTime } from "../../Components/TotalTime/TotalTime";
import { StoperContext } from "../../Stoper";
import { Buttons } from "../../Components/Buttons/Buttons";
import { TabLoops } from "../../Components/TabLoops/TabLoops";
import "./style.scss";

export const StoperView = () => {
  const { mainTime, loops, loopTime } = useContext(StoperContext);
  return (
    <div className="stoper">
      <TotalTime mainTime={mainTime} />
      <LoopCounter loopTime={loopTime} />

      <Buttons />

      <TabLoops loops={loops} />
    </div>
  );
};
