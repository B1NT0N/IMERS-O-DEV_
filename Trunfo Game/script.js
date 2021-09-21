var card1 = {
    name:"Niles Vanish",
    specs: {
        atk:0,
        def:0,
        mgc:10,
        
    }
}
var card2 = {
    name:"Okay",
    specs: {
        atk:10,
        def:0,
        mgc:0,
        
    }
}
var card3 = {
    name:"WTF",
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

    computer = cards[randComputer];
    player = cards[randPlayer];
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    showOptions()
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
    if (player.specs[option] > computer.specs[option]){
        tag.innerHTML = "Yow Won"
    }else if(player.specs[option] < computer.specs[option]){
        tag.innerHTML = "Yow Lost"
    }else{
        tag.innerHTML = "Draw"
    }
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
}

