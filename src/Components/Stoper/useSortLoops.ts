import { useState } from "react";

type LoopsType = {
  averageLoopTime: number;
};

export const useSortLoops = (loop: number[]) => {
  const [sortLoops, setsortLoops] = useState<LoopsType>();

  setsortLoops({
    averageLoopTime: loop.reduce((acc, curr) => acc + curr, 0) / loop.length,
  });

  return sortLoops;
};
