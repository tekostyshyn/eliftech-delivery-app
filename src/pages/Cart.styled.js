import styled from 'styled-components';

export const PageLayout = styled.div`
  padding-bottom: 80px;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export const ContainerItem = styled.div`
  width: calc((100% - 30px) / 2);
  height: 450px;
  background-color: white;
  padding: 20px;
  border: 2px solid black;
  border-radius: 4px;
  overflow-y: auto;
`;

export const Message = styled.p`
  font-size: 24px;
  line-height: 1.36;
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  bottom: 10px;
  left: 65%;
`;