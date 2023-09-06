import { styled } from 'styled-components';
import { colors } from '../constants/colors';

interface InputTextFieldProps {
  onFocus: () => void;
  onBlur: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputTextField = ({ onFocus, onBlur, onChange }: InputTextFieldProps) => {
  return (
    <StyledInput
      placeholder="질환명을 입력해 주세요."
      type="text"
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

export default InputTextField;

const StyledInput = styled.input`
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  font-size: 18px;
  padding-right: 25px;

  &:focus {
    outline: none;
    caret-color: ${colors.secondary};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
