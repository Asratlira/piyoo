function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const returnValue = parseFloat(inputValue);
  return returnValue;
}
