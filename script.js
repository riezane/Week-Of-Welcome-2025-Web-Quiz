// Game State
let gameState = "welcome"
let currentDifficulty = "easy"
let currentQuestionIndex = 0
let lives = 5
let scores = { easy: 0, medium: 0, hard: 0 }
let totalQuestions = { easy: 0, medium: 0, hard: 0 }
let selectedAnswer = null
let showResult = false
let timeLeft = 30
let timerActive = false
let timerInterval = null
let hintsUsed = 0
let showHint = false
let wrongAnswers = []
let playerName = ""
let shuffledQuestions = {}

// Quiz Data
const quizData = {
  easy: [
    {
      question: "What does CPU stand for in computing?",
      type: "multiple",
      options: [
        "a) Central Processing Unit",
        "b) Computer Programming Utility",
        "c) Core Processing Unit",
        "d) Central Program Utility",
      ],
      answer: "a",
      hint: "It’s called the ‘brain’ of the computer—and it processes instructions centrally.",
    },
    {
      question: "HTML is used to style web pages. True or False?",
      type: "boolean",
      answer: false,
      hint: "HTML structures, but something else does the styling.",
    },
    {
      question: "What does 'WWW' stand for? World Wide ____",
      type: "fill",
      answer: "web",
      hint: "It’s not 'webs' or 'webbing', just the common singular term.",
    },
    {
      question: "Which company makes the iPhone?",
      type: "multiple",
      options: ["a) Apple", "b) iOS", "c) Google", "d) iPhone Inc."],
      answer: "a",
      hint: "Don’t let the product names confuse you—think company.",
    },
    {
      question: "RAM is where files are saved permanently. True or False?",
      type: "boolean",
      answer: false,
      hint: "It helps your computer *think*, but forgets everything after a reboot.",
    },
    {
      question: "Complete: USB stands for Universal Serial ____",
      type: "fill",
      answer: "bus",
      hint: "It sounds like something you ride... even though it's digital.",
    },
    {
      question: "Which of these is a web browser?",
      type: "multiple",
      options: ["a) Google", "b) Computer", "c) Android", "d) Chrome"],
      answer: "d",
      hint: "You're probably using one right now to view this quiz!",
    },
    {
      question: "WiFi requires a physical cable connection.",
      type: "boolean",
      answer: false,
      hint: "The 'wireless' in WiFi is a big clue.",
    },
    {
      question: "AI stands for ____ intelligence",
      type: "fill",
      answer: "artificial",
      hint: "It’s the kind of intelligence that isn’t naturally born—but is man-made.",
    },
    {
      question: "What is the name of Google's latest AI model?",
      type: "multiple",
      options: ["a) Bard", "b) Gemini", "c) ChatGPT", "d) Deepseek"],
      answer: "b",
      hint: "It recently replaced another AI with a poetic name.",
    },
  ],
  medium: [
    {
      question: "Which programming language is known as the 'language of the web'?",
      type: "multiple",
      options: ["a) Python", "b) JavaScript", "c) Java", "d) Google Script"],
      answer: "b",
      hint: "It runs in every web browser and makes websites interactive.",
    },
    {
      question: "Which language can you use to build both mobile apps and web apps?",
      type: "multiple",
      options: ["a) HTML", "b) Java", "c) JavaScript", "d) SQL"],
      answer: "c",
      hint: "It runs in browsers, but with frameworks like React Native, it goes mobile too.",
    },
    {
      question: "Complete: CSS stands for ____ Style Sheets",
      type: "fill",
      answer: "cascading",
      hint: "Think of how styles can trickle down and override each other based on priority.",
    },
    {
      question: "What does API stand for?",
      type: "multiple",
      options: [
        "a) Application Programming Interface",
        "b) Advanced Programming Integration",
        "c) Automated Program Interaction",
        "d) Application Process Integration",
      ],
      answer: "a",
      hint: "It's how different software applications communicate with each other.",
    },
    {
      question: "Python is a compiled programming language.",
      type: "boolean",
      answer: false,
      hint: "Python code is interpreted, not compiled to machine code beforehand.",
    },
    {
      question: "Complete: SQL stands for Structured ____ Language",
      type: "fill",
      answer: "query",
      hint: "It's used to ask questions to databases.",
    },
    {
      question: "Which HTTP status code indicates 'Not Found'?",
      type: "multiple",
      options: ["a) 200", "b) 301", "c) 404", "d) 500"],
      answer: "c",
      hint: "You've probably seen this error code when a webpage doesn't exist. Usually like ___ not found.",
    },
    {
      question: "What does “NaN” mean in JavaScript?",
      type: "multiple",
      options: ["a) Not a Node", "b) Null and Nil", "c) Not a Number", "d) No assigned Name"],
      answer: "c",
      hint: "It’s what you get when JavaScript tries to do math with nonsense.",
    },
    {
      question: "Complete: IDE stands for Integrated Development ____",
      type: "fill",
      answer: "environment",
      hint: "It's where developers write and test their code.",
    },
    {
      question: "Which of these is NOT a database management system?",
      type: "multiple",
      options: ["a) MySQL", "b) PostgreSQL", "c) Redis", "d) Git"],
      answer: "d",
      hint: "One of these tracks code, not data tables.",
    },
  ],
  hard: [
    {
      question: "What is the time complexity of binary search?",
      type: "multiple",
      options: ["a) O(n)", "b) O(log n)", "c) O(n²)", "d) O(1)"],
      answer: "b",
      hint: "Binary search eliminates half the possibilities with each step.",
    },
    {
      question: "TCP/IP operates at the Network Layer of the OSI model.",
      type: "boolean",
      answer: false,
      hint: "TCP operates at the Transport layer, IP at the Network layer.",
    },
    {
      question: "Complete: The command to install packages in Node.js is 'npm ____'",
      type: "fill",
      answer: "install",
      hint: "You run this to bring dependencies into your project.",
    },
    {
      question: "Which design pattern ensures a class has only one instance?",
      type: "multiple",
      options: ["a) Static", "b) Observer", "c) Singleton", "d) Monostate"],
      answer: "c",
      hint: "The name suggests there can only be one.",
    },
    {
      question: "In web development, localStorage persists data even after the browser is closed.",
      type: "boolean",
      answer: true,
      hint: "It’s not like sessionStorage—it sticks around.",
    },
    {
      question: "Complete: CRUD stands for Create, Read, Update, ____",
      type: "fill",
      answer: "delete",
      hint: "The four basic operations you can perform on data.",
    },
    {
      question: "What does ACID stand for in database transactions?",
      type: "multiple",
      options: [
        "a) Atomicity, Consistency, Isolation, Durability",
        "b) Authentication, Consistency, Integration, Data",
        "c) Automated, Consistent, Integrated, Distributed",
        "d) Advanced, Centralized, Isolated, Distributed",
      ],
      answer: "a",
      hint: "Think of transactions as needing to be all-or-nothing, correct, independent, and permanent.",
    },
    {
      question: "The programming language Go was developed at Google.",
      type: "boolean",
      answer: true,
      hint: "It's also known as Golang and was designed for simplicity and concurrency.",
    },
    {
      question: "Complete: JWT stands for JSON Web ____",
      type: "fill",
      answer: "token",
      hint: "Think of a small digital object you present to prove who you are—like a key in disguise.",
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      type: "multiple",
      options: ["a) Bubble Sort", "b) Selection Sort", "c) Quick Sort", "d) Average Sort"],
      answer: "c",
      hint: "It uses a divide-and-conquer approach and is very fast on average.",
    },
  ],
}


// DOM Elements
const welcomeScreen = document.getElementById("welcome-screen")
const nameEntryScreen = document.getElementById("name-entry-screen")
const quizScreen = document.getElementById("quiz-screen")
const resultsScreen = document.getElementById("results-screen")
const gameOverScreen = document.getElementById("game-over-screen")
const leaderboardScreen = document.getElementById("leaderboard-screen")
const aboutScreen = document.getElementById("about-screen")

// Welcome screen elements
const startBtn = document.getElementById("start-btn")
const viewLeaderboardBtn = document.getElementById("view-leaderboard-btn")

// Name entry elements
const playerNameInput = document.getElementById("player-name-input")
const startWithNameBtn = document.getElementById("start-with-name-btn")
const startAnonymousBtn = document.getElementById("start-anonymous-btn")

// Header elements
const headerDarkModeToggle = document.getElementById("header-dark-mode-toggle")
const headerThemeIcon = document.getElementById("header-theme-icon")
const leaderboardNavBtn = document.getElementById("leaderboard-nav-btn")
const aboutNavBtn = document.getElementById("about-nav-btn")

// Quiz screen elements
const currentDifficultyEl = document.getElementById("current-difficulty")
const questionCounterEl = document.getElementById("question-counter")
const progressFillEl = document.getElementById("progress-fill")
const timerEl = document.getElementById("timer")
const livesEl = document.getElementById("lives")
const questionTextEl = document.getElementById("question-text")
const optionsContainerEl = document.getElementById("options-container")
const hintContainerEl = document.getElementById("hint-container")
const hintTextEl = document.getElementById("hint-text")
const resultContainerEl = document.getElementById("result-container")
const resultMessageEl = document.getElementById("result-message")
const submitBtn = document.getElementById("submit-btn")
const hintBtn = document.getElementById("hint-btn")
const hintsLeftEl = document.getElementById("hints-left")

// Results screen elements
const playerNameDisplayEl = document.getElementById("player-name-display")
const easyScoreEl = document.getElementById("easy-score")
const mediumScoreEl = document.getElementById("medium-score")
const hardScoreEl = document.getElementById("hard-score")
const finalScoreEl = document.getElementById("final-score")
const scoreMessageEl = document.getElementById("score-message")
const hintsUsedDisplayEl = document.getElementById("hints-used-display")
const playerRankEl = document.getElementById("player-rank")
const wrongAnswersSectionEl = document.getElementById("wrong-answers-section")
const wrongAnswersListEl = document.getElementById("wrong-answers-list")
const playAgainBtn = document.getElementById("play-again-btn")
const viewLeaderboardResultsBtn = document.getElementById("view-leaderboard-results-btn")
const shareBtn = document.getElementById("share-btn")

// Game over screen elements
const gameOverPlayerNameEl = document.getElementById("game-over-player-name")
const partialBreakdownEl = document.getElementById("partial-breakdown")
const tryAgainBtn = document.getElementById("try-again-btn")
const viewLeaderboardGameoverBtn = document.getElementById("view-leaderboard-gameover-btn")

// Leaderboard screen elements
const leaderboardListEl = document.getElementById("leaderboard-list")
const clearLeaderboardBtn = document.getElementById("clear-leaderboard-btn")
const backToHomeBtn = document.getElementById("back-to-home-btn")

// About screen elements
const backToHomeAboutBtn = document.getElementById("back-to-home-about-btn")

// Footer elements
const footerHome = document.getElementById("footer-home")
const footerLeaderboard = document.getElementById("footer-leaderboard")
const footerAbout = document.getElementById("footer-about")

// Modal elements
const confirmationModal = document.getElementById("confirmation-modal")
const modalTitle = document.getElementById("modal-title")
const modalMessage = document.getElementById("modal-message")
const modalConfirmBtn = document.getElementById("modal-confirm-btn")
const modalCancelBtn = document.getElementById("modal-cancel-btn")

// Event Listeners
startBtn.addEventListener("click", () => showScreen("nameEntry"))
viewLeaderboardBtn.addEventListener("click", () => showScreen("leaderboard"))
startWithNameBtn.addEventListener("click", startQuizWithName)
startAnonymousBtn.addEventListener("click", startQuizAnonymous)
headerDarkModeToggle.addEventListener("change", toggleDarkMode)
leaderboardNavBtn.addEventListener("click", () => showScreen("leaderboard"))
aboutNavBtn.addEventListener("click", () => showScreen("about"))
submitBtn.addEventListener("click", submitAnswer)
hintBtn.addEventListener("click", useHint)
playAgainBtn.addEventListener("click", () => showScreen("welcome"))
viewLeaderboardResultsBtn.addEventListener("click", () => showScreen("leaderboard"))
shareBtn.addEventListener("click", shareResults)
tryAgainBtn.addEventListener("click", () => showScreen("welcome"))
viewLeaderboardGameoverBtn.addEventListener("click", () => showScreen("leaderboard"))
clearLeaderboardBtn.addEventListener("click", showClearLeaderboardModal)
backToHomeBtn.addEventListener("click", () => showScreen("welcome"))
backToHomeAboutBtn.addEventListener("click", () => showScreen("welcome"))
footerHome.addEventListener("click", (e) => {
  e.preventDefault()
  showScreen("welcome")
})
footerLeaderboard.addEventListener("click", (e) => {
  e.preventDefault()
  showScreen("leaderboard")
})
footerAbout.addEventListener("click", (e) => {
  e.preventDefault()
  showScreen("about")
})
modalConfirmBtn.addEventListener("click", handleModalConfirm)
modalCancelBtn.addEventListener("click", hideModal)

// Player name input enter key
playerNameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && playerNameInput.value.trim()) {
    startQuizWithName()
  }
})

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Check for saved dark mode preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    headerDarkModeToggle.checked = true
    toggleDarkMode()
  }

  // Shuffle questions on load
  shuffleQuestions()

  showScreen("welcome")
  loadLeaderboard()
})

function toggleDarkMode() {
  const isDark = headerDarkModeToggle.checked
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light")
  headerThemeIcon.textContent = isDark ? "🌙" : "☀️"
  localStorage.setItem("theme", isDark ? "dark" : "light")
}

function shuffleQuestions() {
  shuffledQuestions = {
    easy: [...quizData.easy].sort(() => Math.random() - 0.5),
    medium: [...quizData.medium].sort(() => Math.random() - 0.5),
    hard: [...quizData.hard].sort(() => Math.random() - 0.5),
  }
}

function showScreen(screenName) {
  // Hide all screens
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active")
  })

  // Show selected screen
  switch (screenName) {
    case "welcome":
      welcomeScreen.classList.add("active")
      break
    case "nameEntry":
      nameEntryScreen.classList.add("active")
      playerNameInput.focus()
      break
    case "quiz":
      quizScreen.classList.add("active")
      break
    case "results":
      resultsScreen.classList.add("active")
      break
    case "gameOver":
      gameOverScreen.classList.add("active")
      break
    case "leaderboard":
      leaderboardScreen.classList.add("active")
      loadLeaderboard()
      break
    case "about":
      aboutScreen.classList.add("active")
      break
  }

  gameState = screenName
}

function startQuizWithName() {
  const name = playerNameInput.value.trim()
  if (!name) {
    alert("Please enter your name!")
    return
  }
  playerName = name
  startQuiz()
}

function startQuizAnonymous() {
  playerName = "Anonymous"
  startQuiz()
}

function resetGame() {
  currentDifficulty = "easy"
  currentQuestionIndex = 0
  lives = 5
  scores = { easy: 0, medium: 0, hard: 0 }
  totalQuestions = { easy: 0, medium: 0, hard: 0 }
  selectedAnswer = null
  showResult = false
  timeLeft = 30
  timerActive = false
  hintsUsed = 0
  showHint = false
  wrongAnswers = []

  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }

  resetLives()
  updateHintsDisplay()
  shuffleQuestions() // Shuffle questions for each new game
}

function resetLives() {
  const hearts = livesEl.querySelectorAll(".heart")
  hearts.forEach((heart) => {
    heart.classList.remove("lost", "losing")
  })
}

function startQuiz() {
  resetGame()
  showScreen("quiz")
  loadQuestion()
  startTimer()
}

function getCurrentQuestion() {
  return shuffledQuestions[currentDifficulty][currentQuestionIndex]
}

function loadQuestion() {
  const question = getCurrentQuestion()

  // Update UI
  currentDifficultyEl.textContent = currentDifficulty.charAt(0).toUpperCase() + currentDifficulty.slice(1)
  questionCounterEl.textContent = `${currentQuestionIndex + 1}/10`

  // Update progress bar
  const totalProgress = getTotalProgress()
  progressFillEl.style.width = `${totalProgress}%`

  // Load question
  questionTextEl.textContent = question.question
  optionsContainerEl.innerHTML = ""
  hintContainerEl.style.display = "none"
  resultContainerEl.style.display = "none"

  selectedAnswer = null
  showResult = false
  showHint = false

  updateSubmitButton()

  if (question.type === "multiple") {
    loadMultipleChoice(question)
  } else if (question.type === "boolean") {
    loadTrueFalse(question)
  } else if (question.type === "fill") {
    loadFillInBlank(question)
  }
}

function loadMultipleChoice(question) {
  question.options.forEach((option, index) => {
    const optionEl = document.createElement("div")
    optionEl.className = "option"
    optionEl.textContent = option
    optionEl.addEventListener("click", () => selectOption(optionEl, option.charAt(0)))
    optionsContainerEl.appendChild(optionEl)
  })
}

function loadTrueFalse(question) {
  const container = document.createElement("div")
  container.className = "boolean-options"

  const trueOption = document.createElement("div")
  trueOption.className = "option"
  trueOption.textContent = "True"
  trueOption.addEventListener("click", () => selectOption(trueOption, true))

  const falseOption = document.createElement("div")
  falseOption.className = "option"
  falseOption.textContent = "False"
  falseOption.addEventListener("click", () => selectOption(falseOption, false))

  container.appendChild(trueOption)
  container.appendChild(falseOption)
  optionsContainerEl.appendChild(container)
}

function loadFillInBlank(question) {
  const container = document.createElement("div")
  container.className = "fill-blank-container"

  const parts = question.question.split("____")
  parts.forEach((part, index) => {
    const textSpan = document.createElement("span")
    textSpan.textContent = part
    container.appendChild(textSpan)

    if (index < parts.length - 1) {
      const input = document.createElement("input")
      input.type = "text"
      input.className = "fill-blank-input"
      input.placeholder = "..."
      input.addEventListener("input", (e) => {
        selectedAnswer = e.target.value
        updateSubmitButton()
      })
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && selectedAnswer && selectedAnswer.trim()) {
          submitAnswer()
        }
      })
      container.appendChild(input)
    }
  })

  optionsContainerEl.appendChild(container)
}

function selectOption(optionEl, value) {
  if (showResult) return

  // Remove selection from all options
  optionsContainerEl.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("selected")
  })

  // Select current option
  optionEl.classList.add("selected")
  selectedAnswer = value
  updateSubmitButton()
}

function updateSubmitButton() {
  const hasAnswer = selectedAnswer !== null && selectedAnswer !== undefined && selectedAnswer !== ""
  submitBtn.disabled = !hasAnswer || showResult
}

function startTimer() {
  timeLeft = 20
  timerActive = true
  updateTimerDisplay()

  timerInterval = setInterval(() => {
    timeLeft--
    updateTimerDisplay()

    if (timeLeft <= 0) {
      handleTimeUp()
    }
  }, 1000)
}

function updateTimerDisplay() {
  timerEl.textContent = `${timeLeft}s`
  timerEl.classList.toggle("warning", timeLeft <= 10)
}

function handleTimeUp() {
  stopTimer()
  selectedAnswer = null

  const question = getCurrentQuestion()
  wrongAnswers.push({
    question: question.question,
    correctAnswer: getCorrectAnswerText(question),
    userAnswer: "No answer (time up)",
  })

  lives--
  loseLife()

  showResultMessage("timeout", "Time's up!")

  if (lives <= 0) {
    setTimeout(() => {
      showGameOver()
    }, 2000)
  } else {
    setTimeout(() => {
      nextQuestion()
    }, 2000)
  }
}

function stopTimer() {
  timerActive = false
  if (timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
}

function submitAnswer() {
  if (selectedAnswer === null || selectedAnswer === undefined || selectedAnswer === "" || showResult) {
    return
  }

  stopTimer()

  const question = getCurrentQuestion()
  let isCorrect = false

  if (question.type === "multiple") {
    isCorrect = selectedAnswer === question.answer
  } else if (question.type === "boolean") {
    isCorrect = selectedAnswer === question.answer
  } else if (question.type === "fill") {
    isCorrect = selectedAnswer.toLowerCase().trim() === question.answer.toLowerCase()
  }

  totalQuestions[currentDifficulty]++

  if (isCorrect) {
    scores[currentDifficulty]++
    showResultMessage("correct", "Correct! 🎉")
    highlightCorrectAnswer(question)
  } else {
    lives--
    loseLife()

    wrongAnswers.push({
      question: question.question,
      correctAnswer: getCorrectAnswerText(question),
      userAnswer: selectedAnswer,
    })

    showResultMessage("incorrect", `Incorrect. The correct answer is: ${getCorrectAnswerText(question)}`)
    highlightCorrectAnswer(question)
  }

  if (lives <= 0) {
    setTimeout(() => {
      showGameOver()
    }, 2000)
  } else {
    setTimeout(() => {
      nextQuestion()
    }, 2000)
  }
}

function getCorrectAnswerText(question) {
  if (question.type === "multiple") {
    return question.options.find((option) => option.charAt(0) === question.answer)
  } else if (question.type === "boolean") {
    return question.answer ? "True" : "False"
  } else {
    return question.answer
  }
}

function highlightCorrectAnswer(question) {
  if (question.type === "multiple") {
    const options = optionsContainerEl.querySelectorAll(".option")
    options.forEach((option) => {
      if (option.textContent.charAt(0) === question.answer) {
        option.classList.add("correct")
      } else if (option.classList.contains("selected")) {
        option.classList.add("incorrect")
      }
    })
  } else if (question.type === "boolean") {
    const options = optionsContainerEl.querySelectorAll(".option")
    options.forEach((option) => {
      const isTrue = option.textContent === "True"
      if (isTrue === question.answer) {
        option.classList.add("correct")
      } else if (option.classList.contains("selected")) {
        option.classList.add("incorrect")
      }
    })
  } else if (question.type === "fill") {
    const input = optionsContainerEl.querySelector(".fill-blank-input")
    if (input) {
      input.style.backgroundColor =
        selectedAnswer.toLowerCase().trim() === question.answer.toLowerCase() ? "#34A853" : "#EA4335"
      input.style.color = "white"
      input.style.borderColor =
        selectedAnswer.toLowerCase().trim() === question.answer.toLowerCase() ? "#34A853" : "#EA4335"
      input.disabled = true

      if (selectedAnswer.toLowerCase().trim() !== question.answer.toLowerCase()) {
        input.value = question.answer
      }
    }
  }
}

function showResultMessage(type, message) {
  resultMessageEl.textContent = message
  resultMessageEl.className = `result-message ${type}`
  resultContainerEl.style.display = "block"
  showResult = true
  updateSubmitButton()
}

function loseLife() {
  const hearts = livesEl.querySelectorAll(".heart:not(.lost)")
  if (hearts.length > 0) {
    const heartToLose = hearts[hearts.length - 1]
    heartToLose.classList.add("losing")

    setTimeout(() => {
      heartToLose.classList.remove("losing")
      heartToLose.classList.add("lost")
    }, 600)
  }
}

function nextQuestion() {
  currentQuestionIndex++

  if (currentQuestionIndex >= 10) {
    // Move to next difficulty or end quiz
    if (currentDifficulty === "easy") {
      currentDifficulty = "medium"
      currentQuestionIndex = 0
    } else if (currentDifficulty === "medium") {
      currentDifficulty = "hard"
      currentQuestionIndex = 0
    } else {
      // Quiz complete
      showResults()
      return
    }
  }

  loadQuestion()
  startTimer()
}

function getTotalProgress() {
  let totalAnswered = 0
  if (currentDifficulty === "easy") {
    totalAnswered = currentQuestionIndex
  } else if (currentDifficulty === "medium") {
    totalAnswered = 10 + currentQuestionIndex
  } else {
    totalAnswered = 20 + currentQuestionIndex
  }
  return (totalAnswered / 30) * 100
}

function useHint() {
  if (hintsUsed >= 3 || showHint) return

  const question = getCurrentQuestion()
  hintTextEl.textContent = question.hint
  hintContainerEl.style.display = "block"
  showHint = true
  hintsUsed++
  updateHintsDisplay()
}

function updateHintsDisplay() {
  hintsLeftEl.textContent = 3 - hintsUsed
  hintBtn.style.display = hintsUsed >= 3 ? "none" : "inline-flex"
}

function showResults() {
  // Update player name display
  if (playerName && playerName !== "Anonymous") {
    playerNameDisplayEl.textContent = `Well done, ${playerName}!`
    playerNameDisplayEl.style.display = "block"
  } else {
    playerNameDisplayEl.style.display = "none"
  }

  // Update score displays
  easyScoreEl.textContent = `${scores.easy}/10`
  mediumScoreEl.textContent = `${scores.medium}/10`
  hardScoreEl.textContent = `${scores.hard}/10`

  const totalScore = scores.easy + scores.medium + scores.hard
  finalScoreEl.textContent = `${totalScore}/30`
  hintsUsedDisplayEl.textContent = hintsUsed

  // Save score to leaderboard
  const rank = saveScore(playerName, totalScore, hintsUsed)
  playerRankEl.textContent = `#${rank}`

  // Show message based on score
  if (totalScore >= 27) {
    scoreMessageEl.textContent = "Outstanding! You're a tech expert! 🏆"
  } else if (totalScore >= 24) {
    scoreMessageEl.textContent = "Excellent work! You know your tech! 🌟"
  } else if (totalScore >= 20) {
    scoreMessageEl.textContent = "Great job! Solid tech knowledge! 👏"
  } else if (totalScore >= 15) {
    scoreMessageEl.textContent = "Good effort! Keep learning! 📚"
  } else {
    scoreMessageEl.textContent = "Keep studying and try again! 💪"
  }

  // Show wrong answers if any
  if (wrongAnswers.length > 0) {
    wrongAnswersSectionEl.style.display = "block"
    wrongAnswersListEl.innerHTML = ""

    wrongAnswers.slice(0, 5).forEach((item) => {
      const itemEl = document.createElement("div")
      itemEl.className = "wrong-answer-item"
      itemEl.innerHTML = `
        <div class="wrong-answer-question">${item.question}</div>
        <div class="wrong-answer-correct">Correct: ${item.correctAnswer}</div>
      `
      wrongAnswersListEl.appendChild(itemEl)
    })
  } else {
    wrongAnswersSectionEl.style.display = "none"
  }

  showScreen("results")
}

function showGameOver() {
  // Update player name display
  if (playerName && playerName !== "Anonymous") {
    gameOverPlayerNameEl.textContent = `Sorry, ${playerName}!`
    gameOverPlayerNameEl.style.display = "block"
  } else {
    gameOverPlayerNameEl.style.display = "none"
  }

  // Save partial score to leaderboard
  const totalScore = scores.easy + scores.medium + scores.hard
  if (totalScore > 0) {
    saveScore(playerName, totalScore, hintsUsed, true)
  }

  updatePartialResults()
  showScreen("gameOver")
}

function updatePartialResults() {
  partialBreakdownEl.innerHTML = ""

  Object.keys(scores).forEach((difficulty) => {
    if (totalQuestions[difficulty] > 0) {
      const scoreItem = document.createElement("div")
      scoreItem.className = "partial-score-item"
      scoreItem.innerHTML = `
        <span class="difficulty-label">${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span>
        <span>${scores[difficulty]}/${totalQuestions[difficulty]}</span>
      `
      partialBreakdownEl.appendChild(scoreItem)
    }
  })
}

// Leaderboard Functions
function saveScore(name, score, hints, isPartial = false) {
  const leaderboard = getLeaderboard()
  const timestamp = new Date().toISOString()

  const newScore = {
    id: Date.now(),
    name: name || "Anonymous",
    score: score,
    hintsUsed: hints,
    isPartial: isPartial,
    timestamp: timestamp,
    date: new Date().toLocaleDateString(),
  }

  leaderboard.push(newScore)

  // Sort by score (descending), then by hints used (ascending), then by timestamp (ascending)
  leaderboard.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score
    if (a.hintsUsed !== b.hintsUsed) return a.hintsUsed - b.hintsUsed
    return new Date(a.timestamp) - new Date(b.timestamp)
  })

  // Keep only top 50 scores
  const trimmedLeaderboard = leaderboard.slice(0, 50)
  localStorage.setItem("quizLeaderboard", JSON.stringify(trimmedLeaderboard))

  // Return the rank of the new score
  return trimmedLeaderboard.findIndex((entry) => entry.id === newScore.id) + 1
}

function getLeaderboard() {
  const stored = localStorage.getItem("quizLeaderboard")
  return stored ? JSON.parse(stored) : []
}

function loadLeaderboard() {
  const leaderboard = getLeaderboard()

  if (leaderboard.length === 0) {
    leaderboardListEl.innerHTML = `
      <div class="no-scores">
        <p>No scores yet! Be the first to complete the quiz.</p>
      </div>
    `
    return
  }

  leaderboardListEl.innerHTML = ""

  leaderboard.forEach((entry, index) => {
    const rank = index + 1
    const itemEl = document.createElement("div")
    itemEl.className = `leaderboard-item ${rank <= 3 ? `top-3 rank-${rank}` : ""}`

    const rankEmoji = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`
    const partialText = entry.isPartial ? " (Partial)" : ""

    itemEl.innerHTML = `
      <div class="leaderboard-rank">${rankEmoji}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${entry.name}${partialText}</div>
        <div class="leaderboard-details">${entry.date} • ${entry.hintsUsed} hints used</div>
      </div>
      <div class="leaderboard-score">${entry.score}/30</div>
      <button class="delete-score-btn" onclick="deleteScore(${entry.id})">🗑️</button>
    `

    leaderboardListEl.appendChild(itemEl)
  })
}

function deleteScore(id) {
  showModal("Delete Score", "Are you sure you want to delete this score?", () => {
    const leaderboard = getLeaderboard()
    const filteredLeaderboard = leaderboard.filter((entry) => entry.id !== id)
    localStorage.setItem("quizLeaderboard", JSON.stringify(filteredLeaderboard))
    loadLeaderboard()
    hideModal()
  })
}

function showClearLeaderboardModal() {
  showModal("Clear Leaderboard", "Are you sure you want to clear all scores? This action cannot be undone.", () => {
    localStorage.removeItem("quizLeaderboard")
    loadLeaderboard()
    hideModal()
  })
}

function showModal(title, message, confirmCallback) {
  modalTitle.textContent = title
  modalMessage.textContent = message
  confirmationModal.style.display = "flex"

  modalConfirmBtn.onclick = confirmCallback
}

function hideModal() {
  confirmationModal.style.display = "none"
}

function handleModalConfirm() {
  // This will be overridden by showModal
}

function shareResults() {
  const totalScore = scores.easy + scores.medium + scores.hard
  const text = `I just scored ${totalScore}/30 on the Google Week of Welcome Quiz 2025! 🚀 Can you beat my score?`

  if (navigator.share) {
    navigator
      .share({
        title: "Google Week of Welcome Quiz 2025 Results",
        text: text,
        url: window.location.href,
      })
      .catch(console.error)
  } else {
    // Fallback to clipboard
    navigator.clipboard
      .writeText(text + " " + window.location.href)
      .then(() => {
        alert("Results copied to clipboard!")
      })
      .catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement("textarea")
        textArea.value = text + " " + window.location.href
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand("copy")
        document.body.removeChild(textArea)
        alert("Results copied to clipboard!")
      })
  }
}
