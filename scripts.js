// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", init);

function init() {
    // Variables
    let takeoffButton = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    // Event listeners
    takeoffButton.addEventListener("click", takeoff);
    
}

function takeoff() {
    // Confirm that shuttle is ready for takeoff
    let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");

    if (isReady) {
        // Change to in-flight text & styling
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        spaceShuttleHeight.innerHTML = 10000;
    }
}

