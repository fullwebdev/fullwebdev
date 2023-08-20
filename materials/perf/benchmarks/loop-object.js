export function init() {
  const data = {};

  for (let k = 0; k < 15; k += 1) {
    data[k] = `user ${k}`;
  }

  return { data };
}

// prettier-ignore
export const tests = {
forIn ({ data }) {
  const copy = {};
  for (const key in data) {
    copy[key] = data[key];
  }
},
objectKeys ({ data }) {
  const copy = {}
  Object.keys(data).forEach((element, index, array) => {
    copy[element] = data[element];
  });
},
while ({ data }) {
  const copy = [];
  const keys = Object.keys(data);
  let i = 0;
  while (i < keys.length) {
    const prop = keys[i];
    copy[prop] = data[prop];
    i += 1;
  }
},
for ({ data }) {
  const copy = [];
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i += 1) {
    const prop = keys[i];
    copy[prop] = data[prop];
  }
}
};
