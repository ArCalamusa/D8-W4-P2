//array di domande
const questions = [
    {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What does CPU stand for?',
        correct_answer: 'Central Processing Unit',
        incorrect_answers: ['Central Process Unit', 'Computer Personal Unit', 'Central Processor Unit']
        //sottoArray
    }, {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'easy',
        question: 'In the programming language Java, which of these keywords would you put on a v' +
            'ariable to make sure it doesn&#039;t get modified?',
        correct_answer: 'Final',
        incorrect_answers: ['Static', 'Private', 'Public']
    }, {
        category: 'Science: Computers',
        type: 'boolean',
        difficulty: 'easy',
        question: 'The logo for Snapchat is a Bell.',
        correct_answer: 'False',
        incorrect_answers: ['True']
    }, {
        category: 'Science: Computers',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Pointers were not used in the original C programming language; they were added' +
            ' later on in C++.',
        correct_answer: 'False',
        incorrect_answers: ['True']
    }, {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What is the most preferred image format used for logos in the Wikimedia databa' +
            'se?',
        correct_answer: '.svg',
        incorrect_answers: ['.png', '.jpeg', '.gif']
    }, {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'easy',
        question: 'In web design, what does CSS stand for?',
        correct_answer: 'Cascading Style Sheet',
        incorrect_answers: ['Counter Strike: Source', 'Corrective Style Sheet', 'Computer Style Sheet']
    }, {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What is the code name for the mobile operating system Android 7.0?',
        correct_answer: 'Nougat',
        incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow']
    }, {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'easy',
        question: 'On Twitter, what is the character limit for a Tweet?',
        correct_answer: '140',
        incorrect_answers: ['120', '160', '100']
    }, {
        category: 'Science: Computers',
        type: 'boolean',
        difficulty: 'easy',
        question: 'Linux was first created as an alternative to Windows XP.',
        correct_answer: 'False',
        incorrect_answers: ['True']
    }, {
        category: 'Science: Computers',
        type: 'multiple',
        difficulty: 'easy',
        question: 'Which programming language shares its name with an island in Indonesia?',
        correct_answer: 'Java',
        incorrect_answers: ['Python', 'C', 'Jakarta']
    }
]

window.onload = function () {
    //assegnamo la proprietà onload alla funzione () dell'oggetto finestra (window)
    let mainQuestion = document.getElementById('mainContent')
    //let quest = questions.length; diventa superflua perchè dichiariamo la questions.lenght nel ciclo for
    for (let i = 0; i < questions.length; i++) {
        //accetta 3 parametri: dichiara variabile, condizione e incremento o decremento
        // let i=0 inizializza la variabile 
        const question = questions[i]//variabile sola lettura
        //console.log(question); //elemento indice [i] di questions
        //funzione che srve per stampare nella console del browser
        let divQuestion = document.createElement('div'); //crea div nell'html non visibile prima di appenderli al dom
        divQuestion.classList.add('questionContainer');
        let labelQuestion = document.createElement('label');
        labelQuestion.classList.add('questionTitle');
        //let inputQuestion = document.createElement('input'); 
        //creati 3 elementi separati occorre definire gerarchia input e label sono dentro al div
        //labelQuestion.classList.add('answer');
        labelQuestion.innerText = question.question;
        //si sta dicedo al nodo di insere  
        //divQuestion.appendChild(labelQuestion); //tra parentesi tonde perchè è una funzione, variabile non tra apici
        let invio = document.createElement('br');
        divQuestion.append(labelQuestion, invio);
        
        let completeAnswer = []; //vuoto
        completeAnswer.push(question.correct_answer);//risposte corrette
        for (let answer of question.incorrect_answers) { //per ogni val di incorrect il valore di array
            completeAnswer.push(answer); //risposte errate
        }
        //console.log(completeAnswer);
        //qui potrebbe andarci il Math.random per dare una casualità all'ordine delle risposte

        for (let j = 0; j < completeAnswer.length; j++) { //conta le risposte
            let inputAnswerRadio = document.createElement('input');//name id type
            inputAnswerRadio.name = 'question' + i; //i variabile
            inputAnswerRadio.type = 'radio'; //tipologia input
            inputAnswerRadio.id = 'question' + i + j; //id diverso per ogni domanda/risp univoco
            inputAnswerRadio.value = completeAnswer[j];
            inputAnswerRadio.required = true;

            let answerLabel = document.createElement('label');
            answerLabel.innerText = completeAnswer[j];
            answerLabel.setAttribute('for', inputAnswerRadio.id);
            //il for si usa per attribuirlo alla label
            let invioElemento = document.createElement('br');
            divQuestion.appendChild(invioElemento);
            divQuestion.append(inputAnswerRadio, answerLabel);
            //metodo alternativo per "appendere" più elementi
        }

        let hrElemento = document.createElement('hr');
        divQuestion.appendChild(hrElemento);
        mainQuestion.appendChild(divQuestion);
    }
}

function calcolaRisultato() {
    let risposte = [];
    let i = 0; //inizializzo i
    while (questionRadio = document.getElementsByName('question' + i)) {
        //recupera dal dom tutti gli elementi con lo stesso name; restituisce un array di elementi 4 multipla e 2 boolean
        if (questionRadio.length == 0) {
            break;
        }
        //console.log(questionRadio);
        for (let k = 0; k < questionRadio.length; k++) {
            if (questionRadio[k].checked) {
                risposte.push(questionRadio[k].value);
                //inserisco la risposta dell'utente nell'array
            }
        }
        i++;
    }
    //console.log(risposte);
    let contatore = 0;
    for (let i = 0; i < risposte.length; i++) {
        if (risposte[i] == questions[i].correct_answer) {
            contatore++;
        }
    }
    //console.log(contatore);
    if (risposte.length == questions.length) { //per risultato devono essere inviate tutte le risposte
        let punteggio = document.getElementById('punteggio');
        punteggio.innerText = contatore;
        document.getElementById('output').style.display = 'inherit'; //mostra il contatore all'invio del quiz non si salva in variabile
        //document.getElementById('invio').disabled = true; //disabilita invio
        abilitaDisabilitaRadio();
    }
}
function abilitaDisabilitaRadio(disabilita = true) {
    let i = 0;
    document.getElementById('invio').disabled = disabilita; //la funzione disabilita invio
    while (questionRadio = document.getElementsByName('question' + i)) {
        if (questionRadio.length == 0) {
            break;
        }
        for (let k = 0; k < questionRadio.length; k++) {
            questionRadio[k].disabled = disabilita;
        }
        i++; //incrementa l'indice nel while
    }
}

function resetQuiz() {
    document.getElementById('output').style.display = 'none';
    abilitaDisabilitaRadio(false); //riabilita i bottoni
    //document.getElementById('invio').disabled = false;
    let i = 0;
    while (questionRadio = document.getElementsByName('question' + i)) {
        if (questionRadio.length == 0) {
            break;
        }
        for (let k = 0; k < questionRadio.length; k++) {
            questionRadio[k].checked = false;
        }
        i++; //incrementa l'indice nel while
    }
}
