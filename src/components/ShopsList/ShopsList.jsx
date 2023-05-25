import { useSelector } from 'react-redux';
import { selectShops } from 'redux/selectors';
import { Container, Heading, List } from './ShopsList.styled';
import ShopItem from 'components/ShopItem';

const ShopsList = ({ onClick }) => {
  const shopsList = useSelector(selectShops);

  return (
    <Container>
      <Heading>Shops:</Heading>
      <List>
        {shopsList.map(shop => (
          <li key={shop.id}>
            <ShopItem onClick={onClick} name={shop.name} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default ShopsList;
