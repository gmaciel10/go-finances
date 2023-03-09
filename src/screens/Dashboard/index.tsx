import React, { useCallback, useEffect, useState } from "react";
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
  LogoutButton,
  LoadContainer,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { HighlightCards } from "../../components/HighlightCard/styles";
import { ActivityIndicator, StatusBar } from "react-native";
import theme from "../../global/styles/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "styled-components";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}

export function Dashboard() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );
  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesSum = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesSum += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setTransactions(transactionsFormatted);
    const total = entriesSum - expensiveTotal;
    setHighlightData({
      entries: {
        amount: entriesSum.toLocaleString("pr-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      expensives: {
        amount: expensiveTotal.toLocaleString("pr-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
    const dataKey = "@gofinances:transactions";
    AsyncStorage.removeItem(dataKey);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
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
              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
              title="Entradas"
              type="up"
              amount={highlightData.entries.amount}
              lastTransaction="última entrada dia 13 de abril"
            />
            <HighlightCard
              title="Saídas"
              type="down"
              amount={highlightData.expensives.amount}
              lastTransaction="Última saída dia 03 de abril"
            />
            <HighlightCard
              title="Total"
              type="total"
              amount={highlightData.total.amount}
              lastTransaction="01 à 16 de abril"
            />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}
