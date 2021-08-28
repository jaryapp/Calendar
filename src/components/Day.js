import { htmlToDom } from "../utils/htmlToDom.js";
import SelectDate from "../store/SelectDate.js";

const SATURDAY = 6;
const SUNDAY = 0;

class Day {
  $target;
  state = { selectDate: new Date(), day: new Date() };
  constructor({ $target, $parent, state }) {
    this.$target = $target ? $target : htmlToDom(`<li class="day"></li>`);
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
    let template = "";
    return template;
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();

    const { day, selectDate } = this.state;
    this.$target.textContent = day.getDate();

    const today = new Date();
    if (
      day.getFullYear() == today.getFullYear() &&
      day.getMonth() == today.getMonth() &&
      day.getDate() == today.getDate()
    ) {
      this.$target.classList.add("today");
    }
    if (day.getDay() == SATURDAY) {
      this.$target.classList.add("saturday");
    }
    if (day.getDay() == SUNDAY) {
      this.$target.classList.add("holiday");
    }

    if (day.getMonth() !== selectDate.getMonth()) {
      this.$target.classList.add("other-month");
    }

    this.setEvent();
  }
}

export default Day;
