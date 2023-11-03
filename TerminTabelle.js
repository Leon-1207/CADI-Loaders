function receiveMessage(event) {
    // Handle the message received from the iframe
    console.log('Message from iframe:', event.data)
    if (String(event.data).startsWith('tt-height')) {
      const height = event.data.split('=')[1]
      document.getElementById('tt-iframe').style.height = `${height}px`
    }
  }
  window.addEventListener('message', receiveMessage, false)