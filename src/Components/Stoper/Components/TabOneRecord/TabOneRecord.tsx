import { formatTime } from "../../heplers/formatTime";

type Props = {
  loop: number;
  index: number;
};

export const TabOneRecord = ({ loop, index }: Props) => {
  return <li key={index}>{formatTime(loop)}</li>;
};
