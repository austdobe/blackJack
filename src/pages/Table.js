import React from 'react';
//Styles
import { PlayingTable, Wrapper } from './Table.styles'
//Components
import Card from '../components/Cards';
import Grid from '../components/Grid'

//Utils
import initialCards from '../utils/gameLogic'


//States
const {
    updatedDeck,
    player,
    dealer
} = initialCards()
console.log(updatedDeck)
console.log(player.cards)





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
        </Wrapper>
        
    
   )
   
}
export default Table;