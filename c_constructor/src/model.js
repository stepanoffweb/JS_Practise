import image from './assets/image.jpg'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'
import {css} from './utils'

const text = `
Создаем свое приложение для изучения английского (и не только)
`

export const model = [
  new TitleBlock('Конструктор приложения на чистом JavaScript!', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(180deg, hsla(33, 100%, 53%, 1) 0%, hsla(58, 100%, 68%, 1) 100% )',
      color: '#03071e',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0;max-width: 800px;margin: 0 auto;',
    alt: 'my image',
    imageStyles: 'width: 100%; height: auto;'
  }),
  new TextColumnsBlock([
      'Допили свой инглиш',
      'Читай - Смотри и Слушай - Пиши - Говори',
      'Весь English в одном приложении',
  ], {
    styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(0deg, hsla(221, 51%, 16%, 1) 0%, hsla(0, 0%, 90%, 1) 100%, hsla(0, 0%, 90%, 1) 100%);font-weight: bold;'
  }),
  new TextBlock(text, {
    styles: 'height: 160px;font-size: 46px; font-style: italic;color: #ffba08;background: linear-gradient(180deg, hsla(221, 51%, 16%, 1) 0%, hsla(0, 0%, 90%, 1) 100%);font-weight: bold;padding: 1rem;'
  })
]
