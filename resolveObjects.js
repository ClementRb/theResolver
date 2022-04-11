function resolveObjects(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (typeof object[key] !== "object" && !Array.isArray(object[key])) {
        const splited = key.split(".");
        const newObj = {};
        splited.reduce((prev, current, index) => {
          if (index === splited.length - 1) {
            return (prev[current] = object[key]);
          }
          return (prev[current] = {});
        }, newObj);
        console.log(newObj);
      }
    }
  }
}

const input = {
  a: {
    b: {
      c: "z",
    },
  },
  "a.b.d": "y",
};

resolveObjects(input);

module.exports = resolveObjects;
