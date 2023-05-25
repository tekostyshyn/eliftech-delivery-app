import styled from 'styled-components';

export const Button = styled.button`
    width: 200px;
    height: 80px;
    font-size: 24px;
    cursor: pointer;
    background-color: white;
    border-radius: 4px;
    border: 3px solid white;

    &:hover, &:focus {
        border-color: #0047AB;  
        color: #0047AB; 
    }
`;

