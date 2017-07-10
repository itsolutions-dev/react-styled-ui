import hexToRgb from './hexToRgb';

const getColorWithAlpha = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

export default getColorWithAlpha;
