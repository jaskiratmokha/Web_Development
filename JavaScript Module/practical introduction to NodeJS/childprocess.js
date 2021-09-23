let cp= require("child_process");
// console.log("trying to open the calculator");
// cp.execSync("calc");
// console.log("opened calculator");
// console.log("trying to open the code editor");
// cp.execSync("code");
// console.log("opened code editor");
// cp.execSync("start chrome https://www.google.com");
let output =cp.execSync("node abc.js")
console.log("displaying message: "+output);