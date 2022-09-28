const jokes = require('give-me-a-joke');
const color = require('colors');
//console.log(jokes);

jokes.getRandomDadJoke(function(joke) {
    console.log(joke.underline.green);
});
