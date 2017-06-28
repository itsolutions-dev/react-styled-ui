import defaultTheme from './theme';
import deepMerge from './utils/deepMerge';

const getTheme = deepMerge.bind(null, defaultTheme);

export default getTheme;
