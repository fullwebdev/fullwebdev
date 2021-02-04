export function init() {
  const input = 5.9;
  return { input };
}

// prettier-ignore
export const tests = {
doubleBitwiseNot ({ input }) {
  ~~input;
},
mathFloor ({ input }) {
  Math.floor(input);
},
};
