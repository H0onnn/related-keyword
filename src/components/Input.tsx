import { useState } from 'react';
import { styled } from 'styled-components';
import { colors } from '../constants/colors';
import InputButton from './InputButton';
import InputImage from './InputImage';
import InputTextField from './InputTextField';

interface InputContainerProps {
  isFocused: boolean;
}

const Input: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <InputContainer isFocused={isFocused}>
      {!isFocused && <InputImage />}
      <InputTextField onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      <InputButton />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div<InputContainerProps>`
  min-width: 490px;
  min-height: 74px;
  border-radius: 40px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  gap: 10px;

  ${props =>
    props.isFocused &&
    `
    box-shadow: 0 0 0 2px ${colors.secondary};
  `}
`;
