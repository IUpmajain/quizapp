let card = document.querySelector('.card')
let questiondata = document.querySelector('#question')
let choicedata= document.querySelector('.choice')
let next = document.querySelector('#Next')
let scorecard = document.querySelector('.scorecard')
let allert = document.querySelector('.allert')
let start = document.querySelector('#Start') 
let container = document.querySelector('.container')
let containerbox = document.querySelector('#box')
let startbox = document.querySelector('.containerfluid1')

let arr = [
    {
        question: `CSS stands for......`,
        Option :["Cascading Style Sheet", "Cascae Source Sheet", "Cascade Style Source", "Carting Style Sheet"],
        answer :"Cascading Style Sheet"
    },

    {
        question: `Which of the following is an empty tag?`,
        Option :["html", "img", "a", "body"],
        answer: "img"
    },

    {
        question: `In how many ways you style your html page?`,
        Option :["2", "3", "1", "non of these"],
        answer: "3"
    },

    {
        question: `The "function" and "var" are knows as...`,
        Option :["Data type", "Declaration statements", "Keywords", "Prototype"],
        answer: "Declaration statements"
    },

    {
        question: `Which of the following is ternary operator?`,
        Option :["?", ";", "/", "+"],
        answer: "?"
    }
];

let quesindex = 0;
let score = 0;
let quizover =false;

const showques =(()=>{
    let quesdetail = arr[quesindex];
    questiondata.innerText = `Q. ${quesdetail.question}`

    choicedata.innerText = ""
    for(let i=0; i<quesdetail.Option.length; i++){
        const choice = quesdetail.Option[i]
        const choicediv = document.createElement('button')
        choicediv.innerText = choice
        choicediv.classList.add('button')
        choicedata.appendChild(choicediv)

        choicediv.addEventListener('click', ()=>{
            choicediv.classList.toggle('check')
        })
    }
})

const checkans = (()=>{
    const choicesect = document.querySelector('.button.check');
    if(choicesect.innerText === arr[quesindex].answer){
        displayalert("Correct answer!!!")
        score++;
    }
    else{
        displayalert(`wrong answer!!! ${arr[quesindex].answer} is the correct answer!!`)
    }
    quesindex++;
    if(quesindex < arr.length){
        
        showques();
    }
    else{
        scoreview();
        quizover = true;
    }
})

const scoreview = (()=>{
    questiondata.innerText = "";
    choicedata.innerText = "";
    scorecard.innerText = `You scored ${score} out of ${arr.length}`
    next.innerText = "Play Again"
    
})

const displayalert =((msg)=>{
    allert.style.display = "block"
    allert.innerText=msg;
    setTimeout(()=>{
        allert.style.display = "none";
    },2000)
})

start.addEventListener('click', ()=>{
    start.style.display = "none"
    container.style.display = "block"
    containerbox.style.display = "flex"
    containerbox.style.text="center"
    startbox.style.display="none"
})

showques();
next.addEventListener('click', ()=>{
  const selectedchoice = document.querySelector('.button.check');
  if(!selectedchoice && next.innerText==='Next'){
    displayalert("select your  answer!!!");
    return;
  }
  if(quizover){
    next.innerText = 'Next';
    scorecard.innerText = "";
    quesindex=0;
    showques();
    quizover =false;
    score=0;
  }
  else{
    checkans();
  }
   
})
