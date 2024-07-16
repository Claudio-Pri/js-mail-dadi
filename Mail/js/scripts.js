
// Dichiarazione array
const myList = ['ANNA', 'GIORGIO', 'ALESSANDRO', 'CLAUDIO', 'ALESSIO', 'MICHELE', 'GENNARINO'];
console.log('Lista utenti:', myList);

// Prompt utente trasformato in uppercase per facilitare la comparazione
const myUserName = prompt('Inserisci il tuo nome:').toUpperCase();
console.log('Username:', myUserName);

let access = false;

// Controllo se il nome utente è nella lista
for (let i = 0; i < myList.length; i++) {
    // console.log('myList[i]', myList[i], typeof myList[i]);
    if (myUserName === myList[i]) {
        access = true;

    }
}

if (access) {
    console.log('Access Granted');
}

else {
    console.log('Access Denied');
}

