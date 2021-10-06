// Initial data
let currentQuestion = 0;
let correctAnswer = 0;

// Functions
showQuestion()

function showQuestion(){
    if(questions[currentQuestion]) {

        let q = questions[currentQuestion];
        let pct= Math.floor((currentQuestion / questions.length) *100)


        document.querySelector('.progress--bar').style.width= `${pct}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = "block";
    
        document.querySelector('.question').innerHTML = q.question;

        document.querySelector(".options").innerHTML = '';

    
        let optionsHtml = ''

        for(let i in q.options){
           optionsHtml+= `<div data-op="${i}" class ="option"> <span>${parseInt(i)+1 }</span>${q.options[i]}</div>`;

        }
    
         document.querySelector(".options").innerHTML=optionsHtml

         document.querySelectorAll('.options .option').forEach(item=> {
             item.addEventListener('click',optionClickEvent)
         })
    }else{
        finishQuiz()
        
    }
}

function finishQuiz(){
    document.querySelector('.progress--bar').style.width= `100%`;
    document.querySelector('.questionArea').style.display = "none";
    document.querySelector('.scoreArea').style.display= "block"

    let pctAcertos = (correctAnswer / questions.length) *100;

    if(pctAcertos <=50){
        document.querySelector(".scoreText1").innerHTML= "Xiii Não foi muito bem"
        document.querySelector('.scorePct').innerHTML = `<div style="color:red;">${Number(pctAcertos)}%</div>`
    }else if(pctAcertos >=60 && pctAcertos <=80){
        document.querySelector(".scoreText1").innerHTML= "Foi bom, mas pode melhorar"
        document.querySelector('.scorePct').innerHTML = `<div style="color:blue;">${Number(pctAcertos)}%</div>`
    }else{
        document.querySelector(".scoreText1").innerHTML= "Ótimo, você sabe mesmo sobre JS"
        document.querySelector('.scorePct').innerHTML = `<div style="color:green;">${Number(pctAcertos)}%</div>`
    }

   
    document.querySelector(".scoreText2").innerHTML =`Você respondeu ${questions.length} questões e acertou ${correctAnswer}.`
}

function optionClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    if (questions[currentQuestion].answer=== clickedOption){
        correctAnswer++;
    }

    currentQuestion++ 
    showQuestion()
}


document.querySelector('.botao').addEventListener("click", ()=>{
    correctAnswer = 0;
    currentQuestion = 0;
    showQuestion()
})