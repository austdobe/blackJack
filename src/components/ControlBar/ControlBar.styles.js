import styled from 'styled-components';

export const Wrapper = styled.div ` 
    background: var(--medGrey);
    text-align: center;


`;

export const Content = styled.div `
    display: inline-block;
    margin: 0 auto;
    width: 100%;
    .content.children{
        width: 2fr;
    }

`;

export const Button = styled.button `
    display: inline-block;
    min-width: 100px;
    background: var(--darkGrey);
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

export const Text = styled.div ` 
    display: inline-block;
    min-width: 100px;
    height: 60px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px 20px;
`;
