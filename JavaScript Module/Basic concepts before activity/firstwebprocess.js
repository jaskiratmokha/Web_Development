// we have to process stuff from a html page

let jsdom=require("jsdom");
let fs= require("fs");
let minimist=require("minimist");
let args=minimist(process.argv);

fs.readFile(args.src,"utf-8",function(err,html){
let JSDOM=jsdom.JSDOM;
let dom=new JSDOM(html);
let document= dom.window.document;

let head=document.querySelectorAll("h2.free-resources-course-name");
for(let i=0;i<head.length;i++){
    console.log(head[i].textContent);
}
})