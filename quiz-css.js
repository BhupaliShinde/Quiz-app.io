const questions =[
    {
        question:"CSS stand for ",
        answers:[
            {
                text:"Cascading Style Sheets",correct:true
            },
            {
                text:"Colored Special sheets",correct:false
            },{
                text:"Colour Style Sheets",correct:false
            },{
                text:"None of the above",correct:false
            },
        ]
    },
    {
        question:"How can we change the background color of an element?",
        answers:[
            {text:"color",correct:false},
            {text:"background-color",correct:true},
            {text:"Both A and B",correct:false},
            {text:"None of the above",correct:false},
        ]   
    },
    {
        question:"How can we change the color of an element?",
        answers:[
            {text:"None of the below",correct:false},
            {text:"Both A and B",correct:false},
            {text:"background-color",correct:false},
            {text:"color",correct:true},
        ] 
       
    },
    {
        question:"In how many ways can CSS be written in ?",
        answers:[
            {text:"3",correct:true},
            {text:"2",correct:false},
            {text:"4",correct:false},
            {text:"1",correct:false},
        ]   
    },
    {
        question:"What type of CSS is generally recommended for designing large web pages?",
        answers:[
            {text:"Inline",correct:false},
            {text:"Internal",correct:false},
            {text:"External",correct:true},
            {text:"None of the above",correct:false},
        ]   
    },
];
const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();

}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answers=>{
        const button =document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answersButtons.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    });



}
function resetState(){
     nextButton.style.display="none";
     while(answersButtons.firstChild){
        answersButtons.removeChild(answersButtons.firstChild);
     }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answersButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });

    nextButton.style.display="block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="play again"
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();