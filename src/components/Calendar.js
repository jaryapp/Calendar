import DateSelector from "./DateSelector.js";
import Month from "./Month.js";
import Component from "../core/component.js";

class Calendar extends Component {
  constructor({ parentElement, props }) {
    super({ parentElement, props });
  }
  template() {
    return `<div id="calendar"></div>`;
  }
  mounted() {
    new DateSelector({ parentElement: this.$target });
    new Month({ parentElement: this.$target });
  }
}

export default Calendar;
