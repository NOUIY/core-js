var fails = require('../internals/fails');

// Chrome 38 Symbol has incorrect toString conversion
module.exports = !fails(function () {
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});
