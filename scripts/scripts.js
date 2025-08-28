// File: script.js
// Description: Main logic for the Contest Hub application.

import { contests } from './contests.js';
import { solutions } from './solutions.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const themeToggle = document.getElementById('theme-toggle');
    const contestGrid = document.getElementById('contest-grid');
    const latestContestSection = document.getElementById('latest-contest');
    const latestContestContainer = document.getElementById('latest-contest-container');
    const searchBar = document.getElementById('search-bar');
    const filterButtonsContainer = document.getElementById('filter-buttons');
    const solutionModal = document.getElementById('solution-modal');
    const solutionCodeBlock = document.getElementById('solution-code-block');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    let allContests = [];
    let currentFilter = 'All';

    // --- Theme Management ---
    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
    };
    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // --- Solution Modal Logic ---
    const openSolutionModal = (code) => {
        solutionCodeBlock.textContent = code.trim();
        solutionModal.classList.remove('hidden');
    };
    const closeSolutionModal = () => {
        solutionModal.classList.add('hidden');
        solutionCodeBlock.textContent = '';
    };
    modalCloseBtn.addEventListener('click', closeSolutionModal);
    solutionModal.addEventListener('click', (e) => {
        if (e.target === solutionModal) closeSolutionModal();
    });

    // --- Time-Lock Button Rendering ---
    const getSolutionButtonHTML = (contest) => {
        if (!contest.solutionUnlockDate || !solutions.has(contest.id)) return '';

        const now = new Date();
        const unlockDate = new Date(contest.solutionUnlockDate);
        const isUnlocked = now >= unlockDate;

        if (isUnlocked) {
            return `<button class="action-btn btn-solution unlocked" data-id="${contest.id}">👁️ View Solution</button>`;
        } else {
            const timeRemaining = unlockDate.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            return `<button class="action-btn btn-solution locked" data-id="${contest.id}" disabled>🔒 Unlocks ${timeRemaining}</button>`;
        }
    };
    
    // --- Dynamic Button Updater ---
    const updateSolutionButtons = () => {
        document.querySelectorAll('.btn-solution.locked').forEach(button => {
            const contestId = parseInt(button.dataset.id, 10);
            const contest = allContests.find(c => c.id === contestId);
            if (contest) {
                const isUnlocked = new Date() >= new Date(contest.solutionUnlockDate);
                if (isUnlocked) {
                    button.classList.replace('locked', 'unlocked');
                    button.disabled = false;
                    button.innerHTML = `👁️ View Solution`;
                }
            }
        });
    };

    // --- Card Creation and Rendering ---
    const createContestCard = (contest) => {
        const date = new Date(contest.date);
        const formattedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        const card = document.createElement('div');
        card.className = 'contest-card';
        card.dataset.title = contest.title.toLowerCase();
        card.dataset.category = contest.category;

        card.innerHTML = `
            <div class="card-header"><span class="platform-name">${contest.platform}</span></div>
            <h3 class="contest-title">${contest.title}</h3>
            <p class="contest-description">${contest.description}</p>
            <p class="contest-meta">${formattedDate}</p>
            <div class="card-tags">
                <span class="tag difficulty-${contest.difficulty}">${contest.difficulty}</span>
                <span class="tag category">${contest.category}</span>
            </div>
            <div class="card-actions">
                <div class="card-actions-main">
                    <a href="${contest.url}" target="_blank" class="action-btn btn-start">Start Contest</a>
                    <button class="action-btn btn-copy" data-url="${contest.url}" title="Copy contest link">
                        <svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                    </button>
                </div>
                ${getSolutionButtonHTML(contest)}
            </div>`;
        return card;
    };

    const renderContests = (contestsToRender, container) => {
        container.innerHTML = '';
        contestsToRender.forEach(contest => container.appendChild(createContestCard(contest)));
    };

    const setupFilterButtons = () => {
        const categories = ['All', ...new Set(allContests.map(c => c.category))];
        filterButtonsContainer.innerHTML = categories.map(category => 
            `<button class="filter-btn ${category === 'All' ? 'active' : ''}" data-category="${category}">${category}</button>`
        ).join('');
    };
    
    const initializePage = () => {
        allContests = [...contests].sort((a, b) => new Date(b.date) - new Date(a.date));
        const latestContest = allContests[0];
        const timeDiff = new Date() - new Date(latestContest.date);
        if (timeDiff / 36e5 <= 24 && timeDiff > 0) {
            latestContestSection.classList.remove('hidden');
            renderContests([latestContest], latestContestContainer);
        }
        renderContests(allContests, contestGrid);
        setupFilterButtons();
        setInterval(updateSolutionButtons, 60000); // Check every minute
    };

    // --- Filtering and Searching ---
    const filterAndSearch = () => {
        const searchTerm = searchBar.value.toLowerCase();
        document.querySelectorAll('#contest-grid .contest-card').forEach(card => {
            const titleMatch = card.dataset.title.includes(searchTerm);
            const categoryMatch = currentFilter === 'All' || card.dataset.category === currentFilter;
            card.style.display = (titleMatch && categoryMatch) ? 'flex' : 'none';
        });
    };
    searchBar.addEventListener('input', filterAndSearch);
    filterButtonsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            filterAndSearch();
        }
    });

    // --- Main Event Listener for Button Clicks ---
    document.addEventListener('click', (e) => {
        const solutionBtn = e.target.closest('.btn-solution.unlocked');
        if (solutionBtn) {
            const contestId = parseInt(solutionBtn.dataset.id, 10);
            const solutionCode = solutions.get(contestId);
            if (solutionCode) openSolutionModal(solutionCode);
        }

        const copyBtn = e.target.closest('.btn-copy');
        if (copyBtn) {
            navigator.clipboard.writeText(copyBtn.dataset.url).then(() => {
                const originalContent = copyBtn.innerHTML;
                copyBtn.innerHTML = `<span>Copied!</span>`;
                setTimeout(() => { copyBtn.innerHTML = originalContent; }, 1500);
            });
        }
    });

    // --- Initial Load ---
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    initializePage();
});
