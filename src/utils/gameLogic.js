let player = {}
let dealer = {}
let updatedDeck = []

// create 52 card Deck by matching number with each suit
const createDeck = () => {
    // const suits = [ 'H', 'C', 'D', 'S'];
    const suits = ['♦','♣','♥','♠'];
    const ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const deck = [];
   
    //running a loop to separate the 4 suits, Hearts/Clubs/Diamonds/Spades
    for( let suitCounter = 0; suitCounter<suits.length; suitCounter ++ ) {
        //run loop to separate the numbers and combine them with the available 4 suits.
        for( let ranksCounter = 0; ranksCounter<ranks.length; ranksCounter++ ){
            
            deck.push({rank:ranks[ranksCounter], suit:suits[suitCounter]});
            
            
        };
       
    };
    return deck;
   
};
// Shuffle the Deck into a random order
const getRandomCard = (deck) => {
    const updatedDeck = deck;
    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
    updatedDeck.splice(randomIndex, 1);
    return { randomCard, updatedDeck };
}
const getCount = (cards) => {
  const rearranged = [];
  cards.forEach(ranks => {
    if (ranks.rank === 'A') {
      rearranged.push(ranks);
    } else if (ranks.rank) {
      rearranged.unshift(ranks);
    }
  })
  return rearranged.reduce((total, ranks) => {
    if (ranks.rank === 'J' || ranks.rank === 'Q' || ranks.rank === 'K') {
      return total + 10;
    } else if (ranks.rank === 'A') {
      return (total + 11 <= 21) ? total + 11 : total + 1;
    } else {
      return total + ranks.rank;
    }
  }, 0);
}

export const hit = () =>{
  player.cards.push(getRandomCard(updatedDeck))

  return player

}

const initialCards = () =>{
    const deck = createDeck();
   
    //Randomizing playing cards
   const playerCardOne = getRandomCard(deck)
   const dealerCardOne = getRandomCard(playerCardOne.updatedDeck)
   const playerCardTwo = getRandomCard(dealerCardOne.updatedDeck)

    //Pushing rank and suits to hands
   const playerStartingHand = [playerCardOne.randomCard, playerCardTwo.randomCard];
   const dealerStartingHand = [dealerCardOne.randomCard, {}];
   //creating object to hold both count and cards for dealer and player
   player = {
     cards: playerStartingHand,
     count: getCount(playerStartingHand)
   };
   dealer = {
     cards: dealerStartingHand,
     count: getCount(dealerStartingHand)
   };

   //Add more cards
      
   return {updatedDeck: playerCardTwo.updatedDeck, player, dealer}
};


export default initialCards



