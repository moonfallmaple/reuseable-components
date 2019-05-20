import { AsyncStorage } from "react-native";

export const FLASHCARD_STORAGE_KEY = "Udacity:FlashCards";

//getDecks: return all of the decks along with their titles, questions, and answers. 
export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
};

//getDeck: take in a single id argument and return the deck associated with that id.
export const getDeck = (deckId) =>{
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data[deckId];
  });
}

//saveDeckTitle: take in a single title argument and add it to the decks.

export const saveDeckTitle = (title) =>{
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY), JSON.stringify({
    [deck]:title
  })
};


//addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
export const addCardToDeck =(title,card)=> {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);

    // Add card to existing deck data.
    data[title] = {
      ...data[deckId],
      cards: [
        ...data[deckId].cards,
        { question: card.question, answer: card.answer }
      ]
    };

    // Save updated deck data back to storage
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
};
