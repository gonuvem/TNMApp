import styled from 'styled-components/native';

import {Animated} from 'react-native';

import {colors} from '../../general/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: ${colors.white};
  flex: 1;
`;

export const ViewFields = styled.View`
  padding: 16px;
`;

export const Res = styled.View`
  margin: 16px 0 36px 0;
  padding: 24px 16px;
  border-radius: 4px;
  background: ${colors.secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Result = Animated.createAnimatedComponent(Res);

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

export const Icon = styled.Image`
  height: 18px;
  width: 20px;
`;

export const ModalContent = styled.View`
  height: 230px;
  border-radius: 4px;
  background: ${colors.white};
  padding: 24px;
`;

export const LabelSave = styled.Text`
  font-family: 'Roboto-Reguar';
  font-size: 16px;
  line-height: 20px;
  color: ${colors.fieldName};
  margin-bottom: 24px;
`;

export const NameSave = styled.TextInput`
  border-width: 1px;
  border-color: ${colors.gray};
  border-radius: 4px;

  font-family: 'Roboto-Reguar';
  font-size: 16px;
  color: ${colors.fieldName};
  padding-left: 12px;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  margin-top: 43px;
  justify-content: center;
  margin-left: 108px;
`;

export const ButtonModal = styled.TouchableOpacity`
  padding: 8px;
  margin-left: 18px;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: ${colors.purple};
  text-align: right;
  letter-spacing: 1.25px;
`;
