var quizElement = document.getElementById("quiz");
var startButton = document.getElementById("start-button");
var mainElement = document.querySelector("main");
var questionElement = document.getElementById("question");
var button1Element = document.getElementById("btn1");
var button2Element = document.getElementById("btn2");
var button3Element = document.getElementById("btn3");
var button4Element = document.getElementById("btn4");

const question1 = {question: "what is", option1: "wrong", option2: "wrong", option3: "wrong", answer: "right"}
const question2 = {question: "what is", option1: "wrong", option2: "wrong", option3: "wrong", answer: "right"}
const question3 = {question: "what is", option1: "wrong", option2: "wrong", option3: "wrong", answer: "right"}

var questionList = [question1, question2, question3];

function startQuiz() {
    mainElement.classList.add("hidden");
    renderQuestion(questionList[0]);
    quizElement.classList.remove("hidden");
}

function renderQuestion(question) {
    questionElement.textContent = question.question;
    button1Element.textContent = question.option1;
    button2Element.textContent= question.option2;
    button3Element.textContent = question.option3;
    button4Element.textContent = question.answer;
}

startButton.addEventListener("click", startQuiz)
