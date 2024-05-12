const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('Youmio', (m) => {
  const youmio = m.contract('Youmio');

  return { youmio };
});
