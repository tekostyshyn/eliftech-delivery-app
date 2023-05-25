import { Button } from './ShopItem.styled';

const ShopItem = ({ onClick, name }) => {
  return <Button onClick={() => onClick(name)}>{name}</Button>;
};

export default ShopItem;
