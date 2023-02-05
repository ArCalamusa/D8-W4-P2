function countdown(tempo) {
    
var div = document.getElementById('countdown');
var tmp = tempo.split(":");

var oggi = new Date();
    oggi.setHours(tmp[0]);
    oggi.setMinutes(tmp[1]);
    oggi.setSeconds(tmp[2]);

var hour = oggi.getHours();
var minu = oggi.getMinutes();
var seco = oggi.getSeconds();

div.innerHTML = (hour < 10? "0": "") 
+ hour + ":" + (minu < 10? "0": "") 
+ minu + ":" + (seco < 10? "0": "") 
+ seco;

//ciclo for
if (oggi.getHours() == 0 && oggi.getMinutes() == 0 && oggi.getSeconds() == 0) {
    alert("Contdown terminato!");
    //interazione con utente
} else {
    oggi.setTime(oggi.getTime() - 1000);
    var newt = oggi.getHours() + ":" + oggi.getMinutes() + ":" + oggi.getSeconds();
    setTimeout(function () {
    countdown(newt);
    }, 1000);
}
}
    
var ans = new Array;
var done = new Array;
var stat = new Array;
var score = 0;
var count = 0;

//risposte corrette
ans[1] = "a";
ans[2] = "b";
ans[3] = "c";
ans[4] = "d";
ans[5] = "a";
ans[6] = "b";
ans[7] = "c";
ans[8] = "d";
ans[9] = "a";
ans[10] = "b";

//se si effettua tentativo di rispondere più volte alla stessa domanda
function Engine( question, answer ) {
if ( answer != ans[ question ] ) {
if ( ! done[ question ] ) {
done[ question ] = -1; stat[ question ] = false; count++;
} else {
    alert( "Hai gia risposto a questa domanda!" );
    //interazione con utente
}
} else {
if ( ! done[ question ] ) {
done[ question ] = -1;
score++;
stat[ question ] = true;
count++;
} else { 
    alert( "Hai gia risposto a questa domanda!" );
    //interazione con utente
}
}
    
if ( count == ans.length ) { NextLevel() }
}
    
function NextLevel () {
    
var fine = new Date();
var differenza = ( fine.getTime() - window.inizio.getTime()) / 1000;
var mm = parseInt ( differenza / 60 );
var hh = parseInt ( mm / 60 );
    
var htm = "Hai completato il quiz in " + hh + " ore, " + ( mm - ( hh * 60 ) ) + " minuti e " + ( differenza - ( mm * 60 ) ) + " secondi." + "<br>" + "Il tuo punteggio &egrave; di " + score + " su " + (ans.length-1) + ":" + "<br><br>";
    
for ( var j = 1; j < stat.length; j++ ) {
htm += "Risposta " + j + ": <span style='color:" + ( stat[ j ] ? "green'>esatta" : "red'>errata" ) + "</span><br>";
}
    
document.getElementById( 'risultato' ).innerHTML = htm;
//per prelevare rislutato
}

var verticalpos = "frombottom"

function JSFX_FloatTopDiv() {
    var startX = 250,
        startY = 250;
    var ns = (navigator.appName.indexOf("Netscape") != -1);
    var d = document;
    function ml(id) {
        var el = d.getElementById
            ? d.getElementById(id)
            : d.all
                ? d.all[id]
                : d.layers[id];
        if (d.layers) 
            el.style = el;
        el.sP = function (x, y) {
            this.style.left = x;
            this.style.top = y;
        };
        el.x = startX;
        if (verticalpos == "fromtop") 
            el.y = startY;
        else {
            el.y = ns
                ? pageYOffset + innerHeight
                : document.body.scrollTop + document.body.clientHeight;
            el.y -= startY;
        }
        return el;
    }
window.stayTopLeft = function () {
    if (verticalpos == "fromtop") {
        var pY = ns
            ? pageYOffset
            : document.body.scrollTop;
        ftlObj.y += (pY + startY - ftlObj.y) / 8;
    } else {
        var pY = ns
            ? pageYOffset + innerHeight
            : document.body.scrollTop + document.body.clientHeight;
        ftlObj.y += (pY - startY - ftlObj.y) / 8;
    }
    ftlObj.sP(ftlObj.x, ftlObj.y);
    setTimeout("stayTopLeft()", 10);
}
ftlObj = ml("divStayTopLeft");
stayTopLeft();
}

//per ricominciare il quiz
let startAgain = document.querySelector("#startAgain");

startAgain.addEventListener("click", () => { //funzione freccia trovata sul web, Arrow function: eliminano la necessità di digitare la parola "function"
    window.location.reload();
});