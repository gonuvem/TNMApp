import styled from 'styled-components/native';
import {Animated} from 'react-native';

import {colors} from '../../general/colors';

interface SelectField {
  isOpened: boolean;
}

export const Container = styled.View`
  margin-bottom: 8px;
`;

export const Title = styled.Text<SelectField>`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  color: ${(props) => (props.isOpened ? colors.primary : colors.fieldName)};
`;

export const SelectField = styled.View<SelectField>`
  height: 56px;
  border-width: ${(props) => (props.isOpened ? '2px' : '1px')};
  border-color: ${(props) => (props.isOpened ? colors.primary : colors.gray)};
  border-radius: 4px;
  margin-top: 28px;
`;

export const Select = styled.Picker`
  margin-left: 8px;
`;

export const Card = styled.View`
  background: ${colors.white};
  padding: 0 4px;
  z-index: 1;
  position: absolute;
`;

export const CardTitle = Animated.createAnimatedComponent(Card);
