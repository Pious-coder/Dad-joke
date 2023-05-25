const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey ="RdrkXB6Hkr3/wn0Xqg4xLQ==MDYvsjk4eWR4gu4B";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function showjoke(){
    try {
        jokeEl.innerText = "in a sec...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "New joke from dad";

    jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "error try again";
        btnEl.disabled = false;
        btnEl.innerText = "New joke from dad";
        console.log(error);
    }
    
}

btnEl.addEventListener("click", showjoke);