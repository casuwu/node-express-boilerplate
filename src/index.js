const express = require('express');
const logger = require('./config/logger');

const app = require('./app');

const server = app.listen(3000, function () {
  const host = server.address().address;
  const { port } = server.address();

  console.log('Example app listening at http://%s:%s', host, port);
});
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
