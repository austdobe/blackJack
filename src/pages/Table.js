import React from 'react';
//Styles
import { PlayingTable, Wrapper } from './Table.styles'
//Components
import Card from '../components/Cards';
import Grid from '../components/Grid';
import ControlBar from '../components/ControlBar';
//Utils
import { InitialCards } from '../utils/gameLogic'

export const Table = () =>{
    // States
const {
    player,
    dealer,
    purse,
    setIsAddingCards,
    setIsStaying
} = InitialCards()

console.log("Player: " + player.cards)
console.log("Dealer: " + dealer.cards)

      

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
            <ControlBar 
                money={purse}
                count={player.count} callbackOne ={
                    ()=> setIsAddingCards(true)
                }
                callbackTwo ={
                    ()=> setIsStaying(true)
                }
                
                />
            
        </Wrapper>
        
    
   )
   
}
export default Table;