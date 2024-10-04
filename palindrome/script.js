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

const word = prompt('Inserisci una parola')

function palindrome(word) {

    let reverse_word = word.split('').reverse().join('')

    if (word === reverse_word) {

        return ('Parola palindroma');

    } else {
        return ('Parola non palindroma');

    }

}

alert(palindrome(word))