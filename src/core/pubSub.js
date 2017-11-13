export default (() => {
  const _topics = {};

  function _pub(topic_, data_) {
    let _listeners;
    if (topic_ in _topics) {
      _listeners = _topics[topic_];
      for (let i = 0, n = _listeners.length; i < n; i++) {
        _listeners[i](data_); // [!] synchronous
      }
    }
  }

  function _sub(topic_, listener_) {
    if (topic_ in _topics) {
      _topics[topic_].push(listener_);
    } else {
      _topics[topic_] = [listener_];
    }
  }

  function _unsub(topic_, listener_) {
    let _listeners;
    console.assert(topic_ in _topics, "topic:" + topic_ + " is not registered");
    _listeners = _topics[topic_].filter(function(v_) {
      return v_ !== listener_;
    });
    _topics[topic_] = _listeners;
  }

  return {
    publish: _pub,
    subscribe: _sub,
    unsubscribe: _unsub
  };
})();
