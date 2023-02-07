import { FlatListProps } from "react-native";
import {
  Container,
  Header,
  Content,
  Title,
  Amount,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  title: string;
  amount: string;
  type: "positive" | "negative";
  category: Category;
  date: String;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Header>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === "negative" && "-"} {data.amount}
        </Amount>
      </Header>
      <Content>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Content>
    </Container>
  );
}
