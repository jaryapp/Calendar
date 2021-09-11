import SelectDate from "../store/SelectDate.js";
import { dateToYearMonth } from "../utils/dateFormat.js";
import Component from "../core/component.js";

const defaultState = { selectDate: new Date() };

class CurrentDate extends Component {
  constructor({ parentElement, props }) {
    super({ parentElement, props, state: defaultState });
  }
  setup() {
    SelectDate.subscribe((state) => {
      this.setState({ selectDate: state.selectDate });
    });
  }
  template() {
    return `<span>${dateToYearMonth(this.state.selectDate)}</span>`;
  }
}

export default CurrentDate;
