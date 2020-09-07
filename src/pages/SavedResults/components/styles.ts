import styled from 'styled-components/native';

import {colors} from '../../../general/colors';

export const Container = styled.View`
  height: 64px;
  background: ${colors.primary};
  flex-direction: row;
  padding: 0 16px 0 16px;
  align-items: center;

  justify-content: space-between;
`;

export const Back = styled.TouchableOpacity`
  padding: 10px 10px 10px 0;
  margin-right: 30px;
`;

export const ArrowIcon = styled.Image`
  height: 18px;
  width: 18px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: ${colors.white};
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 19px;
  width: 19px;
  margin-left: 30px;
`;
