const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);

async function getJoke() {
    const jokeData = await fetch('https://v2.jokeapi.dev/joke/Any', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    // console.log(jokeObj.joke);
    if(typeof(jokeObj.setup)=='undefined'){
        getJoke();
    }
    jokeText.innerHTML = `${jokeObj.setup} <br/> ${jokeObj.delivery}`;
}
