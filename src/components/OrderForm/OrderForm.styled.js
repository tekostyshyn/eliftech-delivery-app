import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-size: 24px;
  font-weigth: 600;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  height: 36px;
  width: 480px;
  margin-bottom: 20px;
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 180px;
  height: 50px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #0047ab;
  color: white;
  border: 2px solid #0047ab;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: white;
    color: #0047ab;
  }

  &.disabled {
    background-color: lightgray;
    border-color: lightgray;
    pointer-events: none;
  }
`;
