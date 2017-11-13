//__Import Libs
import jQuery from "./libs/jquery-3.2.1.min.js";

//__Import Dependencies
import * as Core from "./core/";
import * as Modules from "./moduleBootstrap.js";

//__Init App
const nkApp = {
  version: "1.0.0",
  Core: Core,
  Modules: Modules
};

console.log(nkApp);

//__Access App into global scope
window.nkApp = nkApp || {};
window.jQuery = jQuery || {};

export default nkApp;
