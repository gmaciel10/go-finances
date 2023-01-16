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

export function Dashboard() {
  return (
    <Container>
      <Header>
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
      <HighlightCards
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
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
