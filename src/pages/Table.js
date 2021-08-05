import React from 'react';
import { useHistory } from 'react-router';
//Styles
import { PlayingTable, Wrapper } from './Table.styles'
//Components
import Card from '../components/Cards';
import Grid from '../components/Grid';
import ControlBar from '../components/ControlBar';
import Button from '../components/Button'
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
    isStaying,
    setIsAddingCards,
    setIsStaying,
    startNewGame
} = InitialCards()
const history = useHistory()

console.log("Player: " + player.count)
console.log("Dealer: " + dealer.count)

      

   return (
    
        <Wrapper>
            <PlayingTable>
                
                    <div>
                        {isStaying ?
                        <Grid header="Dealer's Cards">
                            {dealer.cards.map((card, index )=>(
                                
                                <Card
                                    key={index}
                                    rank={card.rank}
                                    suit={card.suit}
                                />
                            ))}
                            
                        </Grid>
                        :
                        <Grid header="Dealer's Cards">
                                <Card
                                    rank={dealer.cards[0].rank}
                                    suit={dealer.cards[0].suit}
                                />
                                <Card
                                    rank=''
                                    suit=''
                                />
                            
                        </Grid>
                        }
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
            {!gameComplete ?
            <ControlBar   
                
                count={player.count} callbackOne ={
                    ()=> setIsAddingCards(true)
                }
                callbackTwo ={
                    ()=> setIsStaying(true)
                }     
            />
            :<div>
                <Button text='New Game' value='#' callback={()=>startNewGame()
               }></Button>
            </div>
            }
        </Wrapper>
        
    
   )
   
}
export default Table;