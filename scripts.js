// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", init);

function init() {
    // Variables
    let takeoffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketImg = document.getElementById("rocket");

    // Event listeners
    takeoffButton.addEventListener("click", takeoff);
    landButton.addEventListener("click", land);
    abortButton.addEventListener("click", abortMission);

    // Rocket starting position
    rocketImg.style.position = "absolute";
    rocketImg.style.left = "0px";
    rocketImg.style.bottom = "0px";
}

function takeoff() {
    // Confirm that shuttle is ready for takeoff
    let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

    if (isReady) {
        // Change to in-flight text & styling
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }
}

function land() {
    // Pop-up message for shuttle landing
    window.alert("The shuttle is landing. Landing gear engaged.");

    // Change to landing text & styling
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
}

function abortMission() {
    // Confirm that shuttle mission is aborted
    let isAborted = window.confirm("Confirm that you want to abort the mission.");

    if (isAborted) {
        // Change to aborted mission text & styling
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    }
}