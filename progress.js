class Progress {
    constructor() {
        this.value = 0;
        this.animated = false;
        this.hide = false;
        this.progressContainer = document.querySelector(".progress");
        this.progressFill =
            this.progressContainer.querySelector(".progress__percent");
        this.progressLine = this.progressFill.querySelector("circle");
        this.radius = this.progressLine.getAttribute("r");
    }

    setValue(value) {
        this.value = value;
        const circleLength = 2 * Math.PI * this.radius;
        this.progressLine.style.strokeDasharray = `${circleLength} ${circleLength}`;
        this.progressLine.style.strokeDashoffset = circleLength;

        const offset = circleLength - (value / 100) * circleLength;
        this.progressLine.style.strokeDashoffset = offset;
    }

    setAnimated(isAnimated) {
        this.animated = isAnimated;
        isAnimated
            ? this.progressFill.classList.add("animate")
            : this.progressFill.classList.remove("animate");
    }

    setHide(isHidden) {
        this.hide = isHidden;
        isHidden
            ? (this.progressContainer.style.display = "none")
            : (this.progressContainer.style.display = "block");
    }
}

export default Progress;
