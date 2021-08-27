let favoriteQuotes = {
    "Oscar Wilde": "Be yourself; everyone else is already taken",
    "Mae West": "You only live once, but if you do it right, once is enough",
     "William Shakespear": "The fool doth think he wise, but the wise man knows himself to be a fool",
    "Mark Twain": "Never putt off till tomorrow what may be on",
    "George Eliot": "It is never to late to be what you might have been",
    "Maya Angelou": "There is no greator agnoy than bearing an untold story inside you",
    "Pablo Picasso": "Everything You can imagine is real",
    "Pablo Picasso": "Good artist copy, great artist steal",
    "Alexander Dumas-Fils": "The difference between genius and stupidity is: genius has its limits",
    "Paulo Coelho": "And, when you want something, all the universe conspires in helping you to achieve it",

}

var randomImage = new Array("url(photos\bluepaint.jpg)","url(photos\createact.jpg)", "url(photos\forest.jpg)", "url(photos\opportunity.jpg)", "url(photos\womenandmirror.jpg)" )

let array_of_specified_colors = ["#ef476f", "#"]

let header = document.getElementById("header");
let btn = document.getElementById("btn");
let body = document.getElementById("body");

const gone = () => {
    results = [] 
   var keys = Object.keys(favoriteQuotes);
   var key = keys[keys.length* Math.random() << 0];
   var value = favoriteQuotes[key]
   results.push(key + ": "  + value)
    header.innerHTML = results 
    var number = randomImage[Math.floor(Math.random() * randomImage.length)]
    body.style.backgroundImage = number
    
}


btn.onclick = gone


var number = randomImage[Math.floor(Math.random() * randomImage.length)]

console.log(number)
