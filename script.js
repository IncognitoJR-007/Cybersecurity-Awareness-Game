const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const scoreBoard = document.getElementById('score-board');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const nameContainer = document.getElementById('name-container');
const playerNameInput = document.getElementById('player-name');
const startButton = document.getElementById('start-button');
const thankYouContainer = document.getElementById('thank-you-container');
const playerNameDisplay = document.getElementById('player-name-display');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-button');

const questions = [
    {
        question: 'What is a strong password?',
        answers: [
            { text: '123456', correct: false },
            { text: 'password', correct: false },
            { text: 'P@ssw0rd123!', correct: true },
            { text: 'qwerty', correct: false }
        ]
    },
    {
        question: 'What should you do if you receive a suspicious email?',
        answers: [
            { text: 'Open it', correct: false },
            { text: 'Delete it', correct: false },
            { text: 'Report it', correct: true },
            { text: 'Forward it to your friends', correct: false }
        ]
    },
    {
        question: 'What is two-factor authentication?',
        answers: [
            { text: 'A security measure that requires two forms of verification', correct: true },
            { text: 'A type of malware', correct: false },
            { text: 'A programming language', correct: false },
            { text: 'A network protocol', correct: false }
        ]
    },
    {
        question: 'Why is it important to update your software regularly?',
        answers: [
            { text: 'To access new features', correct: false },
            { text: 'To avoid security vulnerabilities', correct: true },
            { text: 'To slow down your computer', correct: false },
            { text: 'To make it look nicer', correct: false }
        ]
    },
    {
        question: 'What is phishing?',
        answers: [
            { text: 'A type of fishing', correct: false },
            { text: 'A cyber attack that tricks you into giving personal information', correct: true },
            { text: 'A method of securing data', correct: false },
            { text: 'An encryption technique', correct: false }
        ]
    },
    {
        question: 'What is the best way to secure your Wi-Fi network?',
        answers: [
            { text: 'Using an easily guessed password', correct: false },
            { text: 'Changing the default admin username and password', correct: true },
            { text: 'Leaving it open', correct: false },
            { text: 'Using WEP encryption', correct: false }
        ]
    },
    {
        question: 'What does VPN stand for?',
        answers: [
            { text: 'Virtual Private Network', correct: true },
            { text: 'Virtual Public Network', correct: false },
            { text: 'Very Personal Network', correct: false },
            { text: 'Variable Protocol Network', correct: false }
        ]
    },
    {
        question: 'What should you do with old electronics?',
        answers: [
            { text: 'Throw them away', correct: false },
            { text: 'Donate them without wiping', correct: false },
            { text: 'Properly wipe and recycle them', correct: true },
            { text: 'Keep them without any precautions', correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
let playerName = '';

startButton.addEventListener('click', () => {
    playerName = playerNameInput.value.trim();
    if (playerName) {
        nameContainer.style.display = 'none';
        startGame();
    } else {
        alert('Please enter your name before starting the game.');
    }
});

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    scoreElement.innerText = score;
    scoreBoard.style.display = 'block';
    questionContainer.style.display = 'block';
    thankYouContainer.style.display = 'none';
    playerNameDisplay.innerText = playerName;
    showQuestion(questions[currentQuestionIndex]);
    startTimer();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct)
