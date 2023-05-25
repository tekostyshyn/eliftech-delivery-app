import { Container } from './MealsList.styled';
import { useSelector } from 'react-redux';
import { selectMeals } from 'redux/selectors';
import MealItem from 'components/MealItem';

const MealsList = ({ chosenShop }) => {
  const mealsList = useSelector(selectMeals(chosenShop));
  return (
    <Container>
      {mealsList.map(meal => (
        <MealItem key={meal.id} name={meal.name} price={meal.price} url={meal.url} />
      ))}
    </Container>
  );
};

export default MealsList;
