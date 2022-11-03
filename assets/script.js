var quizElement = document.getElementById("quiz");
var startButton = document.getElementById("start-button");
var mainElement = document.querySelector("main");
var questionElement = document.getElementById("question");
var button1Element = document.getElementById("btn1");
var button2Element = document.getElementById("btn2");
var button3Element = document.getElementById("btn3");
var button4Element = document.getElementById("btn4");
var score = 0;
var time = 120;
var currentQuestion = 0;

const question1 = {question: "Why is the sky blue", options: ["wrong", "right", "wrong", "wrong"], answer: "right"}
const question2 = {question: "Why is the sky blue", options: ["wrong", "wrong", "wrong", "right"], answer: "right"}
const question3 = {question: "Why is the sky blue", options: ["wrong", "wrong", "wrong", "right"], answer: "right"}

var questionList = [question1, question2, question3];
var buttonList = [button1Element, button2Element, button3Element, button4Element]

function startQuiz() {
    mainElement.classList.add("hidden");
    renderQuestion(questionList[0]);
    quizElement.classList.remove("hidden");
}

function renderQuestion(question) {
    questionElement.textContent = question.question;
    button1Element.textContent = question.options[0];
    button2Element.textContent= question.options[1];
    button3Element.textContent = question.options[2];
    button4Element.textContent = question.options[3];
}

function checkAnswer(button) {
    console.log(button.textContent);
    if(button.textContent === questionList[currentQuestion].answer) {
        score++;
        currentQuestion++;
        if(currentQuestion >= questionList.length) {
            renderEndPage();
            return;
        } else {
            renderQuestion(questionList[currentQuestion]);
        }
        
    } else {
        //subtract timer
        currentQuestion++;
        if(currentQuestion >= questionList.length) {
            renderEndPage();
            return;
        } else {
            renderQuestion(questionList[currentQuestion]);
        }
    }
}

function renderEndPage() {
    mainElement.classList.remove("hidden");
    quizElement.classList.add("hidden");
}

startButton.addEventListener("click", startQuiz);
button1Element.addEventListener("click", function() {checkAnswer(button1Element)});
button2Element.addEventListener("click", function() {checkAnswer(button2Element)});
button3Element.addEventListener("click", function() {checkAnswer(button3Element)});
button4Element.addEventListener("click", function() {checkAnswer(button4Element)});
