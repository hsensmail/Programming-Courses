function groupAnagrams(strs) {
  // Initialize an empty object (hash map) to store groups of anagrams
  const anagramMap = {};

  // Loop through each string in the 'strs' array
  for (const str of strs) {
    // For each string, split it into an array of characters, sort them alphabetically,
    // and then join them back together to form a sorted string.
    const sortedStr = str.split("").sort().join("");

    // Check if the sorted version of the string already exists as a key in 'anagramMap'.
    // If it does, add the original string to the array at that key.
    if (sortedStr in anagramMap) {
      anagramMap[sortedStr].push(str);
    } else {
      // If the sorted string is not already a key, create a new array with the original string.
      anagramMap[sortedStr] = [str];
    }
  }

  // Return the values of 'anagramMap', which will be arrays of grouped anagrams.
  return Object.values(anagramMap);
}

// Example input: array of strings
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Call the function to group the anagrams
const groups = groupAnagrams(strs);

console.log(groups); 
// Output: [["eat", "tea", "ate"], ["bat"], ["nat", "tan"]]
// Explanation: The words "eat", "tea", "ate" are anagrams and grouped together,
//              similarly for "tan" and "nat". "bat" is not an anagram of any other word.
