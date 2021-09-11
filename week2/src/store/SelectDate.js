import Observable from "./Observable.js";
const currentMonth = new Date();
currentMonth.setDate(1);

const defaultState = {
  selectDate: currentMonth,
};

class SelectDate extends Observable {
  constructor(state) {
    super(state);
  }

  prevMonth() {
    const state = this.getState();
    state.selectDate.setMonth(state.selectDate.getMonth() - 1);

    this.setState(state);
  }

  nextMonth() {
    const state = this.getState();
    state.selectDate.setMonth(state.selectDate.getMonth() + 1);

    this.setState(state);
  }
}

export default new SelectDate(defaultState);
