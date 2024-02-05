const quotes = [{
    quote: `"I'm taking all negatives in my life, and turning them into a postive."`,
    writer: `-Reflectly`
},  {
    quote: `"Abundance is not something we acquire. It is something we tune into."`,
    writer: `-Dr. Wayne Dyer`
}, {
    quote: `"Let yourself be silently drawn by the strange pull of what you really love"`,
    writer: `-Rumi`
}, {
    quote: `"If you want to conquer the anxiety of life, live in the moment, live in the breath"`,
    writer: `-Amit Ray`
}, {
    quote: `"You only live once, but if you it right, once is enough."`,
    writer: `-Mae West`
},]


let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})
