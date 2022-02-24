let state = gameState()
let game = gameObject()

game.startButton.addEventListener(`click`,(e)=>{

 game.startDiv.classList = `hide`
 game.gameScreen.classList.remove(`hide`)


  start(state, game)
})