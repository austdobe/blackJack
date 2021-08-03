
import { useState, useEffect } from 'react';


const initialState = {
  player: {
    cards: [],
    count: 0
  },
  dealer: {
    cards:[],
    count: 0
  },
}

export const InitialCards = () =>{
  //Setting States
  const [state, setState]=useState(initialState);
  const [deck, setDeck]=useState({});
  const [isAddingCards, setIsAddingCards]=useState(false);
  const [isStaying, setIsStaying]=useState(false);
  const [newGame, setNewGame]=useState(true);
  const [cardCount, setCardCount]=useState(2)
  
  //Create 52 card Deck by matching number with each suit
  const suits = ['♦','♣','♥','♠'];
  const ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  let updatedDeck = [];
  let tempHands = {player:{cards:[],count:0}, dealer:{cards:[],count:0}}
  let tempDeck = []
  
    //running a loop to separate the 4 suits, Hearts/Clubs/Diamonds/Spades
    for( let suitCounter = 0; suitCounter<suits.length; suitCounter ++ ) {
        //run loop to separate the numbers and combine them with the available 4 suits.
        for( let ranksCounter = 0; ranksCounter<ranks.length; ranksCounter++ ){
         
          updatedDeck.push({rank:ranks[ranksCounter], suit:suits[suitCounter]})
            
        };
    };

    for ( let i= 0; i<52; i++ )   {
            let tempCard = updatedDeck[i];
            let randomNum = Math.floor( Math.random() * 52 );
            updatedDeck[i] = updatedDeck[ randomNum ];
            updatedDeck[ randomNum ] = tempCard;
    };

    for ( let j = 0; j < cardCount; j++){
        tempDeck = updatedDeck
        tempHands.player.cards.push({rank:tempDeck[j].rank, suit:tempDeck[j].suit})
        let newDeck = tempDeck.slice(1)
        // console.log(newDeck)
        tempHands.dealer.cards.push({rank:newDeck[j].rank, suit:newDeck[j].suit})
        updatedDeck = newDeck.slice(1)
        
        // console.log(updatedDeck)
        
    }
    
    const getCount=(cards, person)=> {
      const rearranged = [];
      cards.forEach(card => {
        if (card.number === 'A') {
          rearranged.push(card);
        } else if (card.number) {
          rearranged.unshift(card);
        }
      });
      
      return rearranged.reduce((total, card) => {
        if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
          return (total + 10);
        } else if (card.number === 'A') {
          return (total + 11 <= 21) ? total + 11 : total + 1;
        } else {
          return total + card.number;
        }
      }, 0);
    }
    
    
     
  
    
    useEffect(()=>{
      if(!newGame) return;
      
      setDeck(updatedDeck)
      setNewGame(false)
      setState(tempHands)
      setCardCount(1)
      
    }, [updatedDeck, newGame, isAddingCards, tempHands])
    console.log(deck)
    console.log(state)
    console.log(cardCount)

    
   
    
    


//   const rearranged = [];
//   cards.forEach(ranks => {
//     if (ranks.rank === 'A') {
//       rearranged.push(ranks);
//     } else if (ranks.rank) {
//       rearranged.unshift(ranks);
//     }
//   })
//   return rearranged.reduce((total, ranks) => {
//     if (ranks.rank === 'J' || ranks.rank === 'Q' || ranks.rank === 'K') {
//       return total + 10;
//     } else if (ranks.rank === 'A') {
//       return (total + 11 <= 21) ? total + 11 : total + 1;
//     } else {
//       return total + ranks.rank;
//     }
//   }, 0);
  
//  Randomizing playing cards
  // const playerCardOne = this.getRandomCard(deck)
  // const dealerCardOne = this.getRandomCard(playerCardOne.updatedDeck)
  // const playerCardTwo = getRandomCard(dealerCardOne.updatedDeck)

  // //Pushing rank and suits to hands
  // const playerStartingHand = [playerCardOne.randomCard, playerCardTwo.randomCard];
  // const dealerStartingHand = [dealerCardOne.randomCard, {}];
  // //creating object to hold both count and cards for dealer and player
  // setState(()=>({
  //   player:{
  //     cards: playerStartingHand,
  //     count: this.getCount(playerStartingHand)
  //   },
  //   dealer:{
  //     cards: dealerStartingHand,
  //     count: this.getCount(dealerStartingHand)
  //   }
  // }))


          
    return {state}
};

// const hit=() =>{
//   const newRandomCard = deck[0]
//   tempHands.cards.push(newRandomCard.randomCard)
//   person.count = this.getCount(person.cards)
//   console.log(newRandomCard)
//   console.log(person)
  

 
// }



