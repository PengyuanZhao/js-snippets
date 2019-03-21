function isObject(obj) {
  const type = typeof obj;
  return type === 'function' || (type === 'object' && !!obj);
}

Function.prototype.myApply = function(obj, arg) {
  if (!isObject(obj)) obj = window;
  obj.func = this;
  const result = obj.func(...arg);
  delete obj.func;
  return result;
};
