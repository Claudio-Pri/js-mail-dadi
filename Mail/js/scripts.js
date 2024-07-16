
//dichiarazione array
const myList = ['ANNA', 'GIORGIO', 'ALESSANDRO', 'CLAUDIO', 'ALESSIO', 'MICHELE', 'GENNARINO'];
console.log('Lista utenti', myList);

//prompt utente trasformato in uppercase per facilitare le comparazione
const myUserName = (prompt('Inserisci il tuo nome:').toUpperCase());
console.log('Username:', myUserName);




for (i = 0; i < myList.length; i++) {

    // console.log('myList[i]', myList[i], typeof myList[i]);
    if (myUserName == myList[i]) {
        console.log('true');

    }
    else {
        console.log('false');

    }



}