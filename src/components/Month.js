import SelectDate from "../store/SelectDate.js";
import Week from "./Week.js";
import { getMonth } from "../utils/month.js";
import { htmlToDom } from "../utils/htmlToDom.js";

class Month {
  $target;
  state = { selectDate: new Date(), weeks: [] };
  constructor({ $target, $parent, state }) {
    this.$target = $target ? $target : htmlToDom(`<div class="month"></div>`);
    if (!$target) $parent.appendChild(this.$target);
    this.state = state;
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
      new Week({ parentElement: this.$target, props: { days: week } });
    }

    this.setEvent();
  }
}

export default Month;
