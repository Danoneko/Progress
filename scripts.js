import Progress from "./progress.js";

const valueInput = document.getElementById("value");
const animate = document.getElementById("animate");
const hide = document.getElementById("hide");
const progress = new Progress();
progress.setValue(valueInput.value);

valueInput.addEventListener("input", function () {
    progress.setValue(valueInput.value);
});

animate.addEventListener("change", function () {
    progress.setAnimated(animate.checked);
});

hide.addEventListener("change", function () {
    progress.setHide(hide.checked);
});
