import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  border: 2px solid #0047ab;
  padding: 20px 0;
  border-radius: 4px;
  position: relative;
`;

export const Picture = styled.img`
  width: calc(100% / 2);
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Heading = styled.p`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const AmountWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 40px;
`;

export const DeleteButton = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: white;
  color: #0047ab;

  border: 1px solid white;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #0047ab;
    color: white;
  }

`;
