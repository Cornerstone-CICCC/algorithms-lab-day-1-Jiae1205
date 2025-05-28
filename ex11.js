// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  const words = text.split(' ')
  const reversed = words.reverse()
  const combineed = reversed.join(' ')
  return combineed
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'
