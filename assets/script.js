var questionElement = document.getElementById("questions");
var startButton = document.getElementById("start-button");
var mainElement = document.querySelector("main");



function startQuiz() {
    mainElement.classList.add("hidden");
    questionElement.classList.remove("hidden");
}

startButton.addEventListener("click", startQuiz)