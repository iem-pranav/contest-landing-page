The DSA Arena - Contest Hub
<p align="center">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/HTML5-E34F26%3Fstyle%3Dfor-the-badge%26logo%3Dhtml5%26logoColor%3Dwhite" alt="HTML5 Badge"/>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/CSS3-1572B6%3Fstyle%3Dfor-the-badge%26logo%3Dcss3%26logoColor%3Dwhite" alt="CSS3 Badge"/>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/JavaScript-F7DF1E%3Fstyle%3Dfor-the-badge%26logo%3Djavascript%26logoColor%3Dblack" alt="JavaScript Badge"/>
<img src="https://www.google.com/search?q=https://img.shields.io/badge/License-MIT-yellow.svg%3Fstyle%3Dfor-the-badge" alt="License: MIT"/>
</p>

A modern, professional, and academic archive for programming contests. This static website is built with vanilla HTML, CSS, and JavaScript, designed to be a simple yet powerful hub for students to access coding challenges curated by their teacher.

➡️ View Live Demo ([<- Replace with your actual GitHub Pages link](https://iem-pranav.github.io/contest-landing-page/))

🎬 Website in Action
A quick look at the core features, including the theme toggle, live search, and the automatic solution unlock.

(Tip: You can create a GIF of your own screen using a free tool like ScreenToGif and upload it to your repository.)

✨ Core Features
🚀 Dynamic Contest Cards: All contest data is loaded dynamically from separate JavaScript files, making updates incredibly simple.

🔍 Live Search & Filtering: Instantly search for contests by title or filter them by category (e.g., Algorithms, Data Structures).

🔴 "Live Now" Section: A special section automatically appears for any contest that has started within the last 24 hours.

⏳ Time-Locked Solutions: A "View Solution" button remains locked (🔒) until a specific date and time set by the teacher, at which point it unlocks automatically for all users.

🎨 Dual Theme Engine: A sleek Light/Dark mode toggle that saves the user's preference in their browser's local storage.

📱 Fully Responsive: A mobile-first design that looks great on all devices, from phones to desktops.

🧩 Zero Dependencies: Built with only HTML, CSS, and Vanilla JavaScript. No frameworks, no libraries, no hassle.

📂 Project Structure
The project is intentionally kept simple and is organized into the following files for easy management:

.
├── 📁 contests.js         # <-- Teacher edits this: Contest details
├── 📁 solutions.js        # <-- Teacher edits this: Solution code
├── 📄 index.html          # Main HTML structure
├── 📄 script.js           # All application logic
└── 📄 style.css           # All styling and theme rules

🚀 Getting Started
This is a static website. No complex setup is required.

Clone the repository:

git clone [https://github.com/your-github-username/your-repo-name.git](https://github.com/your-github-username/your-repo-name.git)

Navigate to the directory:

cd your-repo-name

Open index.html in your browser:
Simply double-click the index.html file, and the website will be running locally.

📝 How to Add a New Contest
This is the simple manual workflow for the teacher to add a new contest. No coding knowledge is required.

Step 1: Add Contest Details 📋
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

Step 2: Add the Solution Code 💡
Open the solutions.js file.

Add a new entry to the Map, using the same id from contests.js as the key.

The value should be the solution code, enclosed in backticks `.

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

Step 3: Save and Upload ✅
Save both files. If you are using GitHub, commit and push the changes. The website will update automatically.
