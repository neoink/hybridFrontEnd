export default (() => {
  let $elem

  function buttonHandler() {
    const $button = jQuery('.js-button')

    $button.on('click', function() {
      nkApp.Core.PubSub.publish('buttonClicked')
    })
  }

  function init(elem) {
    $elem = elem
    buttonHandler()
  }

  return {
    init
  }
})()
