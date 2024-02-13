const questions = [
    {
        question: "Do you have a boyfriend?",
        answers: [
            { text: "Wala, single ako", correct: false },
            { text: "Yes, meron akong boyfriend na gwapo.", correct: true },
            { text: "Siguro??? kpop idol shea. ako lang nakakaalam", correct: false },
            { text: "None, pwede ako landiin", correct: false },
        ]
    },

    {
        question: "Who is your boyfriend?",
        answers: [
            { text: "WALA NGA! LANDIIN NIYO AKO PLEASE!!", correct: false },
            { text: "Secret, LOWKEY LANG KAMI!", correct: false },
            { text: "Minghao", correct: false },
            { text: "John Kenneth Eamiguel Herrera", correct: true },
        ]
    },

    {
        question: "When do you celebrate your monthsary?",
        answers: [
            { text: "F0r3Ver #20", correct: true },
            { text: "Wala nga kakul8!? jowain niyo ako!", correct: false },
            { text: "Lucky 9", correct: false },
            { text: "NAKALIMUTAN KO :>", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("choices");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = "none"; 
    questionElement.innerHTML = " ";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
    
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    nextBtn.style.display = "block"; 
}

function letterReveal(){
    resetState();
    window.location.href = "valentine.html";
}

const memes = [
    "meme1.jpg",
    "meme2.jpg",
    "meme3.jpg",
    "meme4.jpg",
    "meme5.jpg",
    "meme6.jpg",
    "meme7.jpg"
];

function getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex];
}

function displayMeme() {
    const popupContainer = document.getElementById("popup-container");
    const popupImage = document.getElementById("popup-image");

    // Get a random meme
    const randomMeme = getRandomMeme();

    // Set the source of the image
    popupImage.src = randomMeme;

    popupContainer.style.display = "block";
    popupContainer.classList.add("fade-out");

    popupContainer.addEventListener("animationend", () => {
        popupContainer.style.display = "none";
        popupContainer.classList.remove("fade-out");
    }, { once: true });
}
 
function handleNextButton() {
    const selectedAnswer = document.querySelector(".btn.correct");
    if (selectedAnswer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            letterReveal();
        }
    } else {
        displayMeme();
    }
}

nextBtn.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const blackout = document.querySelector(".blackout");
    
    blackout.addEventListener("animationend", function() {
        blackout.style.display = "none";
    });
});

startQuiz();
