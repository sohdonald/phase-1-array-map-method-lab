const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map((placer) => {
//   return tutorials.assign(function(lowerCase) {
//     if (lowerCase.startsWith(placer.toLowerCase())) {
//       return placer.startsWith().toUpperCase();
//     }
//   });
// });

const numbers = [
  1, 2, 3, 4, 5, 6
]

const newNumbers = numbers.map(function(value) {
  return value + 2;
});
console.log(newNumbers);

function titleCased() {
  const newTutorials = tutorials.map(function(title) {
    // title is a string
    // we want to capitalize each word in title
    //if title is an array of words, what method could we use to capitalize each word
    // toUpperCase is used, we can use the map method
    // split it into individual array of words and then use map method
    const newArray = title.split(' ');
    const bigLetter = newArray.map(function(word) {
        const firstLetter = word.charAt(0).toUpperCase();
        const restWord = word.slice(1);
        return firstLetter + restWord;
    });
    //console.log (bigLetter.join(' '));
    return bigLetter.join(' ');
  });
  console.log(newTutorials);
  return newTutorials;
}

titleCased();