function Converter (){
    var priceUSD = parseFloat(document.getElementById("valor").value); // Caling the .value method on the document.getElementId then converting the string to float
    var element = document.getElementById("valorConvertido");
    var output = " " // creating an empty variable
    console.log(priceUSD);

    priceCVE = (priceUSD * 93.65).toFixed(2); // Converting the price USD to CVE and defining 2 decimal cases
    output = priceUSD + "$ = " + priceCVE + "CVE"; // Defining the structured output

    console.log(document.getElementById("valor").value); //print output

    element.innerHTML = output; //Replace HTML tag inner

}