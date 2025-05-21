function wordCounter(text) {
  // Convert the input text to lowercase to make the word counting case-insensitive
  const lowerText = text.toLowerCase();
  
  // Initialize an empty object to store the word frequencies
  const wordMap = {};
  
  // Split the text into words using any sequence of whitespace characters as a delimiter
  const words = lowerText.split(/\s+/);

  // Loop through each word in the array
  for (const word of words) {
    // If the word already exists in wordMap, increment its count by 1
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      // If the word does not exist in wordMap, initialize its count to 1
      wordMap[word] = 1;
    }
  }

  // Return the object containing the word frequencies
  return wordMap;
}

// Example text to be processed
const text = "Hello my name name name is huxn";

// Call the wordCounter function with the example text and store the result in wordCounts
// Expected output: { hello: 1, my: 1, name: 3, is: 1, huxn: 1 }
const wordCounts = wordCounter(text);

console.log(wordCounts); // Log the word frequencies to the console
