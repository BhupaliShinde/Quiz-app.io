const questions =[
    {
        question:"HTML stand for ",
        answers:[
            {
                text:"Hypertext Markup Langauge",correct:true
            },
            {
                text:"Hypertext Transfer Protocol",correct:false
            },{
                text:"Higher Textual Marking of Links",correct:false
            },{
                text:"Hyper Text Mixer of Links",correct:false
            },
        ]
    },
    {
        question:"What is the smallest header in HTML by default",
        answers:[
            {text:"h1",correct:false},
            {text:"h6",correct:true},
            {text:"h2",correct:false},
            {text:"h4",correct:false},
        ]   
    },
    {
        question:"How to Create an order List in html",
        answers:[
            {text:"ul",correct:false},
            {text:"href",correct:false},
            {text:"b",correct:false},
            {text:"ol",correct:true},
        ] 
       
    },
    {
        question:"What are the types of lists available in HTML?",
        answers:[
            {text:"Ordered,Unordered List",correct:true},
            {text:"Bulleted,Numbered List",correct:false},
            {text:"Named,Unnamed List",correct:false},
            {text:"None of the above",correct:false},
        ]   
    },
    {
        question:"We enclose HTML tags within",
        answers:[
            {text:"{}",correct:false},
            {text:"<>",correct:true},
            {text:"!!",correct:false},
            {text:"[]",correct:false},
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