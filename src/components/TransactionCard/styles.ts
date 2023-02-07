import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

interface TransactionProps {
  type: "positive" | "negative";
}

export const Container = styled.View`
  height: auto;
  width: 100%;
  padding: ${RFValue(17)}px ${RFValue(24)}px;
  border-radius: ${RFValue(5)}px;
  background: ${({ theme }) => theme.colors.shape};
  margin-bottom: ${RFValue(16)}px;
 
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};

  
`;
export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  margin-top: ${RFValue(2)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.success};
  color: ${({theme, type}) => type === "positive" ? theme.colors.success: theme.colors.attention}
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(19)}px;
`;
export const Category = styled.View`
  flex-direction: row;
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
export const CategoryName = styled.Text`
  margin-left: ${RFValue(14)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
