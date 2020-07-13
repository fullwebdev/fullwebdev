export const init = function () {
  class A {
    constructor(foo) {
      this.foo = foo;
    }
  }
  class B {
    constructor(foo) {
      this.foo = foo;
    }
  }
  return { A, B };
};

// prettier-ignore
export const tests = {
byProp: function ({A, B}) {
  const byProp = [{type: 'A', foo: 1}, {type: 'B', foo: 2}];
  let count = 0;
  if (byProp[0].type === 'A') {
    count++
  }
  if (byProp[1].type !== 'B') {
    count--;
  }
},
byClass: function ({A, B}) {
  const byClass = [new A(1), new B(2)];
  let count = 0;
  if (byClass[0] instanceof A) {
    count++
  }
  if (!(byClass[1] instanceof B)) {
    count--;
  }
},
};
