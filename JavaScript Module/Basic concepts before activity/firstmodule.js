let minimist= require("minimist");
let pars= minimist(process.argv);

if(pars.married==false){
    console.log(pars.name+" is an unmarried "+pars.gender);
}
else{
    console.log(pars.name+" is a married "+pars.gender);
}