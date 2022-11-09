// -------------------------------------
// Express Lab 2 - Devliverable 
// -------------------------------------

// Create a directory called express-lab-2then touch a Javascript file inside of express-lab-2called server.js.

// You'll use this file to complete the exercises below:
// Run npm init to create a package.json file.
// Install express with npm i express.

// Require express and set the app. (look back to the lesson notes from today if you need more help on how to do this).
const { response } = require('express');
const express = require('express');
const app = express();

// Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
// Give the greeting route a param /:name
app.get('/greeting', (request, response) => {
    response.send("Hello, stranger")
});


// Give the greeting route a param /:name
// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).
app.get('/greeting/:name', (request, response) => {
    response.send(`What's up, ${request.params.name}! It's so great to see you!`)
});


// Tip Calculator
// Your app should have a route of '/tip'and it should expect 2 params. One should be total and one should be tipPercentage.
//When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20 on the page).
app.get('/tip/:total/:tipPercentage', (request, response) => {

    const total = parseInt(request.params.total);
    const tipPercentage = parseInt(request.params.tipPercentage) / 100;

        response.send(`${total * tipPercentage}`)
});


// Magic 8 Ball
// Create a route of '/magic'that should expect a phrase in the URL that ask the Magic 8 ball a question.
// So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.
// We can't use spaces in the url, so we use %20to express a space in the url.
// So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.
// Send the magic 8 ball response back between html <h1>tags
// Use this array of Magic 8 ball responses.....
const magicResponse= [
    "It is certain", 
    "It is decidedly so", 
    "Without a doubt", 
    "Yes definitely",
    "You may rely on it", 
    "As I see it yes", 
    "Most likely", 
    "Outlook good",
    "Yes", 
    "Signs point to yes", 
    "Reply hazy try again", 
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now", 
    "Concentrate and ask again",
    "Don't count on it", 
    "My reply is no", 
    "My sources say no",
    "Outlook not so good", 
    "Very doubtful" 
]

app.get('/magic/:questions', (request, response) => {
    response.send(`${request.params.questions}` + magicResponse[Math.floor(Math.random()*magicResponse.length)])
  });


// Build an express application that enables users to count down the number of bottles of beer. Don't like beer?
// Pass around bottles of soda, kombucha, or milk etc.
// On the home page (get "/"), users should see:
// "99 Bottles of beer on the wall"
// a link that says "take one down, pass it around"
// this should link to /98, where the number represents the number of bottles left.
// When a number is given in the url (get "/:number_of_bottles"), users should see:
// The number of bottles of beer on the wall (i.e. 98 Bottles of beer on the wall.)
// a link to "take one down, pass it around", where the href is number of bottles in the parameter minus 1.
// If there are 0 bottles left, do not show a link to "take one down"
// Add a link to start over, which directs the user back to the home page.
app.get("/", (request, response) => {
    response.send(`<h2>99 Bottles of beer on the wall</h2>
      <a href ="/98">Take one down, pass it around</a>`);
  });
  app.get("/:numOfBottles", (request, response) => {
    let bottleNumbers = request.params.numOfBottles;
    if (bottleNumbers > 0) {
      response.send(`<h2>${bottleNumbers} Bottles of beer on the wall</h2>
          <a href ="/${bottleNumbers - 1}">Take One Down, Pass it Around</a>`);
    } else {
      response.send(`No more beers! <a href ="/">Please start over</a>`);
    }
  });


// Tell the server where to listen for requests (the port).
app.listen(3000, () => {
    console.log('listening in port 3000')
});