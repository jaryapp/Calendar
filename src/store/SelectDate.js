import Observable from "./Observable.js";
const defaultState = {
  selectDate: new Date(),
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
