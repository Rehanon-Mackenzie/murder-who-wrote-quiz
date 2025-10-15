## Validation

### HTML Validation

Each HTML file was tested using the [W3C Markup Validator](https://validator.w3.org/)

Common issues such as invalid attributes (answer_index) and empty headings were corrected:

- Trailing slash on void elements that had no effect removed.

- Replaced answer_index with valid HTML5 data-answer-index.

- Added comments/placeholder text inside dynamic <h2> headings.

| File              | Screenshot                                                        | Notes                                                   |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| `index.html`      | ![HTML index validation](assets/testing/HTML-validator-index.png)           | Passed with no errors.                                  |
| `quiz.html`       | ![HTML quiz validation](assets/testing/HTML-validator-quiz.png)             | Updated attributes and resolved empty heading warnings. |
| `end.html`        | ![HTML end validation](assets/testing/HTML-validator-end.png)               | Passed validation cleanly.                              |
| `highscores.html` | ![HTML highscores validation](assets/testing/HTML-validator-high-scores.png) | Fully valid structure.                                  |

### CSS Validation

The CSS file was tested using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

The file was found to have no errors as evidenced here:
![CSS validation](assets/testing/CSS-validator-murder-who-wrote.png)

| Feature                        | Expected Result                                      | Actual Result | Pass |
| ------------------------------ | ---------------------------------------------------- | ------------- | ---- |
| Quiz loads questions from JSON | Questions displayed correctly                        | ✔️            | ✔️   |
| Selecting correct answer       | Score increases by 10 points                         | ✔️            | ✔️   |
| Selecting incorrect answer     | Correct answer highlighted                           | ✔️            | ✔️   |
| End screen saves score         | Score stored in LocalStorage                         | ✔️            | ✔️   |
| High scores page               | Displays sorted leaderboard                          | ✔️            | ✔️   |
| Empty leaderboard              | Displays “No high scores yet — play a game!” message | ✔️            | ✔️   |

### JavaScipt Validation (JSHint)

| File            | Screenshot                                                 | Notes                                                           |
| --------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| `index.js`      | ![JSHint index](assets/testing/JS-hint-index.png)           | ES6 syntax validated successfully.                              |
| `quiz.js`       | ![JSHint quiz](assets/testing/JS-hint-quiz.png)             | Updated `data-answer-index` and resolved line break warnings.   |
| `end.js`        | ![JSHint end](assets/testing/JS-hint-end.png)               | Refactored `!` usage and improved clarity for readability.      |
| `highscores.js` | ![JSHint highscores](assets/testing/JS-hint-high-scores.png) | Fixed illegal `return` statement and confirmed score rendering. |
