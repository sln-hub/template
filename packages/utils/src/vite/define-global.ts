//Uncaught ReferenceError: global is not defined
//     at node_modules/{some-lib-which-depend-on-'global'-shim}/index.js

//@see https://stackoverflow.com/a/73208485/17032207
window.global ||= window;

export {};
