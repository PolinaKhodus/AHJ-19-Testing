/* eslint-disable linebreak-style */
export function isValidNumber(value) {
  const number = value.replace(/\D/g, '');

  let nCheck = 0;
  let bEven = false;

  for (let n = number.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(number.charAt(n), 10);

    // eslint-disable-next-line no-cond-assign
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}

export function checkPaySystem(value) {
  if (/^2/.test(value)) {
    return 'mir';
  }

  if (/^3[47]/.test(value)) {
    return 'american_express';
  }
  if (/^3[15]/.test(value)) {
    return 'jcb';
  }
  if (/^3[068]/.test(value)) {
    return 'diners_club';
  }
  if (/^4/.test(value)) {
    return 'visa';
  }
  if (/^5[1-5]/.test(value)) {
    return 'mastercard';
  }
  if (/^60/.test(value)) {
    return 'discover';
  }
  return null;
}
