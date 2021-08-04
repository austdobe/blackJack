import React from 'react';

//Styles
import { Wrapper, Content } from './Cards.styles';




const Card = ( { suit, rank } ) =>{
    let color = (suit === '♦' || suit === '♥') ? 'card-red' : 'card';
    
    
return(  
    <Wrapper>
        <Content className={suit ? `${color}`: 'background'}>
            <div className='topRank'>
                <span>{rank}</span>
            </div>
            <div className='suit'>
                <span>{suit}</span>
            </div>
            <div className='bottomRank'>
                <span>{rank}</span>
            </div>
        </Content>
    </Wrapper>
)}
export default Card;