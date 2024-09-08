// npm install --save-dev jest mocha chai selenium-webdriver cypress
// tests/bootstrap.test.js

module.exports = {
  projectId: "ar552a",
  // ...rest of the Cypress project config
}
const { expect } = require('chai');

// Import JSDOM for testing DOM manipulation
const { JSDOM } = require('jsdom');

describe('Bootstrap 5 Button Test', () => {
  it('should have a button with class btn', () => {
    const dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <link rel="stylesheet" href="../static/css/bootstrap.min.css">
      </head>
      <body>
        <button class="btn btn-primary">Click me</button>
      </body>
      </html>
    `);
    const button = dom.window.document.querySelector('.btn');
    expect(button).to.not.be.null;
  });
});
// https://cloud.cypress.io/invitation/452b091e-9d37-46ea-8568-92203f1da097