/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from 'react';
import update from 'react-addons-update';


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
  const [message, setMessage]=useState('')
  
  
  //Create 52 card Deck by matching number with each suit
  const suits = ['♦','♣','♥','♠'];
  const ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  
  let updatedDeck = [];
  let tempCard =[];
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
         if(j > 0){ 
          tempDeck = updatedDeck
          tempPlayer.cards.push({rank:tempDeck[j].rank, suit:tempDeck[j].suit})
          let newDeck = tempDeck.slice(1)
          // console.log(newDeck)
          tempDealer.cards.push({rank:newDeck[j].rank, suit:newDeck[j].suit})
          updatedDeck=newDeck.slice(1)
          setDeck(updatedDeck);
          console.log(updatedDeck)
         }
         else{
          tempDeck = updatedDeck
          tempPlayer.cards.push({rank:tempDeck[j].rank, suit:tempDeck[j].suit})
          tempDealer.cards.push([])
          let newDeck = tempDeck.slice(1)
          updatedDeck=newDeck.slice(1)
          setDeck(updatedDeck);
          console.log(updatedDeck)
          
        }
        
    }
    setPlayer({
      cards:tempPlayer.cards,
      count:getCount(tempPlayer.cards)
    });
    setDealer({
      cards:tempDealer.cards,
      count:getCount(tempDealer.cards)
    });
  }
  const addCard = () => {
    tempCard = deck[0]
    console.log("temp " + tempCard)
    tempPlayer.cards.push({rank:tempCard.rank, suit:tempCard.suit})
    updatedDeck = deck.slice(1)
    setDeck(updatedDeck)
    setPlayer(prev =>({
          
        cards: [...prev.cards, tempPlayer.cards[0]],
        count: getCount([...prev.cards, tempPlayer.cards[0]])
    
    }));
  }
  const stay=()=>{
      tempCard = deck[0]
      console.log("temp " + tempCard)
      tempDealer.cards.push({rank:tempCard.rank, suit:tempCard.suit})
      updatedDeck = deck.slice(1)
      setDeck(updatedDeck)
      setDealer( prev => ({
          
        cards: [...prev.cards, update(dealer.cards[0], {$set:tempDealer.cards[0]})],
        count: getCount(dealer.cards)
    
    }));
  }


  // if(dealer.count > 18 ){
  //   stay()
  
    
  // }else{
  //     checkWin()
  //     console.log(message)
  // }
   
  // }
  const checkWin = ()=>{
    if(player.count === 21 && dealer.count < 21){
        setMessage("BlackJack!! You Won!")
    } else if(player.count > dealer.count && player.count <= 21){
      setMessage("You beat the Dealer!")
    }else if(player.count > 21){
      setMessage('Bust... better luck next time.')
    }else{
      setMessage("Dealer won..")
    }
    
  }
  
    
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
        addCard()
        setIsAddingCards(false)
      }else if(newGame){
        shuffleDeck()
        setDeck(updatedDeck)
        setHands(2)
        setNewGame(false)
      }else if(isStaying){
        stay()
        setIsStaying(false)
      } 
    }, [updatedDeck, newGame, isAddingCards, tempDealer, tempPlayer])
    // console.log(deck)
    // console.log('player '+ player)
    // console.log('dealer '+ dealer)

    return {player, dealer, purse, setIsAddingCards, setIsStaying}
};





