// 6 = Saturday, 0 = Sunday

const SATURDAY = 6;
const SUNDAY = 0;

export function getMonth(date) {
  const beforeMonth = new Date(date);
  const nextMonth = new Date(date);

  beforeMonth.setMonth(date.getMonth() - 1);
  nextMonth.setMonth(date.getMonth() + 1);

  const beforeMonthLastWeek = getLastWeek(beforeMonth);
  const nextMonthFirstWeek = getFirstWeek(nextMonth);
  const month = getWeeks(date);

  if (month[0].length < 7) {
    const temp = [...beforeMonthLastWeek, ...month[0]];
    month[0] = temp;
  }

  const lastIndex = month.length - 1;
  if (month[lastIndex].length < 7) {
    const temp = [...month[lastIndex], ...nextMonthFirstWeek];
    month[lastIndex] = temp;
  }

  return month;
}

function getWeeks(_date) {
  const weeks = [];
  const date = new Date(_date);
  date.setDate(1);

  let week = [];
  while (true) {
    week.push(new Date(date));

    date.setDate(date.getDate() + 1);

    if (date.getMonth() != _date.getMonth()) {
      weeks.push(week);
      week = [];
      break;
    }

    if (date.getDay() == SUNDAY) {
      weeks.push(week);
      week = [];
    }
  }

  return weeks;
}

function getLastWeek(date) {
  const weeks = getWeeks(date);

  return weeks[weeks.length - 1];
}

function getFirstWeek(date) {
  const weeks = getWeeks(date);

  return weeks[0];
}

// const today = new Date();

// console.log(getMonth(today));
