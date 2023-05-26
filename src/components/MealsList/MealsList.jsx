import { useSelector } from 'react-redux';
import { selectMeals } from 'redux/selectors';
import MealItem from 'components/MealItem';
import { Container } from './MealsList.styled';

const MealsList = () => {
  const mealsList = useSelector(selectMeals);
  return (
    <Container>
      {mealsList.map(meal => (
        <MealItem key={meal.id} name={meal.name} price={meal.price} url={meal.url} id={meal.id} />
      ))}
    </Container>
  );
};

export default MealsList;
