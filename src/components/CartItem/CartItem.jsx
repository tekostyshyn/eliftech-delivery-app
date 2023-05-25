import { useDispatch } from 'react-redux';
import { Picture, Item, Text, Heading, AmountWrapper } from './CartItem.styled';
import { increaseAmount, decreaseAmount } from 'redux/selectedMealsSlice';

const CartItem = ({ name, url, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Picture src={url} alt={name} />
      <div>
        <Heading>{name}</Heading>
        <Text>Price: {price} UAH</Text>
        <AmountWrapper>
          <button onClick={() => {dispatch(decreaseAmount(name))}}>-</button>
          <Text>Amount: {amount}</Text>
          <button onClick={() => {dispatch(increaseAmount(name))}}>+</button>
        </AmountWrapper>
      </div>
    </Item>
  );
};

export default CartItem;
