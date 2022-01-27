/* eslint-disable linebreak-style */
import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let server = null;
  const baseUrl = 'https://www.google.com/';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add do something', async () => {
    const page = await browser.newPage();
    await page.goto(baseUrl, {
      waitUntil: "networkidle2",
      timeout: 60000
    });
  });
});
