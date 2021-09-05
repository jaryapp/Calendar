import DateSelector from "./DateSelector.js";
import Month from "./Month.js";
import Component from "../core/component.js";

class Calendar extends Component {
  constructor({ parentElement, props }) {
    super({ parentElement, props });
  }
  setup() {}
  template() {
    return `<div id="calendar"></div>`;
  }

  mounted() {
    new DateSelector({ $parent: this.$target });
    new Month({ parentElement: this.$target });
  }
}

export default Calendar;
