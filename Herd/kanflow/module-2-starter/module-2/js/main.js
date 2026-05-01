// =============================================
// KANFLOW - MODULE 2: main.js
// =============================================
// This is the entry point of the application.
// It runs when the page finishes loading and
// calls renderBoard() to build the board.
// =============================================

console.log("KanFlow is running - Module 2!");

// Render the board when the page loads
renderBoard();

console.log("Board rendered from data array.");
console.log("Columns:", columns.length);
console.log("Cards:", cards.length);

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
