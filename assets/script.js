//Variable declaration
var quizElement = document.getElementById("quiz");
var startButton = document.getElementById("start-button");
var mainElement = document.querySelector("main");
var questionElement = document.getElementById("question");
var button1Element = document.getElementById("btn1");
var button2Element = document.getElementById("btn2");
var button3Element = document.getElementById("btn3");
var button4Element = document.getElementById("btn4");
var endPageElement = document.getElementById("end-page");
var scoreDisplay = document.getElementById("score-display");
var score = 0;
var timer = 120;
var currentQuestion = 0;

//Generates question objects that contain the question, 4 options, and the correct answer
const question1 = {question: "Why is the sky blue", options: ["wrong", "right", "wrong", "wrong"], answer: "right"}
const question2 = {question: "Why is the sky blue", options: ["wrong", "wrong", "wrong", "right"], answer: "right"}
const question3 = {question: "Why is the sky blue", options: ["wrong", "wrong", "wrong", "right"], answer: "right"}

//Creates list of question objects
var questionList = [question1, question2, question3];

//Starts the quiz by hiding the homepage and rendering the first question
function startQuiz() {
    mainElement.style="display:none";
    renderQuestion(questionList[0]);
    quizElement.style="display:flex";
}

//Renders a question by adding text from a question object to the text of the question element and button elements
function renderQuestion(question) {
    questionElement.textContent = question.question;
    button1Element.textContent = question.options[0];
    button2Element.textContent= question.options[1];
    button3Element.textContent = question.options[2];
    button4Element.textContent = question.options[3];
}

//Checks if the button the user selected is the button to the correct answer. If it is the correct button, the user will gain a point and the next question in the question list will be rendered. If incorrect, the user will lose time and the next question will be rendered
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
        timer -= 10;
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
    mainElement.style="display:none";
    quizElement.style="display:none";
    endPageElement.style="display:flex";
    scoreDisplay.textContent = "Your score: " + score;
}

startButton.addEventListener("click", startQuiz);
button1Element.addEventListener("click", function() {checkAnswer(button1Element)});
button2Element.addEventListener("click", function() {checkAnswer(button2Element)});
button3Element.addEventListener("click", function() {checkAnswer(button3Element)});
button4Element.addEventListener("click", function() {checkAnswer(button4Element)});
