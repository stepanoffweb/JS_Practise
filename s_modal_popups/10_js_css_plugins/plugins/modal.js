const _createModal = function(options) {
  const data = options || {}
  const modal = document.createElement('div')
  modal.classList.add('smodal')
  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">${data.title || 'Modal title'}</span>
                ${data.closable ? '<span class="modal-close">&times;</span>' : ''}
            </div>
            <div class="modal-text">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="modal-footer">
                <button>OK</button>
                <button>Fuck</button>
            </div>
        </div>
    </div>`)
  document.body.appendChild(modal)
  return modal
}

$.modal = function (options) {
  const $modal = _createModal(options)
  const ANIMATION_SPEED = 2000
  let closing = false
  return {
    open() {
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
    },
    destroy() {}
  }
}
// объект методов с доступом  по замыканию
