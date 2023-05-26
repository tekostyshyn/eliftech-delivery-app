import { useDispatch } from 'react-redux';
import { ImCross } from "react-icons/im";

import { increaseAmount, decreaseAmount, deleteMeal } from 'redux/selectedMealsSlice';
import {
  Picture,
  Item,
  Text,
  Heading,
  AmountWrapper,
  DeleteButton,
} from './CartItem.styled';

const CartItem = ({ name, url, price, amount, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Picture src={url} alt={name} />
      <div>
        <Heading>{name}</Heading>
        <Text>Price: {price} UAH</Text>
        <AmountWrapper>
          <button onClick={() => {dispatch(decreaseAmount(name))}} type="button" >
            - </button>
          <Text>Amount: {amount}</Text>
          <button
            onClick={() => {
              dispatch(increaseAmount(name));
            }}
            type="button"
          >+</button>
        </AmountWrapper>
        <DeleteButton  onClick={() => {
              dispatch(deleteMeal(id));
            }} type="button">
          <ImCross/>
        </DeleteButton>
      </div>
    </Item>
  );
};

export default CartItem;
