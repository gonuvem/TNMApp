import styled from 'styled-components/native';

import {colors} from '../../general/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 19px;
  width: 19px;
`;

export const Result = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 14px;
`;

export const Stage = styled.View`
  height: 56px;
  width: 56px;
  background: ${colors.secondary};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  font-weight: 500;
  color: ${colors.white};
`;

export const InfoResult = styled.View`
  margin-left: 10px;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${colors.divisor};
  flex: 1;
`;

export const Informations = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: ${colors.black};
`;

export const Date = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: ${colors.secondGray};
`;

export const ButtonDelete = styled.TouchableOpacity`
  padding: 18px;
  justify-content: center;
  align-items: center;
`;

export const ViewInformation = styled.FlatList`
  padding: 28px 0 0 8px;
`;
