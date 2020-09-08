import styled from 'styled-components/native';

import {colors} from '../../general/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Label = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: ${colors.black};
  margin-top: 16px;
`;

export const Option = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: ${colors.black};
  margin: 14px 0 11px 0;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: ${colors.divisor};
`;

export const List = styled.View`
  padding-left: 16px;
`;

export const View = styled.View``;

export const Card = styled.TouchableOpacity``;
