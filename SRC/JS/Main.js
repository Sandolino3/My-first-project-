let state = gameState()
let game = gameObject()

game.startButton.addEventListener(`click`,(e)=>{

 game.startDiv.classList = `hide`
 game.gameScreen.classList.remove(`hide`)

//   document.body.style.backgroundImage = `url("images/GameBackground.jpg")`
//   window.requestAnimationFrame(gameLoop)

  start(state, game)
})