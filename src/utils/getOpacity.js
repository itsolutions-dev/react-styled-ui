export default function getOpacity(props) {
  let { opacity } = props;
  if (props.disabled === true || props.readOnly === true) {
    opacity = 0.5;
  } else if (opacity === undefined) {
    opacity = 1;
  }
  return opacity;
}
