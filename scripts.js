const progressContainer = document.querySelector(".progress-container");
const progressFill = document.querySelector(".progress__fill");
const progressLine = progressFill.querySelector("circle");
const radius = progressLine.getAttribute("r");
const circleLenght = 2 * Math.PI * radius;

progressLine.style.strokeDasharray = `${circleLenght} ${circleLenght}`;
progressLine.style.strokeDashoffset = circleLenght;

const valueInput = document.getElementById("value");
const animate = document.getElementById("animate");
const hide = document.getElementById("hide");

function setProgress(percent) {
    const offset = circleLenght - (percent / 100) * circleLenght;
    progressLine.style.strokeDashoffset = offset;
}

valueInput.addEventListener("input", function () {
    setProgress(valueInput.value);
});

animate.addEventListener("change", function () {
    if (animate.checked) {
        progressFill.classList.add("animate");
    } else {
        progressFill.classList.remove("animate");
    }
});

hide.addEventListener("change", function () {
    const progress = document.querySelector(".progress");
    if (hide.checked) {
        progress.style.display = "none";
    } else {
        progress.style.display = "block";
    }
});

// Initialize the progress bar with the initial value
setProgress(valueInput.value);
