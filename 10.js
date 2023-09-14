function validatePIN(pin) {
  const regex = /^(?:(?:\d{4})|(?:\d{6}))$/;
  return regex.test(pin);
}
