export default function deepMerge(master, custom) {
  const newConfig = Object.assign({}, master);
  [...Object.keys(master), ...Object.keys(custom)].forEach((x) => {
    if (
      typeof master[x] === 'object' &&
      typeof custom[x] === 'object' &&
      !Array.isArray(master[x])
    ) {
      newConfig[x] = deepMerge(master[x], custom[x]);
    } else if (master[x] !== custom[x] && typeof custom[x] !== 'undefined') {
      newConfig[x] = custom[x];
    } else if (typeof master[x] !== 'undefined') {
      newConfig[x] = master[x];
    }
  });
  return newConfig;
}
