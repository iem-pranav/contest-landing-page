// File: contests.js
// Description: Stores all contest information for the hub.

export const contests = [
    {
        id: 1,
        title: "Dynamic Programming Deep Dive",
        description: "A series of challenges focusing on DP patterns, from basic memoization to advanced state optimization.",
        platform: "HackerRank",
        date: "2025-08-28T18:00:00Z",
        difficulty: "Hard",
        category: "Algorithms",
        url: "https://www.hackerrank.com/contests",
        solutionUnlockDate: "2025-08-29T18:00:00Z", // Unlocks tomorrow
    },
    {
        id: 2,
        title: "Graph Traversal Challenge",
        description: "Test your knowledge of BFS, DFS, and other graph algorithms with this set of maze and network problems.",
        platform: "LeetCode",
        date: "2025-08-25T18:00:00Z",
        difficulty: "Medium",
        category: "Data Structures",
        url: "https://leetcode.com/contest",
        solutionUnlockDate: "2025-08-27T18:00:00Z", // Unlocked yesterday
    },
    {
        id: 3,
        title: "Introduction to Arrays",
        description: "Perfect for beginners, this contest covers fundamental manipulation techniques for arrays.",
        platform: "HackerRank",
        date: "2025-08-15T10:00:00Z",
        difficulty: "Easy",
        category: "Algorithms",
        url: "https://www.hackerrank.com/contests",
        // No solutionUnlockDate means no solution button will appear.
    }
];
