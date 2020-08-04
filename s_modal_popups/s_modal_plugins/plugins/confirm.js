$.confirm = function (options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      content: options.content,
      onClose() {
        modal.destroy()
      },
      btns: [
        {
          text: 'Cancel',
          type: 'primary',
          handler () {
              modal.close() // ??? обращение к самому себе - создаваемому объекту... по адресу хз
              reject()
            }
          },
          {
            text: 'OK',
            type: 'danger',
            handler () {
              modal.close()
              // modal.destroy() // опять же асинхронность не даст отработать анимации, вместо этого - хуком onClose()
              resolve()
            }
          }
        ]
      })
    setTimeout(() => modal.open(), 10) // чтобы успело отрисоваться до "анимации" - присвоения новых классов
  })
}
