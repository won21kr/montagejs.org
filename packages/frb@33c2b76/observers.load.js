montageDefine("33c2b76","observers",{dependencies:["collections/shim","collections/listen/property-changes","collections/listen/array-changes","collections/sorted-array","collections/map","collections/set","collections/heap","./scope","./operators","./parse","./compile-observer","./merge"],factory:function(e,t){function n(e){return function(t){return t(e)||Function.noop}}function a(e,t){return e(t.value)||Function.noop}function s(e,t){return e(t.parameters)||Function.noop}function i(e){return function(t,n){return t(n.document.getElementById(e))||Function.noop}}function r(e,t){return function(n,a){var s=a.components,i=s.getObjectByLabel||s.getComponentByLabel,r=i.call(s,e);return t.component=r,n(r)||Function.noop}}function o(e,t,n,a){function s(e,t,a){i(),i=n(e,t,a)||Function.noop}if(null==e)return n();var i=Function.noop;return ht.addOwnPropertyChangeListener(e,t,s,a.beforeChange),s(e[t],t,e),pt(function(){i(),ht.removeOwnPropertyChangeListener(e,t,s,a.beforeChange)})}function l(e,t){return function(n,a){return t(ct(function(t){return null==t?n():e(ct(function(e){return null==e?n():e.observeProperty?e.observeProperty(t,n,a):yt(e,t,n,a)}),a)}),a)}}function c(e,t,n,a){function s(e,a,s){r(t,a)&&(i(),i=n(e,t,s)||Function.noop)}var i=Function.noop,r=e.contentEquals||Object.equals;return s(e.get(t),t,e),e.addMapChangeListener(s,a.beforeChange),pt(function(){i(),e.removeMapChangeListener(s)})}function p(e,t){return function(n,a){return e(ct(function(e){return e?t(ct(function(t){return null==t?n():e.observeGet?e.observeGet(t,n,a):wt(e,t,n,a)}),a):n()}),a)}}function h(e,t){return function(n,a){return n=ot(n),t(ct(function(t){return e(ct(function(e){return e?H(e,function(){return n((e.has||e.contains).call(e,t))},a):n()}),a)}),a)}}function d(e){return function(t,n){for(var a=Array(e.length),s=0;e.length>s;s++)a[s]=void 0;var i=e.map(function(e,t){return e(function(e){a.set(t,e)},n)}),r=t(a)||Function.noop;return pt(function(){r(),lt(i)})}}function u(e){return function(t,n){var a={},s={};for(var i in e)(function(e,t){a[e]=t(function(t){s[e]=t},n)})(i,e[i]);var r=t(s)||Function.noop;return function(){r();for(var e in a)a[e]()}}}function g(){return d(Array.prototype.slice.call(arguments))}function m(e){return function(){var t=d(Array.prototype.slice.call(arguments)),n=G(t);return function(t,a){return n(ct(function(n){return n.every(vt.defined)?t(e.apply(void 0,n)):t()}),a)}}}function f(e){var t=e.slice(0,1).toUpperCase()+e.slice(1),n="make"+t+"Observer",a="observe"+t;return function(){var t=arguments[0],s=Array.prototype.slice.call(arguments,1),i=s.map(function(e){return function(t,n){return e(ct(t),n)}}),r=d(s),o=G(r);return function(s,r){return t(ct(function(t){return t?t[n]?t[n].apply(t,i)(s,r):t[a]?t[a](s,r):o(ct(function(n){if(!n.every(vt.defined))return s();if(t[e])return s(t[e].apply(t,n));throw Error("Object has no method "+JSON.stringify(e)+": "+t)}),r):s()}),r)}}}function v(e){return function(t,n){return e(ct(function(e){return t(!e)}),n)}}function y(e,t){return function(n,a){return e(ct(function(e){return e?t(n,a):n(e)}),a)}}function w(e,t){return function(n,a){return e(ct(function(e){return e?n(e):t(n,a)}),a)}}function b(e,t,n){return function(a,s){return e(ct(function(e){return null==e?a():e?t(a,s):n(a,s)}),s)}}function L(e){return function(t,n){return e(ct(function(e){return t(null!=e)}),n)}}function C(e,t){return function(n,a){return e(ct(function(e){return null==e?t(n,a):n(e)}),a)}}function x(e,t){return function(n,a){return e(ct(function(e){function s(t){for(;e.length>t;t++)o[t].index=t}function i(e,n,i){o.swap(i,n.length,e.map(function(e,t){return{index:i+t}})),s(i+e.length);var c,p=[];lt(l.swap(i,n.length,e.map(function(e,n){var s=o[i+n];return t(ct(function(e){c?r.set(s.index,e):p[n]=e}),ft.nest(a,e))}))),c=!0,r.swap(i,n.length,p)}if(!e)return n();var r=[],o=[],l=[],c=H(e,i,a),p=n(r,e)||Function.noop;return pt(function(){p(),lt(l),c()})}),a)}}function M(e,t){var n=x(e,t);return function(e,t){return n(ct(function(n,a){function s(e){for(;n.length>e;e++)l[e+1]=l[e]+n[e]}function i(e,t,n){var i=a.slice(n,n+e.length),o=t.map(Boolean).sum(),c=i.filter(function(t,n){return e[n]}),p=l[n],h=r.slice(p,p+o);(h.length!==c.length||h.every(function(e,t){return e!==c[t]}))&&r.swap(p,o,c),s(p)}if(!a)return e();var r=[],o=[],l=[0],c=H(n,i,t),p=e(r)||Function.noop;return pt(function(){p(),lt(o),c()})}),t)}}function _(e,t){var n=z(t),a=x(e,n),s=function(e,t){return a(ct(function(n){function a(e,t){i.addEach(e),i.deleteEach(t)}if(!n)return e();var s=[],i=dt(s,function(e,t){return Object.equals(e[1],t[1])},function(e,t){return Object.compare(e[1],t[1])}),r=H(n,a,t),o=e(s)||Function.noop;return function(){o(),r()}}),t)};return bt(s,J)}function z(e){return function(t,n){return e(ct(function(e){return t([n.value,e])||Function.noop}),n)}}function S(e){return function(t,n){return e(ct(function(e){function a(e,t,n){var a=s.length-n-t.length;s.swap(a,t.length,e.reversed())}if(!e)return t();var s=[],i=H(e,a,n),r=t(s);return pt(function(){r(),i()})}),n)}}function k(e){return function(t,n){return e(ct(function(e){function a(t){for(var n=t;e.length>n;n++)l[n].index=n,o[n+1]=e[n]?o[n]+e[n].length:o[n]}function s(e,t,s){var c=o[s],p=o[s+t.length],h=p-c;i.swap(c,h,[]),l.swap(s,t.length,e.map(function(){return{index:null}})),a(s),lt(r.swap(s,t.length,e.map(function(e,t){function r(e,t,n){a(c.index);var s=o[c.index]+n,r=o[c.index]+n+t.length,l=r-s;i.swap(s,l,e)}var c=l[s+t];return H(e,r,n)})))}if(!e)return t();var i=[],r=[],o=[0],l=[],c=H(e,s,n),p=t(i)||Function.noop;return pt(function(){p(),lt(r),c()})}),n)}}function E(){return Ct(d(Array.prototype.slice.call(arguments)))}function T(e,t){var n=Lt(e,t),a=l(n,xt);return nt(a,Boolean)}function j(e,t){var n=nt(t,vt.not),a=Lt(e,n),s=l(a,xt);return nt(s,vt.not)}function B(e,t){var n=P(e,t);return Mt(n)}function P(e,t){var n=z(t),a=x(e,n);return function(e,t){return a(ct(function(n,a){function s(e,t){var n=gt();t.forEach(function(e){var t=i.get(e[1]);t["delete"](e[0]),n.add(e[1])}),e.forEach(function(e){i.has(e[1])||i.set(e[1],a.constructClone());var t=i.get(e[1]);t.add(e[0])}),n.forEach(function(e){var t=i.get(e);0===t.length&&i["delete"](e)})}if(!n)return e();var i=ut(),r=H(n,s,t),o=e(i)||Function.noop;return function(){r(),o()}}),t)}}function D(e,t,n){function a(e,t){return Object.compare(e[1],t[1])*n}function s(e,t){return Object.equals(e[1],t[1])}var i=z(t),r=x(e,i);return function(e,t){return r(ct(function(n){function i(e,t){o.addEach(e),o.deleteEach(t)}function r(t,n){return 0===n?t?e(t[0]):e():void 0}if(!n)return e();var o=new mt(null,s,a),l=H(n,i,t),c=K(o,r,t);return function(){l(),c()}}),t)}}function O(e,t){return D(e,t,1)}function A(e,t){return D(e,t,-1)}function I(e){return function(t){return function(n,a){return n=ot(n),t(ct(function(t){if(!t)return n();var s=e(t,n);return H(t,function(e,t,a){return n(s(e,t,a))},a)}),a)}}}function N(e,t,n){return function(a,s){return e(ct(function(e){return e?n(ct(function(n){return null==n?a():t(ct(function(t){function i(a,s,i){var o=a.length-s.length;t>i&&0>o&&n>o?(r.swap(r.length,0,e.slice(t+n+o,t+n)),r.splice(0,-o)):t>i&&o>0&&n>o?(r.swap(0,0,e.slice(t,t+o)),r.splice(r.length-o,o)):i>=t&&0>o&&t+n>i?(r.swap(r.length,0,e.slice(t+n+o,t+n)),r.splice(i-t,-o)):i>=t&&o>0&&t+n>i?(r.swap(i-t,0,e.slice(i,i+o)),r.splice(r.length-o,o)):t+n>i&&r.swap(0,r.length,e.slice(t,t+n))}if(null==t)return a();var r=[],o=H(e,i,s),l=a(r)||Function.noop;return pt(function(){l(),o()})}),s)}),s):a()}),s)}}function q(e){return function(t,n){return e(ct(function(e){function a(e){for(;i.length>e;e++)i[e].set(0,e)}function s(e,t,n){i.swap(n,t.length,e.map(function(e,t){return[n+t,e]})),a(n+e.length)}if(!e)return t();var i=[],r=H(e,s,n),o=t(i)||Function.noop;return function(){o(),r()}}),n)}}function R(e){return function(t,n){var a=[],s=t(a)||Function.noop,i=e(function(e){if(e>>>=0,null==e)a.clear();else if(e>a.length){for(var t=[],n=a.length;e>n;n++)t.push(n);a.swap(a.length,0,t)}else a.length>e&&a.splice(e,a.length)},n);return function(){s(),i()}}}function F(e,t){return function(n,a){return t(function(t){var s=RegExp("^"+RegExp.escape(t));return e(function(e){return n(s.test(e))||Function.noop},a)},a)}}function W(e,t){return function(n,a){return t(function(t){var s=RegExp(RegExp.escape(t)+"$");return e(function(e){return n(s.test(e))||Function.noop},a)},a)}}function U(e,t){return function(n,a){return t(function(t){var s=RegExp(RegExp.escape(t));return e(function(e){return n(s.test(e))||Function.noop},a)},a)}}function H(e,t,n){function a(e,n,a){s(),s=t(e,n,a)||Function.noop}if(e){var s=Function.noop;if(!e.toArray)throw Error("Can't observe range changes on "+e+" because it has no toArray method");if(!e.addRangeChangeListener)throw Error("Can't observe range changes on "+e);a(e.toArray(),[],0);var i=e.addRangeChangeListener(a,n.beforeChange);return pt(function(){s(),i()})}}function G(e){return function(t,n){return e(ct(function(e){return e&&e.addRangeChangeListener?H(e,function(){return t(e)},n):t(e)}),n)}}function Y(e){return function(t,n){return e(ct(function(e){return e&&e.addMapChangeListener?K(e,function(){return t(e)},n):t(e)}),n)}}function K(e,t,n){function a(e,n,a){var i=s.get(n)||Function.noop;i(),i=t(e,n,a)||Function.noop,s.set(n,i)}var s=ut();e.forEach(a);var i=e.addMapChangeListener(a,n.beforeChange);return pt(function(){s.forEach(function(e){e()}),i()})}function V(e){return function(t,n){return e(ct(function(e){return e?X(e,t,n):t()}),n)}}function X(e,t,n){function a(e,t){var n,a;i.has(t)?null==e?(n=i.get(t),i["delete"](t),a=s.indexOf(n),s.splice(a,1)):(n=i.get(t),n.set(1,e)):(n=[t,e],i.set(t,n),s.push(n))}var s=[],i=ut(),r=t(s)||Function.noop,o=K(e,a,n);return pt(function(){r(),o()})}function Z(e){var t=Mt(e);return bt(t,J)}function J(e,t){return t.value?e(t.value[0])||Function.noop:e()}function $(e){var t=Mt(e);return bt(t,Q)}function Q(e,t){return t.value?e(t.value[1])||Function.noop:e()}function et(e){return function(t,n){var a=ut(),s=t(a)||Function.noop,i=e(ct(function(e){if(a.clear(),e&&!e.addRangeChangeListener){var t=Object.keys(e).map(function(t){return yt(e,t,ct(function(e){a.set(t,e)}),n)});return function(){lt(t)}}}),n);return function(){s(),i()}}}function tt(e){return function(t,n){return e(t,n.parent||new ft)}}function nt(e,t,n){return function(a,s){return a=ot(a),e(ct(function(e){return a(t.call(n,e))}),s)}}function at(e,t,n){return function(a,s){return a=ot(a),e(ct(function(e){return e&&e.every(vt.defined)?a(t.apply(n,e)):void 0}),s)}}function st(t,n){var a=e("./parse"),s=e("./compile-observer");return function(e,i){return e=ot(e),n(ct(function(n){if(null==n)return e();var r,o;try{r=a(n),o=s(r)}catch(l){return e()}return t(ct(function(t){return o(e,ft.nest(i,t))}),i)}),i)}}function it(e,t){return function(n,a){return e(ct(function(e){return t(ct(function(e){return n(e)}),ft.nest(a,e))}),a)}}function rt(e){return function(){var t=e.apply(this,arguments);return function(e,n){var a=[],s=t(ct(function(e){function t(e,t,n){a.swap(n,t.length,e)}if(e){_t(a,e);var s=e.addRangeChangeListener(t,n.beforeChange);return pt(s)}a.clear()}),n),i=e(a)||Function.noop;return pt(function(){s(),i()})}}}function ot(e){var t;return function(n){if(n!==t){var a=e.apply(this,arguments);return t=n,a}}}function lt(e){e.forEach(function(e){e&&e()})}function ct(e){var t=Function.noop;return function(){return t(),t=e.apply(this,arguments)||Function.noop,function(){t()}}}function pt(e){var t;return function(){return t?Function.noop:(t=!0,e.apply(this,arguments))}}e("collections/shim");var ht=e("collections/listen/property-changes");e("collections/listen/array-changes");var dt=e("collections/sorted-array"),ut=e("collections/map"),gt=e("collections/set"),mt=e("collections/heap"),ft=e("./scope"),vt=e("./operators");t.makeLiteralObserver=n,t.observeValue=a,t.observeParameters=s,t.makeElementObserver=i,t.makeComponentObserver=r,t.observeProperty=o;var yt=o;t.makePropertyObserver=l,t.observeKey=c,t.observeGet=c;var wt=c;t.makeGetObserver=p,t.makeHasObserver=h,t.makeObserversObserver=d,t.makeRecordObserver=u,t.makeObjectObserver=u,t.makeTupleObserver=g,t.makeArrayObserver=g,t.makeOperatorObserverMaker=m,t.makeMethodObserverMaker=f,t.makeNotObserver=v,t.makeAndObserver=y,t.makeOrObserver=w,t.makeConditionalObserver=b,t.makeDefinedObserver=L,t.makeDefaultObserver=C;var bt=t.makeMapBlockObserver=rt(x),Lt=t.makeFilterBlockObserver=rt(M);t.makeSortedBlockObserver=_,t.makeReversedObserver=rt(S);var Ct=t.makeFlattenObserver=rt(k);t.makeConcatObserver=E,t.makeSomeBlockObserver=T,t.makeEveryBlockObserver=j,t.makeGroupBlockObserver=B,t.makeGroupMapBlockObserver=P,t.makeMaxBlockObserver=O,t.makeMinBlockObserver=A;var xt=n("length");t.makeSumObserver=I(function(){var e=0;return function(t,n){return e+=t.sum()-n.sum()}}),t.makeAverageObserver=I(function(){var e=0,t=0;return function(n,a){return e+=n.sum()-a.sum(),t+=n.length-a.length,e/t}}),t.makeViewObserver=rt(N),t.makeEnumerateObserver=rt(q),t.makeEnumerationObserver=t.makeEnumerateObserver,t.makeRangeObserver=R,t.makeStartsWithObserver=F,t.makeEndsWithObserver=W,t.makeContainsObserver=U,t.observeRangeChange=H,t.makeRangeContentObserver=G,t.makeMapContentObserver=Y,t.observeMapChange=K;var Mt=t.makeItemsObserver=rt(V);t.observeItems=X,t.makeKeysObserver=Z,t.observeItemKey=J,t.makeValuesObserver=$,t.observeItemValue=Q,t.makeToMapObserver=et,t.makeParentObserver=tt,t.makeConverterObserver=nt,t.makeComputerObserver=at,t.makePathObserver=st,t.makeExpressionObserver=st,t.makeWithObserver=it,t.makeAsArrayObserver=rt(Function.identity);var _t=e("./merge").merge;t.makeUniq=ot,t.cancelEach=lt,t.autoCancelPrevious=ct,t.once=pt}});