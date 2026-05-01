// =============================================
// KANFLOW — MODULE 1: main.js
// Open DevTools (F12 > Console) to explore
// =============================================

console.log("✅ KanFlow is running — Module 1!");

const board   = document.getElementById("board");
const columns = document.querySelectorAll(".column");
const cards   = document.querySelectorAll(".card");

console.log("Board:", board);
console.log("Columns found:", columns.length);
console.log("Cards found:", cards.length);

// ── Try these in the Console (F12) ──────────
// 1. document.querySelectorAll('.card').length
// 2. document.querySelector('.card').textContent
// 3. document.querySelector('h1').textContent = 'My Board'
// 4. document.querySelectorAll('#col-todo .card').length
// 5. document.querySelector('[data-column="done"]').id
