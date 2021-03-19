'use strict';
(window.rangeJsonpFunction = window.rangeJsonpFunction || []).push([[12], {
  289 : function(vdwB, d, $) {
    /**
     * @param {(Object|string)} error
     * @param {number} data
     * @return {?}
     */
    function initialize(error, data) {
      return function(val) {
        if (Array.isArray(val)) {
          return val;
        }
      }(error) || function(arr, height) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(arr))) {
          return;
        }
        /** @type {!Array} */
        var result = [];
        /** @type {boolean} */
        var _n = true;
        /** @type {boolean} */
        var n = false;
        var r = void 0;
        try {
          var info;
          var __$0 = arr[Symbol.iterator]();
          for (; !(_n = (info = __$0.next()).done) && (result.push(info.value), !height || result.length !== height); _n = true) {
          }
        } catch (G__20648) {
          /** @type {boolean} */
          n = true;
          r = G__20648;
        } finally {
          try {
            if (!(_n || null == __$0.return)) {
              __$0.return();
            }
          } finally {
            if (n) {
              throw r;
            }
          }
        }
        return result;
      }(error, data) || function(e, u) {
        if (!e) {
          return;
        }
        if ("string" == typeof e) {
          return x(e, u);
        }
        /** @type {string} */
        var k = Object.prototype.toString.call(e).slice(8, -1);
        if ("Object" === k && e.constructor) {
          k = e.constructor.name;
        }
        if ("Map" === k || "Set" === k) {
          return Array.from(e);
        }
        if ("Arguments" === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) {
          return x(e, u);
        }
      }(error, data) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }
    /**
     * @param {!Array} p
     * @param {number} i
     * @return {?}
     */
    function x(p, i) {
      if (null == i || i > p.length) {
        i = p.length;
      }
      /** @type {number} */
      var k = 0;
      /** @type {!Array} */
      var l = new Array(i);
      for (; k < i; k++) {
        l[k] = p[k];
      }
      return l;
    }
    /**
     * @param {string} type
     * @return {?}
     */
    function build(type) {
      return (build = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(type) {
        return typeof type;
      } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(type);
    }
    /**
     * @param {!AudioNode} params
     * @param {!Function} action
     * @return {undefined}
     */
    function print(params, action) {
      if (!(params instanceof action)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {!Object} target
     * @param {number} props
     * @return {undefined}
     */
    function defineProperties(target, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    /**
     * @param {!Function} x
     * @param {!Object} obj
     * @return {?}
     */
    function generate(x, obj) {
      return (generate = Object.setPrototypeOf || function(origin, proto) {
        return origin.__proto__ = proto, origin;
      })(x, obj);
    }
    /**
     * @param {!Array} value
     * @return {?}
     */
    function main(value) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if ("function" == typeof Proxy) {
          return true;
        }
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (e) {
          return false;
        }
      }();
      return function() {
        var source;
        var target = setPrototypeOf(value);
        if (t) {
          var ctor = setPrototypeOf(this).constructor;
          source = Reflect.construct(target, arguments, ctor);
        } else {
          source = target.apply(this, arguments);
        }
        return compile(this, source);
      };
    }
    /**
     * @param {!Array} name
     * @param {string} o
     * @return {?}
     */
    function compile(name, o) {
      return !o || "object" !== build(o) && "function" != typeof o ? function(data) {
        if (void 0 === data) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return data;
      }(name) : o;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function setPrototypeOf(obj) {
      return (setPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(obj);
    }
    /**
     * @param {!NodeList} e
     * @param {number} p
     * @return {?}
     */
    function forEachTouch(e, p) {
      if (null == p || p > e.length) {
        p = e.length;
      }
      /** @type {number} */
      var i = 0;
      /** @type {!Array} */
      var l = new Array(p);
      for (; i < p; i++) {
        l[i] = e[i];
      }
      return l;
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function get(name) {
      return (get = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(name1) {
        return typeof name1;
      } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(name);
    }
    /**
     * @param {!Object} data
     * @param {!Function} t
     * @param {!Function} f
     * @param {!Function} fn
     * @param {!Function} a
     * @param {string} action
     * @param {!Object} params
     * @return {?}
     */
    function update(data, t, f, fn, a, action, params) {
      try {
        var info = data[action](params);
        var path = info.value;
      } catch (passedValue1) {
        return void f(passedValue1);
      }
      if (info.done) {
        t(path);
      } else {
        Promise.resolve(path).then(fn, a);
      }
    }
    /**
     * @param {!Object} d
     * @param {number} props
     * @return {undefined}
     */
    function t(d, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(d, descriptor.key, descriptor);
      }
    }
    /**
     * @param {!Function} dir
     * @param {!Object} fn
     * @return {?}
     */
    function mkdirs(dir, fn) {
      return (mkdirs = Object.setPrototypeOf || function(origin, proto) {
        return origin.__proto__ = proto, origin;
      })(dir, fn);
    }
    /**
     * @param {!Array} value
     * @return {?}
     */
    function test(value) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if ("function" == typeof Proxy) {
          return true;
        }
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (e) {
          return false;
        }
      }();
      return function() {
        var ret;
        var target = clone(value);
        if (t) {
          var ctor = clone(this).constructor;
          ret = Reflect.construct(target, arguments, ctor);
        } else {
          ret = target.apply(this, arguments);
        }
        return post(this, ret);
      };
    }
    /**
     * @param {undefined} host
     * @param {string} a
     * @return {?}
     */
    function post(host, a) {
      return !a || "object" !== get(a) && "function" != typeof a ? validate(host) : a;
    }
    /**
     * @param {number} res
     * @return {?}
     */
    function validate(res) {
      if (void 0 === res) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return res;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function clone(obj) {
      return (clone = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(obj);
    }
    /**
     * @param {string} obj
     * @return {?}
     */
    function type(obj) {
      return (type = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(_chai) {
        return typeof _chai;
      } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(obj);
    }
    /**
     * @return {?}
     */
    function merge() {
      return (merge = Object.assign || function(result) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var para = arguments[i];
          var k;
          for (k in para) {
            if (Object.prototype.hasOwnProperty.call(para, k)) {
              result[k] = para[k];
            }
          }
        }
        return result;
      }).apply(this, arguments);
    }
    /**
     * @param {!AudioNode} error
     * @param {!Function} t
     * @return {undefined}
     */
    function c(error, t) {
      if (!(error instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    /**
     * @param {!Object} val
     * @param {number} props
     * @return {undefined}
     */
    function e(val, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(val, descriptor.key, descriptor);
      }
    }
    /**
     * @param {!Function} text
     * @param {!Object} obj
     * @return {?}
     */
    function _log(text, obj) {
      return (_log = Object.setPrototypeOf || function(origin, proto) {
        return origin.__proto__ = proto, origin;
      })(text, obj);
    }
    /**
     * @param {!Array} e
     * @return {?}
     */
    function fn(e) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if ("function" == typeof Proxy) {
          return true;
        }
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (e) {
          return false;
        }
      }();
      return function() {
        var keys;
        var fn = resolve(e);
        if (t) {
          var ctor = resolve(this).constructor;
          keys = Reflect.construct(fn, arguments, ctor);
        } else {
          keys = fn.apply(this, arguments);
        }
        return func(this, keys);
      };
    }
    /**
     * @param {!Array} current
     * @param {string} a
     * @return {?}
     */
    function func(current, a) {
      return !a || "object" !== type(a) && "function" != typeof a ? function(val) {
        if (void 0 === val) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return val;
      }(current) : a;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function resolve(obj) {
      return (resolve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(obj);
    }
    /**
     * @param {string} type
     * @return {?}
     */
    function bind(type) {
      return (bind = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(type) {
        return typeof type;
      } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(type);
    }
    /**
     * @param {!Object} event
     * @param {number} text
     * @return {undefined}
     */
    function n(event, text) {
      /** @type {number} */
      var i = 0;
      for (; i < text.length; i++) {
        var descriptor = text[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(event, descriptor.key, descriptor);
      }
    }
    /**
     * @param {!Function} el
     * @param {!Object} obj
     * @return {?}
     */
    function contains(el, obj) {
      return (contains = Object.setPrototypeOf || function(origin, proto) {
        return origin.__proto__ = proto, origin;
      })(el, obj);
    }
    /**
     * @param {!Array} x
     * @return {?}
     */
    function init(x) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if ("function" == typeof Proxy) {
          return true;
        }
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (e) {
          return false;
        }
      }();
      return function() {
        var res;
        var value = createElement(x);
        if (t) {
          var ctor = createElement(this).constructor;
          res = Reflect.construct(value, arguments, ctor);
        } else {
          res = value.apply(this, arguments);
        }
        return loop(this, res);
      };
    }
    /**
     * @param {undefined} self
     * @param {string} o
     * @return {?}
     */
    function loop(self, o) {
      return !o || "object" !== bind(o) && "function" != typeof o ? log(self) : o;
    }
    /**
     * @param {number} n
     * @return {?}
     */
    function log(n) {
      if (void 0 === n) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return n;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function createElement(obj) {
      return (createElement = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(obj);
    }
    /**
     * @param {!Object} o
     * @param {boolean} stack
     * @return {?}
     */
    function parse(o, stack) {
      /** @type {!Array<string>} */
      var r = Object.keys(o);
      if (Object.getOwnPropertySymbols) {
        /** @type {!Array<?>} */
        var neighbors = Object.getOwnPropertySymbols(o);
        if (stack) {
          /** @type {!Array<?>} */
          neighbors = neighbors.filter(function(key) {
            return Object.getOwnPropertyDescriptor(o, key).enumerable;
          });
        }
        r.push.apply(r, neighbors);
      }
      return r;
    }
    /**
     * @param {!Object} target
     * @return {?}
     */
    function extend(target) {
      /** @type {number} */
      var i = 1;
      for (; i < arguments.length; i++) {
        var properties = null != arguments[i] ? arguments[i] : {};
        if (i % 2) {
          parse(Object(properties), true).forEach(function(key) {
            setProperty(target, key, properties[key]);
          });
        } else {
          if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(properties));
          } else {
            parse(Object(properties)).forEach(function(prop) {
              Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(properties, prop));
            });
          }
        }
      }
      return target;
    }
    /**
     * @param {!Object} obj
     * @param {string} key
     * @param {string} value
     * @return {?}
     */
    function setProperty(obj, key, value) {
      return key in obj ? Object.defineProperty(obj, key, {
        value : value,
        enumerable : true,
        configurable : true,
        writable : true
      }) : obj[key] = value, obj;
    }
    /**
     * @param {string} expr
     * @return {?}
     */
    function stringify(expr) {
      return (stringify = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(expr) {
        return typeof expr;
      } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(expr);
    }
    /**
     * @param {!Object} type
     * @param {!Function} next
     * @param {!Function} op
     * @param {!Function} f
     * @param {!Function} d
     * @param {string} key
     * @param {!Object} val
     * @return {?}
     */
    function insert(type, next, op, f, d, key, val) {
      try {
        var info = type[key](val);
        var output = info.value;
      } catch (win) {
        return void op(win);
      }
      if (info.done) {
        next(output);
      } else {
        Promise.resolve(output).then(f, d);
      }
    }
    /**
     * @param {!Object} val
     * @param {number} props
     * @return {undefined}
     */
    function defineProperty(val, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(val, descriptor.key, descriptor);
      }
    }
    /**
     * @param {!Function} e
     * @param {!Object} obj
     * @return {?}
     */
    function action(e, obj) {
      return (action = Object.setPrototypeOf || function(origin, proto) {
        return origin.__proto__ = proto, origin;
      })(e, obj);
    }
    /**
     * @param {!Array} name
     * @return {?}
     */
    function wrap(name) {
      var t = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if ("function" == typeof Proxy) {
          return true;
        }
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (e) {
          return false;
        }
      }();
      return function() {
        var i;
        var C = wrapper(name);
        if (t) {
          var ctor = wrapper(this).constructor;
          i = Reflect.construct(C, arguments, ctor);
        } else {
          i = C.apply(this, arguments);
        }
        return on(this, i);
      };
    }
    /**
     * @param {undefined} type
     * @param {string} o
     * @return {?}
     */
    function on(type, o) {
      return !o || "object" !== stringify(o) && "function" != typeof o ? keys(type) : o;
    }
    /**
     * @param {number} keys
     * @return {?}
     */
    function keys(keys) {
      if (void 0 === keys) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return keys;
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function wrapper(obj) {
      return (wrapper = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(obj);
    }
    $.r(d);
    var opt = $(1);
    var left = $(77);
    var clone2 = $.n(left);
    var els = $(27);
    var target = $.n(els);
    var root = $(0);
    var i = $(264);
    var r = $.n(i);
    var domain = $(140);
    var operator = $(320);
    var async = $.n(operator);
    var script = $(321);
    var require = $.n(script);
    var tablesongs = $(266);
    var getTime = $.n(tablesongs);
    /**
     * @param {!Date} key
     * @return {?}
     */
    var createStore = function(key) {
      var row = {
        customDateFormat : "d mmm, yyyy",
        customStockCheckDateFormat : "dd.mm.yyyy",
        customStockCheckTimeFormat : "HH:MM",
        customTimeFormat : "HH:MM",
        translations : {
          dayNames : ["ned", "pon", "uto", "sre", "\u00c4\u008det", "pet", "sub", "nedelja", "ponedeljak", "utorak", "sreda", "\u00c4\u008detvrtak", "petak", "subota"],
          monthNames : ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec", "januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
          timeNames : ["pre podne", "po podne"]
        }
      };
      var yyyy = row && row.customStockCheckDateFormat ? getTime()({
        date : key,
        langConfig : row.translations,
        format : row.customStockCheckDateFormat
      }) : (new Intl.DateTimeFormat("sr-RS", {
        day : "numeric",
        month : "long",
        year : "numeric"
      })).format(key);
      var newNodeLists = row && row.customStockCheckTimeFormat ? getTime()({
        date : key,
        langConfig : row.translations,
        format : row.customStockCheckTimeFormat
      }) : (new Intl.DateTimeFormat("sr-RS", {
        hour : "2-digit",
        minute : "2-digit"
      })).format(key);
      return "".concat(yyyy, " ").concat(newNodeLists);
    };
    /**
     * @param {?} e
     * @param {?} fn
     * @param {?} name
     * @param {?} that
     * @param {?} file
     * @param {?} res
     * @return {?}
     */
    var check = function(e, fn, name, that, file, res) {
      return async()(e, fn, res).then(function(first) {
        var f = require()(e, name, fn, that, file);
        /** @type {!Date} */
        var client = new Date(Date.parse(first.headers.get("Last-Modified")));
        return {
          stockDetailInformation : f(first.body),
          updatedAt : createStore(client)
        };
      }).then(save).catch(function() {
        return {
          parseAvailabilityError : true
        };
      });
    };
    /**
     * @param {string} p
     * @return {?}
     */
    var save = function(p) {
      var ns = p && p.stockDetailInformation.outOfStock;
      var l = p && p.stockDetailInformation.inStockProbability;
      var a = !p || p.parseAvailabilityError;
      return {
        outOfStock : ns,
        inStockProbability : l,
        isAvailableByOrderInStore : p && p.stockDetailInformation.isAvailableByOrderInStore,
        notSoldInStore : (!p.stockDetailInformation.isInStockRange || 3 === p.stockDetailInformation.salesMethodCode || p.stockDetailInformation.items && p.stockDetailInformation.items.filter(function(dna) {
          return "STORE" !== dna.stockType;
        }).length > 0) && !p.stockDetailInformation.isAvailableByOrderInStore,
        parseAvailabilityError : a,
        stockDetailInformation : p.stockDetailInformation,
        productCount : p.stockDetailInformation.stock,
        updatedAt : p.updatedAt
      };
    };
    var itemData = $(139);
    var node = $.n(itemData);
    var fields_to_add = $(75);
    var insertAd = $.n(fields_to_add);
    /**
     * @param {!Object} args
     * @return {?}
     */
    var render = function(args) {
      var options = args.currentStore;
      var onClick = args.onClick;
      var result = args.productAvailability;
      var key = args.allStores;
      var url = void 0 === key ? [] : key;
      var name = args.itemName;
      var title = result.inStockProbability;
      var data = result.outOfStock;
      var x = result.notSoldInStore;
      var y = result.isAvailableByOrderInStore;
      var zoom = result.productCount;
      var now = result.updatedAt;
      var r = result.parseAvailabilityError;
      var finalScale = {
        productCount : zoom,
        productName : name,
        storeName : options.name,
        updatedAt : now
      };
      var menuCloseButton = zoom > 1 ? insertAd()("{productCount} {productName} su na stanju u robnoj ku\u00c4\u2021i IKEA {storeName} ({updatedAt}).", finalScale) : insertAd()("{productCount} {productName} je na stanju u robnoj ku\u00c4\u2021i IKEA {storeName} ({updatedAt}).", finalScale);
      var label = function(store, field, permissionTable, l, tag, ll) {
        var d = {
          HIGH : insertAd()("Na stanju u robnoj ku\u00c4\u2021i IKEA {storeName}", {
            storeName : store
          }),
          MEDIUM : insertAd()("Niske zalihe u robnoj ku\u00c4\u2021i IKEA {storeName}", {
            storeName : store
          }),
          LOW : insertAd()("Vrlo niske zalihe u robnoj ku\u00c4\u2021i IKEA {storeName}", {
            storeName : store
          })
        };
        return permissionTable ? insertAd()("Nema na stanju u robnoj ku\u00c4\u2021i IKEA {storeName}", {
          storeName : store
        }) : ll ? insertAd()("Informacija o zalihama nije dostupna. Molimo te poku\u00c5\u00a1aj ponovo.", {
          storeName : store
        }) : l ? insertAd()("Ne prodaje se u {storeName}", {
          storeName : store
        }) : tag ? insertAd()("Nije dostupno u {storeName}", {
          storeName : store
        }) : d[field];
      }(options.name, title, data, x, y, r);
      var id = function(app, section_op, comment_op, tag_op) {
        /** @type {string} */
        var mod = "--warning";
        return section_op || comment_op || tag_op ? mod = "--error" : "HIGH" === app && (mod = "--success"), mod;
      }(title, data, x, y);
      return root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__header")
      }, root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__header-wrapper")
      }, root.default.createElement("h2", {
        className : "".concat("range-revamp-", "store-info__header-text")
      }, label), root.default.createElement("span", {
        className : "".concat("range-revamp-", "store-info__status-indicator\n        ").concat("range-revamp-", "store-info__status-indicator").concat(id)
      })), zoom > 0 && root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__message")
      }, root.default.createElement("span", {
        className : "".concat("range-revamp-", "store-info__quantity")
      }, menuCloseButton)), url.length > 1 && root.default.createElement(node.a, {
        prefix : "range-revamp-",
        className : "".concat("range-revamp-", "store-info__header-button"),
        htmlType : "button",
        type : "secondary",
        text : "Proveri u drugim robnim ku\u00c4\u2021ama IKEA",
        small : true,
        fluid : true,
        onClick : onClick
      }));
    };
    var permissions = $(16);
    var p = $.n(permissions);
    var s = $(322);
    var o = $.n(s);
    /**
     * @return {?}
     */
    var view = function() {
      return root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__section")
      }, root.default.createElement(p.a, {
        prefix : "range-revamp-",
        paths : o.a,
        className : "".concat("range-revamp-", "stockcheck__icon")
      }), root.default.createElement("h4", {
        className : "".concat("range-revamp-", "store-info__click-collect-header")
      }, "Click & collect"), root.default.createElement("p", {
        className : "".concat("range-revamp-", "store-info__click-collect-text")
      }, "Vreme je dragoceno, zato imamo predlog za tebe! Poru\u00c4\u008di \u00c5\u00beeljene proizvode u onlajn prodavnici i preuzmi ih u robnoj ku\u00c4\u2021i ili centru za isporuku po izboru."), root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__section-status")
      }, root.default.createElement("span", {
        className : "".concat("range-revamp-", "store-info__status-indicator\n        ").concat("range-revamp-", "store-info__click-collect\n        ").concat("range-revamp-", "store-info__status-indicator--success")
      }), root.default.createElement("span", {
        className : "".concat("range-revamp-", "store-info__click-collect-status")
      }, "Dostupno za Click & Collect")));
    };
    var tile = $(274);
    var categorizeConnection = $.n(tile);
    var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__ = $(323);
    var __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default = $.n(__WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes__);
    var value = $(325);
    var cb = $.n(value);
    var url = $(278);
    var projInfo = $.n(url);
    /**
     * @param {!Object} result
     * @return {?}
     */
    var link = function(result) {
      var name = result.itemName;
      var body = result.typeName;
      var value = result.pickupLocation;
      var inner = result.quantity;
      var courseSections = result.formattedItemNo;
      var token = result.isSelfPickup;
      var resultContent = result.salesMethodCode;
      return root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__available-stock-item")
      }, root.default.createElement("p", {
        className : "".concat("range-revamp-", "store-info__product-header notranslate")
      }, inner, root.default.createElement("span", {
        dir : "ltr"
      }, " x "), name), root.default.createElement("span", {
        className : "".concat("range-revamp-", "store-info__label")
      }, body), root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__label-wrapper")
      }, root.default.createElement(projInfo.a, {
        prefix : "range-revamp-",
        label : "Broj artikla",
        value : courseSections
      }), token && value && root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__label-right")
      }, root.default.createElement(projInfo.a, {
        prefix : "range-revamp-",
        label : "Red",
        value : value.aisle
      }), root.default.createElement(projInfo.a, {
        prefix : "range-revamp-",
        label : "Deo",
        value : value.shelf
      }))), !token && root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__text")
      }, function(string, name) {
        var PHPCI_STRINGS = {
          0 : insertAd()("Proizvod je dostupan na odeljenju {location}", {
            location : name
          }),
          1 : null,
          2 : "Kontaktiraj zaposlene u robnoj ku\u00c4\u2021i za informacije o kupovini.",
          3 : "Ovaj artikal je mogu\u00c4\u2021e naru\u00c4\u008diti."
        };
        return 0 === string && null === name ? PHPCI_STRINGS[2] : PHPCI_STRINGS[string];
      }(resultContent, value)));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    var move = function(e) {
      var k = cb()(e)("recommendedSalesLocation", "aisle") || null;
      var d = cb()(e)("recommendedSalesLocation", "bin") || null;
      return k && d ? {
        aisle : k,
        shelf : d
      } : e.recommendedSalesLocation ? e.recommendedSalesLocation : null;
    };
    /**
     * @param {!Object} tag
     * @return {?}
     */
    var start = function(tag) {
      var item = tag.item;
      var updatedAt = tag.updatedAt;
      var data = {
        formattedItemNo : __WEBPACK_IMPORTED_MODULE_17_date_fns_difference_in_minutes___default()("".concat(item.itemNo)),
        isSelfPickup : 1 === item.salesMethodCode,
        pickupLocation : move(item),
        updatedAt : updatedAt,
        quantity : item.quantity,
        itemName : item.itemName,
        typeName : item.typeName,
        salesMethodCode : item.salesMethodCode
      };
      return root.default.createElement(link, data);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    var getElements = function(component) {
      var doc = component.productAvailability;
      var options = component.currentStore;
      var toc = doc.stockDetailInformation;
      var updatedAt = doc.updatedAt;
      var menuCloseButton = categorizeConnection()("Prona\u00c4\u2018i u robnoj ku\u00c4\u2021i IKEA {storeName}.", {
        storeName : options.name
      });
      return root.default.createElement("div", null, root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__section")
      }, root.default.createElement("h4", {
        className : "".concat("range-revamp-", "store-info__section-header")
      }, menuCloseButton), toc.items.map(function(branch_name, awsKey) {
        return root.default.createElement(start, {
          key : awsKey,
          item : branch_name,
          updatedAt : updatedAt
        });
      })), root.default.createElement("div", {
        "x-ms-format-detection" : "none",
        className : "".concat("range-revamp-", "store-info__bottom")
      }, root.default.createElement("p", {
        className : "".concat("range-revamp-", "store-info__bottom-text")
      }, "Stanje zaliha prikazano na internet stranici mo\u00c5\u00bee se razlikovati od stanja zaliha u robnoj ku\u00c4\u2021i. Ta\u00c4\u008dno stanje zaliha mo\u00c5\u00bee se utvrditi isklju\u00c4\u008divo u robnoj ku\u00c4\u2021i.\n\nCene proizvoda na internet stranici mogu se razlikovati od cena u robnoj ku\u00c4\u2021i. Va\u00c5\u00bee\u00c4\u2021a cena istaknuta je na etiketi sa cenom u robnoj ku\u00c4\u2021i. Za vi\u00c5\u00a1e informacija kontaktiraj sa zaposlenima.")));
    };
    var options = $(83);
    /**
     * @param {?} index
     * @return {?}
     */
    var Component = function(index) {
      var config = index.productAvailability;
      var options = config.stockDetailInformation;
      var number = config.updatedAt;
      var part2 = options.restockDates ? function(settings) {
        var widgetArr = initialize(settings.restockDates, 2);
        var _maskLayer = widgetArr[0];
        var menuCloseButton = widgetArr[1];
        return root.default.createElement(options.a, {
          message : "O\u00c4\u008dekujemo da \u00c4\u2021e proizvod ponovo biti na stanju izme\u00c4\u2018u {fromDate} i {toDate}.",
          values : {
            fromDate : root.default.createElement("span", {
              className : "".concat("range-revamp-", "store-info__section--bold")
            }, _maskLayer),
            toDate : root.default.createElement("span", {
              className : "".concat("range-revamp-", "store-info__section--bold")
            }, menuCloseButton)
          }
        });
      }(options) : "";
      var label = function(date) {
        return root.default.createElement(options.a, {
          message : "Poslednji put provereno: {updatedAt}.",
          values : {
            updatedAt : date
          }
        });
      }(number);
      return root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__bottom")
      }, root.default.createElement("h4", {
        className : "".concat("range-revamp-", "store-info__section-header")
      }, "\u00c5\u00bdao nam je, ovaj proizvod nije na stanju"), root.default.createElement("p", {
        className : "".concat("range-revamp-", "store-info__section-text")
      }, part2), root.default.createElement("p", {
        className : "".concat("range-revamp-", "store-info__section-updated-at")
      }, label));
    };
    /**
     * @return {?}
     */
    var Panel = function() {
      return root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__bottom")
      }, root.default.createElement("h4", {
        className : "".concat("range-revamp-", "store-info__section-header")
      }, "\u00c5\u00bdao nam je, ovaj proizvod ne prodajemo ovde"), root.default.createElement("p", {
        className : "".concat("range-revamp-", "store-info__section-text")
      }, ""));
    };
    /**
     * @return {?}
     */
    var List = function() {
      return root.default.createElement("div", {
        className : "".concat("range-revamp-", "store-info__bottom")
      }, root.default.createElement("h4", {
        className : "".concat("range-revamp-", "store-info__section-header")
      }, "\u00c5\u00bdao nam je, ovaj proizvod nije dostupan ovde"), root.default.createElement("p", {
        className : "".concat("range-revamp-", "store-info__section-text")
      }, "Ali ga mo\u00c5\u00bee\u00c5\u00a1 naru\u00c4\u008diti onlajn ili ti mi mo\u00c5\u00beemo pomo\u00c4\u2021i da ga naru\u00c4\u008di\u00c5\u00a1 ako nas poseti\u00c5\u00a1 u robnoj ku\u00c4\u2021i."));
    };
    var button2 = $(270);
    var button = $.n(button2);
    var m = $(326);
    var _tabBodyNode = $.n(m);
    var opts = $(330);
    var matchedWorker = $.n(opts);
    var DropIndicator = function(_WebInspector$GeneralTreeElement) {
      /**
       * @return {?}
       */
      function name() {
        return print(this, name), change.apply(this, arguments);
      }
      !function(data, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function");
        }
        /** @type {!Object} */
        data.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : data,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          generate(data, superClass);
        }
      }(name, _WebInspector$GeneralTreeElement);
      var Constructor;
      var protoProps;
      var staticProps;
      var change = main(name);
      return Constructor = name, (protoProps = [{
        key : "render",
        value : function() {
          var $ = this;
          var _props2 = this.props;
          var menuCloseButton = _props2.name;
          var completed = _props2.isSelected;
          var onChange = _props2.onChange;
          return this.radio && (this.radio.radiobutton.checked = completed), root.default.createElement("label", {
            className : "".concat("range-revamp-", "radio-button")
          }, root.default.createElement("span", {
            className : "".concat("range-revamp-", "radio-button__text")
          }, menuCloseButton), root.default.createElement(matchedWorker.a, {
            ref : function(type) {
              /** @type {number} */
              $.radio = type;
            },
            prefix : "range-revamp-",
            label : "",
            checked : completed,
            onChange : onChange
          }));
        }
      }]) && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), name;
    }(root.default.Component);
    var date = $(276);
    var holiday = $.n(date);
    var data = $(22);
    var myDoughnutChart = $.n(data);
    /**
     * @param {!Object} options
     * @return {?}
     */
    var display = function(options) {
      return {
        classUnitCode : options.storeId,
        classUnitType : "sto",
        contactDetails : {
          contactMethodData : options.contactMethodData,
          contactMethodType : options.contactMethodType.toLowerCase(),
          verificationStatusCode : "notVerified"
        },
        countryCode : options.countryCode,
        itemNo : options.itemNo,
        itemType : options.itemType.toLowerCase(),
        languageCode : options.languageCode,
        subscriptionType : "backInStock"
      };
    };
    /**
     * @param {?} data
     * @return {?}
     */
    var next = function(data) {
      return fetch("https://api.ingka.ikea.com/customer-support/subscription/back-in-stock", {
        method : "POST",
        body : JSON.stringify(data),
        headers : {
          "Content-Type" : "application/json",
          "X-Client-Secret" : "qI5sO2nL0rX3wW7hT1rV0vU2jX2pC6iP5iF2oC8mD6eB2bQ4dW",
          "X-Client-Id" : "cd3995dd-f684-4a88-b911-44555698bb2f"
        }
      }).then(function(response) {
        return response.ok ? response : Promise.reject(response);
      });
    };
    /**
     * @return {?}
     */
    var getObject = function() {
      var data = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var instrumented = display({
        storeId : data.storeId,
        contactMethodData : data.contactMethodData,
        contactMethodType : data.contactMethodType,
        countryCode : data.countryCode,
        itemNo : data.itemNo,
        itemType : data.itemType,
        languageCode : data.languageCode
      });
      return next(instrumented);
    };
    var result;
    var inactiveactivenotetext;
    /** @type {!Array<string>} */
    var BIGGER_EQUAL = "rs/sr".split("/");
    var languages = (inactiveactivenotetext = 2, function(featureExtractorOrArray) {
      if (Array.isArray(featureExtractorOrArray)) {
        return featureExtractorOrArray;
      }
    }(result = BIGGER_EQUAL) || function(arr, text) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
        /** @type {!Array} */
        var prev = [];
        /** @type {boolean} */
        var _n = true;
        /** @type {boolean} */
        var n = false;
        var r = void 0;
        try {
          var next;
          var __$0 = arr[Symbol.iterator]();
          for (; !(_n = (next = __$0.next()).done) && (prev.push(next.value), !text || prev.length !== text); _n = true) {
          }
        } catch (G__20648) {
          /** @type {boolean} */
          n = true;
          r = G__20648;
        } finally {
          try {
            if (!(_n || null == __$0.return)) {
              __$0.return();
            }
          } finally {
            if (n) {
              throw r;
            }
          }
        }
        return prev;
      }
    }(result, inactiveactivenotetext) || function(e, text) {
      if (e) {
        if ("string" == typeof e) {
          return forEachTouch(e, text);
        }
        /** @type {string} */
        var k = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === k && e.constructor && (k = e.constructor.name), "Map" === k || "Set" === k ? Array.from(e) : "Arguments" === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k) ? forEachTouch(e, text) : void 0;
      }
    }(result, inactiveactivenotetext) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }());
    var language = languages[0];
    var languageCode = languages[1];
    /** @type {!RegExp} */
    var negativeRegex = new RegExp([/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@/, /((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/].map(function(pOne) {
      return pOne.source;
    }).join(""));
    /**
     * @param {number} array
     * @return {?}
     */
    var end = function(array) {
      return new Promise(function(drop, compile) {
        var url;
        return (url = array, negativeRegex.test(String(url).toLowerCase())) ? drop(array) : compile(array);
      });
    };
    /**
     * @param {?} val
     * @return {?}
     */
    var open = function(val) {
      return new Promise(function(confirmNumber, obtainGETData) {
        $.e(14).then(function(n) {
          var DOval = $(407).parsePhoneNumberFromString;
          if (!DOval) {
            return obtainGETData(val);
          }
          var provisionMessage = DOval(val, language.toUpperCase());
          return !provisionMessage || !provisionMessage.isValid() ? obtainGETData(val) : confirmNumber(provisionMessage.number);
        }.bind(null, $)).catch($.oe);
      });
    };
    /**
     * @param {!Object} model
     * @return {?}
     */
    var query = function(model) {
      var collisionMode = model.itemNo;
      var type = model.itemType;
      var storeId = model.storeId;
      var data = model.notificationInput;
      var start = model.selectedNotificationOption;
      return ("SMS" === start ? open : end)(data).then(function(canCreateDiscussions) {
        var item = {
          storeId : storeId,
          contactMethodData : canCreateDiscussions,
          contactMethodType : start,
          countryCode : language.toUpperCase(),
          itemNo : collisionMode,
          itemType : type,
          languageCode : languageCode
        };
        return getObject(item).then(function() {
          return {
            success : true,
            validationError : false,
            serverError : false
          };
        }).catch(function() {
          return {
            success : false,
            validationError : false,
            serverError : true
          };
        });
      }).catch(function() {
        return {
          success : false,
          validationError : true,
          serverError : false
        };
      });
    };
    /** @type {string} */
    var tag = "EMAIL";
    /** @type {string} */
    var currentPageNumber = "SMS";
    var SettingsIcon = function(_WebInspector$GeneralTreeElement) {
      /**
       * @param {?} attrs
       * @return {?}
       */
      function match(attrs) {
        var element;
        return function(value, s) {
          if (!(value instanceof s)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, match), (element = data.call(this, attrs)).state = {
          currentNotificationMedia : tag,
          inputValue : "",
          smsInputValue : "",
          emailInputValue : "",
          waiting : false,
          acceptedPolicy : false,
          success : false,
          serverError : false,
          validationError : false,
          formSubmitted : false
        }, element.handleTextInput = element.handleTextInput.bind(validate(element)), element.setNotificationMedia = element.setNotificationMedia.bind(validate(element)), element;
      }
      !function(p, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function");
        }
        /** @type {!Object} */
        p.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : p,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          mkdirs(p, superClass);
        }
      }(match, _WebInspector$GeneralTreeElement);
      var p;
      var selector;
      var a;
      var word;
      var fn;
      var data = test(match);
      return p = match, (selector = [{
        key : "componentDidMount",
        value : function() {
          this.setState({
            inputValue : ""
          });
        }
      }, {
        key : "setNotificationMedia",
        value : function(type) {
          if (type === currentPageNumber) {
            this.setState({
              emailInputValue : this.state.inputValue
            });
          } else {
            this.setState({
              smsInputValue : this.state.inputValue
            });
          }
          this.setState({
            currentNotificationMedia : type,
            inputValue : type === tag ? this.state.emailInputValue : this.state.smsInputValue
          });
          this.removeInvalid();
        }
      }, {
        key : "getValidationErrorMessage",
        value : function(label) {
          return label === currentPageNumber ? "Molimo te unesi va\u00c5\u00bee\u00c4\u2021i broj telefona" : "Molimo te unesi va\u00c5\u00bee\u00c4\u2021u imejl adresu";
        }
      }, {
        key : "submitRegistrationRequest",
        value : (word = regeneratorRuntime.mark(function init() {
          var storeConfig;
          var result;
          return regeneratorRuntime.wrap(function(_context) {
            for (;;) {
              switch(_context.prev = _context.next) {
                case 0:
                  return this.setState({
                    success : false,
                    validationError : false,
                    serverError : false,
                    waiting : true,
                    formSubmitted : true
                  }), storeConfig = {
                    storeId : this.props.currentStore.value,
                    itemType : this.props.itemType,
                    itemNo : this.props.itemNo,
                    notificationInput : this.state.inputValue,
                    selectedNotificationOption : this.state.currentNotificationMedia
                  }, _context.next = 4, query(storeConfig);
                case 4:
                  result = _context.sent;
                  this.setState({
                    waiting : false,
                    success : result.success,
                    validationError : result.validationError,
                    serverError : result.serverError
                  });
                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, init, this);
        }), fn = function() {
          var e = this;
          /** @type {!Arguments} */
          var t = arguments;
          return new Promise(function(oldVal, url) {
            /**
             * @param {!Object} cb
             * @return {undefined}
             */
            function callback(cb) {
              update(m, oldVal, url, callback, f, "next", cb);
            }
            /**
             * @param {!Object} cb
             * @return {undefined}
             */
            function f(cb) {
              update(m, oldVal, url, callback, f, "throw", cb);
            }
            var m = word.apply(e, t);
            callback(void 0);
          });
        }, function() {
          return fn.apply(this, arguments);
        })
      }, {
        key : "onCheckBoxClicked",
        value : function(n) {
          this.setState({
            acceptedPolicy : n.target.checked
          });
        }
      }, {
        key : "checkEnableButton",
        value : function(c, p, f) {
          return c && "" !== p && f;
        }
      }, {
        key : "removeInvalid",
        value : function() {
          this.setState({
            validationError : false
          });
        }
      }, {
        key : "handleTextInput",
        value : function(values) {
          var me = values.target;
          this.setState({
            inputValue : me.value
          });
          this.removeInvalid();
        }
      }, {
        key : "showErrorPopup",
        value : function() {
          var self = this;
          Promise.all([$.e(0), $.e(4)]).then($.bind(null, 146)).then(function() {
            target.a.openPopup([], {
              title : "Do\u00c5\u00a1lo je do gre\u00c5\u00a1ke",
              text : "Trenutno ne mo\u00c5\u00beemo da pristupimo na\u00c5\u00a1em serveru. Molimo te poku\u00c5\u00a1aj ponovo kroz nekoliko minuta.",
              buttonText : "Ok"
            });
            self.setState({
              success : false,
              serverError : false,
              formSubmitted : false
            });
          });
        }
      }, {
        key : "render",
        value : function() {
          var $scope = this;
          var self = this.state;
          var label = self.currentNotificationMedia;
          var pos = self.inputValue;
          var locked = self.waiting;
          var props = self.acceptedPolicy;
          var callback = self.success;
          var msg = self.serverError;
          var err = self.validationError;
          var type = self.formSubmitted;
          var matches = this.checkEnableButton(label, pos, props);
          /** @type {string} */
          var rightBtnLabel = label === currentPageNumber ? "Unesi broj mobilnog telefona" : "Unesi svoju imejl adresu";
          var image = this.getValidationErrorMessage(label);
          return type && msg && this.showErrorPopup(), root.default.createElement("div", {
            className : "".concat("range-revamp-", "stock-notification")
          }, root.default.createElement("h4", {
            className : "".concat("range-revamp-", "stock-notification__section-header")
          }, "Primi obave\u00c5\u00a1tenje kad ponovo bude na stanju"), type && callback ? root.default.createElement("p", null, "Sve je tu! Uskoro \u00c4\u2021emo kontaktirati s tobom.") : root.default.createElement("div", null, root.default.createElement("div", {
            className : "".concat("range-revamp-", "stock-notification__form-radio-buttons")
          }, root.default.createElement("div", {
            className : "".concat("range-revamp-", "stock-notification__form-radio-button")
          }, root.default.createElement(DropIndicator, {
            disabled : locked,
            isSelected : label === tag,
            prefix : "range-revamp-",
            onChange : function() {
              return $scope.setNotificationMedia(tag);
            },
            isActive : label === tag
          }), root.default.createElement("label", {
            className : "".concat("range-revamp-", "stock-notification__form-radio-button-label")
          }, "Imejlom")), root.default.createElement("div", {
            className : "".concat("range-revamp-", "stock-notification__form-radio-button")
          }, root.default.createElement(DropIndicator, {
            disabled : locked,
            isSelected : label === currentPageNumber,
            prefix : "range-revamp-",
            onChange : function() {
              return $scope.setNotificationMedia(currentPageNumber);
            },
            isActive : label === currentPageNumber
          }), root.default.createElement("label", {
            className : "".concat("range-revamp-", "stock-notification__form-radio-button-label")
          }, "Putem SMS poruke"))), root.default.createElement(_tabBodyNode.a, {
            disabled : locked,
            validation : {
              msg : image,
              type : "".concat("range-revamp-", "error")
            },
            fieldHelper : {
              msg : ""
            },
            valid : !err,
            shouldValidate : true,
            prefix : "range-revamp-",
            "data-cs-mask" : ""
          }, root.default.createElement(button.a, {
            disabled : locked,
            id : "emailInputField",
            label : rightBtnLabel,
            req : "",
            type : "text",
            prefix : "range-revamp-",
            value : pos,
            onChange : this.handleTextInput,
            "aria-invalid" : this.inputFailedValidation
          })), label === currentPageNumber && root.default.createElement("label", {
            className : "".concat("range-revamp-", "stock-notification__form-radio-description")
          }, "Uklju\u00c4\u008di pozivni broj zemlje ako je mobilni telefon registrovan u drugoj zemlji."), root.default.createElement("div", {
            className : "".concat("range-revamp-", "stock-notification__form-checkbox-wrapper")
          }, root.default.createElement(holiday.a, {
            onChange : function(percent) {
              return $scope.onCheckBoxClicked(percent);
            },
            label : root.default.createElement(root.Fragment, null, "".concat("Pro\u00c4\u008ditao/la sam i razumem", " "), root.default.createElement(myDoughnutChart.a, {
              prefix : "range-revamp-",
              text : "IKEA politika",
              url : "https://www.ikea.com/rs/sr/customer-service/privacy-policy/",
              newWindow : true
            })),
            id : "stock-notification-accept-policy-checkbox",
            disabled : locked,
            prefix : "range-revamp-",
            name : "stock-notification-accept-policy"
          })), root.default.createElement(node.a, {
            loading : locked,
            prefix : "range-revamp-",
            type : "primary",
            htmlType : "button",
            className : "".concat("range-revamp-", "stock-notification__form-button"),
            disabled : !matches,
            text : "Po\u00c5\u00a1alji mi obave\u00c5\u00a1tenje",
            onClick : function() {
              return $scope.submitRegistrationRequest($scope.state);
            }
          })));
        }
      }]) && t(p.prototype, selector), a && t(p, a), match;
    }(root.default.Component);
    var FormioElement = function(_WebInspector$GeneralTreeElement) {
      /**
       * @return {?}
       */
      function d() {
        return c(this, d), f.apply(this, arguments);
      }
      !function(data, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function");
        }
        /** @type {!Object} */
        data.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : data,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          _log(data, superClass);
        }
      }(d, _WebInspector$GeneralTreeElement);
      var t;
      var klass;
      var a;
      var f = fn(d);
      return t = d, (klass = [{
        key : "render",
        value : function() {
          if (!this.props.productAvailability) {
            return null;
          }
          var element = this.props.productAvailability;
          var tagName = element.notSoldInStore;
          var style = element.outOfStock;
          var children = element.isCollectableInStore;
          var parentElement = element.isAvailableByOrderInStore;
          var title = element.parseAvailabilityError;
          return tagName || style || parentElement || title ? style ? root.default.createElement("div", {
            className : "".concat("range-revamp-", "store-info")
          }, root.default.createElement(render, merge({}, this.props, {
            onClick : this.props.onShowChangeStoreClick
          })), root.default.createElement(Component, this.props), root.default.createElement(SettingsIcon, this.props)) : parentElement ? root.default.createElement("div", {
            className : "".concat("range-revamp-", "store-info")
          }, root.default.createElement(render, merge({}, this.props, {
            onClick : this.props.onShowChangeStoreClick
          })), root.default.createElement(List, {
            onClick : this.props.onShowChangeStoreClick
          })) : title ? root.default.createElement("div", {
            className : "".concat("range-revamp-", "store-info")
          }, root.default.createElement(render, merge({}, this.props, {
            onClick : this.props.onShowChangeStoreClick
          }))) : tagName ? root.default.createElement("div", {
            className : "".concat("range-revamp-", "store-info")
          }, root.default.createElement(render, merge({}, this.props, {
            onClick : this.props.onShowChangeStoreClick
          })), root.default.createElement(Panel, {
            onClick : this.props.onShowChangeStoreClick
          })) : null : root.default.createElement("div", {
            className : "".concat("range-revamp-", "store-info")
          }, root.default.createElement(render, merge({}, this.props, {
            onClick : this.props.onShowChangeStoreClick
          })), children && root.default.createElement(view, null), root.default.createElement(getElements, this.props));
        }
      }]) && e(t.prototype, klass), a && e(t, a), d;
    }(root.default.Component);
    var success = $(332);
    var callback = $.n(success);
    var template = $(265);
    var ControlledText = function(_WebInspector$GeneralTreeElement) {
      /**
       * @param {?} key
       * @return {?}
       */
      function list(key) {
        var self;
        return function(value, cls) {
          if (!(value instanceof cls)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, list), (self = data.call(this, key)).state = {
          currentStore : key.currentStore,
          filteredStores : key.allStores,
          searchValue : ""
        }, self.onSelectStore = self.onSelectStore.bind(log(self)), self.filterStore = self.filterStore.bind(log(self)), self.getStoreAvailability = self.getStoreAvailability.bind(log(self)), self;
      }
      !function(x, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function");
        }
        /** @type {!Object} */
        x.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : x,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          contains(x, superClass);
        }
      }(list, _WebInspector$GeneralTreeElement);
      var e;
      var value;
      var t;
      var data = init(list);
      return e = list, (value = [{
        key : "onSelectStore",
        value : function(result) {
          this.props.updateSelectedStore(result);
          this.setState({
            currentStore : result
          });
        }
      }, {
        key : "filterStore",
        value : function(e) {
          var self = this;
          var tagLink = e.target;
          var input = this.props.allStores.filter(function(_ref34) {
            var name = _ref34.name;
            var fields = _ref34.storeAddress;
            return self.matchString(name, tagLink.value) || fields && (self.matchString(fields.address1, tagLink.value) || self.matchString(fields.address2, tagLink.value) || self.matchString(fields.cityName, tagLink.value) || self.matchString(fields.provinceName, tagLink.value));
          });
          this.setState({
            searchValue : tagLink.value,
            filteredStores : input
          });
          this.props.updateFilterResult(input.length);
        }
      }, {
        key : "matchString",
        value : function(e, t) {
          return e && callback()(e).indexOf(callback()(t)) > -1;
        }
      }, {
        key : "renderAddressSection",
        value : function(right) {
          var doc = this.buildStoreAdressText(right);
          return doc && root.default.createElement("div", {
            className : "".concat("range-revamp-", "change-store__store-address")
          }, doc);
        }
      }, {
        key : "buildStoreAdressText",
        value : function(data) {
          if (!data) {
            return null;
          }
          var yyyy = data.address2 ? "".concat(data.address1, ", ").concat(data.address2) : data.address1;
          return data.provinceName ? "".concat(yyyy, ", ").concat(data.cityName, ", ").concat(data.provinceName) : "".concat(yyyy, ", ").concat(data.cityName);
        }
      }, {
        key : "getStoreAvailability",
        value : function(frame) {
          var filteredView = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          var e = filteredView.find(function(data) {
            return data.storeId === frame;
          });
          var evt = e || {};
          var err = evt.isInCashAndCarryRange;
          var payload = evt.isInHomeDeliveryRange;
          return err || payload ? !err && payload ? template.a.NOT_AVAILABLE_HERE : e && e.message && e.message.type : template.a.NOT_SOLD_HERE;
        }
      }, {
        key : "render",
        value : function() {
          var t = this;
          var state = this.state;
          var ops = state.filteredStores;
          var action = state.currentStore;
          var id = state.searchValue;
          var key = window.RangeProductStatus.stockInfo;
          var path = void 0 === key ? {} : key;
          return root.default.createElement("div", {
            className : "".concat("range-revamp-", "change-store")
          }, root.default.createElement("div", {
            className : "".concat("range-revamp-", "change-store__title")
          }, "Prona\u00c4\u2018i i preuzmi u svojoj robnoj ku\u00c4\u2021i IKEA"), root.default.createElement(button.a, {
            id : "change-store-input",
            type : "text",
            autoFocus : window.matchMedia("(min-width: 56.25em)").matches,
            prefix : "range-revamp-",
            value : id,
            className : "".concat("range-revamp-", "change__search-store"),
            label : "Pretra\u00c5\u00bei po gradu, dr\u00c5\u00beavi",
            onChange : this.filterStore
          }), root.default.createElement("div", {
            className : "".concat("range-revamp-", "change-store__stores")
          }, ops.length ? ops.map(function(data) {
            return root.default.createElement("div", {
              className : "".concat("range-revamp-", "change-store__store"),
              onClick : function() {
                return t.onSelectStore(data);
              }
            }, root.default.createElement("div", {
              className : "".concat("range-revamp-", "change-store__store--upper")
            }, root.default.createElement("div", {
              className : "".concat("range-revamp-", "change-store__store--left")
            }, root.default.createElement("div", {
              className : "".concat("range-revamp-", "change-store__store-info")
            }, data.name), t.renderAddressSection(data.storeAddress)), root.default.createElement("div", {
              className : "".concat("range-revamp-", "change-store__store--right")
            }, root.default.createElement(DropIndicator, {
              key : data.value,
              isSelected : !!action && data.value === action.value
            }))), path.valid && root.default.createElement("div", {
              className : "".concat("range-revamp-", "change-store__store--lower")
            }, root.default.createElement(template.e, {
              messageType : t.getStoreAvailability(data.value, path.stores)
            })));
          }) : root.default.createElement("div", {
            className : "".concat("range-revamp-", "change-store__store--no-search-result")
          }, "\u00c5\u00bdao nam je, nismo uspeli da prona\u00c4\u2018emo robnu ku\u00c4\u2021u u tvojoj blizini. Molimo te proveri da li je uneta adresa ispravna.")));
        }
      }]) && n(e.prototype, value), t && n(e, t), list;
    }(root.default.Component);
    var results = $(10);
    var History_1 = $(282);
    var _charsets = {
      OUT_OF_STOCK : "LOW",
      LOW_IN_STOCK : "LOW",
      MEDIUM_IN_STOCK : "MEDIUM",
      HIGH_IN_STOCK : "HIGH"
    };
    /**
     * @param {?} metadata
     * @return {?}
     */
    var add = function(metadata) {
      var record = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var b = record.stores;
      var second = void 0 === b ? [] : b;
      var date = record.timestamp;
      var options = second.find(function(track) {
        return track.storeId === metadata;
      });
      var that = options || {};
      var malakh = that.isInCashAndCarryRange;
      var CircularList = that.isInHomeDeliveryRange;
      /** @type {boolean} */
      var isNewStateNearStart = !!malakh;
      /** @type {boolean} */
      var waitingForBrowser = !malakh && !!CircularList;
      /** @type {boolean} */
      var _ = !isNewStateNearStart && !waitingForBrowser;
      var finalStock = options && options.quantity || 0;
      /** @type {boolean} */
      var isReplayingSong = 0 === finalStock && isNewStateNearStart;
      var p = options && options.isCollectable || false;
      var I = options && options.restocks && setup(options.restocks);
      var stateOutput = options && options.message && _charsets[options.message.type] || "LOW";
      var currentTime = date && store(date);
      var chartTypeMap = {
        stock : finalStock,
        inStockProbability : stateOutput,
        isInStockRange : isNewStateNearStart,
        isAvailableByOrderInStore : waitingForBrowser,
        restockDates : I,
        outOfStock : isReplayingSong,
        parseSuccess : !!options
      };
      return extend(extend({
        outOfStock : isReplayingSong,
        inStockProbability : stateOutput,
        isCollectableInStore : p,
        isAvailableByOrderInStore : waitingForBrowser,
        notSoldInStore : _
      }, !options && {
        parseAvailabilityError : true
      }), {}, {
        stockDetailInformation : chartTypeMap,
        productCount : finalStock,
        updatedAt : currentTime
      });
    };
    /**
     * @param {!Array} expiryInMilliseconds
     * @return {?}
     */
    var setup = function(expiryInMilliseconds) {
      var options = expiryInMilliseconds.sort(function(options, newPropertyModel) {
        return options.earliestDate.localeCompare(newPropertyModel.earliestDate);
      })[0];
      return [getDate(new Date(options.earliestDate)), getDate(new Date(options.latestDate))];
    };
    /**
     * @param {!Date} date
     * @return {?}
     */
    var getDate = function(date) {
      var row = {
        customDateFormat : "d mmm, yyyy",
        customStockCheckDateFormat : "dd.mm.yyyy",
        customStockCheckTimeFormat : "HH:MM",
        customTimeFormat : "HH:MM",
        translations : {
          dayNames : ["ned", "pon", "uto", "sre", "\u00c4\u008det", "pet", "sub", "nedelja", "ponedeljak", "utorak", "sreda", "\u00c4\u008detvrtak", "petak", "subota"],
          monthNames : ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec", "januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
          timeNames : ["pre podne", "po podne"]
        }
      };
      return row && row.customStockCheckDateFormat ? getTime()({
        date : date,
        langConfig : row.translations,
        format : row.customStockCheckDateFormat
      }) : (new Intl.DateTimeFormat("sr-RS", {
        day : "numeric",
        month : "long",
        year : "numeric"
      })).format(date);
    };
    /**
     * @param {?} expiration
     * @return {?}
     */
    var store = function(expiration) {
      /** @type {!Date} */
      var client = new Date(Date.parse(expiration));
      return createStore(client);
    };
    /**
     * @param {?} data
     * @param {string} options
     * @return {?}
     */
    var filter = function(data, options) {
      var linkLevelDetails = options && options.stockDetailInformation || {};
      /** @type {!Object} */
      var a = Object.assign({}, data.stockDetailInformation, {
        salesMethodCode : linkLevelDetails.salesMethodCode,
        recommendedSalesLocation : linkLevelDetails.recommendedSalesLocation,
        items : linkLevelDetails.items || []
      });
      return Object.assign({}, data, {
        stockDetailInformation : a
      });
    };
    var GET_AUTH_URL_TIMEOUT = function(_WebInspector$GeneralTreeElement) {
      /**
       * @return {?}
       */
      function add() {
        var type;
        return function(value, t) {
          if (!(value instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, add), (type = code.call(this)).state = {
          currentStore : null,
          selectedStore : null,
          isModalOpen : false,
          showChangeStoreView : false,
          hasFilterResult : true
        }, type.allStores = [{
          value : "050",
          name : "Beograd",
          storeUrl : "/rs/sr/stores/050",
          storeLocation : {
            longitude : "20.562966",
            latitude : "44.710218"
          },
          storeAddress : {
            cityName : "Beograd",
            address1 : "Astrid Lindgren 11",
            address2 : "Auto-put Beograd\u00e2\u20ac\u201dNi\u00c5\u00a1 (isklju\u00c4\u008denje Tran\u00c5\u00a1ped)",
            zipCode : "11231"
          },
          storeMapUrl : "/ms/sr_RS/img/customer_services/guide_to_ikea/Store_map_lista.jpg",
          timeZone : "Europe/Belgrade",
          storeContactInfo : {
            storeContactMethodList : [{
              storeContactMethodType : "PHONE",
              phoneNo : "011 7 555 444",
              storeContactMethodText : "Kontakt centar"
            }],
            paragraphList : [{}]
          }
        }], type.LOCAL_STORAGE_SELECTED_STORE_ID = Object(domain.appendLocalStorageExtension)("IkeaOneWeb_Range-Selected_Store_Id", true), type.onCloseModal = type.onCloseModal.bind(keys(type)), type.onStoreClick = type.onStoreClick.bind(keys(type)), type.onChangeStore = type.onChangeStore.bind(keys(type)), type.updateProductAvailability = type.updateProductAvailability.bind(keys(type)), type.renderModalContent = type.renderModalContent.bind(keys(type)), type.updateSelectedStore = type.updateSelectedStore.bind(keys(type)), 
        type.onShowChangeStoreClick = type.onShowChangeStoreClick.bind(keys(type)), type.updateFilterResult = type.updateFilterResult.bind(keys(type)), type;
      }
      !function(p, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function");
        }
        /** @type {!Object} */
        p.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : p,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          action(p, superClass);
        }
      }(add, _WebInspector$GeneralTreeElement);
      var constructor;
      var captureProperties;
      var protoProps;
      var word;
      var exports;
      var code = wrap(add);
      return constructor = add, (captureProperties = [{
        key : "renderChangeStore",
        value : function() {
          return root.default.createElement(ControlledText, {
            allStores : this.allStores,
            currentStore : this.state.currentStore,
            messages : Object({
              CATALOG_NAME_FUNCTIONAL : "",
              CATALOG_PLP_LOAD_MORE : "",
              CATALOG_PLP_RELATED_CATEGORIES : "",
              CATALOG_PLP_SHOWING_X_OF_Y : "",
              CATALOG_POPULAR_PRODUCTS : "",
              COMPARE_APP_ADD_TO_CART : "",
              COMPARE_APP_BACK_TO_PREVIOUS_PAGE : "",
              COMPARE_APP_COMPARING_NO_PRODUCTS : "",
              COMPARE_APP_COMPARING_X_PRODUCTS : "",
              COMPARE_APP_COMPARING_X_PRODUCTS_IN_Y : "",
              COMPARE_APP_EDIT : "",
              COMPARE_APP_HEADER : "",
              COMPARE_APP_HEADING_AVAILABILITY : "",
              COMPARE_APP_HEADING_MATERIAL : "",
              COMPARE_APP_HEADING_MEASUREMENTS : "",
              COMPARE_APP_READ_LESS : "",
              COMPARE_APP_READ_MORE : "",
              COMPARE_APP_REMOVE_ITEM : "",
              COMPARE_APP_STOCK_AVAILABLE : "",
              COMPARE_APP_STOCK_NOT_AVAILABLE : "",
              COMPARE_APP_STOCK_OUT_OF_STOCK : "",
              COMPARE_APP_TITLE : "",
              COMPARE_APP_UNDO : "",
              COMPARE_APP_VIEW_TOGGLE_IN_CONTEXT : "",
              COMPARE_APP_VIEW_TOGGLE_PRODUCT : "",
              COMPARE_APP_X_ITEMS : "",
              COMPARISON_CLEAR_LONG : "",
              COMPARISON_CLEAR_SHORT : "",
              COMPARISON_COMPARE : "",
              COMPARISON_COMPARE_PRODUCTS_LONG : "",
              COMPARISON_COMPARE_PRODUCTS_SHORT : "",
              COMPARISON_MULTIPLE_SELECTED : "",
              COMPARISON_NUM_SELECTED : "",
              COMPARISON_ONE_SELECTED : "",
              COMPARISON_SELECT_MORE_LONG : "",
              COMPARISON_SELECT_MORE_SHORT : "",
              FILTER_BUYABLE_ONLINE : "",
              FILTER_CATEGORY : "",
              FILTER_CATEGORY_SHOW_LESS : "",
              FILTER_CATEGORY_SHOW_MORE : "",
              FILTER_CHAPTER : "",
              FILTER_CHAPTER_ALL : "",
              FILTER_CLEAR_ALL : "",
              FILTER_CLEAR_FILTER : "",
              FILTER_COLOR : "",
              FILTER_CONFIRM : "",
              FILTER_FAMILY_PRICE : "",
              FILTER_MAX : "",
              FILTER_MEASUREMENTS : "",
              FILTER_MIN : "",
              FILTER_MOBILE_MODAL_CONFIRM : "",
              FILTER_MOBILE_MODAL_HEADER : "",
              FILTER_MOBILE_SORT_BUTTON : "",
              FILTER_MORE : "",
              FILTER_MORE_COUNT : "",
              FILTER_MORE_FILTERS : "",
              FILTER_NEW : "",
              FILTER_NEW_LOWER_PRICE : "",
              FILTER_NEW_PRODUCT : "",
              FILTER_NO_PRODUCTS : "",
              FILTER_ONLINE_SELLABLE : "",
              FILTER_OTHER : "",
              FILTER_PRICE : "",
              FILTER_PRICE_SELECTED : "",
              FILTER_PRODUCT : "",
              FILTER_RATINGS : "",
              FILTER_ROOM : "",
              FILTER_SEAT : "",
              FILTER_SELECTED : "",
              FILTER_SELECTED_COUNT : "",
              FILTER_SHAPE : "",
              FILTER_SORT : "",
              FILTER_SORT_BY : "",
              FILTER_SORT_OPTION_CUSTOMER_RATING : "",
              FILTER_SORT_OPTION_NAME_ASCENDING : "",
              FILTER_SORT_OPTION_PRICE_ASCENDING : "",
              FILTER_SORT_OPTION_PRICE_DESCENDING : "",
              FILTER_SORT_OPTION_RELEVANCE : "",
              FILTER_SPECIAL_PRICE : "",
              FILTER_TIME_RESTRICTED_OFFER : "",
              FILTER_TOTAL_ITEM_COUNT : "",
              FILTER_TOTAL_RESULTS_COUNT : "",
              NEWS_NEW_PRODUCTS : "",
              NO_CATALOG_CONTENT_FOUND : "",
              OFFERS_FAMILY_PRICE : "",
              OFFERS_LAST_CHANCE : "",
              OFFERS_TIME_RESTRICTED_OFFER : "",
              PIP_ECO_FEE_COPY : "",
              PIP_ECO_FEE_TEXT : "",
              PIP_ECO_WEEE_FEE_EXCLUDE : "",
              PIP_ECO_WEEE_FEE_HEADING : "",
              PIP_ECO_WEEE_FEE_LINK_TEXT : "",
              PIP_HASSLE_FREE_RETURN_COPY : "",
              PIP_HASSLE_FREE_RETURN_HEADING : "",
              PIP_HASSLE_FREE_RETURN_LABEL : "",
              PIP_HASSLE_FREE_RETURN_LINK : "",
              PIP_MAXIMUM_RETAIL_PRICE : "",
              PIP_MISSING_IMAGE : "",
              PIP_ORDER_DISCLAIMER : "",
              PIP_PRODUCT_ORIGIN : "",
              PIP_STOCK_NOT_SOLD_IN_STORE_TEXT : "",
              PIP_STOCK_OUT_OF_STOCK_TEXT : "",
              PIP_TOTAL_PRICE : "",
              PIP_WEEE_FEE_COPY : "",
              PIP_WEEE_FEE_TEXT : "",
              PLP_COMPARE_HINT_HEADING : "",
              PLP_COMPARE_HINT_SUBHEADING : "",
              PLP_GPR_MORE_VARIANTS : "",
              PLP_SEE_MORE : "",
              PRODUCT_DISCOUNT_LABEL : "",
              PRODUCT_ECO_FEE_TEXT : "",
              PRODUCT_MULTIPACK_LABEL_PIECE_PRICE : "",
              PRODUCT_PRICE_MRP_LABEL : "",
              PRODUCT_WEEE_FEE_TEXT : "",
              PRODUCT_WHILE_SUPPLY_LAST_DATE_RANGE_TEXT_NLP : "",
              PRODUCT_WHILE_SUPPLY_LAST_TEXT : "",
              STOCK_MINI_CHECK_ANOTHER_STORE : "",
              BACK_TO_TOP : "Povratak na vrh",
              CLICK_AND_COLLECT_DISCLAIMER_TEXT : "Ovaj proizvod dostupan je samo za Click & Collect u robnoj ku\u00c4\u2021i IKEA.",
              CLICK_AND_COLLECT_MESSAGE_HEADLINE : "Psst... mo\u00c5\u00beda postoji drugi na\u00c4\u008din da se ovo kupi:",
              CLICK_AND_COLLECT_MESSAGE_STEP_1 : "1. Klikni na \u00e2\u20ac\u017eSa\u00c4\u008duvaj na spisak za kupovinu\u00e2\u20ac\u0178 iznad.",
              CLICK_AND_COLLECT_MESSAGE_STEP_2 : "2. Proveri da li je dostupno za Click & Collect u tvojoj robnoj ku\u00c4\u2021i. Iako je robna ku\u00c4\u2021a zatvorena, usluga Click & Collect mo\u00c5\u00bee biti dostupna.",
              COLLAPSE : "Spusti",
              COMMON_DETAILS : "Detalji",
              COMMON_NONE : "Nijedan",
              COMMON_VIEW : "Vidi",
              COMMON_WARNING : "Upozorenje",
              DIALOG_WINDOW_DESCRIPTION : "Po\u00c4\u008detak dijalog prozora. Pritisni dugme escape da otka\u00c5\u00bee\u00c5\u00a1 i zatvori\u00c5\u00a1 prozor.",
              FEED_AS_SEEN_IN_TITLE : "Pogledaj i ovde",
              HOME : "Po\u00c4\u008detna strana",
              LOADING : "U\u00c4\u008ditavanje",
              MANUFACTURED_BY_LABEL : "Proizvodi {manufacturer}",
              NEWS : "Novosti",
              NEWS_NEXT : "Slede\u00c4\u2021e",
              NEWS_PREVIOUS : "Prethodno",
              NEWS_PRODUCT_SERIES : "Pri\u00c4\u008de",
              NOT_AVAILABLE_FOR_DELIVERY : "Nije dostupno za isporuku",
              NOT_AVAILABLE_IN_STORE : "Nije dostupno u robnoj ku\u00c4\u2021i. {moreInfo}",
              NOT_AVAILABLE_ORDER_ONLY_DESCRIPTION : "Ovaj proizvod nije izlo\u00c5\u00been u robnoj ku\u00c4\u2021i jer se proizvodi samo po narud\u00c5\u00bebini. Mo\u00c5\u00bee\u00c5\u00a1 ga naru\u00c4\u008diti onlajn. Ali ako nas poseti\u00c5\u00a1 u robnoj ku\u00c4\u2021i, pomo\u00c4\u2021i \u00c4\u2021emo ti da ga naru\u00c4\u008di\u00c5\u00a1.",
              NOT_AVAILABLE_ORDER_ONLY_TITLE : "Nije dostupno u robnoj ku\u00c4\u2021i",
              OFFERS : "Ponude",
              OFFERS_NEW_LOWER_PRICE : "Nova ni\u00c5\u00bea cena",
              PIP_ADDED_TO_CART : "Dodato",
              PIP_ADDED_TO_FAVOURITES_TOAST_TEXT : "dodato u listu \u00c5\u00beelja.",
              PIP_ADDED_TO_IGIFT : "Dodato",
              PIP_ADDED_TO_IGIFT_TOAST_TEXT : "sa\u00c4\u008duvano na spisku poklona.",
              PIP_ADDED_TO_SHOPPING_BAG_TOAST_LINK_TEXT : "Vidi",
              PIP_ADDED_TO_SHOPPING_BAG_TOAST_TEXT : "je dodat u tvoju korpu za kupovinu.",
              PIP_ADD_TO_CART : "Dodaj u korpu",
              PIP_ADD_TO_IGIFT : "Dodaj kao poklon",
              PIP_ADD_TO_SHOPPINGCART : "Dodaj u korpu",
              PIP_ADD_TO_SHOPPINGLIST : "Dodaj na listu \u00c5\u00beelja",
              PIP_ADD_X_TO_CART : "Dodaj {productCount} artikala u korpu",
              PIP_ADD_X_TO_IGIFT : "Dodaj {productCount} proizvoda na spisak poklona",
              PIP_AISLE : "Red",
              PIP_ARTICLE_NUMBER_LABEL : "Broj artikla",
              PIP_ART_NBR : "br",
              PIP_ASSEMBLY_INSTRUCTIONS : "Uputstva za sastavljanje",
              PIP_ASSEMBLY_INSTRUCTIONS_AND_DOCS : "Sastavljanje i uputstva",
              PIP_ASSEMBLY_SERVICES_HEADER : "Usluge sastavljanja",
              PIP_ASSEMBLY_SERVICES_TITLE : "Ugovori sastavljanje.",
              PIP_BENEFIT_TEXT_MORE_DETAILS : "Detaljnije",
              PIP_CARE_INSTRUCTIONS : "Uputstva za odr\u00c5\u00beavanje",
              PIP_CHECKED_ATTRIBUTE : "Odabrano",
              PIP_CLOSE : "Zatvori",
              PIP_COLLECTIONS_AND_PRICE_DISCLAIMER : "Cene i proizvodi na internet stranici mogu se razlikovati od cena i proizvoda u robnoj ku\u00c4\u2021i.",
              PIP_CREATE_NEW_LIST : "Kreiraj novu listu \u00c5\u00beelja",
              PIP_DDS : "Ovaj artikal je mogu\u00c4\u2021e naru\u00c4\u008diti.",
              PIP_DECREASE_AMOUNT : "Smanji koli\u00c4\u008dinu",
              PIP_DEFAULT_LIST_NAME : "Lista \u00c5\u00beelja",
              PIP_DELIVERY_DISCLAIMER : "<deliveryDisclaimerLink_1>Cena isporuke </deliveryDisclaimerLink_1> za uslugu <deliveryDisclaimerLink_2>Click & Collect</deliveryDisclaimerLink_2>",
              PIP_DESIGNER_NAME_LABEL : "Dizajner",
              PIP_DESIGNER_THOUGHTS : "Re\u00c4\u008di dizajnera",
              PIP_DIMENSIONS : "Dimenzije proizvoda",
              PIP_DISASSEMBLY_INSTRUCTIONS : "Rastavljanje i recikla\u00c5\u00bea (za korisnike posebne struke)",
              PIP_ENERGY_AND_RESOURCES : "Energija i resursi",
              PIP_ENERGY_CLASS_LABEL : "Energetski razred",
              PIP_ENERGY_ENRICHMENT_TEXT : "Informacije o energiji",
              PIP_ENVIRONMENTAL_DATA : "Okolina",
              PIP_ENVIRONMENT_AND_MATERIAL : "Materijali i okolina",
              PIP_FAMILY_SUPPLY_LAST_TEXT : "i do isteka zaliha.",
              PIP_FIND_PRODUCT_ERROR : "Kontaktiraj zaposlene u robnoj ku\u00c4\u2021i za informacije o kupovini.",
              PIP_FIND_PRODUCT_PANNEL : "Prona\u00c4\u2018i u robnoj ku\u00c4\u2021i",
              PIP_FORM_DESIGN_PROCESS : "Proces dizajniranja forme",
              PIP_FULL_SEREVE : "Kontaktiraj zaposlene u robnoj ku\u00c4\u2021i za informacije o kupovini.",
              PIP_FUNCTION_SOLUTION : "Re\u00c5\u00a1enje za funkciju",
              PIP_GENERAL_ERROR : "Izvinjavamo se. Do\u00c5\u00a1lo je do pote\u00c5\u00a1ko\u00c4\u2021a u sistemu.",
              PIP_GO_TO_NEXT_PICTURE : "Vidi slede\u00c4\u2021u sliku",
              PIP_GO_TO_PICTURE : "Vidi sliku",
              PIP_GO_TO_PREVIOUS_PICTURE : "Vidi prethodnu sliku",
              PIP_GPR_PRICE_DISCLAIMER : "Cena se odnosi na odabrane proizvode.",
              PIP_HIDE_PRICE : "Sakrij cenu",
              PIP_IMAGE_GRID_SHOW_LESS : "Prika\u00c5\u00bei manje",
              PIP_IMAGE_GRID_SHOW_MORE : "Prika\u00c5\u00bei vi\u00c5\u00a1e slika",
              PIP_INCREASE_AMOUNT : "Pove\u00c4\u2021aj koli\u00c4\u008dinu",
              PIP_LAST_CHANCE_TEXT : "Poslednja prilika za kupovinu",
              PIP_LOADING_REVIEWS : "U\u00c4\u008ditavanje ocena",
              PIP_LOWEST_PRICE : "Najni\u00c5\u00bea cena",
              PIP_MATERIAL : "Materijal",
              PIP_MATERIALS_DATA : "Materijali",
              PIP_MORE_FROM_COLLECTION : "Vi\u00c5\u00a1e iz",
              PIP_MORE_FROM_FUNCTIONAL : "Vi\u00c5\u00a1e",
              PIP_MORE_FROM_SERIES : "Vi\u00c5\u00a1e od",
              PIP_MORE_FROM_SYSTEM : "Vi\u00c5\u00a1e iz",
              PIP_MORE_TO_THIS_PRODUCT : "Ovaj proizvod nudi toliko toga",
              PIP_MORE_TO_THIS_PRODUCT_TEASER : "Saznaj o na\u00c5\u00a1oj odr\u00c5\u00beivosti, materijalima i dizajnu.",
              PIP_NBR_PACKAGES : "Pakovanje(a)",
              PIP_NBR_PACKAGES_TOTAL : "Pakovanja",
              PIP_NBR_PARTS_DISCLAIMER : "Ovaj proizvod ima vi\u00c5\u00a1e pakovanja.",
              PIP_NOT_BOUGHT_ONLINE : "Proizvod nije dostupan za naru\u00c4\u008divanje putem interneta",
              PIP_NO_JAVASCRIPT : "Aktiviraj JavaScript za kupovinu na IKEA.com",
              PIP_NO_ONLINE_PURCHASE : "Izvinjavamo se, ali ovaj se proizvod ne mo\u00c5\u00bee naru\u00c4\u008diti preko na\u00c5\u00a1eg internet sajta ili telefonom; proveri da li je dostupan u tvojoj robnoj ku\u00c4\u2021i. Informacije o dostupnosti proizvoda mogu biti neta\u00c4\u008dne za ponudu IKEA Food proizvoda.",
              PIP_NO_STORE_SELECTED : "Odaberi robnu ku\u00c4\u2021u",
              PIP_OFFER_FAMILY_LABEL : "IKEA Family specijalna ponuda",
              PIP_OTHER_DOCUMENTS : "Ostali dokumenti",
              PIP_PACKAGE_DETAILS : "Detalji o pakovanju",
              PIP_PACKAGE_DIAMETER : "Pre\u00c4\u008dnik",
              PIP_PACKAGE_HEIGHT : "Visina",
              PIP_PACKAGE_LENGTH : "Du\u00c5\u00beina",
              PIP_PACKAGE_VOLYME : "Obim",
              PIP_PACKAGE_WEIGHT : "Te\u00c5\u00beina",
              PIP_PACKAGE_WIDTH : "\u00c5 irina",
              PIP_PEOPLE_AND_COMMUNITIES : "Ljudi i zajednice",
              PIP_PLANNER_BUTTON_TEXT : "Otvori planer",
              PIP_PLANNER_HEADER : "Ba\u00c5\u00a1 ti se i ne dopada? Kreiraj sopstveni savr\u00c5\u00a1en dizajn!",
              PIP_PLANNER_TEXT : "Koristi na\u00c5\u00a1 alat za planiranje i kreiraj kombinaciju po svojoj meri.",
              PIP_PRODUCT_DESCRIPTION : "Opis proizvoda",
              PIP_PRODUCT_DETAILS : "Opis proizvoda",
              PIP_PRODUCT_DETAILS_ASSEMBLY_AND_DOCUMENTS : "Sastavljanje i uputstva",
              PIP_PRODUCT_DETAILS_MATERIALS_AND_CARE : "Materijali i okolina",
              PIP_PRODUCT_DETAILS_PACKAGING : "Pakovanje",
              PIP_PRODUCT_DETAILS_SUSTAINABILITY_AND_ENVIRONMENT : "Odr\u00c5\u00beivost i \u00c5\u00beivotna sredina",
              PIP_PRODUCT_IS_IN_CART : "Proizvod dodat u tvoju korpu",
              PIP_PRODUCT_IS_IN_LIST : "Proizvod dodat na tvoju listu po nazivom:",
              PIP_PRODUCT_STORY_LABEL : "Pri\u00c4\u008da",
              PIP_QUALITY : "Kvalitet/izdr\u00c5\u00beljivost",
              PIP_QUANTITY_INVALID : "Molimo te da unese\u00c5\u00a1 vrednosti izme\u00c4\u2018u {minCount}-{maxCount}",
              PIP_QUANTITY_LABEL : "Koli\u00c4\u008dina",
              PIP_RATINGS_AVERAGE_HEADER : "Prose\u00c4\u008dne ocene kupaca",
              PIP_RATINGS_OVERALL_TITLE : "Ukupno",
              PIP_RATINGS_PAGINATION_COUNTER : "{start} do {end} od {total}",
              PIP_RATINGS_PAGINATION_NEXT : "Slede\u00c4\u2021a stranica",
              PIP_RATINGS_PAGINATION_PREVIOUS : "Prethodna stranica",
              PIP_RATINGS_PRODUCT_NOT_RECOMMENDED : "Ne, ne preporu\u00c4\u008dujem ovaj proizvod",
              PIP_RATINGS_PRODUCT_RECOMMENDED : "Da, preporu\u00c4\u008dujem ovaj proizvod",
              PIP_RATINGS_RESPONSE_FROM_IKEA : "Odgovor kompanije IKEA",
              PIP_RATINGS_WRITE_REVIEW_LABEL : "Ostavi recenziju",
              PIP_RECOMMEND_MUST_BE_COMPLETED_WITH : "Mo\u00c5\u00bee biti dopunjeno sa",
              PIP_RECOMMEND_SIMILAR_PRODUCTS : "Sli\u00c4\u008dni proizvodi",
              PIP_RECOMMEND_YOU_MIGHT_LIKE : "Mo\u00c5\u00beda \u00c4\u2021e ti se svideti i",
              PIP_REMOVED_TO_FAVOURITES_TOAST_TEXT : "je uklonjen sa spiska omiljenih proizvoda",
              PIP_REMOVED_TO_IGIFT_TOAST_TEXT : "uklonjeno sa spiska poklona",
              PIP_REMOVE_FROM_IGIFT : "Ukloni sa spiska poklona",
              PIP_REMOVE_FROM_SHOPPING_LIST : "Ukloni sa spiska za kupovinu",
              PIP_REVIEWS_COOKIE_CONSENT : "\u00c5\u00bdeleli bismo da s tobom podelimo ocene na\u00c5\u00a1ih proizvoda, ali potrebno je da omogu\u00c4\u2021i\u00c5\u00a1 na\u00c5\u00a1im funkcijskim kola\u00c4\u008di\u00c4\u2021ima da rade svoj posao. Ovo lako mo\u00c5\u00bee\u00c5\u00a1 da omogu\u00c4\u2021i\u00c5\u00a1 u svojim pode\u00c5\u00a1avanjima, klikom na \u00e2\u20ac\u017epode\u00c5\u00a1avanja kola\u00c4\u008di\u00c4\u2021a\u00e2\u20ac\u009d.",
              PIP_REVIEWS_COOKIE_CONSENT_LINK : "Pode\u00c5\u00a1avanje kola\u00c4\u008di\u00c4\u2021a kompanije IKEA",
              PIP_SATELITE : "Mo\u00c5\u00bee se prona\u00c4\u2021i u",
              PIP_SAVED_TO_SHOPPING_LIST : "Sa\u00c4\u008duvano",
              PIP_SAVE_TO_SHOPPING_LIST : "Dodaj na listu \u00c5\u00beelja",
              PIP_SAVE_X_TO_SHOPPING_LIST : "Dodaj {productCount} proizvod(a) na spisak za kupovinu",
              PIP_SELECT : "Odaberi",
              PIP_SELECT_LIST : "Odaberi listu \u00c5\u00beelja",
              PIP_SELECT_THIS_LIST : "Odaberi listu \u00c5\u00beelja",
              PIP_SHELF : "Lokacija",
              PIP_SHOW_PRICE : "Prika\u00c5\u00bei cenu",
              PIP_STICKY_VIEW_DETAILS_LABEL : "Prika\u00c5\u00bei detalje",
              PIP_STOCK_LEVEL_HIGH_TITLE : "Na stanju u robnoj ku\u00c4\u2021i IKEA {storeName}",
              PIP_STOCK_LEVEL_LOW_TITLE : "Vrlo niske zalihe u robnoj ku\u00c4\u2021i IKEA {storeName}",
              PIP_STOCK_LEVEL_MEDIUM_TITLE : "Niske zalihe u robnoj ku\u00c4\u2021i IKEA {storeName}",
              PIP_STOCK_LINK_CHECK_IN_STORE_STOCK : "Proveri stanje u robnoj ku\u00c4\u2021i",
              PIP_STOCK_LINK_CHECK_OTHER_IKEA_STORES : "Proveri u drugim robnim ku\u00c4\u2021ama IKEA",
              PIP_STOCK_NOTIFICATION_BUTTON_TEXT : "Po\u00c5\u00a1alji mi obave\u00c5\u00a1tenje",
              PIP_STOCK_NOTIFICATION_CONFIRMATION : "Sve je tu! Uskoro \u00c4\u2021emo kontaktirati s tobom.",
              PIP_STOCK_NOTIFICATION_EMAIL_LABEL : "Unesi svoju imejl adresu",
              PIP_STOCK_NOTIFICATION_ENTER_VALID_EMAIL : "Molimo te unesi va\u00c5\u00bee\u00c4\u2021u imejl adresu",
              PIP_STOCK_NOTIFICATION_ENTER_VALID_PHONE_NUMBER : "Molimo te unesi va\u00c5\u00bee\u00c4\u2021i broj telefona",
              PIP_STOCK_NOTIFICATION_ERROR_HEADING : "Do\u00c5\u00a1lo je do gre\u00c5\u00a1ke",
              PIP_STOCK_NOTIFICATION_ERROR_MESSAGE : "Trenutno ne mo\u00c5\u00beemo da pristupimo na\u00c5\u00a1em serveru. Molimo te poku\u00c5\u00a1aj ponovo kroz nekoliko minuta.",
              PIP_STOCK_NOTIFICATION_HEADING : "Primi obave\u00c5\u00a1tenje kad ponovo bude na stanju",
              PIP_STOCK_NOTIFICATION_OPTION_EMAIL : "Imejlom",
              PIP_STOCK_NOTIFICATION_OPTION_SMS : "Putem SMS poruke",
              PIP_STOCK_NOTIFICATION_PRIVACY_POLICY : "Pro\u00c4\u008ditao/la sam i razumem",
              PIP_STOCK_NOTIFICATION_PRIVACY_POLICY_LINK_TEXT : "IKEA politika",
              PIP_STOCK_NOTIFICATION_SMS_LABEL : "Unesi broj mobilnog telefona",
              PIP_STOCK_NOTIFICATION_SMS_LABEL_HINT : "Uklju\u00c4\u008di pozivni broj zemlje ako je mobilni telefon registrovan u drugoj zemlji.",
              PIP_STOCK_NOT_SOLD_IN_STORE_SUBTITLE : "\u00c5\u00bdao nam je, ovaj proizvod ne prodajemo ovde",
              PIP_STOCK_NOT_SOLD_IN_STORE_TITLE : "Ne prodaje se u {storeName}",
              PIP_STOCK_ORDER_ITEM_IN_STORE_SUBTITLE : "\u00c5\u00bdao nam je, ovaj proizvod nije dostupan ovde",
              PIP_STOCK_ORDER_ITEM_IN_STORE_TEXT : "Ali ga mo\u00c5\u00bee\u00c5\u00a1 naru\u00c4\u008diti onlajn ili ti mi mo\u00c5\u00beemo pomo\u00c4\u2021i da ga naru\u00c4\u008di\u00c5\u00a1 ako nas poseti\u00c5\u00a1 u robnoj ku\u00c4\u2021i.",
              PIP_STOCK_ORDER_ITEM_IN_STORE_TITLE : "Nije dostupno u {storeName}",
              PIP_STOCK_OUT_OF_STOCK_LATEST_UPDATE : "Poslednji put provereno: {updatedAt}.",
              PIP_STOCK_OUT_OF_STOCK_RESTOCK_DATES : "O\u00c4\u008dekujemo da \u00c4\u2021e proizvod ponovo biti na stanju izme\u00c4\u2018u {fromDate} i {toDate}.",
              PIP_STOCK_OUT_OF_STOCK_SUBTITLE : "\u00c5\u00bdao nam je, ovaj proizvod nije na stanju",
              PIP_STOCK_OUT_OF_STOCK_TITLE : "Nema na stanju u robnoj ku\u00c4\u2021i IKEA {storeName}",
              PIP_STORE_STOCK_HIGH_IN_STOCK : "Na stanju",
              PIP_STORE_STOCK_LOW_IN_STOCK : "Samo nekoliko na stanju",
              PIP_STORE_STOCK_MEDIUM_IN_STOCK : "Niske zalihe",
              PIP_STORE_STOCK_NOT_AVAILABLE_HERE : "Nije dostupno ovde",
              PIP_STORE_STOCK_NOT_SOLD_HERE : "Ne prodaje se ovde",
              PIP_STORE_STOCK_OUT_OF_STOCK : "Nema na stanju",
              PIP_SUSTAINABILITY_LABEL : "Odr\u00c5\u00beivost",
              PIP_SUSTAINABILITY_TITLE : "Ljudi i planeta",
              PIP_SUSTAINABLE_LIFE_AT_HOME : "Odr\u00c5\u00beiv \u00c5\u00beivot u domu",
              PIP_TECHNICAL_INFORMATION : "Tehni\u00c4\u008dke informacije",
              PIP_TOTAL_NO_OF_PACKAGES : "Ovaj proizvod sastoji se iz {count} paketa.",
              PIP_VAT_DISCLAIMER : "Cena sa PDV-om",
              PIP_VIEW_CART : "Pregledaj svoju korpu",
              PIP_VIEW_LIST : "Pregledaj svoju listu \u00c5\u00beelja",
              PIP_WRITE_NEW_REVIEW : "Ostavi ocenu",
              POPUP_BUTTON_OK : "Ok",
              POPUP_ERROR_MESSAGE_HEADER : "Do\u00c5\u00a1lo je do gre\u00c5\u00a1ke",
              PRES_GROUP_CODE : "Broj artikla",
              PRODUCT_DISCOUNTS_VALID_FROM_TO : "Ponuda va\u00c5\u00bei od {startDate} do {endDate}",
              PRODUCT_ENERGY_LABEL_LINK_TEXT : "Energetski razred",
              PRODUCT_FAMILY_MEMBER_TEXT : "IKEA Family cena",
              PRODUCT_GPR_DISCLAIMER_TEXT : "Dostupno u vi\u00c5\u00a1e opcija",
              PRODUCT_GPR_MORE_OPTIONS_TEXT : "Jo\u00c5\u00a1 opcija",
              PRODUCT_MULTIPACK_LABEL : "Cena/pakovanje",
              PRODUCT_NEW_LOWER_PRICE_TEXT : "Nova\nni\u00c5\u00bea\ncena",
              PRODUCT_NEW_PRODUCT_TEXT : "Novo",
              PRODUCT_NLP_PREVIOUS_PRICE_TEXT : "Redovna cena",
              PRODUCT_NODISCOUNT_WHILE_SUPPLY_LAST_DATE_RANGE_TEXT : "Cena va\u00c5\u00bei {validFromDateTime} - {validToDateTime}",
              PRODUCT_NORMAL_PRICE_TEXT : "Redovna cena",
              PRODUCT_PRICE_TEXT : "Cena",
              PRODUCT_PRICE_VALID_DATE_RANGE_DISCLAIMER_TEXT : "Cena va\u00c5\u00bei od {validFromDateTime} do {validToDateTime}",
              PRODUCT_PRICE_VALID_UNTIL_TEXT : "Cena va\u00c5\u00bei do {validToDateTime}",
              PRODUCT_RATING_OUT_OF : "od mogu\u00c4\u2021ih",
              PRODUCT_RATING_STARS : "zvezdica.",
              PRODUCT_REGULAR_PRICE_TEXT : "Redovna cena",
              PRODUCT_REVIEW : "Pregled",
              PRODUCT_REVIEWS : "Recenzije",
              PRODUCT_TIME_RESTRICTED_OFFER_SUPPLY_TEXT : "ili do isteka zaliha",
              PRODUCT_WHILE_SUPPLY_LAST_DATE_RANGE_TEXT : "Cena va\u00c5\u00bei {validFromDateTime} - {validToDateTime}",
              PRODUCT_WITH_DISCOUNT_PERCENTAGE_SUPPLY_LAST_TEXT : "do isteka zaliha",
              QUANTITY_PICKER_TEXT : "Koli\u00c4\u008dina",
              READ_LESS_LINK_TEXT : "Pro\u00c4\u008ditaj manje",
              READ_MORE_LINK_TEXT : "Pro\u00c4\u008ditaj vi\u00c5\u00a1e",
              SELECT_OPTIONS : "Izaberi opcije",
              SELECT_THIS_STORE : "Izaberi ovu robnu ku\u00c4\u2021u",
              SKIP_TO_CONTENT : "Vrati se na glavni sadr\u00c5\u00beaj",
              STOCK_CHANGE_STORE : "Promeni robnu ku\u00c4\u2021u",
              STOCK_CHANGE_STORE_IKEA : "Promeni robnu ku\u00c4\u2021u IKEA",
              STOCK_CHECK_HEADING : "Proveri u IKEA robnoj ku\u00c4\u2021i",
              STOCK_CHECK_HEADING_OTHER : "Proveri u drugim robnim ku\u00c4\u2021ama IKEA",
              STOCK_CHECK_IN_HEADING_STORE : "Proveri stanje u robnoj ku\u00c4\u2021i",
              STOCK_CLICK_AND_COLLECT_AVAILABILITY_HEADING : "Click & collect",
              STOCK_CLICK_AND_COLLECT_AVAILABLE_INFO : "Dodaj na listu \u00c5\u00beelja da vidi\u00c5\u00a1 gde mo\u00c5\u00bee\u00c5\u00a1 da preuzme\u00c5\u00a1 ovaj artikal. Nudimo \u00c5\u00a1irok izbor mesta za preuzimanje koja ti odgovaraju.",
              STOCK_CLICK_AND_COLLECT_AVAILABLE_STATUS : "Naru\u00c4\u008di putem interneta, a proizvod preuzmi u robnoj ku\u00c4\u2021i IKEA ili na mestu za preuzimanje.",
              STOCK_CLICK_AND_COLLECT_HEADING : "Click & Collect , preuzmi u robnoj ku\u00c4\u2021i ili centru za isporuku",
              STOCK_CLICK_AND_COLLECT_INFO : "Vreme je dragoceno, zato imamo predlog za tebe! Poru\u00c4\u008di \u00c5\u00beeljene proizvode u onlajn prodavnici i preuzmi ih u robnoj ku\u00c4\u2021i ili centru za isporuku po izboru.",
              STOCK_CLICK_AND_COLLECT_NOT_AVAILABLE_INFO : "Proizvode poput ovog mo\u00c5\u00bee\u00c5\u00a1 da kupi\u00c5\u00a1 u robnoj ku\u00c4\u2021i, gde mo\u00c5\u00bee\u00c5\u00a1 li\u00c4\u008dno da ih preuzme\u00c5\u00a1. Tako\u00c4\u2018e proveri da li je dostupna ku\u00c4\u2021na isporuka.",
              STOCK_CLICK_AND_COLLECT_NOT_AVAILABLE_STATUS : "C&C nije dostupno",
              STOCK_DELIVERY_HEADING : "Dostava na \u00c5\u00beeljenu adresu",
              STOCK_DELIVERY_INFO_DISCLAIMER : "IIsporuka po\u00c5\u00a1iljke na adresu u roku od 2-7 dana za paketnu ili u odabranom terminu za kamionsku isporuku., po ceni po\u00c4\u008dev od 499din. Nakon \u00c5\u00a1to odabere\u00c5\u00a1 opciju usluge za svoju porud\u00c5\u00bebinu, sazna\u00c4\u2021e\u00c5\u00a1 sve detalje.",
              STOCK_DELIVERY_INFO_NOT_AVAILABLE : "ALI nakon kupovine u robnoj ku\u00c4\u2021i mo\u00c5\u00bee\u00c5\u00a1 dogovoriti isporuku na adresu.",
              STOCK_DELIVERY_STATUS_AVAILABLE : "Ovaj proizvod je mogu\u00c4\u2021e isporu\u00c4\u008diti na \u00c5\u00beeljenu adresu.",
              STOCK_DELIVERY_STATUS_FOOD : "Hrana je dostupna isklju\u00c4\u008divo za prodaju u robnoj ku\u00c4\u2021i. Poseti nas!",
              STOCK_DELIVERY_STATUS_NOT_AVAILABLE : "Dostupno samo za kupovinu u robnoj ku\u00c4\u2021i.",
              STOCK_DISCLAIMER : "Stanje zaliha prikazano na internet stranici mo\u00c5\u00bee se razlikovati od stanja zaliha u robnoj ku\u00c4\u2021i. Ta\u00c4\u008dno stanje zaliha mo\u00c5\u00bee se utvrditi isklju\u00c4\u008divo u robnoj ku\u00c4\u2021i.\n\nCene proizvoda na internet stranici mogu se razlikovati od cena u robnoj ku\u00c4\u2021i. Va\u00c5\u00bee\u00c4\u2021a cena istaknuta je na etiketi sa cenom u robnoj ku\u00c4\u2021i. Za vi\u00c5\u00a1e informacija kontaktiraj sa zaposlenima.",
              STOCK_ERROR_MESSAGE : "Ups, izvinjavamo se! Trenutno imamo pote\u00c5\u00a1ko\u00c4\u2021a sa  u\u00c4\u008ditavanjem  informacijama o dostupnosti proizvoda. Ponovo u\u00c4\u008ditaj stranicu ili poku\u00c5\u00a1aj malo kasnije.",
              STOCK_EXPANDABLE_HEADER : "Dostupnost proizvoda",
              STOCK_FIND_AISLE : "Red",
              STOCK_FIND_DDS : "Ovaj artikal je mogu\u00c4\u2021e naru\u00c4\u008diti.",
              STOCK_FIND_FULL_SERVE : "Kontaktiraj zaposlene u robnoj ku\u00c4\u2021i za informacije o kupovini.",
              STOCK_FIND_HEADER : "Prona\u00c4\u2018i i kupi u robnoj ku\u00c4\u2021i",
              STOCK_FIND_IT_IN_THE_STORE : "Prona\u00c4\u2018i u robnoj ku\u00c4\u2021i IKEA {storeName}.",
              STOCK_FIND_LOCATION_LABEL : "Ovaj proizvod mo\u00c5\u00bee\u00c5\u00a1 prona\u00c4\u2021i na slede\u00c4\u2021oj lokaciji u robnoj ku\u00c4\u2021i:",
              STOCK_FIND_SATELITE : "Proizvod je dostupan na odeljenju {location}",
              STOCK_FIND_SHELF : "Deo",
              STOCK_FOOD_DISCLAIMER : "Ukoliko jedva \u00c4\u008deka\u00c5\u00a1 da proba\u00c5\u00a1 IKEA Food proizvode, poseti nas u Du\u00c4\u2021anu \u00c5\u00a1vedske hrane u robnoj ku\u00c4\u2021i IKEA. Tamo \u00c4\u2021e\u00c5\u00a1 mo\u00c4\u2021i da vidi\u00c5\u00a1 sve dostupne proizvode. V\u00c3\u00a4lkommen!",
              STOCK_INFO_ORDER : "Robna ku\u00c4\u2021a IKEA {storeName} nema ovaj proizvod na stanju.",
              STOCK_INFO_UNAVAILABLE : "Informacija o zalihama nije dostupna. Molimo te poku\u00c5\u00a1aj ponovo.",
              STOCK_LATEST_UPDATE : "Poslednji put provereno: {updatedAt}.",
              STOCK_LEVEL_CHECKING_STOCK : "Provera stanja",
              STOCK_LEVEL_HIGH : "Na stanju u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_LEVEL_LOW : "Manje verovatno dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_LEVEL_MEDIUM : "Verovatno dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_LEVEL_NOT_AVAILABLE : "Nema na stanju u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_LEVEL_ORDER : "Nije dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_LEVEL_STORE_LOW : "Niske zalihe u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_MINI_CLICK_AND_COLLECT_AVAILABLE_CONTENT : "Dodaj u korpu.",
              STOCK_MINI_CLICK_AND_COLLECT_AVAILABLE_HEADING : "Dostupno za Click & Collect",
              STOCK_MINI_CLICK_AND_COLLECT_NOT_AVAILABLE_CONTENT : "Molimo potra\u00c5\u00bei u lokalnoj robnoj ku\u00c4\u2021i ili proveri mogu\u00c4\u2021nost ku\u00c4\u2021ne isporuke",
              STOCK_MINI_CLICK_AND_COLLECT_NOT_AVAILABLE_HEADING : "C&C nije u ponudi",
              STOCK_MINI_CLICK_AND_COLLECT_NOT_AVAILABLE_LINK : "Saznaj vi\u00c5\u00a1e",
              STOCK_MINI_CONTENT_DELIVERY_AVAILABLE : "Nastavi sa kupovinom i saznaj detalje o isporuci. ",
              STOCK_MINI_CONTENT_DELIVERY_NOT_AVAILABLE : "Ovaj proizvod mo\u00c5\u00bee\u00c5\u00a1 kupiti isklju\u00c4\u008divo u robnoj ku\u00c4\u2021i IKEA Beograd.",
              STOCK_MINI_CONTENT_LINK_DELIVERY_NOT_AVAILABLE : "Saznaj vi\u00c5\u00a1e",
              STOCK_MINI_CURRENTLY_X_LEFT_IN_STOCK : "Trenutno {productCount} na stanju",
              STOCK_MINI_FIND_IT_IN_THE_STORE : "Prona\u00c4\u2018i u robnoj ku\u00c4\u2021i",
              STOCK_MINI_HEADING_DELIVERY_AVAILABLE : "Opcije isporuke pogledaj pri pla\u00c4\u2021anju",
              STOCK_MINI_HEADING_DELIVERY_NOT_AVAILABLE : "Kupovina samo u robnoj ku\u00c4\u2021i",
              STOCK_MINI_LINK_TEXT : "Proveri u robnoj ku\u00c4\u2021i",
              STOCK_MINI_NOTIFY_ME : "Obavesti me kad bude ponovo na stanju",
              STOCK_MINI_PARSE_ERROR_MESSAGE : "Nemamo informaciju kad niti da li \u00c4\u2021e ovaj proizvod ponovo biti na stanju.",
              STOCK_MINI_RESTOCK_DATES_TEXT : "O\u00c4\u008dekujemo na stanju {restockDates}",
              STOCK_MINI_STOCK_CONTENT_ERROR : "Ponovo u\u00c4\u008ditaj stranicu ili poku\u00c5\u00a1aj kasnije",
              STOCK_MINI_STOCK_CONTENT_FOOD : "Poseti Du\u00c4\u2021an \u00c5\u00a1vedske hrane u robnoj ku\u00c4\u2021i i proveri dostupnost proizvoda.",
              STOCK_MINI_STOCK_CONTENT_NOT_AVAILABLE : "But see if it's available at another IKEA store.",
              STOCK_MINI_STOCK_LEVEL_ERROR : "Trenutno nema informacija o stanju.",
              STOCK_MINI_STOCK_LEVEL_FOOD : "Informacija o dostupnosti hrane: samo u robnoj ku\u00c4\u2021i",
              STOCK_MINI_STOCK_LEVEL_HIGH : "Preuzimanje u robnoj ku\u00c4\u2021i IKEA {storeName} u roku od 24h",
              STOCK_MINI_STOCK_LEVEL_LOW : "Manje verovatno dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_MINI_STOCK_LEVEL_MEDIUM : "Verovatno dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_MINI_STOCK_LEVEL_NOT_AVAILABLE : "Nije dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_MINI_STOCK_LEVEL_ORDER : "Nema na stanju u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_NOTIFICATION_BUTTON_LABEL : "Po\u00c5\u00a1alji mi obave\u00c5\u00a1tenje",
              STOCK_NOTIFICATION_CONFIRMATION : "Obavesti\u00c4\u2021emo te kad {item} bude ponovo na stanju:",
              STOCK_NOTIFICATION_EMAIL_LABEL : "Unesi svoj imejl",
              STOCK_NOTIFICATION_HEADING : "Primi obave\u00c5\u00a1tenje kad ovo ponovo bude na stanju:",
              STOCK_NOTIFICATION_NOTIFY : "{notifyMeLinkText} ili {checkOtherStoresLinkText}",
              STOCK_NOTIFICATION_NOTIFY_LINK1_TEXT : "Obavesti me",
              STOCK_NOTIFICATION_NOTIFY_LINK2_TEXT : "potra\u00c5\u00bei u drugim robnim ku\u00c4\u2021ama IKEA",
              STOCK_NOTIFICATION_OPTION_EMAIL : "Imejl",
              STOCK_NOTIFICATION_OPTION_SMS : "SMS",
              STOCK_NOTIFICATION_PRIVACY_POLICY : "Potvr\u00c4\u2018ujem da imam informacije o",
              STOCK_NOTIFICATION_PRIVACY_POLICY_LINK_TEXT : "Politika privatnosti",
              STOCK_NOTIFICATION_REQUEST_ERROR_HEADING : "Ups s na\u00c5\u00a1e strane",
              STOCK_NOTIFICATION_REQUEST_ERROR_LABEL : "Ne\u00c5\u00a1to nije uspelo. Molimo te da ponovo podnese\u00c5\u00a1 obrazac.",
              STOCK_NOTIFICATION_SELECT_OPTION : "Odaberi kako \u00c5\u00beeli\u00c5\u00a1 da prima\u00c5\u00a1 obave\u00c5\u00a1tenja",
              STOCK_NOTIFICATION_SMS_HINT : "Uklju\u00c4\u008di pozivni broj zemlje ako je mobilni telefon registrovan u drugoj zemlji",
              STOCK_NOTIFICATION_SMS_LABEL : "Unesi broj mobilnog telefona",
              STOCK_NOTIFICATION_THANK_YOU : "Hvala ti",
              STOCK_NOTIFICATION_VALIDATION_INVALID_EMAIL : "To ne izgleda kao va\u00c5\u00bee\u00c4\u2021a i-mejl adresa. Molimo te poku\u00c5\u00a1aj ponovo.",
              STOCK_NOTIFICATION_VALIDATION_INVALID_NUMBER : "Molimo te unesi broj telefona u ovom formatu +XX XX XX XX",
              STOCK_NOTIFICATION_VIA_EMAIL : "Kao i-mejl na {email}",
              STOCK_NOTIFICATION_VIA_SMS : "Kao SMS na {number}",
              STOCK_NOTIFICATION_WE_WILL_BE_IN_TOUCH : "Smatramo da za dobre stvari vredi \u00c4\u008dekati. I cenimo tvoje strpljenje. Bi\u00c4\u2021emo u kontaktu!",
              STOCK_NOT_AVAILABLE : "\u00c5\u00bdao nam je, ovaj artikal nije na stanju",
              STOCK_NOT_SOLD_IN_STORE : "\u00c5\u00bdao nam je, ovaj artikal ne prodajemo ovde",
              STOCK_PARSE_ERROR_HEADER : "Nije dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}",
              STOCK_PARSE_ERROR_MESSAGE : "\u00c5\u00bdao nam je, ali nemamo informaciju o tome kad \u00c4\u2021e proizvod ponovo biti na stanju. Kako ne znamo kad niti da li \u00c4\u2021e ponovo biti dostupan, predla\u00c5\u00beemo ti da istra\u00c5\u00bei\u00c5\u00a1 ponudu i prona\u00c4\u2018e\u00c5\u00a1 sli\u00c4\u008dne proizvode. ",
              STOCK_QUANTITY_MESSAGE : "Trenutno je {productCount} {productName} dostupno u robnoj ku\u00c4\u2021i IKEA {storeName}.",
              STOCK_QUANTITY_MESSAGE_MULTIPLE_PRODUCT : "{productCount} {productName} su na stanju u robnoj ku\u00c4\u2021i IKEA {storeName} ({updatedAt}).",
              STOCK_QUANTITY_MESSAGE_SINGLE_PRODUCT : "{productCount} {productName} je na stanju u robnoj ku\u00c4\u2021i IKEA {storeName} ({updatedAt}).",
              STOCK_RESTOCK_DATES : "O\u00c4\u008dekujemo da \u00c4\u2021e artikal ponovo biti na stanju izme\u00c4\u2018u {fromDate} i {toDate}.",
              STOCK_RESTOCK_DATES_TEXT : "O\u00c4\u008dekujemo da ponovo bude dostupno u periodu izme\u00c4\u2018u {restockDates}",
              STOCK_RETURN_POLICY_INFO : "Ima\u00c5\u00a1 365 dana da se predomisli\u00c5\u00a1.",
              STOCK_SELECT_A_STORE : "Odaberi",
              STOCK_STORE_INFO : "Detalji robne ku\u00c4\u2021e",
              STOCK_TRY_ANOTHER_STORE : "But see if it's available at another IKEA store.",
              STOCK_TRY_IN_ANOTHER_STORE : "Molimo te poku\u00c5\u00a1aj u drugoj robnoj ku\u00c4\u2021i.",
              STORE_INFO_CHANGE_STORE_INPUT_PLACEHOLDER : "Pretra\u00c5\u00bei po gradu, dr\u00c5\u00beavi",
              STORE_INFO_CHANGE_STORE_NO_SEARCH_RESULT : "\u00c5\u00bdao nam je, nismo uspeli da prona\u00c4\u2018emo robnu ku\u00c4\u2021u u tvojoj blizini. Molimo te proveri da li je uneta adresa ispravna.",
              STORE_INFO_CHANGE_STORE_TITLE : "Prona\u00c4\u2018i i preuzmi u svojoj robnoj ku\u00c4\u2021i IKEA",
              ZIP_IN_AVAILABLE_FOR_DELIVERY : "Dostupno za isporuku na {zipCode}",
              ZIP_IN_CHANGE_ZIP_TEXT : "Potra\u00c5\u00bei drugi po\u00c5\u00a1tanski broj",
              ZIP_IN_CHECKBOX_TEXT : "Zapamti ovaj po\u00c5\u00a1tanski broj i poka\u00c5\u00bei mi dostupnost isporuke za sve proizvode",
              ZIP_IN_CHECKING_DELIVERY_AVAILABILITY : "Provera dostupnosti isporuke za {zipCode}",
              ZIP_IN_CHECK_FOR_DELIVERY_AVAILABILITY : "Proveri dostupnost isporuke",
              ZIP_IN_CHECK_ZIP_BUTTON : "Proveri dostupnost",
              ZIP_IN_ENTER_ZIP_DESCRIPTION : "Unesi po\u00c5\u00a1tanski broj da proveri\u00c5\u00a1 dostupnost isporuke na tvoju adresu. Tvoju lokaciju ne\u00c4\u2021emo deliti.",
              ZIP_IN_ENTER_ZIP_ERROR : "Ovaj po\u00c5\u00a1tanski broj je ili neva\u00c5\u00bee\u00c4\u2021i ili ne spada u podru\u00c4\u008dja gde IKEA vr\u00c5\u00a1i isporuku",
              ZIP_IN_ENTER_ZIP_EXAMPLE : "npr. 75011",
              ZIP_IN_ERROR_BOX_MESSAGE_CONTENT : "Do\u00c5\u00a1lo je do trenutne gre\u00c5\u00a1ke s na\u00c5\u00a1e strane. Molimo te proveri dostupnost isporuke za svoj po\u00c5\u00a1tanski broj pri pla\u00c4\u2021anju ili unesi drugi po\u00c5\u00a1tanski broj. Izvinjavamo se na neugodnosti.",
              ZIP_IN_ERROR_BOX_MESSAGE_TITLE : "Ups, na\u00c5\u00a1a gre\u00c5\u00a1ka",
              ZIP_IN_INPUT_LABEL : "Po\u00c5\u00a1tanski broj",
              ZIP_IN_MORE_INFO_TEXT : "Vi\u00c5\u00a1e informacija za isporuku na {zipCode} pri pla\u00c4\u2021anju",
              ZIP_IN_NOT_AVAILABLE_FOR_DELIVERY : "Nije dostupno za isporuku na {zipCode}",
              ZIP_IN_RESULT_AVAILABLE_DESCRIPTION : "Ovaj proizvod dostupan je za isporuku na po\u00c5\u00a1tanski broj {zipCode}. Cene i termine isporuke prikaza\u00c4\u2021emo ti prilikom pla\u00c4\u2021anja.",
              ZIP_IN_RESULT_NOT_AVAILABILITY_DESCRIPTION : "Ovaj proizvod nije dostupan za isporuku na po\u00c5\u00a1tanski broj {zipCode}.",
              ZIP_IN_VALIDATION_ERROR : "Uneti po\u00c5\u00a1tanski broj je neva\u00c5\u00bee\u00c4\u2021i. Molimo te poku\u00c5\u00a1aj ponovo."
            }),
            updateSelectedStore : this.updateSelectedStore,
            updateFilterResult : this.updateFilterResult
          });
        }
      }, {
        key : "renderSelectStoreButton",
        value : function() {
          return this.state.hasFilterResult && this.state.selectedStore ? [{
            prefix : "range-revamp-",
            type : "primary",
            text : "Izaberi ovu robnu ku\u00c4\u2021u",
            onClick : this.onChangeStore
          }] : null;
        }
      }, {
        key : "renderStoreInfoContainer",
        value : function() {
          return root.default.createElement(History_1.default, null, root.default.createElement(FormioElement, {
            productAvailability : this.state.productAvailability,
            currentStore : this.state.currentStore,
            allStores : this.allStores,
            onChangeStore : this.onChangeStore,
            itemName : this.props.itemName,
            itemType : this.props.itemType,
            itemNo : this.props.itemNo,
            notify : this.props.notify,
            onShowChangeStoreClick : this.onShowChangeStoreClick
          }));
        }
      }, {
        key : "getAnalyticsData",
        value : function() {
          if (!this.state.currentStore) {
            return null;
          }
          var json = {
            isDefaultStore : this.allStores[0].name === this.state.currentStore.name,
            selectedStore : this.state.currentStore.name,
            itemType : this.props.itemType,
            itemNo : this.props.itemNo,
            storeId : this.state.currentStore.value
          };
          if (this.state.productAvailability) {
            var that = this.state.productAvailability;
            var malakh = that.inStockProbability;
            var CircularList = that.notSoldInStore;
            var rZone = that.outOfStock;
            /** @type {!Object} */
            json = Object.assign({}, json, {
              inStockProbability : malakh,
              notSoldInStore : CircularList,
              outOfStock : rZone
            });
          }
          return json;
        }
      }, {
        key : "renderModalContent",
        value : function() {
          return {
            content : this.state.showChangeStoreView ? this.renderChangeStore() : this.renderStoreInfoContainer(),
            modalBtns : this.state.showChangeStoreView && this.renderSelectStoreButton(),
            closeModalCallback : this.onCloseModal
          };
        }
      }, {
        key : "updateFilterResult",
        value : function(value) {
          if (value !== this.state.hasFilterResult) {
            this.setState({
              hasFilterResult : value
            });
          }
        }
      }, {
        key : "updateSelectedStore",
        value : function(recB) {
          this.setState({
            selectedStore : recB
          });
        }
      }, {
        key : "onCloseModal",
        value : function() {
          this.setState({
            isModalOpen : false,
            selectedStore : null,
            showChangeStoreView : false,
            hasFilterResult : true
          });
        }
      }, {
        key : "onStoreClick",
        value : function() {
          this.setState({
            isModalOpen : true
          });
          var e = this.getAnalyticsData();
          if (e) {
            this.props.gaEventDispatcher.pipStockCheck(e);
          }
        }
      }, {
        key : "onShowChangeStoreClick",
        value : function() {
          this.setState({
            showChangeStoreView : true,
            isModalOpen : true
          });
          var e = this.getAnalyticsData();
          if (e) {
            this.props.gaEventDispatcher.pipChangeStoreClick(e);
          } else {
            this.props.gaEventDispatcher.pipFirstShowChangeStoreClick();
          }
        }
      }, {
        key : "onChangeStore",
        value : function() {
          if (this.state.selectedStore) {
            r.a.set(this.LOCAL_STORAGE_SELECTED_STORE_ID, this.state.selectedStore.value);
            this.setState({
              currentStore : this.state.selectedStore,
              selectedStore : null,
              showChangeStoreView : false,
              hasFilterResult : true
            });
          }
          var e = this.getAnalyticsData();
          if (e) {
            this.props.gaEventDispatcher.pipSelectStoreButtonClick(e);
          }
        }
      }, {
        key : "updateProductAvailability",
        value : (word = regeneratorRuntime.mark(function start() {
          var prevvalue;
          var elem;
          var i;
          var value;
          var length;
          var end;
          var type;
          var message;
          return regeneratorRuntime.wrap(function(_context) {
            for (;;) {
              switch(_context.prev = _context.next) {
                case 0:
                  prevvalue = r.a.get(this.LOCAL_STORAGE_SELECTED_STORE_ID);
                  /** @type {null} */
                  elem = null;
                  /** @type {number} */
                  i = 0;
                case 3:
                  if (!(i < this.allStores.length)) {
                    /** @type {number} */
                    _context.next = 10;
                    break;
                  }
                  if (this.allStores[i].value !== prevvalue) {
                    /** @type {number} */
                    _context.next = 7;
                    break;
                  }
                  return elem = this.allStores[i], _context.abrupt("break", 10);
                case 7:
                  i++;
                  /** @type {number} */
                  _context.next = 3;
                  break;
                case 10:
                  if (elem) {
                    /** @type {number} */
                    _context.next = 16;
                    break;
                  }
                  if (1 !== this.allStores.length) {
                    /** @type {number} */
                    _context.next = 15;
                    break;
                  }
                  elem = this.allStores[0];
                  /** @type {number} */
                  _context.next = 16;
                  break;
                case 15:
                  return _context.abrupt("return");
                case 16:
                  return _context.next = 18, check(this.props.itemType, this.props.itemNo, this.props.itemName, this.props.typeName, this.props.subProducts, elem.value);
                case 18:
                  value = _context.sent;
                  length = window.RangeProductStatus.stockInfo;
                  type = (end = void 0 === length ? {} : length).valid ? add(elem.value, end) : void 0;
                  message = type ? filter(type, value) : value;
                  this.setState({
                    productAvailability : message,
                    currentStore : elem
                  });
                case 23:
                case "end":
                  return _context.stop();
              }
            }
          }, start, this);
        }), exports = function() {
          var e = this;
          /** @type {!Arguments} */
          var t = arguments;
          return new Promise(function(callback, html) {
            /**
             * @param {!Object} c
             * @return {undefined}
             */
            function range(c) {
              insert(after, callback, html, range, append, "next", c);
            }
            /**
             * @param {!Object} c
             * @return {undefined}
             */
            function append(c) {
              insert(after, callback, html, range, append, "throw", c);
            }
            var after = word.apply(e, t);
            range(void 0);
          });
        }, function() {
          return exports.apply(this, arguments);
        })
      }, {
        key : "onLocationPicked",
        value : function() {
          this.updateProductAvailability();
        }
      }, {
        key : "componentDidMount",
        value : function() {
          this.updateProductAvailability();
          results.navigation.locationPicked(this.onLocationPicked.bind(this));
        }
      }, {
        key : "componentDidUpdate",
        value : function(callbackId, data) {
          if (data.currentStore && data.currentStore.value !== this.state.currentStore.value) {
            this.updateProductAvailability();
          }
          if (!data.currentStore && this.state.currentStore && this.state.currentStore.value) {
            this.updateProductAvailability();
          }
        }
      }, {
        key : "render",
        value : function() {
          var _this = this;
          var helpers = this.state;
          var SchemaError = helpers.productAvailability;
          var identity = helpers.currentStore;
          return root.default.createElement("div", {
            className : "js-stockcheck-section"
          }, root.default.createElement(template.f, {
            store : identity ? identity.name : null,
            onClick : this.onStoreClick,
            productAvailability : SchemaError,
            onClickChange : this.allStores.length > 1 ? this.onShowChangeStoreClick : null
          }), this.state.isModalOpen && void Promise.all([$.e(0), $.e(20)]).then($.bind(null, 273)).then(function() {
            _this.props.notify.openModal([], _this.renderModalContent());
          }));
        }
      }]) && defineProperty(constructor.prototype, captureProperties), protoProps && defineProperty(constructor, protoProps), add;
    }(root.default.Component);
    var self = $(261);
    var $realtime = $(72);
    var addonModule = clone2()();
    /** @type {(Element|null)} */
    var chat_box = document.querySelector(".js-stockcheck-section");
    !function() {
      if (chat_box) {
        if (0 !== [{
          value : "050",
          name : "Beograd",
          storeUrl : "/rs/sr/stores/050",
          storeLocation : {
            longitude : "20.562966",
            latitude : "44.710218"
          },
          storeAddress : {
            cityName : "Beograd",
            address1 : "Astrid Lindgren 11",
            address2 : "Auto-put Beograd\u00e2\u20ac\u201dNi\u00c5\u00a1 (isklju\u00c4\u008denje Tran\u00c5\u00a1ped)",
            zipCode : "11231"
          },
          storeMapUrl : "/ms/sr_RS/img/customer_services/guide_to_ikea/Store_map_lista.jpg",
          timeZone : "Europe/Belgrade",
          storeContactInfo : {
            storeContactMethodList : [{
              storeContactMethodType : "PHONE",
              phoneNo : "011 7 555 444",
              storeContactMethodText : "Kontakt centar"
            }],
            paragraphList : [{}]
          }
        }].length) {
          var curSuggestion = Object(self.a)(chat_box);
          /** @type {!Object} */
          var mergedSuggestion = Object.assign({}, addonModule, curSuggestion, {
            notify : target.a,
            gaEventDispatcher : $realtime.gaEventDispatcher
          });
          Object(opt.k)(Object(opt.h)(GET_AUTH_URL_TIMEOUT, mergedSuggestion), chat_box.parentElement, chat_box);
        } else {
          chat_box.parentElement.removeChild(chat_box);
        }
      }
    }();
  },
  320 : function(mixin, doPost) {
    /**
     * @param {?} ast
     * @param {?} name
     * @param {?} o
     * @return {?}
     */
    mixin.exports = function(ast, name, o) {
      /** @type {string} */
      var a = "".concat("https://iows.ikea.com/retail/iows", "/").concat("rs/sr", "/stores/").concat(o, "/availability/").concat(ast, "/").concat(name);
      return fetch(a, {
        method : "GET",
        headers : {
          Accept : "application/vnd.ikea.iows+json;version=1.0",
          Contract : "37249",
          Consumer : "MAMMUT#pip-range"
        },
        mode : "cors",
        cache : "default"
      }).then(function(batchResponse) {
        return batchResponse.json().then(function(responseHandlerResult) {
          return {
            status : batchResponse.ok,
            headers : batchResponse.headers,
            body : responseHandlerResult.StockAvailability
          };
        });
      });
    };
  },
  321 : function(mixin, doPost, mageTemplate) {
    var template = mageTemplate(266);
    /**
     * @param {?} data
     * @param {?} _
     * @param {?} value
     * @param {string} type
     * @param {string} id
     * @return {?}
     */
    var next = function(data, _, value, type, id) {
      return {
        itemNo : _,
        itemName : value,
        itemType : type,
        typeName : id,
        quantity : 1,
        recommendedSalesLocation : step(data),
        salesMethodCode : data.SalesMethodCode ? Number(data.SalesMethodCode.$) : null,
        stockType : data.AvailableStockType ? data.AvailableStockType.$ : null
      };
    };
    /**
     * @param {?} state
     * @param {!Object} valid
     * @return {?}
     */
    var callback = function(state, valid) {
      var map = valid.reduce(function(baseLayers, layer) {
        var i = layer.ItemNo && layer.ItemNo.$;
        return i && (baseLayers[i] = layer), baseLayers;
      }, {});
      return state.map(function(error) {
        return cb(error, map[error.itemNo]);
      });
    };
    /**
     * @param {!Object} data
     * @return {?}
     */
    var cb = function(data) {
      var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return {
        itemNo : data.itemNo,
        itemName : data.name,
        itemType : data.itemType,
        typeName : data.type,
        quantity : Number(data.quantity),
        recommendedSalesLocation : step(options),
        salesMethodCode : options.SalesMethodCode ? Number(options.SalesMethodCode.$) : null,
        stockType : options.AvailableStockType ? options.AvailableStockType.$ : null
      };
    };
    /**
     * @param {?} data
     * @return {?}
     */
    var step = function(data) {
      var t;
      var b;
      /** @type {(null|number)} */
      var a = data.SalesMethodCode ? Number(data.SalesMethodCode.$) : null;
      return 1 !== a && 0 !== a ? null : 1 === a ? (t = data.RecommendedSalesLocation) && t.$ ? {
        aisle : (b = t.$.toString()).substring(0, 2),
        bin : b.substring(2, 4)
      } : null : function(data) {
        return data && data.$ ? data.$.toString() : null;
      }(data.RecommendedSalesLocation);
    };
    /**
     * @param {?} options
     * @return {?}
     */
    var date = function(options) {
      if (!options.RestockDateTime) {
        return null;
      }
      var data = options.RestockDateTime.$;
      /** @type {!Date} */
      var a = new Date(data);
      /** @type {!Date} */
      var b = new Date(data);
      return b.setDate(a.getDate() + 7), [date_from_string(a), date_from_string(b)];
    };
    /**
     * @param {!Date} year
     * @return {?}
     */
    var date_from_string = function(year) {
      var row = {
        customDateFormat : "d mmm, yyyy",
        customStockCheckDateFormat : "dd.mm.yyyy",
        customStockCheckTimeFormat : "HH:MM",
        customTimeFormat : "HH:MM",
        translations : {
          dayNames : ["ned", "pon", "uto", "sre", "\u00c4\u008det", "pet", "sub", "nedelja", "ponedeljak", "utorak", "sreda", "\u00c4\u008detvrtak", "petak", "subota"],
          monthNames : ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec", "januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
          timeNames : ["pre podne", "po podne"]
        }
      };
      return row && row.customStockCheckDateFormat ? template({
        date : year,
        langConfig : row.translations,
        format : row.customStockCheckDateFormat
      }) : (new Intl.DateTimeFormat("sr-RS", {
        day : "numeric",
        month : "long",
        year : "numeric"
      })).format(year);
    };
    /**
     * @param {string} hash
     * @param {?} type
     * @param {?} token
     * @param {string} context
     * @param {?} stats
     * @return {?}
     */
    mixin.exports = function(hash, type, token, context, stats) {
      return function(mapster) {
        try {
          var options = mapster.RetailItemAvailability;
          var user = options.RetailItemCommChildAvailabilityList ? (vnodes = options.RetailItemCommChildAvailabilityList.RetailItemCommChildAvailability) ? vnodes.map ? vnodes : [vnodes] : [] : [];
          /** @type {number} */
          var mmaModChoiceResultsAfterAnswer = Number(options.AvailableStock.$) || 0;
          /** @type {boolean} */
          var E = "YES" === options.InCustomerOrderRangeCode.$;
          /** @type {boolean} */
          var hasAnswered = "YES" === options.InStockRangeCode.$;
          return {
            stock : mmaModChoiceResultsAfterAnswer,
            inStockProbability : options.InStockProbabilityCode.$,
            isInStockRange : hasAnswered,
            isAvailableByOrderInStore : E,
            restockDates : date(options),
            outOfStock : 0 === mmaModChoiceResultsAfterAnswer && hasAnswered,
            recommendedSalesLocation : step(options),
            salesMethodCode : options.SalesMethodCode ? Number(options.SalesMethodCode.$) : null,
            items : "SPR" === hash ? callback(stats, user) : [next(options, token, type, hash, context)],
            parseSuccess : true
          };
        } catch (e) {
          return {
            stock : 0,
            inStockProbability : null,
            isAvailableByOrderInStore : null,
            restockDates : null,
            outOfStock : true,
            recommendedSalesLocation : null,
            salesMethodCode : null,
            items : [],
            parseSuccess : false
          };
        }
        var vnodes;
      };
    };
  },
  322 : function(letter, e, f) {
    var val;
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    e.default = void 0;
    var extendedClass = ((val = f(0)) && val.__esModule ? val : {
      default : val
    }).default.createElement("path", {
      fillRule : "evenodd",
      clipRule : "evenodd",
      d : "M21 4H1v16h15V10H6v8H3V6h16v7.17A3.001 3.001 0 0017 16v3a3 3 0 106 0v-3a3.001 3.001 0 00-2-2.83V4zM8 18h2v-6H8v6zm6 0h-2v-6h2v6zm5-2a1 1 0 112 0v3a1 1 0 11-2 0v-3z"
    });
    /**
     * @return {?}
     */
    e.default = function() {
      return [extendedClass];
    };
  },
  323 : function(blob, options, seriesStackIndexCallback) {
    var removeChromeDriver = seriesStackIndexCallback(324);
    /**
     * @param {?} paths
     * @return {?}
     */
    blob.exports = function(paths) {
      return removeChromeDriver(paths, 3).join(".");
    };
  },
  324 : function(mixin, doPost) {
    /**
     * @param {string} value
     * @param {number} type
     * @return {?}
     */
    mixin.exports = function(value, type) {
      if (!value.length) {
        return [""];
      }
      if (0 === type || !type) {
        throw new RangeError("Chunk size ".concat(type, " is not valid. Chunk size needs to be 1 or greater"));
      }
      return value.match(new RegExp(".{1,".concat(type, "}"), "g"));
    };
  },
  325 : function(mixin, doPost) {
    /**
     * @param {string} workerGlobalScope
     * @return {?}
     */
    mixin.exports = function(workerGlobalScope) {
      return function() {
        /** @type {string} */
        var self = workerGlobalScope;
        /** @type {number} */
        var i = 0;
        /** @type {number} */
        var _len = arguments.length;
        /** @type {!Array} */
        var args = new Array(_len);
        /** @type {number} */
        var _key = 0;
        for (; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        for (; i < args.length;) {
          if (null == self) {
            return self;
          }
          self = Array.isArray(args[i]) ? self[args[i][0]] : self[args[i]];
          /** @type {number} */
          i = i + 1;
        }
        return self;
      };
    };
  },
  326 : function(letter, e, f) {
    var val;
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    e.default = void 0;
    var EasyFit = ((val = f(327)) && val.__esModule ? val : {
      default : val
    }).default;
    e.default = EasyFit;
  },
  327 : function(cond, t, f) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @return {?}
     */
    function callback() {
      return (callback = Object.assign || function(result) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var para = arguments[i];
          var k;
          for (k in para) {
            if (Object.prototype.hasOwnProperty.call(para, k)) {
              result[k] = para[k];
            }
          }
        }
        return result;
      }).apply(this, arguments);
    }
    /**
     * @param {!Object} obj
     * @param {!Array} data
     * @return {?}
     */
    function get(obj, data) {
      if (null == obj) {
        return {};
      }
      var j;
      var i;
      var values = function(d, t) {
        if (null == d) {
          return {};
        }
        var p;
        var i;
        var ret = {};
        /** @type {!Array<string>} */
        var r = Object.keys(d);
        /** @type {number} */
        i = 0;
        for (; i < r.length; i++) {
          /** @type {string} */
          p = r[i];
          if (!(t.indexOf(p) >= 0)) {
            ret[p] = d[p];
          }
        }
        return ret;
      }(obj, data);
      if (Object.getOwnPropertySymbols) {
        /** @type {!Array<?>} */
        var values = Object.getOwnPropertySymbols(obj);
        /** @type {number} */
        i = 0;
        for (; i < values.length; i++) {
          j = values[i];
          if (!(data.indexOf(j) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(obj, j)) {
              values[j] = obj[j];
            }
          }
        }
      }
      return values;
    }
    Object.defineProperty(t, "__esModule", {
      value : true
    });
    t.default = void 0;
    f(2);
    var _react2 = _interopRequireDefault(f(0));
    var _deepAssign2 = _interopRequireDefault(f(4));
    var _CalendarDay2 = _interopRequireDefault(f(328));
    /**
     * @param {!Object} result
     * @return {?}
     */
    var render = function(result) {
      var p = result.prefix;
      var courseAssessments = result.children;
      var data = result.validation;
      var options = result.fieldHelper;
      var key = result.shouldValidate;
      var value = result.valid;
      var names = result.className;
      var c = result.disabled;
      var item = get(result, ["prefix", "children", "validation", "fieldHelper", "shouldValidate", "valid", "className", "disabled"]);
      var tableClass = (0, _deepAssign2.default)("".concat(p, "form-field"), !value && key && "".concat(p).concat(data.type), c && "".concat(p, "disabled"), names);
      /** @type {null} */
      var text = null;
      var T = options.id ? options.id : null;
      return key && !value && data.id && (T = data.id ? data.id : null), !value && key && data.msg ? text = _react2.default.createElement(_CalendarDay2.default, callback({
        prefix : p,
        type : data.type,
        msg : data.msg,
        linkText : data.linkText,
        link : data.link,
        id : data.id
      }, data)) : options.msg && (text = _react2.default.createElement(_CalendarDay2.default, callback({
        prefix : p,
        msg : options.msg,
        linkText : options.linkText,
        link : options.link,
        id : options.id,
        "aria-hidden" : c
      }, options))), _react2.default.createElement("div", callback({
        className : tableClass
      }, item), _react2.default.Children.map(courseAssessments, function(component) {
        /** @type {({describedById: ?}|{})} */
        var input = component.props.list ? {} : {
          describedById : T
        };
        return "InputField" !== component.type.name && "Checkbox" !== component.type.name || (input.shouldValidate = key, input.valid = value), _react2.default.cloneElement(component, input);
      }), text);
    };
    render.defaultProps = {
      fieldHelper : {},
      validation : {
        type : ""
      },
      shouldValidate : false,
      prefix : ""
    };
    /** @type {function(!Object): ?} */
    var renderEvent = render;
    /** @type {function(!Object): ?} */
    t.default = renderEvent;
  },
  328 : function(letter, e, f) {
    var val;
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    e.default = void 0;
    var EasyFit = ((val = f(329)) && val.__esModule ? val : {
      default : val
    }).default;
    e.default = EasyFit;
  },
  329 : function(letter, e, f) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @return {?}
     */
    function merge() {
      return (merge = Object.assign || function(result) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var para = arguments[i];
          var k;
          for (k in para) {
            if (Object.prototype.hasOwnProperty.call(para, k)) {
              result[k] = para[k];
            }
          }
        }
        return result;
      }).apply(this, arguments);
    }
    /**
     * @param {!Object} o
     * @param {!Array} obj
     * @return {?}
     */
    function get(o, obj) {
      if (null == o) {
        return {};
      }
      var k;
      var r;
      var t = function(obj, unresolved) {
        if (null == obj) {
          return {};
        }
        var key;
        var i;
        var all = {};
        /** @type {!Array<string>} */
        var r = Object.keys(obj);
        /** @type {number} */
        i = 0;
        for (; i < r.length; i++) {
          /** @type {string} */
          key = r[i];
          if (!(unresolved.indexOf(key) >= 0)) {
            all[key] = obj[key];
          }
        }
        return all;
      }(o, obj);
      if (Object.getOwnPropertySymbols) {
        /** @type {!Array<?>} */
        var i = Object.getOwnPropertySymbols(o);
        /** @type {number} */
        r = 0;
        for (; r < i.length; r++) {
          k = i[r];
          if (!(obj.indexOf(k) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(o, k)) {
              t[k] = o[k];
            }
          }
        }
      }
      return t;
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    e.default = void 0;
    f(2);
    var _deepAssign2 = _interopRequireDefault(f(0));
    var _noframeworkWaypoints2 = _interopRequireDefault(f(4));
    var _CalendarDay2 = _interopRequireDefault(f(22));
    /**
     * @param {!Object} props
     * @return {?}
     */
    var init = function(props) {
      var pname = props.className;
      var name = props.prefix;
      var url = props.link;
      var help = props.linkText;
      var message = props.msg;
      var attrs = get(props, ["className", "prefix", "link", "linkText", "msg"]);
      var n = (0, _noframeworkWaypoints2.default)("".concat(name, "inline-text"), pname);
      return _deepAssign2.default.createElement("div", merge({
        className : n
      }, attrs), _deepAssign2.default.createElement("span", null, message, " ", help && _deepAssign2.default.createElement(_CalendarDay2.default, {
        prefix : name,
        url : url,
        text : help
      })));
    };
    init.defaultProps = {
      prefix : ""
    };
    /** @type {function(!Object): ?} */
    var current = init;
    /** @type {function(!Object): ?} */
    e.default = current;
  },
  330 : function(letter, e, f) {
    var val;
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    e.default = void 0;
    var EasyFit = ((val = f(331)) && val.__esModule ? val : {
      default : val
    }).default;
    e.default = EasyFit;
  },
  331 : function(letter, e, f) {
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function next(obj) {
      return (next = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(_chai) {
        return typeof _chai;
      } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      })(obj);
    }
    /**
     * @param {!Object} obj
     * @return {?}
     */
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default : obj
      };
    }
    /**
     * @return {?}
     */
    function init() {
      if ("function" != typeof WeakMap) {
        return null;
      }
      /** @type {!WeakMap} */
      var attachmentsInProgress = new WeakMap;
      return init = function() {
        return attachmentsInProgress;
      }, attachmentsInProgress;
    }
    /**
     * @return {?}
     */
    function callback() {
      return (callback = Object.assign || function(result) {
        /** @type {number} */
        var i = 1;
        for (; i < arguments.length; i++) {
          var para = arguments[i];
          var k;
          for (k in para) {
            if (Object.prototype.hasOwnProperty.call(para, k)) {
              result[k] = para[k];
            }
          }
        }
        return result;
      }).apply(this, arguments);
    }
    /**
     * @param {!Object} obj
     * @param {!Array} t
     * @return {?}
     */
    function get(obj, t) {
      if (null == obj) {
        return {};
      }
      var key;
      var i;
      var res = function(source, targets) {
        if (null == source) {
          return {};
        }
        var prop;
        var i;
        var target = {};
        /** @type {!Array<string>} */
        var copy = Object.keys(source);
        /** @type {number} */
        i = 0;
        for (; i < copy.length; i++) {
          /** @type {string} */
          prop = copy[i];
          if (!(targets.indexOf(prop) >= 0)) {
            target[prop] = source[prop];
          }
        }
        return target;
      }(obj, t);
      if (Object.getOwnPropertySymbols) {
        /** @type {!Array<?>} */
        var r = Object.getOwnPropertySymbols(obj);
        /** @type {number} */
        i = 0;
        for (; i < r.length; i++) {
          key = r[i];
          if (!(t.indexOf(key) >= 0)) {
            if (Object.prototype.propertyIsEnumerable.call(obj, key)) {
              res[key] = obj[key];
            }
          }
        }
      }
      return res;
    }
    /**
     * @param {!Object} target
     * @param {number} props
     * @return {undefined}
     */
    function defineProperties(target, props) {
      /** @type {number} */
      var i = 0;
      for (; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        /** @type {boolean} */
        descriptor.configurable = true;
        if ("value" in descriptor) {
          /** @type {boolean} */
          descriptor.writable = true;
        }
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    /**
     * @param {!Function} value
     * @param {!Object} obj
     * @return {?}
     */
    function extend(value, obj) {
      return (extend = Object.setPrototypeOf || function(origin, proto) {
        return origin.__proto__ = proto, origin;
      })(value, obj);
    }
    /**
     * @param {!Array} e
     * @return {?}
     */
    function check(e) {
      var name = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) {
          return false;
        }
        if (Reflect.construct.sham) {
          return false;
        }
        if ("function" == typeof Proxy) {
          return true;
        }
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (e) {
          return false;
        }
      }();
      return function() {
        var t;
        var value = fn(e);
        if (name) {
          var ctor = fn(this).constructor;
          t = Reflect.construct(value, arguments, ctor);
        } else {
          t = value.apply(this, arguments);
        }
        return error(this, t);
      };
    }
    /**
     * @param {!Array} format
     * @param {(Object|string)} a
     * @return {?}
     */
    function error(format, a) {
      return !a || "object" !== next(a) && "function" != typeof a ? function(result) {
        if (void 0 === result) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return result;
      }(format) : a;
    }
    /**
     * @param {!Object} pos
     * @return {?}
     */
    function fn(pos) {
      return (fn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(pos);
    }
    Object.defineProperty(e, "__esModule", {
      value : true
    });
    e.default = void 0;
    f(2);
    var _this = function(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (null === obj || "object" !== next(obj) && "function" != typeof obj) {
        return {
          default : obj
        };
      }
      var container = init();
      if (container && container.has(obj)) {
        return container.get(obj);
      }
      var o = {};
      /** @type {function(T, string): (ObjectPropertyDescriptor<T>|undefined)} */
      var predicate = Object.defineProperty && Object.getOwnPropertyDescriptor;
      var name;
      for (name in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, name)) {
          /** @type {(ObjectPropertyDescriptor<?>|null|undefined)} */
          var prop = predicate ? Object.getOwnPropertyDescriptor(obj, name) : null;
          if (prop && (prop.get || prop.set)) {
            Object.defineProperty(o, name, prop);
          } else {
            o[name] = obj[name];
          }
        }
      }
      /** @type {!Object} */
      o.default = obj;
      if (container) {
        container.set(obj, o);
      }
      return o;
    }(f(0));
    var _CalendarDay2 = _interopRequireDefault(f(85));
    var _deepAssign2 = _interopRequireDefault(f(4));
    var $scope = function(_WebInspector$GeneralTreeElement) {
      /**
       * @param {?} start
       * @return {?}
       */
      function data(start) {
        var axis;
        return function(value, t) {
          if (!(value instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }(this, data), axis = m.call(this, start), _this.createRef && (axis.radiobutton = (0, _this.createRef)()), axis;
      }
      !function(e, superClass) {
        if ("function" != typeof superClass && null !== superClass) {
          throw new TypeError("Super expression must either be null or a function");
        }
        /** @type {!Object} */
        e.prototype = Object.create(superClass && superClass.prototype, {
          constructor : {
            value : e,
            writable : true,
            configurable : true
          }
        });
        if (superClass) {
          extend(e, superClass);
        }
      }(data, _WebInspector$GeneralTreeElement);
      var Constructor;
      var protoProps;
      var staticProps;
      var m = check(data);
      return Constructor = data, (protoProps = [{
        key : "render",
        value : function() {
          var recompile_shader = this;
          var props = this.props;
          var pname = props.className;
          var name = props.prefix;
          var id = props.id;
          var label = props.label;
          var strategy_name = props.name;
          var d = props.value;
          var onChange = props.onChange;
          var readOnly = props.disabled;
          var v = props.describedById;
          var isRequired = props.required;
          var init = props.subtle;
          var item = get(props, ["className", "prefix", "id", "label", "name", "value", "onChange", "disabled", "describedById", "required", "subtle"]);
          var result = (0, _deepAssign2.default)(pname, "".concat(name, "radio"), init && "".concat(name, "radio--subtle"));
          return _this.default.createElement("div", {
            className : result
          }, _this.default.createElement("input", callback({
            type : "radio",
            value : d,
            name : strategy_name,
            id : id,
            ref : function(name) {
              return recompile_shader.radiobutton = name;
            },
            disabled : readOnly,
            onChange : readOnly ? null : onChange,
            "aria-describedby" : v,
            required : isRequired
          }, item)), _this.default.createElement("span", {
            className : "".concat(name, "radio__symbol")
          }), label && _this.default.createElement("span", {
            className : "".concat(name, "radio__label")
          }, _this.default.createElement(_CalendarDay2.default, {
            prefix : name,
            htmlFor : id,
            label : label
          })));
        }
      }]) && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), data;
    }(_this.Component);
    $scope.defaultProps = {
      prefix : "",
      id : "radio",
      name : "radioname",
      value : "ett",
      disabled : false,
      onChange : function(elements) {
        console.log("radio clicked", elements.target.value);
      },
      subtle : false
    };
    var s = $scope;
    e.default = s;
  },
  332 : function(mixin, doPost) {
    /**
     * @param {string} name
     * @return {?}
     */
    mixin.exports = function(name) {
      return name.toLocaleLowerCase().normalize("NFKC");
    };
  }
}]);
