
function gameState(){
    const state = {
     player: `Sanduka`,
     wizard: {
        width: 82,
        height: 100,
        startX: Math.random()*1000,
        startY: Math.random()*1000,
     }
    }
    return state

}