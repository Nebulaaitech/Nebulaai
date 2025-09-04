// NanoSlug: 12-char human-friendly ID with check digit
const ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const BASE = ALPHABET.length;

function luhn(indices) {
  let factor = 2, sum = 0;
  for (let i = indices.length - 1; i >= 0; i--) {
    let add = factor * indices[i];
    factor = factor === 2 ? 1 : 2;
    add = Math.floor(add / BASE) + (add % BASE);
    sum += add;
  }
  return (BASE - (sum % BASE)) % BASE;
}

function slug(len = 12) {
  const body = Array.from({ length: len - 1 }, () => Math.floor(Math.random() * BASE));
  const check = luhn(body);
  return body.map(i => ALPHABET[i]).join("") + ALPHABET[check];
}

module.exports = { slug };
