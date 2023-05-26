import { useSelector } from 'react-redux';
import { selectShopsList } from 'redux/selectors';
import ShopItem from 'components/ShopItem';
import { Container, Heading, List } from './ShopsList.styled';

const ShopsList = () => {
  const shopsList = useSelector(selectShopsList);

  return (
    <Container>
      <Heading>Shops:</Heading>
      <List>
        {shopsList.map(shop => (
          <li key={shop.id}>
            <ShopItem name={shop.name} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default ShopsList;
