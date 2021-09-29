let minimist=require("minimist");
let args=minimist(process.argv);
let fs= require("fs");
// node firstfile.js --srcfile=f1.txt --destfile=f2.txt
let stext=fs.readFileSync(args.source,"utf-8");
console.log(stext);
let dtext=stext.toUpperCase();
fs.writeFileSync(args.dest, dtext, "utf-8")

