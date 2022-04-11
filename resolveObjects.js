function resolveObjects(object) {
  let finalObj = {};
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (typeof object[key] !== "object" && !Array.isArray(object[key])) {
        const splited = key.split(".");
        const newObj = {};
        splited.reduce((prev, current) => (prev[current] = {}), newObj);
        console.log(newObj);
        finalObj = { ...newObj };
      }
    }
  }
  console.log(finalObj);
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
