import React from "react";
import { ButtonProps } from "react-native";
import { Container, Category, Icon } from "./styles";

interface Props extends ButtonProps {
  title: string;
  onPress: () => void;
}

export function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" type="chevron-down" />
    </Container>
  );
}
