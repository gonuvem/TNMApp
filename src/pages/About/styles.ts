import styled from 'styled-components/native';

import {colors} from '../../general/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: ${colors.white};
`;

export const Content = styled.View`
  padding: 24px 16px;
  align-items: center;
`;

export const ImgLogo = styled.View`
  height: 175px;
  width: 234px;
  margin-bottom: 24px;
  background: ${colors.secondary};
`;

export const TextAbout = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.5px;
  color: ${colors.black};
`;

export const Label = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 4px;
  color: ${colors.black};
`;

export const Reference = styled.Text`
  font-family: 'Roboto-Italic';
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.5px;
  color: ${colors.black};
  text-decoration-line: underline;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: 24px;
`;

export const TextFooter = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: ${colors.black};
`;

export const GonuvemLogo = styled.Image`
  height: 73px;
  width: 141px;
`;

export const ViewRefrence = styled.View`
  margin-top: 24px;
  width: 100%;
`;

export const Heart = styled.Image``;
