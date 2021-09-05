import { htmlToDom } from "../utils/htmlToDom.js";

class Component {
  $target;
  $parent;
  props;
  state;
  constructor({ parentElement, state, props }) {
    this.state = state;
    this.props = props;
    this.$target = htmlToDom(this.template());
    this.$parent = parentElement;
    this.setup();
    this.setEvent();
    this.render();
  }

  // interface start
  setup() {}
  template() {}
  setEvent() {}
  mounted() {}
  // interface end

  render() {
    this.$parent.appendChild(this.$target);
    this.mounted();
  }
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}

export default Component;
