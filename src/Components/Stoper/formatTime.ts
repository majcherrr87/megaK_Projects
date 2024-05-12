export const formatTime = (time: number) => {
  const timeMinute = Math.floor(time / 1000 / 60);
  const minute = timeMinute < 10 ? `0${timeMinute}` : timeMinute;

  const timeSecond = Math.floor(time / 1000);
  const second =
    timeSecond < 10 ? `0${timeSecond}` : timeSecond >= 60 ? "00" : timeSecond;

  const timeMiliSecond = (time - timeMinute - timeSecond * 1000) / 10;
  const miliSecond = timeMiliSecond < 10 ? "00" : timeMiliSecond;

  return `${minute}:${second}:${miliSecond}`;
};
