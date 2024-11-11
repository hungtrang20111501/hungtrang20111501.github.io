/*
insertTextAtCursor(input, text) function. Build from this source
https://github.com/nolanlawson/emoji-picker-element
*/
let browserSupportsTextareaTextNodes;

function canManipulateViaTextNodes(e) {
  if ('TEXTAREA' !== e.nodeName) return !1;
  if (void 0 === browserSupportsTextareaTextNodes) {
    const t = document.createElement('textarea');
    (t.value = 1), (browserSupportsTextareaTextNodes = !!t.firstChild);
  }
  return browserSupportsTextareaTextNodes;
}

var insertTextAtCursor = function (e, t) {
  if ((e.focus(), document.selection)) {
    const o = document.selection.createRange();
    return (o.text = t), o.collapse(!1), void o.select();
  }
  if (!document.execCommand('insertText', !1, t)) {
    var a = e.selectionStart,
      s = e.selectionEnd;
    if ('function' == typeof e.setRangeText) e.setRangeText(t);
    else {
      const l = document.createRange();
      var n = document.createTextNode(t);
      if (canManipulateViaTextNodes(e)) {
        let o = e.firstChild;
        if (o) {
          let e = 0,
            t = null,
            n = null;
          for (; o && (null === t || null === n); ) {
            var r = o.nodeValue.length;
            a >= e && a <= e + r && l.setStart((t = o), a - e),
              s >= e && s <= e + r && l.setEnd((n = o), s - e),
              (e += r),
              (o = o.nextSibling);
          }
          a !== s && l.deleteContents();
        } else e.appendChild(n);
      }
      if (canManipulateViaTextNodes(e) && '#text' === l.commonAncestorContainer.nodeName)
        l.insertNode(n);
      else {
        const c = e.value;
        e.value = c.slice(0, a) + t + c.slice(s);
      }
    }
    e.setSelectionRange(a + t.length, a + t.length);
    const i = document.createEvent('UIEvent');
    i.initEvent('input', !0, !1), e.dispatchEvent(i);
  }
};
