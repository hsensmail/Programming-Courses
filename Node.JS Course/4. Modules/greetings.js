function greetings(username) {
  console.log(`Hello ${username}`);
}

// Tell other file you can use this same function.
module.exports = greetings; // This will let other files to use this module
