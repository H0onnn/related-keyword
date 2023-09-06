import styled from 'styled-components';
import { colors } from '../constants/colors';

export const MainPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${colors.primary};
  padding: 80px 0 160px;
`;
