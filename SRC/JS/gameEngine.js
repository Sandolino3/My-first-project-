
function start(state,game){
    game.createWizard(state.wizard)

 window.requestAnimationFrame(timestamp=>gameLoop(state, game, timestamp))
}

function gameLoop(state, game, timestamp) {
    if (state.keys.KeyD === true ) {
        state.wizard.posX = Math.min(state.wizard.posX + state.wizard.speed, game.gameScreen.offsetWidth - state.wizard.width)
      
    }
    if (state.keys.KeyA === true) {
        state.wizard.posX = Math.max(state.wizard.posX - state.wizard.speed, 0)
    }
    if (state.keys.KeyW === true) {
        state.wizard.posY = Math.max(state.wizard.posY - state.wizard.speed, 0)
    }
    if (state.keys.KeyS === true) {
        state.wizard.posY = Math.min(state.wizard.posY + state.wizard.speed, game.gameScreen.offsetHeight- state.wizard.height)
    }
if (timestamp > state.bugStats.bugTimestamp) {
    game.createBug(state.bugStats)
    state.bugStats.bugTimestamp = timestamp + Math.random() * state.bugStats.spawnTime
}

document.querySelectorAll(`.bugs`).forEach(bug =>{
    let posX = parseInt(bug.style.left)
    bug.style.left = posX - state.bugStats.bugSpeed + `px`
})

    game.wizardEl.style.left = state.wizard.posX + `px`
    game.wizardEl.style.top = state.wizard.posY + `px`
    

    
 window.requestAnimationFrame(gameLoop.bind(null, state,game))

}