
function start(state,game){
    game.createWizard(state.wizard)

 window.requestAnimationFrame(gameLoop.bind(null, state, game))
    
}

function gameLoop(state, game) {
    if (state.keys.KeyD === true) {
        state.wizard.posX += 10 
      
    }
    if (state.keys.KeyA === true) {
        state.wizard.posX -= 10
    }
    if (state.keys.KeyW === true) {
        state.wizard.posY -= 10
    }
    if (state.keys.KeyS === true) {
        state.wizard.posY += 10
    }
    game.wizardEl.style.left = state.wizard.posX + `px`
    game.wizardEl.style.top = state.wizard.posY + `px`

    
 window.requestAnimationFrame(gameLoop.bind(null, state,game))

}