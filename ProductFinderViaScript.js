;(function ($) {
  $(document).ready(function () {
    'use strict'
    let $productFinderWrapper = $('#product-finder-wrapper')
    if (!$productFinderWrapper.length)
      $productFinderWrapper = $('div[data-product-finder-wrapper="true"]')
    // Anfrage senden und die Antwort erhalten
    $productFinderWrapper.load(
      'https://pf.camps.digital/index.html',
      completeFunction
    )
    // Funktion nach Abschluss
    function completeFunction (responseText, textStatus, request) {
      if (textStatus == 'error') {
        $productFinderWrapper.text(
          'Es ist ein Fehler bei Ihrer Anfrage aufgetreten: ' +
            request.status +
            ' ' +
            request.statusText
        )
      }
    }
  })
})(jQuery)
