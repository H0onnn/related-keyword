import React, { useState } from 'react';
import { styled } from 'styled-components';
import { colors } from '../../constants/colors';
import InputButton from './InputButton';
import InputImage from './InputImage';
import InputTextField from './InputTextField';
import Modal from '../modal/Modal';
interface InputContainerProps {
  isFocused: boolean;
}

const Input: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <InputContainer isFocused={isFocused}>
      {!isFocused && <InputImage />}
      <InputTextField
        onChange={handleInputValueChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setQuery('');
        }}
        query={query}
      />
      <InputButton />
      {isFocused && <Modal query={query} setQuery={setQuery} useCache={true} />}
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
  position: relative;

  ${props =>
    props.isFocused &&
    `
    box-shadow: 0 0 0 2px ${colors.secondary};
  `}
`;
