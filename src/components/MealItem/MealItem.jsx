import { Container, Picture, Wrapper, Button, Text } from './MealItem.styled';

const MealItem = ({ name, price, url }) => {
  return (
    <Container>
      <Picture src={url} alt={name} />
      <Wrapper>
        <Text>{name}</Text>
        <Text>{price} UAH</Text>
      </Wrapper>
      <Button>Order</Button>
    </Container>
  );
};

export default MealItem;
