import { Container } from './Shop.styled';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchShops } from 'redux/operations';
import ShopsList from 'components/ShopsList';
import MealsList from 'components/MealsList/MealsList';

const Shop = () => {
  const dispatch = useDispatch();
  const [chosenShop, setChosenShop] = useState('McDonalds');

  const chooseShop = name => {
    setChosenShop(name);
  };

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  return (
    <main>
      <Container>
        <ShopsList onClick={chooseShop}></ShopsList>
        <MealsList chosenShop={chosenShop}></MealsList>
      </Container>
    </main>
  );
};

export default Shop;
