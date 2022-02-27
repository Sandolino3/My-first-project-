let startX = Math.random()*1000
let startY = Math.random()*600
function gameState(){
    const state = {
     player: `Sanduka`,
     gameOver: false,
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
     },
     createFireball:{
        width: 20,
        height: 20,
        speed: 10,
        cd:0,
        spownInterval: 350,
     }

    }
    return state

}