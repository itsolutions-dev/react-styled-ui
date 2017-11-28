export default function getOpacity(props, defaultOpacity = 1) {
  let { opacity } = props;
  if (props.disabled === true || props.readOnly === true) {
    opacity = 0.5;
  } else if (opacity === undefined) {
    opacity = defaultOpacity;
  }
  return opacity;
}
