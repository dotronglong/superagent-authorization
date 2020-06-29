class Request {
  constructor() {
    this.headers = {};
  }

  set(key, value) {
    this.headers[key] = value;
  }

  get(key) {
    return this.headers[key];
  }
}

module.exports = Request;