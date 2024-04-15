// Get the number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Add event listeners for each drum button
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        // Play the sound and apply animation
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Add an event listener for keypress events
document.addEventListener("keypress", function(event) {
    var key = event.key;

    // Play the sound and apply animation
    playSound(key);
    buttonAnimation(key);
});

// Function to play sound based on key or button
function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/Cymbal.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/bass.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/Floor-Tom.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/Hi-Hat.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/Small-Tom.mp3");
            audio.play();
            break;
        case "r":
            var audio = new Audio("sounds/Ride-Cymbal.mp3");
            audio.play();
            break;
        default:
            // Handle any unmapped keys (optional)
            break;
    }
}

// Function to apply animation to the button
function buttonAnimation(key) {
    var button = document.querySelector("." + key);
    
    if (button) {
        button.classList.add("pressed");

        // Remove the animation class after a short delay (100ms)
        setTimeout(function() {
            button.classList.remove("pressed");
        }, 100);
    }
}
