const R = require("ramda");

const createOptionsWithProp = (prop: string) =>
  R.pipe(
    R.pluck(prop),
    R.uniq,
    R.sort((a: string, b: string) => (a < b ? -1 : 1))
  );

export default createOptionsWithProp;
