import { useDispatch, useSelector } from 'react-redux';
import { setChosenShop } from 'redux/shopsSlice';
import { selectChosenMeals, selectChosenShop } from 'redux/selectors';
import { Button } from './ShopItem.styled';

const ShopItem = ({ name }) => {
  const dispatch = useDispatch();
  const chosenMeals = useSelector(selectChosenMeals);
  const chosenShop = useSelector(selectChosenShop);

  const setButtonClasses = () => {
    const index = chosenMeals.findIndex(meal => meal.shop !== name);
    if (index >= 0) {
      return 'disabled';
    } else if (chosenShop === name) {
      return 'active'
    }
    return '';
  };

  return <Button className={setButtonClasses()} onClick={() => dispatch(setChosenShop(name))}>{name}</Button>;
};

export default ShopItem;
