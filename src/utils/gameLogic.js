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
            
            deck.push({ rank:ranks[ranksCounter], suit:suits[suitCounter]});
            
            
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
    cards.forEach(card => {
      if (card.number === 'A') {
        rearranged.push(card);
      } else if (card.number) {
        rearranged.unshift(card);
      }
    })
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
   const player = {
     cards: playerStartingHand,
     count: getCount(playerStartingHand)
   };
   const dealer = {
     cards: dealerStartingHand,
     count: getCount(dealerStartingHand)
   };
   
      
   return {updatedDeck: playerCardTwo.updatedDeck, player, dealer}
};


export default initialCards



