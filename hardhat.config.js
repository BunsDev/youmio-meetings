require('@nomicfoundation/hardhat-toolbox');
const fs = require('fs');
const privateKey = fs.readFileSync('secrete.txt').toString();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: 'sepolia',
  networks: {
    hardhat: {
      chainId: 4202,
    },

    zkEVMCardonaTestnet: {
      url: 'https://polygon-zkevm-cardona.blockpi.network/v1/rpc/public',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.24',
  allowUnlimitedContractSize: true,
  throwOnTransactionFailures: true,
  throwOnCallFailures: true,
};
