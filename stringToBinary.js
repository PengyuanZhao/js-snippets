function stringToBinary(str) {
  const charToBinary = char =>
    char
      .charCodeAt()
      .toString(2)
      .padStart(8, '0');

  return str
    .replace(/[\s\S]/g, charToBinary)
    .match(/.{1,8}/g)
    .join(' ');
}
