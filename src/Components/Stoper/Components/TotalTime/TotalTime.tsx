import { formatTime } from "../../heplers/formatTime";

type Props = {
  mainTime: number;
};

export const TotalTime = ({ mainTime }: Props) => {
  return <h2>Stoper {formatTime(mainTime)}</h2>;
};
