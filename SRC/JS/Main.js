let state = gameState();
let game = gameObject();

document.addEventListener(`keydown`, (e) => {
  if (
    e.code == `KeyA` ||
    e.code == `KeyW` ||
    e.code == `KeyS` ||
    e.code == `KeyD`
  ) {
    state.keys[e.code] = true;

  }
});
document.addEventListener(`keyup`, (e) => {
  if (
    e.code == `KeyA` ||
    e.code == `KeyW` ||
    e.code == `KeyS` ||
    e.code == `KeyD`
  ) {
    state.keys[e.code] = false;
  }
});

game.startButton.addEventListener(`click`, (e) => {
  game.startDiv.classList = `hide`;
  game.gameScreen.classList.remove(`hide`);

  start(state, game);
});
