export function init() {
  const data = "x".repeat(1000).split("");
  return { data };
}

// prettier-ignore
export const tests = {
forOf ({ data }) {
  const copy = [];
  for (const d of data) {
    copy.push(d);
  }
},
forEach ({ data }) {
  const copy = [];
  data.forEach((d) => {
    copy.push(d);
  });
},
for ({ data }) {
  const copy = [];
  for (let i = 0; i < data.length; i += 1) {
    copy.push(data[i]);
  }
},
spread ({ data }) {
  const copy = [...data];
}
};
