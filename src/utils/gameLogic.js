/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';


const initialPlayer = {
  cards: [],
  count: 0
}
const initialDealer={
  cards:[],
  count: 0
}

export const InitialCards = () =>{
  //Setting States
  const [player, setPlayer]=useState(initialPlayer);
  const [dealer, setDealer]=useState(initialDealer)
  const [deck, setDeck]=useState({});
  const [isAddingCards, setIsAddingCards]=useState(false);
  const [isStaying, setIsStaying]=useState(false);
  const [newGame, setNewGame]=useState(true);
  const [purse, setPurse]=useState(200)
  
  
  //Create 52 card Deck by matching number with each suit
  const suits = ['♦','♣','♥','♠'];
  const ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  
  let updatedDeck = [];
  let tempCards =[];
  let tempPlayer={
      cards:[],
      count:0
  }
  let tempDealer = {
      cards:[],
      count:0
  }
  let tempDeck = []
  const shuffleDeck=()=>{
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
  }
  const setHands = (cardCount) =>{
    for ( let j = 0; j < cardCount; j++){
         if(cardCount === 2){ 
          tempDeck = updatedDeck
          tempPlayer.cards.push({rank:tempDeck[j].rank, suit:tempDeck[j].suit})
          let newDeck = tempDeck.slice(1)
          // console.log(newDeck)
          tempDealer.cards.push({rank:newDeck[j].rank, suit:newDeck[j].suit})
          updatedDeck=newDeck.slice(1)
        
        console.log(updatedDeck)
         }else{
           updatedDeck=deck
          tempCards.push({rank:updatedDeck[j].rank, suit:updatedDeck[j].suit})
          updatedDeck = updatedDeck.slice(1)
          
         
         }
         
    }
  }
  // const addCard = () => {
  //   tempCard = deck[0]
  //   console.log("temp " + tempCard)
  //   tempPlayer.cards.push({rank:tempCard.rank, suit:tempCard.suit})
  //   updatedDeck = deck.slice(1)
  //   setPlayer({
    
  //     cards: tempPlayer.cards.push({rank:tempCard.rank, suit:tempCard.suit}),
  //     count: getCount(tempPlayer.cards)
     
  //   })  
    
  // }
  
    
    const getCount=(cards)=> {
      const rearranged = [];
      cards.forEach(card => {
        if (card.rank === 'A') {
          rearranged.push(card);
        } else if (card.rank) {
          rearranged.unshift(card);
        }
      });
      
      return rearranged.reduce((total, card) => {
        if (card.rank === 'J' || card.rank === 'Q' || card.rank === 'K') {
          return (total + 10);
        } else if (card.rank === 'A') {
          return (total + 11 <= 21) ? total + 11 : total + 1;
        } else {
          return total + card.rank;
        }
      }, 0);
    };
  
   
    useEffect(()=>{
      if(!newGame && isAddingCards){
        setHands(1) 
        setPlayer(prev =>({
          
          cards: [...prev.cards, tempCards.rank, tempCards.suit],
          count: getCount(tempPlayer.cards)
         
        }))
        
    
        setIsAddingCards(false)
      }else if(newGame){
      shuffleDeck()
      setDeck(updatedDeck)
      setHands(2)
      setNewGame(false)
      setPlayer({
          cards:tempPlayer.cards,
          count:getCount(tempPlayer.cards)
      });
      setDealer({
          cards:tempDealer.cards,
          count:getCount(tempDealer.cards)
      });
    } 
    }, [updatedDeck, newGame, isAddingCards, tempDealer, tempPlayer, setHands, shuffleDeck])
    console.log(deck)
    console.log('player '+ player)
    console.log('dealer '+ dealer)

    return {player, dealer, purse, setIsAddingCards}
};





