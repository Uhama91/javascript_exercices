# Shopping List — DOM Manipulation Practice

This is a beginner-friendly shopping list app built with vanilla JavaScript. It was created as part of my learning journey with [The Odin Project](https://www.theodinproject.com/) and heavily guided by [MDN WebDocs](https://developer.mozilla.org/). The project helped me deepen my understanding of DOM manipulation, JavaScript functions, and event handling.

## About the Project

The idea is simple: a user types an item into an input field, clicks a button, and the item gets added to a list below — complete with a delete button. Items are dynamically created in the DOM using JavaScript, and the app maintains the list without overwriting the previous entries.

Though it looks simple on the surface, this project challenged me in many ways, from scope issues to DOM hierarchy mistakes. It’s been a great exercise in debugging and really understanding how JavaScript interacts with HTML elements.

## What I Learned

Over the course of two days, here’s what I tackled and figured out:

### Functions Refresher (March 28)

- Revisited the basics of JavaScript functions (syntax, `return`, scope).
- Learned to avoid common mistakes like missing a `return` in a block-style ternary.
- Studied resources from MDN, javascript.info, and javascripttutorial.net.

### DOM Manipulation

- Used `document.createElement()` and `appendChild()` to dynamically build list items.
- Learned the difference between `textContent` and `createTextNode()`.
- Applied styles using both `element.style` and `setAttribute("class", "…")`.

### DOM Structure & Insertion Errors (March 29)

- Initially misplaced logic: appended the same span and button to all items, causing overwrites.
- Solved the issue by moving `createElement()` calls **inside** the function so each item has its own span and button.
- Understood the importance of respecting the parent-child structure: `<ul> > <li> > <span> + <button>`.

### Event Handling

- Added a `click` event with `addEventListener()` to handle item deletion.
- Faced scope issues trying to reference the right elements inside the callback.
- Learned to use `parentNode.removeChild()` to delete the correct list item.
- Implemented `input.value = ""` to reset the form field after each submission.

## Technical Stack

- **HTML**: Structure of the page with a form and a list
- **CSS** (optional): For styling and hover effects (planned)
- **JavaScript**: DOM manipulation, events, and logic

## Features

- Add new items to a list dynamically
- Each item has a “delete” button to remove it from the list
- Input field resets after each entry
- Clean and structured DOM hierarchy

## Challenges Faced

- Reusing elements accidentally due to incorrect scope
- Using incorrect syntax for `textContent` (e.g., writing it as a function)
- Forgetting to reset the input field after submission
- Structuring `appendChild` calls in the wrong order, breaking the layout

Each mistake was an opportunity to solidify my understanding of JavaScript’s behavior with the DOM.

## What's Next?

- Add `.focus()` to automatically place the cursor back in the input field
- Use CSS classes for styling instead of inline styles
- Refactor with anonymous callbacks or extract smaller reusable functions
- Add visual feedback when items are added or removed

## Acknowledgments

Thanks to:

- [MDN WebDocs](https://developer.mozilla.org/)
- [The Odin Project](https://www.theodinproject.com/)
- Stack Overflow, when things got confusing
- My own persistence — debugging this was both frustrating and fun

---

**Built with love, frustration, and lots of `appendChild()`s.**
