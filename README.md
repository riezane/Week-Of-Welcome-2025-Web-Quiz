# Google Week of Welcome Quiz 2025

Test your tech knowledge and compete with others in this interactive quiz designed for Google's Week of Welcome 2025!

## 📋 Overview

The **GDGoC Week of Welcome Quiz 2025** is a web-based application that challenges users with 30 technology-related questions across three difficulty levels: Easy, Medium, and Hard. With a mix of multiple-choice, true/false, and fill-in-the-blank questions, the quiz tests knowledge in programming, web development, databases, and computer science fundamentals. Questions are randomized for a unique experience each time, and a local leaderboard tracks high scores on the device.

### 🎯 Purpose

This quiz aims to engage users in a fun and educational way, celebrating USTP's Week of Welcome by testing and expanding their tech knowledge. Whether you're a beginner or a seasoned tech enthusiast, the quiz offers a range of challenges to suit all levels.

### 🎨 Features

- **Three Difficulty Levels**: 10 Easy, 10 Medium, and 10 Hard questions.
- **Varied Question Types**: Includes multiple-choice, true/false, and fill-in-the-blank formats.
- **Randomized Questions**: Questions are shuffled for each new game to ensure a fresh experience.
- **Local Leaderboard**: Compete with others on the same device, with scores saved locally.
- **Hint System**: Up to 3 hints available to assist with tough questions.
- **Dark/Light Mode**: Toggle between themes for comfortable viewing.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Progress Tracking**: Visual progress bar and detailed results breakdown.
- **Share Results**: Share your score via the Web Share API or clipboard.
- **Review Wrong Answers**: See incorrect answers after quiz completion to learn from mistakes.

## 📋 How to Play

1. **Start the Quiz**: Enter your name or play anonymously from the welcome screen.
2. **Answer Questions**: 
   - 30 questions total (10 Easy, 10 Medium, 10 Hard).
   - You have 5 lives; lose all lives, and the quiz ends.
   - Each question has a 30-second timer.
   - Choose from multiple-choice options, true/false, or type in answers for fill-in-the-blank questions.
3. **Use Hints**: Up to 3 hints are available to help with difficult questions.
4. **Submit Answers**: Select your answer and click "Submit" to proceed.
5. **View Results**: After completing the quiz or running out of lives, see your score, rank, and incorrect answers.
6. **Compete**: Check the leaderboard to see how you rank and share your results with friends!

## 🛠️ Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, etc.).
- No server-side dependencies; the quiz runs entirely client-side using HTML, CSS, and JavaScript.

### Setup
1. **Clone or Download the Repository**:
   ```bash
   git clone <repository-url>
   ```
   Alternatively, download the project as a ZIP file and extract it.

2. **Serve the Application**:
   - Open `index.html` directly in a web browser for local testing, or
   - Use a local development server (e.g., with Node.js or Python):
     ```bash
     # Using Python
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000` in your browser.

## 🏗️ How It Works

- **HTML**: The `index.html` file provides the structure for the quiz, including screens for welcome, name entry, quiz, results, game over, leaderboard, and about pages.
- **CSS**: Styles are split into modular files (e.g., `base.css`, `quiz.css`, `dark-mode.css`) for maintainability, with responsive design and dark/light mode support using CSS custom properties.
- **JavaScript**: Logic is divided into separate files (e.g., `quiz-logic.js`, `leaderboard.js`) handling game state, question rendering, timer, and leaderboard functionality. No external libraries are required.
- **Local Storage**: Leaderboard scores are saved using the browser's `localStorage` for persistence across sessions.
- **Randomization**: Questions are shuffled at the start of each game using the Fisher-Yates algorithm for a unique experience.

## 📂 File Descriptions

### CSS Files (`css/`)
- `base.css`: Global styles, variables, and resets.
- `header.css`: Styles for the navigation header.
- `main.css`: Core layout and screen container styles.
- `buttons.css`: Button and toggle switch styles.
- `quiz.css`: Quiz screen UI, including progress bar, timer, and question display.
- `results.css`: Results screen styles with score breakdown.
- `game-over.css`: Game over screen styles.
- `leaderboard.css`: Leaderboard display and ranking styles.
- `about.css`: About page content styles.
- `footer.css`: Footer navigation styles.
- `modal.css`: Confirmation modal styles.
- `dark-mode.css`: Dark mode overrides.
- `responsive.css`: Responsive design for various screen sizes.
- `welcome.css`: Welcome screen styles with hero section.
- `name-entry.css`: Name entry screen styles.

## 🚀 Usage

1. Open `index.html` in a browser.
2. From the welcome screen, click "Start Quiz" to enter your name or play anonymously.
3. Answer questions within the 30-second time limit, using hints if needed.
4. After completing the quiz or losing all lives, view your results and leaderboard ranking.
5. Share your score or play again to improve your rank!

## 🖼️ Screenshots

<img width="810" height="834" alt="image" src="https://github.com/user-attachments/assets/2207b33a-e5b9-4165-b356-bcb6cf0fa29a" />
<img width="802" height="544" alt="image" src="https://github.com/user-attachments/assets/3b550a0a-9d75-4ec4-90c9-3df61abcd381" />
<img width="802" height="622" alt="image" src="https://github.com/user-attachments/assets/747adc04-e75c-42c0-ad92-ee57fd8ce432" />


## 🤝 Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code follows the existing style and includes appropriate comments.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- This Project is for USTP's Week of Welcome 2025.
- Built with HTML, CSS, and JavaScript, with no external dependencies.
- Uses Google Sans font and Google's color palette.

---

Happy quizzing! 🚀 Test your tech knowledge and aim for the top of the leaderboard!
