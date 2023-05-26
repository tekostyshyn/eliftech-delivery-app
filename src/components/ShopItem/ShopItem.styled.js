import styled from 'styled-components';

export const Button = styled.button`
    width: 160px;
    height: 60px;
    font-size: 24px;
    cursor: pointer;
    background-color: white;
    border-radius: 4px;
    border: 3px solid white;

    &:hover, &:focus {
        border-color: #0047AB;  
        color: #0047AB; 
    }

    &.disabled {
        color: lightgray;
        pointer-events: none;
      }
`;

