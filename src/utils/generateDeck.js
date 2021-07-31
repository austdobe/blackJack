// create 52 card Deck by matching number with each suit
let createDeck = () => {
    const suits = [ 'H', 'C', 'D', 'S'];
    const ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const deck = [];
    //running a loop to separate the 4 suits, Hearts/Clubs/Diamonds/Spades
    for( let suitCounter = 0; suitCounter<suits.length; suitCounter ++ ) {
        //run loop to separate the numbers and combine them with the available 4 suits.
        for( let ranksCounter = 0; ranksCounter<ranks.length; ranksCounter++ ){
            // console.log(ranks[ranksCounter]+ suits[suitCounter])
            deck.push( ranks[ranksCounter] + suits[suitCounter] );
        };
    };

    return deck;
};
//Shuffle the Deck into a random order
let shuffle = ( deck )=>{
    // loop creating a random card from the existing 52 cards to place into a random spot within the existing deck.
    for ( let i= 0; i<52; i++ )   {
        let tempCard = deck[i];
        let randomNum = Math.floor( Math.random() * 52 );
        deck[i] = deck[ randomNum ];
        deck[ randomNum ] = tempCard;
    };
};

function initialCards(){
    // set shuffled Deck
     let startDeck = createDeck();
     shuffle(startDeck);
    //  console.log(startDeck);
     
     const playerHandSize = 2;
     let playerCount = 2;
     let player={
         0:[],
         1:[],
     };
     

     for( let i=0; i<playerHandSize; i++ ){
        for( let j=0; j<playerCount; j++ ){
            player[j].push(startDeck[0]);
            startDeck = startDeck.slice(1);
        };
    };
    console.log(player);
};

return { createDeck, initialCards, shuffle }

