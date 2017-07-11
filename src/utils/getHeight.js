const getHeight = (props) => {
  let height = props.theme.dimensions.height.medium;
  if (props.large === true) {
    height = props.theme.dimensions.height.large;
  } else if (props.small === true) {
    height = props.theme.dimensions.height.small;
  }
  return height;
};

export default getHeight;
