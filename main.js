const main = document.getElementById("main");

disp();

function disp() {
    main.innerHTML = `
        <div>
            <div id="gameLog"></div>
            <div>
                <form id="gameIn" action="javascript:">
                    <input id="gameInPut" type="text" placeholder="Enter game command">
                    <button onclick="appendText()">Return</button>
                </form>
    `;
}

const gameIn = document.getElementById("gameInPut");
const gameLog = document.getElementById("gameLog");

let currentLocation = "forest";

const forest = {
    text: "You weake up in a forest",
    opt1: "Look around",
    opt2: "Walk North",
    opt3: "Walk South",
};

const house = {
    text: "The house is a big brown lumber house",
    opt1: "Look in the house",
    opt2: "Walk West",
    opt3: "Walk North",
};

const cat = {
    text: "The cat looks at you",
    opt1: "Pet",
    opt2: "Walk South",
    opt3: "Walk West",
};

playForest();

function playForest() {
    gameLog.innerHTML +=
        forest.text +
        `<br>` +
        `Opptions: <b>Look</b> around, Go <b>North</b>, Go <b>South</b>`;
    currentLocation = "forest";
}

function playHouse() {
    gameLog.innerHTML +=
        house.text +
        `<br>` +
        `Opptions: <br>Look</br> around, Go <b>North</b>, Go <b>West</b>`;
    currentLocation = "forest";
}

function playCat() {
    gameLog.innerHTML +=
        cat.text +
        `<br>` +
        `Options: <b>Pet</b> the cat, Go <b>South</b>, Go <b>West</b>`;
    currentLocation = "cat";
}

function appendText() {
    const command = gameIn.value.trim();
    gameLog.innerHTML += `<br>${command}<br>`;

    if (currentLocation === "forest") {
        startForest(command);
    } else if (currentLocation === "house") {
        forestHouse(command);
    } else if (currentLocation === "cat") {
        forestCat(command);
    }

    gameLog.scrollTop = gameLog.scrollHeight;

    gameIn.value = "";
}

function startForest(command) {
    if (command.toLowerCase() === "look") {
        gameLog.innerHTML += "You see nothing of interest.<br>";
    } else if (command.toLowerCase() === "north") {
        gameLog.innerHTML += "You find a house.<br>";
        playHouse();
    } else if (command.toLowerCase() === "south") {
        gameLog.innerHTML += "You find a cat.<br>";
        playCat();
    } else {
        gameLog.innerHTML += "Invalid command!<br>";
    }
}

function forestHouse(command) {
    if (command.toLowerCase() === "look") {
        gameLog.innerHTML += "You meet a old lady in the house.<br>";
    } else if (command.toLowerCase() === "west") {
        gameLog.innerHTML += "You are at the end of the forest.<br>";
    } else if (command.toLowerCase() == "north") {
        gameLog.innerHTML += "You find a pond.<br>";
    } else {
        gameLog.innerHTML += "Invalid command!<br>";
    }
}

function forestCat(command) {
    if (command.toLowerCase() === "pet") {
        gameLog.innerHTML += "The cat purs, and seem to like you!<br>";
    } else if (command.toLowerCase() === "south") {
        gameLog.innerHTML += "You see a flower bed.<br>";
    } else if (command.toLowerCase() === "west") {
        gameLog.innerHTML += "You find nothing of interest<br>";
    } else {
        gameLog.innerHTML += "Invalid command!<br>";
    }
}
