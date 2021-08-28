import SelectDate from "../store/SelectDate.js";
import CurrentDate from "./CurrentDate.js";
import { htmlToDom } from "../utils/htmlToDom.js";

class DateSelector {
  $target;
  state = {};
  constructor({ $target, $parent, state }) {
    this.$target = $target
      ? $target
      : htmlToDom(`<div class="date-selector"></div>`);
    if (!$target) $parent.appendChild(this.$target);
    this.state = state;
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return `
      <div id="prev"> <i class="fas fa-arrow-left arrow"></i></div>
      <div class="date"></div>
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
    const $date = this.$target.querySelector(".date");
    new CurrentDate({ $target: $date });
    this.setEvent();
  }
}

export default DateSelector;
