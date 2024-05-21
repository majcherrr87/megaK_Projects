export const formatTime = (time: number) => {
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const lastSeconds = seconds % 60;
  const milisecondsFormat = (time % 1000) / 10;

  return `
  ${minutes.toString().padStart(2, "0")}:${lastSeconds
    .toString()
    .padStart(2, "0")}:${milisecondsFormat.toString().padStart(2, "0")}`;
};
