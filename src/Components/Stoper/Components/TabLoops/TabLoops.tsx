import { TabOneRecord } from "../TabOneRecord/TabOneRecord";
import "./style.scss";

type Props = {
  loops: number[];
};

export const TabLoops = ({ loops }: Props) => {
  return (
    <div className="tabLoops">
      <ol>
        {loops.map((loop, index) => (
          <TabOneRecord loop={loop} index={index} />
        ))}
      </ol>
    </div>
  );
};
