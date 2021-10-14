const Joi = require('joi');
const { password } = require('./custom.validation');

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  refreshTokens,
};
