console.log('linked')


/* Strumenti
- Function
- let
- split
- reverse
- join
- if / else
- prompt
- alert
- return */

function palindrome (word){


let reverse_word = word.split('').reverse().join('')

    if (word === reverse_word) {

        return('Parola palindroma');
 


    } else {
        return('Parola non palindroma');
        
    }

}

palindrome(prompt('Inserisci una parola'))