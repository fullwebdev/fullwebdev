export function init() {
  const input = 5.9;
  return { input };
}

// prettier-ignore
export const tests = {
doubleBitwiseNot: function ({ input }) {
  ~~input;
},
mathFloor: function ({ input }) {
  Math.floor(input);
},
};
