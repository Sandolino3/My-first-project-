function gameObject(){
    let startButton = document.querySelector(`.start-btn`)
    let startDiv = document.getElementById(`startup`)
    let gameScreen = document.getElementById(`gameScreen`)

    return{
        startButton,
        startDiv,
        gameScreen,
    }

}
