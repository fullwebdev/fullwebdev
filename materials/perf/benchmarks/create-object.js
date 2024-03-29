export const init = function () {
  class TestObject {
    constructor(foo, bar, baz) {
      this.foo = foo;
      this.bar = bar;
      this.baz = baz;
    }
  }
  return { TestObject };
};

// prettier-ignore
export const tests = {
new ({ TestObject }) {
  const testObj = new TestObject(1, 'bar', ['baz', 'zab', 'abz']);
},
literal ({ TestObject }) {
  const testObj = { foo: 1, bar: 'bar', baz: ['baz', 'zab', 'abz'] };
},
affect ({ TestObject }) {
  const testObj = {};
  testObj.foo = 1;
  testObj.bar = 'bar';
  testObj.baz = ['baz', 'zab', 'abz'];
},
};
