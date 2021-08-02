import React from 'react';
//Styles
import { PlayingTable, Wrapper } from './Table.styles'
//Components
import Card from '../components/Cards';
import Grid from '../components/Grid';
import ControlBar from '../components/ControlBar';
import Button from '../components/Button'

//Utils
import initialCards from '../utils/gameLogic'
import hit from '../utils/gameLogic'





//States
const {
    updatedDeck,
    player,
    dealer
} = initialCards()
console.log(updatedDeck)
console.log(player.cards)
console.log(player.count)
console.log(dealer.cards)





const Table = () =>{

   
     

   return (
    
        <Wrapper>
            <PlayingTable>
                <Grid header="Dealer's Cards">
                    {dealer.cards.map((card, index )=>(
                        <Card
                            key={index}
                            rank={card.rank}
                            suit={card.suit}
                        />
                    ))}
                    
                </Grid>
                <Grid header = "Your Cards">
                   {player.cards.map((card, index) =>(
                    <Card
                        key={index}
                        rank={card.rank}
                        suit={card.suit}
                        />
                    ))}
                    
                </Grid>
            </PlayingTable>
            <ControlBar>
                <Button text="Hit" callback={() => {
                hit();
                console.log('click');
                }}/>
                <Button text="Stay" />
                
            </ControlBar>
        </Wrapper>
        
    
   )
   
}
export default Table;