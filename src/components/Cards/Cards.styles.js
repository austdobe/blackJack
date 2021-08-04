import styled from 'styled-components';
import cardBack from '../../images/cardBackground.jpg'

export const Wrapper = styled.div ` 
    display: inline-block;
    margin: 20px;
    color: var(--darkGrey);
    background: var(--white);
    border-radius: 15px;
    height: 200px;
    width: 150px;

    .background{
        background-image: url(${cardBack});
        background-position: center;
        background-size:cover;
    }
   
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
    vertical-align: middle;

    @media screen and (min-width: 1000px){
        font-size: 50px;
    }

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

