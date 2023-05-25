import {
  Container,
  Picture,
  Wrapper,
  Button,
  Text,
  AmountWrapper,
} from './MealItem.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeal } from 'redux/selectedMealsSlice';

const MealItem = ({ name, price, url }) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (name, price, quantity) => {
    if (quantity === 0) return;
    dispatch(addMeal({ name, quantity, price }));
  };

  const handleIncrement = () => {
    setAmount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (amount === 0) return;
    setAmount(prev => prev - 1);
  };

  return (
    <Container>
      <Picture src={url} alt={name} />
      <Wrapper>
        <Text>{name}</Text>
        <Text>{price} UAH</Text>
      </Wrapper>
      <Wrapper>
        <Button onClick={() => handleClick(name, price, amount)}>Order</Button>
        <AmountWrapper>
          <button onClick={handleDecrement}>-</button>
          <p>Amount: {amount}</p>
          <button onClick={handleIncrement}>+</button>
        </AmountWrapper>
      </Wrapper>
    </Container>
  );
};

export default MealItem;
