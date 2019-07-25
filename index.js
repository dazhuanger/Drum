//Part 1. Detecting Button Clicks


// Apply the "click" eventListener to every button using a for loop.

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", detectClick);

}

// A callback function that detects button clicks.

function detectClick() {
// Assign the innerHTML property of the returned "this" object as a variable. Check out what "this" represents in different cases:https://www.w3schools.com/js/js_this.asp
  var buttonInnerHTML = this.innerHTML;
// Use the variable as an input of the makeSound function.
  makeSound(buttonInnerHTML);
}


//Part 2. Detecting Keyboard Press

// Apply the "keydown" eventListener to the entire document to detect key press.

document.addEventListener("keydown", detectKeyPress);

// A callback function that detects key pressed

function detectKeyPress(input) {
// The "input" inside the parentheses is just a name that represents the actual input to the function. In this case it is the key that the "keydown" eventListener detected.
// As we can see in the console, the "keydown" eventListener detects not only the key pressed but also a lot of other properties.
// But in order to make sound, we only need one property to make sound, there for we need to specify that single property inside the object, which is the "key".
  makeSound(input.key);
}

// The function that actually makes sound.

function makeSound(lol) {
// Again, the "lol" is just a name of the input of this "makeSound" function. It connects the input of the makeSound function and the expression of the switch statement inside the function.
  switch (lol) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}
