var random = 0;

function Chutar() {
    var guess = parseInt(document.getElementById("valor").value);
    console.log(guess);
    if (guess == random) {
        console.log("Acertou")
    } else {

        if (guess > random) {
            console.log("Menor")
        }else{
            console.log("Maior")
        }
        
    }
}