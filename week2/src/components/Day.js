import Component from "../core/component.js";
import SelectDate from "../store/SelectDate.js";

const SATURDAY = 6;
const SUNDAY = 0;

const defaultState = { selectDate: new Date(), day: new Date() };

class Day extends Component {
  constructor({ parentElement, props }) {
    super({ parentElement, state: { ...defaultState, ...props }, props });
  }
  setup() {
    SelectDate.subscribe((state) => {
      this.setState({ selectDate: state.selectDate });
    });
  }
  template() {
    const { day } = this.state;
    return `<li class="day">${day.getDate()}</li>`;
  }

  mounted() {
    const { day, selectDate } = this.state;
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
  }
}

export default Day;
