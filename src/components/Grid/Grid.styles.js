import styled from "styled-components";

export const Wrapper = styled.div `
    display: grid;
    grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: auto;
    grid-auto-flow: row;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    
   
    
    
    
    
    

    @media screen and (max-width: 760px){
        display: block;
        text-align: center;        
        
    }
   
`;

export const Content = styled.div `
    box-sizing: border-box;
    height: fit-content;
    width: fit-content;
    display: inline-flex;
    margin: auto;

    @media screen and (max-width: 760px){
        flex-wrap: wrap ;
        
    }
    
    
    
    
`; 