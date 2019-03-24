function binaryToString(str) {
  // Removes the spaces and convert to array
  const arr = str.replace(/\s+/g, '').match(/.{1,8}/g);

  return arr.map(item => String.fromCharCode(parseInt(item, 2))).join('');
}
