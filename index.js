console.log('Im ready!');

// Iteration 1: Names and Inputs

let hacker1 = 'Tobias';
console.log('The drivers name is ' + hacker1);

let hacker2 = 'Sebastian';
console.log('The navigators name is ' + hacker2);

// Interation 2: Conditionals

if (hacker1.length == hacker2.length) {
  console.log('Wow you both have equally long names, ' + hacker1.length + ' characters!');
} else if (hacker1.length > hacker2.length) {
  console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters.');
} else {
  console.log('It seems that the navigator has the longest name, it has ' + hacker2.length + ' characters!');
}

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters

let newHacker1 = '';

for (let i= 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase() + ' ';
}

console.log(newHacker1);

// 3.2 Print all the characters of the navigator's name in reverse order

let reverseHacker2 = '';

for (let i = hacker2.length -1; i >= 0; i--) {
  reverseHacker2 += hacker2[i];
}

console.log(reverseHacker2);

// 3.3 Depending on the lexicographic order of the strings

const names = [hacker1, hacker2];
console.log(names.sort());

if (names.sort()[0] == hacker1) {
  console.log('The drivers name goes first.')
}else if (names.sort()[0] == hacker2) {
  console.log('Yo, the navigator goes first, definitely.')
} else {
  console.log('What?! You both have the same name?')
}

/* 

    BONUS 1

*/

let longText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius magni, corrupti voluptatibus delectus, rerum odit fuga distinctio nisi exercitationem deleniti, id aut est repudiandae fugiat. Aut eum nam sapiente velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero voluptas error earum quis? Voluptates, maiores odio blanditiis illum debitis quaerat veritatis magnam reprehenderit! Eaque tenetur cupiditate aperiam aliquam repudiandae mollitia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est explicabo vel soluta iure? Id perspiciatis vero nemo error, quo dolorum enim quod quos obcaecati. Aliquid saepe totam recusandae repellendus nostrum.'

let countWord = 0;

// function for how many words are in the string longText
function wordCount(str) {
  return str.split(' ').length;
}

function wordCount2(str) {
  return str.split(' ');
}

console.log(wordCount(longText));

// How many times does the word "et" appear
let numberOfWords = wordCount(longText);
for (i = 0; i < numberOfWords; i++) {
  if (wordCount2(longText)[i] == 'et') {
    countWord += 1;
  }
}

console.log(countWord);

/* 

    BONUS 2

*/

let phraseToCheck = 'race car';
let reversePhraseToCheck = '';

for (let i = phraseToCheck.length -1; i >= 0; i--) {
  reversePhraseToCheck += phraseToCheck[i];
}

console.log(reversePhraseToCheck.replace(" ", ""));

if (phraseToCheck.replace(" ", "") == reversePhraseToCheck.replace(" ", "")) {
  console.log('This is a Palindrome.');
} else {
  console.log('NOT a palindrome.')
}