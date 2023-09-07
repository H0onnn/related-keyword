import { styled } from 'styled-components';

const InputImage = () => {
  return (
    <InputImageBox>
      <img
        src="/images/search.png"
        alt="search icon"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </InputImageBox>
  );
};

export default InputImage;

const InputImageBox = styled.div`
  width: 24px;
  height: 24px;
`;
