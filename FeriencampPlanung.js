;(function ($) {
  $(document).ready(function () {
    'use strict'
    let $wrapperElm = $('#feriencamp-planung-wrapper')

    // Load request and get response message
    $wrapperElm.load(
      'https://dev.d320nc9ere01kc.amplifyapp.com/',
      completeFunction
    )

    // Callback function after loading
    function completeFunction (responseText, textStatus, request) {
      if (textStatus == 'error') {
        $wrapperElm.text(
          'Es ist ein Fehler bei Ihrer Anfrage aufgetreten: ' +
            request.status +
            ' ' +
            request.statusText
        )
      }
    }
  })
})(jQuery)
