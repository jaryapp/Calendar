import SelectDate from "../store/SelectDate.js";
import { getMonth } from "../utils/month.js";

class Month {
  $target;
  state = { selectDate: new Date() };
  weeks = [];
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {
    SelectDate.subscribe((state) => {
      this.setState({ selectDate: state.selectDate });
    });
  }
  template() {
    const selectDate = this.state.selectDate;
    const weeks = getMonth(selectDate);

    let template = ` <ul class="week week-head">
    <li class="day">일</li>
    <li class="day">월</li>
    <li class="day">화</li>
    <li class="day">수</li>
    <li class="day">목</li>
    <li class="day">금</li>
    <li class="day">토</li>
</ul>`;

    for (let i = 0; i < weeks.length; i++) {
      const week = weeks[i];
      let weekTemplate = `<ul class="week">`;

      for (const day of week) {
        weekTemplate += `<li class="day ${
          day.getMonth() != selectDate.getMonth() ? "next-month" : ""
        }
          ${day.getDay() == 6 ? "saturday" : ""}
          ${day.getDay() == 0 ? "holiday" : ""}
          ${
            day.getMonth() == selectDate.getMonth() &&
            day.getDate() == selectDate.getDate()
              ? "today"
              : ""
          }
        ">${day.getDate()}</li>`;
      }
      weekTemplate += `</ul>`;
      template += weekTemplate;
    }

    return template;
  }

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.$target.innerHTML = this.template();

    this.setEvent();
  }
}

export default Month;
