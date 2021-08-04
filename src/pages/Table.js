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
    gameComplete, 
    message,
    setIsAddingCards,
    setIsStaying
} = InitialCards()

console.log("Player: " + player.count)
console.log("Dealer: " + dealer.count)

      

   return (
    
        <Wrapper>
            <PlayingTable>
                
                    <div>
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
                    </div>
                    {!gameComplete ?
                    <span></span>
                    :
                    <div className="messageDiv">
                    <h1>{message}</h1>
                    <p>
                        Player Count: 
                        <span>
                            {player.count}
                        </span>
                    </p>
                    <p>
                        Dealer Count: <span>
                            {dealer.count}
                        </span>
                    </p>
                </div>
                }   
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