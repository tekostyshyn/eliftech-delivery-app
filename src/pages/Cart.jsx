import { Container, ContainerItem } from './Cart.styled';
import CartList from 'components/CartList';
import OrderForm from 'components/OrderForm';

const Cart = () => {
  return (
    <main>
      <Container>
        <ContainerItem>
          <OrderForm />
        </ContainerItem>
        <ContainerItem>
          <CartList />
        </ContainerItem>
      </Container>
        <p>Total: </p>
    </main>
  );
};

export default Cart;
