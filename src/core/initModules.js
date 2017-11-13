/**
 * Initialization of all modules loaded (this use "babel-wildcard" plugins for functionning)
 * {Object} moduleObj => Object containing modules declared
 * @returns void(0)
 */
export default moduleObj => {
  for (let _path in moduleObj) {
    for (let _module in moduleObj[_path]) {
      let $moduleDOM = jQuery(moduleObj[_path][_module]);
      if (!$moduleDOM.length) {
        continue;
      }
      let module_ = nkApp.Core.Utils.upperCaseFirst(_module);
      nkApp.Modules[_path][module_].init($moduleDOM);
    }
  }
};
