const btnEl = document.getElementById("btn")

const apiURL = "https://api.qutable.io/random";
 async function getQuote(){
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
}





btnEl.addEventListener("click",getQuote)