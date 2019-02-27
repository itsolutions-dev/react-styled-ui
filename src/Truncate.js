import styled from 'styled-components';
import Text from './Text';

const Truncate = styled(Text)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default Truncate;
