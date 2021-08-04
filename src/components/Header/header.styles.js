
import styled from "styled-components";

export const Wrapper = styled.div `
    background: var(--darkGrey);
    padding: 0 20px;
   
`;

export const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: white;
    text-decoration: none;
    outline:none;
    cursor: pointer;


    .links{
        text-decoration: none;

    }
    .links:hover{
        opacity: 0.8;
    }
    
;
`
