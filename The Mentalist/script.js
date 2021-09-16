var random = parseInt(Math.random()*11);



function Chutar() {
    var element = document.getElementById("resultado");
    var guess = parseInt(document.getElementById("valor").value);
    var output = " ";
    console.log(guess);
    if (guess == random) {
        output = "CONGARTULATIONS the number is " + random;
        random = parseInt(Math.random()*11);
    } else if (guess > 10 || guess < 0) {
        output = "Number must be between 0 and 10";
    } else {

        if (guess > random) {
            output = "Hint: The number is SMALLER";
        }else{
            output = "Hint: The number is BIGGER";
        }  
    }
    element.innerHTML = output;
}