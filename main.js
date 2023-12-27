const queDB =[
    {
        question: " Q1: what is the full form of html?",
        a:"Hello To My Land",
        b:"Markup language",
        c:"Hypertext markup language",
        d:"Hyper language",
        ans: "ans3"
    },
    {
        question: " Q2: what is the full form of CSS?",
        a:"Cascading Style Sheet",
        b:"Cascading Style Sheep",
        c:"Hypertext markup language",
        d:"Cascading Style",
        ans: "ans1"

    },
    {
        question: " Q3: what is the full form of HTTP?",
        a:"Cascading Style Sheet",
        b:"Cascading Style Sheep",
        c:"Hypertext Transfer Protocol",
        d:"Cascading Style",
        ans: "ans3"
    } 
];

const que = document.querySelector('.que');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');
let queCount = 0;
let score = 0;

const loadquestion= () =>{
    const questionlist =queDB[queCount]; // queDB[0] => first question.
    que.innerHTML = questionlist.question; //queDB[queCount].question;

    option1.innerHTML = questionlist.a;  // queDB[0].a => first option
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}

loadquestion();

const getCheckedAnswer=()=>{
    let answer;
    answers.forEach((currentElement)=>{  //select all options using class answer. id 35  
        if(currentElement.checked){
            answer= currentElement.id;
        }
    });
    return answer;
}
//console.log(answer);

const uncheckedALL =() =>{
    answers.forEach((currentElement) => currentElement.checked = false);       
}

submit.addEventListener('click', ()=> {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer)

    if(checkedAnswer === queDB[queCount].ans){
        score++; 
    }

queCount++;        

uncheckedALL();

 if(queCount< queDB.length){
     loadquestion();
 }
 else{

    showscore.innerHTML = `
    <h3> You scored :  ${score}/${queDB.length} </h3>
    <button class="btn" onclick="location.reload()"> PLAY AGAIN</button>
    `;

    showscore.classList.remove('showarea');
    }
});



























