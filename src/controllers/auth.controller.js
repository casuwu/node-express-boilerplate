const catchAsync = require('../utils/catchAsync');
const { authService } = require('../services');

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

module.exports = {
  refreshTokens,
};
