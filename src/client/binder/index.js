class Binder {
  static bind(eventObj = {}) {
    if (window && window.addEventListener) {
      Object.entries(eventObj).forEach(([type, reducer]) =>
        window.addEventListener(type, attr => reducer(attr), false)
      );
      Window.prototype.dispatch = Binder.dispatch;
    }
  }
  static dispatch(event = {}) {
    if (window && window.dispatchEvent) {
      const { type, ...attr } = event;
      const e = Object.assign(new Event(type), attr);
      window.dispatchEvent(e);
    }
  }
}
export default Binder;
