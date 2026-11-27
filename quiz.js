let questionBook=[
    {
    id : "qa-1",
    question :"what is the full form of DOM ?",
    options:[
        "a)Domain Object Model",
        "b)Digital Object Model",
        "c)Document Object Model",
        "d)None of these"
    ],
    correctAnswer:"c)Document Object Model"
},{
    id:"qa-2",
    question :"what is the full  form of BOM ?",
    options:[
        "a)BootStrap Object model",
        "b)box object model",
        "c)browser object model",
        "d)None of these"
    ],
    correctAnswer:"b)box object model"
},{
    id:"qa-3",
    question:"which Element is used to get the HTML element by using className ",
    options:[
        "a)getElementsByClassName",
        "b)getElementByClassName",
        "c)getElementById",
        "d)None of these"
    ],
    correctAnswer:"a)getElementsByClassName"
},{
     id: "q-4",
        question: "Which event occurs when a user clicks an element?",
        options: [
            "a)mouseover",
            "b)keydown",
            "c)click",
            "d)change"
        ],
        correctAnswer: "c)click"
},{
      id: "q-5",
        question: "Which property is used to change HTML content?",
        options: [
            "a)innerHTML",
            "b)style",
            "c)className",
            "d)value"
        ],
        correctAnswer: "a)innerHTML"
}

];

let questionElement=document.getElementById("question");
let optionElement=document.getElementById("option");
let scoreElement=document.getElementById("score");
let score=0;
let currentQuestion=0;
// console.log(questionElement,optionElement,scoreElement)

function displayQuestion(){
    let {question,options,correctAnswer}=questionBook[currentQuestion]
    // console.log(question,options,correctAnswer);
    questionElement.textContent=question;
    options.map((opt)=>{
        let btn=document.createElement("button");
        btn.textContent=opt;
        btn.setAttribute("class","btn");
        optionElement.append(btn)
        btn.addEventListener("click",() =>{
           if(opt==correctAnswer){
            btn.style.backgroundColor="green";
            btn.style.color="white";

            score+=1;

           }
           else{
            btn.style.backgroundColor="red";

            score-=0.25
           }
           console.log(score);
           scoreElement.innerHTML=`score:${score}/${questionBook.length}`;
           setTimeout(()=>{
              nextQuestion();
           },1000);
           let allbuttons=document.querySelectorAll(".btn");
           allbuttons.forEach((v)=>(v.disabled=true))
        })
    });
}
displayQuestion()

function nextQuestion(){
    currentQuestion++;
    optionElement.innerText="";
    if(currentQuestion == questionBook.length){
        questionElement.innerHTML="Quiz Completed Successfully!!";
        scoreElement.innerHTML=`You Scored ${score} out of ${questionBook.length}`;
        document.getElementById("nextButton").style.display="none"
    }
    else{
        displayQuestion();
    }
}

