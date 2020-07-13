export const init = function () {
  class ByProp {
    constructor(type, foo) {
      this.type = type;
      this.foo = foo;
    }
  }
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
  const byProp = [new ByProp("A", 1), new ByProp("B", 2)];
  const byClass = [new A(1), new B(2)];
  return { byProp, byClass, clazz: { A, B } };
};

// prettier-ignore
export const tests = {
byProp: function ({ byProp, byClass, clazz: {A, B} }) {
  let count = 0;
  if (byProp[0].type === 'A') {
    count++
  }
  if (byProp[1].type !== 'B') {
    count--;
  }
},
byClass: function ({ byProp, byClass, clazz: {A, B} }) {
  let count = 0;
  if (byClass[0] instanceof A) {
    count++
  }
  if (!(byClass[1] instanceof B)) {
    count--;
  }
},
};
