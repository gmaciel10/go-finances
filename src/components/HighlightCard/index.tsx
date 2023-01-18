import { View } from "react-native";
import { Container } from "./styles";

import {
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
} from "./styles";

interface HighLightCardProps {
  title: string;
  icon: string;
  amount: string;
  lastTransaction: string;
}

export function HighlightCard({
  title,
  icon,
  amount,
  lastTransaction,
}: HighLightCardProps) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Content>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Content>
    </Container>
  );
}
