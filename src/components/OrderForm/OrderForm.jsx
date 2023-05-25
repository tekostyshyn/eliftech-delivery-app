import { Label, Input } from './OrderForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { submitOrder } from 'redux/operations';
import { selectChosenMeals } from 'redux/selectors';

const OrderForm = () => {
  const dispatch = useDispatch();
  const meals = useSelector(selectChosenMeals);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const address = form.elements.address.value;
    if (meals.length > 0) {
      dispatch(
        submitOrder({ userInfo: { name, phone, email, address }, order: meals })
      );
    }
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input type="text" id="name" name="name" required />
      <Label htmlFor="email">Email:</Label>
      <Input type="email" id="email" name="email" required />
      <Label htmlFor="phone">Phone:</Label>
      <Input type="tel" id="phone" name="phone" required />
      <Label htmlFor="address">Address:</Label>
      <Input type="text" id="address" name="address" required />
      <button type="submit">Submit order</button>
    </form>
  );
};

export default OrderForm;
