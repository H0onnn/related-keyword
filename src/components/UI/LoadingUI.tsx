import styled from 'styled-components';
import { colors } from '../../constants/colors';

const LoadingUI = () => {
  return <LoadingUILayout>검색중 . . .</LoadingUILayout>;
};

export default LoadingUI;

const LoadingUILayout = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${colors.grey};
`;
