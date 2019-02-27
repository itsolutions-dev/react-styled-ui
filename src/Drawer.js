import styled from 'styled-components';
import Fixed from './Fixed';
import {
  getSizeOrDefault,
} from './utils/';

const transforms = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)',
};

const Drawer = styled(Fixed)`
  ${props => `
    overflow-x: hidden;
    overflow-y: auto;
    transition-property: transform;
    transition-duration: .2s;
    transition-timing-function: ease-out;
    ${/^(left|right)$/.test(props.position) ? 'width' : 'height'}: ${getSizeOrDefault(props.size, '320px')};
    ${/^(top|left|right)$/.test(props.position) ? 'top: 0;' : ''}
    ${/^(bottom|left|right)$/.test(props.position) ? 'bottom: 0;' : ''}
    ${/^(left|top|bottom)$/.test(props.position) ? 'left: 0;' : ''}
    ${/^(right|top|bottom)$/.test(props.position) ? 'right: 0;' : ''}
    transform: ${!props.open ? transforms[props.position] : 'none'};
  `};
`;

Drawer.defaultProps = {
  position: 'left',
};

export default Drawer;
