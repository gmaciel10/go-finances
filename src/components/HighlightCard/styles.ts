import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  height: ${RFValue(200)}px;
  width: ${RFValue(300)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
export const Icon = styled(Feather)`
  ${(props) =>
    props.name === "arrow-up-circle"
      ? `color: ${props.theme.colors.success}`
      : `color: ${props.theme.colors.attention}`};
  font-size: ${RFValue(40)}px;
`;
export const Content = styled.View``;
export const Amount = styled.Text`
  margin-top: ${RFValue(38)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
`;
export const LastTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})``;
