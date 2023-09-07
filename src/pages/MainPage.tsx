import { styled } from 'styled-components';
import Input from '../components/input/Input';

const MainPage: React.FC = () => {
  return (
    <div>
      <MainPageComment>국내 모든 임상시험 검색하고{'\n'}온라인으로 참여하기</MainPageComment>
      <Input />
    </div>
  );
};

export default MainPage;

const MainPageComment = styled.h2`
  font-size: 34px;
  margin-bottom: 40px;
  text-align: center;
  white-space: pre-line;
`;
