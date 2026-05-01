// =============================================
// KANFLOW - MODULE 2: data.js
// =============================================
// This file defines all the data for the board.
// Instead of writing cards in HTML, we store
// them here as JavaScript objects.
//
// KEY CONCEPT: Data-driven UI
// The board renders from this data. When the
// data changes, we re-render the board.
// =============================================

// COLUMNS
// Each column has an id, a display title, and a dot color class.
const columns = [
  { id: "todo",       title: "To Do",       dot: "dot-todo"       },
  { id: "inprogress", title: "In Progress", dot: "dot-inprogress" },
  { id: "review",     title: "Review",      dot: "dot-review"     },
  { id: "done",       title: "Done",        dot: "dot-done"       },
];

// CARDS
// Each card has:
//   id     - a unique number to identify this card
//   title  - the text shown on the card
//   column - which column this card belongs to (must match a column id above)
//   tag    - the label shown at the bottom of the card
//   done   - true if the card should appear faded with a strikethrough
const cards = [
  { id: 1, title: "Research event-driven patterns",  column: "todo",       tag: "Research", done: false },
  { id: 2, title: "Set up project folder structure", column: "todo",       tag: "Setup",    done: false },
  { id: 3, title: "Write HTML skeleton",             column: "todo",       tag: "HTML",     done: false },
  { id: 4, title: "Style the board layout with CSS", column: "inprogress", tag: "CSS",      done: false },
  { id: 5, title: "Link JS files to index.html",     column: "inprogress", tag: "JS",       done: false },
  { id: 6, title: "Plan Kanban board modules",       column: "done",       tag: "Planning", done: true  },
];
