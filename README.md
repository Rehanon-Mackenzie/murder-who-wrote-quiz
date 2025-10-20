# Murder Who Wrote?

![Murder Who Wrote responsive image](/assets/images/murder-who-wrote-responsive.png)

Visit the deployed site: [Murder Who Wrote?](https://rehanon-mackenzie.github.io/murder-who-wrote-quiz/index.html)

![GitHub last commit](https://img.shields.io/github/last-commit/Rehanon-Mackenzie/murder-who-wrote-quiz?style=for-the-badge&color=red)
![GitHub contributors](https://img.shields.io/github/contributors/Rehanon-Mackenzie/murder-who-wrote-quiz?style=for-the-badge&color=orange)
![Github language count](https://img.shields.io/github/languages/count/rehanon-mackenzie/murder-who-wrote-quiz?style=for-the-badge&color=yellow
)
![GitHub top language](https://img.shields.io/github/languages/top/Rehanon-Mackenzie/murder-who-wrote-quiz?style=for-the-badge&color=green
)
![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Frehanon-mackenzie.github.io%2Fmurder-who-wrote-quiz%2F&style=for-the-badge
)

## Table of Contents

* [Murder Who Wrote?](#murder-who-wrote)
  * [Table of Contents](#table-of-contents)
  * [About](#about)
* [User Experience](#user-experience)
  * [User stories](#user-stories)
* [Design](#design)
  * [Color Palette](#color-palette)
  * [Typography](#typography)
  * [Wireframes](#wireframes)
  * [Features](#features)
    * [Features Common to all pages](#️-features-common-to-all-pages)
    * [Home Page](#home-page)
    * [Quiz Page](#️️-quiz-page)
    * [End Page](#-end-page)
    * [Highscore Page](#-high-scores-page)
    * [404 Error Page](#-404-error-page)
    * [Future Implementations](#-future-implementations)


* [Testing](#testing)

## About

This is a quiz for all the armchair detectives who love nothing better than sitting down with their favourite ficitional gumshoe and solving a murder from the comfort of their own living room.

Murder mysteries continue to be a universal source of pleasure for people and each generation has its own unsuspecting sleuth or amateur busy body that is able to unpick the clues and workout who dunnit? In 2020 it was the centenary celebration for the first ever murder mystery written by Dame Agatha Christie, _The Mysterious Affair at Styles_. This was the first outing for Hercule Poirot and his famous "little grey cells".

Since then there has been Jessica Fletcher, Colombo, Inspector Barnaby to name but a few. Each one has their own way of getting to the bottom of things whether it's acting confused and a little dishevelled in the case of Colombo or hiding your brilliant mind behind your knitting in the way of Miss Marples. They all solve the mystery in just the nick of time.

_Murder Who Wrote?_ gives the player an opportunity to see just how much they know about the genre.

## User Experience (UX)

### User Stories

#### First Time Visitor Goals

* I want to test my knowledge on the TV detectives show I love.
* I want the site to be responsive to the device I'm suing.
* I want to be able to navigate the site easily.
* I want clear instructions on how I play the quiz so I have the best chance of getting a good score.

#### Returning Visitor Goals

* I want to be able to see the answers to the questions I answered incorrectly.

#### Frequent Visitor Goals

* I want to be able to store my score so I can see how I am improving and how I rank against other players.

## Design
  
  ### Colour Palette

In honour of each of the detectives included in the quiz I went for a colour that was associated with each of them.

* #222e50 is a rich navy blue which a favourite suit colour of Poirot.
* #8d99ae is a light gray which is often the colour that Miss Marple is dressed in.
* #f2c57c is a warm beige and the colour of Columbo's raincoat once it's had a good wash.
* #628b48 is a woodland green and captures the landscape of many of the locations in Midsomer Murders.
* #d00000 is a brilliant red and the colour of book that forms the iconic title sequence to each episode of Murder She Wrote.

The background for each page is #f2c57c as it provides a good contrast with the text.  The text colour is #222e50 and works well in both the primary and secondary fonts.  The quiz questions background colour is #8d99ae and it is also used for the hover feature on the heading on each page that returns you home.  Finally, #628b48 and #d00000 are used in the incorrect and correct classes to reveal to the player if they got a question right or wrong.



![Colour Palette](/documentation/Murder%20Who%20Wrote%20colour%20palette.png)


  ### Typography

The fonts for this site were chosen from Google Fonts and were imported using the URL method.

The fonts chosen were 'Corben' and ' Work Sans.

Corben italicised was the primary font and used for all of the headings throughout the site.  As it gave the vintage style that is often associated with murder mysteries.

![Heading font for Murder Who Wrote?](/documentation/heading%20murder%20who%20wrote%20example.png)

Work Sans was the secondary font used on the site and is the font for all the body text.  It was chosen because it was very readable and provides a crisp contrast to Corben.

![Body font  for Murder Who Wrote?](/documentation/body%20text%20murder%20who%20wrote%20example.png)


  ### Wireframes

  The wireframes were designed for mobile, tablet and desktop using balasmiq.

  #### Home Page

![Home-page-wireframe](/documentation/wireframes/murder%20who%20wrote%20home.png)

#### Quiz Page
![Quiz-page-wireframe](/documentation/wireframes/murder%20who%20wrote%20quiz.png)

#### End Page
![End-page-wireframe](/documentation/wireframes/murder%20who%20wrote%20end.png)

#### Highscores Page
![Highscores-page-wireframe](/documentation/wireframes/murder%20who%20highscores.png)

## Features

### 🖥️ Features Common to All Pages

#### Favicon

* The favicon is a small image that displays in the browser tab. 
* The intention is to enhance the user experience for those who have multiple tabs open and cannot read the text in the tabs.
* The favicon is a doodle of a magnifying glass.  This was chosen because a magnifying glass is synomous with the murder mystery genre.  It's been used by fictional detectives from as far back as Sherlock Holmes in the Victorian era to more recently Chief Inspector Barnaby in modern day Midsomer.
* It was taken from the Icons8 website and is credited in the Media Section 

![Screenshot of favicon](/documentation/favicon%20example.png)

#### Title Navigation

* On every page of the site the h1 encloses an anchor link back to the home page.  This allows the player to navigate easily to the home page should they need to.
![Title navigation screenshot](/documentation/title%20nav%20feature.PNG)

* The hover pseudo class has been added so that on desktop view the title changes to the secondary colour to indicate to the player it' a clickable link.
![Title hover screenshot](/documentation/title%20nav%20hover.png)

### 🏠 Home Page

![Home page screenshot](/documentation/home%20page%20screenshot.PNG)
* Displays title and introduction.
* Buttons for **Instructions**, **Play**, and **High Scores**.
* Fully responsive layout.
* Modal pops up with instructions on how to play.
* Can be opened and closed via buttons.
![Modal screenshot](/documentation/modal%20screenshot.PNG)

### 🕵️‍♀️ Quiz Page
![Quiz page screenshot](/documentation/quiz%20page%20screenshot.PNG)
* Randomised quiz questions load dynamically from the JSON file.
* The CSS classes on the answers to show #628b48 as correct and #d00000 incorrect answers to the player.  This provides immediate feedback.

![Correct answer screenshot](/documentation/correct%20answer%20screenshot.PNG)
![Incorrect answer screenshot](/documentation/incorrect%20answer%20screenshot.PNG)
* The running score is displayed in the right hand corner.
* The progress bar in the left hand shows how many questions the player has left to answer.

### 🏁 End Page
![End page screenshot](/documentation/End%20page%20screenshot.PNG)

* Displays player's final score.
* Input field for player name.
* Save button is disabled until text is entered in the input field to ensure that can accurately store their own scores.
* On saving the scores are stored in Local Storage.

### 🏆 High Scores Page
![Highscores page screenshot](/documentation/Highscores%20page%20screenshot.PNG)

* Retrieves scores from Local Storage.
* Displays sorted leaderboard.
* Top 10 scores will be displayed.

### ❌ 404 Error Page
![404 page screenshot](/documentation/404%20page%20screenshot.PNG)

* Explains to the player there's been an error.
* Provides a link to take them navigate back to the home page.

### ⚡ Future Implementations

* Enable the quiz to be played on desktop using just a keyboard.
* Add modals that pop up at the end corresponding to the player's score and profiling what sort of a detective they would be.
* Enlarge the question bank to enable players to choose genres of murder mysteries to answer questions on.
* Create difficulty rating for the questions so that players can test their ability further.

## 🖱️ Accessibility

Whilst coding the quiz I have kept in mind accessibility and ease of use for everyone.  This includes using:
* Semantic HTML.
* Hover status on the navigation logo on each page.
* Using San Serif font for the body text.
* Choosing a contrasting colour palette that makes viewing easier.

## Technologies Used

### Languages Used
HTML, CSS, Javascript

### Libraries and Programmes Used
* [Balsamiq](https://balsamiq.com/) - Used to create wireframes.

* [Github](https://github.com/) - For version control and to save and store the files for the website.

* [VSC](https://code.visualstudio.com/) - IDE used to create the site.

* [Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

* [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

* [Icons8](https://icons8.com/icons/set/favicon) To create favicon.

* [Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

* [Shields.io](https://shields.io/) To add badges to the README

* [Chat GPT](https://chatgpt.com/) - To create the questions and store as JSON.

* [Coolors](https://coolors.co/) - To create the colour palette for the website.

## Deployment & Local Development

### Deployment

The site is deployed using GitHub Pages - [Murder Who Wrote?](https://rehanon-mackenzie.github.io/murder-who-wrote-quiz/)

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [Rehanon-Mackenzie/MurderWhoWroteQuiz](https://github.com/Rehanon-Mackenzie/murder-who-wrote-quiz).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed, please note that this process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Rehanon-Mackenzie/MurderWhoWroteQuiz](https://github.com/Rehanon-Mackenzie/murder-who-wrote-quiz)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Rehanon-Mackenzie/MurderWhoWroteQuiz](https://github.com/Rehanon-Mackenzie/murder-who-wrote-quiz)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -


## Testing

Please see the separate [TESTING.md](/Testing.md) file for all the tests carried out.