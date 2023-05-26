import { useSelector } from 'react-redux';
import { selectOrderState, selectTotalPrice } from 'redux/selectors';
import CartList from 'components/CartList';
import OrderForm from 'components/OrderForm';
import {
  PageLayout,
  Container,
  ContainerItem,
  Message,
  Text,
} from './Cart.styled';

const Cart = () => {
  const isOrdered = useSelector(selectOrderState);
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <main>
      <PageLayout>
        <Container>
          <ContainerItem>
            <OrderForm />
          </ContainerItem>
          <ContainerItem>
            {isOrdered && (
              <Message>
                You order has been submitted successfully. We will call you
                within 15 minutes. Thank you for choosing us and have a nice day!
              </Message>
            )}
            <CartList />
          </ContainerItem>
        </Container>
        <Text>Total: {totalPrice} UAH</Text>
      </PageLayout>
    </main>
  );
};

export default Cart;
