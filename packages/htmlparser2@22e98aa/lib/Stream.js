function Stream(e){Parser.call(this,new Cbs(this),e)}function Cbs(e){this.scope=e}module.exports=Stream;var Parser=require("./WritableStream.js");require("util").inherits(Stream,Parser),Stream.prototype.readable=!0;var EVENTS=require("../").EVENTS;Object.keys(EVENTS).forEach(function(e){if(0===EVENTS[e])Cbs.prototype["on"+e]=function(){this.scope.emit(e)};else if(1===EVENTS[e])Cbs.prototype["on"+e]=function(t){this.scope.emit(e,t)};else{if(2!==EVENTS[e])throw Error("wrong number of arguments!");Cbs.prototype["on"+e]=function(t,n){this.scope.emit(e,t,n)}}});