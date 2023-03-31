import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  height: 70%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
`;
export const Header = styled.View`
  align-items: center;
`;
export const TitleWrapper = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};

  text-align: center;

  margin-top: 45px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};

  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`;
export const SignInTitle = styled.Text``;

export const Footer = styled.View`
  height: 30%;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};
`;
