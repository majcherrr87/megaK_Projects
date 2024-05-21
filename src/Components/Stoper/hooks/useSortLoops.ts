export const useSortLoops = (loop: number[]) => {
  const averageLoopTime =
    loop.reduce((acc, curr) => acc + curr, 0) / loop.length;
  const sortLoops = loop.sort((a, b) => a - b);

  return {
    averageLoopTime,
    fastestLoop: sortLoops[0],
    slowestLoop: sortLoops[sortLoops.length - 1],
  };
};
