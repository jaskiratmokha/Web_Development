// axios node module to downlaod html from browser
let minimist = require("minimist");
let axios = require("axios");
let fs= require("fs");

// node webdownload.js --url=https://www.pepcoding.com/resources/ --dest=pepc.html
args=minimist(process.argv);
let dwnldPromise = axios.get(args.url);
dwnldPromise.then(function(response){
    let html = response.data;
    fs.writeFileSync(args.dest, html, "utf-8");
}).catch(function(err){
    console.log(err);
})