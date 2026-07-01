const questions=[

{
question:"HTML stands for?",
answers:[
{text:"Hyper Text Markup Language",correct:true},
{text:"High Text Machine Language",correct:false},
{text:"Hyper Tool Multi Language",correct:false},
{text:"Home Text Markup Language",correct:false}
]
},

{
question:"Which language is used for styling webpages?",
answers:[
{text:"HTML",correct:false},
{text:"CSS",correct:true},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},

{
question:"Which is used for webpage interaction?",
answers:[
{text:"JavaScript",correct:true},
{text:"C++",correct:false},
{text:"SQL",correct:false},
{text:"Bootstrap",correct:false}
]
}

];

let currentQuestion=0;
let score=0;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");
const result=document.getElementById("result");

function showQuestion(){

resetState();

let current=questions[currentQuestion];

question.innerHTML=current.question;

current.answers.forEach(answer=>{

const button=document.createElement("button");

button.innerHTML=answer.text;

button.classList.add("btn");

answers.appendChild(button);

button.addEventListener("click",()=>selectAnswer(answer.correct,button));

});

}

function resetState(){

nextBtn.style.display="none";

answers.innerHTML="";

}

function selectAnswer(correct,button){

if(correct){

button.classList.add("correct");

score++;

}

else{

button.classList.add("wrong");

}

nextBtn.style.display="block";

}

nextBtn.addEventListener("click",()=>{

currentQuestion++;

if(currentQuestion<questions.length){

showQuestion();

}
else{

showScore();

}

});

function showScore(){

question.innerHTML="Quiz Finished";

answers.innerHTML="";

result.innerHTML="Your Score: "+score+"/"+questions.length;

nextBtn.style.display="none";

}

showQuestion();