/**
 * given a sentence with mixed cases (upper and lower)
 * write a function that reverses the case of each letter
 * eg: "i Am A goOd BoY"
 * output: "I aM a GOoD bOy"
 * process: loop through each character 
 * if character is lower change to upper
 * if character is upper change to lower
 */
const changeCase = (sentence) => {
    let result = "";
    for (let index = 0; index < sentence.length; index++) {
        const character = sentence.charAt(index);
        if (character === character.toLowerCase()) {
            result += character.toUpperCase();
        } else if (character === character.toUpperCase()) {
            result += character.toLowerCase();
        }
    }
    return `\ninput is: ${sentence};\noutput is: ${result}`;
}

// console.log(changeCase("i Am A goOd BoY"));
//expecting: "I aM a GOoD bOy";

/**
 * Given a sentence return an array of words that start with uppercase (capital letter)
 * eg: "thanks For Coming"
 * output: ["For", "Coming"]
 * process: split sentence into words by using space as delimiter
 * check the charAt(0) if it is uppercase
 */

const firstUpperCase = (sentence) => {
    const result = [];
    const listOfWords = sentence.split(" "); //an array of all the words present in sentence
    listOfWords.map((word) => {
        if (word.charAt(0) === word.charAt(0).toUpperCase()) result.push(word);
    });
    return result;
}

// console.log(firstUpperCase("Thanks for Coming"));

/**
 * Given a sentence return an array of words that ends with "ING"
 * eg: "my hobbies are Playing, Singing, Dancing, Sleeping"
 * output: ["Playing", "Singing", "Dancing", "Sleeping"]
 * process: split sentence into words by using space as delimiter
 * check if word include "ING" or if word include "ing"
 */

const wordsEndingWithIng = (sentence) => {
    const result = [];
    const listOfWords =  sentence.split(" "); //an array of all the words present in sentence
    listOfWords.map((word) => {
        // if  (word.include("ING") || word.include("ing")) result.push(word);
        if (word.toUpperCase().includes("ING")) result.push(word);
    });
    return result;
}

// console.log(wordsEndingWithIng("my hobbies are Playing, Singing, Dancing, Sleeping"));

/**
 * Given a sentence return an array of palindromic string
 * eg: "Madam Ayo who stays in oyo was in a bus to lagos when her son sold the racecar"
 * output: ["madam", "oyo", "a", "racecar"]
 * process: split the sentence into words....
 * check if each words matches the reversed version
 * push into result array if true
 * - how to reverse string or how to reverse array
 *      *split each word to a character
 *      *apply reverse method
 *      *apply join method to turn it back to a string
 */

const palindromicString = (sentence) => {
    const result = [];
    const listOfWords = sentence.split(" ");
    listOfWords.map((word) => {
        if (word.toLowerCase() === word.split("").reverse().join("").toLowerCase()) result.push(word);
    });
    return result;
}

console.log(palindromicString("Madam Ayo who stays in oyo was in a bus to lagos when her son sold the racecar"));