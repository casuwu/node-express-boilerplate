const Joi = require('joi');

const refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required(),
  }),
};

module.exports = {
  refreshTokens,
};
