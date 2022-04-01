// TODO
    // [] Wrtie out demo 2 page
    //     [] make functions for that 
    //     [] make it like a fill in the blank code editor like scratch
//
//
//

// Functions for demo 1 ///
let tooltip = document.querySelectorAll('.tooltip')

function fn(e) {
    // Finds collection of elements in the tooltip collection.
    // Iterates over every element and shows the tooltip div
    // Alters the styles so that the left and top css property
    // 
    for (let i=tooltip.length; i--;) {
        tooltip[i].style.display = "block";
        tooltip[i].style.left = e.pageX + 'px';
        tooltip[i].style.top = e.pageY + 'px';
        // Background color changes based on position of mouse
        tooltip[i].style.backgroundColor = "rgba(" + e.pageX*0.6 + ", 5, "+ e.pageY*0.6 +", 0.856)";
    }
}

    // Function to hide tooltip when cursor hovers off the img
    let hideToolTip = () => {
        tooltip[0].style.display = "none";
    }

// Function that runs when the cursor is hovered over an img map area tag
let showToolTip = (e) => {
    tooltip[0].textContent = defs[e.id];
    // console.log(e);
    e.addEventListener('mousemove', (event) => {
        fn(event);
    });
}

// An object of definitions for each component
// Keys are the classnames and values are the definitions
const defs = {
    led1 : "two LEDs are connected to the TinkerBug's GPIO 18 and GPIO 23",
    led2 : "two LEDs are connected to the TinkerBug's GPIO 18 and GPIO 23",
    button : "Click me! This is a standard 12mm square momentary button. TinkerBug reads in a button press",
    capacitor1 : "A capacitor is a device that stores electrical energy in an electric field",
    capacitor2 : "A capacitor is a device that stores electrical energy in an electric field",
    gpio : "TinkerBug offers up its GPIO over a standard male header on the board.",
    tinkerbug : "Driving the TinkerBug's I/O lines requires a bit of programming",
    jumper : " male-to-female jumper wires help to make an easy transition from TinkerBug to breadboard."
}


// Using jquery toggle to show and hide elements
let ledOnClick = () => {
    $( "#demo-toggle-on" ).toggle();
    $( "#demo-toggle-off" ).toggle();
}

/// End of funtions for demo 1 ///

// Functions for demo 2 ///

let selectsElement = document.querySelectorAll('.select');

let cursel = [];
let curoption;
let temp = [];
let answers = ["gpiolow", "ledpin", "time"];

for (let i = 0; i < selectsElement.length; i++) {

    selectsElement[i].addEventListener('change', () => {
        // Checks the current selected option and puts it into an array
        // checkAnswers compares the users answers to the answer key array
        cursel = [];
        getCursel(cursel);
        if (checkAswers(answers, cursel)) {
            console.log("correct!");
            ledOn();
        }
        else {
            ledOff();
        }
        
        
      });


}

let getCursel = (cursel) => {
    for (let i = 0; i < selectsElement.length; i++) {
        cursel.push(selectsElement[i].value);
    }
}

let checkAswers = (answers, cursel) => {
    return (answers[0] == cursel[0] && answers[1] == cursel[1] && answers[2] == cursel[2])
}

// changing the led png

let ledOn = () => {
    document.querySelector(".led-off").style.display = "none";
    document.querySelector(".led-on").style.display = "block";
    document.getElementById("msg").innerHTML = "Correct!";
}

let ledOff = () => {
    document.querySelector(".led-off").style.display = "block";
    document.querySelector(".led-on").style.display = "none";
    document.getElementById("msg").textContent = "Almost there!";
}












