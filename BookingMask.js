;(function ($) {
  $(document).ready(function () {
    'use strict'
    const $bookingMaskWrapper = $('#booking-mask-wrapper')
    // send the request and get the response
    $bookingMaskWrapper.load(
      'https://main.d1u2qdrqduf5v6.amplifyapp.com/index.html',
      completeFunction
    )
    // complete function
    function completeFunction (responseText, textStatus, request) {
      if (textStatus == 'error') {
        $bookingMaskWrapper.text(
          'An error occurred during your request: ' +
            request.status +
            ' ' +
            request.statusText
        )
      } else {
        function checkStickyParents () {
          let parent = document.querySelector('#side-bar-wrapper')
          if (!parent) setTimeout(checkStickyParents, 500)
          else {
            while (parent) {
              const hasOverflow = getComputedStyle(parent).overflow
              if (hasOverflow !== 'visible') {
                parent.style.setProperty('overflow', 'visible')
              }
              parent = parent.parentElement
            }
          }
        }
        checkStickyParents()
      }
    }
  })
})(jQuery)
