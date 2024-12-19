/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 



Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from '/data.js'

// Some useful elements
const guessInput = document.getElementById('guess-input')
const messageContainer = document.getElementsByClassName('message-container')[0]
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0]



let current = 0;
let count = 1;
const msg = [
    "You have 3 guesses remaining.",
    "Correct!",
    `Incorrect! You have 3 more guesses remaining.`,
    `The film was xxx.`
]
const max = 3;

const logSubmit = (event) => {
  event.preventDefault();
  console.log("submit");
  const user_input = document.getElementById('guess-text').value;
  const data = films.find((d)=> d.id == current);
  const title = data.title;
  
  if(user_input === title) {
    messageContainer.innerHTML = msg[1];
    document.getElementById('guess-input').reset();
    setTimeout(showEmoji, 3000);
    //showEmoji();
  }else if(max - count > 0 ){
    count = count + 1;
    messageContainer.innerHTML = `Incorrect! You have ${max - count} more guesses remaining.`;
  }else{
    messageContainer.innerHTML = `The film was ${title}.`
  }
  console.log(user_input);
}
//0,1,2,3,4

/*
3 - 1 = 2
3 - 2 = 1
3 - 3 = 0
*/

const showEmoji = () =>{
    const num = Math.floor(1+Math.random()*11);    
    current = num;
    const data = films.find((d)=> d.id == num);
    const {title, emoji, ariaLabel} = data;
    emojiCluesContainer.innerHTML = emoji.join(" ") + "" + current; 
    messageContainer.innerHTML = "You have 3 guesses remaining.";
    
}


showEmoji();
guessInput.addEventListener("submit", logSubmit);


Randomly select a film from the films array.
Display the film's emoji clues.
Allow the user to input a guess.
Validate the guess and provide feedback.
Keep track of the number of guesses remaining.
Handle game over and win conditions.
Ensure no film is repeated.


// ... (existing code)

// Initialize game state
let currentFilmIndex = 0;
let guessesRemaining = 3;

// Function to display a new film
function displayFilm() {
  const currentFilm = films[currentFilmIndex];
  emojiCluesContainer.textContent = currentFilm.emoji;
  guessInput.value = '';
  guessesRemaining = 3;
  messageContainer.textContent = '';
}

// Function to handle guess submission
guessForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const guess = guessInput.value.trim();

  if (guess === currentFilm.title) {
    messageContainer.textContent = 'Correct!';
    currentFilmIndex++;
    setTimeout(() => {
      if (currentFilmIndex < films.length) {
        displayFilm();
      } else {
        messageContainer.textContent = "That's all folks!";
        guessForm.disabled = true;
      }
    }, 3000);
  } else {
    guessesRemaining--;
    if (guessesRemaining === 0) {
      messageContainer.textContent = `Incorrect! The film was ${currentFilm.title}!`;
      currentFilmIndex++;
      setTimeout(() => {
        if (currentFilmIndex < films.length) {
          displayFilm();
        } else {
          messageContainer.textContent = "That's all folks!";
          guessForm.disabled = true;
        }
      }, 3000);
    } else {
      messageContainer.textContent = `Incorrect! You have ${guessesRemaining} more guesses remaining.`;
    }
  }
});

// Start the game
displayFilm();

/*------12-19-2024---*/
import { films } from '/data.js'

// Some useful elements
const guessForm = document.getElementById('guess-form');
const guessInput = document.getElementById('guess-input')
const messageContainer = document.getElementsByClassName('message-container')[0]
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0]
const submitButton = guessForm.querySelector('button');
/*
Randomly select a film from the films array.
Display the film's emoji clues.
Allow the user to input a guess.
Validate the guess and provide feedback.
Keep track of the number of guesses remaining.
Handle game over and win conditions.
Ensure no film is repeated.
*/


// Initialize game state
let availableFilms = [...films];
let currentFilm = null;
let guessesRemaining = 3;
let isGameOver = false;


// Function to display a new film
const displayNewFilm = () => {
  currentFilm = getRandomFilm();
  emojiCluesContainer.textContent = currentFilm.emoji;
  guessInput.value = '';
  guessesRemaining = 3;
  messageContainer.textContent = '';
  isGameOver = false;
}


function getRandomFilm() {
  if (availableFilms.length === 0) return null; 
  const randomIndex = Math.floor(Math.random() * availableFilms.length);
  const film = availableFilms[randomIndex];
  availableFilms.splice(randomIndex, 1);
  return film;
}

const nextRound = () => {
  if (availableFilms.length > 0) {
    displayNewFilm();
  } else {
    messageContainer.textContent = "That's all folks!";
    guessForm.disabled = true;
    isGameOver = true;
  }
}



// Function to handle guess submission
guessForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (isGameOver) return;
  
  const guess = guessInput.value.trim();
  if (guess === currentFilm.title) {
    messageContainer.textContent = 'Correct!';
    setTimeout(nextRound, 3000);
  } else {
    guessesRemaining--;
    
    if (guessesRemaining === 0) {
      messageContainer.textContent = `Incorrect! The film was ${currentFilm.title}!`;
      setTimeout(nextRound, 3000);
    } else {
      messageContainer.textContent = `Incorrect! You have ${guessesRemaining} more guesses remaining.`;
    }
  }
});

// Start the game
displayNewFilm();


