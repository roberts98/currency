import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Button = styled.button`
  border: 2px solid ${Colors.primary};
  padding: 10px 15px;
  text-transform: uppercase;
  font-size: 12px;
  transition-duration: 0.4s;
  background-color: transparent;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    border: 2px solid transparent;
    background-color: ${Colors.primary};
    color: #fff;
  }
`;

export default Button;
