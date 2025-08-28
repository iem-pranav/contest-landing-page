The DSA Arena - Contest Hub
A modern, professional, and academic archive for programming contests. This static website is built with vanilla HTML, CSS, and JavaScript, designed to be a simple yet powerful hub for students to access coding challenges curated by their teacher.

➡️ View Live Demo (<- Replace with your actual GitHub Pages link)

✨ Features
Dynamic Contest Cards: All contest data is loaded dynamically from separate JavaScript files, making updates easy.

Live Search & Filtering: Instantly search for contests by title or filter them by category (e.g., Algorithms, Data Structures).

"Live Now" Section: A special section automatically appears for any contest that has started within the last 24 hours.

Time-Locked Solutions: A "View Solution" button appears on cards, which remains locked (🔒) until a specific date and time set by the teacher. It unlocks automatically for all users.

Dual Theme Engine: A sleek Light/Dark mode toggle that saves the user's preference in their browser.

Fully Responsive: A mobile-first design that looks great on all devices, from phones to desktops.

Zero Dependencies: Built with only HTML, CSS, and Vanilla JavaScript. No frameworks, no libraries, no hassle.

📂 Project Structure
The project is intentionally kept simple and is organized into the following files:

.
├──  contests.js         # <-- Teacher edits this: Contest details
├── solutions.js        # <-- Teacher edits this: Solution code
├── index.html          # Main HTML structure
├── script.js           # All application logic
└── style.css           # All styling and theme rules

index.html: The main entry point and structure of the website.

style.css: Contains all visual styling, including the light/dark themes, animations, and responsive layout.

script.js: The core of the application. It handles rendering contests, filtering, the theme switcher, and the solution-unlocking logic.

contests.js: (For Teacher) This file contains the list of all contest objects. This is where new contests are added.

solutions.js: (For Teacher) This file contains the solution code for each contest, linked by a unique ID.

📝 How to Add a New Contest
This is the simple manual workflow for the teacher to add a new contest. No coding knowledge is required.

Step 1: Add Contest Details
Open the contests.js file.

Copy an existing contest object (from { to }).

Paste it at the top of the list, right after the first [.

Update the details for your new contest:

id: A new, unique number (e.g., if the last one was 3, make this 4).

title: The name of the contest.

description: A short summary.

platform: e.g., "HackerRank", "LeetCode".

date: The start date of the contest in YYYY-MM-DDTHH:mm:ssZ format.

difficulty: "Easy", "Medium", or "Hard".

category: e.g., "Algorithms", "Data Structures".

url: The direct link to the contest.

solutionUnlockDate: The exact date and time you want the solution to become visible, in the same format as date.

Step 2: Add the Solution Code
Open the solutions.js file.

Add a new entry to the Map.

The key should be the same id you used in contests.js.

The value should be the solution code, enclosed in backticks `` `.

Example: If you added a contest with id: 4 in contests.js, you would add this to solutions.js:

// solutions.js

// ... (previous solutions)
    [4, `
// Your new solution code goes here
// It can be multi-line
function solveProblem() {
    return "Hello, World!";
}
`]
// ...

Step 3: Save and Upload
Save both
