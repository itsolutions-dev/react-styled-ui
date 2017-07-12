const getSizeOrDefault = (size, def) => {
  let result = def;
  if (typeof size === 'string') {
    result = size;
  } else if (typeof size === 'number') {
    result = `${size}px`;
  }
  return result;
};

export default getSizeOrDefault;
