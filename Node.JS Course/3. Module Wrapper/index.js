// Module Wrapper

console.log("Hello World");
 
//Behind the scene 👇
(function (exports, require, module, __filename, __dirname) {
  console.log("Hello World");
})(); // 👈 If you wanna call it

console.log(__filename); // Provides the absolute path of the file that is currently being executed.
console.log(__dirname); // Provides the absolute path of the  directory containing the currently executing file.
console.log(module); // Represents the current module. It prints out the details of the module object.
console.log(exports); // Exports a greet function, which is then imported and used in app.js
 console.log(require); // Used to include modules in your application.