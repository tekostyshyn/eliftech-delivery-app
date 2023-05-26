import { useSelector } from 'react-redux';
import { selectChosenMeals } from 'redux/selectors';
import CartItem from 'components/CartItem/CartItem';
import { List } from './CartList.styled';

const CartList = () => {
  const chosenMeals = useSelector(selectChosenMeals);
  return (
    <List>
      {chosenMeals.length > 0 &&
        chosenMeals.map(meal => (
          <CartItem
            key={meal.id}
            name={meal.name}
            price={meal.price}
            amount={meal.amount}
            url={meal.url}
            id={meal.id}
          ></CartItem>
        ))}
    </List>
  );
};

export default CartList;
