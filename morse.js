// import { morse } from "./letters.js";

const morse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    " ": "/",

    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
};

function text2Morse() {
    let input = document.getElementById("input").value;
    input = input.toUpperCase();

    let arraysplit = input.split("");
    let arraymap = arraysplit.map((n) => {
        if (morse[n]) {
            return morse[n];
        } else {
            return n;
        }
    });

    let code = arraymap.join(" ");
    document.getElementById("output").value = code;
}

function getKey(obj, val) {
    return Object.keys(obj).find((key) => obj[key] === val);
}

function morse2Text() {
    let code = document.getElementById("input").value;
    let arraysplit = code.split(" ");

    let arraymap = arraysplit.map((n) => {
        if (getKey(morse, n)) {
            return getKey(morse, n);
        } else if (n == "") {
            return " ";
        } else {
            return x;
        }
    });

    let text = arraymap.join("");
    document.getElementById("output").value = text;
}

function clearText() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}

// export const morse
