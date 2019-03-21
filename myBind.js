Function.prototype.myBind = function(obj) {
  if (typeof this !== 'function') {
    throw new Error('Error');
  }
  const thisFunc = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return thisFunc.apply(this, [...args, ...arguments]);
    }
    return thisFunc.apply(obj, [...args, ...arguments]);
  };
};
