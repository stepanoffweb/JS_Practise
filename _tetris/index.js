import Game from './modules/game.js'
import View from './modules/view.js'

const root = document.querySelector('#root')

const game = new Game()
const view = new View(root, 480, 640, 20, 10)

window.game = game
window.view = view
// console.log(view);

view.renderPlayfield(game.playfield)
