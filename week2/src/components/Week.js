import Component from "../core/component.js";
import Day from "./Day.js";

const defaultState = { days: [] };

class Week extends Component {
  constructor({ parentElement, props }) {
    super({ parentElement, props, state: { ...defaultState, ...props } });
  }

  template() {
    return `<ul class="week"></ul>`;
  }

  mounted() {
    this.state.days.forEach((day) => {
      new Day({ parentElement: this.$target, props: { day } });
    });
  }
}

export default Week;
