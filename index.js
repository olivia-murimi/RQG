const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiURL = "https://api.quotable.io/random";


 async function getQuote(){

    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
        console.log(data);
    }catch (error){
        
    }
    

}





btnEl.addEventListener("click",getQuote)