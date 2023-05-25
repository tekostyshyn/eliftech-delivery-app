import { Container, Heading } from './ShopsList.styled';

const ShopsList = ({shops, onClick}) => {
  console.log(shops);
  return (
    <Container>
      <Heading>Shops:</Heading>
    </Container>
  );
};

export default ShopsList;
