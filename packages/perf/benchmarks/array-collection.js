export const init = function () {
  const data = ["aaa", "aab", "aba", "abb", "baa", "bab", "bba", "bbb"];
  return { data };
};

// prettier-ignore
export const tests = {
mapSpread: function ({ data }) {
  const map = new Map();
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    map.set(d[0], [...map.get(d[0]) || [], d])
  }
},
mapIf: function ({ data }) {
  const map = new Map();
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    if (!map.has(d[0])) {
      map.set(d[0], [d]);
    } else {
      map.set(d[0], [...map.get(d[0]), d])
    }
  }
},
objectSpread: function ({ data }) {
  const map = {};
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    map[d[0]] = [...map[d[0]] || [], d]
  }
},
objectIf: function ({ data }) {
  const map = {};
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    if (!map[d[0]]) {
      map[d[0]] = []
    }
    map[d[0]].push(d);
  }
},
};
