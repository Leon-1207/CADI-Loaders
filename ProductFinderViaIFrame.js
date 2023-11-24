const productFinderIframe = document.getElementById('product-finder-iframe')
window.onmessage = function (e) {
  if (String(e.data).startsWith('resize-pf'))
    productFinderIframe.setAttribute('height', e.data.split(':')[1])
}
