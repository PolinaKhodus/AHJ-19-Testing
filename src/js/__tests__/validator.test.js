/* eslint-disable linebreak-style */
import { checkPaySystem, isValidNumber } from '../Functions';

describe('isValidNumber:', () => {
  test.each([
    ['4716059918019947', true],
    ['6375214064046395', true],
    ['6011696218344915010', true],
    ['4716059918019949', false],
    ['41111111', false],
    ['9999999999999999999999', false],
  ])(('should return for card number \'%s\' %s'), (input, bool) => {
    expect(isValidNumber(input)).toBe(bool);
  });
});

describe('checkPaySystem:', () => {
  test.each([
    ['4716059918019947', 'visa'],
    ['2221009550064653', 'mir'],
    ['5138387357451679', 'mastercard'],
    ['5246836438599433', 'mastercard'],
    ['5333488149396412', 'mastercard'],
    ['5420478286552123', 'mastercard'],
    ['5563855651361330', 'mastercard'],
    ['3144160553582692', 'jcb'],
    ['3533410381287430107', 'jcb'],
    ['6011351367397800', 'discover'],
    ['30252841173561', 'diners_club'],
    ['36132886377204', 'diners_club'],
    ['38233247827620', 'diners_club'],
    ['343586009058631', 'american_express'],
    ['375944681410158', 'american_express'],
  ])(('card number \'%s\'; payment system \'%s\''), (input, expected) => {
    expect(checkPaySystem(input)).toBe(expected);
  });
});
