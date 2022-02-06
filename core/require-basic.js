function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName);

  if (require.cache[id]) {
    return require.cache[id].exports;
  }

  // module metadata
  const module = {
    exports: {},
    id,
  };

  require.cache[id] = module;

  // load the module
  loadModule(id, module, require);

  // return the exported variable
  return module.exports;
}
require.cache = {};
require.resolve = (moduleName) => {};

