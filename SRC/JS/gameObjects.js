function gameObject(){
    let startButton = document.querySelector(`.start-btn`)
    let startDiv = document.querySelector(`.startup`)
    let gameScreen = document.querySelector(`.gameScreen`)

    return{
        startButton,
        startDiv,
        gameScreen,
        createWizard(gameState){
            let wizardEl = document.createElement(`div`)
            wizardEl.classList.add(`wizard`)
            wizardEl.style.height = gameState.height + `px`
            wizardEl.style.width = gameState.width + `px`
            wizardEl.style.left = gameState.posX + `px`
            wizardEl.style.top = gameState.posY + `px`

            gameScreen.appendChild(wizardEl)

            this.wizardEl = wizardEl;
            return wizardEl
        }
    }

}
