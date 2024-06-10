export type contextProviderType = {
  mainTime: number;
  loopTime: number;
  loops: number[];
  handleStart: () => void;
  handleStop: () => void;
  handleLoopTime: (num: number) => void;
  handleReset: () => void;
  handleHardReset: () => void;
};
