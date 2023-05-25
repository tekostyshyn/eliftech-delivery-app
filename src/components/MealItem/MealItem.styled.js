import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  width: calc((100% - 130px) / 2);
  border: 2px solid black;
  border-radius: 4px;
`;

export const Picture = styled.img`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  background-color: #0047ab;
  color: white;
  border: 2px solid #0047ab;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: white;
    color: #0047ab;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
