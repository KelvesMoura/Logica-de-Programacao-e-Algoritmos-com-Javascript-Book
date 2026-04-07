# 📘 JavaScript Logic and Algorithms Exercises

This repository contains a collection of **JavaScript exercises focused on programming logic and algorithm development**, implemented with **HTML integration and DOM manipulation**.

The activities in this project are **based on examples presented in the book**:

📖 **Lógica de Programação e Algoritmos com JavaScript**  
👨‍🏫 Author: **Edécio Fernando Iepsen**

All conceptual credit for the exercises belongs to the author.  
This repository represents a **practical implementation and study of the examples using JavaScript and browser interaction**.

---

## 🔗 Deploy

### 🔗 Access the page published here:

👉 https://kelvesmoura.github.io/Logica-de-Programacao-e-Algoritmos-com-Javascript-Book/

---

# 🎯 Project Purpose

The main objective of this project is to **practice programming logic using JavaScript** through interactive exercises.

These examples help reinforce:

- 🧠 Logical reasoning
- 🧩 Algorithm construction
- 💻 JavaScript fundamentals
- 🌐 Interaction between **JavaScript and HTML**

The exercises simulate small programs such as calculators, grade systems, and logical simulations.

---

# 🚀 Technologies Used

- 🧾 **HTML5**
- ⚡ **JavaScript (Vanilla JS — ES Modules)**
- 🌐 **DOM Manipulation**
- 🎨 **TailwindCSS (CDN)**

---

# 🗂️ Project Structure

```
project/
├── index.html                  # Main HTML — all exercise sections
└── src/
    └── assets/
        ├── js/
        │   ├── index.js        # Entry point — imports all chapter modules
        │   ├── helper.js       # Shared utility functions
        │   ├── constant.js     # Shared numeric constants
        │   └── chapters/
        │       ├── ch02.js     # Chapter 2 — HTML Forms & Interaction
        │       ├── ch04.js     # Chapter 4 — Conditional Logic
        │       ├── ch05.js     # Chapter 5 — Repetition Structures
        │       ├── ch06.js     # Chapter 6 — Arrays & Interactive Programs
        │       ├── ch07.js     # Chapter 7 — Strings, Validation & Text
        │       └── ch08.js     # Chapter 8 — Objects & Data Processing
        └── image/              # Reference screenshots per exercise (Eg_X.Y.png)
```

---

# ⚙️ Module Architecture

The project uses the native **ES Modules** system (`type="module"`).

### Entry point — `index.js`

Responsible only for orchestrating the chapter modules:

```js
import "./chapters/ch02.js";
import "./chapters/ch04.js";
import "./chapters/ch05.js";
import "./chapters/ch06.js";
import "./chapters/ch07.js";
import "./chapters/ch08.js";
```

### Shared utilities — `helper.js` and `constant.js`

`helper.js` and `constant.js` are **not imported by `index.js`** — each chapter file imports only what it needs directly:

```js
// example inside ch02.js
import * as h from "../helper.js";
import * as c from "../constant.js";
```

> ES Modules are **singletons**: even if `helper.js` and `constant.js` are imported by multiple chapter files, the browser loads and executes each module **only once**. Subsequent imports receive the same cached instance — so there is no performance cost in declaring explicit imports per chapter.

### `helper.js` — Utility functions

| Export                           | Purpose                                            |
| -------------------------------- | -------------------------------------------------- |
| `qs(selector)`                   | Shorthand for `document.querySelector`             |
| `qsChild(selector, parent)`      | Scoped child query (defaults to `document`)        |
| `half(value)`                    | Returns half of a numeric value                    |
| `resetFull(fieldReset)`          | Resets a form and clears all output elements       |
| `currencyFormat(value)`          | Formats numbers as Brazilian Real (`pt-BR`)        |
| `generateReport(list)`           | Groups children by age and builds a text report    |
| `reduceList(list)`               | Reduces an object array into a formatted string    |
| `prepareGames(list)`             | Pairs teams from a list into match strings         |
| `dateFormat(date)`               | Adds 90 days to a date and returns `dd/mm/yyyy`    |
| `dealOutput(model, year, price)` | Classifies a vehicle and computes installment plan |

### `constant.js` — Shared constants

| Constant              | Value  | Used for                             |
| --------------------- | ------ | ------------------------------------ |
| `carParcel`           | `12`   | Car installment count                |
| `kiloToGram`          | `1000` | kg ↔ g conversion                    |
| `double`              | `2`    | "Buy 2 for price of 1" promotions    |
| `triple`              | `3`    | "Take 3 pay 2" promotions            |
| `half`                | `2`    | Divisor for half-price calculations  |
| `indexMale`           | `22`   | BMI factor — male                    |
| `indexFemale`         | `21`   | BMI factor — female                  |
| `hour24`              | `24`   | 24-hour cycle boundary               |
| `hourPlus`            | `5`    | Brazil → France time offset          |
| `limitMultiplication` | `10`   | Upper bound for multiplication table |
| `rangeWorldCup`       | `4`    | World Cup year interval              |

---

# 📚 Concepts Practiced

The exercises explore important programming concepts used in real applications.

---

# 🌐 HTML Integration

Several programs interact directly with **HTML forms and inputs**, allowing users to enter values and receive results dynamically.

Examples:

- 🎬 Movie duration converter
- 🚗 Vehicle promotion simulator
- 🍽 Restaurant price calculator
- 💊 Pharmacy promotion calculator
- 💻 Lan house billing system
- 🛒 Supermarket offer calculator
- 🎓 Student grade evaluation
- ⚖️ Ideal weight calculator
- 🧮 Square root calculator
- 🏧 ATM withdrawal simulation
- 🚗 Parking meter simulator

Concepts practiced:

- `querySelector`
- Form handling
- Dynamic content updates
- DOM manipulation

---

# 🔀 Conditional Logic

Decision structures determine different results depending on user input.

Examples:

- 🎓 Student approval or failure based on grade average
- ⚖️ Ideal weight calculation based on gender
- 🚗 Parking time based on payment value
- 🔺 Triangle type identification
- 🏧 ATM withdrawal validation

Concepts practiced:

- `if`
- `else`
- `else if`
- Ternary operator `? :`

---

# 🔁 Repetition Structures

Loop structures repeat operations automatically.

Examples:

- ✖️ Multiplication table generator
- 🔽 Descending number sequence
- 🔄 Interactive loop using `do...while`
- 🔢 Prime number validation
- ⭐ Pattern generation with symbols
- ⚽ Year validation loops

Concepts practiced:

- `for`
- `while`
- `do...while`
- `break`
- `continue`
- Nested loops
- Mathematical iteration

---

# 🔤 Strings and Numbers

Several exercises manipulate **strings and numbers** to produce formatted outputs.

Examples:

- 📄 Text-based reports
- 🔢 Mathematical calculations
- ⭐ Symbol pattern generation
- 🍎 String repetition exercises

Concepts practiced:

- Template literals
- String concatenation
- `toFixed()`
- Numeric calculations

---

# ⏰ Date and Time Logic

Some exercises simulate **time calculations**.

Example:

- 🌍 Time zone conversion (Brazil → France)

Concepts practiced:

- Time arithmetic
- Conditional adjustments for 24-hour cycles

---

# ⚙️ Functions and Events

The project uses **event-driven programming** to trigger actions when users interact with the page.

Examples:

- Form `submit` events for calculations
- `reset` events to clear results
- `click` events for interactive features
- Dynamic DOM updates

Concepts practiced:

- Event listeners
- Callback functions
- DOM manipulation
- Form interaction

---

# 🧪 Implemented Programs

This repository currently includes the following exercises:

---

# 📖 Chapter 2 — HTML Forms and Interaction

- 🎬 **Cine JS** — Movie Duration Converter
- 🚗 **Vehicle Dealership Promotion**
- 🍽 **Restaurant Price Calculator**
- 💊 **Pharmacy Promotion**
- 💻 **Lan House Billing Calculator**
- 🛒 **Supermarket Promotion**

---

# 📖 Chapter 4 — Conditional Logic

- 🎓 **Student Grade Evaluation**
- ⚖️ **Ideal Weight Calculator**
- 🌍 **Time Zone Converter**
- 🧮 **Square Root Calculator**
- 🏧 **ATM Withdrawal System**
- 🚗 **Parking Meter Simulator**
- 🔺 **Triangle Type Identifier**

---

# 📖 Chapter 5 — Repetition Structures

- ✖️ **Multiplication Table Generator**
- 🔽 **Descending Numbers Generator**
- 🔄 **Loop Interruption Test**
- 🧾 **Monthly Accounts Register**
- 🔢 **Prime Number Checker**
- ⭐ **Star Factory**
- ⚽ **World Cup Year Validator**
- 🍎 **Repeat Fruit Program**
- 🐹 **Chinchilla Breeding Simulation**
- 🔷 **Perfect Number Checker**

---

# 📖 Chapter 6 — Arrays and Interactive Programs

- 🦷 **Dental Office Queue System**
- 🎮 **Guess the Number Game**
- 🚗 **Herbie Resale**
- 🧸 **Toys Program**
- ⚽ **Playoff Games**
- 🔢 **Program to Sort Numbers**
- 🎤 **Game Show**

Concepts practiced:

- Arrays (`push`, `shift`, `unshift`)
- Filtering and sorting
- Queue simulation
- Random number generation
- Interactive lists
- DOM interaction
- Event handling

---

# 📖 Chapter 7 — Strings, Validation and Text Processing

- 🍎 **What's the Fruit?**
- 🪪 **Program Name on Badge**
- 📧 **Institutional Email Program**
- 🔐 **Password Validation Program**
- 🧾 **Store Management Software**
- 🔒 **Cryptograph Program**
- 🔁 **Palindrome Sentence Exercise**
- 🚓 **Traffic Ticket**

Concepts practiced:

- String manipulation
- Character validation
- Text formatting
- Pattern recognition
- Date calculations
- Input validation

---

# 📖 Chapter 8 — Objects and Data Processing

- 🚗 **Car Dealership**
- 🍕 **Pizza Order Control** — order management with pizza and drink selection, size rules and flavor limits
- 🏊 **Swimming Club** — athlete registration with age-based category classification
- 🔑 **Initial Password Program** — generates an initial password from last name and vowel count
- 🐾 **Pet Avenue** — veterinary discount calculator based on health plan type

Concepts practiced:

- Object structures
- Conditional classification
- Financial calculations
- Installment simulation
- Business logic implementation
- `select` and `radio` input handling
- Dynamic UI visibility (show/hide elements)
- List building with accumulated state
- String processing for password generation

---

# ▶️ How to Run the Project

### 1️⃣ Clone the repository

```bash
git clone https://github.com/KelvesMoura/Logica-de-Programacao-e-Algoritmos-com-Javascript-Book.git
```

### 2️⃣ Open with a local server

Because the project uses ES Modules (`type="module"`), opening `index.html` directly as a `file://` URL will block the imports. Use any static server:

```bash
# Node.js (no install needed)
npx serve .

# Python 3
python -m http.server 8080

# VS Code — install "Live Server" extension and click "Go Live"
```

### 3️⃣ Open in browser

```
http://localhost:8080
```

---

# 📝 License

Study project based on the book _Lógica de Programação e Algoritmos com JavaScript_ by Edécio Fernando Iepsen.  
All exercise concepts belong to the original author.
