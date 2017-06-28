// @flow

export default function getProperty(propertyName: string, props: Object) {
  let prop = propertyName !== '' ? propertyName : 'background';
  prop = `${prop.charAt(0).toLowerCase()}${prop.slice(1)}Color`;
  if (props[prop] !== undefined) {
    return props[prop];
  }

  prop = `default${propertyName}`;
  if (props.primary === true) {
    prop = `primary${propertyName}`;
  } else if (props.secondary === true) {
    prop = `secondary${propertyName}`;
  }
  return props.theme.palette[prop];
}
