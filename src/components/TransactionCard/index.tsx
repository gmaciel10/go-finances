import { categories } from "../../utils/categories";
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

export interface TransactionCardProps {
  name: string;
  amount: string;
  type: "positive" | "negative";
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  const [category] = categories.filter((item) => item.key === data.category);
  return (
    <Container>
      <Header>
        <Title>{data.name}</Title>
        <Amount type={data.type}>
          {data.type === "negative" && "-"} {data.amount}
        </Amount>
      </Header>
      <Content>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Content>
    </Container>
  );
}
