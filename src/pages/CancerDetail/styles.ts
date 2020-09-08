import styled from 'styled-components/native';

import {colors} from '../../general/colors';

export const Container = styled.ScrollView`
  background: ${colors.white};
  flex: 1;
`;

export const ViewFields = styled.View`
  padding: 16px;
`;

export const Result = styled.View`
  margin: 16px 0 16px 0;
  padding: 24px 16px;
  border-radius: 4px;
  background: ${colors.secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ViewTexts = styled.View``;

export const Label = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 10px;
  letter-spacing: 1.5px;
  color: ${colors.white};
  margin-bottom: 4px;
`;

export const Stage = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: ${colors.white};
`;

export const ButtonSave = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: ${colors.white};

  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image``;
