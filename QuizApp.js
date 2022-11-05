let quizData = [{
    Question: 'What is the most used programming language ?',
    a: ' Python',
    b: 'Javascript',
    c: 'Html',
    d: ' C ++',
    correct: 'b'
},

   { Question: 'Who is the author of Harry Potter ?',
    a: 'J K Rowling',
    b: 'Brian Tracy',
    c: 'Jim Rohn',
    d: 'James Clear',
    correct: 'a'
},
 {   Question: 'Who is the greatest player of all time ?',
    a:  'Maradona',
    b:  'Pele',
    c:  'Iniesta',
    d:  'Lionel Messi',

    correct: 'd'
},
{
    Question: 'What country will host the 2022 fifa world cup ? ',
    a: 'Russia',
    b: 'Brazil',
    c: 'Qatar',
    d: 'South Africa',
    correct: 'c'
},
{
    Question: 'Who is the first president of Ghana ?',
    a: 'J J Rawlings',
    b: 'J A Kufour',
    c: 'Dr Kwame Nkrumah',
    d: 'J E A Mills',
    correct: 'c'
}
]


let h2 = document.querySelector('h2')
let a_text = document.querySelector('#a_text')
let b_text = document.querySelector('#b_text')
let c_text = document.querySelector('#c_text')
let d_text = document.querySelector('#d_text')
let choices = document.querySelectorAll('.answers')
let container = document.querySelector('.quiz_container')

let current = 0;
let answer = undefined
let score = 0;

loading()
function loading(){
    deSelect()
    h2.innerText=quizData[current].Question
    a_text.innerText=quizData[current].a
    b_text.innerText=quizData[current].b
    c_text.innerText=quizData[current].c
    d_text.innerText=quizData[current].d
    
}

function nextQxn(){
  
  if(choose()){
    if(choose() === quizData[current].correct){

        score ++
    }

    current++
    if(current < quizData.length){
        
        loading()
    }
    else{
        container.innerHTML=
        `
         <h2>You Scored ${score}/${quizData.length}</h2>
         <button onclick='location.reload()'>Reload</button>   
        `
    }
  }
}
function deSelect(){
    choices.forEach((choice) =>{
        choice.checked = false
    })
}

function choose(){

    choices.forEach((choice) => {
        if(choice.checked){
            answer = choice.id
        }
        
    } )
    return answer
}