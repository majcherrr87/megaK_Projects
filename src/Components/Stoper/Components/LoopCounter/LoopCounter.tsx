import { formatTime } from "../../heplers/formatTime";

type Props = {
  loopTime: number;
};

export const LoopCounter = ({ loopTime }: Props) => {
  return <p>licznik okrążenia {formatTime(loopTime)}</p>;
};
