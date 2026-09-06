///////////// Genre Radio

// find our genre radio inputs
const fantasyRadio = document.getElementById("fantasy");
const mysteryRadio = document.getElementById("mystery");
const romanceRadio = document.getElementById("romance");
const sciFiRadio = document.getElementById("sci-fi");

// find our genre outputs
const genreOutput = document.getElementById("genreOutput");
const playingGenre = document.getElementById("playing-genre");

// show which genre the user selected
function listGenreSelection(e){

    genreOutput.textContent = e.target.value;
    playingGenre.textContent = e.target.value;

}

// add event listeners
fantasyRadio.addEventListener("input", listGenreSelection);
mysteryRadio.addEventListener("input", listGenreSelection);
romanceRadio.addEventListener("input", listGenreSelection);
sciFiRadio.addEventListener("input", listGenreSelection);



///////////// Atmosphere Radio

// find our atmosphere radio inputs
const calmRadio = document.getElementById("calm");
const darkRadio = document.getElementById("dark");
const magicalRadio = document.getElementById("magical");
const emotionalRadio = document.getElementById("emotional");

// find our atmosphere outputs
const atmosphereOutput = document.getElementById("atmosphereOutput");
const playingAtmosphere = document.getElementById("playing-atmosphere");

// show which atmosphere the user selected
function listAtmosphereSelection(e){

    atmosphereOutput.textContent = e.target.value;
    playingAtmosphere.textContent = e.target.value;

}

// add event listeners
calmRadio.addEventListener("input", listAtmosphereSelection);
darkRadio.addEventListener("input", listAtmosphereSelection);
magicalRadio.addEventListener("input", listAtmosphereSelection);
emotionalRadio.addEventListener("input", listAtmosphereSelection);



///////////// Intensity Range

// find our intensity range
const intensityRange = document.getElementById("intensity");

// find our intensity outputs
const intensityOutputText = document.getElementById("intensity-value");
const playingIntensity = document.getElementById("playing-intensity");

// update the number when the slider moves
intensityRange.addEventListener("input", (e) => {

    intensityOutputText.textContent = e.target.value + "%";
    playingIntensity.textContent = e.target.value + "%";

});

///////////// Reset Button

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {

    // reset genre
    fantasyRadio.checked = true;
    mysteryRadio.checked = false;
    romanceRadio.checked = false;
    sciFiRadio.checked = false;

    // reset atmosphere
    calmRadio.checked = true;
    darkRadio.checked = false;
    magicalRadio.checked = false;
    emotionalRadio.checked = false;

    // reset intensity slider
    intensityRange.value = 50;

    // reset the output text
    genreOutput.textContent = "";
    atmosphereOutput.textContent = "";
    intensityOutputText.textContent = "50%";

    // reset Now Playing
    playingGenre.textContent = "—";
    playingAtmosphere.textContent = "—";
    playingIntensity.textContent = "—";

});