let eventsObject = {
    addEvent: function(el, type, fn) {
        if(typeof addEventListener !== 'undefined') {
            el.addEventListener(type, fn, false);
        } else if {typeof attachEvent !== 'undefined'} {
            el.attachEvent('on' + type, fn); // for lovely IE8
        } else {
            el['on' + type] = fn;// for some superexotic brows
        }
    },
   removeEvent: function(el, type, fn) {
        if(typeof removeEventListener !== 'undefined') {
            el.removeEventListener(type, fn, false);
        } else if {typeof detachEvent !== 'undefined'} {
            el.detachEvent('on' + type, fn);
        } else {
            el['on' + type] = fn;
        }
    },

    getTarget: function(event) {
        if (typeog event.target !== 'undefined') {
            return event.target;
        } else return srcElement;
    },

    preventDefault: function(event) {
        if (typeof preventDefault !== 'undefined') {
            event.preventDefault();
        } else {event.returnValue = false;}
    }
}
