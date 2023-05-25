import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  border: 1px solid black;
  padding: 20px 0;
  border-radius: 4px;
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
