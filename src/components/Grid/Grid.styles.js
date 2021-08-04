import styled from "styled-components";

export const Wrapper = styled.div `
    display: grid;
    grid-template-columns:minmax(25%, 40%) repeat(auto-fill, minmax(200px, 60%));
    grid-template-rows: auto;
    grid-auto-flow: row;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 50vh;


    @media screen and (max-width: 760px){
        display: block;
        text-align: center; 
        margin: 0 auto;      
        
    }
   
`;

export const Content = styled.div `
    box-sizing: border-box;
    height: fit-content;
    width: fit-content;
    display: inline-flex;
    

    @media screen and (max-width: 760px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        justify-items: center;
        align-content: space-evenly;
        align-items: center;
        margin: 0 auto;
    }
    
    
    
    
`; 