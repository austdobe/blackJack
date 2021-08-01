import styled from 'styled-components';

export const Wrapper = styled.div ` 
    color: var(--darkGrey);
    background: var(--white);
    border-radius: 20px;
    padding: 5px;
    height: 200px;
    width: 150px;

   
   .card-red{
       color: red;
   }
   @media screen and (max-width: 760px){
       height: 150px;
       width: 90px;
   }
`;

export const Content = styled.div `
    width: 100%;
    height: 100%;
    border-radius: 15px;
    position: relative;
    font-size: 30px;

    .topRank{
        position: absolute;
        text-align: left;
        top:5px;
        left: 5px;

       
            
       
   }
   .bottomRank{
       position: absolute;
       bottom: 5px;
       right: 5px;
       text-align: right;
       
   }
   .suit{
        position: absolute;
        top: 35%;
        width: 100%;
        text-align: center;
   }
    
`;

