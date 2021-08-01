import styled from 'styled-components'

export const Wrapper = styled.div ` 
    background-color: black;
    height: 100vh;
    overflow: hidden;
`;

export const PlayingTable = styled.div ` 
    display: block;
    background-color: rgb(0, 125, 0);
    border: solid 10px brown;
    border-radius: 25%;
    max-width: var(--maxwidth);
    height: 100vh;
    @media screen and (max-width: 760px){
        height: 80vh;
    }
    
`;

export const Content = styled.div ` 
    display: block;
    
`;