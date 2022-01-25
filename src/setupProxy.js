/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable func-names */
/* eslint-disable linebreak-style */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:6000',
      changeOrigin: true,
    })
  );
};
