import { useDispatch } from 'react-redux';
import { setChosenShop } from 'redux/shopsSlice';
import { Button } from './ShopItem.styled';

const ShopItem = ({ name }) => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(setChosenShop(name))}>{name}</Button>;
};

export default ShopItem;
