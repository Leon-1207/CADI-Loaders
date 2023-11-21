function receiveMessage (event) {
  // Handle the message received from the iframe
  if (String(event.data).startsWith('tt-height')) {
    // Find the iframe from which the message is sent
    let sourceFrame = null
    const frames = document.getElementsByTagName('iframe')
    for (let i = 0; i < frames.length; i++) {
      if (frames[i].contentWindow === event.source) {
        sourceFrame = frames[i]
        break
      }
    }

    if (!sourceFrame) {
      console.error('Could not find iframe')
      return
    }

    // Set the height of the iframe
    const height = event.data.split('=')[1]
    sourceFrame.style.height = `${height}px`
  }
}
window.addEventListener('message', receiveMessage, false)
