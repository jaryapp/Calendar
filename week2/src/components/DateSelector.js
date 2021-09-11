import SelectDate from "../store/SelectDate.js";
import CurrentDate from "./CurrentDate.js";
import Component from "../core/component.js";

class DateSelector extends Component {
  constructor({ parentElement, props }) {
    super({ parentElement, props });
  }
  template() {
    return `
      <div class="date-selector">
        <div id="prev"> <i class="fas fa-arrow-left arrow"></i></div>
        <div class="date"></div>
        <div id="next"> <i id="next" class="fas fa-arrow-right arrow"></i></div>
      </div>
      `;
  }

  mounted() {
    const $date = this.$target.querySelector(".date");
    new CurrentDate({ parentElement: $date });
    
    this.addEvent("click", "#prev", () => {
      SelectDate.prevMonth();
    });
    this.addEvent("click", "#next", () => {
      SelectDate.nextMonth();
    });
  }
}

export default DateSelector;
