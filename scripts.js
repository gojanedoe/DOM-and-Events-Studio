window.addEventListener("load", init);

let rocketImg; // Make global

function init() {
    // Variables
    let takeoffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    rocketImg = document.getElementById("rocket");

    // Event listeners
    takeoffButton.addEventListener("click", takeoff);
    landButton.addEventListener("click", land);
    abortButton.addEventListener("click", abortMission);
    upButton.addEventListener("click", function() { moveShuttle(this.id); });
    downButton.addEventListener("click", function() { moveShuttle(this.id); });
    leftButton.addEventListener("click", function() { moveShuttle(this.id); });
    rightButton.addEventListener("click", function() { moveShuttle(this.id); });

    // Rocket starting position
    rocketImg.style.position = "absolute";
    resetPosition();
    
}

function resetPosition() {
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
        moveShuttle("takeoff");
    }
}

function land() {
    // Pop-up message for shuttle landing
    window.alert("The shuttle is landing. Landing gear engaged.");

    // Change to landing text & styling
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
    resetPosition();
}

function abortMission() {
    // Confirm that shuttle mission is aborted
    let isAborted = window.confirm("Confirm that you want to abort the mission.");

    if (isAborted) {
        // Change to aborted mission text & styling
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        resetPosition();
    }
}

function moveShuttle(id) {
    // Find current position (with "px" removed from end)
    let bottomPosition = Number(rocketImg.style.bottom.slice(0, -2));
    let leftPosition = Number(rocketImg.style.left.slice(0, -2));
    
    // Move rocket image based on buttons clicked
    if (id === "up") {        
        rocketImg.style.bottom = bottomPosition + 10 + "px";

        // Increase shuttle height
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;

    } else if (id === "down") {
        rocketImg.style.bottom = bottomPosition - 10 + "px";

        // Decrease shuttle height
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;

    } else if (id === "right") {
        rocketImg.style.left = leftPosition + 10 + "px";
    
    } else if (id === "left") {
        rocketImg.style.left = leftPosition - 10 + "px";

    } else if (id === "takeoff"){ 
        // If takeoff() is run, rather than a button being clicked
        rocketImg.style.bottom = bottomPosition + 10 + "px";
    }
}