function isObject(obj) {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}

Function.prototype.myCall = function(obj, ...args) {
  if (!isObject(obj)) obj = window;
  obj.func = this;
  const result = obj.func(...args);
  delete obj.func;
  return result;
};
