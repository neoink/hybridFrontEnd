export default (() => {
  function upperCaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return {
    upperCaseFirst
  };
})();