import { useContext } from "react";
import { formatTime } from "../../heplers/formatTime";
import { useSortLoops } from "../../hooks/useSortLoops";
import { StoperContext } from "../../Stoper";

import "./style.scss";

export const ResultView = () => {
  const { mainTime, loops, handleHardReset } = useContext(StoperContext);
  const { averageLoopTime, fastestLoop, slowestLoop } = useSortLoops(loops);
  return (
    <div className="result">
      <p>Łączny czas {formatTime(mainTime)}</p>
      <p>Średni czas {formatTime(averageLoopTime)}</p>
      <p>liczba okrążeń {loops.length}</p>
      <p>najszybsze okrążenie {formatTime(fastestLoop)}</p>
      <p>najwolniejsze okrążenie {formatTime(slowestLoop)}</p>
      <button onClick={handleHardReset}>Powrót</button>
    </div>
  );
};
