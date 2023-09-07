import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import InputImage from './InputImage';

const InputButton: React.FC = () => {
  return (
    <StyledInputButton>
      <InputImage />
    </StyledInputButton>
  );
};

export default InputButton;

const StyledInputButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 100%;
  background-color: ${colors.secondary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
