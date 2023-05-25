import styled from 'styled-components';

export const Container = styled.div`
min-height: 400px;
  padding: 20px 15px 60px 15px;
  width: calc((100% - 30px) / 4);
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
`;

export const Heading = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
