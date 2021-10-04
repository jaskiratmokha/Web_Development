// node readjson.js --source=team.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

fs.readFile(args.source, "utf-8", function(err, json){
    if(err){
        console.log(err);
    } else {
        let teams = JSON.parse(json); // JSON to JSO so that you can manipulate the object
        console.log(teams[2].matches[1].vs);
    }
})

// JSO
// if you want to print or save a JSO, convert the JSO to JSON using JSON.stringify
// if you want to manipulate a JSON, convert the JSON to JSO using JSON.parse