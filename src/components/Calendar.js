import DateSelector from "./DateSelector.js";
import Month from "./Month.js";
import { htmlToDom } from "../utils/htmlToDom.js";

class Calendar {
  $target;
  state;
  constructor({ $target, $parent, state }) {
    this.$target = $target ? $target : htmlToDom(`<div id="calendar"></div>`);
    if (!$target) $parent.appendChild(this.$target);
    this.state = state;
    this.setup();
    this.render();
  }
  setup() {}
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

    new DateSelector({ $parent: this.$target });
    new Month({ $parent: this.$target });

    this.setEvent();
  }
}

export default Calendar;
