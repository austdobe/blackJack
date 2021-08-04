import styled from 'styled-components'

export const Wrapper = styled.div `
    position: absolute;
    background: black;
    height: 100vh fit-content;
    width: 100%;
    overflow: hidden;
    
    
    .messageDiv{
        text-align: center;
        margin-top: 100px;
        
    }
    
`;

export const PlayingTable = styled.div ` 
    display: block;
    background-color: rgb(0, 125, 0);
    border: solid 10px brown;
    padding-bottom: 5px;
    border-radius: 25%;
    max-width: var(--maxwidth);
    min-height: 500px;
    @media screen and (max-width: 768px)
    {
        padding-bottom: 60px;
    }
    @media screen and (min-width: 1200px){
        margin: 50px
    }
   
`;

