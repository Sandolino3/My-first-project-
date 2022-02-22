let state = gameState()
let game = gameObject()

game.startButton.addEventListener(`click`,()=>{
 game.startDiv.classList = `hide`
game.gameScreen.classList.remove(`hide`)

//   document.body.style.backgroundImage = `url("images/GameBackground.jpg")`
  
})