import {model} from './model'
import {Site} from './classes/site'
import {Sidebar} from './classes/sidebar'
import './styles/main.css'

const site = new Site('#site')

const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)
// --------------
// const site = document.querySelector('#site')
// model.forEach(block => {
//     const generate = templates[block.type]
//     if (generate) {
//         const html = generate(block) //фактически мы получаем строки по ключам из импортируемого объекта templates и вызываем одноименные функции
//         site.insertAdjacentHTML('beforeend', html)
//     }
// ----------------
    // let html
    // if (block.type === 'title') {
    //     html = title(block)
    // } else if (block.type === 'text') {
    //     html = text(block)
    // } else if (block.type === 'textColumns') {
    //     html = textColumns(block)
    // }

