const modal = () => {
  let loa = (function () {
    let loa = {};

    function animateOvertime (dur, cb, fin) {
        let timeStart;

        // create closure
        function _animateOverTime(time) {
            if(!timeStart) timeStart = time;
            let timeElapsed = time - timeStart;
            let completion = Math.min(timeElapsed/ dur, 1); //cap completion at 1 (100%)

            cb(completion);

            if(timeElapsed < dur) {
                requestAnimationFrame(_animateOverTime);
            } else {
                if(typeof fin === 'function') fin();
            }
        };
        return animateOvertime;
    }

    loa.fadeOut = function (el, dur, fin) {
        // el.style.opacity = 1; is assumed

        // create closure
        let _fadeOut = function(completion) {
            el.style.opacity = 1 - completion;
            if(completion === 1) {
                el.style.display = 'none';
            }
        };

        let ani = animateOvertime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);//and go
    }

    loa.fadeIn = function (el, dur, display, fin) {
        // el.style.opacity = 0; is assumed
        el.style.display = display || 'block';

        // create closure
        let _fadeIn = function (completion) {
            el.style.opacity = completion;// both 0 and 1 are decimal
        };

        let ani = animateOvertime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }
    return loa;
  }());

  function openModal (modal) {
      loa.fadeIn(modal, 500);
  }

  function closeModal (modal) {
      loa.fadeOut(modal, 500);
  }

  function bindModal(openSelector, closeSelector, wrapperSelector, contentSelector) {

    const openElement = document.querySelector(openSelector), // openning elements' selector
      modalWrapper = document.querySelector(wrapperSelector),// modal's wrapper selector
      modalContent = document.querySelector(contentSelector);

    openElement.forEach(item => {
      item.addEventListener('click', e => {
        e.preventDefault;

        openModal(modalWrapper);
      });
    });

    modalWrapper.addEventListener('click', e => {
      if(e.target.classList.contains(closeSelector) || !modalContent.contains(e.target) && e.target.classList.contains(modalWrapper)) {
        closeModal(modalWrapper);
      }
    });
  }

  bindModal('.modal__open', '.modal__close', '.modal__wrapper', '.modal__content');


}

