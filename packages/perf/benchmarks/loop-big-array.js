export function init() {
  const data = "x".repeat(1000).split("");
  return { data };
}

// prettier-ignore
export const tests = {
forOf: function ({ data }) {
  const copy = [];
  for (let d of data) {
    copy.push(d);
  }
},
forEach: function ({ data }) {
  const copy = [];
  data.forEach((d) => {
    copy.push(d);
  });
},
for: function ({ data }) {
  const copy = [];
  for (let i = 0; i < data.length; i++) {
    copy.push(data[i]);
  }
},
spread: function ({ data }) {
  const copy = [...data];
}
};
