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
  Transactions,
  Title,
  TransactionList,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { HighlightCards } from "../../components/HighlightCard/styles";
import { FlatList, FlatListProps, StatusBar } from "react-native";
import theme from "../../global/styles/theme";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      title: "Desenvolvimento de site",
      amount: "R$17.000",
      type: "positive",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "30/01/2023",
    },
    {
      id: "2",
      title: "Hamburgueria Pizzy",
      amount: "R$59,00",
      type: "negative",
      category: { name: "Alimentação", icon: "coffee" },
      date: "30/01/2023",
    },
    {
      id: "3",
      title: "Aluguel do apartamento",
      amount: "R$1.200",
      type: "negative",
      category: { name: "Casa", icon: "shopping-bag" },
      date: "30/01/2023",
    },
  ];
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
          type="up"
          amount="R$ 17.400,00"
          lastTransaction="última entrada dia 13 de abril"
        />
        <HighlightCard
          title="Saídas"
          type="down"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          title="Total"
          type="total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
