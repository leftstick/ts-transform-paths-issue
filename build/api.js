const rollup = require('rollup')
const config = require('./api.rollup.config')

module.exports = function() {
  return rollup
    .rollup(config.inputOpts)
    .then(bundle => {
      return bundle.write(config.outputOpts)
    })
    .then(() => {
      console.log('libs/index.js generated')
    })
}
