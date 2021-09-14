getBoard = function(y, x){
    var board = document.getElementById("board")
    board.innerHTML = ""
    var tr = false
    var rowcount = 0
    
    var xcolums = y;
    var ycolums = x;
    
    
    for (var i = 0; i < (xcolums*ycolums); i++){
        rowcount++
        if (rowcount == xcolums || !tr){
            tr = document.createElement("tr")
            board.appendChild(tr)
            rowcount = 0
        }
        let td = document.createElement("td")
        td.innerHTML = '<button onclick="clickandpick(this.id)" id="'+i+'" class="cls"></button>'
        tr.appendChild(td)
    }
}
getBoard()


var drawx = 1
var drawo = 1
var player = 1
var whichTurns = document.getElementById('player')
var countDraw = document.getElementById('count')
clickandpick = function(id){
    let tag = document.getElementById(id)
    if (player == 1 && tag.innerHTML == ""){
        tag.innerHTML = "<div>X</div>"
        player = 2
        whichTurns.innerHTML = "Player "+player + "s:turn" 
        countDraw.innerHTML = "Player X "+drawx++ + " draw"
       
        
    } else if (player == 2 && tag.innerHTML == ""){
        tag.innerHTML = "<div>0</div>"
        player = 1
        whichTurns.innerHTML = "Player "+player + "s:turn"
        countDraw.innerHTML = "Player O "+drawo++ + " draw"
        
    }
    
    
}