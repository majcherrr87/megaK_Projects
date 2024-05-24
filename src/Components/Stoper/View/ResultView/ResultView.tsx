import { useContext } from "react";
import { formatTime } from "../../heplers/formatTime";
import { useSortLoops } from "../../hooks/useSortLoops";
import { StoperContext } from "../../Stoper";

export const ResultView = () => {
  const { mainTime, loops } = useContext(StoperContext);
  const { averageLoopTime, fastestLoop, slowestLoop } = useSortLoops(loops);
  return (
    <div>
      <p>Łączny czas {formatTime(mainTime)}</p>
      <p>Średni czas {formatTime(averageLoopTime)}</p>
      <p>liczba okrążeń {loops.length}</p>
      <p>najszybsze okrążenie {formatTime(fastestLoop)}</p>
      <p>najwolniejsze okrążenie {formatTime(slowestLoop)}</p>
    </div>
  );
};
