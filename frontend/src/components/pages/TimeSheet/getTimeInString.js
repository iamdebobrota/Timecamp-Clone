function getTimeInString(seconds) {
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60) % 60;
  const hr = Math.floor(seconds / (60 * 60));
  return `${hr > 9 ? hr + "-hr" : "0" + hr + "-hr"} : ${
    min > 9 ? min + "-mins" : "0" + min + "-mins"
  }:${sec > 9 ? sec + "-sec" : "0" + sec + "-sec"}`;
}
function getTimeInStringWithoutHr(seconds) {
  const sec = seconds % 60;
  const min = Math.floor(seconds / 60) % 60;
  const hr = Math.floor(seconds / (60 * 60));
  return `${hr > 9 ? hr : "0" + hr} : ${min > 9 ? min : "0" + min}:${
    sec > 9 ? sec : "0" + sec
  }`;
}
export { getTimeInString, getTimeInStringWithoutHr };
