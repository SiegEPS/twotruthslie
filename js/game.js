
// result paragraph

// global variable so we can use it in all functions
let fname = "";

// introduction form
function greet() {

    let greetParagraph = document.getElementById("greet");

    // get values from form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // input check
    if (fname === "" || lname === "") {
        alert("First and Last name cannot be an empty string!");
        return;
    }
    // age check
    if (age === "" || age < 1 || age > 100) {
        alert("Invalid age! Must be a number between 1 - 100");
        return;
    }

    // show result
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

// trivia form
function trivia1() {
    // get handle to result paragraph
    let triviaAnswer = document.getElementById("trivia1-answer");
    // get checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // give result based off of selected
    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck.";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
    else {
        triviaAnswer.innerHTML = fname + ", I don't know what happened here...";
    }
}

// student challenge #1 - truth and lie
function truthAndLie() {

    let tal1 = document.getElementById("tal1");

    let germanySelected = document.getElementById("germany").checked;
    let bridgeSelected = document.getElementById("bridge").checked;
    let singSelected = document.getElementById("sing").checked;

    if (germanySelected) {
        tal1.innerHTML = fname + ", you are wrong. Sprechen sie Deutsch?";
    } else if (bridgeSelected) {
        tal1.innerHTML = fname + ", you are wrong. I competed in a world junior bridge championship.";
    } else if (singSelected) {
        tal1.innerHTML = fname + ", you are correct. I wish I could sing!";
    } else {
        tal1.innerHTML = fname + ", you really don't know me that well, do you?";
    }
}

// studend challenge #2 - truth and lie 2
function truthAndLie2() {
    let tal2 = document.getElementById("tal2");

    let southamericaSelected = document.getElementById("southamerica").checked;
    let siblingSelected = document.getElementById("sibling").checked;
    let threatSelected = document.getElementById("threat").checked;

    if (southamericaSelected && siblingSelected && threatSelected) {
        tal2.innerHTML = fname + ", trying to cheat, eh? Please only select two."
    }
    else if (southamericaSelected && threatSelected) {
        tal2.innerHTML = fname + ", you know me so well. I feel seen.";
    }
    else if (southamericaSelected || threatSelected) {
        tal2.innerHTML = fname + ", oof. You got only got one right.";
    }
    else {
        tal2.innerHTML = fname + ", you didn't get any right. How is this possible when you should be selecting at least two?"
    }
}