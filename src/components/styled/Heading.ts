import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Heading = styled.h2`
  position: relative;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 70px;
    height: 4px;
    background-color: ${Colors.primary};
  }
`;

export default Heading;
