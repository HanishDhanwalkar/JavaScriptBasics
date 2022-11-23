const cowsay = require("cowsay");

const Quote = require("inspirational-quotes");

var text = Quote.getQuote().text;

console.log(
  cowsay.say({
    text: text,
    e: "XX",
    T: "U",
  })
);
