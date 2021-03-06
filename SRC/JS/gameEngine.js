
function start(state,game){
    game.createWizard(state.wizard)

 window.requestAnimationFrame(timestamp=>gameLoop(state, game, timestamp))
}

function gameLoop(state, game, timestamp) {
    if (state.keys.Space) {

        game.wizardEl.style.backgroundImage = `url("images/wizard-fire.png")`
        if(timestamp > state.createFireball.cd){
            game.createFireball(state.wizard, state.createFireball)
            state.createFireball.cd = timestamp +  state.createFireball.spownInterval
        }
    }else{
        game.wizardEl.style.backgroundImage = `url("images/wizard.png")`

    }

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
let bugElements = document.querySelectorAll(`.bugs`)
let wEl = document.querySelector(`.wizard`)

bugElements.forEach(bug =>{
    let posX = parseInt(bug.style.left)
    if (detectColision(wEl, bug)) {
      state.gameOver = true  
    }
    if (posX > 0 ) {
    bug.style.left = posX - state.bugStats.bugSpeed + `px`
        
    }else {
        bug.remove()
    }
})
document.querySelectorAll(`.ball`).forEach(bal =>{
    let posX = parseInt(bal.style.left)

    bugElements.forEach(bug =>{
        if (detectColision(bug, bal)) {
             bug.remove();
             bal.remove();
        }
    })
    if (posX > game.gameScreen.offsetWidth ) {
        bal.remove()
        
    }else {
    bal.style.left = posX + state.createFireball.speed + `px`

    }

})

    game.wizardEl.style.left = state.wizard.posX + `px`
    game.wizardEl.style.top = state.wizard.posY + `px`
    
    let gameOver = document.getElementById(`gameOver`)
    if (state.gameOver) {
      gameOver.classList.remove(`hide`)
    window.cancelAnimationFrame() 

    }else{
        window.requestAnimationFrame(gameLoop.bind(null, state,game))

    }

    gameOver.addEventListener(`click`, ()=>{
        window.location.reload();

    })

}

function detectColision(obj1, obj2){
let first = obj1.getBoundingClientRect();
let second = obj2.getBoundingClientRect();
let colision = !(first.top > second.bottom || first.bottom < second.top || first.left > second.right || first.right < second.left )
return colision
}

