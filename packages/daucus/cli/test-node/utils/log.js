import sinon from "sinon";

export class ConsoleStub {
  constructor() {
    this.logs = "";
    this.stub = sinon.stub(console, "log").callsFake(this._fakeLog.bind(this));
  }

  _fakeLog(message = "") {
    // eslint-disable-next-line no-control-regex
    this.logs += `${message}\n`.replace(new RegExp("\u001b[[0-9]+m", "g"), "");
  }

  clean() {
    this.logs = "";
  }
}
