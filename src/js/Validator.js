/* eslint-disable linebreak-style */
import { isValidNumber, checkPaySystem } from './Functions';

export default class Validator {
  constructor() {
    this.cards = [...document.querySelectorAll('.cards__item')];
    this.input = document.querySelector('.form__input');
    this.form = document.querySelector('.form');
  }

  init() {
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(event) {
    event.preventDefault();
    const cardNumber = this.input.value.replace(/\s/g, '');
    const isValidCardNumber = isValidNumber(cardNumber);

    if (!isValidCardNumber) {
      this.clear();
      this.showMessage();
      return;
    }
    const paySystem = checkPaySystem(cardNumber);
    this.showPaymentSystem(paySystem);
  }

  showPaymentSystem(paySystem) {
    this.clear();
    this.cards.forEach((item) => {
      if (item.classList.contains(paySystem)) {
        item.classList.add('valid');
      }
    });
  }

  clear() {
    this.cards.forEach((item) => {
      if (item.classList.contains('valid')) {
        item.classList.remove('valid');
      }
    });
  }

  showMessage() {
    if (document.querySelector('.message')) {
      return;
    }
    const div = document.createElement('div');
    div.textContent = 'the card number was entered incorrectly';
    div.classList.add('message');
    this.form.append(div);
    setTimeout(() => {
      this.form.querySelector('.message').remove();
    }, 2000);
  }
}
