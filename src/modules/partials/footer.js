export default (() => {
  let $elem;

  function resultHandler() {
    const $result = jQuery(".result");

    nkApp.Core.PubSub.subscribe("buttonClicked", () => {
      $result.html("clicked");
    });
  }

  function init(elem) {
    $elem = elem;
    resultHandler();
  }

  return {
    init
  };
})();
