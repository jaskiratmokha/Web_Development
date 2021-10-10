// node modules required for this activity:
// axios
// jsdom
// excel4node
// pdf-lib
// minimist

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");
let path = require("path");
args=minimist(process.argv);
// command to get arguments for minimist
//  node cricinfo.js --src=https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results 

let dld=axios.get(args.src);
dld.then(function(response){
    let html=response.data;
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    let matches=[];
    let matchdivs=document.querySelectorAll("div.match-score-block");
    for(let i=0;i<matchdivs.length;i++){
        let matchdiv=matchdivs[i];
        let match={
            t1: "",
            t2: "",
            t1s: "",
            t2s: "",
            result: ""
        };
        let teamParas = matchdiv.querySelectorAll("div.name-detail > p.name");
        match.t1 = teamParas[0].textContent;
        match.t2 = teamParas[1].textContent;
        let resultSpan = matchdiv.querySelector("div.status-text > span");
        match.result = resultSpan.textContent;
        let scoreSpans = matchdiv.querySelectorAll("div.score-detail > span.score");
        if (scoreSpans.length == 2) {
            match.t1s = scoreSpans[0].textContent;
            match.t2s = scoreSpans[1].textContent;
        } else if (scoreSpans.length == 1) {
            match.t1s = scoreSpans[0].textContent;
            match.t2s = "";
        } else {
            match.t1s = "";
            match.t2s = "";
        }
        matches.push(match);
    }
    let matchesJSON = JSON.stringify(matches); 
    fs.writeFileSync("matches.json", matchesJSON, "utf-8");
})