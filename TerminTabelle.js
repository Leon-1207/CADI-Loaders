;(function () {
  console.log('TerminTabelle.js started loading')

  // Handle the message received from the iframe
  function receiveMessage (event) {
    const msg = String(event.data)

    if (msg.startsWith('tt-height')) {
      const sourceFrame = getSourceFrame(event)
      if (!sourceFrame) {
        console.error('Could not find iframe')
        return
      }
      // Set the height of the iframe
      const height = event.data.split('=')[1]
      sourceFrame.style.height = `${height}px`
      return
    }

    if (msg.startsWith('redirect')) {
      const url = msg.replace('redirect:', '')
      window.location.href = url
      return
    }
  }

  function getSourceFrame (event) {
    const frames = document.getElementsByTagName('iframe')
    for (let i = 0; i < frames.length; i++) {
      if (frames[i].contentWindow === event.source) return frames[i]
    }
    return null
  }

  window.addEventListener('message', receiveMessage, false)
  console.log('TerminTabelle.js finished loading')
})()
