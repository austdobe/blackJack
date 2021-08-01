import styled from "styled-components";

export const Wrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    padding: 10px 30px;
    text-align: center;
   
`;

export const Content = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 200px));
    grid-gap: 1rem;
    
    @media screen and (max-width: 760px){
        grid-template-columns: repeat(auto-fill, minmax(75px, 100px));
        grid-gap: 1rem;
    }
    
    
`; 