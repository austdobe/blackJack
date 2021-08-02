import styled from "styled-components";

export const Button = styled.button `
    display: inline-block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 100px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px 10px;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover{
        opacity: 0.8
    }

`;