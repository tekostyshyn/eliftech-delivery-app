import { useSelector } from 'react-redux';
import CartList from 'components/CartList';
import OrderForm from 'components/OrderForm';
import { selectOrderState } from 'redux/selectors';
import { Container, ContainerItem, Message } from './Cart.styled';

const Cart = () => {
  const isOrdered = useSelector(selectOrderState);

  return (
    <main>
      <Container>
        <ContainerItem>
          <OrderForm />
        </ContainerItem>
        <ContainerItem>
          {isOrdered && (
            <Message>
              You order has been submitted successfully. We will call you within
              15 minutes. Thank you for chosing us and have a nice day!
            </Message>
          )}
          <CartList />
        </ContainerItem>
      </Container>
      <p>Total: </p>
    </main>
  );
};

export default Cart;
