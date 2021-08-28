import SelectDate from "../store/SelectDate.js";
import { dateToYearMonth } from "../utils/dateFormat.js";
import { htmlToDom } from "../utils/htmlToDom.js";

class CurrentDate {
  $target;
  state = {
    selectDate: new Date(),
  };
  constructor({ $target, $parent, state }) {
    this.$target = $target ? $target : htmlToDom(`<div class="date"></div>`);
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
    return ``;
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.$target.textContent = dateToYearMonth(this.state.selectDate);
    this.setEvent();
  }
}

export default CurrentDate;
