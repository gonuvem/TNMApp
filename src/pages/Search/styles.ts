import styled from 'styled-components/native';

import {colors} from '../../general/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.white};
`;

export const Header = styled.View`
  height: 64px;
  background: ${colors.primary};
  flex-direction: row;
  padding: 0 16px 0 16px;
  align-items: center;
`;

export const Back = styled.TouchableOpacity`
  padding: 10px 10px 10px 0;
  margin-right: 32px;
`;

export const ArrowIcon = styled.Image`
  height: 18px;
  width: 18px;
`;

export const SearchField = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.white};
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled.Image`
  height: 18px;
  width: 18px;
  /* margin-bottom: 6px; */
`;

export const TextField = styled.TextInput.attrs({
  // inlineImage
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  flex: 1;
  height: 37px;
  margin-top: 8px;
  margin-left: 8px;
  color: ${colors.white};
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;

export const SearchResult = styled.View`
  padding: 16px;
`;

export const InitialMessage = styled.View`
  justify-content: center;
  align-items: center;
`;

export const SearchList = styled.Image`
  height: 126px;
  width: 184px;
  margin: 32px 0 24px 0;
`;

export const SearchMessage = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 24px;
  color: ${colors.black};
  text-align: center;
  padding: 8px;
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

export const View = styled.View`
  padding-left: 16px;
`;

export const Card = styled.TouchableOpacity``;

export const ListResult = styled.FlatList``;

export const Label = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 20px;
  color: ${colors.black};
  margin-top: 16px;
`;
