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
  const [message, setMessage]=useState('')
  const [gameComplete, setGameComplete]=useState(false)
  const [dealerStay, setDealerStay]=useState(false)
  
  
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
      
          tempDeck = updatedDeck
          tempPlayer.cards.push({rank:tempDeck[j].rank, suit:tempDeck[j].suit})
          // console.log(newDeck)
          let newDeck = tempDeck.slice(1)
          tempDealer.cards.push({rank:newDeck[j].rank, suit:newDeck[j].suit})
          updatedDeck=newDeck.slice(1)
          console.log(updatedDeck)
          setDeck(updatedDeck)

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
      tempCard = deck[1]
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
      if(dealer.count < 18){
        tempCard = deck[1]
        console.log("temp " + tempCard)
        tempDealer.cards.push({rank:tempCard.rank, suit:tempCard.suit})
        updatedDeck = deck.slice(1)
        setDealerStay(true)
        setDealer( prev => ({
          
          cards: [...prev.cards, tempDealer.cards[0]],
          count: getCount([...prev.cards, tempDealer.cards[0]])
      
        }));
      } else{
        setDealerStay(true)
      }
    
  }


  // if(dealer.count > 18 ){
  //   stay()
  
    
  // }else{
  //     checkWin()
  //     console.log(message)
  // }
   
  // }
  const checkWin = ()=>{
    if(isStaying && dealerStay){
      if(player.count === 21 && dealer.count < 21){
          setGameComplete(true);
          setMessage("BlackJack!! You Won!")
          
      } else if(player.count > dealer.count && player.count <= 21){
        setGameComplete(true);
        setMessage("You beat the Dealer!")
      }else if( dealer.count > 21){
          setGameComplete(true)
          setMessage("Dealer Bust! Nice Stay!")
        
        
      }else if(player.count<=dealer.count){
        setGameComplete(true);
        setMessage("Dealer won..")
        
      }
     
    }else if(player.count > 21){
      setGameComplete(true);
      setMessage('Bust... better luck next time.')
      
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
      if(newGame){
        shuffleDeck()
        setHands(2)
        setDeck(updatedDeck)
        setNewGame(false)
      }else if(!newGame && isAddingCards && !isStaying){
        addCard()
        checkWin()
        setDeck(updatedDeck)
        setIsAddingCards(false)
      }else if(isStaying && !dealerStay){
        stay()
        // setDealer(prev =>({
        //   cards:[...prev.cards], 
        //   count:getCount(dealer.cards)
        // }))
        setDeck(updatedDeck)
        checkWin()
      } else{
        checkWin()
      }
    }, [updatedDeck, newGame, isAddingCards, tempDealer, tempPlayer])

    return {player, dealer, purse, gameComplete, message, setIsAddingCards, setIsStaying}
};





