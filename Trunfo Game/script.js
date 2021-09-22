var card1 = {
    name:"Niles Vanish",
    img: "https://c.tenor.com/DnY4rvDpLDwAAAAd/nileseyy-niles-disappear.gif",
    specs: {
        atk:0,
        def:0,
        mgc:10,
        
    }
}
var card2 = {
    name:"Okay",
    img: "https://media.giphy.com/media/StLkwhK31FVH20R6ES/giphy.gif",
    specs: {
        atk:10,
        def:0,
        mgc:0,
        
    }
}
var card3 = {
    name:"WTF",
    img: "https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif",
    specs: {
        atk:0,
        def:10,
        mgc:0,
        
    }
}
var cards = [card1, card2, card3]
var computer
var player

function sortearCarta(){
    var randComputer = parseInt(Math.random()*3);
    var randPlayer = parseInt(Math.random()*3);
    var tag = document.getElementById("carta-maquina");
    var frame ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

    computer = cards[randComputer];
    player = cards[randPlayer];
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    tag.style.backgroundImage = ""
    tag.innerHTML = frame
     showPlayerCard()
}
function showOptions(){
    var tag = document.getElementById("opcoes");
    var options = "";
    for (var spec in player.specs) {
        options += "<input type = 'radio' name = 'spec' value = '"+ spec +"'>" + spec;

    }
    
    tag.innerHTML = options;
}
function getOptions(){
    var options = document.getElementsByName("spec");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked == true) {
            return options[i].value;
        }
    }
    
}
function jogar(){
    var option  = getOptions();
    var tag = document.getElementById("resultado");
    
    var HTML;
    if (player.specs[option] > computer.specs[option]){
        HTML = "<p class = 'resultado-final'>Yow Won</p>"
    }else if(player.specs[option] < computer.specs[option]){
        HTML = "<p class = 'resultado-final'>Yow Lost</p>"
    }else{
        HTML = "<p class = 'resultado-final'>Draw</p>"
    }
    tag.innerHTML = HTML
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    showComputerCard()
}
function showPlayerCard(){
    var tag = document.getElementById("carta-jogador");
    tag.style.backgroundImage = `url(${player.img})`;
    var frame ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class = 'carta-status'>"

    var options = "";
    for (var spec in player.specs) {
        options += "<input type = 'radio' name = 'spec' value = '" + spec + "'>"  + spec + " " + player.specs[spec] + "<br>";
    }
    var name = '<p class="carta-subtitle">' + player.name + '</p>'

    tag.innerHTML = frame + name + tagHTML + options + "</div>";;
}
function showComputerCard(){
    var tag = document.getElementById("carta-maquina");
    tag.style.backgroundImage = `url(${computer.img})`;
    var frame ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class = 'carta-status'>"

    var options = "";
    for (var spec in computer.specs) {
        options += "<p type = 'radio' name = 'spec' value = '" + spec + "'>"  + spec + " " + computer.specs[spec]+ "</p>";
    }
    var name = '<p class="carta-subtitle">' + computer.name + '</p>'

    tag.innerHTML = frame + name + tagHTML + options + "</div>";;
}