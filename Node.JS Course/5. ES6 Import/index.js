// New way to import stuff.

// If we write code like this our compiler will gives us error ⚠️
// If you wanna use modern import statement in your projects there are
// two ways you can use that.

// 1️⃣ Change the file name from .js to (.mjs)
//   If you change the extension to .mjs you will no longer have
//   access to (require(thing)) (__dirname) (__filename) etc.
// 2️⃣ Using Terminal. Change the type to (module) using npm init.

import path from "path";
console.log(path.basename(__filename))
console.log(path.basename("c://Hsensmail/courses"));
