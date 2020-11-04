const ucomponent = require('./components');

const req = require.context('./components', true, /^\.\/locale\/.+_.+\.tsx$/);

ucomponent.locales = {};

req.keys().forEach(mod => {
  const matches = mod.match(/\/([^/]+).tsx$/);
  ucomponent.locales[matches[1]] = req(mod).default;
});

module.exports = ucomponent;
