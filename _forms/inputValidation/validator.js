// create a function-constructor
const Validator = function (options) {
  const form = document.getElementById(options.id)
  const formElements = [...form.elements].filter(item => item.tagName !== 'BUTTON')
  const errors = new Set()
  const patterns = {
    email: /^\w+@\w+\.\w+$/,
    phone: /^\+?[78]([()-]*\d){10}$/ // +7(952)111-4662 - is valid
  }
  const validatorMethods = {
    notEmpty (elem) {
      if (elem.value.trim() === '') {
        return false
      }
      return true
    },
    pattern (elem, pattern) {
      return pattern.test(elem.value)
    }
  }

  for (const key in options.pattern) {
    patterns[key] = options.pattern[key]
  }

  const showError = (elem) => {
    elem.classList.remove('validator__success')
    elem.classList.add('validator__error')
    // or 'elem.style.border|cssText' without removing
    if (!elem.nextElementSibling.classList.contains('error-message')) {
      const errorDiv = document.createElement('div')
      errorDiv.textContent = 'Ошибка ввода!'
      // errorDiv.cssText = 'font-size: 12px; color: red';
      errorDiv.classList.add('error-message')
      elem.insertAdjacentElement('afterend', errorDiv)
    }
  }

  const showSuccess = (elem) => {
    elem.classList.remove('validator__error')
    elem.classList.add('validator__success')
    if (elem.nextElementSibling.classList.contains('error-message')) {
      elem.nextElementSibling.remove()
    }
  }

  const isValid = (elem) => {
    const methods = options.method[elem.id]
    console.log('methods: ', methods)
    if (methods !== undefined) {
      return methods.every(item => validatorMethods[item[0]](elem, patterns[item[1]]))
    }
    return true
  }

  const checkIt = (event) => {
    const target = event.target
    if (isValid(target)) {
      showSuccess(target)
      errors.delete(target)
    } else {
      showError(target)
      errors.add(target)
    }
  }

  formElements.forEach(elem => elem.addEventListener('change', checkIt))

  // check form data before upload
  form.addEventListener('submit', (event) => {
    formElements.forEach((elem) => {
      checkIt({ target: elem })// populate errors Set
    })
    if (errors.size) {
      event.preventDefault()
    }
  })
}
