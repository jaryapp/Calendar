import SelectDate from "../store/SelectDate.js";
import Week from "./Week.js";
import { getMonth } from "../utils/month.js";
import Component from "../core/component.js";

const defaultState = { selectDate: new Date(), weeks: [] };

class Month extends Component {
  constructor({ parentElement, props }) {
    super({ parentElement, props, state: { ...defaultState, ...props } });
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
    let template = ` 
    <div class="month"> 
      <ul class="week week-head">
        <li class="day">일</li>
        <li class="day">월</li>
        <li class="day">화</li>
        <li class="day">수</li>
        <li class="day">목</li>
        <li class="day">금</li>
        <li class="day">토</li>
      </ul>
    </div>
`;

    return template;
  }

  mounted() {
    for (const week of this.state.weeks) {
      new Week({ parentElement: this.$target, props: { days: week } });
    }
  }
}

export default Month;
