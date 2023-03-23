import React, { useEffect, useState } from "react";
import { HistoryCard } from "../../components/HistoryCard";
import { Container, Header, Title, Content, ChartContainer } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { categories } from "../../utils/categories";
import { VictoryPie } from "victory-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

interface TransactionData {
  name: string;
  amount: string;
  type: "positive" | "negative";
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: number;
  totalFormatted: string;
  color: string;
  percent: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );
  const theme = useTheme();
  async function loadData() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (item: TransactionData) => item.type === "negative"
    );

    const expensivesTotal = expensives.reduce(
      (acc: number, cur: TransactionData) => {
        acc += Number(cur.amount);
        return acc;
      },
      0
    );

    const totalByCategory: CategoryData[] = [];
    categories.forEach((category) => {
      let categorySum = 0;

      expensives.array.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });
      if (categorySum > 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const percent = `${((categorySum / expensivesTotal) * 100).toFixed(
          0
        )}%`;

        totalByCategory.push({
          name: category.name,
          color: category.color,
          key: category.key,
          totalFormatted,
          total: categorySum,
          percent,
        });
      }
    });
    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <Content>
        <ChartContainer>
          <VictoryPie
            data={totalByCategories}
            x="percent"
            colorScale={totalByCategories.map((item) => item.color)}
            style={{
              labels: { fontSize: RFValue(18), fontWeight: "bold", fill: theme.colors.shape },
            }}
            labelRadius={50}
            y="total"
          />
        </ChartContainer>

        {totalByCategories.map((item) => (
          <HistoryCard
            key={item.key}
            amount={item.totalFormatted}
            color={item.color}
            title={item.name}
          />
        ))}
      </Content>
    </Container>
  );
}
