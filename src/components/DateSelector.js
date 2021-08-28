import SelectDate from "../store/SelectDate.js";
import { dateToYearMonth } from "../utils/dateFormat.js";

class DateSelector {
  $target;
  state = {
    selectDate: new Date(),
  };
  constructor({ $target, $parent, state }) {
    this.$target = $target
      ? $target
      : htmlToDom(`<div class="date-selector"></div>`);
    if (!$target) $parent.appendChild(this.$target);
    this.state = state;
    this.setup();
    this.render();
  }
  setup() {
    SelectDate.subscribe((state) => {
      this.setState({ selectDate: state.selectDate });
    });
  }
  template() {
    return `
      <div id="prev"> <i class="fas fa-arrow-left arrow"></i></div>
      <div class="date">${dateToYearMonth(this.state.selectDate)}</div>
      <div id="next"> <i id="next" class="fas fa-arrow-right arrow"></i></div>
      `;
  }

  setEvent() {
    const $prev = this.$target.querySelector("#prev");
    const $next = this.$target.querySelector("#next");

    $prev.addEventListener("click", () => {
      SelectDate.prevMonth();
    });

    $next.addEventListener("click", () => {
      SelectDate.nextMonth();
    });
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
}

export default DateSelector;
