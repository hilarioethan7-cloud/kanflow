// =============================================
// KANFLOW - MODULE 3: cards.js
// =============================================
// This file handles adding and deleting cards.
//
// FUNCTIONS IN THIS FILE:
//   addCard()    - adds a new card to the data array
//   deleteCard() - removes a card from the data array
// =============================================


// ---------------------------------------------
// addCard()
// ---------------------------------------------
// Reads the input field, creates a new card
// object, pushes it to the cards array, clears
// the input, and calls renderBoard().
// ---------------------------------------------
function addCard() {

  // Step 1 - Get the input element and read its value
  const input = document.getElementById('card-input');
  const title = input.value.trim();

  // Step 2 - Do nothing if the input is empty
  if (title === '') return;

  // Step 3 - Create a new card object
  const newCard = {
    id:     Date.now(), // unique id using current timestamp
    title:  title,      // text from the input field
    column: 'todo',     // always starts in To Do
    tag:    'Task',     // default tag
    done:   false,      // new cards are never done
  };

  // Step 4 - Add the new card to the data array
  cards.push(newCard);

  // Step 5 - Clear the input field
  input.value = '';

  // Step 6 - Re-render the board to show the new card
  renderBoard();
}


// ---------------------------------------------
// deleteCard(id)
// ---------------------------------------------
// Finds the card with the matching id in the
// cards array, removes it, and re-renders.
//
// 7.2 Two array methods used:
//   Array.findIndex - returns the position of
//     the first matching element, or -1
//   Array.splice    - removes one element at
//     the given index
// ---------------------------------------------
function deleteCard(id) {

  // Step 1 - Find the index of the card with the matching id
  // findIndex returns -1 if no match is found
  const index = cards.findIndex(function(card) {
    return card.id === id;
  });

  // Step 2 - If found, remove it from the array
  // splice(index, 1) removes exactly one element at that position
  if (index !== -1) {
    cards.splice(index, 1);
  }

  // Step 3 - Re-render the board
  // The deleted card will no longer be in the array
  // so it will not appear after re-render
  renderBoard();
}