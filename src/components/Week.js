import { htmlToDom } from "../utils/htmlToDom.js";
import SelectDate from "../store/SelectDate.js";
import Day from "./Day.js";

class Week {
  $target;
  state = { days: [] };
  constructor({ $target, $parent, state }) {
    this.$target = $target ? $target : htmlToDom(`<ul class="week"></ul>`);
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
    for (const day of this.state.days) {
      new Day({ $parent: this.$target, state: { day } });
    }
    if (this.$parent) this.setEvent();
  }
}

export default Week;
