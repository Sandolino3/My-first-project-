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
        },
        createBug(bugStats){
            let bugEl = document.createElement(`div`)
            bugEl.classList.add(`bugs`)
            bugEl.style.height = bugStats.height + `px`
            bugEl.style.width = bugStats.width + `px`
            bugEl.style.left = gameScreen.offsetWidth - bugStats.width + `px`
            bugEl.style.top = Math.floor(Math.random() * gameScreen.offsetHeight - bugStats.height) + `px`

            gameScreen.appendChild(bugEl)
        },
        createFireball(wizard, fireball){
            let fireBall = document.createElement(`div`);
            fireBall.classList.add(`ball`);
            fireBall.style.height = fireball.height + `px`
            fireBall.style.width = fireball.width + `px`
            fireBall.style.left = wizard.posX + wizard.width + `px`
            fireBall.style.top = wizard.posY +( wizard.height/2.5) + `px`

            gameScreen.appendChild(fireBall)
            
        }
    }

}
