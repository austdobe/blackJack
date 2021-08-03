import React from 'react';
//Styles
import { PlayingTable, Wrapper } from './Table.styles'
//Components
import Card from '../components/Cards';
import Grid from '../components/Grid';
import ControlBar from '../components/ControlBar';
//Utils
import { InitialCards } from '../utils/gameLogic'





// console.log(updatedDeck)
// console.log(player.cards)
// console.log(player.count)
// console.log(dealer.cards)

export const Table = () =>{
    // States
const {
    state,
    setIsAddingCards
} = InitialCards()
console.log(state.dealer)
console.log(state.player)
console.log(state)

      

   return (
    
        <Wrapper>
            <PlayingTable>
                <Grid header="Dealer's Cards">
                    {state.dealer.cards.map((card, index )=>(
                        <Card
                            key={index}
                            rank={card.rank}
                            suit={card.suit}
                        />
                    ))}
                    
                </Grid>
                <Grid header = "Your Cards">
                   {state.player.cards.map((card, index) =>(
                    <Card
                        key={index}
                        rank={card.rank}
                        suit={card.suit}
                        />
                    ))}
                    
                </Grid>
            </PlayingTable>
            <ControlBar callback={()=> setIsAddingCards(true)}/>
            
        </Wrapper>
        
    
   )
   
}
export default Table;