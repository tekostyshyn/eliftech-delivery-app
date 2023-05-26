import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export const ContainerItem = styled.div`
  width: calc((100% - 30px) / 2);
  height: 500px;
  background-color: white;
  padding: 20px 20px 60px 20px;
  border: 2px solid black;
  border-radius: 4px;
  overflow-y: auto;
`;

export const Message = styled.p`
  font-size: 24px;
  line-height: 1.36;
`;