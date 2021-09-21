var player1 = {
    name:"You",
    win: 0,
    loss:0,
    draw:0,
    points:0,
};
var player2 = {
    name:"Computer",
    win: 0,
    loss:0,
    draw:0,
    points:0,
};

var players=[player1,player2];

toHTML(players);

function addWin(i){
    var player = players[i];
    player.win ++;
    calculatePoints(player);
    toHTML(players);
}
function addLoss(i){
    var player = players[i];
    player.loss ++;
    calculatePoints(player);
    toHTML(players);
}
function addDraw(i){
    var player = players[i];
    player.draw ++;
    calculatePoints(player);
    toHTML(players);
}

function toHTML(players){
    var tag = "";
    for (var i=0; i<players.length; i++) {
        tag += "<tr>"
        tag +=    "<td>"+players[i].name+"</td>"
        tag +=    "<td>"+players[i].win+"</td>"
        tag +=    "<td>"+players[i].draw+"</td>"
        tag +=    "<td>"+players[i].loss+"</td>"
        tag +=    "<td>"+players[i].points+"</td>"
        tag +=    '<td><button onClick="addWin('+i+')">Win</button></td>'
        tag +=    '<td><button onClick="addDraw('+i+')">Draw</button></td>'
        tag +=    '<td><button onClick="addLoss('+i+')">Lost</button></td>'
        tag +="</tr>"
    }
    var tableTag = document.getElementById("tabelaJogadores");
    tableTag.innerHTML = tag;
}

function calculatePoints(player) {
    player.points = (player.win*3) + player.draw;
};

