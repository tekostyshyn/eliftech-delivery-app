import { Container } from './Shop.styled';
import ShopsList from 'components/ShopsList';
import MealsList from 'components/MealsList/MealsList';

import { selectShops } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchShops } from 'redux/operations';

const Shop = () => {
  const dispatch = useDispatch();
  const allShops = useSelector(selectShops);
  const [chosenShop, setChosenShop] = useState('');
  const [availableMeals, setaAvailableMeals] = useState([]);
  const shopsList = allShops.items.map(shop => shop.name);

  const chooseShop = name => {
    setChosenShop(name);
  };

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  useEffect(() => {
    if (!chosenShop) return;
    const shop = allShops.items.filter(shop => {
      if (shop.name === chosenShop) return shop.meals;
    });
    const meals = shop[0].meals;
    setaAvailableMeals(meals);
  }, [chosenShop, allShops.items]);

  return (
    <main>
      <Container>
        <ShopsList shops={shopsList} onClick={chooseShop}></ShopsList>
        <MealsList meals={availableMeals}></MealsList>
      </Container>
    </main>
  );
};

export default Shop;
