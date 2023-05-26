import { Container } from './Shop.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchShops } from 'redux/operations';
import ShopsList from 'components/ShopsList';
import MealsList from 'components/MealsList/MealsList';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <ShopsList />
        <MealsList />
      </Container>
    </main>
  );
};

export default Shop;
