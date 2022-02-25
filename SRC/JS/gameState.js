let startX = Math.random()*1000
let startY = Math.random()*600
function gameState(){
    const state = {
     player: `Sanduka`,
     wizard: {
        width: 82,
        height: 100,
        posX: startX,
        posY: startY,
     },
     keys:[]
    }
    return state

}