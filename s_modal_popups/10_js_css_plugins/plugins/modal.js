Element.prototype.insertAfter = function (elem) {
  console.log('this ', this);
  elem.parentNode.insertBefore(this, elem.nextSibling)
}

const _createFooter = function(btns) {
  const wrap = document.createElement('div')
  wrap.classList.add('modal-footer')
  btns.forEach(btn => {
    const $btn = document.createElement('button')
    $btn.classList.add(`btn-${btn.type}`)
    $btn.innerText = btn.text
    $btn.addEventListener('click', () => {
      alert(btn.handler)
    })
    wrap.appendChild($btn)
  })
  return wrap
}

const _createModal = function(options) {
  const data = options || {}
  const modal = document.createElement('div')
  modal.classList.add('smodal')
  const DEFAULT_WIDTH = '600px'
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true" >
        <div class="modal-window"  style="width: ${data.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${data.title || 'Modal title'}</span>
                ${data.closable ? '<span class="modal-close" data-close="true">&times;</span>' : ''}
            </div>
            <div class="modal-text" data-content="content">
                ${data.content || '<p>The default content</p>'}
            </div>
            <div class="modal-footer">
                <button>OK</button>
                <button>Fuck</button>
            </div>
        </div>
    </div>`)
  const footer = _createFooter(data.btns)
  footer.insertAfter(modal.querySelector('[data-content]'))
  document.body.appendChild(modal)
  return modal
}

$.modal = function (options) {
  const $modal = _createModal(options)
  const ANIMATION_SPEED = 2000
  let closing = false
  let isDestroyed = false

  const modal = {
    open() {
      if (isDestroyed) return alert('Modal is destroyed!')
      !closing && $modal.classList.add('active')
    },
    close() {
      closing = true
      $modal.classList.remove('active')
      $modal.classList.add('closing')
      setInterval(() => {
        $modal.classList.remove('closing')
        closing = false
      }, ANIMATION_SPEED)
    }
  }
  const listener = e => {
    if (e.target.dataset.close) {
      modal.close()
    }
  }

  document.addEventListener('click', listener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      document.removeEventListener('click', listener)
      isDestroyed = true
    },
    setContent(html) {
      document.querySelector('[data-content]').innerHTML = html
    }
  })
}
