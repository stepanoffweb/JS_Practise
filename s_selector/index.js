import { Select } from './select/select'
import './select/style.scss'

const answers = [
{id: 1, value: 'legerdemain'},
{id: 2, value: 'pother'},
{id: 3, value: 'embonpoint'},
{id: 4, value: 'tenebrous'},
{id: 5, value: 'malapropism'},
]
const placeholder = 'ловкость рук, фокусы, ловкий обман, надувательство'

const select = new Select('#select', {
  placeholder,
  data: answers,
  onSelect(item) {
    // console.log(item)
  }
})

window.s = select
