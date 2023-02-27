import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};

  border-radius: 5px;
`;

export const Title = styled.Text`
  padding: 18px;

  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
`;
