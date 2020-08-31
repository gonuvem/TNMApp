import styled from 'styled-components/native';

import {colors} from '../../general/colors';

export const Container = styled.View`
  height: 64px;
  background: ${colors.primary};
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: ${colors.white};
`;

export const ViewButtons = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 18px;
  width: 18px;
  margin-left: 30px;
`;
