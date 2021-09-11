class Observable {
  subscribers = [];
  state = null;
  constructor(defaultState) {
    this.state = defaultState;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    this.notify();
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
    subscriber(this.state);
  }

  notify() {
    for (const subscriber of this.subscribers) {
      subscriber(this.state);
    }
  }
  unsubscribe(subscriber) {
    // Later
  }
}

export default Observable;
