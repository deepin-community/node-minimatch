const m = require('./dist/commonjs');

const minimatch = m.minimatch;
minimatch.minimatch = m.minimatch;

module.exports = minimatch;
