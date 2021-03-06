// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 500000,
      from: '0xcf1f948a3894df2fa3aaf76ae3d6d9a165b5755a'
    }
  }
}
