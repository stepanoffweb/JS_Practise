export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId

    this.#render() // отрисовка модуля
    this.#setup() // настройка модуля
  }

  #render() {// приватный метод 2020
    const { data, placeholder } = this.options
    this.$el.classList.add('select')
    this.$el.innerHTML = _getTemplate(data, placeholder)
  }

  #setup() {
    this.openHandler = this.openHandler.bind(this)

    this.$el.addEventListener('click', this.openHandler)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  openHandler(e) {
    const {type, id} = e.target.dataset
    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current() {
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    this.selectedId = +id
    this.$value.textContent = this.current.value

    this.$el.querySelectorAll(`[data-type="item"]`).forEach( i => i.classList.remove('selected'))
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')
    this.options.onSelect ? this.options.onSelect(this.current) : null
    this.close()
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    this.$el.classList.add('open')
    this.$arrow.classList.remove('fa-chevron-down')
    this.$arrow.classList.add('fa-chevron-up')
  }

  close() {
    this.$el.classList.remove('open')
    this.$arrow.classList.add('fa-chevron-down')
    this.$arrow.classList.remove('fa-chevron-up')
  }

  destroy() {
    this.$el.removeEventListener('click', this.openHandler)
    this.$el.innerHTML = ''
  }
}

// const DEFAULT_PLACEHOLDER = 'Choose the item'

const _getTemplate = (data = [], placeholder = 'choose an answer') => {

  const text = placeholder
  const list = data.map(i => `<li class="select-item" data-type="item" data-id=${i.id}>${i.value}</li>`)

  return ` <div class="select-backdrop" data-type="backdrop"></div>
      <div class="select-input" data-type="input">
                    <span data-type="value">${text}</span>
                    <i class="fa fa-chevron-down" data-type="arrow"></i>
                </div>
                <div class="select-dropdown">
                    <ul class="select-list">
                      ${list.join('')}
                    </ul>
                </div>`
}

