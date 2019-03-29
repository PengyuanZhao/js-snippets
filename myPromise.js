const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
  const self = this;
  self.state = PENDING;
  self.value = null;
  self.resolvedCallbacks = [];
  self.rejectedCallbacks = [];

  function resolve(value) {
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }
    if (self.state === PENDING) {
      self.state = RESOLVED;
      self.value = value;
      self.resolveCallbacks.map(cb => cb(value));
    }
  }

  function rejected(value) {
    if (self.state === PENDING) {
      self.state = REJECTED;
      self.state = value;
      self.rejectedCallbacks.map(cb => cb(value));
    }
  }

  try {
    fn(resolve, rejected);
  } catch (e) {
    rejected(e);
  }
}

MyPromise.prototype.then = function(onFullfilled, onRejected) {
  const self = this;
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : v => v;
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : e => {
          throw e;
        };
  if (self.state === PENDING) {
    self.resolvedCallbacks.push(onFullfilled);
    self.rejectedCallbacks.push(onRejected);
  }
  if (self.state === RESOLVED) {
    onFullfilled(self.value);
  }
  if (self.state === REJECTED) {
    onRejected(self.value);
  }
};
