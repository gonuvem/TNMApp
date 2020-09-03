import styled from 'styled-components/native';
import {Animated} from 'react-native';

import {colors} from '../../general/colors';

interface SelectField {
  isOpened: boolean;
}

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;

export const Title = styled.Text<SelectField>`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: ${(props) => (props.isOpened ? colors.primary : colors.fieldName)};
`;

export const SelectField = styled.TouchableOpacity<SelectField>`
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 16px;

  border-width: ${(props) => (props.isOpened ? '2px' : '1px')};
  border-color: ${(props) => (props.isOpened ? colors.primary : colors.gray)};
  border-radius: 4px;
`;

export const Drop = styled.View`
  width: 100%;
  border-radius: 4px;
  elevation: 2;
  position: absolute;
  margin-top: 56px;
  z-index: 2;
  background: ${colors.white};
`;

export const Dropdown = Animated.createAnimatedComponent(Drop);

// export const Dropdown = styled.Picker``;

export const Option = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: ${colors.black};
`;

export const Select = styled.TouchableOpacity`
  margin-bottom: 12px;
`;

export const Card = styled.View`
  background: ${colors.white};
  padding: 0 4px;
`;

export const CardTitle = Animated.createAnimatedComponent(Card);

export const Value = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: ${colors.black};
  position: absolute;
  z-index: 1;
  margin-left: 15px;
`;
