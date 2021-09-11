export function dateToYearMonth(_date) {
  const date = new Date(_date);

  return `${date.getFullYear()}년 ${toTwoDigit(date.getMonth()+1)}월`;
}

function toTwoDigit(number) {
  return number < 10 ? "0" + number : number;
}
