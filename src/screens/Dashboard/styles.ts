import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { DataListProps } from ".";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFValue(28)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;
export const User = styled.View`
  margin-left: 18px;
`;
export const UserGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;
  margin-top: ${RFPercentage(12)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: ${RFValue(16)}px;
`;

export const TransactionList = styled(
  FlatList as new () => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

export const LoadContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
