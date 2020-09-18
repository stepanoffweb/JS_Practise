//create a function-constructor
const Validator = function(options) {
    const form = document.getElementById(options.id),
        formElements = [...form.elements].filter(item => item.tagName !== 'BUTTON'),// ? form.elements === [inputs]
        errors = new Set(),
        patterns = {
            email: /^\w+@\w+\.\w+$/,
            phone: /^\+380\w{9}$/ //Ukraina
            // phone: /^\+?[78]([()-]*\d){10}$/, // +7(952)111-4662 - is valid Russia
        },
        validatorMethods = {
            notEmpty(elem){
                if(elem.value.trim() === '') {
                    return false;
                }
                return true;
            },
            pattern(elem, pattern){
               return pattern.test(elem.value);
            }
        };

    for (let key in options.pattern) {
        patterns[key] = options.pattern[key];
    }
    const showError = elem => {
        elem.classList.remove('validator__success');
        elem.classList.add('validator__error');
        console.log('elem.nextElementSibling: ', elem.nextElementSibling);

        const errorDiv = document.createElement('div');
        if(!elem.nextElementSibling.classList.contains('error-message')) {
            if(!elem.value) {
                errorDiv.textContent  = "Поле не должно быть пустым!";
            } else errorDiv.textContent  = "Ошибка ввода!"

            errorDiv.classList.add('error-message');
            elem.insertAdjacentElement('afterend', errorDiv);
        }
        else if (!elem.value) {
            elem.nextElementSibling.textContent = "Поле не должно быть пустым!"
            // console.log('errorDiv: ', errorDiv);
        } else elem.nextElementSibling.textContent = "Ошибка ввода!"
    };

    const showSuccess = elem => {
        elem.classList.remove('validator__error');
        elem.classList.add('validator__success');
        if(elem.nextElementSibling.classList.contains('error-message')) {
            elem.nextElementSibling.remove();
        }
    };

    const isValid = elem => {
        const methods = options.method[elem.id];
        if(methods !== undefined){
            return methods.every(item => validatorMethods[item[0]](elem, patterns[item[1]]));
        }
        return true;
    };

    const checkIt = event => {
        let target = event.target;
        if(isValid(target)) {
            showSuccess(target);
            errors.delete(target);
        } else {
            showError(target);
            errors.add(target);
        }
    }

    formElements.forEach(elem => elem.addEventListener('change', e => checkIt(e)));

    // check form data before upload
    form.addEventListener('submit', event => {
        formElements.forEach(elem => {
            checkIt({target: elem});// populate errors Set
        });
        if(errors.size) {
            event.preventDefault();
        }
    });

    document.querySelector('[type="reset"]').addEventListener('click', e => {
        e.preventDefault()
        formElements.forEach(elem => {
            elem.value = ''
        })
        Array.from(form.children).forEach(elem => {
            if (elem.classList.contains('validator__success')) {
                elem.classList.remove('validator__success')
            }
            if (elem.classList.contains('validator__error')) {
                elem.classList.remove('validator__error')
            }
            if (elem.classList.contains('error-message')) {
                elem.remove()
            }
        })
    })
};
