export function init() {
  const data = {};

  for (let k = 0; k < 15; k++) {
    data[k] = "user " + k;
  }

  return { data };
}

// prettier-ignore
export const tests = {
forIn: function ({ data }) {
  const copy = {};
  for (let key in data) {
    copy[key] = data[key];
  }
},
objectKeys: function ({ data }) {
  const copy = {}
  Object.keys(data).forEach((element, index, array) => {
    copy[element] = data[element];
  });
},
while: function ({ data }) {
  const copy = [];
  const keys = Object.keys(data);
  let i = 0;
  while (i < keys.length) {
    const prop = keys[i];
    copy[prop] = data[prop];
    i++;
  }
},
for: function ({ data }) {
  const copy = [];
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const prop = keys[i];
    copy[prop] = data[prop];
  }
}
};
