// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (result[item]) {
      result[item] += 1
    } else {
      result[item] = 1
    }
  }
  return result
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }