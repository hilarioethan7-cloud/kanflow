// =============================================
// KANFLOW - MODULE 3: board.js
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
function renderBoard() {

  // Step 1 - Get the board element from the DOM
  const board = document.getElementById("board");

  // Step 2 - Clear any existing content
  board.innerHTML = "";

  // Step 3 - Loop through each column and build it
  columns.forEach(function(column) {

    // Step 3a - Create the column element
    const columnEl = createColumn(column);

    // Step 3b - Find all cards that belong to this column
    const columnCards = cards.filter(function(card) {
      return card.column === column.id;
    });

    // Step 3c - Get the card list container inside this column
    const cardList = columnEl.querySelector(".card-list");

    // Step 3d - Loop through matching cards and add them
    columnCards.forEach(function(card) {
      const cardEl = createCard(card);
      cardList.appendChild(cardEl);
    });

    // Step 3e - Update the card count in the column header
    const countEl = columnEl.querySelector(".column-count");
    countEl.textContent = columnCards.length;

    // Step 3f - Add the completed column to the board
    board.appendChild(columnEl);
  });
}


// ---------------------------------------------
// createColumn(column)
// ---------------------------------------------
function createColumn(column) {

  const section = document.createElement("section");
  section.className = "column";
  section.dataset.column = column.id;

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
// 7.1 Updated to include a delete button
// The delete listener is attached here because
// each button is created dynamically and only
// exists after createCard runs.
// ---------------------------------------------
function createCard(card) {

  // Create the article element
  const article = document.createElement("article");

  // card-done class fades the card and adds strikethrough
  article.className = card.done ? "card card-done" : "card";

  // data-id lets us identify this card for deletion
  article.dataset.id = card.id;

  // Map the tag name to its CSS class
  const tagClass = getTagClass(card.tag);

  // 7.1 — delete button added inside card-footer
  // data-id on the button stores the card id for reference
  article.innerHTML = `
    <p class="card-title">${card.title}</p>
    <div class="card-footer">
      <span class="card-tag ${tagClass}">${card.tag}</span>
      <button class="delete-btn" data-id="${card.id}">Delete</button>
    </div>
  `;

  // 7.1 — attach the delete listener directly to this button
  // We do this here because the button only exists after
  // innerHTML is set above
  const deleteBtn = article.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    deleteCard(card.id); // passes this card's id to deleteCard()
  });

  return article;
}


// ---------------------------------------------
// getTagClass(tag)
// ---------------------------------------------
function getTagClass(tag) {
  const tagMap = {
    "Research": "tag-blue",
    "Setup":    "tag-green",
    "HTML":     "tag-yellow",
    "CSS":      "tag-yellow",
    "JS":       "tag-blue",
    "Planning": "tag-green",
    "Testing":  "tag-pink",
    "Design":   "tag-yellow",
    "Review":   "tag-purple",
    "Task":     "tag-blue",   // default tag for new cards added via addCard()
  };

  return tagMap[tag] || "tag-blue";
}