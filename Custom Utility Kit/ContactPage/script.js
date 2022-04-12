var button = document.getElementById("submit");
button.addEventListener("click", function(event) {
    event.preventDefault();
    Email.send({
        Host : "smtp.gmail.com",
        Username : "liveforkissland@gmail.com",
        Password : "password",
        To : 'liveforkissland@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
});