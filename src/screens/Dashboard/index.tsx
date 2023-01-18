import React from "react";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { HighlightCards } from "../../components/HighlightCard/styles";
import { StatusBar } from "react-native";
import theme from "../../global/styles/theme";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <StatusBar
          hidden={false}
          backgroundColor={`${theme.colors.primary}`}
          translucent={false}
          networkActivityIndicatorVisible={true}
        />
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/67983309?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Guilherme</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          icon="teste"
          amount="R$ 17.400,00"
          lastTransaction="última entrada dia 13 de abril"
        />
        <HighlightCard
          title="Entradas"
          icon="teste"
          amount="18000"
          lastTransaction="Ontem"
        />
        <HighlightCard
          title="Entradas"
          icon="teste"
          amount="18000"
          lastTransaction="Ontem"
        />
      </HighlightCards>
    </Container>
  );
}
