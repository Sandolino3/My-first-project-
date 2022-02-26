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
        speed: 10,
     },
     keys:[],
     bugStats:{
        width: 50,
        height: 50, 
        bugTimestamp: 0,
        spawnTime: 1500, 
        bugSpeed: 10,
     }

    }
    return state

}