///////////// Genre Radio

// radio input method adapted from class input-event demo
// https://github.com/rmit-idad-2650-wed/input-event-demos

const fantasyRadio = document.getElementById("fantasy");
const mysteryRadio = document.getElementById("mystery");
const romanceRadio = document.getElementById("romance");
const sciFiRadio = document.getElementById("sci-fi");

const genreOutput = document.getElementById("genreOutput");
const playingGenre = document.getElementById("playing-genre");

function listGenreSelection(e){

    genreOutput.textContent = e.target.value;
    playingGenre.textContent = e.target.value;

}

fantasyRadio.addEventListener("input", listGenreSelection);
mysteryRadio.addEventListener("input", listGenreSelection);
romanceRadio.addEventListener("input", listGenreSelection);
sciFiRadio.addEventListener("input", listGenreSelection);



///////////// Atmosphere Radio

// radio input method adapted from class input-event demo
// https://github.com/rmit-idad-2650-wed/input-event-demos

const calmRadio = document.getElementById("calm");
const darkRadio = document.getElementById("dark");
const magicalRadio = document.getElementById("magical");
const nostalgicRadio = document.getElementById("nostalgic");

const atmosphereOutput = document.getElementById("atmosphereOutput");
const playingAtmosphere = document.getElementById("playing-atmosphere");

function listAtmosphereSelection(e){

    atmosphereOutput.textContent = e.target.value;
    playingAtmosphere.textContent = e.target.value;

}

calmRadio.addEventListener("input", listAtmosphereSelection);
darkRadio.addEventListener("input", listAtmosphereSelection);
magicalRadio.addEventListener("input", listAtmosphereSelection);
nostalgicRadio.addEventListener("input", listAtmosphereSelection);



///////////// Audio

// HTML audio play and pause methods based on class exercise and MDN
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause

// genre audio
const fantasyAudio = document.getElementById("fantasy-audio");
const mysteryAudio = document.getElementById("mystery-audio");
const romanceAudio = document.getElementById("romance-audio");
const sciFiAudio = document.getElementById("sci-fi-audio");

// atmosphere audio
const calmAudio = document.getElementById("calm-audio");
const darkAudio = document.getElementById("dark-audio");
const magicalAudio = document.getElementById("magical-audio");
const nostalgicAudio = document.getElementById("nostalgic-audio");



///////////// Default Volume

// default slider value is 50%, so audio starts at 0.5 volume

fantasyAudio.volume = 0.5;
mysteryAudio.volume = 0.5;
romanceAudio.volume = 0.5;
sciFiAudio.volume = 0.5;

calmAudio.volume = 0.5;
darkAudio.volume = 0.5;
magicalAudio.volume = 0.5;
nostalgicAudio.volume = 0.5;



///////////// Intensity Range

// adapted from the Range example in the class input-event demo
// I added the slider value to control the volume of the audio
// HTMLMediaElement.volume reference:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume

const intensityRange = document.getElementById("intensity");
const intensityOutputText = document.getElementById("intensity-value");
const playingIntensity = document.getElementById("playing-intensity");

intensityRange.addEventListener("input", (e) => {

    // show percentage
    intensityOutputText.textContent = e.target.value + "%";
    playingIntensity.textContent = e.target.value + "%";

    // convert 0-100 into 0-1
    let volume = e.target.value / 100;

    // change genre audio volume
    fantasyAudio.volume = volume;
    mysteryAudio.volume = volume;
    romanceAudio.volume = volume;
    sciFiAudio.volume = volume;

    // change atmosphere audio volume
    calmAudio.volume = volume;
    darkAudio.volume = volume;
    magicalAudio.volume = volume;
    nostalgicAudio.volume = volume;

});



///////////// Buttons

const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");

const statusText = document.getElementById("status");



///////////// Pause All Audio

function pauseAllAudio(){

    fantasyAudio.pause();
    mysteryAudio.pause();
    romanceAudio.pause();
    sciFiAudio.pause();

    calmAudio.pause();
    darkAudio.pause();
    magicalAudio.pause();
    nostalgicAudio.pause();

}



///////////// Start Soundtrack

function startSoundtrack(){

    // pause previous soundtrack
    pauseAllAudio();


    // play selected genre

    if(fantasyRadio.checked === true){
        fantasyAudio.play();
        playingGenre.textContent = "Fantasy";
    }

    if(mysteryRadio.checked === true){
        mysteryAudio.play();
        playingGenre.textContent = "Mystery";
    }

    if(romanceRadio.checked === true){
        romanceAudio.play();
        playingGenre.textContent = "Romance";
    }

    if(sciFiRadio.checked === true){
        sciFiAudio.play();
        playingGenre.textContent = "Sci-Fi";
    }


    // play selected atmosphere

    if(calmRadio.checked === true){
        calmAudio.play();
        playingAtmosphere.textContent = "Calm";
    }

    if(darkRadio.checked === true){
        darkAudio.play();
        playingAtmosphere.textContent = "Dark";
    }

    if(magicalRadio.checked === true){
        magicalAudio.play();
        playingAtmosphere.textContent = "Magical";
    }

    if(nostalgicRadio.checked === true){
        nostalgicAudio.play();
        playingAtmosphere.textContent = "Nostalgic";
    }


    // show intensity
    playingIntensity.textContent =
        intensityRange.value + "%";


    // update status
    statusText.textContent =
        "Soundtrack playing.";


    // enable pause button
    pauseButton.disabled = false;

}



///////////// Pause Soundtrack

function pauseSoundtrack(){

    pauseAllAudio();

    statusText.textContent =
        "Soundtrack paused.";

}



///////////// Reset

// currentTime reference from MDN
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime

function resetSoundtrack(){

    // pause all audio
    pauseAllAudio();


    // return audio to beginning
    fantasyAudio.currentTime = 0;
    mysteryAudio.currentTime = 0;
    romanceAudio.currentTime = 0;
    sciFiAudio.currentTime = 0;

    calmAudio.currentTime = 0;
    darkAudio.currentTime = 0;
    magicalAudio.currentTime = 0;
    nostalgicAudio.currentTime = 0;


    // reset genre
    fantasyRadio.checked = true;
    mysteryRadio.checked = false;
    romanceRadio.checked = false;
    sciFiRadio.checked = false;


    // reset atmosphere
    calmRadio.checked = true;
    darkRadio.checked = false;
    magicalRadio.checked = false;
    nostalgicRadio.checked = false;


    // reset intensity
    intensityRange.value = 50;
    intensityOutputText.textContent = "50%";


    // reset actual audio volume
    fantasyAudio.volume = 0.5;
    mysteryAudio.volume = 0.5;
    romanceAudio.volume = 0.5;
    sciFiAudio.volume = 0.5;

    calmAudio.volume = 0.5;
    darkAudio.volume = 0.5;
    magicalAudio.volume = 0.5;
    nostalgicAudio.volume = 0.5;


    // reset selection outputs
    genreOutput.textContent = "";
    atmosphereOutput.textContent = "";


    // reset Now Playing
    playingGenre.textContent = "—";
    playingAtmosphere.textContent = "—";
    playingIntensity.textContent = "—";


    // reset status
    statusText.textContent =
        "Make your choices, then start the soundtrack.";


    // disable pause button
    pauseButton.disabled = true;

}



///////////// Button Event Listeners

startButton.addEventListener("click", startSoundtrack);

pauseButton.addEventListener("click", pauseSoundtrack);

resetButton.addEventListener("click", resetSoundtrack);