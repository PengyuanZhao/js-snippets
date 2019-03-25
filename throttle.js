function throttle(func, wait) {
  let inThrottle = false;
  return function(args) {
    if (inThrottle) return;
    func.apply(this, args);
    inThrottle = true;
    setTimeout(() => {
      inThrottle = false;
    }, wait);
  };
}

function throttle(func, wait) {
  let timeout = null;
  let lastRanAt;
  return function(...args) {
    if (lastRanAt) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (Date.now() - lastRanAt >= wait) {
          func.apply(this, args);
          lastRanAt = Date.now();
        }
      }, wait - (Date.now() - lastRanAt));
    } else {
      func.apply(this, args);
      lastRanAt = Date.now();
    }
  };
}

// underscore version
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
