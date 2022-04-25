// function greet(){
//     console.log('Hello World');
// }

// timeoutID= setTimeout(greet, 5000);
// clearTimeout(timeoutID);

// intervalID=setInterval(greet, 2000);
// clearInterval(intervalID);

function displayTime(){
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime,  1000);