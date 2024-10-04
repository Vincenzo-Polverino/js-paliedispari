console.log('linked')



const choice = prompt("Scegli Pari o Dispari")
const user_roll = Number(prompt('Scegli un numero da 1 a 5'))

function dice_game(choice, user_roll) {
    choice = choice.toLowerCase();

    let cpu_roll = Math.floor((Math.random() * 5) + 1);

    if ((user_roll + cpu_roll) % 2 === 0 && choice === ('pari')) {
        console.log('hai vinto!');
        console.log(user_roll);
        console.log(cpu_roll);
        console.log(choice);

    } else if
        ((user_roll + cpu_roll) % 2 !== 0 && choice === ('dispari')) {
        console.log('hai vinto!');
        console.log(user_roll);
        console.log(cpu_roll);
        console.log(choice);

    } else if ((user_roll + cpu_roll) % 2 === 0 && choice === ('dispari')) {
        console.log('hai perso');
        console.log(user_roll);
        console.log(cpu_roll);
        console.log(choice);

    } else if ((user_roll + cpu_roll) % 2 !== 0 && choice === ('pari')) {
        console.log('hai perso');
        console.log(user_roll);
        console.log(cpu_roll);
        console.log(choice);

    } else {
        console.log('Valore non valido');

    }
}

dice_game(choice, user_roll)