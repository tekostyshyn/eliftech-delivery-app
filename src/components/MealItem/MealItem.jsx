import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeal } from 'redux/selectedMealsSlice';
import {
  Container,
  Picture,
  Wrapper,
  Button,
  Text,
  AmountWrapper,
} from './MealItem.styled';

const MealItem = ({ name, price, id, url}) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (name) => {
    if (amount === 0) return;
    dispatch(addMeal({ name, amount, price, id, url }));
  };

  const handleIncrement = () => {
    setAmount(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (amount === 0) return;
    setAmount(prev => prev - 1);
  };

  const setButtonClasses = () => {
    if (amount === 0) {
      return 'disabled';
    }
    return '';
  };

  return (
    <Container>
      <Picture src={url} alt={name} />
      <Wrapper>
        <Text>{name}</Text>
        <Text>{price} UAH</Text>
      </Wrapper>
      <Wrapper>
        <Button className={setButtonClasses()} onClick={() => handleClick(name)} type='button'>Add to Cart</Button>
        <AmountWrapper>
          <button onClick={handleDecrement} type='button'>-</button>
          <p>Amount: {amount}</p>
          <button onClick={handleIncrement} type='button'>+</button>
        </AmountWrapper>
      </Wrapper>
    </Container>
  );
};

export default MealItem;
