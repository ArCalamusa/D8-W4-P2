//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
        
var x = "John"
var y = "Doe"
console.log(x, "<>", y);

//22) Crea un oggetto con le seguenti proprietà: name, surname, email

    let persona = {
    name: "Mario",
    surname: "rossi",
    email: "mario.rossi@email.com"
};

//23) Cancella la proprietà email dall'oggetto appena creato

        delete persona.email;
        //delete persona["email"]; 
        //può andar bene anche 'delete person[2];' in quanto partendo da 0 email è il 3 (quindi il 2) valore contenuto nell'oggetto 

//24) Crea un array contenente 10 stringhe

const calciatori = [
    "ronaldo",
    "messi",
    "maradona",
    "pele",
    "baggio",
    "zanetti",
    "maldini",
    "gerrard",
    "beckham",
    "cruijff"
];

//25) Mostra in console ogni stringa del precedente array

calciatori.forEach(element => console.log(element));

//26) Crea un array contenente 100 numeri random

let randomArr = [];
for (let i = 1; i <= 100; i++) {
    let num = Math.ceil(Math.random() * 100);
    randomArr.push(num);
}
console.log(randomArr);

//27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato

let maxMin = function () {
    let max = randomArr[0];
    for (let i = 1; i < randomArr.length; i++) {
        if (randomArr[i] > max) {
            max = randomArr[i];
        }
    }
    let min = randomArr[0];
    for (let i = 1; i < randomArr.length; i++) {
        if (randomArr[i] < min) {
            min = randomArr[i];
        }
    }
    console.log("Valore massimo presente nell'array: " + max);
    console.log("Valore minimo presente nell'array: " + min);
}

maxMin(); //per chiamare la funzione

//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random

let generaArrayDiArray = function (numeroElementi) {
    let multArr = [];
    for (let i = 1; i <= numeroElementi; i++) {
        let child = [];
        for (let y = 1; y <= 10; y++) {
            let num = Math.ceil(Math.random() * 100);
            child.push(num);
        }
        multArr.push(child);
    }
    return multArr;
}
console.log(generaArrayDiArray(3));
//non ho capito benissimo la domanda, ma se ho interpretato bene voleva dire creare un array di array, quindi almeno 2 (1 padre e 1 figlio???) nel quale ogni figlio ha 10 numeri casuali

//29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi

function maxArr(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    } else if (arr1.length < arr2.length) {
        return arr2;
    }
}
console.log(maxArr([10, 23, 45], [1, 5, 2, 8, 10, 12]));

//30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore

//ESERCIZI SUL DOM

//31) Seleziona l'elemento con id "container" nella pagina

document.getElementById("container");


//32) Seleziona tutti gli elementi di tipo <td> nella pagina

document.getElementsByTagName("td");

//33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina

for (let colonna of colonne) {
    console.log(colonna.innerText);
}

//34) Scrivi una funzione per cambiare il titolo della pagina

function changeTitle(title) {
    let titleContainers = document.getElementsByTagName("title");
    titleContainers[0].innerText = title;
}

//35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina

function addTableRow() {
    let tables = document.getElementsByTagName("table");
    rowNumber = tables[0]
        .getElementsByTagName("tr")
        .length + 1;
    let newRow = document.createElement("tr");
    for (let i = 1; i <= 5; i++) {
        let newCol = document.createElement("td");
        newCol.innerText = rowNumber + "" + i;
        newRow.appendChild(newCol);
    }
    tables[0].appendChild(newRow);
}


//36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
//37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina
        
//38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi

window.onload = onLoadFunction;
    function onLoadFunction() {
    
}
console.log("Page loaded");

//39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina
//40) Scrivi una funzione per svuotare una lista nella pagina

function cancList(list) {
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}

//ESERCIZI EXTRA
//41) Aggiungi un event listener in modo che compaia un alert quando il cursore passa sopra un link; l'alert deve mostrare la sua proprietà href

    let links = document.getElementsByTagName("a");
        for(let link of links) {
        link.addEventListener("mouseOver", showHref);
    }

    function showHref(event) {
        alert(event.target.getAttribute("href"));
    }

//42) Crea un bottone che una volta cliccato nasconde ogni immagine nella pagina

        /*<button onclick='document.getElementById("immagine").style.visibility = "visible"'>Visibile</button> 
        <button onclick='document.getElementById("immagine").style.visibility = "hidden"'>Nascosto</button>*/ 

//43) Crea un bottone che una volta cliccato nasconde o mostra la tabella nella pagina

        /*<button onclick='document.getElementById("table").style.visibility = "visible"'>Visibile</button> 
        <button onclick='document.getElementById("table").style.visibility = "hidden"'>Nascosto</button>*/

//44) Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle della tabella (se il contenuto è un numero)

function tdSum() {
    let cells = document.getElementsByTagName("td");
    let sum = 0;
    for (let cell of cells) {
        let cellContent = cell.innerText;
        if (parseFloat(cellContent) || parseInt(cellContent)) {
            sum += Number(cellContent);
        }
    }
    return sum;
}

console.log("la somma dei numeri in tabella: " + tdSum());

//45) Cancella l'ultima lettera dal titolo della pagina ogni volta che l'utente ci clicca sopra

let pTitle = document.getElementsByTagName("h1")[0];
pTitle.addEventListener("click", hideLastLetter);

function hideLastLetter(event) {
    let title = event.target.innerText;
    let newTitle = title.substring(0, title.length - 1);
    event.target.innerText = newTitle;
}

//46) Aggiungi un event listener in modo che cliccando un <td> nella pagina, questo cambi colore di sfondo

let columns = document.getElementsByTagName("td");
for (let col of columns) {
    col.addEventListener("click", changeBackground);
}

function changeBackground(event) {
    event.target.style.backgroundColor = "green";
}

//47) Aggiungi un bottone che una volta cliccato elimini un <td> a caso nella tabella
//48) Aggiungi automaticamente un bordo rosa ad una cella della tabella quando il cursore ci passa sopra
//49) Scrivi una funzione per creare una tabella con 4 righe e 3 colonne e aggiungerla alla fine della pagina

function createTable(rows, cols) {
    let table = document.createElement("table");
    table.style.marginTop = "10px";
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (let i = 1; i <= rows; i++) {
        let row = document.createElement("tr");
        for (let j = 1; j <= cols; j++) {
            let col = document.createElement("td");
            col.innerText = i + "" + j;
            row.appendChild(col);
        }
        tbody.appendChild(row);
    }
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(table);
}

createTable(4, 3);


//50) Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina -->
function removeLastTable() {
    let body = document.getElementsByTagName("body")[0];
    tables = body.getElementsByTagName("table");
    body.removeChild(tables[tables.length - 1]);
}
