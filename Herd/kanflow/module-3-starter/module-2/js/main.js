// =============================================
// KANFLOW - MODULE 3: main.js
// =============================================
// This is the entry point of the application.
// It runs when the page finishes loading,
// calls renderBoard() to build the board,
// and wires up the Add Card button.
// =============================================

console.log("KanFlow is running - Module 3!");

// Render the board when the page loads
renderBoard();

console.log("Board rendered from data array.");
console.log("Columns:", columns.length);
console.log("Cards:", cards.length);

// =============================================
// 6.1 CLICK EVENT
// Fires when the user clicks the Add Card button
// Notice: addCard has no () — we pass the function
// as a reference, not call it immediately
// =============================================
const addBtn = document.getElementById('add-card-btn');
addBtn.addEventListener('click', addCard);

// =============================================
// 6.2 KEYPRESS EVENT
// Fires every time the user presses a key while
// the input field is focused.
// We check event.key to only run addCard when
// the Enter key is pressed.
// =============================================
const input = document.getElementById('card-input');
input.addEventListener('keypress', function(event) {
  // event.key contains the name of the key pressed
  // 'Enter' only triggers addCard, all other keys are ignored
  if (event.key === 'Enter') {
    addCard();
  }
});

// =============================================
// TRY THESE IN THE CONSOLE (F12)
// =============================================
// 1. How many cards are in the To Do column?
//    cards.filter(c => c.column === 'todo').length
//
// 2. Add a new card object to the cards array
//    then call renderBoard() to see it appear:
//    cards.push({ id: 7, title: "My new card",
//      column: "todo", tag: "JS", done: false })
//    renderBoard()
//
// 3. Move a card to a different column:
//    cards[0].column = "inprogress"
//    renderBoard()
//
// 4. Test addCard() directly from the console:
//    document.getElementById('card-input').value = "Test card"
//    addCard()