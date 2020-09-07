import styled from 'styled-components/native';

import {colors} from '../../general/colors';

export const Container = styled.View`
  flex: 1;
  padding: 42px 16px;
  align-items: center;
`;

export const EmptyImage = styled.Image`
  height: 141px;
  width: 184px;
`;

export const Text = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin-top: 40px;
  color: ${colors.black};
`;
