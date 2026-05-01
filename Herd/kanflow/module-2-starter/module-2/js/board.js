// =============================================
// KANFLOW - MODULE 2: board.js
// =============================================
// This file is responsible for rendering the
// board from the data defined in data.js.
//
// FUNCTIONS IN THIS FILE:
//   renderBoard()  - builds all columns and cards
//   createColumn() - builds one column element
//   createCard()   - builds one card element
// =============================================


// ---------------------------------------------
// renderBoard()
// ---------------------------------------------
// Clears the board and re-renders everything
// from the columns and cards arrays in data.js.
//
// Five steps:
//   1. Get the board element from the DOM
//   2. Clear it with innerHTML = ""
//   3. Loop through the columns array
//   4. Filter cards that belong to this column
//   5. Append cards to column, then column to board
//
// This is called once when the page loads
// and again whenever the data changes.
// ---------------------------------------------
function renderBoard() {

  // Step 1 - Get the board element from the DOM
  const board = document.getElementById("board");

  // Step 2 - Clear any existing content
  // This ensures we always start fresh before re-rendering
  board.innerHTML = "";

  // Step 3 - Loop through each column and build it
  columns.forEach(function(column) {

    // Step 3a - Create the column element
    const columnEl = createColumn(column);

    // Step 3b - Find all cards that belong to this column
    // Array.filter returns a new array of only matching cards
    // card.column must exactly match column.id e.g. "todo" === "todo"
    const columnCards = cards.filter(function(card) {
      return card.column === column.id;
    });

    // Step 3c - Get the card list container inside this column
    const cardList = columnEl.querySelector(".card-list");

    // Step 3d - Loop through matching cards and add them
    // 4.2 appendChild - attaches each card element to the card list
    // The card only becomes visible on the page after appendChild is called
    columnCards.forEach(function(card) {
      const cardEl = createCard(card);
      cardList.appendChild(cardEl); // 4.2 - places card into the column
    });

    // Step 3e - Update the card count in the column header
    const countEl = columnEl.querySelector(".column-count");
    countEl.textContent = columnCards.length;

    // Step 3f - Add the completed column to the board
    // 4.2 appendChild - attaches the finished column to the board
    board.appendChild(columnEl); // 4.2 - places column onto the page
  });
}


// ---------------------------------------------
// createColumn(column)
// ---------------------------------------------
// Receives one column object from data.js
// and returns a fully built column DOM element.
//
// Lesson concepts used:
//   4.1 document.createElement - creates the section element
//   4.3 template literals      - inserts column data into HTML
// ---------------------------------------------
function createColumn(column) {

  // 4.1 document.createElement
  // Creates a new <section> element in memory
  // It is NOT on the page yet - appendChild does that later
  const section = document.createElement("section");
  section.className = "column";

  // data-column attribute lets JavaScript find this column later
  section.dataset.column = column.id;

  // 4.3 Template Literals
  // Uses backticks instead of quotes
  // ${column.dot}   inserts the dot CSS class  e.g. "dot-todo"
  // ${column.title} inserts the column title   e.g. "To Do"
  // ${column.id}    inserts the column id      e.g. "todo"
  // Much cleaner than: '<h2>' + column.title + '</h2>'
  section.innerHTML = `
    <div class="column-header">
      <span class="column-dot ${column.dot}"></span>
      <h2 class="column-title">${column.title}</h2>
      <span class="column-count">0</span>
    </div>
    <div class="card-list" id="col-${column.id}">
    </div>
  `;

  return section;
}


// ---------------------------------------------
// createCard(card)
// ---------------------------------------------
// Receives one card object from data.js
// and returns a fully built card DOM element.
//
// Lesson concepts used:
//   4.1 document.createElement - creates the article element
//   4.3 template literals      - inserts card data into HTML
// ---------------------------------------------
function createCard(card) {

  // 4.1 document.createElement
  // Creates a new <article> element in memory
  // It is NOT on the page yet - appendChild does that later
  const article = document.createElement("article");

  // If card.done is true  → class = "card card-done" (faded + strikethrough)
  // If card.done is false → class = "card"
  article.className = card.done ? "card card-done" : "card";

  // data-id lets us identify this specific card later (e.g. for delete/move)
  article.dataset.id = card.id;

  // Map the tag name to its CSS class
  const tagClass = getTagClass(card.tag);

  // 4.3 Template Literals
  // Uses backticks and ${} to insert card data directly into HTML
  // Much cleaner than string concatenation:
  //   '<p class="card-title">' + card.title + '</p>'
  // ${card.title}  inserts the card title  e.g. "Research event-driven patterns"
  // ${tagClass}    inserts the tag class   e.g. "tag-blue"
  // ${card.tag}    inserts the tag label   e.g. "Research"
  article.innerHTML = `
    <p class="card-title">${card.title}</p>
    <div class="card-footer">
      <span class="card-tag ${tagClass}">${card.tag}</span>
    </div>
  `;

  return article;
}


// ---------------------------------------------
// getTagClass(tag)
// ---------------------------------------------
// Maps a tag name string to a CSS class name.
// Falls back to "tag-blue" if tag is not found.
//
// To add a new tag:
//   1. Add a new CSS class in style.css
//   2. Add a new entry here in the tagMap
// ---------------------------------------------
function getTagClass(tag) {
  const tagMap = {
    "Research": "tag-blue",
    "Setup":    "tag-green",
    "HTML":     "tag-yellow",
    "CSS":      "tag-yellow",
    "JS":       "tag-blue",
    "Planning": "tag-green",
    "Testing":  "tag-blue",
    "Design":   "tag-yellow",
    "Review":   "tag-purple",
  };

  // If tag is not in the map, default to tag-blue
  return tagMap[tag] || "tag-blue";
}