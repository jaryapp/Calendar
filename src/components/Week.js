import { htmlToDom } from "../utils/htmlToDom.js";
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
  setup() {}
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
    console.log(this.state.days.length);
    for (const day of this.state.days) {
      new Day({ parentElement: this.$target, props: { day } });
    }
    this.setEvent();
  }
}

export default Week;
