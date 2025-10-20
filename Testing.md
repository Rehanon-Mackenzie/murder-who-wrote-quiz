# Murder Who Wrote? - Testing
![Murder Who Wrote responsive](/assets/images/murder-who-wrote-responsive.png)

Visit the deployed site: [Murder Who Wrote?](https://rehanon-mackenzie.github.io/murder-who-wrote-quiz/index.html)

## Contents
* [Automated Testing](#automated-testing)
    * [Validation Testing](#validation-testing)
        * [HTML Validation](#html-validation)
        * [CSS Validation](#css-validation)
        * [JavaScript Validation](#javascript-validation-jshint)
        * [Lighthouse Testing](#lighthouse-testing)
* [Manual Testing](#manual-testing)
    * [Testing User Stories](#testing-user-stories)
    * [Full Testing](#full-testing)
        * [Responsiveness](#responsiveness)
        * [Browser Compatibility](#browser-compatibility)
        * [Summary](#summary)

The testing process was ongoing thorough out the development of the quiz and it is true what they say the best way to learn is doing. 

I used the console throughout to test code and error check as I went.  The tutorials from Code Institute on using Google Development Tools was really useful.  I made good use of the Sources tab and was regularly adding breakpoints to my code to find out was actually going on.

In future I will keep a debugging diary because I think this will be a really good way of visualising my learning.

### Validation Testing

#### HTML Validation

Each HTML file was tested using the [W3C Markup Validator](https://validator.w3.org/)

Common issues such as invalid attributes (answer_index) and empty headings were corrected:

- Trailing slash on void elements that had no effect removed.

- Replaced answer_index with valid HTML5 data-answer-index.

- Added comments/placeholder text inside dynamic h2 headings.

| File              | Screenshot                                                        | Notes                                                   |
| ----------------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| `index.html`      | ![HTML index validation](testing/HTML-validator-index.png)           | Passed with no errors.                                  |
| `quiz.html`       | ![HTML quiz validation](testing/HTML-validator-quiz.png)             | Updated attributes and resolved empty heading warnings. |
| `end.html`        | ![HTML end validation](testing/HTML-validator-end.png)               | Passed validation cleanly.                              |
| `highscores.html` | ![HTML highscores validation](testing/HTML-validator-high-scores.png) | Fully valid structure.            
| `404.html` | ![HTML 404 validation](/testing/html-validator-404.PNG)   | Passed with no errors.                   |

#### CSS Validation

The CSS file was tested using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

The file was found to have no errors as evidenced here:
![CSS validation](testing/CSS-validator-murder-who-wrote.png)


#### JavaScript Validation (JSHint)

| File            | Screenshot                                                 | Notes                                                           |
| --------------- | ---------------------------------------------------------- | --------------------------------------------------------------- |
| `index.js`      | ![JSHint index](testing/JS-hint-index.png)           | ES6 syntax validated successfully.                              |
| `quiz.js`       | ![JSHint quiz](testing/JS-hint-quiz.png)             | Updated `data-answer-index` and resolved line break warnings.   |
| `end.js`        | ![JSHint end](testing/JS-hint-end.png)               | Refactored `!` usage and improved clarity for readability.      |
| `highscores.js` | ![JSHint highscores](testing/JS-hint-high-scores.png) | Fixed illegal `return` statement and confirmed score rendering. 

#### Lighthouse Testing

I used the Lighthouse extension within Chrome Developer Tools to test performance, accessibility, best practices and SEO of the website.

![Home page lighthouse](/testing/lighthouse%20desktop.PNG)
*Home: Performance 99, Accessibility 100, Best Practices 100, SEO 100*

![Quiz page lighthouse](/testing/lighthouse%20quiz%20desktop.PNG)
*Quiz: Performance 98, Accessibility 100, Best Practices 100, SEO 90*

![End page lighthouse](/testing/lighthouse%20end%20desktop.PNG)
*End: Performance 97, Accessibility 100, Best Practices 100, SEO 90*

![Highscore page lighthouse](/testing/lighthouse%20highscores%20desktop.PNG)
*High Scores: Performance 100, Accessibility 100, Best Practices 100, SEO 90*


## Manual Testing

### Testing User Stories

`First Time Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I want to test my knowledge on the TV detectives show I love. | Murder Who Wrote? Delivers a randomised selection of questions for users about shows such as Columbo, Poirot and Midsomer Murders |
| I want the site to be responsive to the device I'm using. | I have developed the site with responsiveness in mind. |
| I want the site to be easy to navigate. | On every page the user can navigate to return to the home page by clicking on the header logo.  |
| I want clear instructions on how I play the quiz so I have the best chance of getting a good score. | Clicking on the instructions button on the homepage brings up a modal that explains exactly how to play the quiz.

`Returning Visitors`

|  Goals | How are they achieved? |
| :--- | :--- |
|I want to be able to see the answers to the questions I answered incorrectly. | If a user chooses an incorrect answer the correct answer will be displayed by a dynamic changing background colour also. Before the quiz transitions to the next question. |

`Frequent Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I want to be able to store my score so I can see how I am improving and how I rank against other players. | Users of the site are able to log their high scores to the high scores page. The top ten results will be displayed. |

### Full Testing

#### Responsiveness

Tested on physical devices and Chrome DevTools presets.

| Device / Viewport | Expected Result | Actual Result | Pass |
|--------------------|----------------|----------------|:---:|
| iPhone SE (375x667) | Content readable, buttons accessible | Works as expected | ✅ |
| iPad (768x1024) | Layout centered, modal fits screen | Works as expected | ✅ |
| Laptop (1366x768) | Layout stable, hover colours visible | Works as expected | ✅ |
| Desktop (1920x1080) | Layout scales correctly, all elements visible | Works as expected | ✅ |

#### Browser Compatibility

| Browser | Version | Result |
|----------|----------|--------|
| Chrome | 129 | Pass |
| Firefox | 130 | Pass |
| Edge | 128 | Pass |
| Safari (iOS 17) | Mobile | Pass |

#### Summary

All tests passed successfully. The site performs consistently across devices and browsers, with no functional bugs remaining.

| Feature                        | Expected Result                                      | Actual Result | Pass |
| ------------------------------ | ---------------------------------------------------- | ------------- | ---- |
| Quiz loads questions from JSON | Questions displayed correctly                        | ✔️            | ✔️   |
| Selecting correct answer       | Score increases by 10 points                         | ✔️            | ✔️   |
| Selecting incorrect answer     | Correct answer highlighted                           | ✔️            | ✔️   |
| End screen saves score         | Score stored in LocalStorage                         | ✔️            | ✔️   |
| High scores page               | Displays sorted leaderboard                          | ✔️            | ✔️   |
| Empty leaderboard              | Displays “No high scores yet — play a game!” message | ✔️            | ✔️   |