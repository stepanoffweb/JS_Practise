input.onkeypress = function checkNum(e) {
  e = e || event;
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  var chr = getChar(e);
  // null >= '0' // true
  if (chr == null) return;
  if (chr < '0' || chr > '9') {
    return false;
  }
  //return true
}
// The event.which property normalizes event.keyCode and event.charCode. It is recommended to watch event.which for keyboard key input
// In a keypress event, the Unicode value of the key pressed is stored in either the keyCode or charCode property, never both. If the key pressed generates a character (e.g. ‘a’), charCode is set to the code of that character, respecting the letter case. (i.e. charCode takes into account whether the shift key is held down). Otherwise, the code of the pressed key is stored in keyCode
// Some browsers use keyCode, others use which
// var key = 'which' in e ? e.which : e.keyCode
// Or alternatively:
// var key = e.which || e.keyCode || 0;

function getChar(event) {
  if (event.which == null) {
    if (event.keyCode < 32) return null;
    return String.fromCharCode(event.keyCode) // IE
  }

  if (event.which != 0 && event.charCode != 0) {
    if (event.which < 32) return null;
    return String.fromCharCode(event.which)
  }

  return null;
}

function onlyNum(elem) {
    elem.addEventListener('keyup', function () {
        elem.value = elem.value.replace(/[^\d]/g, '');
    });
}
//  BOTH KEYCODE AND WHICH ARE DEPRECATED in favor of 'key' (for the logical key) and 'code' (for the physical placement of the key). But note that IE doesn't support 'code', and its support for 'key' is based on an older version of the spec so isn't quite correct. As I write this, the current Edge based on EdgeHTML and Chakra doesn't support 'code' either, but Microsoft is rolling out its Blink- and V8- based replacement for Edge, which presumably does/will.
