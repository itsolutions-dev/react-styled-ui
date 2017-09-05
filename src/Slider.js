import styled, { css } from './styledComponent';
import {
  getBorder,
  getBackgroundColor,
} from './utils/';

const Slider = styled({
  component: 'input',
  style: css`
    display: block;
    cursor: pointer;
    color: inherit;
    border-radius: 99999px;
    appearance: none;
    height: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: ${props => getBorder(props)};

    &::-webkit-slider-thumb {
      width: 16px;
      height: 16px;
      background-color: currentcolor;
      border: 0;
      border-radius: 99999px;
      appearance: none;
      color: ${props => getBackgroundColor(props)};
    }

    &:active::-webkit-slider-thumb {
      width: 20px;
      height: 20px;
    }

    &:focus {
      outline: none;

      &::-webkit-slider-thumb { }
    }
  }
  `,
  props: {
    type: 'range',
  },
});

Slider.defaultProps = {
  primary: true,
};

export default Slider;
