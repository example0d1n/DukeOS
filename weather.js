// WEATHER APP FUNCTION !! :D
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "fb1c91b52c7ddeda15627e77b06ea92e";

weatherForm.addEventListener("submit", event => {

    event.preventDefault();

    const city = cityInput.value;

    if(city){

    }
    else{
        displayError("Enter a realll city");

    }


});

async function getWeatherData(city){

}

function displayWeatherInfo(data){


}

function getweatherEmoji(weatherId){

}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild();

}