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

export function TransactionCard() {
  return (
    <Container>
      <Header>
        <Title>Desenvolvimento de site</Title>
        <Amount>R$ 12.000,00</Amount>
      </Header>
      <Content>
        <Category>
          <Icon name="dollar-sign"/>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2023</Date>
      </Content>
    </Container>
  );
}
