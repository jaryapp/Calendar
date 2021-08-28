import SelectDate from "../store/SelectDate.js";
import Week from "./Week.js";
import { getMonth } from "../utils/month.js";

class Month {
  $target;
  state = { selectDate: new Date(), weeks: [] };
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {
    SelectDate.subscribe((state) => {
      this.setState({
        selectDate: state.selectDate,
        weeks: getMonth(state.selectDate),
      });
    });
  }
  template() {
    let template = ` <ul class="week week-head">
    <li class="day">일</li>
    <li class="day">월</li>
    <li class="day">화</li>
    <li class="day">수</li>
    <li class="day">목</li>
    <li class="day">금</li>
    <li class="day">토</li>
</ul>`;

    return template;
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();

    for (const week of this.state.weeks) {
      new Week({ $parent: this.$target, state: { days: week } });
    }

    this.setEvent();
  }
}

export default Month;
