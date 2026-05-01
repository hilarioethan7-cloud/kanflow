# ✏️ KanFlow — Module 1 Task Sheet

**Student Name:** ________________________________
**GitHub Repo URL:** ________________________________
**Date Submitted:** ________________________________

---

## 📋 Instructions

1. Download the `module-1-starter.zip` from Google Classroom
2. Extract it into your `kanflow/` folder on your Desktop
3. Open the folder in VS Code and launch Live Server
4. Complete all tasks below by editing the starter code
5. Push your finished work to GitHub
6. Paste your GitHub repo URL above and submit on Google Classroom

---

## ✅ Tasks

### Task 1 — Add a New Column
Add a fourth column called **"Review"** between "In Progress" and "Done" in `index.html`.

Requirements:
- Must have `data-column="review"`
- Must have `id="col-review"`
- Must follow the same HTML structure as the other columns
- Add a dot color for it in `style.css`: `.dot-review { background: #a29bfe; }`

**Expected result:** Four columns visible on the board.

---

### Task 2 — Add Your Own Cards
Add **3 new cards** to the "To Do" column with tasks you would personally work on.

Requirements:
- Each card must have a `<p class="card-title">` with a real task title
- Each card must have at least one tag using an existing tag class

**Expected result:** The To Do column shows 6 cards total.

---

### Task 3 — Customize the Accent Color
Change the board's accent color to something of your choice.

Requirements:
- Find `--accent` in the `:root` block inside `style.css`
- Change it to any valid CSS color (hex, rgb, or color name)

**Expected result:** The header logo icon reflects your new color.

---

### Task 4 — Console Exploration
Open DevTools (F12 → Console tab) and run the following commands. Write your answers below.

```js
document.querySelectorAll('.card').length
```
**Your answer:** _______

```js
document.querySelectorAll('#col-todo .card').length
```
**Your answer:** _______

```js
document.querySelector('[data-column="done"]').id
```
**Your answer:** _______

---

### Task 5 — Push to GitHub

When all tasks above are done, push your work:

```bash
git add .
git commit -m "feat(module-1): complete HTML structure tasks"
git push
```

Paste your GitHub repo URL here: ________________________________

---

## ✅ Self-Check Before Submitting

- [ ] Four columns are visible on the board (including Review)
- [ ] To Do column has at least 6 cards
- [ ] Accent color has been changed in style.css
- [ ] Console answers are filled in above
- [ ] Work is pushed to GitHub with the correct commit message
- [ ] GitHub repo URL is submitted on Google Classroom
