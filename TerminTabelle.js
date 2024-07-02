const knownDateTableIFrames = []

function getSourceFrame (event) {
  const isEventIFrame = iFrame => iFrame.contentWindow === event.source

  // search in known iframes
  for (let i = 0; i < knownDateTableIFrames.length; i++) {
    if (isEventIFrame(knownDateTableIFrames[i])) {
      return knownDateTableIFrames[i]
    }
  }

  // search in all iframes
  const frames = document.getElementsByTagName('iframe')
  for (let i = 0; i < frames.length; i++) {
    if (isEventIFrame(frames[i])) {
      knownDateTableIFrames.push(frames[i])
      return frames[i]
    }
  }
}

function setIframeHeight (iFrame, msg) {
  const height = msg.split('=')[1]
  iFrame.style.height = `${height}px`
}

function ttRedirect (iFrame, msg) {
  const urlParts = msg.split('=')
  urlParts.shift() // Remove the first element
  const url = urlParts.join('=') // Join the remaining parts
  console.log('Redirecting (target blank) to:', url)
  window.open(url, '_blank')
}

function receiveMessage (event) {
  // Handle the message received from the iframe
  const msg = String(event.data)
  let fn = null
  if (msg.startsWith('tt-height')) fn = setIframeHeight
  else if (msg.startsWith('tt-redirect')) fn = ttRedirect

  // Find the iframe from which the message is sent
  const sourceFrame = getSourceFrame(event)
  if (!sourceFrame) {
    console.error('Could not find iframe')
    return
  }

  if (fn) fn(sourceFrame, msg) // Call the appropriate function
  else console.log('No function for message:', msg)
}
window.addEventListener('message', receiveMessage, false)
