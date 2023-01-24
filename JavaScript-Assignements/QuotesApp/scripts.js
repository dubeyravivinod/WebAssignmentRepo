const result = document.getElementById("result")
const quotes = document.getElementById("quotes")
const quote = document.getElementById("quote")
const random_btn = document.getElementById("btn")

async function random() {
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json()
    console.log(data);

    quote.innerHTML = `
        <h1><q>${data.content}</q></h1>
        <p>~ ${data.author}
    `
    quotes.appendChild(quote);
}
random()