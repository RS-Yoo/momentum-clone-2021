const quotes = [
  {
    quote:
      "There should be no boundaries to human endeavor. However bad life may seem, while there is life, there is hope.",
    author: "Theory of Everything",
  },
  {
    quote: "Remember me. Try your best. Maybe we can.",
    author: "Eternal Sunshine of the Spotless Mind",
  },
  {
    quote:
      "Come back and make up a good-bye at least. Let's pretend we had one.",
    author: "Eternal Sunshine of the Spotless Mind",
  },
  {
    quote:
      "We're all travelling through time together every day of our lives. All we can do is do our best to relish this remarkable ride.",
    author: "About Time",
  },
  {
    quote:
      "I just try to live every day as if I've deliberately come back to this one day to enjoy it as if it was the full final day of my extraordinary life.",
    author: "About Time",
  },
  {
    quote: "Live life as if there were no second chances.",
    author: "About Time",
  },
  {
    quote:
      "Just because my dreams are different than yours, it doesn’t mean they’re unimportant.",
    author: "Little Women",
  },
  {
    quote: "I'll See You At The Beginning, Friend.",
    author: "Tenet",
  },
  {
    quote: "Life is too short to be angry at one’s sisters.",
    author: "Little Women",
  },
  {
    quote:
      "What's happened, happened, It's an expression of faith in the mechanics of the world, it's not an excuse for doing nothing.",
    author: "Tenet",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quoteToday = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quoteToday.quote;
author.innerText = quoteToday.author;
