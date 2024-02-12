const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "+", "-", "="];
let output = "";

const calculate = (btnvalue) => {
    if (btnvalue === "=" && btnvalue !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "AC") {
        output = "";
    } else if (btnvalue === "C") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


document.addEventListener("keydown", (e) => {
    

    const pressedkey = e.key;
    const button = Array.from(buttons).find(
        (btn) => btn.dataset.value === pressedkey
    );

    if (button) {
        button.click();
    }
});
