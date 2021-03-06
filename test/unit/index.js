// requires all tests in `project/test/src/components/**/index.js`
const tests = require.context('./specs', true,  /\.spec$/);
 
tests.keys().forEach(tests);
 
// requires all components in `project/src/components/**/index.js`
const components = require.context('../../files', true, /\.js$/);
 
components.keys().forEach(components);
