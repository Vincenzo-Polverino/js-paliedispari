console.log('linked')

let choice = prompt("Scegli Pari o Dispari")


let user_roll = Number(prompt('Scegli un numero da 1 a 5'))

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

} else if ((user_roll + cpu_roll) % 2 === 0 && choice === ('dispari')){
    console.log('hai perso');
    console.log(user_roll);
    console.log(cpu_roll);
    console.log(choice);
    
}else if ((user_roll + cpu_roll) % 2 !== 0 && choice === ('pari')){
    console.log('hai perso');
    console.log(user_roll);
    console.log(cpu_roll);
    console.log(choice);


}else{
    console.log('Valore non valido');
    
}