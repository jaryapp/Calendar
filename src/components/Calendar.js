import DateSelector from "./DateSelector.js";
import Month from "./Month.js";

class Calendar {
  $target;
  state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return `
    <div class="date-selector"></div>
     <div class="month"></div>
    `;
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();

    const $dateSelector = this.$target.querySelector(".date-selector");
    new DateSelector($dateSelector);

    const $month = this.$target.querySelector(".month");
    new Month($month);

    this.setEvent();
  }
}

export default Calendar;
