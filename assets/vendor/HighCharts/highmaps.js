﻿/*
 Highmaps JS v10.3.3 (2023-01-20)

 (c) 2011-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (X, I) { "object" === typeof module && module.exports ? (I["default"] = I, module.exports = X.document ? I(X) : I) : "function" === typeof define && define.amd ? define("highcharts/highmaps", function () { return I(X) }) : (X.Highcharts && X.Highcharts.error(16, !0), X.Highcharts = I(X)) })("undefined" !== typeof window ? window : this, function (X) {
    function I(c, K, e, C) { c.hasOwnProperty(K) || (c[K] = C.apply(null, e), "function" === typeof CustomEvent && X.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: K, module: c[K] } }))) } var e =
        {}; I(e, "Core/Globals.js", [], function () {
            var c; (function (c) {
                c.SVG_NS = "http://www.w3.org/2000/svg"; c.product = "Highcharts"; c.version = "10.3.3"; c.win = "undefined" !== typeof X ? X : {}; c.doc = c.win.document; c.svg = c.doc && c.doc.createElementNS && !!c.doc.createElementNS(c.SVG_NS, "svg").createSVGRect; c.userAgent = c.win.navigator && c.win.navigator.userAgent || ""; c.isChrome = -1 !== c.userAgent.indexOf("Chrome"); c.isFirefox = -1 !== c.userAgent.indexOf("Firefox"); c.isMS = /(edge|msie|trident)/i.test(c.userAgent) && !c.win.opera; c.isSafari =
                    !c.isChrome && -1 !== c.userAgent.indexOf("Safari"); c.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(c.userAgent); c.isWebKit = -1 !== c.userAgent.indexOf("AppleWebKit"); c.deg2rad = 2 * Math.PI / 360; c.hasBidiBug = c.isFirefox && 4 > parseInt(c.userAgent.split("Firefox/")[1], 10); c.hasTouch = !!c.win.TouchEvent; c.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"]; c.noop = function () { }; c.supportsPassiveEvents = function () {
                        var e = !1; if (!c.isMS) {
                            var K = Object.defineProperty({}, "passive", { get: function () { e = !0 } });
                            c.win.addEventListener && c.win.removeEventListener && (c.win.addEventListener("testPassive", c.noop, K), c.win.removeEventListener("testPassive", c.noop, K))
                        } return e
                    }(); c.charts = []; c.dateFormats = {}; c.seriesTypes = {}; c.symbolSizes = {}; c.chartCount = 0
            })(c || (c = {})); ""; return c
        }); I(e, "Core/Utilities.js", [e["Core/Globals.js"]], function (c) {
            function e(g, a, n, J) {
                var A = a ? "Highcharts error" : "Highcharts warning"; 32 === g && (g = "" + A + ": Deprecated member"); var d = m(g), b = d ? "" + A + " #" + g + ": www.highcharts.com/errors/" + g + "/" : g.toString();
                if ("undefined" !== typeof J) { var f = ""; d && (b += "?"); v(J, function (g, a) { f += "\n - ".concat(a, ": ").concat(g); d && (b += encodeURI(a) + "=" + encodeURI(g)) }); b += f } r(c, "displayError", { chart: n, code: g, message: b, params: J }, function () { if (a) throw Error(b); l.console && -1 === e.messages.indexOf(b) && console.warn(b) }); e.messages.push(b)
            } function x(g, a) { var A = {}; v(g, function (l, n) { if (F(g[n], !0) && !g.nodeType && a[n]) l = x(g[n], a[n]), Object.keys(l).length && (A[n] = l); else if (F(g[n]) || g[n] !== a[n] || n in g && !(n in a)) A[n] = g[n] }); return A }
            function C(g, a) { return parseInt(g, a || 10) } function q(g) { return "string" === typeof g } function w(g) { g = Object.prototype.toString.call(g); return "[object Array]" === g || "[object Array Iterator]" === g } function F(g, a) { return !!g && "object" === typeof g && (!a || !w(g)) } function y(g) { return F(g) && "number" === typeof g.nodeType } function t(g) { var a = g && g.constructor; return !(!F(g, !0) || y(g) || !a || !a.name || "Object" === a.name) } function m(g) { return "number" === typeof g && !isNaN(g) && Infinity > g && -Infinity < g } function k(g) {
                return "undefined" !==
                    typeof g && null !== g
            } function d(g, a, l) { var A = q(a) && !k(l), n, b = function (a, l) { k(a) ? g.setAttribute(l, a) : A ? (n = g.getAttribute(l)) || "class" !== l || (n = g.getAttribute(l + "Name")) : g.removeAttribute(l) }; q(a) ? b(l, a) : v(a, b); return n } function b(g, a) { var l; g || (g = {}); for (l in a) g[l] = a[l]; return g } function f() { for (var g = arguments, a = g.length, l = 0; l < a; l++) { var n = g[l]; if ("undefined" !== typeof n && null !== n) return n } } function h(g, a) {
                c.isMS && !c.svg && a && k(a.opacity) && (a.filter = "alpha(opacity=".concat(100 * a.opacity, ")")); b(g.style,
                    a)
            } function p(g) { return Math.pow(10, Math.floor(Math.log(g) / Math.LN10)) } function G(g, a) { return 1E14 < g ? g : parseFloat(g.toPrecision(a || 14)) } function D(g, a, n) {
                var A = c.getStyle || D; if ("width" === a) return a = Math.min(g.offsetWidth, g.scrollWidth), n = g.getBoundingClientRect && g.getBoundingClientRect().width, n < a && n >= a - 1 && (a = Math.floor(n)), Math.max(0, a - (A(g, "padding-left", !0) || 0) - (A(g, "padding-right", !0) || 0)); if ("height" === a) return Math.max(0, Math.min(g.offsetHeight, g.scrollHeight) - (A(g, "padding-top", !0) || 0) - (A(g,
                    "padding-bottom", !0) || 0)); l.getComputedStyle || e(27, !0); if (g = l.getComputedStyle(g, void 0)) { var b = g.getPropertyValue(a); f(n, "opacity" !== a) && (b = C(b)) } return b
            } function v(g, a, l) { for (var n in g) Object.hasOwnProperty.call(g, n) && a.call(l || g[n], g[n], n, g) } function B(g, a, l) {
                function n(a, l) { var n = g.removeEventListener || c.removeEventListenerPolyfill; n && n.call(g, a, l, !1) } function A(l) { var A; if (g.nodeName) { if (a) { var J = {}; J[a] = !0 } else J = l; v(J, function (g, a) { if (l[a]) for (A = l[a].length; A--;)n(a, l[a][A].fn) }) } } var b =
                    "function" === typeof g && g.prototype || g; if (Object.hasOwnProperty.call(b, "hcEvents")) { var d = b.hcEvents; a ? (b = d[a] || [], l ? (d[a] = b.filter(function (g) { return l !== g.fn }), n(a, l)) : (A(d), d[a] = [])) : (A(d), delete b.hcEvents) }
            } function r(g, a, l, n) {
                l = l || {}; if (z.createEvent && (g.dispatchEvent || g.fireEvent && g !== c)) { var A = z.createEvent("Events"); A.initEvent(a, !0, !0); l = b(A, l); g.dispatchEvent ? g.dispatchEvent(l) : g.fireEvent(a, l) } else if (g.hcEvents) {
                    l.target || b(l, {
                        preventDefault: function () { l.defaultPrevented = !0 }, target: g,
                        type: a
                    }); A = []; for (var J = g, d = !1; J.hcEvents;)Object.hasOwnProperty.call(J, "hcEvents") && J.hcEvents[a] && (A.length && (d = !0), A.unshift.apply(A, J.hcEvents[a])), J = Object.getPrototypeOf(J); d && A.sort(function (g, a) { return g.order - a.order }); A.forEach(function (a) { !1 === a.fn.call(g, l) && l.preventDefault() })
                } n && !l.defaultPrevented && n.call(g, l)
            } var a = c.charts, z = c.doc, l = c.win; (e || (e = {})).messages = []; Math.easeInOutSine = function (g) { return -.5 * (Math.cos(Math.PI * g) - 1) }; var u = Array.prototype.find ? function (g, a) { return g.find(a) } :
                function (g, a) { var l, n = g.length; for (l = 0; l < n; l++)if (a(g[l], l)) return g[l] }; v({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (g, a) { c[a] = function (l) { var n; e(32, !1, void 0, (n = {}, n["Highcharts.".concat(a)] = "use Array.".concat(g), n)); return Array.prototype[g].apply(l, [].slice.call(arguments, 1)) } }); var n, E = function () { var g = Math.random().toString(36).substring(2, 9) + "-", a = 0; return function () { return "highcharts-" + (n ? "" : g) + a++ } }(); l.jQuery && (l.jQuery.fn.highcharts = function () {
                    var g =
                        [].slice.call(arguments); if (this[0]) return g[0] ? (new (c[q(g[0]) ? g.shift() : "Chart"])(this[0], g[0], g[1]), this) : a[d(this[0], "data-highcharts-chart")]
                }); u = {
                    addEvent: function (g, a, l, n) {
                        void 0 === n && (n = {}); var A = "function" === typeof g && g.prototype || g; Object.hasOwnProperty.call(A, "hcEvents") || (A.hcEvents = {}); A = A.hcEvents; c.Point && g instanceof c.Point && g.series && g.series.chart && (g.series.chart.runTrackerClick = !0); var J = g.addEventListener || c.addEventListenerPolyfill; J && J.call(g, a, l, c.supportsPassiveEvents ? {
                            passive: void 0 ===
                                n.passive ? -1 !== a.indexOf("touch") : n.passive, capture: !1
                        } : !1); A[a] || (A[a] = []); A[a].push({ fn: l, order: "number" === typeof n.order ? n.order : Infinity }); A[a].sort(function (g, a) { return g.order - a.order }); return function () { B(g, a, l) }
                    }, arrayMax: function (g) { for (var a = g.length, l = g[0]; a--;)g[a] > l && (l = g[a]); return l }, arrayMin: function (g) { for (var a = g.length, l = g[0]; a--;)g[a] < l && (l = g[a]); return l }, attr: d, clamp: function (g, a, l) { return g > a ? g < l ? g : l : a }, cleanRecursively: x, clearTimeout: function (g) { k(g) && clearTimeout(g) }, correctFloat: G,
                    createElement: function (g, a, l, n, d) { g = z.createElement(g); a && b(g, a); d && h(g, { padding: "0", border: "none", margin: "0" }); l && h(g, l); n && n.appendChild(g); return g }, css: h, defined: k, destroyObjectProperties: function (g, a) { v(g, function (l, n) { l && l !== a && l.destroy && l.destroy(); delete g[n] }) }, discardElement: function (g) { g && g.parentElement && g.parentElement.removeChild(g) }, erase: function (g, a) { for (var l = g.length; l--;)if (g[l] === a) { g.splice(l, 1); break } }, error: e, extend: b, extendClass: function (g, a) {
                        var l = function () { }; l.prototype =
                            new g; b(l.prototype, a); return l
                    }, find: u, fireEvent: r, getMagnitude: p, getNestedProperty: function (g, a) { for (g = g.split("."); g.length && k(a);) { var n = g.shift(); if ("undefined" === typeof n || "__proto__" === n) return; a = a[n]; if (!k(a) || "function" === typeof a || "number" === typeof a.nodeType || a === l) return } return a }, getStyle: D, inArray: function (a, l, n) { e(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }); return l.indexOf(a, n) }, isArray: w, isClass: t, isDOMElement: y, isFunction: function (a) { return "function" === typeof a }, isNumber: m,
                    isObject: F, isString: q, keys: function (a) { e(32, !1, void 0, { "Highcharts.keys": "use Object.keys" }); return Object.keys(a) }, merge: function () { var a, l = arguments, n = {}, J = function (a, g) { "object" !== typeof a && (a = {}); v(g, function (l, n) { "__proto__" !== n && "constructor" !== n && (!F(l, !0) || t(l) || y(l) ? a[n] = g[n] : a[n] = J(a[n] || {}, l)) }); return a }; !0 === l[0] && (n = l[1], l = Array.prototype.slice.call(l, 2)); var b = l.length; for (a = 0; a < b; a++)n = J(n, l[a]); return n }, normalizeTickInterval: function (a, l, n, J, b) {
                        var g = a; n = f(n, p(a)); var d = a / n; l || (l =
                            b ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === J && (1 === n ? l = l.filter(function (a) { return 0 === a % 1 }) : .1 >= n && (l = [1 / n]))); for (J = 0; J < l.length && !(g = l[J], b && g * n >= a || !b && d <= (l[J] + (l[J + 1] || l[J])) / 2); J++); return g = G(g * n, -Math.round(Math.log(.001) / Math.LN10))
                    }, objectEach: v, offset: function (a) {
                        var g = z.documentElement; a = a.parentElement || a.parentNode ? a.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 }; return {
                            top: a.top + (l.pageYOffset || g.scrollTop) - (g.clientTop || 0), left: a.left + (l.pageXOffset || g.scrollLeft) -
                                (g.clientLeft || 0), width: a.width, height: a.height
                        }
                    }, pad: function (a, l, n) { return Array((l || 2) + 1 - String(a).replace("-", "").length).join(n || "0") + a }, pick: f, pInt: C, relativeLength: function (a, l, n) { return /%$/.test(a) ? l * parseFloat(a) / 100 + (n || 0) : parseFloat(a) }, removeEvent: B, splat: function (a) { return w(a) ? a : [a] }, stableSort: function (a, l) { var g = a.length, n, b; for (b = 0; b < g; b++)a[b].safeI = b; a.sort(function (a, g) { n = l(a, g); return 0 === n ? a.safeI - g.safeI : n }); for (b = 0; b < g; b++)delete a[b].safeI }, syncTimeout: function (a, l, n) {
                        if (0 <
                            l) return setTimeout(a, l, n); a.call(0, n); return -1
                    }, timeUnits: { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }, uniqueKey: E, useSerialIds: function (a) { return n = f(a, n) }, wrap: function (a, l, n) { var g = a[l]; a[l] = function () { var a = arguments, l = this; return n.apply(this, [function () { return g.apply(l, arguments.length ? arguments : a) }].concat([].slice.call(arguments))) } }
                }; ""; return u
        }); I(e, "Core/Chart/ChartDefaults.js", [], function () {
            return {
                alignThresholds: !1, panning: {
                    enabled: !1,
                    type: "x"
                }, styledMode: !1, borderRadius: 0, colorCount: 10, allowMutatingData: !0, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, zoomBySingleTouch: !1, zooming: { singleTouch: !1, resetButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } } }, width: null, height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
            }
        }); I(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (c,
            e) {
                var K = e.isNumber, C = e.merge, q = e.pInt; e = function () {
                    function e(F) { this.rgba = [NaN, NaN, NaN, NaN]; this.input = F; var y = c.Color; if (y && y !== e) return new y(F); if (!(this instanceof e)) return new e(F); this.init(F) } e.parse = function (c) { return c ? new e(c) : e.None }; e.prototype.init = function (c) {
                        var y; if ("object" === typeof c && "undefined" !== typeof c.stops) this.stops = c.stops.map(function (d) { return new e(d[1]) }); else if ("string" === typeof c) {
                            this.input = c = e.names[c.toLowerCase()] || c; if ("#" === c.charAt(0)) {
                                var t = c.length; var m =
                                    parseInt(c.substr(1), 16); 7 === t ? y = [(m & 16711680) >> 16, (m & 65280) >> 8, m & 255, 1] : 4 === t && (y = [(m & 3840) >> 4 | (m & 3840) >> 8, (m & 240) >> 4 | m & 240, (m & 15) << 4 | m & 15, 1])
                            } if (!y) for (m = e.parsers.length; m-- && !y;) { var k = e.parsers[m]; (t = k.regex.exec(c)) && (y = k.parse(t)) }
                        } y && (this.rgba = y)
                    }; e.prototype.get = function (c) {
                        var y = this.input, t = this.rgba; if ("object" === typeof y && "undefined" !== typeof this.stops) { var m = C(y); m.stops = [].slice.call(m.stops); this.stops.forEach(function (k, d) { m.stops[d] = [m.stops[d][0], k.get(c)] }); return m } return t &&
                            K(t[0]) ? "rgb" === c || !c && 1 === t[3] ? "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")" : "a" === c ? "".concat(t[3]) : "rgba(" + t.join(",") + ")" : y
                    }; e.prototype.brighten = function (c) { var y = this.rgba; if (this.stops) this.stops.forEach(function (m) { m.brighten(c) }); else if (K(c) && 0 !== c) for (var t = 0; 3 > t; t++)y[t] += q(255 * c), 0 > y[t] && (y[t] = 0), 255 < y[t] && (y[t] = 255); return this }; e.prototype.setOpacity = function (c) { this.rgba[3] = c; return this }; e.prototype.tweenTo = function (c, y) {
                        var t = this.rgba, m = c.rgba; if (!K(t[0]) || !K(m[0])) return c.input || "none"; c =
                            1 !== m[3] || 1 !== t[3]; return (c ? "rgba(" : "rgb(") + Math.round(m[0] + (t[0] - m[0]) * (1 - y)) + "," + Math.round(m[1] + (t[1] - m[1]) * (1 - y)) + "," + Math.round(m[2] + (t[2] - m[2]) * (1 - y)) + (c ? "," + (m[3] + (t[3] - m[3]) * (1 - y)) : "") + ")"
                    }; e.names = { white: "#ffffff", black: "#000000" }; e.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (c) { return [q(c[1]), q(c[2]), q(c[3]), parseFloat(c[4], 10)] } }, {
                        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (c) {
                            return [q(c[1]),
                            q(c[2]), q(c[3]), 1]
                        }
                    }]; e.None = new e(""); return e
                }(); ""; return e
        }); I(e, "Core/Color/Palettes.js", [], function () { return { colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ") } }); I(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e) {
            var K = c.win, C = e.defined, q = e.error, w = e.extend, F = e.isObject, y = e.merge, t = e.objectEach, m = e.pad, k = e.pick, d = e.splat, b = e.timeUnits, f = c.isSafari && K.Intl && K.Intl.DateTimeFormat.prototype.formatRange, h = c.isSafari &&
                K.Intl && !K.Intl.DateTimeFormat.prototype.formatRange; e = function () {
                    function p(b) { this.options = {}; this.variableTimezone = this.useUTC = !1; this.Date = K.Date; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.update(b) } p.prototype.get = function (b, d) { if (this.variableTimezone || this.timezoneOffset) { var f = d.getTime(), h = f - this.getTimezoneOffset(d); d.setTime(h); b = d["getUTC" + b](); d.setTime(f); return b } return this.useUTC ? d["getUTC" + b]() : d["get" + b]() }; p.prototype.set = function (b, d, h) {
                        if (this.variableTimezone ||
                            this.timezoneOffset) { if ("Milliseconds" === b || "Seconds" === b || "Minutes" === b && 0 === this.getTimezoneOffset(d) % 36E5) return d["setUTC" + b](h); var p = this.getTimezoneOffset(d); p = d.getTime() - p; d.setTime(p); d["setUTC" + b](h); b = this.getTimezoneOffset(d); p = d.getTime() + b; return d.setTime(p) } return this.useUTC || f && "FullYear" === b ? d["setUTC" + b](h) : d["set" + b](h)
                    }; p.prototype.update = function (b) {
                        void 0 === b && (b = {}); var d = k(b.useUTC, !0); this.options = b = y(!0, this.options, b); this.Date = b.Date || K.Date || Date; this.timezoneOffset =
                            (this.useUTC = d) && b.timezoneOffset || void 0; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.variableTimezone = d && !(!b.getTimezoneOffset && !b.timezone)
                    }; p.prototype.makeTime = function (b, d, f, p, r, a) { if (this.useUTC) { var z = this.Date.UTC.apply(0, arguments); var l = this.getTimezoneOffset(z); z += l; var u = this.getTimezoneOffset(z); l !== u ? z += u - l : l - 36E5 !== this.getTimezoneOffset(z - 36E5) || h || (z -= 36E5) } else z = (new this.Date(b, d, k(f, 1), k(p, 0), k(r, 0), k(a, 0))).getTime(); return z }; p.prototype.timezoneOffsetFunction =
                        function () { var b = this, d = this.options, f = d.getTimezoneOffset, h = d.moment || K.moment; if (!this.useUTC) return function (b) { return 6E4 * (new Date(b.toString())).getTimezoneOffset() }; if (d.timezone) { if (h) return function (b) { return 6E4 * -h.tz(b, d.timezone).utcOffset() }; q(25) } return this.useUTC && f ? function (b) { return 6E4 * f(b.valueOf()) } : function () { return 6E4 * (b.timezoneOffset || 0) } }; p.prototype.dateFormat = function (b, d, f) {
                            if (!C(d) || isNaN(d)) return c.defaultOptions.lang && c.defaultOptions.lang.invalidDate || ""; b = k(b, "%Y-%m-%d %H:%M:%S");
                            var h = this, r = new this.Date(d), a = this.get("Hours", r), z = this.get("Day", r), l = this.get("Date", r), u = this.get("Month", r), n = this.get("FullYear", r), p = c.defaultOptions.lang, g = p && p.weekdays, A = p && p.shortWeekdays; r = w({ a: A ? A[z] : g[z].substr(0, 3), A: g[z], d: m(l), e: m(l, 2, " "), w: z, b: p.shortMonths[u], B: p.months[u], m: m(u + 1), o: u + 1, y: n.toString().substr(2, 2), Y: n, H: m(a), k: a, I: m(a % 12 || 12), l: a % 12 || 12, M: m(this.get("Minutes", r)), p: 12 > a ? "AM" : "PM", P: 12 > a ? "am" : "pm", S: m(r.getSeconds()), L: m(Math.floor(d % 1E3), 3) }, c.dateFormats); t(r,
                                function (a, g) { for (; -1 !== b.indexOf("%" + g);)b = b.replace("%" + g, "function" === typeof a ? a.call(h, d) : a) }); return f ? b.substr(0, 1).toUpperCase() + b.substr(1) : b
                        }; p.prototype.resolveDTLFormat = function (b) { return F(b, !0) ? b : (b = d(b), { main: b[0], from: b[1], to: b[2] }) }; p.prototype.getTimeTicks = function (d, f, h, p) {
                            var r = this, a = [], z = {}, l = new r.Date(f), u = d.unitRange, n = d.count || 1, E; p = k(p, 1); if (C(f)) {
                                r.set("Milliseconds", l, u >= b.second ? 0 : n * Math.floor(r.get("Milliseconds", l) / n)); u >= b.second && r.set("Seconds", l, u >= b.minute ? 0 : n *
                                    Math.floor(r.get("Seconds", l) / n)); u >= b.minute && r.set("Minutes", l, u >= b.hour ? 0 : n * Math.floor(r.get("Minutes", l) / n)); u >= b.hour && r.set("Hours", l, u >= b.day ? 0 : n * Math.floor(r.get("Hours", l) / n)); u >= b.day && r.set("Date", l, u >= b.month ? 1 : Math.max(1, n * Math.floor(r.get("Date", l) / n))); if (u >= b.month) { r.set("Month", l, u >= b.year ? 0 : n * Math.floor(r.get("Month", l) / n)); var g = r.get("FullYear", l) } u >= b.year && r.set("FullYear", l, g - g % n); u === b.week && (g = r.get("Day", l), r.set("Date", l, r.get("Date", l) - g + p + (g < p ? -7 : 0))); g = r.get("FullYear",
                                        l); p = r.get("Month", l); var A = r.get("Date", l), G = r.get("Hours", l); f = l.getTime(); !r.variableTimezone && r.useUTC || !C(h) || (E = h - f > 4 * b.month || r.getTimezoneOffset(f) !== r.getTimezoneOffset(h)); f = l.getTime(); for (l = 1; f < h;)a.push(f), f = u === b.year ? r.makeTime(g + l * n, 0) : u === b.month ? r.makeTime(g, p + l * n) : !E || u !== b.day && u !== b.week ? E && u === b.hour && 1 < n ? r.makeTime(g, p, A, G + l * n) : f + u * n : r.makeTime(g, p, A + l * n * (u === b.day ? 1 : 7)), l++; a.push(f); u <= b.hour && 1E4 > a.length && a.forEach(function (a) {
                                            0 === a % 18E5 && "000000000" === r.dateFormat("%H%M%S%L",
                                                a) && (z[a] = "day")
                                        })
                            } a.info = w(d, { higherRanks: z, totalRange: u * n }); return a
                        }; p.prototype.getDateFormat = function (d, f, h, p) { var r = this.dateFormat("%m-%d %H:%M:%S.%L", f), a = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, z = "millisecond"; for (l in b) { if (d === b.week && +this.dateFormat("%w", f) === h && "00:00:00.000" === r.substr(6)) { var l = "week"; break } if (b[l] > d) { l = z; break } if (a[l] && r.substr(a[l]) !== "01-01 00:00:00.000".substr(a[l])) break; "week" !== l && (z = l) } return this.resolveDTLFormat(p[l]).main }; return p
                }(); ""; return e
        });
    I(e, "Core/Defaults.js", [e["Core/Chart/ChartDefaults.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Color/Palettes.js"], e["Core/Time.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w) {
        e = e.parse; var K = w.merge, y = {
            colors: C.colors, symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
                loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "
            }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: !0 }, chart: c, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {},
            labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                enabled: !0, align: "center", alignColumns: !0, className: "highcharts-no-tooltip", layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: { activeColor: "#003399", inactiveColor: "#cccccc" }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px", height: "13px"
                }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
            }, loading: { labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: { position: "absolute", backgroundColor: "#ffffff", opacity: .5, textAlign: "center" } }, tooltip: {
                enabled: !0, animation: x.svg, borderRadius: 3, dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y",
                    month: "%B %Y", year: "%Y"
                }, footerFormat: "", headerShape: "callout", hideDelay: 500, padding: 8, shape: "callout", shared: !1, snap: x.isTouchDevice ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: e("#f7f7f7").setOpacity(.85).get(), borderWidth: 1, shadow: !0, stickOnContact: !1, style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }, useHTML: !1
            }, credits: {
                enabled: !0,
                href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com"
            }
        }; y.chart.styledMode = !1; ""; var t = new q(K(y.global, y.time)); c = { defaultOptions: y, defaultTime: t, getOptions: function () { return y }, setOptions: function (m) { K(!0, y, m); if (m.time || m.global) x.time ? x.time.update(K(y.global, y.time, m.global, m.time)) : x.time = t; return y } }; ""; return c
    }); I(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"],
    e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e, x) {
        var K = c.parse, q = e.win, w = x.isNumber, F = x.objectEach; return function () {
            function c(c, m, k) { this.pos = NaN; this.options = m; this.elem = c; this.prop = k } c.prototype.dSetter = function () {
                var c = this.paths, m = c && c[0]; c = c && c[1]; var k = this.now || 0, d = []; if (1 !== k && m && c) if (m.length === c.length && 1 > k) for (var b = 0; b < c.length; b++) { for (var f = m[b], h = c[b], p = [], G = 0; G < h.length; G++) { var D = f[G], v = h[G]; w(D) && w(v) && ("A" !== h[0] || 4 !== G && 5 !== G) ? p[G] = D + k * (v - D) : p[G] = v } d.push(p) } else d =
                    c; else d = this.toD || []; this.elem.attr("d", d, void 0, !0)
            }; c.prototype.update = function () { var c = this.elem, m = this.prop, k = this.now, d = this.options.step; if (this[m + "Setter"]) this[m + "Setter"](); else c.attr ? c.element && c.attr(m, k, null, !0) : c.style[m] = k + this.unit; d && d.call(c, k, this) }; c.prototype.run = function (t, m, k) {
                var d = this, b = d.options, f = function (b) { return f.stopped ? !1 : d.step(b) }, h = q.requestAnimationFrame || function (b) { setTimeout(b, 13) }, p = function () {
                    for (var b = 0; b < c.timers.length; b++)c.timers[b]() || c.timers.splice(b--,
                        1); c.timers.length && h(p)
                }; t !== m || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = t, this.end = m, this.unit = k, this.now = this.start, this.pos = 0, f.elem = this.elem, f.prop = this.prop, f() && 1 === c.timers.push(f) && h(p)) : (delete b.curAnim[this.prop], b.complete && 0 === Object.keys(b.curAnim).length && b.complete.call(this.elem))
            }; c.prototype.step = function (c) {
                var m = +new Date, k = this.options, d = this.elem, b = k.complete, f = k.duration, h = k.curAnim; if (d.attr && !d.element) c = !1; else if (c || m >= f + this.startTime) {
                    this.now =
                    this.end; this.pos = 1; this.update(); var p = h[this.prop] = !0; F(h, function (b) { !0 !== b && (p = !1) }); p && b && b.call(d); c = !1
                } else this.pos = k.easing((m - this.startTime) / f), this.now = this.start + (this.end - this.start) * this.pos, this.update(), c = !0; return c
            }; c.prototype.initPath = function (c, m, k) {
                function d(b, a) { for (; b.length < B;) { var d = b[0], l = a[B - b.length]; l && "M" === d[0] && (b[0] = "C" === l[0] ? ["C", d[1], d[2], d[1], d[2], d[1], d[2]] : ["L", d[1], d[2]]); b.unshift(d); p && (d = b.pop(), b.push(b[b.length - 1], d)) } } function b(b, a) {
                    for (; b.length <
                        B;)if (a = b[Math.floor(b.length / G) - 1].slice(), "C" === a[0] && (a[1] = a[5], a[2] = a[6]), p) { var d = b[Math.floor(b.length / G)].slice(); b.splice(b.length / 2, 0, a, d) } else b.push(a)
                } var f = c.startX, h = c.endX; k = k.slice(); var p = c.isArea, G = p ? 2 : 1; m = m && m.slice(); if (!m) return [k, k]; if (f && h && h.length) { for (c = 0; c < f.length; c++)if (f[c] === h[0]) { var D = c; break } else if (f[0] === h[h.length - f.length + c]) { D = c; var v = !0; break } else if (f[f.length - 1] === h[h.length - f.length + c]) { D = f.length - c; break } "undefined" === typeof D && (m = []) } if (m.length && w(D)) {
                    var B =
                        k.length + D * G; v ? (d(m, k), b(k, m)) : (d(k, m), b(m, k))
                } return [m, k]
            }; c.prototype.fillSetter = function () { c.prototype.strokeSetter.apply(this, arguments) }; c.prototype.strokeSetter = function () { this.elem.attr(this.prop, K(this.start).tweenTo(K(this.end), this.pos), void 0, !0) }; c.timers = []; return c
        }()
    }); I(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], function (c, e) {
        function K(b) { return t(b) ? m({ duration: 500, defer: 0 }, b) : { duration: b ? 500 : 0, defer: 0 } } function C(b, d) {
            for (var f = c.timers.length; f--;)c.timers[f].elem !==
                b || d && d !== c.timers[f].prop || (c.timers[f].stopped = !0)
        } var q = e.defined, w = e.getStyle, F = e.isArray, y = e.isNumber, t = e.isObject, m = e.merge, k = e.objectEach, d = e.pick; return {
            animate: function (b, d, h) {
                var f, G = "", D, v; if (!t(h)) { var B = arguments; h = { duration: B[2], easing: B[3], complete: B[4] } } y(h.duration) || (h.duration = 400); h.easing = "function" === typeof h.easing ? h.easing : Math[h.easing] || Math.easeInOutSine; h.curAnim = m(d); k(d, function (p, a) {
                    C(b, a); v = new c(b, h, a); D = void 0; "d" === a && F(d.d) ? (v.paths = v.initPath(b, b.pathArray, d.d),
                        v.toD = d.d, f = 0, D = 1) : b.attr ? f = b.attr(a) : (f = parseFloat(w(b, a)) || 0, "opacity" !== a && (G = "px")); D || (D = p); "string" === typeof D && D.match("px") && (D = D.replace(/px/g, "")); v.run(f, D, G)
                })
            }, animObject: K, getDeferredAnimation: function (b, d, h) { var f = K(d), k = 0, D = 0; (h ? [h] : b.series).forEach(function (b) { b = K(b.options.animation); k = d && q(d.defer) ? f.defer : Math.max(k, b.duration + b.defer); D = Math.min(f.duration, b.duration) }); b.renderer.forExport && (k = 0); return { defer: Math.max(0, k - D), duration: Math.min(k, D) } }, setAnimation: function (b,
                f) { f.renderer.globalAnimation = d(b, f.options.chart.animation, !0) }, stop: C
        }
    }); I(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e) {
        var K = c.SVG_NS, C = e.attr, q = e.createElement, w = e.css, F = e.error, y = e.isFunction, t = e.isString, m = e.objectEach, k = e.splat, d = (e = c.win.trustedTypes) && y(e.createPolicy) && e.createPolicy("highcharts", { createHTML: function (b) { return b } }), b = d ? d.createHTML("") : ""; try { var f = !!(new DOMParser).parseFromString(b, "text/html") } catch (h) { f = !1 } y = function () {
            function h(b) {
                this.nodes =
                "string" === typeof b ? this.parseMarkup(b) : b
            } h.filterUserAttributes = function (b) { m(b, function (d, f) { var p = !0; -1 === h.allowedAttributes.indexOf(f) && (p = !1); -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(f) && (p = t(d) && h.allowedReferences.some(function (b) { return 0 === d.indexOf(b) })); p || (F(33, !1, void 0, { "Invalid attribute in config": "".concat(f) }), delete b[f]); t(d) && b[f] && (b[f] = d.replace(/</g, "&lt;")) }); return b }; h.parseStyle = function (b) {
                return b.split(";").reduce(function (b, d) {
                    d = d.split(":").map(function (b) { return b.trim() });
                    var f = d.shift(); f && d.length && (b[f.replace(/-([a-z])/g, function (b) { return b[1].toUpperCase() })] = d.join(":")); return b
                }, {})
            }; h.setElementHTML = function (b, d) { b.innerHTML = h.emptyHTML; d && (new h(d)).addToDOM(b) }; h.prototype.addToDOM = function (b) {
                function d(b, f) {
                    var p; k(b).forEach(function (b) {
                        var a = b.tagName, z = b.textContent ? c.doc.createTextNode(b.textContent) : void 0, l = h.bypassHTMLFiltering; if (a) if ("#text" === a) var u = z; else if (-1 !== h.allowedTags.indexOf(a) || l) {
                            a = c.doc.createElementNS("svg" === a ? K : f.namespaceURI ||
                                K, a); var n = b.attributes || {}; m(b, function (a, g) { "tagName" !== g && "attributes" !== g && "children" !== g && "style" !== g && "textContent" !== g && (n[g] = a) }); C(a, l ? n : h.filterUserAttributes(n)); b.style && w(a, b.style); z && a.appendChild(z); d(b.children || [], a); u = a
                        } else F(33, !1, void 0, { "Invalid tagName in config": a }); u && f.appendChild(u); p = u
                    }); return p
                } return d(this.nodes, b)
            }; h.prototype.parseMarkup = function (b) {
                var p = []; b = b.trim().replace(/ style=(["'])/g, " data-style=$1"); if (f) b = (new DOMParser).parseFromString(d ? d.createHTML(b) :
                    b, "text/html"); else { var k = q("div"); k.innerHTML = b; b = { body: k } } var v = function (b, d) { var a = b.nodeName.toLowerCase(), f = { tagName: a }; "#text" === a && (f.textContent = b.textContent || ""); if (a = b.attributes) { var l = {};[].forEach.call(a, function (a) { "data-style" === a.name ? f.style = h.parseStyle(a.value) : l[a.name] = a.value }); f.attributes = l } if (b.childNodes.length) { var u = [];[].forEach.call(b.childNodes, function (a) { v(a, u) }); u.length && (f.children = u) } d.push(f) };[].forEach.call(b.body.childNodes, function (b) { return v(b, p) }); return p
            };
            h.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" ");
            h.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" "); h.allowedTags = "a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" "); h.emptyHTML = b; h.bypassHTMLFiltering = !1; return h
        }();
        ""; return y
    }); I(e, "Core/FormatUtilities.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function (c, e) {
        function K(m, k, d, b) {
            m = +m || 0; k = +k; var f = C.lang, h = (m.toString().split(".")[1] || "").split("e")[0].length, p = m.toString().split("e"), G = k; if (-1 === k) k = Math.min(h, 20); else if (!F(k)) k = 2; else if (k && p[1] && 0 > p[1]) { var D = k + +p[1]; 0 <= D ? (p[0] = (+p[0]).toExponential(D).split("e")[0], k = D) : (p[0] = p[0].split(".")[0] || 0, m = 20 > k ? (p[0] * Math.pow(10, p[1])).toFixed(k) : 0, p[1] = 0) } D = (Math.abs(p[1] ? p[0] : m) + Math.pow(10, -Math.max(k,
                h) - 1)).toFixed(k); h = String(t(D)); var v = 3 < h.length ? h.length % 3 : 0; d = y(d, f.decimalPoint); b = y(b, f.thousandsSep); m = (0 > m ? "-" : "") + (v ? h.substr(0, v) + b : ""); m = 0 > +p[1] && !G ? "0" : m + h.substr(v).replace(/(\d{3})(?=\d)/g, "$1" + b); k && (m += d + D.slice(-k)); p[1] && 0 !== +m && (m += "e" + p[1]); return m
        } var C = c.defaultOptions, q = c.defaultTime, w = e.getNestedProperty, F = e.isNumber, y = e.pick, t = e.pInt; return {
            dateFormat: function (m, k, d) { return q.dateFormat(m, k, d) }, format: function (m, k, d) {
                var b = "{", f = !1, h = /f$/, p = /\.([0-9])/, G = C.lang, D = d && d.time ||
                    q; d = d && d.numberFormatter || K; for (var v = []; m;) { var B = m.indexOf(b); if (-1 === B) break; var r = m.slice(0, B); if (f) { r = r.split(":"); b = w(r.shift() || "", k); if (r.length && "number" === typeof b) if (r = r.join(":"), h.test(r)) { var a = parseInt((r.match(p) || ["", "-1"])[1], 10); null !== b && (b = d(b, a, G.decimalPoint, -1 < r.indexOf(",") ? G.thousandsSep : "")) } else b = D.dateFormat(r, b); v.push(b) } else v.push(r); m = m.slice(B + 1); b = (f = !f) ? "}" : "{" } v.push(m); return v.join("")
            }, numberFormat: K
        }
    }); I(e, "Core/Renderer/RendererUtilities.js", [e["Core/Utilities.js"]],
        function (c) {
            var e = c.clamp, x = c.pick, C = c.stableSort, q; (function (c) {
                function q(c, t, m) {
                    var k = c, d = k.reducedLen || t, b = function (b, d) { return (d.rank || 0) - (b.rank || 0) }, f = function (b, d) { return b.target - d.target }, h, p = !0, G = [], D = 0; for (h = c.length; h--;)D += c[h].size; if (D > d) { C(c, b); for (D = h = 0; D <= d;)D += c[h].size, h++; G = c.splice(h - 1, c.length) } C(c, f); for (c = c.map(function (b) { return { size: b.size, targets: [b.target], align: x(b.align, .5) } }); p;) {
                        for (h = c.length; h--;)d = c[h], b = (Math.min.apply(0, d.targets) + Math.max.apply(0, d.targets)) /
                            2, d.pos = e(b - d.size * d.align, 0, t - d.size); h = c.length; for (p = !1; h--;)0 < h && c[h - 1].pos + c[h - 1].size > c[h].pos && (c[h - 1].size += c[h].size, c[h - 1].targets = c[h - 1].targets.concat(c[h].targets), c[h - 1].align = .5, c[h - 1].pos + c[h - 1].size > t && (c[h - 1].pos = t - c[h - 1].size), c.splice(h, 1), p = !0)
                    } k.push.apply(k, G); h = 0; c.some(function (b) {
                        var d = 0; return (b.targets || []).some(function () {
                            k[h].pos = b.pos + d; if ("undefined" !== typeof m && Math.abs(k[h].pos - k[h].target) > m) return k.slice(0, h + 1).forEach(function (b) { return delete b.pos }), k.reducedLen =
                                (k.reducedLen || t) - .1 * t, k.reducedLen > .1 * t && q(k, t, m), !0; d += k[h].size; h++; return !1
                        })
                    }); C(k, f); return k
                } c.distribute = q
            })(q || (q = {})); return q
        }); I(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
            var q = c.animate, K = c.animObject, F = c.stop, y = x.deg2rad, t = x.doc, m = x.svg, k = x.SVG_NS, d = x.win, b = C.addEvent, f = C.attr, h = C.createElement, p = C.css, G = C.defined, D = C.erase, v = C.extend, B = C.fireEvent, r = C.isArray,
            a = C.isFunction, z = C.isString, l = C.merge, u = C.objectEach, n = C.pick, E = C.pInt, g = C.syncTimeout, A = C.uniqueKey; c = function () {
                function H() { this.element = void 0; this.onEvents = {}; this.opacity = 1; this.renderer = void 0; this.SVG_NS = k; this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ") } H.prototype._defaultGetter = function (a) { a = n(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a }; H.prototype._defaultSetter =
                    function (a, g, b) { b.setAttribute(g, a) }; H.prototype.add = function (a) { var g = this.renderer, b = this.element; a && (this.parentGroup = a); "undefined" !== typeof this.textStr && "text" === this.element.nodeName && g.buildText(this); this.added = !0; if (!a || a.handleZ || this.zIndex) var l = this.zIndexSetter(); l || (a ? a.element : g.box).appendChild(b); if (this.onAdd) this.onAdd(); return this }; H.prototype.addClass = function (a, g) {
                        var b = g ? "" : this.attr("class") || ""; a = (a || "").split(/ /g).reduce(function (a, g) { -1 === b.indexOf(g) && a.push(g); return a },
                            b ? [b] : []).join(" "); a !== b && this.attr("class", a); return this
                    }; H.prototype.afterSetters = function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }; H.prototype.align = function (a, g, b) {
                        var l = {}, d = this.renderer, f = d.alignedObjects, J, A, h; if (a) { if (this.alignOptions = a, this.alignByTranslate = g, !b || z(b)) this.alignTo = J = b || "renderer", D(f, this), f.push(this), b = void 0 } else a = this.alignOptions, g = this.alignByTranslate, J = this.alignTo; b = n(b, d[J], "scrollablePlotBox" === J ? d.plotBox : void 0, d); J = a.align; var u =
                            a.verticalAlign; d = (b.x || 0) + (a.x || 0); f = (b.y || 0) + (a.y || 0); "right" === J ? A = 1 : "center" === J && (A = 2); A && (d += (b.width - (a.width || 0)) / A); l[g ? "translateX" : "x"] = Math.round(d); "bottom" === u ? h = 1 : "middle" === u && (h = 2); h && (f += (b.height - (a.height || 0)) / h); l[g ? "translateY" : "y"] = Math.round(f); this[this.placed ? "animate" : "attr"](l); this.placed = !0; this.alignAttr = l; return this
                    }; H.prototype.alignSetter = function (a) {
                        var b = { left: "start", center: "middle", right: "end" }; b[a] && (this.alignValue = a, this.element.setAttribute("text-anchor",
                            b[a]))
                    }; H.prototype.animate = function (a, b, l) { var d = this, f = K(n(b, this.renderer.globalAnimation, !0)); b = f.defer; n(t.hidden, t.msHidden, t.webkitHidden, !1) && (f.duration = 0); 0 !== f.duration ? (l && (f.complete = l), g(function () { d.element && q(d, a, f) }, b)) : (this.attr(a, void 0, l || f.complete), u(a, function (a, b) { f.step && f.step.call(this, a, { prop: b, pos: 1, elem: this }) }, this)); return this }; H.prototype.applyTextOutline = function (a) {
                        var b = this.element; -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
                        var g = a.split(" "); a = g[g.length - 1]; if ((g = g[0]) && "none" !== g && x.svg) {
                            this.fakeTS = !0; g = g.replace(/(^[\d\.]+)(.*?)$/g, function (a, b, g) { return 2 * Number(b) + g }); this.removeTextOutline(); var l = t.createElementNS(k, "tspan"); f(l, { "class": "highcharts-text-outline", fill: a, stroke: a, "stroke-width": g, "stroke-linejoin": "round" }); a = b.querySelector("textPath") || b;[].forEach.call(a.childNodes, function (a) {
                                var b = a.cloneNode(!0); b.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function (a) { return b.removeAttribute(a) });
                                l.appendChild(b)
                            }); var n = 0;[].forEach.call(a.querySelectorAll("text tspan"), function (a) { n += Number(a.getAttribute("dy")) }); g = t.createElementNS(k, "tspan"); g.textContent = "\u200b"; f(g, { x: Number(b.getAttribute("x")), dy: -n }); l.appendChild(g); a.insertBefore(l, a.firstChild)
                        }
                    }; H.prototype.attr = function (a, b, g, l) {
                        var n = this.element, d = this.symbolCustomAttribs, f, A = this, h, J; if ("string" === typeof a && "undefined" !== typeof b) { var p = a; a = {}; a[p] = b } "string" === typeof a ? A = (this[a + "Getter"] || this._defaultGetter).call(this,
                            a, n) : (u(a, function (b, g) { h = !1; l || F(this, g); this.symbolName && -1 !== d.indexOf(g) && (f || (this.symbolAttr(a), f = !0), h = !0); !this.rotation || "x" !== g && "y" !== g || (this.doTransform = !0); h || (J = this[g + "Setter"] || this._defaultSetter, J.call(this, b, g, n), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g) && this.updateShadows(g, b, J)) }, this), this.afterSetters()); g && g.call(this); return A
                    }; H.prototype.clip = function (a) {
                        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id +
                            ")" : "none")
                    }; H.prototype.crisp = function (a, b) { b = b || a.strokeWidth || 0; var g = Math.round(b) % 2 / 2; a.x = Math.floor(a.x || this.x || 0) + g; a.y = Math.floor(a.y || this.y || 0) + g; a.width = Math.floor((a.width || this.width || 0) - 2 * g); a.height = Math.floor((a.height || this.height || 0) - 2 * g); G(a.strokeWidth) && (a.strokeWidth = b); return a }; H.prototype.complexColor = function (a, b, g) {
                        var n = this.renderer, d, f, h, J, p, z, E, k, H, c, M = [], v; B(this.renderer, "complexColor", { args: arguments }, function () {
                            a.radialGradient ? f = "radialGradient" : a.linearGradient &&
                                (f = "linearGradient"); if (f) {
                                    h = a[f]; p = n.gradients; z = a.stops; H = g.radialReference; r(h) && (a[f] = h = { x1: h[0], y1: h[1], x2: h[2], y2: h[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === f && H && !G(h.gradientUnits) && (J = h, h = l(h, n.getRadialAttr(H, J), { gradientUnits: "userSpaceOnUse" })); u(h, function (a, g) { "id" !== g && M.push(g, a) }); u(z, function (a) { M.push(a) }); M = M.join(","); if (p[M]) c = p[M].attr("id"); else {
                                        h.id = c = A(); var L = p[M] = n.createElement(f).attr(h).add(n.defs); L.radAttr = J; L.stops = []; z.forEach(function (a) {
                                            0 === a[1].indexOf("rgba") ?
                                            (d = e.parse(a[1]), E = d.get("rgb"), k = d.get("a")) : (E = a[1], k = 1); a = n.createElement("stop").attr({ offset: a[0], "stop-color": E, "stop-opacity": k }).add(L); L.stops.push(a)
                                        })
                                    } v = "url(" + n.url + "#" + c + ")"; g.setAttribute(b, v); g.gradient = M; a.toString = function () { return v }
                                }
                        })
                    }; H.prototype.css = function (a) {
                        var g = this.styles, b = {}, n = this.element, d = !g; a.color && (a.fill = a.color); g && u(a, function (a, l) { g && g[l] !== a && (b[l] = a, d = !0) }); if (d) {
                            g && (a = v(g, b)); if (null === a.width || "auto" === a.width) delete this.textWidth; else if ("text" === n.nodeName.toLowerCase() &&
                                a.width) var f = this.textWidth = E(a.width); this.styles = a; f && !m && this.renderer.forExport && delete a.width; var A = l(a); n.namespaceURI === this.SVG_NS && ["textOutline", "textOverflow", "width"].forEach(function (a) { return A && delete A[a] }); p(n, A); this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a.textOutline && this.applyTextOutline(a.textOutline))
                        } return this
                    }; H.prototype.dashstyleSetter = function (a) {
                        var g = this["stroke-width"]; "inherit" === g && (g = 1); if (a = a && a.toLowerCase()) {
                            var b = a.replace("shortdashdotdot",
                                "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (a = b.length; a--;)b[a] = "" + E(b[a]) * n(g, NaN); a = b.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a)
                        }
                    }; H.prototype.destroy = function () {
                        var a = this, g = a.element || {}, b = a.renderer, l = g.ownerSVGElement, n = b.isSVG && "SPAN" === g.nodeName && a.parentGroup || void 0; g.onclick = g.onmouseout =
                            g.onmouseover = g.onmousemove = g.point = null; F(a); if (a.clipPath && l) { var d = a.clipPath;[].forEach.call(l.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) { -1 < a.getAttribute("clip-path").indexOf(d.element.id) && a.removeAttribute("clip-path") }); a.clipPath = d.destroy() } if (a.stops) { for (l = 0; l < a.stops.length; l++)a.stops[l].destroy(); a.stops.length = 0; a.stops = void 0 } a.safeRemoveChild(g); for (b.styledMode || a.destroyShadows(); n && n.div && 0 === n.div.childNodes.length;)g = n.parentGroup, a.safeRemoveChild(n.div), delete n.div,
                                n = g; a.alignTo && D(b.alignedObjects, a); u(a, function (g, b) { a[b] && a[b].parentGroup === a && a[b].destroy && a[b].destroy(); delete a[b] })
                    }; H.prototype.destroyShadows = function () { (this.shadows || []).forEach(function (a) { this.safeRemoveChild(a) }, this); this.shadows = void 0 }; H.prototype.dSetter = function (a, g, b) {
                        r(a) && ("string" === typeof a[0] && (a = this.renderer.pathToSegments(a)), this.pathArray = a, a = a.reduce(function (a, g, b) { return g && g.join ? (b ? a + " " : "") + g.join(" ") : (g || "").toString() }, "")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
                        this[g] !== a && (b.setAttribute(g, a), this[g] = a)
                    }; H.prototype.fadeOut = function (a) { var g = this; g.animate({ opacity: 0 }, { duration: n(a, 150), complete: function () { g.hide() } }) }; H.prototype.fillSetter = function (a, g, b) { "string" === typeof a ? b.setAttribute(g, a) : a && this.complexColor(a, g, b) }; H.prototype.getBBox = function (g, b) {
                        var l = this.alignValue, d = this.element, f = this.renderer, A = this.styles, h = this.textStr, u = f.cache, z = f.cacheKeys, r = d.namespaceURI === this.SVG_NS; b = n(b, this.rotation, 0); var E = f.styledMode ? d && H.prototype.getStyle.call(d,
                            "font-size") : A && A.fontSize, k; if (G(h)) { var J = h.toString(); -1 === J.indexOf("<") && (J = J.replace(/[0-9]/g, "0")); J += ["", b, E, this.textWidth, l, A && A.textOverflow, A && A.fontWeight].join() } J && !g && (k = u[J]); if (!k) {
                                if (r || f.forExport) { try { var c = this.fakeTS && function (a) { var g = d.querySelector(".highcharts-text-outline"); g && p(g, { display: a }) }; a(c) && c("none"); k = d.getBBox ? v({}, d.getBBox()) : { width: d.offsetWidth, height: d.offsetHeight, x: 0, y: 0 }; a(c) && c("") } catch (Q) { "" } if (!k || 0 > k.width) k = { x: 0, y: 0, width: 0, height: 0 } } else k = this.htmlGetBBox();
                                if (f.isSVG && (f = k.width, g = k.height, r && (k.height = g = { "11px,17": 14, "13px,20": 16 }["" + (E || "") + ",".concat(Math.round(g))] || g), b)) { r = Number(d.getAttribute("y") || 0) - k.y; l = { right: 1, center: .5 }[l || 0] || 0; A = b * y; E = (b - 90) * y; var B = f * Math.cos(A); b = f * Math.sin(A); c = Math.cos(E); A = Math.sin(E); f = k.x + l * (f - B) + r * c; E = f + B; c = E - g * c; B = c - B; r = k.y + r - l * b + r * A; l = r + b; g = l - g * A; b = g - b; k.x = Math.min(f, E, c, B); k.y = Math.min(r, l, g, b); k.width = Math.max(f, E, c, B) - k.x; k.height = Math.max(r, l, g, b) - k.y } if (J && ("" === h || 0 < k.height)) {
                                    for (; 250 < z.length;)delete u[z.shift()];
                                    u[J] || z.push(J); u[J] = k
                                }
                            } return k
                    }; H.prototype.getStyle = function (a) { return d.getComputedStyle(this.element || this, "").getPropertyValue(a) }; H.prototype.hasClass = function (a) { return -1 !== ("" + this.attr("class")).split(" ").indexOf(a) }; H.prototype.hide = function () { return this.attr({ visibility: "hidden" }) }; H.prototype.htmlGetBBox = function () { return { height: 0, width: 0, x: 0, y: 0 } }; H.prototype.init = function (a, g) { this.element = "span" === g ? h(g) : t.createElementNS(this.SVG_NS, g); this.renderer = a; B(this, "afterInit") }; H.prototype.on =
                        function (a, g) { var l = this.onEvents; if (l[a]) l[a](); l[a] = b(this.element, a, g); return this }; H.prototype.opacitySetter = function (a, g, b) { this.opacity = a = Number(Number(a).toFixed(3)); b.setAttribute(g, a) }; H.prototype.removeClass = function (a) { return this.attr("class", ("" + this.attr("class")).replace(z(a) ? new RegExp("(^| )".concat(a, "( |$)")) : a, " ").replace(/ +/g, " ").trim()) }; H.prototype.removeTextOutline = function () { var a = this.element.querySelector("tspan.highcharts-text-outline"); a && this.safeRemoveChild(a) }; H.prototype.safeRemoveChild =
                            function (a) { var g = a.parentNode; g && g.removeChild(a) }; H.prototype.setRadialReference = function (a) { var g = this.element.gradient && this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; g && g.radAttr && g.animate(this.renderer.getRadialAttr(a, g.radAttr)); return this }; H.prototype.setTextPath = function (a, g) {
                                var n = this; g = l(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, g); var d = this.renderer.url, f = this.text || this, h = f.textPath, u = g.attributes, p = g.enabled; a = a || h && h.path;
                                h && h.undo(); a && p ? (g = b(f, "afterModifyTree", function (g) { if (a && p) { var b = a.attr("id"); b || a.attr("id", b = A()); var l = { x: 0, y: 0 }; G(u.dx) && (l.dx = u.dx, delete u.dx); G(u.dy) && (l.dy = u.dy, delete u.dy); f.attr(l); n.attr({ transform: "" }); n.box && (n.box = n.box.destroy()); l = g.nodes.slice(0); g.nodes.length = 0; g.nodes[0] = { tagName: "textPath", attributes: v(u, { "text-anchor": u.textAnchor, href: "" + d + "#".concat(b) }), children: l } } }), f.textPath = { path: a, undo: g }) : (f.attr({ dx: 0, dy: 0 }), delete f.textPath); this.added && (f.textCache = "", this.renderer.buildText(f));
                                return this
                            }; H.prototype.shadow = function (a, g, b) {
                                var l = [], n = this.element, d = this.oldShadowOptions, A = this.parentGroup, h = A && 90 === A.rotation; A = { color: "#000000", offsetX: h ? -1 : 1, offsetY: h ? -1 : 1, opacity: .15, width: 3 }; var p = !1, r; !0 === a ? r = A : "object" === typeof a && (r = v(A, a)); r && (r && d && u(r, function (a, g) { a !== d[g] && (p = !0) }), p && this.destroyShadows(), this.oldShadowOptions = r); if (!r) this.destroyShadows(); else if (!this.shadows) {
                                    A = r.opacity / r.width; var z = h ? "translate(".concat(r.offsetY, ", ").concat(r.offsetX, ")") : "translate(".concat(r.offsetX,
                                        ", ").concat(r.offsetY, ")"); for (h = 1; h <= r.width; h++) { var E = n.cloneNode(!1); var k = 2 * r.width + 1 - 2 * h; f(E, { stroke: a.color || "#000000", "stroke-opacity": A * h, "stroke-width": k, transform: z, fill: "none" }); E.setAttribute("class", (E.getAttribute("class") || "") + " highcharts-shadow"); b && (f(E, "height", Math.max(f(E, "height") - k, 0)), E.cutHeight = k); g ? g.element.appendChild(E) : n.parentNode && n.parentNode.insertBefore(E, n); l.push(E) } this.shadows = l
                                } return this
                            }; H.prototype.show = function (a) {
                                void 0 === a && (a = !0); return this.attr({
                                    visibility: a ?
                                        "inherit" : "visible"
                                })
                            }; H.prototype["stroke-widthSetter"] = function (a, g, b) { this[g] = a; b.setAttribute(g, a) }; H.prototype.strokeWidth = function () { if (!this.renderer.styledMode) return this["stroke-width"] || 0; var a = this.getStyle("stroke-width"), g = 0; if (a.indexOf("px") === a.length - 2) g = E(a); else if ("" !== a) { var b = t.createElementNS(k, "rect"); f(b, { width: a, "stroke-width": 0 }); this.element.parentNode.appendChild(b); g = b.getBBox().width; b.parentNode.removeChild(b) } return g }; H.prototype.symbolAttr = function (a) {
                                var g = this;
                                "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (b) { g[b] = n(a[b], g[b]) }); g.attr({ d: g.renderer.symbols[g.symbolName](g.x, g.y, g.width, g.height, g) })
                            }; H.prototype.textSetter = function (a) { a !== this.textStr && (delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this)) }; H.prototype.titleSetter = function (a) {
                                var g = this.element, b = g.getElementsByTagName("title")[0] || t.createElementNS(this.SVG_NS, "title"); g.insertBefore ? g.insertBefore(b, g.firstChild) :
                                    g.appendChild(b); b.textContent = String(n(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                            }; H.prototype.toFront = function () { var a = this.element; a.parentNode.appendChild(a); return this }; H.prototype.translate = function (a, g) { return this.attr({ translateX: a, translateY: g }) }; H.prototype.updateShadows = function (a, g, b) { var l = this.shadows; if (l) for (var n = l.length; n--;)b.call(l[n], "height" === a ? Math.max(g - (l[n].cutHeight || 0), 0) : "d" === a ? this.d : g, a, l[n]) }; H.prototype.updateTransform = function () {
                                var a =
                                    this.element, g = this.matrix, b = this.rotation; b = void 0 === b ? 0 : b; var l = this.scaleX, d = this.scaleY, f = this.translateX, A = this.translateY; f = ["translate(" + (void 0 === f ? 0 : f) + "," + (void 0 === A ? 0 : A) + ")"]; G(g) && f.push("matrix(" + g.join(",") + ")"); b && f.push("rotate(" + b + " " + n(this.rotationOriginX, a.getAttribute("x"), 0) + " " + n(this.rotationOriginY, a.getAttribute("y") || 0) + ")"); (G(l) || G(d)) && f.push("scale(" + n(l, 1) + " " + n(d, 1) + ")"); f.length && !(this.text || this).textPath && a.setAttribute("transform", f.join(" "))
                            }; H.prototype.visibilitySetter =
                                function (a, g, b) { "inherit" === a ? b.removeAttribute(g) : this[g] !== a && b.setAttribute(g, a); this[g] = a }; H.prototype.xGetter = function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) }; H.prototype.zIndexSetter = function (a, g) {
                                    var b = this.renderer, l = this.parentGroup, n = (l || b).element || b.box, d = this.element; b = n === b.box; var f = !1; var A = this.added; var h; G(a) ? (d.setAttribute("data-z-index", a), a = +a, this[g] === a && (A = !1)) : G(this[g]) && d.removeAttribute("data-z-index"); this[g] =
                                        a; if (A) { (a = this.zIndex) && l && (l.handleZ = !0); g = n.childNodes; for (h = g.length - 1; 0 <= h && !f; h--) { l = g[h]; A = l.getAttribute("data-z-index"); var u = !G(A); if (l !== d) if (0 > a && u && !b && !h) n.insertBefore(d, g[h]), f = !0; else if (E(A) <= a || u && (!G(a) || 0 <= a)) n.insertBefore(d, g[h + 1] || null), f = !0 } f || (n.insertBefore(d, g[b ? 3 : 0] || null), f = !0) } return f
                                }; return H
            }(); c.prototype.strokeSetter = c.prototype.fillSetter; c.prototype.yGetter = c.prototype.xGetter; c.prototype.matrixSetter = c.prototype.rotationOriginXSetter = c.prototype.rotationOriginYSetter =
                c.prototype.rotationSetter = c.prototype.scaleXSetter = c.prototype.scaleYSetter = c.prototype.translateXSetter = c.prototype.translateYSetter = c.prototype.verticalAlignSetter = function (a, g) { this[g] = a; this.doTransform = !0 }; ""; return c
        }); I(e, "Core/Renderer/RendererRegistry.js", [e["Core/Globals.js"]], function (c) {
            var e; (function (e) {
                e.rendererTypes = {}; var K; e.getRendererType = function (c) { void 0 === c && (c = K); return e.rendererTypes[c] || e.rendererTypes[K] }; e.registerRendererType = function (q, w, F) {
                    e.rendererTypes[q] = w; if (!K ||
                        F) K = q, c.Renderer = w
                }
            })(e || (e = {})); return e
        }); I(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (c, e) {
            var K = this && this.__extends || function () {
                var c = function (k, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var f in d) d.hasOwnProperty(f) && (b[f] = d[f]) }; return c(k, d) }; return function (k, d) {
                    function b() { this.constructor = k } c(k, d); k.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype,
                        new b)
                }
            }(), C = e.defined, q = e.extend, w = e.isNumber, F = e.merge, y = e.pick, t = e.removeEvent; return function (m) {
                function k(d, b, f, h, p, c, D, v, B, r) {
                    var a = m.call(this) || this; a.paddingLeftSetter = a.paddingSetter; a.paddingRightSetter = a.paddingSetter; a.init(d, "g"); a.textStr = b; a.x = f; a.y = h; a.anchorX = c; a.anchorY = D; a.baseline = B; a.className = r; a.addClass("button" === r ? "highcharts-no-tooltip" : "highcharts-label"); r && a.addClass("highcharts-" + r); a.text = d.text(void 0, 0, 0, v).attr({ zIndex: 1 }); var z; "string" === typeof p && ((z = /^url\((.*?)\)$/.test(p)) ||
                        a.renderer.symbols[p]) && (a.symbolKey = p); a.bBox = k.emptyBBox; a.padding = 3; a.baselineOffset = 0; a.needsBox = d.styledMode || z; a.deferredAttr = {}; a.alignFactor = 0; return a
                } K(k, m); k.prototype.alignSetter = function (d) { d = { left: 0, center: .5, right: 1 }[d]; d !== this.alignFactor && (this.alignFactor = d, this.bBox && w(this.xSetting) && this.attr({ x: this.xSetting })) }; k.prototype.anchorXSetter = function (d, b) { this.anchorX = d; this.boxAttr(b, Math.round(d) - this.getCrispAdjust() - this.xSetting) }; k.prototype.anchorYSetter = function (d, b) {
                    this.anchorY =
                    d; this.boxAttr(b, d - this.ySetting)
                }; k.prototype.boxAttr = function (d, b) { this.box ? this.box.attr(d, b) : this.deferredAttr[d] = b }; k.prototype.css = function (d) { if (d) { var b = {}; d = F(d); k.textProps.forEach(function (f) { "undefined" !== typeof d[f] && (b[f] = d[f], delete d[f]) }); this.text.css(b); "fontSize" in b || "fontWeight" in b ? this.updateTextPadding() : ("width" in b || "textOverflow" in b) && this.updateBoxSize() } return c.prototype.css.call(this, d) }; k.prototype.destroy = function () {
                    t(this.element, "mouseenter"); t(this.element, "mouseleave");
                    this.text && this.text.destroy(); this.box && (this.box = this.box.destroy()); c.prototype.destroy.call(this)
                }; k.prototype.fillSetter = function (d, b) { d && (this.needsBox = !0); this.fill = d; this.boxAttr(b, d) }; k.prototype.getBBox = function () { this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize(); var d = this.padding, b = y(this.paddingLeft, d); return { width: this.width, height: this.height, x: this.bBox.x - b, y: this.bBox.y - d } }; k.prototype.getCrispAdjust = function () {
                    return this.renderer.styledMode && this.box ?
                        this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                }; k.prototype.heightSetter = function (d) { this.heightSetting = d }; k.prototype.onAdd = function () { this.text.add(this); this.attr({ text: y(this.textStr, ""), x: this.x || 0, y: this.y || 0 }); this.box && C(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY }) }; k.prototype.paddingSetter = function (d, b) { w(d) ? d !== this[b] && (this[b] = d, this.updateTextPadding()) : this[b] = void 0 }; k.prototype.rSetter = function (d, b) {
                    this.boxAttr(b,
                        d)
                }; k.prototype.shadow = function (d) { d && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(d)); return this }; k.prototype.strokeSetter = function (d, b) { this.stroke = d; this.boxAttr(b, d) }; k.prototype["stroke-widthSetter"] = function (d, b) { d && (this.needsBox = !0); this["stroke-width"] = d; this.boxAttr(b, d) }; k.prototype["text-alignSetter"] = function (d) { this.textAlign = d }; k.prototype.textSetter = function (d) { "undefined" !== typeof d && this.text.attr({ text: d }); this.updateTextPadding() }; k.prototype.updateBoxSize =
                    function () {
                        var d = this.text, b = d.element.style, f = {}, h = this.padding, p = this.bBox = w(this.widthSetting) && w(this.heightSetting) && !this.textAlign || !C(d.textStr) ? k.emptyBBox : d.getBBox(); this.width = this.getPaddedWidth(); this.height = (this.heightSetting || p.height || 0) + 2 * h; b = this.renderer.fontMetrics(b && b.fontSize, d); this.baselineOffset = h + Math.min((this.text.firstLineMetrics || b).b, p.height || Infinity); this.heightSetting && (this.baselineOffset += (this.heightSetting - b.h) / 2); this.needsBox && !d.textPath && (this.box || (d =
                            this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), d.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), d.add(this)), d = this.getCrispAdjust(), f.x = d, f.y = (this.baseline ? -this.baselineOffset : 0) + d, f.width = Math.round(this.width), f.height = Math.round(this.height), this.box.attr(q(f, this.deferredAttr)), this.deferredAttr = {})
                    }; k.prototype.updateTextPadding = function () {
                        var d = this.text; if (!d.textPath) {
                            this.updateBoxSize();
                            var b = this.baseline ? 0 : this.baselineOffset, f = y(this.paddingLeft, this.padding); C(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (f += { center: .5, right: 1 }[this.textAlign] * (this.widthSetting - this.bBox.width)); if (f !== d.x || b !== d.y) d.attr("x", f), d.hasBoxWidthChanged && (this.bBox = d.getBBox(!0)), "undefined" !== typeof b && d.attr("y", b); d.x = f; d.y = b
                        }
                    }; k.prototype.widthSetter = function (d) { this.widthSetting = w(d) ? d : void 0 }; k.prototype.getPaddedWidth = function () {
                        var d = this.padding,
                        b = y(this.paddingLeft, d); d = y(this.paddingRight, d); return (this.widthSetting || this.bBox.width || 0) + b + d
                    }; k.prototype.xSetter = function (d) { this.x = d; this.alignFactor && (d -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0); this.xSetting = Math.round(d); this.attr("translateX", this.xSetting) }; k.prototype.ySetter = function (d) { this.ySetting = this.y = Math.round(d); this.attr("translateY", this.ySetting) }; k.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }; k.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
                return k
            }(c)
        }); I(e, "Core/Renderer/SVG/Symbols.js", [e["Core/Utilities.js"]], function (c) {
            function e(c, e, m, k, d) {
                var b = []; if (d) {
                    var f = d.start || 0, h = F(d.r, m); m = F(d.r, k || m); var p = (d.end || 0) - .001; k = d.innerR; var G = F(d.open, .001 > Math.abs((d.end || 0) - f - 2 * Math.PI)), D = Math.cos(f), v = Math.sin(f), B = Math.cos(p), r = Math.sin(p); f = F(d.longArc, .001 > p - f - Math.PI ? 0 : 1); b.push(["M", c + h * D, e + m * v], ["A", h, m, 0, f, F(d.clockwise, 1), c + h * B, e + m * r]); q(k) && b.push(G ? ["M", c + k * B, e + k * r] : ["L", c + k * B, e + k * r], ["A", k, k, 0, f, q(d.clockwise) ? 1 - d.clockwise :
                        0, c + k * D, e + k * v]); G || b.push(["Z"])
                } return b
            } function x(c, e, m, k, d) { return d && d.r ? C(c, e, m, k, d) : [["M", c, e], ["L", c + m, e], ["L", c + m, e + k], ["L", c, e + k], ["Z"]] } function C(c, e, m, k, d) { d = d && d.r || 0; return [["M", c + d, e], ["L", c + m - d, e], ["C", c + m, e, c + m, e, c + m, e + d], ["L", c + m, e + k - d], ["C", c + m, e + k, c + m, e + k, c + m - d, e + k], ["L", c + d, e + k], ["C", c, e + k, c, e + k, c, e + k - d], ["L", c, e + d], ["C", c, e, c, e, c + d, e]] } var q = c.defined, w = c.isNumber, F = c.pick; return {
                arc: e, callout: function (c, e, m, k, d) {
                    var b = Math.min(d && d.r || 0, m, k), f = b + 6, h = d && d.anchorX; d = d && d.anchorY ||
                        0; var p = C(c, e, m, k, { r: b }); if (!w(h)) return p; c + h >= m ? d > e + f && d < e + k - f ? p.splice(3, 1, ["L", c + m, d - 6], ["L", c + m + 6, d], ["L", c + m, d + 6], ["L", c + m, e + k - b]) : p.splice(3, 1, ["L", c + m, k / 2], ["L", h, d], ["L", c + m, k / 2], ["L", c + m, e + k - b]) : 0 >= c + h ? d > e + f && d < e + k - f ? p.splice(7, 1, ["L", c, d + 6], ["L", c - 6, d], ["L", c, d - 6], ["L", c, e + b]) : p.splice(7, 1, ["L", c, k / 2], ["L", h, d], ["L", c, k / 2], ["L", c, e + b]) : d && d > k && h > c + f && h < c + m - f ? p.splice(5, 1, ["L", h + 6, e + k], ["L", h, e + k + 6], ["L", h - 6, e + k], ["L", c + b, e + k]) : d && 0 > d && h > c + f && h < c + m - f && p.splice(1, 1, ["L", h - 6, e], ["L", h, e - 6],
                            ["L", h + 6, e], ["L", m - b, e]); return p
                }, circle: function (c, t, m, k) { return e(c + m / 2, t + k / 2, m / 2, k / 2, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }) }, diamond: function (c, e, m, k) { return [["M", c + m / 2, e], ["L", c + m, e + k / 2], ["L", c + m / 2, e + k], ["L", c, e + k / 2], ["Z"]] }, rect: x, roundedRect: C, square: x, triangle: function (c, e, m, k) { return [["M", c + m / 2, e], ["L", c + m, e + k], ["L", c, e + k], ["Z"]] }, "triangle-down": function (c, e, m, k) { return [["M", c, e], ["L", c + m, e], ["L", c + m / 2, e + k], ["Z"]] }
            }
        }); I(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Renderer/HTML/AST.js"],
        e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e, x) {
            var K = e.doc, q = e.SVG_NS, w = e.win, F = x.attr, y = x.extend, t = x.fireEvent, m = x.isString, k = x.objectEach, d = x.pick; return function () {
                function b(b) { var d = b.styles; this.renderer = b.renderer; this.svgElement = b; this.width = b.textWidth; this.textLineHeight = d && d.lineHeight; this.textOutline = d && d.textOutline; this.ellipsis = !(!d || "ellipsis" !== d.textOverflow); this.noWrap = !(!d || "nowrap" !== d.whiteSpace); this.fontSize = d && d.fontSize } b.prototype.buildSVG = function () {
                    var b =
                        this.svgElement, h = b.element, p = b.renderer, k = d(b.textStr, "").toString(), D = -1 !== k.indexOf("<"), v = h.childNodes; p = this.width && !b.added && p.box; var B = /<br.*?>/g, r = [k, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join(); if (r !== b.textCache) {
                            b.textCache = r; delete b.actualWidth; for (r = v.length; r--;)h.removeChild(v[r]); D || this.ellipsis || this.width || b.textPath || -1 !== k.indexOf(" ") && (!this.noWrap || B.test(k)) ? "" !== k && (p && p.appendChild(h), k = new c(k), this.modifyTree(k.nodes),
                                k.addToDOM(h), this.modifyDOM(), this.ellipsis && -1 !== (h.textContent || "").indexOf("\u2026") && b.attr("title", this.unescapeEntities(b.textStr || "", ["&lt;", "&gt;"])), p && p.removeChild(h)) : h.appendChild(K.createTextNode(this.unescapeEntities(k))); m(this.textOutline) && b.applyTextOutline && b.applyTextOutline(this.textOutline)
                        }
                }; b.prototype.modifyDOM = function () {
                    var b = this, d = this.svgElement, p = F(d.element, "x"); d.firstLineMetrics = void 0; for (var k; k = d.element.firstChild;)if (/^[\s\u200B]*$/.test(k.textContent || " ")) d.element.removeChild(k);
                    else break;[].forEach.call(d.element.querySelectorAll("tspan.highcharts-br"), function (f, a) { f.nextSibling && f.previousSibling && (0 === a && 1 === f.previousSibling.nodeType && (d.firstLineMetrics = d.renderer.fontMetrics(void 0, f.previousSibling)), F(f, { dy: b.getLineHeight(f.nextSibling), x: p })) }); var c = this.width || 0; if (c) {
                        var v = function (f, a) {
                            var h = f.textContent || "", l = h.replace(/([^\^])-/g, "$1- ").split(" "), u = !b.noWrap && (1 < l.length || 1 < d.element.childNodes.length), n = b.getLineHeight(a), k = 0, g = d.actualWidth; if (b.ellipsis) h &&
                                b.truncate(f, h, void 0, 0, Math.max(0, c - parseInt(b.fontSize || 12, 10)), function (a, g) { return a.substring(0, g) + "\u2026" }); else if (u) {
                                    h = []; for (u = []; a.firstChild && a.firstChild !== f;)u.push(a.firstChild), a.removeChild(a.firstChild); for (; l.length;)l.length && !b.noWrap && 0 < k && (h.push(f.textContent || ""), f.textContent = l.join(" ").replace(/- /g, "-")), b.truncate(f, void 0, l, 0 === k ? g || 0 : 0, c, function (a, g) { return l.slice(0, g).join(" ").replace(/- /g, "-") }), g = d.actualWidth, k++; u.forEach(function (g) { a.insertBefore(g, f) });
                                    h.forEach(function (g) { a.insertBefore(K.createTextNode(g), f); g = K.createElementNS(q, "tspan"); g.textContent = "\u200b"; F(g, { dy: n, x: p }); a.insertBefore(g, f) })
                                }
                        }, B = function (b) { [].slice.call(b.childNodes).forEach(function (a) { a.nodeType === w.Node.TEXT_NODE ? v(a, b) : (-1 !== a.className.baseVal.indexOf("highcharts-br") && (d.actualWidth = 0), B(a)) }) }; B(d.element)
                    }
                }; b.prototype.getLineHeight = function (b) {
                    var d; b = b.nodeType === w.Node.TEXT_NODE ? b.parentElement : b; this.renderer.styledMode || (d = b && /(px|em)$/.test(b.style.fontSize) ?
                        b.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12); return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(d, b || this.svgElement.element).h
                }; b.prototype.modifyTree = function (b) {
                    var d = this, f = function (h, p) {
                        var k = h.attributes; k = void 0 === k ? {} : k; var c = h.children, r = h.style; r = void 0 === r ? {} : r; var a = h.tagName, z = d.renderer.styledMode; if ("b" === a || "strong" === a) z ? k["class"] = "highcharts-strong" : r.fontWeight = "bold"; else if ("i" === a || "em" === a) z ? k["class"] = "highcharts-emphasized" :
                            r.fontStyle = "italic"; r && r.color && (r.fill = r.color); "br" === a ? (k["class"] = "highcharts-br", h.textContent = "\u200b", (p = b[p + 1]) && p.textContent && (p.textContent = p.textContent.replace(/^ +/gm, ""))) : "a" === a && c && c.some(function (a) { return "#text" === a.tagName }) && (h.children = [{ children: c, tagName: "tspan" }]); "#text" !== a && "a" !== a && (h.tagName = "tspan"); y(h, { attributes: k, style: r }); c && c.filter(function (a) { return "#text" !== a.tagName }).forEach(f)
                    }; b.forEach(f); t(this.svgElement, "afterModifyTree", { nodes: b })
                }; b.prototype.truncate =
                    function (b, d, p, k, c, v) {
                        var f = this.svgElement, h = f.renderer, a = f.rotation, z = [], l = p ? 1 : 0, u = (d || p || "").length, n = u, E, g = function (a, g) { g = g || a; var l = b.parentNode; if (l && "undefined" === typeof z[g]) if (l.getSubStringLength) try { z[g] = k + l.getSubStringLength(0, p ? g + 1 : g) } catch (S) { "" } else h.getSpanWidth && (b.textContent = v(d || p, a), z[g] = k + h.getSpanWidth(f, b)); return z[g] }; f.rotation = 0; var A = g(b.textContent.length); if (k + A > c) {
                            for (; l <= u;)n = Math.ceil((l + u) / 2), p && (E = v(p, n)), A = g(n, E && E.length - 1), l === u ? l = u + 1 : A > c ? u = n - 1 : l = n; 0 === u ?
                                b.textContent = "" : d && u === d.length - 1 || (b.textContent = E || v(d || p, n))
                        } p && p.splice(0, n); f.actualWidth = A; f.rotation = a
                    }; b.prototype.unescapeEntities = function (b, d) { k(this.renderer.escapes, function (f, h) { d && -1 !== d.indexOf(f) || (b = b.toString().replace(new RegExp(f, "g"), h)) }); return b }; return b
            }()
        }); I(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"],
        e["Core/Renderer/SVG/Symbols.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F, y, t) {
            var m = x.charts, k = x.deg2rad, d = x.doc, b = x.isFirefox, f = x.isMS, h = x.isWebKit, p = x.noop, G = x.SVG_NS, D = x.symbolSizes, v = x.win, B = t.addEvent, r = t.attr, a = t.createElement, z = t.css, l = t.defined, u = t.destroyObjectProperties, n = t.extend, E = t.isArray, g = t.isNumber, A = t.isObject, H = t.isString, J = t.merge, M = t.pick, S = t.pInt, K = t.uniqueKey, Y; x = function () {
                function p(a, g, b, l, d, n, f) {
                    this.width = this.url = this.style =
                        this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0; this.init(a, g, b, l, d, n, f)
                } p.prototype.init = function (a, g, l, n, f, A, h) {
                    var p = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }), u = p.element; h || p.css(this.getStyle(n)); a.appendChild(u); r(a, "dir", "ltr"); -1 === a.innerHTML.indexOf("xmlns") && r(u, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = u; this.boxWrapper = p; this.alignedObjects =
                        []; this.url = this.getReferenceURL(); this.createElement("desc").add().element.appendChild(d.createTextNode("Created with Highcharts 10.3.3")); this.defs = this.createElement("defs").add(); this.allowHTML = A; this.forExport = f; this.styledMode = h; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(g, l, !1); var k; b && a.getBoundingClientRect && (g = function () { z(a, { left: 0, top: 0 }); k = a.getBoundingClientRect(); z(a, { left: Math.ceil(k.left) - k.left + "px", top: Math.ceil(k.top) - k.top + "px" }) }, g(), this.unSubPixelFix =
                            B(v, "resize", g))
                }; p.prototype.definition = function (a) { return (new c([a])).addToDOM(this.defs.element) }; p.prototype.getReferenceURL = function () {
                    if ((b || h) && d.getElementsByTagName("base").length) {
                        if (!l(Y)) {
                            var a = K(); a = (new c([{ tagName: "svg", attributes: { width: 8, height: 8 }, children: [{ tagName: "defs", children: [{ tagName: "clipPath", attributes: { id: a }, children: [{ tagName: "rect", attributes: { width: 4, height: 4 } }] }] }, { tagName: "rect", attributes: { id: "hitme", width: 8, height: 8, "clip-path": "url(#".concat(a, ")"), fill: "rgba(0,0,0,0.001)" } }] }])).addToDOM(d.body);
                            z(a, { position: "fixed", top: 0, left: 0, zIndex: 9E5 }); var g = d.elementFromPoint(6, 6); Y = "hitme" === (g && g.id); d.body.removeChild(a)
                        } if (Y) return v.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20")
                    } return ""
                }; p.prototype.getStyle = function (a) { return this.style = n({ fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px" }, a) }; p.prototype.setStyle = function (a) { this.boxWrapper.css(this.getStyle(a)) }; p.prototype.isHidden = function () { return !this.boxWrapper.getBBox().width };
                p.prototype.destroy = function () { var a = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); u(this.gradients || {}); this.gradients = null; a && (this.defs = a.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null }; p.prototype.createElement = function (a) { var g = new this.Element; g.init(this, a); return g }; p.prototype.getRadialAttr = function (a, g) { return { cx: a[0] - a[2] / 2 + (g.cx || 0) * a[2], cy: a[1] - a[2] / 2 + (g.cy || 0) * a[2], r: (g.r || 0) * a[2] } }; p.prototype.buildText = function (a) { (new y(a)).buildSVG() };
                p.prototype.getContrast = function (a) { a = e.parse(a).rgba.map(function (a) { a /= 255; return .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4) }); a = .2126 * a[0] + .7152 * a[1] + .0722 * a[2]; return 1.05 / (a + .05) > (a + .05) / .05 ? "#FFFFFF" : "#000000" }; p.prototype.button = function (a, g, b, l, d, h, p, u, k, r) {
                    void 0 === d && (d = {}); var z = this.label(a, g, b, k, void 0, void 0, r, void 0, "button"), E = this.styledMode; a = d.states || {}; var L = 0; d = J(d); delete d.states; var P = J({ color: "#333333", cursor: "pointer", fontWeight: "normal" }, d.style); delete d.style; var H =
                        c.filterUserAttributes(d); z.attr(J({ padding: 8, r: 2 }, H)); if (!E) { H = J({ fill: "#f7f7f7", stroke: "#cccccc", "stroke-width": 1 }, H); h = J(H, { fill: "#e6e6e6" }, c.filterUserAttributes(h || a.hover || {})); var G = h.style; delete h.style; p = J(H, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, c.filterUserAttributes(p || a.select || {})); var v = p.style; delete p.style; u = J(H, { style: { color: "#cccccc" } }, c.filterUserAttributes(u || a.disabled || {})); var m = u.style; delete u.style } B(z.element, f ? "mouseover" : "mouseenter", function () {
                            3 !==
                            L && z.setState(1)
                        }); B(z.element, f ? "mouseout" : "mouseleave", function () { 3 !== L && z.setState(L) }); z.setState = function (a) { 1 !== a && (z.state = L = a); z.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]); E || (z.attr([H, h, p, u][a || 0]), a = [P, G, v, m][a || 0], A(a) && z.css(a)) }; E || (z.attr(H).css(n({ cursor: "default" }, P)), r && z.text.css({ pointerEvents: "none" })); return z.on("touchstart", function (a) { return a.stopPropagation() }).on("click",
                            function (a) { 3 !== L && l.call(z, a) })
                }; p.prototype.crispLine = function (a, g, b) { void 0 === b && (b = "round"); var d = a[0], n = a[1]; l(d[1]) && d[1] === n[1] && (d[1] = n[1] = Math[b](d[1]) - g % 2 / 2); l(d[2]) && d[2] === n[2] && (d[2] = n[2] = Math[b](d[2]) + g % 2 / 2); return a }; p.prototype.path = function (a) { var g = this.styledMode ? {} : { fill: "none" }; E(a) ? g.d = a : A(a) && n(g, a); return this.createElement("path").attr(g) }; p.prototype.circle = function (a, g, b) {
                    a = A(a) ? a : "undefined" === typeof a ? {} : { x: a, y: g, r: b }; g = this.createElement("circle"); g.xSetter = g.ySetter =
                        function (a, g, b) { b.setAttribute("c" + g, a) }; return g.attr(a)
                }; p.prototype.arc = function (a, g, b, l, d, n) { A(a) ? (l = a, g = l.y, b = l.r, a = l.x) : l = { innerR: l, start: d, end: n }; a = this.symbol("arc", a, g, b, b, l); a.r = b; return a }; p.prototype.rect = function (a, g, b, l, d, n) {
                    d = A(a) ? a.r : d; var f = this.createElement("rect"); a = A(a) ? a : "undefined" === typeof a ? {} : { x: a, y: g, width: Math.max(b, 0), height: Math.max(l, 0) }; this.styledMode || ("undefined" !== typeof n && (a["stroke-width"] = n, a = f.crisp(a)), a.fill = "none"); d && (a.r = d); f.rSetter = function (a, g, b) {
                        f.r =
                        a; r(b, { rx: a, ry: a })
                    }; f.rGetter = function () { return f.r || 0 }; return f.attr(a)
                }; p.prototype.setSize = function (a, g, b) { this.width = a; this.height = g; this.boxWrapper.animate({ width: a, height: g }, { step: function () { this.attr({ viewBox: "0 0 " + this.attr("width") + " " + this.attr("height") }) }, duration: M(b, !0) ? void 0 : 0 }); this.alignElements() }; p.prototype.g = function (a) { var g = this.createElement("g"); return a ? g.attr({ "class": "highcharts-" + a }) : g }; p.prototype.image = function (a, b, l, d, n, f) {
                    var A = { preserveAspectRatio: "none" }, h = function (a,
                        g) { a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", g) : a.setAttribute("hc-svg-href", g) }; g(b) && (A.x = b); g(l) && (A.y = l); g(d) && (A.width = d); g(n) && (A.height = n); var p = this.createElement("image").attr(A); b = function (g) { h(p.element, a); f.call(p, g) }; f ? (h(p.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), l = new v.Image, B(l, "load", b), l.src = a, l.complete && b({})) : h(p.element, a); return p
                }; p.prototype.symbol = function (g, b, f, A, h, p) {
                    var u = this, k = /^url\((.*?)\)$/,
                    E = k.test(g), c = !E && (this.symbols[g] ? g : "circle"), L = c && this.symbols[c], P; if (L) { "number" === typeof b && (P = L.call(this.symbols, Math.round(b || 0), Math.round(f || 0), A || 0, h || 0, p)); var H = this.path(P); u.styledMode || H.attr("fill", "none"); n(H, { symbolName: c || void 0, x: b, y: f, width: A, height: h }); p && n(H, p) } else if (E) {
                        var G = g.match(k)[1]; var v = H = this.image(G); v.imgwidth = M(D[G] && D[G].width, p && p.width); v.imgheight = M(D[G] && D[G].height, p && p.height); var B = function (a) { return a.attr({ width: a.width, height: a.height }) };["width",
                            "height"].forEach(function (a) { v[a + "Setter"] = function (a, g) { this[g] = a; a = this.alignByTranslate; var b = this.element, d = this.width, n = this.height, f = this.imgwidth, A = this.imgheight, h = this["img" + g]; if (l(h)) { var u = 1; p && "within" === p.backgroundSize && d && n ? (u = Math.min(d / f, n / A), h = Math.round(h * u), r(b, { width: Math.round(f * u), height: Math.round(A * u) })) : b && b.setAttribute(g, h); a || this.translate(((d || 0) - h * u) / 2, ((n || 0) - h * u) / 2) } } }); l(b) && v.attr({ x: b, y: f }); v.isImg = !0; l(v.imgwidth) && l(v.imgheight) ? B(v) : (v.attr({ width: 0, height: 0 }),
                                a("img", { onload: function () { var a = m[u.chartIndex]; 0 === this.width && (z(this, { position: "absolute", top: "-999em" }), d.body.appendChild(this)); D[G] = { width: this.width, height: this.height }; v.imgwidth = this.width; v.imgheight = this.height; v.element && B(v); this.parentNode && this.parentNode.removeChild(this); u.imgCount--; if (!u.imgCount && a && !a.hasLoaded) a.onload() }, src: G }), this.imgCount++)
                    } return H
                }; p.prototype.clipRect = function (a, g, b, l) {
                    var d = K() + "-", n = this.createElement("clipPath").attr({ id: d }).add(this.defs); a = this.rect(a,
                        g, b, l, 0).add(n); a.id = d; a.clipPath = n; a.count = 0; return a
                }; p.prototype.text = function (a, g, b, d) { var n = {}; if (d && (this.allowHTML || !this.forExport)) return this.html(a, g, b); n.x = Math.round(g || 0); b && (n.y = Math.round(b)); l(a) && (n.text = a); a = this.createElement("text").attr(n); if (!d || this.forExport && !this.allowHTML) a.xSetter = function (a, g, b) { for (var l = b.getElementsByTagName("tspan"), d = b.getAttribute(g), n = 0, f; n < l.length; n++)f = l[n], f.getAttribute(g) === d && f.setAttribute(g, a); b.setAttribute(g, a) }; return a }; p.prototype.fontMetrics =
                    function (a, g) { a = !this.styledMode && /px/.test(a) || !v.getComputedStyle ? a || g && g.style && g.style.fontSize || this.style && this.style.fontSize : g && q.prototype.getStyle.call(g, "font-size"); a = /px/.test(a) ? S(a) : 12; g = 24 > a ? a + 3 : Math.round(1.2 * a); return { h: g, b: Math.round(.8 * g), f: a } }; p.prototype.rotCorr = function (a, g, b) { var l = a; g && b && (l = Math.max(l * Math.cos(g * k), 4)); return { x: -a / 3 * Math.sin(g * k), y: l } }; p.prototype.pathToSegments = function (a) {
                        for (var b = [], l = [], d = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, n = 0; n < a.length; n++)H(l[0]) &&
                            g(a[n]) && l.length === d[l[0].toUpperCase()] && a.splice(n, 0, l[0].replace("M", "L").replace("m", "l")), "string" === typeof a[n] && (l.length && b.push(l.slice(0)), l.length = 0), l.push(a[n]); b.push(l.slice(0)); return b
                    }; p.prototype.label = function (a, g, b, l, d, n, f, A, h) { return new w(this, a, g, b, l, d, n, f, A, h) }; p.prototype.alignElements = function () { this.alignedObjects.forEach(function (a) { return a.align() }) }; return p
            }(); n(x.prototype, {
                Element: q, SVG_NS: G, escapes: { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, symbols: F,
                draw: p
            }); C.registerRendererType("svg", x, !0); ""; return x
        }); I(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (c, e, x) {
            var K = this && this.__extends || function () {
                var b = function (d, f) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var f in d) d.hasOwnProperty(f) && (b[f] = d[f]) }; return b(d, f) }; return function (d, f) {
                    function h() { this.constructor = d } b(d, f); d.prototype = null === f ?
                        Object.create(f) : (h.prototype = f.prototype, new h)
                }
            }(), q = c.isFirefox, w = c.isMS, F = c.isWebKit, y = c.win, t = x.css, m = x.defined, k = x.extend, d = x.pick, b = x.pInt; return function (f) {
                function h() { return null !== f && f.apply(this, arguments) || this } K(h, f); h.compose = function (b) { if (-1 === h.composedClasses.indexOf(b)) { h.composedClasses.push(b); var d = h.prototype, f = b.prototype; f.getSpanCorrection = d.getSpanCorrection; f.htmlCss = d.htmlCss; f.htmlGetBBox = d.htmlGetBBox; f.htmlUpdateTransform = d.htmlUpdateTransform; f.setSpanRotation = d.setSpanRotation } return b };
                h.prototype.getSpanCorrection = function (b, d, f) { this.xCorr = -b * f; this.yCorr = -d }; h.prototype.htmlCss = function (b) { var f = "SPAN" === this.element.tagName && b && "width" in b, h = d(f && b.width, void 0); if (f) { delete b.width; this.textWidth = h; var p = !0 } b && "ellipsis" === b.textOverflow && (b.whiteSpace = "nowrap", b.overflow = "hidden"); this.styles = k(this.styles, b); t(this.element, b); p && this.htmlUpdateTransform(); return this }; h.prototype.htmlGetBBox = function () {
                    var b = this.element; return {
                        x: b.offsetLeft, y: b.offsetTop, width: b.offsetWidth,
                        height: b.offsetHeight
                    }
                }; h.prototype.htmlUpdateTransform = function () {
                    if (this.added) {
                        var d = this.renderer, f = this.element, h = this.translateX || 0, k = this.translateY || 0, c = this.x || 0, r = this.y || 0, a = this.textAlign || "left", z = { left: 0, center: .5, right: 1 }[a], l = this.styles; l = l && l.whiteSpace; t(f, { marginLeft: h, marginTop: k }); !d.styledMode && this.shadows && this.shadows.forEach(function (a) { t(a, { marginLeft: h + 1, marginTop: k + 1 }) }); this.inverted && [].forEach.call(f.childNodes, function (a) { d.invertChild(a, f) }); if ("SPAN" === f.tagName) {
                            var u =
                                this.rotation, n = this.textWidth && b(this.textWidth), E = [u, a, f.innerHTML, this.textWidth, this.textAlign].join(), g = void 0; g = !1; if (n !== this.oldTextWidth) { if (this.textPxLength) var A = this.textPxLength; else t(f, { width: "", whiteSpace: l || "nowrap" }), A = f.offsetWidth; (n > this.oldTextWidth || A > n) && (/[ \-]/.test(f.textContent || f.innerText) || "ellipsis" === f.style.textOverflow) && (t(f, { width: A > n || u ? n + "px" : "auto", display: "block", whiteSpace: l || "normal" }), this.oldTextWidth = n, g = !0) } this.hasBoxWidthChanged = g; E !== this.cTT && (g =
                                    d.fontMetrics(f.style.fontSize, f).b, !m(u) || u === (this.oldRotation || 0) && a === this.oldAlign || this.setSpanRotation(u, z, g), this.getSpanCorrection(!m(u) && this.textPxLength || f.offsetWidth, g, z, u, a)); t(f, { left: c + (this.xCorr || 0) + "px", top: r + (this.yCorr || 0) + "px" }); this.cTT = E; this.oldRotation = u; this.oldAlign = a
                        }
                    } else this.alignOnAdd = !0
                }; h.prototype.setSpanRotation = function (b, d, f) {
                    var h = {}, p = w && !/Edge/.test(y.navigator.userAgent) ? "-ms-transform" : F ? "-webkit-transform" : q ? "MozTransform" : y.opera ? "-o-transform" : void 0;
                    p && (h[p] = h.transform = "rotate(" + b + "deg)", h[p + (q ? "Origin" : "-origin")] = h.transformOrigin = 100 * d + "% " + f + "px", t(this.element, h))
                }; h.composedClasses = []; return h
            }(e)
        }); I(e, "Core/Renderer/HTML/HTMLRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
            var q = this && this.__extends || function () {
                var c = function (k, d) {
                    c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b,
                        d) { for (var f in d) d.hasOwnProperty(f) && (b[f] = d[f]) }; return c(k, d)
                }; return function (k, d) { function b() { this.constructor = k } c(k, d); k.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) }
            }(), K = C.attr, F = C.createElement, y = C.extend, t = C.pick; return function (m) {
                function k() { return null !== m && m.apply(this, arguments) || this } q(k, m); k.compose = function (d) { -1 === k.composedClasses.indexOf(d) && (k.composedClasses.push(d), d.prototype.html = k.prototype.html); return d }; k.prototype.html = function (d, b, f) {
                    var h =
                        this.createElement("span"), p = h.element, k = h.renderer, m = k.isSVG, v = function (b, d) { ["opacity", "visibility"].forEach(function (a) { b[a + "Setter"] = function (f, l, h) { var n = b.div ? b.div.style : d; e.prototype[a + "Setter"].call(this, f, l, h); n && (n[l] = f) } }); b.addedSetters = !0 }; h.textSetter = function (b) { b !== this.textStr && (delete this.bBox, delete this.oldTextWidth, c.setElementHTML(this.element, t(b, "")), this.textStr = b, h.doTransform = !0) }; m && v(h, h.element.style); h.xSetter = h.ySetter = h.alignSetter = h.rotationSetter = function (b, d) {
                            "align" ===
                            d ? h.alignValue = h.textAlign = b : h[d] = b; h.doTransform = !0
                        }; h.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; h.attr({ text: d, x: Math.round(b), y: Math.round(f) }).css({ position: "absolute" }); k.styledMode || h.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }); p.style.whiteSpace = "nowrap"; h.css = h.htmlCss; m && (h.add = function (b) {
                            var d = k.box.parentNode, a = []; if (this.parentGroup = b) {
                                var f = b.div; if (!f) {
                                    for (; b;)a.push(b), b = b.parentGroup; a.reverse().forEach(function (b) {
                                        function l(a,
                                            l) { b[l] = a; "translateX" === l ? g.left = a + "px" : g.top = a + "px"; b.doTransform = !0 } var n = K(b.element, "class"), p = b.styles || {}; f = b.div = b.div || F("div", n ? { className: n } : void 0, { position: "absolute", left: (b.translateX || 0) + "px", top: (b.translateY || 0) + "px", display: b.display, opacity: b.opacity, cursor: p.cursor, pointerEvents: p.pointerEvents, visibility: b.visibility }, f || d); var g = f.style; y(b, {
                                                classSetter: function (a) { return function (b) { this.element.setAttribute("class", b); a.className = b } }(f), on: function () {
                                                    a[0].div && h.on.apply({
                                                        element: a[0].div,
                                                        onEvents: b.onEvents
                                                    }, arguments); return b
                                                }, translateXSetter: l, translateYSetter: l
                                            }); b.addedSetters || v(b)
                                    })
                                }
                            } else f = d; f.appendChild(p); h.added = !0; h.alignOnAdd && h.htmlUpdateTransform(); return h
                        }); return h
                }; k.composedClasses = []; return k
            }(x)
        }); I(e, "Core/Axis/AxisDefaults.js", [], function () {
            var c; (function (c) {
                c.defaultXAxisOptions = {
                    alignTicks: !0, allowDecimals: void 0, panningEnabled: !0, zIndex: 2, zoomEnabled: !0, dateTimeLabelFormats: {
                        millisecond: { main: "%H:%M:%S.%L", range: !1 }, second: { main: "%H:%M:%S", range: !1 },
                        minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" }
                    }, endOnTick: !1, gridLineDashStyle: "Solid", gridZIndex: 1, labels: { autoRotation: void 0, autoRotationLimit: 80, distance: void 0, enabled: !0, indentation: 10, overflow: "justify", padding: 5, reserveSpace: void 0, rotation: void 0, staggerLines: 0, step: 0, useHTML: !1, x: 0, zIndex: 7, style: { color: "#666666", cursor: "default", fontSize: "11px" } }, maxPadding: .01, minorGridLineDashStyle: "Solid", minorTickLength: 2,
                    minorTickPosition: "outside", minPadding: .01, offset: void 0, opposite: !1, reversed: void 0, reversedStacks: !1, showEmpty: !0, showFirstLabel: !0, showLastLabel: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: { align: "middle", rotation: 0, useHTML: !1, x: 0, y: 0, style: { color: "#666666" } }, type: "linear", uniqueNames: !0, visible: !0, minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6",
                    gridLineWidth: void 0, tickColor: "#ccd6eb"
                }; c.defaultYAxisOptions = { reversedStacks: !0, endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: { animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function () { var c = this.axis.chart.numberFormatter; return c(this.total || 0, -1) }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" } }, gridLineWidth: 1, lineWidth: 0 };
                c.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } }; c.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } }; c.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; c.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }
            })(c || (c = {})); return c
        }); I(e, "Core/Foundation.js", [e["Core/Utilities.js"]], function (c) {
            var e = c.addEvent, x = c.isFunction, C = c.objectEach, q = c.removeEvent, w; (function (c) {
                c.registerEventOptions = function (c, t) {
                    c.eventOptions =
                    c.eventOptions || {}; C(t.events, function (m, k) { c.eventOptions[k] !== m && (c.eventOptions[k] && (q(c, k, c.eventOptions[k]), delete c.eventOptions[k]), x(m) && (c.eventOptions[k] = m, e(c, k, m))) })
                }
            })(w || (w = {})); return w
        }); I(e, "Core/Axis/Tick.js", [e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e, x) {
            var K = e.deg2rad, q = x.clamp, w = x.correctFloat, F = x.defined, y = x.destroyObjectProperties, t = x.extend, m = x.fireEvent, k = x.isNumber, d = x.merge, b = x.objectEach, f = x.pick; e = function () {
                function h(b, d,
                    f, h, k) { this.isNewLabel = this.isNew = !0; this.axis = b; this.pos = d; this.type = f || ""; this.parameters = k || {}; this.tickmarkOffset = this.parameters.tickmarkOffset; this.options = this.parameters.options; m(this, "init"); f || h || this.addLabel() } h.prototype.addLabel = function () {
                        var b = this, d = b.axis, h = d.options, v = d.chart, e = d.categories, r = d.logarithmic, a = d.names, z = b.pos, l = f(b.options && b.options.labels, h.labels), u = d.tickPositions, n = z === u[0], E = z === u[u.length - 1], g = (!l.step || 1 === l.step) && 1 === d.tickInterval; u = u.info; var A = b.label,
                            H; e = this.parameters.category || (e ? f(e[z], a[z], z) : z); r && k(e) && (e = w(r.lin2log(e))); if (d.dateTime) if (u) { var J = v.time.resolveDTLFormat(h.dateTimeLabelFormats[!h.grid && u.higherRanks[z] || u.unitName]); var M = J.main } else k(e) && (M = d.dateTime.getXDateFormat(e, h.dateTimeLabelFormats || {})); b.isFirst = n; b.isLast = E; var S = { axis: d, chart: v, dateTimeLabelFormat: M, isFirst: n, isLast: E, pos: z, tick: b, tickPositionInfo: u, value: e }; m(this, "labelFormat", S); var y = function (a) {
                                return l.formatter ? l.formatter.call(a, a) : l.format ? (a.text =
                                    d.defaultLabelFormatter.call(a, a), c.format(l.format, a, v)) : d.defaultLabelFormatter.call(a, a)
                            }; h = y.call(S, S); var q = J && J.list; b.shortenLabel = q ? function () { for (H = 0; H < q.length; H++)if (t(S, { dateTimeLabelFormat: q[H] }), A.attr({ text: y.call(S, S) }), A.getBBox().width < d.getSlotWidth(b) - 2 * l.padding) return; A.attr({ text: "" }) } : void 0; g && d._addedPlotLB && b.moveLabel(h, l); F(A) || b.movedLabel ? A && A.textStr !== h && !g && (!A.textWidth || l.style.width || A.styles.width || A.css({ width: null }), A.attr({ text: h }), A.textPxLength = A.getBBox().width) :
                                (b.label = A = b.createLabel({ x: 0, y: 0 }, h, l), b.rotation = 0)
                    }; h.prototype.createLabel = function (b, f, h) { var k = this.axis, c = k.chart; if (b = F(f) && h.enabled ? c.renderer.text(f, b.x, b.y, h.useHTML).add(k.labelGroup) : null) c.styledMode || b.css(d(h.style)), b.textPxLength = b.getBBox().width; return b }; h.prototype.destroy = function () { y(this, this.axis) }; h.prototype.getPosition = function (b, d, f, h) {
                        var k = this.axis, c = k.chart, a = h && c.oldChartHeight || c.chartHeight; b = {
                            x: b ? w(k.translate(d + f, void 0, void 0, h) + k.transB) : k.left + k.offset + (k.opposite ?
                                (h && c.oldChartWidth || c.chartWidth) - k.right - k.left : 0), y: b ? a - k.bottom + k.offset - (k.opposite ? k.height : 0) : w(a - k.translate(d + f, void 0, void 0, h) - k.transB)
                        }; b.y = q(b.y, -1E5, 1E5); m(this, "afterGetPosition", { pos: b }); return b
                    }; h.prototype.getLabelPosition = function (b, d, f, h, k, c, a, z) {
                        var l = this.axis, u = l.transA, n = l.isLinked && l.linkedParent ? l.linkedParent.reversed : l.reversed, p = l.staggerLines, g = l.tickRotCorr || { x: 0, y: 0 }, A = h || l.reserveSpaceDefault ? 0 : -l.labelOffset * ("center" === l.labelAlign ? .5 : 1), r = {}; f = 0 === l.side ? f.rotation ?
                            -8 : -f.getBBox().height : 2 === l.side ? g.y + 8 : Math.cos(f.rotation * K) * (g.y - f.getBBox(!1, 0).height / 2); F(k.y) && (f = 0 === l.side && l.horiz ? k.y + f : k.y); b = b + k.x + A + g.x - (c && h ? c * u * (n ? -1 : 1) : 0); d = d + f - (c && !h ? c * u * (n ? 1 : -1) : 0); p && (h = a / (z || 1) % p, l.opposite && (h = p - h - 1), d += l.labelOffset / p * h); r.x = b; r.y = Math.round(d); m(this, "afterGetLabelPosition", { pos: r, tickmarkOffset: c, index: a }); return r
                    }; h.prototype.getLabelSize = function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }; h.prototype.getMarkPath = function (b,
                        d, f, h, k, c) { return c.crispLine([["M", b, d], ["L", b + (k ? 0 : -f), d + (k ? f : 0)]], h) }; h.prototype.handleOverflow = function (b) {
                            var d = this.axis, h = d.options.labels, k = b.x, c = d.chart.chartWidth, p = d.chart.spacing, a = f(d.labelLeft, Math.min(d.pos, p[3])); p = f(d.labelRight, Math.max(d.isRadial ? 0 : d.pos + d.len, c - p[1])); var z = this.label, l = this.rotation, u = { left: 0, center: .5, right: 1 }[d.labelAlign || z.attr("align")], n = z.getBBox().width, E = d.getSlotWidth(this), g = {}, A = E, H = 1, e; if (l || "justify" !== h.overflow) 0 > l && k - u * n < a ? e = Math.round(k / Math.cos(l *
                                K) - a) : 0 < l && k + u * n > p && (e = Math.round((c - k) / Math.cos(l * K))); else if (c = k + (1 - u) * n, k - u * n < a ? A = b.x + A * (1 - u) - a : c > p && (A = p - b.x + A * u, H = -1), A = Math.min(E, A), A < E && "center" === d.labelAlign && (b.x += H * (E - A - u * (E - Math.min(n, A)))), n > A || d.autoRotation && (z.styles || {}).width) e = A; e && (this.shortenLabel ? this.shortenLabel() : (g.width = Math.floor(e) + "px", (h.style || {}).textOverflow || (g.textOverflow = "ellipsis"), z.css(g)))
                        }; h.prototype.moveLabel = function (d, f) {
                            var h = this, k = h.label, c = h.axis, p = c.reversed, a = !1; k && k.textStr === d ? (h.movedLabel =
                                k, a = !0, delete h.label) : b(c.ticks, function (b) { a || b.isNew || b === h || !b.label || b.label.textStr !== d || (h.movedLabel = b.label, a = !0, b.labelPos = h.movedLabel.xy, delete b.label) }); if (!a && (h.labelPos || k)) { var z = h.labelPos || k.xy; k = c.horiz ? p ? 0 : c.width + c.left : z.x; c = c.horiz ? z.y : p ? c.width + c.left : 0; h.movedLabel = h.createLabel({ x: k, y: c }, d, f); h.movedLabel && h.movedLabel.attr({ opacity: 0 }) }
                        }; h.prototype.render = function (b, d, h) {
                            var k = this.axis, c = k.horiz, p = this.pos, a = f(this.tickmarkOffset, k.tickmarkOffset); p = this.getPosition(c,
                                p, a, d); a = p.x; var z = p.y; k = c && a === k.pos + k.len || !c && z === k.pos ? -1 : 1; c = f(h, this.label && this.label.newOpacity, 1); h = f(h, 1); this.isActive = !0; this.renderGridLine(d, h, k); this.renderMark(p, h, k); this.renderLabel(p, d, c, b); this.isNew = !1; m(this, "afterRender")
                        }; h.prototype.renderGridLine = function (b, d, h) {
                            var k = this.axis, c = k.options, p = {}, a = this.pos, z = this.type, l = f(this.tickmarkOffset, k.tickmarkOffset), u = k.chart.renderer, n = this.gridLine, E = c.gridLineWidth, g = c.gridLineColor, A = c.gridLineDashStyle; "minor" === this.type &&
                                (E = c.minorGridLineWidth, g = c.minorGridLineColor, A = c.minorGridLineDashStyle); n || (k.chart.styledMode || (p.stroke = g, p["stroke-width"] = E || 0, p.dashstyle = A), z || (p.zIndex = 1), b && (d = 0), this.gridLine = n = u.path().attr(p).addClass("highcharts-" + (z ? z + "-" : "") + "grid-line").add(k.gridGroup)); if (n && (h = k.getPlotLinePath({ value: a + l, lineWidth: n.strokeWidth() * h, force: "pass", old: b, acrossPanes: !1 }))) n[b || this.isNew ? "attr" : "animate"]({ d: h, opacity: d })
                        }; h.prototype.renderMark = function (b, d, h) {
                            var k = this.axis, c = k.options, p = k.chart.renderer,
                            a = this.type, z = k.tickSize(a ? a + "Tick" : "tick"), l = b.x; b = b.y; var u = f(c["minor" !== a ? "tickWidth" : "minorTickWidth"], !a && k.isXAxis ? 1 : 0); c = c["minor" !== a ? "tickColor" : "minorTickColor"]; var n = this.mark, E = !n; z && (k.opposite && (z[0] = -z[0]), n || (this.mark = n = p.path().addClass("highcharts-" + (a ? a + "-" : "") + "tick").add(k.axisGroup), k.chart.styledMode || n.attr({ stroke: c, "stroke-width": u })), n[E ? "attr" : "animate"]({ d: this.getMarkPath(l, b, z[0], n.strokeWidth() * h, k.horiz, p), opacity: d }))
                        }; h.prototype.renderLabel = function (b, d, h, c) {
                            var p =
                                this.axis, r = p.horiz, a = p.options, z = this.label, l = a.labels, u = l.step; p = f(this.tickmarkOffset, p.tickmarkOffset); var n = b.x; b = b.y; var E = !0; z && k(n) && (z.xy = b = this.getLabelPosition(n, b, z, r, l, p, c, u), this.isFirst && !this.isLast && !a.showFirstLabel || this.isLast && !this.isFirst && !a.showLastLabel ? E = !1 : !r || l.step || l.rotation || d || 0 === h || this.handleOverflow(b), u && c % u && (E = !1), E && k(b.y) ? (b.opacity = h, z[this.isNewLabel ? "attr" : "animate"](b).show(!0), this.isNewLabel = !1) : (z.hide(), this.isNewLabel = !0))
                        }; h.prototype.replaceMovedLabel =
                            function () { var b = this.label, d = this.axis, f = d.reversed; if (b && !this.isNew) { var h = d.horiz ? f ? d.left : d.width + d.left : b.xy.x; f = d.horiz ? b.xy.y : f ? d.width + d.top : d.top; b.animate({ x: h, y: f, opacity: 0 }, void 0, b.destroy); delete this.label } d.isDirty = !0; this.label = this.movedLabel; delete this.movedLabel }; return h
            }(); ""; return e
        }); I(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/AxisDefaults.js"], e["Core/Color/Color.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"],
        e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F, y) {
            var t = c.animObject, m = C.defaultOptions, k = q.registerEventOptions, d = w.deg2rad, b = y.arrayMax, f = y.arrayMin, h = y.clamp, p = y.correctFloat, G = y.defined, D = y.destroyObjectProperties, v = y.erase, B = y.error, r = y.extend, a = y.fireEvent, z = y.isArray, l = y.isNumber, u = y.isString, n = y.merge, E = y.normalizeTickInterval, g = y.objectEach, A = y.pick, H = y.relativeLength, J = y.removeEvent, M = y.splat, S = y.syncTimeout, K = function (a, b) {
                return E(b, void 0, void 0, A(a.options.allowDecimals,
                    .5 > b || void 0 !== a.tickAmount), !!a.tickAmount)
            }; c = function () {
                function c(a, b) {
                    this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset =
                        this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.bottom = this.alternateBands = void 0; this.init(a, b)
                } c.prototype.init = function (b, g) {
                    var d = g.isX; this.chart = b; this.horiz = b.inverted && !this.isZAxis ? !d : d; this.isXAxis = d; this.coll = this.coll || (d ? "xAxis" : "yAxis"); a(this,
                        "init", { userOptions: g }); this.opposite = A(g.opposite, this.opposite); this.side = A(g.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3); this.setOptions(g); var n = this.options, f = n.labels, h = n.type; this.userOptions = g; this.minPixelPadding = 0; this.reversed = A(n.reversed, this.reversed); this.visible = n.visible; this.zoomEnabled = n.zoomEnabled; this.hasNames = "category" === h || !0 === n.categories; this.categories = n.categories || (this.hasNames ? [] : void 0); this.names || (this.names = [], this.names.keys = {}); this.plotLinesAndBandsGroups =
                            {}; this.positiveValuesOnly = !!this.logarithmic; this.isLinked = G(n.linkedTo); this.ticks = {}; this.labelEdge = []; this.minorTicks = {}; this.plotLinesAndBands = []; this.alternateBands = {}; this.len = 0; this.minRange = this.userMinRange = n.minRange || n.maxZoom; this.range = n.range; this.offset = n.offset || 0; this.min = this.max = null; g = A(n.crosshair, M(b.options.tooltip.crosshairs)[d ? 0 : 1]); this.crosshair = !0 === g ? {} : g; -1 === b.axes.indexOf(this) && (d ? b.axes.splice(b.xAxis.length, 0, this) : b.axes.push(this), b[this.coll].push(this)); this.series =
                                this.series || []; b.inverted && !this.isZAxis && d && "undefined" === typeof this.reversed && (this.reversed = !0); this.labelRotation = l(f.rotation) ? f.rotation : void 0; k(this, n); a(this, "afterInit")
                }; c.prototype.setOptions = function (b) { this.options = n(e.defaultXAxisOptions, "yAxis" === this.coll && e.defaultYAxisOptions, [e.defaultTopAxisOptions, e.defaultRightAxisOptions, e.defaultBottomAxisOptions, e.defaultLeftAxisOptions][this.side], n(m[this.coll], b)); a(this, "afterSetOptions", { userOptions: b }) }; c.prototype.defaultLabelFormatter =
                    function (a) {
                        var b = this.axis; a = this.chart.numberFormatter; var g = l(this.value) ? this.value : NaN, d = b.chart.time, n = this.dateTimeLabelFormat, f = m.lang, h = f.numericSymbols; f = f.numericSymbolMagnitude || 1E3; var c = b.logarithmic ? Math.abs(g) : b.tickInterval, k = h && h.length; if (b.categories) var A = "".concat(this.value); else if (n) A = d.dateFormat(n, g); else if (k && 1E3 <= c) for (; k-- && "undefined" === typeof A;)b = Math.pow(f, k + 1), c >= b && 0 === 10 * g % b && null !== h[k] && 0 !== g && (A = a(g / b, -1) + h[k]); "undefined" === typeof A && (A = 1E4 <= Math.abs(g) ? a(g,
                            -1) : a(g, -1, void 0, "")); return A
                    }; c.prototype.getSeriesExtremes = function () {
                        var b = this, g = b.chart, d; a(this, "getSeriesExtremes", null, function () {
                            b.hasVisibleSeries = !1; b.dataMin = b.dataMax = b.threshold = null; b.softThreshold = !b.isXAxis; b.series.forEach(function (a) {
                                if (a.visible || !g.options.chart.ignoreHiddenSeries) {
                                    var n = a.options, f = n.threshold; b.hasVisibleSeries = !0; b.positiveValuesOnly && 0 >= f && (f = null); if (b.isXAxis) {
                                        if (n = a.xData, n.length) {
                                            n = b.logarithmic ? n.filter(b.validatePositiveValue) : n; d = a.getXExtremes(n);
                                            var h = d.min; var c = d.max; l(h) || h instanceof Date || (n = n.filter(l), d = a.getXExtremes(n), h = d.min, c = d.max); n.length && (b.dataMin = Math.min(A(b.dataMin, h), h), b.dataMax = Math.max(A(b.dataMax, c), c))
                                        }
                                    } else if (a = a.applyExtremes(), l(a.dataMin) && (h = a.dataMin, b.dataMin = Math.min(A(b.dataMin, h), h)), l(a.dataMax) && (c = a.dataMax, b.dataMax = Math.max(A(b.dataMax, c), c)), G(f) && (b.threshold = f), !n.softThreshold || b.positiveValuesOnly) b.softThreshold = !1
                                }
                            })
                        }); a(this, "afterGetSeriesExtremes")
                    }; c.prototype.translate = function (a, b, g,
                        d, n, f) { var h = this.linkedParent || this, c = d && h.old ? h.old.min : h.min; if (!l(c)) return NaN; var k = h.minPixelPadding; n = (h.isOrdinal || h.brokenAxis && h.brokenAxis.hasBreaks || h.logarithmic && n) && h.lin2val; var A = 1, u = 0; d = d && h.old ? h.old.transA : h.transA; d || (d = h.transA); g && (A *= -1, u = h.len); h.reversed && (A *= -1, u -= A * (h.sector || h.len)); b ? (f = (a * A + u - k) / d + c, n && (f = h.lin2val(f))) : (n && (a = h.val2lin(a)), a = A * (a - c) * d, f = (h.isRadial ? a : p(a)) + u + A * k + (l(f) ? d * f : 0)); return f }; c.prototype.toPixels = function (a, b) {
                            return this.translate(a, !1,
                                !this.horiz, void 0, !0) + (b ? 0 : this.pos)
                        }; c.prototype.toValue = function (a, b) { return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, void 0, !0) }; c.prototype.getPlotLinePath = function (b) {
                            function g(a, b, g) { "pass" !== H && (a < b || a > g) && (H ? a = h(a, b, g) : G = !0); return a } var d = this, n = d.chart, f = d.left, c = d.top, k = b.old, u = b.value, p = b.lineWidth, z = k && n.oldChartHeight || n.chartHeight, E = k && n.oldChartWidth || n.chartWidth, r = d.transB, e = b.translatedValue, H = b.force, L, m, J, v, G; b = {
                                value: u, lineWidth: p, old: k, force: H, acrossPanes: b.acrossPanes,
                                translatedValue: e
                            }; a(this, "getPlotLinePath", b, function (a) { e = A(e, d.translate(u, void 0, void 0, k)); e = h(e, -1E5, 1E5); L = J = Math.round(e + r); m = v = Math.round(z - e - r); l(e) ? d.horiz ? (m = c, v = z - d.bottom, L = J = g(L, f, f + d.width)) : (L = f, J = E - d.right, m = v = g(m, c, c + d.height)) : (G = !0, H = !1); a.path = G && !H ? null : n.renderer.crispLine([["M", L, m], ["L", J, v]], p || 1) }); return b.path
                        }; c.prototype.getLinearTickPositions = function (a, b, g) {
                            var d = p(Math.floor(b / a) * a); g = p(Math.ceil(g / a) * a); var l = [], n; p(d + a) === d && (n = 20); if (this.single) return [b]; for (b =
                                d; b <= g;) { l.push(b); b = p(b + a, n); if (b === f) break; var f = b } return l
                        }; c.prototype.getMinorTickInterval = function () { var a = this.options; return !0 === a.minorTicks ? A(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval }; c.prototype.getMinorTickPositions = function () {
                            var a = this.options, b = this.tickPositions, g = this.minorTickInterval, d = this.pointRangePadding || 0, l = this.min - d; d = this.max + d; var n = d - l, f = []; if (n && n / g < this.len / 3) {
                                var h = this.logarithmic; if (h) this.paddedTicks.forEach(function (a, b, d) {
                                    b && f.push.apply(f,
                                        h.getLogTickPositions(g, d[b - 1], d[b], !0))
                                }); else if (this.dateTime && "auto" === this.getMinorTickInterval()) f = f.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(g), l, d, a.startOfWeek)); else for (a = l + (b[0] - l) % g; a <= d && a !== f[0]; a += g)f.push(a)
                            } 0 !== f.length && this.trimTicks(f); return f
                        }; c.prototype.adjustForMinRange = function () {
                            var a = this.options, g = this.logarithmic, d = this.min, l = this.max, n = 0, h, c, k, u; this.isXAxis && "undefined" === typeof this.minRange && !g && (G(a.min) || G(a.max) || G(a.floor) || G(a.ceiling) ?
                                this.minRange = null : (this.series.forEach(function (a) { k = a.xData; u = a.xIncrement ? 1 : k.length - 1; if (1 < k.length) for (h = u; 0 < h; h--)if (c = k[h] - k[h - 1], !n || c < n) n = c }), this.minRange = Math.min(5 * n, this.dataMax - this.dataMin))); if (l - d < this.minRange) {
                                    var p = this.dataMax - this.dataMin >= this.minRange; var z = this.minRange; var E = (z - l + d) / 2; E = [d - E, A(a.min, d - E)]; p && (E[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin); d = b(E); l = [d + z, A(a.max, d + z)]; p && (l[2] = g ? g.log2lin(this.dataMax) : this.dataMax); l = f(l); l - d < z &&
                                        (E[0] = l - z, E[1] = A(a.min, l - z), d = b(E))
                                } this.min = d; this.max = l
                        }; c.prototype.getClosest = function () { var a; this.categories ? a = 1 : this.series.forEach(function (b) { var g = b.closestPointRange, d = b.visible || !b.chart.options.chart.ignoreHiddenSeries; !b.noSharedTooltip && G(g) && d && (a = G(a) ? Math.min(a, g) : g) }); return a }; c.prototype.nameToX = function (a) {
                            var b = z(this.options.categories), g = b ? this.categories : this.names, d = a.options.x; a.series.requireSorting = !1; G(d) || (d = this.options.uniqueNames && g ? b ? g.indexOf(a.name) : A(g.keys[a.name],
                                -1) : a.series.autoIncrement()); if (-1 === d) { if (!b && g) var l = g.length } else l = d; "undefined" !== typeof l ? (this.names[l] = a.name, this.names.keys[a.name] = l) : a.x && (l = a.x); return l
                        }; c.prototype.updateNames = function () {
                            var a = this, b = this.names; 0 < b.length && (Object.keys(b.keys).forEach(function (a) { delete b.keys[a] }), b.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (b) {
                                b.xIncrement = null; if (!b.points || b.isDirtyData) a.max = Math.max(a.max, b.xData.length - 1), b.processData(), b.generatePoints();
                                b.data.forEach(function (g, d) { if (g && g.options && "undefined" !== typeof g.name) { var l = a.nameToX(g); "undefined" !== typeof l && l !== g.x && (g.x = l, b.xData[d] = l) } })
                            }))
                        }; c.prototype.setAxisTranslation = function () {
                            var b = this, g = b.max - b.min, d = b.linkedParent, l = !!b.categories, n = b.isXAxis, f = b.axisPointRange || 0, h = 0, c = 0, k = b.transA; if (n || l || f) {
                                var p = b.getClosest(); d ? (h = d.minPointOffset, c = d.pointRangePadding) : b.series.forEach(function (a) {
                                    var g = l ? 1 : n ? A(a.options.pointRange, p, 0) : b.axisPointRange || 0, d = a.options.pointPlacement;
                                    f = Math.max(f, g); if (!b.single || l) a = a.is("xrange") ? !n : n, h = Math.max(h, a && u(d) ? 0 : g / 2), c = Math.max(c, a && "on" === d ? 0 : g)
                                }); d = b.ordinal && b.ordinal.slope && p ? b.ordinal.slope / p : 1; b.minPointOffset = h *= d; b.pointRangePadding = c *= d; b.pointRange = Math.min(f, b.single && l ? 1 : g); n && (b.closestPointRange = p)
                            } b.translationSlope = b.transA = k = b.staticScale || b.len / (g + c || 1); b.transB = b.horiz ? b.left : b.bottom; b.minPixelPadding = k * h; a(this, "afterSetAxisTranslation")
                        }; c.prototype.minFromRange = function () { return this.max - this.range }; c.prototype.setTickInterval =
                            function (b) {
                                var g = this.chart, d = this.logarithmic, n = this.options, f = this.isXAxis, h = this.isLinked, c = n.tickPixelInterval, k = this.categories, u = this.softThreshold, z = n.maxPadding, E = n.minPadding, r = l(n.tickInterval) && 0 <= n.tickInterval ? n.tickInterval : void 0, e = l(this.threshold) ? this.threshold : null; this.dateTime || k || h || this.getTickAmount(); var H = A(this.userMin, n.min); var m = A(this.userMax, n.max); if (h) {
                                    this.linkedParent = g[this.coll][n.linkedTo]; var J = this.linkedParent.getExtremes(); this.min = A(J.min, J.dataMin); this.max =
                                        A(J.max, J.dataMax); n.type !== this.linkedParent.options.type && B(11, 1, g)
                                } else { if (u && G(e)) if (this.dataMin >= e) J = e, E = 0; else if (this.dataMax <= e) { var v = e; z = 0 } this.min = A(H, J, this.dataMin); this.max = A(m, v, this.dataMax) } d && (this.positiveValuesOnly && !b && 0 >= Math.min(this.min, A(this.dataMin, this.min)) && B(10, 1, g), this.min = p(d.log2lin(this.min), 16), this.max = p(d.log2lin(this.max), 16)); this.range && G(this.max) && (this.userMin = this.min = H = Math.max(this.dataMin, this.minFromRange()), this.userMax = m = this.max, this.range = null);
                                a(this, "foundExtremes"); this.beforePadding && this.beforePadding(); this.adjustForMinRange(); !(k || this.axisPointRange || this.stacking && this.stacking.usePercentage || h) && G(this.min) && G(this.max) && (g = this.max - this.min) && (!G(H) && E && (this.min -= g * E), !G(m) && z && (this.max += g * z)); l(this.userMin) || (l(n.softMin) && n.softMin < this.min && (this.min = H = n.softMin), l(n.floor) && (this.min = Math.max(this.min, n.floor))); l(this.userMax) || (l(n.softMax) && n.softMax > this.max && (this.max = m = n.softMax), l(n.ceiling) && (this.max = Math.min(this.max,
                                    n.ceiling))); u && G(this.dataMin) && (e = e || 0, !G(H) && this.min < e && this.dataMin >= e ? this.min = this.options.minRange ? Math.min(e, this.max - this.minRange) : e : !G(m) && this.max > e && this.dataMax <= e && (this.max = this.options.minRange ? Math.max(e, this.min + this.minRange) : e)); l(this.min) && l(this.max) && !this.chart.polar && this.min > this.max && (G(this.options.min) ? this.max = this.min : G(this.options.max) && (this.min = this.max)); this.tickInterval = this.min === this.max || "undefined" === typeof this.min || "undefined" === typeof this.max ? 1 : h &&
                                        this.linkedParent && !r && c === this.linkedParent.options.tickPixelInterval ? r = this.linkedParent.tickInterval : A(r, this.tickAmount ? (this.max - this.min) / Math.max(this.tickAmount - 1, 1) : void 0, k ? 1 : (this.max - this.min) * c / Math.max(this.len, c)); if (f && !b) { var L = this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max); this.series.forEach(function (a) { a.forceCrop = a.forceCropping && a.forceCropping(); a.processData(L) }); a(this, "postProcessData", { hasExtremesChanged: L }) } this.setAxisTranslation(); a(this, "initialAxisTranslation");
                                this.pointRange && !r && (this.tickInterval = Math.max(this.pointRange, this.tickInterval)); b = A(n.minTickInterval, this.dateTime && !this.series.some(function (a) { return a.noSharedTooltip }) ? this.closestPointRange : 0); !r && this.tickInterval < b && (this.tickInterval = b); this.dateTime || this.logarithmic || r || (this.tickInterval = K(this, this.tickInterval)); this.tickAmount || (this.tickInterval = this.unsquish()); this.setTickPositions()
                            }; c.prototype.setTickPositions = function () {
                                var b = this.options, g = b.tickPositions, d = b.tickPositioner,
                                n = this.getMinorTickInterval(), f = this.hasVerticalPanning(), h = "colorAxis" === this.coll, c = (h || !f) && b.startOnTick; f = (h || !f) && b.endOnTick; h = []; var k; this.tickmarkOffset = this.categories && "between" === b.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === n && this.tickInterval ? this.tickInterval / 5 : n; this.single = this.min === this.max && G(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== b.allowDecimals); if (g) h = g.slice(); else if (l(this.min) && l(this.max)) {
                                    if (this.ordinal &&
                                        this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200))) if (this.dateTime) h = this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b.units), this.min, this.max, b.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0); else if (this.logarithmic) h = this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max); else for (n = b = this.tickInterval; n <= 2 * b;)if (h = this.getLinearTickPositions(this.tickInterval, this.min, this.max), this.tickAmount &&
                                            h.length > this.tickAmount) this.tickInterval = K(this, n *= 1.1); else break; else h = [this.min, this.max], B(19, !1, this.chart); h.length > this.len && (h = [h[0], h[h.length - 1]], h[0] === h[1] && (h.length = 1)); d && (this.tickPositions = h, (k = d.apply(this, [this.min, this.max])) && (h = k))
                                } this.tickPositions = h; this.paddedTicks = h.slice(0); this.trimTicks(h, c, f); !this.isLinked && l(this.min) && l(this.max) && (this.single && 2 > h.length && !this.categories && !this.series.some(function (a) { return a.is("heatmap") && "between" === a.options.pointPlacement }) &&
                                    (this.min -= .5, this.max += .5), g || k || this.adjustTickAmount()); a(this, "afterSetTickPositions")
                            }; c.prototype.trimTicks = function (b, g, d) { var l = b[0], n = b[b.length - 1], f = !this.isOrdinal && this.minPointOffset || 0; a(this, "trimTicks"); if (!this.isLinked) { if (g && -Infinity !== l) this.min = l; else for (; this.min - f > b[0];)b.shift(); if (d) this.max = n; else for (; this.max + f < b[b.length - 1];)b.pop(); 0 === b.length && G(l) && !this.options.tickPositions && b.push((n + l) / 2) } }; c.prototype.alignToOthers = function () {
                                var a = this, b = [this], g = a.options,
                                d = "yAxis" === this.coll && this.chart.options.chart.alignThresholds, n = [], f; a.thresholdAlignment = void 0; if ((!1 !== this.chart.options.chart.alignTicks && g.alignTicks || d) && !1 !== g.startOnTick && !1 !== g.endOnTick && !a.logarithmic) { var h = function (a) { var b = a.options; return [a.horiz ? b.left : b.top, b.width, b.height, b.pane].join() }, c = h(this); this.chart[this.coll].forEach(function (g) { var d = g.series; d.length && d.some(function (a) { return a.visible }) && g !== a && h(g) === c && (f = !0, b.push(g)) }) } if (f && d) {
                                    b.forEach(function (b) {
                                        b = b.getThresholdAlignment(a);
                                        l(b) && n.push(b)
                                    }); var k = 1 < n.length ? n.reduce(function (a, b) { return a + b }, 0) / n.length : void 0; b.forEach(function (a) { a.thresholdAlignment = k })
                                } return f
                            }; c.prototype.getThresholdAlignment = function (a) { (!l(this.dataMin) || this !== a && this.series.some(function (a) { return a.isDirty || a.isDirtyData })) && this.getSeriesExtremes(); if (l(this.threshold)) return a = h((this.threshold - (this.dataMin || 0)) / ((this.dataMax || 0) - (this.dataMin || 0)), 0, 1), this.options.reversed && (a = 1 - a), a }; c.prototype.getTickAmount = function () {
                                var a = this.options,
                                b = a.tickPixelInterval, g = a.tickAmount; !G(a.tickInterval) && !g && this.len < b && !this.isRadial && !this.logarithmic && a.startOnTick && a.endOnTick && (g = 2); !g && this.alignToOthers() && (g = Math.ceil(this.len / b) + 1); 4 > g && (this.finalTickAmt = g, g = 5); this.tickAmount = g
                            }; c.prototype.adjustTickAmount = function () {
                                var a = this, b = a.finalTickAmt, g = a.max, d = a.min, n = a.options, f = a.tickPositions, h = a.tickAmount, c = a.thresholdAlignment, k = f && f.length, u = A(a.threshold, a.softThreshold ? 0 : null); var z = a.tickInterval; if (l(c)) {
                                    var E = .5 > c ? Math.ceil(c *
                                        (h - 1)) : Math.floor(c * (h - 1)); n.reversed && (E = h - 1 - E)
                                } if (a.hasData() && l(d) && l(g)) {
                                    c = function () { a.transA *= (k - 1) / (h - 1); a.min = n.startOnTick ? f[0] : Math.min(d, f[0]); a.max = n.endOnTick ? f[f.length - 1] : Math.max(g, f[f.length - 1]) }; if (l(E) && l(a.threshold)) { for (; f[E] !== u || f.length !== h || f[0] > d || f[f.length - 1] < g;) { f.length = 0; for (f.push(a.threshold); f.length < h;)void 0 === f[E] || f[E] > a.threshold ? f.unshift(p(f[0] - z)) : f.push(p(f[f.length - 1] + z)); if (z > 8 * a.tickInterval) break; z *= 2 } c() } else if (k < h) {
                                        for (; f.length < h;)f.length % 2 || d ===
                                            u ? f.push(p(f[f.length - 1] + z)) : f.unshift(p(f[0] - z)); c()
                                    } if (G(b)) { for (z = u = f.length; z--;)(3 === b && 1 === z % 2 || 2 >= b && 0 < z && z < u - 1) && f.splice(z, 1); a.finalTickAmt = void 0 }
                                }
                            }; c.prototype.setScale = function () {
                                var b = !1, g = !1; this.series.forEach(function (a) { b = b || a.isDirtyData || a.isDirty; g = g || a.xAxis && a.xAxis.isDirty || !1 }); this.setAxisSize(); var d = this.len !== (this.old && this.old.len); d || b || g || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ?
                                    (this.stacking && (this.stacking.resetStacks(), this.stacking.buildStacks()), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = d || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks(); b && this.panningState && (this.panningState.isDirty = !0); a(this, "afterSetScale")
                            }; c.prototype.setExtremes = function (b, g, d, n, l) {
                                var f = this, h = f.chart; d = A(d, !0); f.series.forEach(function (a) { delete a.kdTree }); l = r(l, {
                                    min: b,
                                    max: g
                                }); a(f, "setExtremes", l, function () { f.userMin = b; f.userMax = g; f.eventArgs = l; d && h.redraw(n) })
                            }; c.prototype.zoom = function (b, g) {
                                var d = this, n = this.dataMin, l = this.dataMax, f = this.options, h = Math.min(n, A(f.min, n)), c = Math.max(l, A(f.max, l)); b = { newMin: b, newMax: g }; a(this, "zoom", b, function (a) {
                                    var b = a.newMin, g = a.newMax; if (b !== d.min || g !== d.max) d.allowZoomOutside || (G(n) && (b < h && (b = h), b > c && (b = c)), G(l) && (g < h && (g = h), g > c && (g = c))), d.displayBtn = "undefined" !== typeof b || "undefined" !== typeof g, d.setExtremes(b, g, !1, void 0,
                                        { trigger: "zoom" }); a.zoomed = !0
                                }); return b.zoomed
                            }; c.prototype.setAxisSize = function () {
                                var a = this.chart, b = this.options, g = b.offsets || [0, 0, 0, 0], d = this.horiz, n = this.width = Math.round(H(A(b.width, a.plotWidth - g[3] + g[1]), a.plotWidth)), l = this.height = Math.round(H(A(b.height, a.plotHeight - g[0] + g[2]), a.plotHeight)), f = this.top = Math.round(H(A(b.top, a.plotTop + g[0]), a.plotHeight, a.plotTop)); b = this.left = Math.round(H(A(b.left, a.plotLeft + g[3]), a.plotWidth, a.plotLeft)); this.bottom = a.chartHeight - l - f; this.right = a.chartWidth -
                                    n - b; this.len = Math.max(d ? n : l, 0); this.pos = d ? b : f
                            }; c.prototype.getExtremes = function () { var a = this.logarithmic; return { min: a ? p(a.lin2log(this.min)) : this.min, max: a ? p(a.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax } }; c.prototype.getThreshold = function (a) { var b = this.logarithmic, g = b ? b.lin2log(this.min) : this.min; b = b ? b.lin2log(this.max) : this.max; null === a || -Infinity === a ? a = g : Infinity === a ? a = b : g > a ? a = g : b < a && (a = b); return this.translate(a, 0, 1, 0, 1) }; c.prototype.autoLabelAlign =
                                function (b) { var g = (A(b, 0) - 90 * this.side + 720) % 360; b = { align: "center" }; a(this, "autoLabelAlign", b, function (a) { 15 < g && 165 > g ? a.align = "right" : 195 < g && 345 > g && (a.align = "left") }); return b.align }; c.prototype.tickSize = function (b) { var g = this.options, d = A(g["tick" === b ? "tickWidth" : "minorTickWidth"], "tick" === b && this.isXAxis && !this.categories ? 1 : 0), n = g["tick" === b ? "tickLength" : "minorTickLength"]; if (d && n) { "inside" === g[b + "Position"] && (n = -n); var l = [n, d] } b = { tickSize: l }; a(this, "afterTickSize", b); return b.tickSize }; c.prototype.labelMetrics =
                                    function () { var a = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label) }; c.prototype.unsquish = function () {
                                        var a = this.options.labels, b = this.horiz, g = this.tickInterval, n = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / g), f = a.rotation, h = this.labelMetrics(), c = Math.max(this.max - this.min, 0), k = function (a) {
                                            var b = a / (n || 1); b = 1 < b ? Math.ceil(b) : 1; b * g > c && Infinity !== a && Infinity !== n && c && (b = Math.ceil(c / g)); return p(b *
                                                g)
                                        }, u = g, z = Number.MAX_VALUE; if (b) { if (!a.staggerLines) if (l(f)) var E = [f]; else n < a.autoRotationLimit && (E = a.autoRotation); if (E) for (var r = b = void 0, e = 0, H = E; e < H.length; e++) { var m = H[e]; if (m === f || m && -90 <= m && 90 >= m) if (b = k(Math.abs(h.h / Math.sin(d * m))), r = b + Math.abs(m / 360), r < z) { z = r; var J = m; u = b } } } else u = k(h.h); this.autoRotation = E; this.labelRotation = A(J, l(f) ? f : 0); return a.step ? g : u
                                    }; c.prototype.getSlotWidth = function (a) {
                                        var b = this.chart, g = this.horiz, d = this.options.labels, n = Math.max(this.tickPositions.length - (this.categories ?
                                            0 : 1), 1), f = b.margin[3]; if (a && l(a.slotWidth)) return a.slotWidth; if (g && 2 > d.step) return d.rotation ? 0 : (this.staggerLines || 1) * this.len / n; if (!g) { a = d.style.width; if (void 0 !== a) return parseInt(String(a), 10); if (f) return f - b.spacing[3] } return .33 * b.chartWidth
                                    }; c.prototype.renderUnsquish = function () {
                                        var a = this.chart, b = a.renderer, g = this.tickPositions, d = this.ticks, n = this.options.labels, l = n.style, f = this.horiz, h = this.getSlotWidth(), c = Math.max(1, Math.round(h - 2 * n.padding)), k = {}, A = this.labelMetrics(), z = l.textOverflow,
                                        E = 0; u(n.rotation) || (k.rotation = n.rotation || 0); g.forEach(function (a) { a = d[a]; a.movedLabel && a.replaceMovedLabel(); a && a.label && a.label.textPxLength > E && (E = a.label.textPxLength) }); this.maxLabelLength = E; if (this.autoRotation) E > c && E > A.h ? k.rotation = this.labelRotation : this.labelRotation = 0; else if (h) {
                                            var p = c; if (!z) {
                                                var r = "clip"; for (c = g.length; !f && c--;) {
                                                    var e = g[c]; if (e = d[e].label) e.styles && "ellipsis" === e.styles.textOverflow ? e.css({ textOverflow: "clip" }) : e.textPxLength > h && e.css({ width: h + "px" }), e.getBBox().height >
                                                        this.len / g.length - (A.h - A.f) && (e.specificTextOverflow = "ellipsis")
                                                }
                                            }
                                        } k.rotation && (p = E > .5 * a.chartHeight ? .33 * a.chartHeight : E, z || (r = "ellipsis")); if (this.labelAlign = n.align || this.autoLabelAlign(this.labelRotation)) k.align = this.labelAlign; g.forEach(function (a) {
                                            var b = (a = d[a]) && a.label, g = l.width, n = {}; b && (b.attr(k), a.shortenLabel ? a.shortenLabel() : p && !g && "nowrap" !== l.whiteSpace && (p < b.textPxLength || "SPAN" === b.element.tagName) ? (n.width = p + "px", z || (n.textOverflow = b.specificTextOverflow || r), b.css(n)) : b.styles && b.styles.width &&
                                                !n.width && !g && b.css({ width: null }), delete b.specificTextOverflow, a.rotation = k.rotation)
                                        }, this); this.tickRotCorr = b.rotCorr(A.b, this.labelRotation || 0, 0 !== this.side)
                                    }; c.prototype.hasData = function () { return this.series.some(function (a) { return a.hasData() }) || this.options.showEmpty && G(this.min) && G(this.max) }; c.prototype.addTitle = function (a) {
                                        var b = this.chart.renderer, g = this.horiz, d = this.opposite, l = this.options.title, f = this.chart.styledMode, h; this.axisTitle || ((h = l.textAlign) || (h = (g ? {
                                            low: "left", middle: "center",
                                            high: "right"
                                        } : { low: d ? "right" : "left", middle: "center", high: d ? "left" : "right" })[l.align]), this.axisTitle = b.text(l.text || "", 0, 0, l.useHTML).attr({ zIndex: 7, rotation: l.rotation, align: h }).addClass("highcharts-axis-title"), f || this.axisTitle.css(n(l.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0); f || l.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }); this.axisTitle[a ? "show" : "hide"](a)
                                    }; c.prototype.generateTick = function (a) {
                                        var b = this.ticks; b[a] ? b[a].addLabel() : b[a] = new F(this,
                                            a)
                                    }; c.prototype.getOffset = function () {
                                        var b = this, d = this, n = d.chart, l = d.horiz, f = d.options, h = d.side, c = d.ticks, k = d.tickPositions, u = d.coll, z = d.axisParent, E = n.renderer, p = n.inverted && !d.isZAxis ? [1, 0, 3, 2][h] : h, r = d.hasData(), e = f.title, H = f.labels, m = n.axisOffset; n = n.clipOffset; var J = [-1, 1, 1, -1][h], v = f.className, B, M = 0, D = 0, t = 0; d.showAxis = B = r || f.showEmpty; d.staggerLines = d.horiz && H.staggerLines || void 0; if (!d.axisGroup) {
                                            var S = function (a, g, d) {
                                                return E.g(a).attr({ zIndex: d }).addClass("highcharts-".concat(u.toLowerCase()).concat(g,
                                                    " ") + (b.isRadial ? "highcharts-radial-axis".concat(g, " ") : "") + (v || "")).add(z)
                                            }; d.gridGroup = S("grid", "-grid", f.gridZIndex); d.axisGroup = S("axis", "", f.zIndex); d.labelGroup = S("axis-labels", "-labels", H.zIndex)
                                        } r || d.isLinked ? (k.forEach(function (a) { d.generateTick(a) }), d.renderUnsquish(), d.reserveSpaceDefault = 0 === h || 2 === h || { 1: "left", 3: "right" }[h] === d.labelAlign, A(H.reserveSpace, "center" === d.labelAlign ? !0 : null, d.reserveSpaceDefault) && k.forEach(function (a) { t = Math.max(c[a].getLabelSize(), t) }), d.staggerLines &&
                                            (t *= d.staggerLines), d.labelOffset = t * (d.opposite ? -1 : 1)) : g(c, function (a, b) { a.destroy(); delete c[b] }); if (e && e.text && !1 !== e.enabled && (d.addTitle(B), B && !1 !== e.reserveSpace)) { d.titleOffset = M = d.axisTitle.getBBox()[l ? "height" : "width"]; var y = e.offset; D = G(y) ? 0 : A(e.margin, l ? 5 : 10) } d.renderLine(); d.offset = J * A(f.offset, m[h] ? m[h] + (f.margin || 0) : 0); d.tickRotCorr = d.tickRotCorr || { x: 0, y: 0 }; e = 0 === h ? -d.labelMetrics().h : 2 === h ? d.tickRotCorr.y : 0; r = Math.abs(t) + D; t && (r = r - e + J * (l ? A(H.y, d.tickRotCorr.y + 8 * J) : H.x)); d.axisTitleMargin =
                                                A(y, r); d.getMaxLabelDimensions && (d.maxLabelDimensions = d.getMaxLabelDimensions(c, k)); "colorAxis" !== u && (l = this.tickSize("tick"), m[h] = Math.max(m[h], (d.axisTitleMargin || 0) + M + J * d.offset, r, k && k.length && l ? l[0] + J * d.offset : 0), f = !d.axisLine || f.offset ? 0 : 2 * Math.floor(d.axisLine.strokeWidth() / 2), n[p] = Math.max(n[p], f)); a(this, "afterGetOffset")
                                    }; c.prototype.getLinePath = function (a) {
                                        var b = this.chart, g = this.opposite, d = this.offset, n = this.horiz, l = this.left + (g ? this.width : 0) + d; d = b.chartHeight - this.bottom - (g ? this.height :
                                            0) + d; g && (a *= -1); return b.renderer.crispLine([["M", n ? this.left : l, n ? d : this.top], ["L", n ? b.chartWidth - this.right : l, n ? d : b.chartHeight - this.bottom]], a)
                                    }; c.prototype.renderLine = function () { this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 })) }; c.prototype.getTitlePosition = function () {
                                        var b = this.horiz, g = this.left, d = this.top, n = this.len,
                                        l = this.options.title, f = b ? g : d, h = this.opposite, c = this.offset, k = l.x, A = l.y, u = this.axisTitle, z = this.chart.renderer.fontMetrics(l.style.fontSize, u); u = u ? Math.max(u.getBBox(!1, 0).height - z.h - 1, 0) : 0; n = { low: f + (b ? 0 : n), middle: f + n / 2, high: f + (b ? n : 0) }[l.align]; g = (b ? d + this.height : g) + (b ? 1 : -1) * (h ? -1 : 1) * (this.axisTitleMargin || 0) + [-u, u, z.f, -u][this.side]; b = { x: b ? n + k : g + (h ? this.width : 0) + c + k, y: b ? g + A - (h ? this.height : 0) + c : n + A }; a(this, "afterGetTitlePosition", { titlePosition: b }); return b
                                    }; c.prototype.renderMinorTick = function (a,
                                        b) { var g = this.minorTicks; g[a] || (g[a] = new F(this, a, "minor")); b && g[a].isNew && g[a].render(null, !0); g[a].render(null, !1, 1) }; c.prototype.renderTick = function (a, b, g) { var d = this.ticks; if (!this.isLinked || a >= this.min && a <= this.max || this.grid && this.grid.isColumn) d[a] || (d[a] = new F(this, a)), g && d[a].isNew && d[a].render(b, !0, -1), d[a].render(b) }; c.prototype.render = function () {
                                            var b = this, d = b.chart, n = b.logarithmic, f = b.options, h = b.isLinked, c = b.tickPositions, k = b.axisTitle, A = b.ticks, u = b.minorTicks, z = b.alternateBands, E = f.stackLabels,
                                            p = f.alternateGridColor, r = b.tickmarkOffset, e = b.axisLine, H = b.showAxis, m = t(d.renderer.globalAnimation), J, v; b.labelEdge.length = 0; b.overlap = !1;[A, u, z].forEach(function (a) { g(a, function (a) { a.isActive = !1 }) }); if (b.hasData() || h) {
                                                var G = b.chart.hasRendered && b.old && l(b.old.min); b.minorTickInterval && !b.categories && b.getMinorTickPositions().forEach(function (a) { b.renderMinorTick(a, G) }); c.length && (c.forEach(function (a, g) { b.renderTick(a, g, G) }), r && (0 === b.min || b.single) && (A[-1] || (A[-1] = new F(b, -1, null, !0)), A[-1].render(-1)));
                                                p && c.forEach(function (a, g) { v = "undefined" !== typeof c[g + 1] ? c[g + 1] + r : b.max - r; 0 === g % 2 && a < b.max && v <= b.max + (d.polar ? -r : r) && (z[a] || (z[a] = new w.PlotLineOrBand(b)), J = a + r, z[a].options = { from: n ? n.lin2log(J) : J, to: n ? n.lin2log(v) : v, color: p, className: "highcharts-alternate-grid" }, z[a].render(), z[a].isActive = !0) }); b._addedPlotLB || (b._addedPlotLB = !0, (f.plotLines || []).concat(f.plotBands || []).forEach(function (a) { b.addPlotBandOrLine(a) }))
                                            } [A, u, z].forEach(function (a) {
                                                var b = [], n = m.duration; g(a, function (a, g) {
                                                    a.isActive ||
                                                    (a.render(g, !1, 0), a.isActive = !1, b.push(g))
                                                }); S(function () { for (var g = b.length; g--;)a[b[g]] && !a[b[g]].isActive && (a[b[g]].destroy(), delete a[b[g]]) }, a !== z && d.hasRendered && n ? n : 0)
                                            }); e && (e[e.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(e.strokeWidth()) }), e.isPlaced = !0, e[H ? "show" : "hide"](H)); k && H && (f = b.getTitlePosition(), k[k.isNew ? "attr" : "animate"](f), k.isNew = !1); E && E.enabled && b.stacking && b.stacking.renderStackTotals(); b.old = { len: b.len, max: b.max, min: b.min, transA: b.transA, userMax: b.userMax, userMin: b.userMin };
                                            b.isDirty = !1; a(this, "afterRender")
                                        }; c.prototype.redraw = function () { this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) { a.render() })); this.series.forEach(function (a) { a.isDirty = !0 }) }; c.prototype.getKeepProps = function () { return this.keepProps || c.keepProps }; c.prototype.destroy = function (b) {
                                            var d = this, n = d.plotLinesAndBands, l = this.eventOptions; a(this, "destroy", { keepEvents: b }); b || J(d);[d.ticks, d.minorTicks, d.alternateBands].forEach(function (a) { D(a) }); if (n) for (b = n.length; b--;)n[b].destroy();
                                            "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) { d[a] && (d[a] = d[a].destroy()) }); for (var f in d.plotLinesAndBandsGroups) d.plotLinesAndBandsGroups[f] = d.plotLinesAndBandsGroups[f].destroy(); g(d, function (a, b) { -1 === d.getKeepProps().indexOf(b) && delete d[b] }); this.eventOptions = l
                                        }; c.prototype.drawCrosshair = function (b, g) {
                                            var d = this.crosshair, n = A(d && d.snap, !0), l = this.chart, f, h = this.cross; a(this, "drawCrosshair", { e: b, point: g }); b || (b = this.cross && this.cross.e); if (d &&
                                                !1 !== (G(g) || !n)) {
                                                    n ? G(g) && (f = A("colorAxis" !== this.coll ? g.crosshairPos : null, this.isXAxis ? g.plotX : this.len - g.plotY)) : f = b && (this.horiz ? b.chartX - this.pos : this.len - b.chartY + this.pos); if (G(f)) { var c = { value: g && (this.isXAxis ? g.x : A(g.stackY, g.y)), translatedValue: f }; l.polar && r(c, { isCrosshair: !0, chartX: b && b.chartX, chartY: b && b.chartY, point: g }); c = this.getPlotLinePath(c) || null } if (!G(c)) { this.hideCrosshair(); return } n = this.categories && !this.isRadial; h || (this.cross = h = l.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" +
                                                        (n ? "category " : "thin ") + (d.className || "")).attr({ zIndex: A(d.zIndex, 2) }).add(), l.styledMode || (h.attr({ stroke: d.color || (n ? x.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": A(d.width, 1) }).css({ "pointer-events": "none" }), d.dashStyle && h.attr({ dashstyle: d.dashStyle }))); h.show().attr({ d: c }); n && !d.width && h.attr({ "stroke-width": this.transA }); this.cross.e = b
                                            } else this.hideCrosshair(); a(this, "afterDrawCrosshair", { e: b, point: g })
                                        }; c.prototype.hideCrosshair = function () {
                                            this.cross && this.cross.hide();
                                            a(this, "afterHideCrosshair")
                                        }; c.prototype.hasVerticalPanning = function () { var a = this.chart.options.chart.panning; return !!(a && a.enabled && /y/.test(a.type)) }; c.prototype.validatePositiveValue = function (a) { return l(a) && 0 < a }; c.prototype.update = function (a, b) { var g = this.chart; a = n(this.userOptions, a); this.destroy(!0); this.init(g, a); g.isDirtyBox = !0; A(b, !0) && g.redraw() }; c.prototype.remove = function (a) {
                                            for (var b = this.chart, g = this.coll, d = this.series, n = d.length; n--;)d[n] && d[n].remove(!1); v(b.axes, this); v(b[g], this);
                                            b[g].forEach(function (a, b) { a.options.index = a.userOptions.index = b }); this.destroy(); b.isDirtyBox = !0; A(a, !0) && b.redraw()
                                        }; c.prototype.setTitle = function (a, b) { this.update({ title: a }, b) }; c.prototype.setCategories = function (a, b) { this.update({ categories: a }, b) }; c.defaultOptions = e.defaultXAxisOptions; c.keepProps = "extKey hcEvents names series userMax userMin".split(" "); return c
            }(); ""; return c
        }); I(e, "Core/Axis/DateTimeAxis.js", [e["Core/Utilities.js"]], function (c) {
            var e = c.addEvent, x = c.getMagnitude, C = c.normalizeTickInterval,
            q = c.timeUnits, w; (function (c) {
                function y() { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) } function t(d) { "datetime" !== d.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new k(this)) } var m = []; c.compose = function (d) { -1 === m.indexOf(d) && (m.push(d), d.keepProps.push("dateTime"), d.prototype.getTimeTicks = y, e(d, "init", t)); return d }; var k = function () {
                    function d(b) { this.axis = b } d.prototype.normalizeTimeTickInterval = function (b, d) {
                        var f = d || [["millisecond", [1, 2, 5, 10, 20, 25, 50,
                            100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; d = f[f.length - 1]; var c = q[d[0]], k = d[1], e; for (e = 0; e < f.length && !(d = f[e], c = q[d[0]], k = d[1], f[e + 1] && b <= (c * k[k.length - 1] + q[f[e + 1][0]]) / 2); e++); c === q.year && b < 5 * c && (k = [1, 2, 5]); b = C(b / c, k, "year" === d[0] ? Math.max(x(b / c), 1) : 1); return { unitRange: c, count: b, unitName: d[0] }
                    }; d.prototype.getXDateFormat = function (b, d) {
                        var f = this.axis, c = f.chart.time; return f.closestPointRange ?
                            c.getDateFormat(f.closestPointRange, b, f.options.startOfWeek, d) || c.resolveDTLFormat(d.year).main : c.resolveDTLFormat(d.day).main
                    }; return d
                }(); c.Additions = k
            })(w || (w = {})); return w
        }); I(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Utilities.js"]], function (c) {
            var e = c.addEvent, x = c.normalizeTickInterval, C = c.pick, q; (function (c) {
                function q(c) { var d = this.logarithmic; "logarithmic" !== c.userOptions.type ? this.logarithmic = void 0 : d || (this.logarithmic = new m(this)) } function y() {
                    var c = this.logarithmic; c && (this.lin2val = function (d) { return c.lin2log(d) },
                        this.val2lin = function (d) { return c.log2lin(d) })
                } var t = []; c.compose = function (c) { -1 === t.indexOf(c) && (t.push(c), c.keepProps.push("logarithmic"), e(c, "init", q), e(c, "afterInit", y)); return c }; var m = function () {
                    function c(d) { this.axis = d } c.prototype.getLogTickPositions = function (d, b, f, h) {
                        var c = this.axis, k = c.len, e = c.options, m = []; h || (this.minorAutoInterval = void 0); if (.5 <= d) d = Math.round(d), m = c.getLinearTickPositions(d, b, f); else if (.08 <= d) {
                            var B = Math.floor(b), r, a = e = void 0; for (k = .3 < d ? [1, 2, 4] : .15 < d ? [1, 2, 4, 6, 8] : [1,
                                2, 3, 4, 5, 6, 7, 8, 9]; B < f + 1 && !a; B++) { var z = k.length; for (r = 0; r < z && !a; r++) { var l = this.log2lin(this.lin2log(B) * k[r]); l > b && (!h || e <= f) && "undefined" !== typeof e && m.push(e); e > f && (a = !0); e = l } }
                        } else b = this.lin2log(b), f = this.lin2log(f), d = h ? c.getMinorTickInterval() : e.tickInterval, d = C("auto" === d ? null : d, this.minorAutoInterval, e.tickPixelInterval / (h ? 5 : 1) * (f - b) / ((h ? k / c.tickPositions.length : k) || 1)), d = x(d), m = c.getLinearTickPositions(d, b, f).map(this.log2lin), h || (this.minorAutoInterval = d / 5); h || (c.tickInterval = d); return m
                    };
                    c.prototype.lin2log = function (d) { return Math.pow(10, d) }; c.prototype.log2lin = function (d) { return Math.log(d) / Math.LN10 }; return c
                }(); c.Additions = m
            })(q || (q = {})); return q
        }); I(e, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [e["Core/Utilities.js"]], function (c) {
            var e = c.erase, x = c.extend, C = c.isNumber, q; (function (c) {
                var q = [], y; c.compose = function (c, k) { y || (y = c); -1 === q.indexOf(k) && (q.push(k), x(k.prototype, t.prototype)); return k }; var t = function () {
                    function c() { } c.prototype.getPlotBandPath = function (c, d, b) {
                        void 0 ===
                        b && (b = this.options); var f = this.getPlotLinePath({ value: d, force: !0, acrossPanes: b.acrossPanes }), h = [], k = this.horiz; d = !C(this.min) || !C(this.max) || c < this.min && d < this.min || c > this.max && d > this.max; c = this.getPlotLinePath({ value: c, force: !0, acrossPanes: b.acrossPanes }); b = 1; if (c && f) {
                            if (d) { var e = c.toString() === f.toString(); b = 0 } for (d = 0; d < c.length; d += 2) {
                                var m = c[d], v = c[d + 1], B = f[d], r = f[d + 1]; "M" !== m[0] && "L" !== m[0] || "M" !== v[0] && "L" !== v[0] || "M" !== B[0] && "L" !== B[0] || "M" !== r[0] && "L" !== r[0] || (k && B[1] === m[1] ? (B[1] += b, r[1] +=
                                    b) : k || B[2] !== m[2] || (B[2] += b, r[2] += b), h.push(["M", m[1], m[2]], ["L", v[1], v[2]], ["L", r[1], r[2]], ["L", B[1], B[2]], ["Z"])); h.isFlat = e
                            }
                        } return h
                    }; c.prototype.addPlotBand = function (c) { return this.addPlotBandOrLine(c, "plotBands") }; c.prototype.addPlotLine = function (c) { return this.addPlotBandOrLine(c, "plotLines") }; c.prototype.addPlotBandOrLine = function (c, d) {
                        var b = this, f = this.userOptions, h = new y(this, c); this.visible && (h = h.render()); if (h) {
                            this._addedPlotLB || (this._addedPlotLB = !0, (f.plotLines || []).concat(f.plotBands ||
                                []).forEach(function (d) { b.addPlotBandOrLine(d) })); if (d) { var k = f[d] || []; k.push(c); f[d] = k } this.plotLinesAndBands.push(h)
                        } return h
                    }; c.prototype.removePlotBandOrLine = function (c) { var d = this.plotLinesAndBands, b = this.options, f = this.userOptions; if (d) { for (var h = d.length; h--;)d[h].id === c && d[h].destroy();[b.plotLines || [], f.plotLines || [], b.plotBands || [], f.plotBands || []].forEach(function (b) { for (h = b.length; h--;)(b[h] || {}).id === c && e(b, b[h]) }) } }; c.prototype.removePlotBand = function (c) { this.removePlotBandOrLine(c) };
                    c.prototype.removePlotLine = function (c) { this.removePlotBandOrLine(c) }; return c
                }()
            })(q || (q = {})); return q
        }); I(e, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [e["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"], e["Core/Utilities.js"]], function (c, e) {
            var x = e.arrayMax, C = e.arrayMin, q = e.defined, w = e.destroyObjectProperties, F = e.erase, y = e.fireEvent, t = e.merge, m = e.objectEach, k = e.pick; e = function () {
                function d(b, d) { this.axis = b; d && (this.options = d, this.id = d.id) } d.compose = function (b) { return c.compose(d, b) }; d.prototype.render =
                    function () {
                        y(this, "render"); var b = this, d = b.axis, c = d.horiz, p = d.logarithmic, e = b.options, D = e.color, v = k(e.zIndex, 0), B = e.events, r = {}, a = d.chart.renderer, z = e.label, l = b.label, u = e.to, n = e.from, E = e.value, g = b.svgElem, A = [], H = q(n) && q(u); A = q(E); var J = !g, M = { "class": "highcharts-plot-" + (H ? "band " : "line ") + (e.className || "") }, S = H ? "bands" : "lines"; p && (n = p.log2lin(n), u = p.log2lin(u), E = p.log2lin(E)); d.chart.styledMode || (A ? (M.stroke = D || "#999999", M["stroke-width"] = k(e.width, 1), e.dashStyle && (M.dashstyle = e.dashStyle)) : H && (M.fill =
                            D || "#e6ebf5", e.borderWidth && (M.stroke = e.borderColor, M["stroke-width"] = e.borderWidth))); r.zIndex = v; S += "-" + v; (p = d.plotLinesAndBandsGroups[S]) || (d.plotLinesAndBandsGroups[S] = p = a.g("plot-" + S).attr(r).add()); J && (b.svgElem = g = a.path().attr(M).add(p)); if (A) A = d.getPlotLinePath({ value: E, lineWidth: g.strokeWidth(), acrossPanes: e.acrossPanes }); else if (H) A = d.getPlotBandPath(n, u, e); else return; !b.eventsAdded && B && (m(B, function (a, d) { g.on(d, function (a) { B[d].apply(b, [a]) }) }), b.eventsAdded = !0); (J || !g.d) && A && A.length ?
                                g.attr({ d: A }) : g && (A ? (g.show(), g.animate({ d: A })) : g.d && (g.hide(), l && (b.label = l = l.destroy()))); z && (q(z.text) || q(z.formatter)) && A && A.length && 0 < d.width && 0 < d.height && !A.isFlat ? (z = t({ align: c && H && "center", x: c ? !H && 4 : 10, verticalAlign: !c && H && "middle", y: c ? H ? 16 : 10 : H ? 6 : -4, rotation: c && !H && 90 }, z), this.renderLabel(z, A, H, v)) : l && l.hide(); return b
                    }; d.prototype.renderLabel = function (b, d, c, k) {
                        var f = this.axis, h = f.chart.renderer, e = this.label; e || (this.label = e = h.text(this.getLabelText(b), 0, 0, b.useHTML).attr({
                            align: b.textAlign ||
                                b.align, rotation: b.rotation, "class": "highcharts-plot-" + (c ? "band" : "line") + "-label " + (b.className || ""), zIndex: k
                        }).add(), f.chart.styledMode || e.css(t({ textOverflow: "ellipsis" }, b.style))); k = d.xBounds || [d[0][1], d[1][1], c ? d[2][1] : d[0][1]]; d = d.yBounds || [d[0][2], d[1][2], c ? d[2][2] : d[0][2]]; c = C(k); h = C(d); e.align(b, !1, { x: c, y: h, width: x(k) - c, height: x(d) - h }); e.alignValue && "left" !== e.alignValue || (b = b.clip ? f.width : f.chart.chartWidth, e.css({
                            width: (90 === e.rotation ? f.height - (e.alignAttr.y - f.top) : b - (e.alignAttr.x - f.left)) +
                                "px"
                        })); e.show(!0)
                    }; d.prototype.getLabelText = function (b) { return q(b.formatter) ? b.formatter.call(this) : b.text }; d.prototype.destroy = function () { F(this.axis.plotLinesAndBands, this); delete this.axis; w(this) }; return d
            }(); ""; ""; return e
        }); I(e, "Core/Tooltip.js", [e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C, q) {
            var w = c.format, F = e.doc, y = x.distribute, t = q.clamp, m = q.css, k = q.discardElement,
            d = q.extend, b = q.fireEvent, f = q.isArray, h = q.isNumber, p = q.isString, G = q.merge, D = q.pick, v = q.splat, B = q.syncTimeout; c = function () {
                function c(a, b) { this.allowShared = !0; this.container = void 0; this.crosshairs = []; this.distance = 0; this.isHidden = !0; this.isSticky = !1; this.now = {}; this.options = {}; this.outside = !1; this.chart = a; this.init(a, b) } c.prototype.applyFilter = function () {
                    var a = this.chart; a.renderer.definition({
                        tagName: "filter", attributes: { id: "drop-shadow-" + a.index, opacity: .5 }, children: [{
                            tagName: "feGaussianBlur", attributes: {
                                "in": "SourceAlpha",
                                stdDeviation: 1
                            }
                        }, { tagName: "feOffset", attributes: { dx: 1, dy: 1 } }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", attributes: { type: "linear", slope: .3 } }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", attributes: { "in": "SourceGraphic" } }] }]
                    })
                }; c.prototype.bodyFormatter = function (a) {
                    return a.map(function (a) {
                        var b = a.series.tooltipOptions; return (b[(a.point.formatPrefix || "point") + "Formatter"] || a.point.tooltipFormatter).call(a.point, b[(a.point.formatPrefix || "point") + "Format"] ||
                            "")
                    })
                }; c.prototype.cleanSplit = function (a) { this.chart.series.forEach(function (b) { var d = b && b.tt; d && (!d.isActive || a ? b.tt = d.destroy() : d.isActive = !1) }) }; c.prototype.defaultFormatter = function (a) { var b = this.points || v(this); var d = [a.tooltipFooterHeaderFormatter(b[0])]; d = d.concat(a.bodyFormatter(b)); d.push(a.tooltipFooterHeaderFormatter(b[0], !0)); return d }; c.prototype.destroy = function () {
                    this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(!0), this.tt = this.tt.destroy()); this.renderer &&
                        (this.renderer = this.renderer.destroy(), k(this.container)); q.clearTimeout(this.hideTimer); q.clearTimeout(this.tooltipTimeout)
                }; c.prototype.getAnchor = function (a, b) {
                    var d = this.chart, f = d.pointer, n = d.inverted, c = d.plotTop; d = d.plotLeft; a = v(a); a[0].series && a[0].series.yAxis && !a[0].series.yAxis.options.reversedStacks && (a = a.slice().reverse()); if (this.followPointer && b) "undefined" === typeof b.chartX && (b = f.normalize(b)), a = [b.chartX - d, b.chartY - c]; else if (a[0].tooltipPos) a = a[0].tooltipPos; else {
                        var g = 0, h = 0; a.forEach(function (a) {
                            if (a =
                                a.pos(!0)) g += a[0], h += a[1]
                        }); g /= a.length; h /= a.length; this.shared && 1 < a.length && b && (n ? g = b.chartX : h = b.chartY); a = [g - d, h - c]
                    } return a.map(Math.round)
                }; c.prototype.getClassName = function (a, b, d) { var l = a.series, n = l.options; return [this.options.className, "highcharts-label", d && "highcharts-tooltip-header", b ? "highcharts-tooltip-box" : "highcharts-tooltip", !d && "highcharts-color-" + D(a.colorIndex, l.colorIndex), n && n.className].filter(p).join(" ") }; c.prototype.getLabel = function () {
                    var a = this, b = this.chart.styledMode, d = this.options,
                    f = this.split && this.allowShared, n = d.style.pointerEvents || (this.shouldStickOnContact() ? "auto" : "none"), c, g = this.chart.renderer; if (a.label) { var h = !a.label.hasClass("highcharts-label"); (f && !h || !f && h) && a.destroy() } if (!this.label) {
                        if (this.outside) {
                            h = this.chart.options.chart.style; var k = C.getRendererType(); this.container = c = e.doc.createElement("div"); c.className = "highcharts-tooltip-container"; m(c, { position: "absolute", top: "1px", pointerEvents: n, zIndex: Math.max(this.options.style.zIndex || 0, (h && h.zIndex || 0) + 3) });
                            e.doc.body.appendChild(c); this.renderer = g = new k(c, 0, 0, h, void 0, void 0, g.styledMode)
                        } f ? this.label = g.g("tooltip") : (this.label = g.label("", 0, 0, d.shape, void 0, void 0, d.useHTML, void 0, "tooltip").attr({ padding: d.padding, r: d.borderRadius }), b || this.label.attr({ fill: d.backgroundColor, "stroke-width": d.borderWidth }).css(d.style).css({ pointerEvents: n }).shadow(d.shadow)); b && d.shadow && (this.applyFilter(), this.label.attr({ filter: "url(#drop-shadow-" + this.chart.index + ")" })); if (a.outside && !a.split) {
                            var p = this.label,
                            r = p.xSetter, v = p.ySetter; p.xSetter = function (b) { r.call(p, a.distance); c.style.left = b + "px" }; p.ySetter = function (b) { v.call(p, a.distance); c.style.top = b + "px" }
                        } this.label.attr({ zIndex: 8 }).add()
                    } return this.label
                }; c.prototype.getPosition = function (a, b, d) {
                    var l = this.chart, n = this.distance, f = {}, g = l.inverted && d.h || 0, c = this.outside, h = c ? F.documentElement.clientWidth - 2 * n : l.chartWidth, k = c ? Math.max(F.body.scrollHeight, F.documentElement.scrollHeight, F.body.offsetHeight, F.documentElement.offsetHeight, F.documentElement.clientHeight) :
                        l.chartHeight, e = l.pointer.getChartPosition(), z = function (g) { var f = "x" === g; return [g, f ? h : k, f ? a : b].concat(c ? [f ? a * e.scaleX : b * e.scaleY, f ? e.left - n + (d.plotX + l.plotLeft) * e.scaleX : e.top - n + (d.plotY + l.plotTop) * e.scaleY, 0, f ? h : k] : [f ? a : b, f ? d.plotX + l.plotLeft : d.plotY + l.plotTop, f ? l.plotLeft : l.plotTop, f ? l.plotLeft + l.plotWidth : l.plotTop + l.plotHeight]) }, p = z("y"), r = z("x"), m; z = !!d.negative; !l.polar && l.hoverSeries && l.hoverSeries.yAxis && l.hoverSeries.yAxis.reversed && (z = !z); var v = !this.followPointer && D(d.ttBelow, !l.inverted ===
                            z), B = function (a, b, d, l, h, k, A) { var u = c ? "y" === a ? n * e.scaleY : n * e.scaleX : n, z = (d - l) / 2, E = l < h - n, p = h + n + l < b, r = h - u - d + z; h = h + u - z; if (v && p) f[a] = h; else if (!v && E) f[a] = r; else if (E) f[a] = Math.min(A - l, 0 > r - g ? r : r - g); else if (p) f[a] = Math.max(k, h + g + d > b ? h : h + g); else return !1 }, G = function (a, b, g, d, l) { var c; l < n || l > b - n ? c = !1 : f[a] = l < g / 2 ? 1 : l > b - d / 2 ? b - d - 2 : l - g / 2; return c }, t = function (a) { var b = p; p = r; r = b; m = a }, P = function () { !1 !== B.apply(0, p) ? !1 !== G.apply(0, r) || m || (t(!0), P()) : m ? f.x = f.y = 0 : (t(!0), P()) }; (l.inverted || 1 < this.len) && t(); P(); return f
                };
                c.prototype.hide = function (a) { var b = this; q.clearTimeout(this.hideTimer); a = D(a, this.options.hideDelay); this.isHidden || (this.hideTimer = B(function () { b.getLabel().fadeOut(a ? void 0 : a); b.isHidden = !0 }, a)) }; c.prototype.init = function (a, b) { this.chart = a; this.options = b; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden = !0; this.split = b.split && !a.inverted && !a.polar; this.shared = b.shared || this.split; this.outside = D(b.outside, !(!a.scrollablePixelsX && !a.scrollablePixelsY)) }; c.prototype.shouldStickOnContact = function (a) {
                    return !(this.followPointer ||
                        !this.options.stickOnContact || a && !this.chart.pointer.inClass(a.target, "highcharts-tooltip"))
                }; c.prototype.move = function (a, b, l, f) {
                    var n = this, c = n.now, g = !1 !== n.options.animation && !n.isHidden && (1 < Math.abs(a - c.x) || 1 < Math.abs(b - c.y)), h = n.followPointer || 1 < n.len; d(c, { x: g ? (2 * c.x + a) / 3 : a, y: g ? (c.y + b) / 2 : b, anchorX: h ? void 0 : g ? (2 * c.anchorX + l) / 3 : l, anchorY: h ? void 0 : g ? (c.anchorY + f) / 2 : f }); n.getLabel().attr(c); n.drawTracker(); g && (q.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
                        n && n.move(a,
                            b, l, f)
                    }, 32))
                }; c.prototype.refresh = function (a, d) {
                    var l = this.chart, c = this.options, n = l.pointer, h = v(a), g = h[0], k = [], e = c.formatter || this.defaultFormatter, p = this.shared, z = l.styledMode, r = {}; if (c.enabled && g.series) {
                        q.clearTimeout(this.hideTimer); this.allowShared = !(!f(a) && a.series && a.series.noSharedTooltip); this.followPointer = !this.split && g.series.tooltipOptions.followPointer; a = this.getAnchor(a, d); var m = a[0], B = a[1]; p && this.allowShared ? (n.applyInactiveState(h), h.forEach(function (a) { a.setState("hover"); k.push(a.getLabelConfig()) }),
                            r = { x: g.category, y: g.y }, r.points = k) : r = g.getLabelConfig(); this.len = k.length; e = e.call(r, this); p = g.series; this.distance = D(p.tooltipOptions.distance, 16); if (!1 === e) this.hide(); else {
                                if (this.split && this.allowShared) this.renderSplit(e, h); else {
                                    var G = m, t = B; d && n.isDirectTouch && (G = d.chartX - l.plotLeft, t = d.chartY - l.plotTop); if (l.polar || !1 === p.options.clip || h.some(function (a) { return n.isDirectTouch || a.series.shouldShowTooltip(G, t) })) d = this.getLabel(), c.style.width && !z || d.css({ width: l.spacingBox.width + "px" }), d.attr({
                                        text: e &&
                                            e.join ? e.join("") : e
                                    }), d.addClass(this.getClassName(g), !0), z || d.attr({ stroke: c.borderColor || g.color || p.color || "#666666" }), this.updatePosition({ plotX: m, plotY: B, negative: g.negative, ttBelow: g.ttBelow, h: a[2] || 0 }); else { this.hide(); return }
                                } this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(); this.isHidden = !1
                            } b(this, "refresh")
                    }
                }; c.prototype.renderSplit = function (a, b) {
                    function l(a, b, g, d, n) {
                        void 0 === n && (n = !0); g ? (b = T ? 0 : ba, a = t(a - d / 2, C.left, C.right - d - (f.outside ? Q : 0))) : (b -= W, a = n ? a - d - w : a + w, a = t(a, n ? a : C.left,
                            C.right)); return { x: a, y: b }
                    } var f = this, n = f.chart, c = f.chart, g = c.chartWidth, h = c.chartHeight, k = c.plotHeight, e = c.plotLeft, z = c.plotTop, r = c.pointer, m = c.scrollablePixelsY; m = void 0 === m ? 0 : m; var v = c.scrollablePixelsX, B = c.scrollingContainer; B = void 0 === B ? { scrollLeft: 0, scrollTop: 0 } : B; var G = B.scrollLeft; B = B.scrollTop; var q = c.styledMode, w = f.distance, x = f.options, P = f.options.positioner, C = f.outside && "number" !== typeof v ? F.documentElement.getBoundingClientRect() : { left: G, right: G + g, top: B, bottom: B + h }, U = f.getLabel(), K = this.renderer ||
                        n.renderer, T = !(!n.xAxis[0] || !n.xAxis[0].opposite); n = r.getChartPosition(); var Q = n.left; n = n.top; var W = z + B, O = 0, ba = k - m; p(a) && (a = [!1, a]); a = a.slice(0, b.length + 1).reduce(function (a, g, d) {
                            if (!1 !== g && "" !== g) {
                                d = b[d - 1] || { isHeader: !0, plotX: b[0].plotX, plotY: k, series: {} }; var n = d.isHeader, c = n ? f : d.series; g = g.toString(); var h = c.tt, A = d.isHeader; var u = d.series; h || (h = { padding: x.padding, r: x.borderRadius }, q || (h.fill = x.backgroundColor, h["stroke-width"] = x.borderWidth), h = K.label("", 0, 0, x[A ? "headerShape" : "shape"], void 0, void 0,
                                    x.useHTML).addClass(f.getClassName(d, !0, A)).attr(h).add(U)); h.isActive = !0; h.attr({ text: g }); q || h.css(x.style).shadow(x.shadow).attr({ stroke: x.borderColor || d.color || u.color || "#333333" }); c = c.tt = h; A = c.getBBox(); g = A.width + c.strokeWidth(); n && (O = A.height, ba += O, T && (W -= O)); u = d.plotX; u = void 0 === u ? 0 : u; h = d.plotY; h = void 0 === h ? 0 : h; var p = d.series; if (d.isHeader) { u = e + u; var E = z + k / 2 } else { var r = p.xAxis, m = p.yAxis; u = r.pos + t(u, -w, r.len + w); p.shouldShowTooltip(0, m.pos - z + h, { ignoreX: !0 }) && (E = m.pos + h) } u = t(u, C.left - w, C.right +
                                        w); "number" === typeof E ? (A = A.height + 1, h = P ? P.call(f, g, A, d) : l(u, E, n, g), a.push({ align: P ? 0 : void 0, anchorX: u, anchorY: E, boxWidth: g, point: d, rank: D(h.rank, n ? 1 : 0), size: A, target: h.y, tt: c, x: h.x })) : c.isActive = !1
                            } return a
                        }, []); !P && a.some(function (a) { var b = (f.outside ? Q : 0) + a.anchorX; return b < C.left && b + a.boxWidth < C.right ? !0 : b < Q - C.left + a.boxWidth && C.right - b > b }) && (a = a.map(function (a) { var b = l(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1); return d(a, { target: b.y, x: b.x }) })); f.cleanSplit(); y(a, ba); var Z = Q, I = Q; a.forEach(function (a) {
                            var b =
                                a.x, g = a.boxWidth; a = a.isHeader; a || (f.outside && Q + b < Z && (Z = Q + b), !a && f.outside && Z + g > I && (I = Q + b))
                        }); a.forEach(function (a) { var b = a.x, g = a.anchorX, d = a.pos, n = a.point.isHeader; d = { visibility: "undefined" === typeof d ? "hidden" : "inherit", x: b, y: (d || 0) + W, anchorX: g, anchorY: a.anchorY }; if (f.outside && b < g) { var l = Q - Z; 0 < l && (n || (d.x = b + l, d.anchorX = g + l), n && (d.x = (I - Z) / 2, d.anchorX = g + l)) } a.tt.attr(d) }); a = f.container; m = f.renderer; f.outside && a && m && (c = U.getBBox(), m.setSize(c.width + c.x, c.height + c.y, !1), a.style.left = Z + "px", a.style.top =
                            n + "px")
                }; c.prototype.drawTracker = function () {
                    if (this.shouldStickOnContact()) {
                        var a = this.chart, b = this.label, d = this.shared ? a.hoverPoints : a.hoverPoint; if (b && d) {
                            var f = { x: 0, y: 0, width: 0, height: 0 }; d = this.getAnchor(d); var n = b.getBBox(); d[0] += a.plotLeft - b.translateX; d[1] += a.plotTop - b.translateY; f.x = Math.min(0, d[0]); f.y = Math.min(0, d[1]); f.width = 0 > d[0] ? Math.max(Math.abs(d[0]), n.width - d[0]) : Math.max(Math.abs(d[0]), n.width); f.height = 0 > d[1] ? Math.max(Math.abs(d[1]), n.height - Math.abs(d[1])) : Math.max(Math.abs(d[1]),
                                n.height); this.tracker ? this.tracker.attr(f) : (this.tracker = b.renderer.rect(f).addClass("highcharts-tracker").add(b), a.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }))
                        }
                    } else this.tracker && this.tracker.destroy()
                }; c.prototype.styledModeFormat = function (a) { return a.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"') }; c.prototype.tooltipFooterHeaderFormatter =
                    function (a, d) { var l = a.series, f = l.tooltipOptions, n = l.xAxis, c = n && n.dateTime; n = { isFooter: d, labelConfig: a }; var g = f.xDateFormat, k = f[d ? "footerFormat" : "headerFormat"]; b(this, "headerFormatter", n, function (b) { c && !g && h(a.key) && (g = c.getXDateFormat(a.key, f.dateTimeLabelFormats)); c && g && (a.point && a.point.tooltipDateKeys || ["key"]).forEach(function (a) { k = k.replace("{point." + a + "}", "{point." + a + ":" + g + "}") }); l.chart.styledMode && (k = this.styledModeFormat(k)); b.text = w(k, { point: a, series: l }, this.chart) }); return n.text }; c.prototype.update =
                        function (a) { this.destroy(); G(!0, this.chart.options.tooltip.userOptions, a); this.init(this.chart, G(!0, this.options, a)) }; c.prototype.updatePosition = function (a) {
                            var b = this.chart, d = this.distance, f = this.options, n = b.pointer, c = this.getLabel(), g = n.getChartPosition(); n = g.left; var h = g.top, k = g.scaleX; g = g.scaleY; var e = (f.positioner || this.getPosition).call(this, c.width, c.height, a), p = (a.plotX || 0) + b.plotLeft; a = (a.plotY || 0) + b.plotTop; if (this.outside) {
                                f.positioner && (e.x += n - d, e.y += h - d); d = f.borderWidth + 2 * d; this.renderer.setSize(c.width +
                                    d, c.height + d, !1); if (1 !== k || 1 !== g) m(this.container, { transform: "scale(".concat(k, ", ").concat(g, ")") }), p *= k, a *= g; p += n - e.x; a += h - e.y
                            } this.move(Math.round(e.x), Math.round(e.y || 0), p, a)
                        }; return c
            }(); ""; return c
        }); I(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/FormatUtilities.js"], e["Core/Utilities.js"]], function (c, e, x, C, q) {
            var w = e.animObject, F = x.defaultOptions, y = C.format, t = q.addEvent, m = q.defined, k = q.erase, d = q.extend, b = q.fireEvent,
            f = q.getNestedProperty, h = q.isArray, p = q.isFunction, G = q.isNumber, D = q.isObject, v = q.merge, B = q.objectEach, r = q.pick, a = q.syncTimeout, z = q.removeEvent, l = q.uniqueKey; e = function () {
                function e() { this.category = void 0; this.formatPrefix = "point"; this.id = void 0; this.isNull = !1; this.percentage = this.options = this.name = void 0; this.selected = !1; this.total = this.shapeArgs = this.series = void 0; this.visible = !0; this.x = void 0 } e.prototype.animateBeforeDestroy = function () {
                    var a = this, b = { x: a.startXPos, opacity: 0 }, g = a.getGraphicalProps();
                    g.singular.forEach(function (d) { a[d] = a[d].animate("dataLabel" === d ? { x: a[d].startXPos, y: a[d].startYPos, opacity: 0 } : b) }); g.plural.forEach(function (b) { a[b].forEach(function (b) { b.element && b.animate(d({ x: a.startXPos }, b.startYPos ? { x: b.startXPos, y: b.startYPos } : {})) }) })
                }; e.prototype.applyOptions = function (a, b) {
                    var g = this.series, n = g.options.pointValKey || g.pointValKey; a = e.prototype.optionsToObject.call(this, a); d(this, a); this.options = this.options ? d(this.options, a) : a; a.group && delete this.group; a.dataLabels && delete this.dataLabels;
                    n && (this.y = e.prototype.getNestedProperty.call(this, n)); this.formatPrefix = (this.isNull = this.isValid && !this.isValid()) ? "null" : "point"; this.selected && (this.state = "select"); "name" in this && "undefined" === typeof b && g.xAxis && g.xAxis.hasNames && (this.x = g.xAxis.nameToX(this)); "undefined" === typeof this.x && g ? this.x = "undefined" === typeof b ? g.autoIncrement() : b : G(a.x) && g.options.relativeXValue && (this.x = g.autoIncrement(a.x)); return this
                }; e.prototype.destroy = function () {
                    function b() {
                        if (d.graphic || d.graphics || d.dataLabel ||
                            d.dataLabels) z(d), d.destroyElements(); for (h in d) d[h] = null
                    } var d = this, g = d.series, f = g.chart; g = g.options.dataSorting; var l = f.hoverPoints, c = w(d.series.chart.renderer.globalAnimation), h; d.legendItem && f.legend.destroyItem(d); l && (d.setState(), k(l, d), l.length || (f.hoverPoints = null)); if (d === f.hoverPoint) d.onMouseOut(); g && g.enabled ? (this.animateBeforeDestroy(), a(b, c.duration)) : b(); f.pointCount--
                }; e.prototype.destroyElements = function (a) {
                    var b = this; a = b.getGraphicalProps(a); a.singular.forEach(function (a) {
                        b[a] =
                        b[a].destroy()
                    }); a.plural.forEach(function (a) { b[a].forEach(function (a) { a && a.element && a.destroy() }); delete b[a] })
                }; e.prototype.firePointEvent = function (a, d, g) { var n = this, f = this.series.options; (f.point.events[a] || n.options && n.options.events && n.options.events[a]) && n.importEvents(); "click" === a && f.allowPointSelect && (g = function (a) { n.select && n.select(null, a.ctrlKey || a.metaKey || a.shiftKey) }); b(n, a, d, g) }; e.prototype.getClassName = function () {
                    return "highcharts-point" + (this.selected ? " highcharts-point-select" :
                        "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                }; e.prototype.getGraphicalProps = function (a) {
                    var b = this, d = [], n = { singular: [], plural: [] }, f; a = a || { graphic: 1, dataLabel: 1 }; a.graphic && d.push("graphic", "shadowGroup"); a.dataLabel && d.push("dataLabel",
                        "dataLabelPath", "dataLabelUpper", "connector"); for (f = d.length; f--;) { var l = d[f]; b[l] && n.singular.push(l) } ["graphic", "dataLabel", "connector"].forEach(function (d) { var g = d + "s"; a[d] && b[g] && n.plural.push(g) }); return n
                }; e.prototype.getLabelConfig = function () { return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }; e.prototype.getNestedProperty = function (a) {
                    if (a) return 0 ===
                        a.indexOf("custom.") ? f(a, this.options) : this[a]
                }; e.prototype.getZone = function () { var a = this.series, b = a.zones; a = a.zoneAxis || "y"; var d, f = 0; for (d = b[f]; this[a] >= d.value;)d = b[++f]; this.nonZonedColor || (this.nonZonedColor = this.color); this.color = d && d.color && !this.options.color ? d.color : this.nonZonedColor; return d }; e.prototype.hasNewShapeType = function () { return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType }; e.prototype.init = function (a, d, g) {
                    this.series = a; this.applyOptions(d,
                        g); this.id = m(this.id) ? this.id : l(); this.resolveColor(); a.chart.pointCount++; b(this, "afterInit"); return this
                }; e.prototype.isValid = function () { return null !== this.x && G(this.y) }; e.prototype.optionsToObject = function (a) {
                    var b = this.series, d = b.options.keys, f = d || b.pointArrayMap || ["y"], n = f.length, l = {}, c = 0, k = 0; if (G(a) || null === a) l[f[0]] = a; else if (h(a)) for (!d && a.length > n && (b = typeof a[0], "string" === b ? l.name = a[0] : "number" === b && (l.x = a[0]), c++); k < n;)d && "undefined" === typeof a[c] || (0 < f[k].indexOf(".") ? e.prototype.setNestedProperty(l,
                        a[c], f[k]) : l[f[k]] = a[c]), c++, k++; else "object" === typeof a && (l = a, a.dataLabels && (b._hasPointLabels = !0), a.marker && (b._hasPointMarkers = !0)); return l
                }; e.prototype.pos = function (a, b) { void 0 === b && (b = this.plotY); var d = this.plotX, f = this.series, n = f.chart, l = f.xAxis; f = f.yAxis; var c = 0, h = 0; if (G(d) && G(b)) return a && (c = l ? l.pos : n.plotLeft, h = f ? f.pos : n.plotTop), n.inverted && l && f ? [f.len - b + h, l.len - d + c] : [d + c, b + h] }; e.prototype.resolveColor = function () {
                    var a = this.series, b = a.chart.styledMode; var d = a.chart.options.chart.colorCount;
                    delete this.nonZonedColor; if (a.options.colorByPoint) { if (!b) { d = a.options.colors || a.chart.options.colors; var f = d[a.colorCounter]; d = d.length } b = a.colorCounter; a.colorCounter++; a.colorCounter === d && (a.colorCounter = 0) } else b || (f = a.color), b = a.colorIndex; this.colorIndex = r(this.options.colorIndex, b); this.color = r(this.options.color, f)
                }; e.prototype.setNestedProperty = function (a, b, d) { d.split(".").reduce(function (a, d, g, f) { a[d] = f.length - 1 === g ? b : D(a[d], !0) ? a[d] : {}; return a[d] }, a); return a }; e.prototype.shouldDraw =
                    function () { return !this.isNull }; e.prototype.tooltipFormatter = function (a) { var b = this.series, d = b.tooltipOptions, f = r(d.valueDecimals, ""), l = d.valuePrefix || "", c = d.valueSuffix || ""; b.chart.styledMode && (a = b.chart.tooltip.styledModeFormat(a)); (b.pointArrayMap || ["y"]).forEach(function (b) { b = "{point." + b; if (l || c) a = a.replace(RegExp(b + "}", "g"), l + b + "}" + c); a = a.replace(RegExp(b + "}", "g"), b + ":,." + f + "f}") }); return y(a, { point: this, series: this.series }, b.chart) }; e.prototype.update = function (a, b, d, f) {
                        function g() {
                            l.applyOptions(a);
                            var g = n && l.hasMockGraphic; g = null === l.y ? !g : g; n && g && (l.graphic = n.destroy(), delete l.hasMockGraphic); D(a, !0) && (n && n.element && a && a.marker && "undefined" !== typeof a.marker.symbol && (l.graphic = n.destroy()), a && a.dataLabels && l.dataLabel && (l.dataLabel = l.dataLabel.destroy()), l.connector && (l.connector = l.connector.destroy())); e = l.index; c.updateParallelArrays(l, e); k.data[e] = D(k.data[e], !0) || D(a, !0) ? l.options : r(a, k.data[e]); c.isDirty = c.isDirtyData = !0; !c.fixedBox && c.hasCartesianSeries && (h.isDirtyBox = !0); "point" ===
                                k.legendType && (h.isDirtyLegend = !0); b && h.redraw(d)
                        } var l = this, c = l.series, n = l.graphic, h = c.chart, k = c.options, e; b = r(b, !0); !1 === f ? g() : l.firePointEvent("update", { options: a }, g)
                    }; e.prototype.remove = function (a, b) { this.series.removePoint(this.series.data.indexOf(this), a, b) }; e.prototype.select = function (a, b) {
                        var d = this, f = d.series, l = f.chart; this.selectedStaging = a = r(a, !d.selected); d.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
                            d.selected = d.options.selected = a; f.options.data[f.data.indexOf(d)] =
                                d.options; d.setState(a && "select"); b || l.getSelectedPoints().forEach(function (a) { var b = a.series; a.selected && a !== d && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options, a.setState(l.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect")) })
                        }); delete this.selectedStaging
                    }; e.prototype.onMouseOver = function (a) { var b = this.series.chart, d = b.pointer; a = a ? d.normalize(a) : d.getChartCoordinatesFromPoint(this, b.inverted); d.runPointActions(a, this) }; e.prototype.onMouseOut =
                        function () { var a = this.series.chart; this.firePointEvent("mouseOut"); this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) { a.setState() }); a.hoverPoints = a.hoverPoint = null }; e.prototype.importEvents = function () { if (!this.hasImportedEvents) { var a = this, b = v(a.series.options.point, a.options).events; a.events = b; B(b, function (b, d) { p(b) && t(a, d, b) }); this.hasImportedEvents = !0 } }; e.prototype.setState = function (a, f) {
                            var g = this.series, l = this.state, n = g.options.states[a || "normal"] || {}, h = F.plotOptions[g.type].marker &&
                                g.options.marker, k = h && !1 === h.enabled, e = h && h.states && h.states[a || "normal"] || {}, p = !1 === e.enabled, u = this.marker || {}, z = g.chart, m = h && g.markerAttribs, E = g.halo, v, B = g.stateMarkerGraphic; a = a || ""; if (!(a === this.state && !f || this.selected && "select" !== a || !1 === n.enabled || a && (p || k && !1 === e.enabled) || a && u.states && u.states[a] && !1 === u.states[a].enabled)) {
                                    this.state = a; m && (v = g.markerAttribs(this, a)); if (this.graphic && !this.hasMockGraphic) {
                                        l && this.graphic.removeClass("highcharts-point-" + l); a && this.graphic.addClass("highcharts-point-" +
                                            a); if (!z.styledMode) { l = g.pointAttribs(this, a); var D = r(z.options.chart.animation, n.animation); var t = l.opacity; g.options.inactiveOtherPoints && G(t) && ((this.dataLabels || []).forEach(function (a) { a && !a.hasClass("highcharts-data-label-hidden") && a.animate({ opacity: t }, D) }), this.connector && this.connector.animate({ opacity: t }, D)); this.graphic.animate(l, D) } v && this.graphic.animate(v, r(z.options.chart.animation, e.animation, h.animation)); B && B.hide()
                                    } else {
                                        if (a && e) {
                                            h = u.symbol || g.symbol; B && B.currentSymbol !== h && (B = B.destroy());
                                            if (v) if (B) B[f ? "animate" : "attr"]({ x: v.x, y: v.y }); else h && (g.stateMarkerGraphic = B = z.renderer.symbol(h, v.x, v.y, v.width, v.height).add(g.markerGroup), B.currentSymbol = h); !z.styledMode && B && "inactive" !== this.state && B.attr(g.pointAttribs(this, a))
                                        } B && (B[a && this.isInside ? "show" : "hide"](), B.element.point = this, B.addClass(this.getClassName(), !0))
                                    } n = n.halo; v = (B = this.graphic || B) && B.visibility || "inherit"; n && n.size && B && "hidden" !== v && !this.isCluster ? (E || (g.halo = E = z.renderer.path().add(B.parentGroup)), E.show()[f ? "animate" :
                                        "attr"]({ d: this.haloPath(n.size) }), E.attr({ "class": "highcharts-halo highcharts-color-" + r(this.colorIndex, g.colorIndex) + (this.className ? " " + this.className : ""), visibility: v, zIndex: -1 }), E.point = this, z.styledMode || E.attr(d({ fill: this.color || g.color, "fill-opacity": n.opacity }, c.filterUserAttributes(n.attributes || {})))) : E && E.point && E.point.haloPath && E.animate({ d: E.point.haloPath(0) }, null, E.hide); b(this, "afterSetState", { state: a })
                                }
                        }; e.prototype.haloPath = function (a) {
                            var b = this.pos(); return b ? this.series.chart.renderer.symbols.circle(Math.floor(b[0]) -
                                a, b[1] - a, 2 * a, 2 * a) : []
                        }; return e
            }(); ""; return e
        }); I(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Tooltip.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
            var q = c.parse, w = e.charts, F = e.noop, y = C.addEvent, t = C.attr, m = C.css, k = C.defined, d = C.extend, b = C.find, f = C.fireEvent, h = C.isNumber, p = C.isObject, G = C.objectEach, D = C.offset, v = C.pick, B = C.splat; c = function () {
                function c(a, b) {
                    this.lastValidTouch = {}; this.pinchDown = []; this.runChartClick = !1; this.eventsToUnbind = []; this.chart = a; this.hasDragged =
                        !1; this.options = b; this.init(a, b)
                } c.prototype.applyInactiveState = function (a) { var b = [], d; (a || []).forEach(function (a) { d = a.series; b.push(d); d.linkedParent && b.push(d.linkedParent); d.linkedSeries && (b = b.concat(d.linkedSeries)); d.navigatorSeries && b.push(d.navigatorSeries) }); this.chart.series.forEach(function (a) { -1 === b.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive") }) }; c.prototype.destroy = function () {
                    var a = this; this.eventsToUnbind.forEach(function (a) { return a() });
                    this.eventsToUnbind = []; e.chartCount || (c.unbindDocumentMouseUp && (c.unbindDocumentMouseUp = c.unbindDocumentMouseUp()), c.unbindDocumentTouchEnd && (c.unbindDocumentTouchEnd = c.unbindDocumentTouchEnd())); clearInterval(a.tooltipTimeout); G(a, function (b, d) { a[d] = void 0 })
                }; c.prototype.getSelectionMarkerAttrs = function (a, b) {
                    var d = this, c = { args: { chartX: a, chartY: b }, attrs: {}, shapeType: "rect" }; f(this, "getSelectionMarkerAttrs", c, function (c) {
                        var f = d.chart, g = d.mouseDownX; g = void 0 === g ? 0 : g; var l = d.mouseDownY; l = void 0 === l ?
                            0 : l; var n = d.zoomHor, h = d.zoomVert; c = c.attrs; c.x = f.plotLeft; c.y = f.plotTop; c.width = n ? 1 : f.plotWidth; c.height = h ? 1 : f.plotHeight; n && (f = a - g, c.width = Math.abs(f), c.x = (0 < f ? 0 : f) + g); h && (f = b - l, c.height = Math.abs(f), c.y = (0 < f ? 0 : f) + l)
                    }); return c
                }; c.prototype.drag = function (a) {
                    var b = this.chart, d = b.options.chart, c = b.plotLeft, f = b.plotTop, h = b.plotWidth, g = b.plotHeight, k = this.mouseDownX || 0, e = this.mouseDownY || 0, r = p(d.panning) ? d.panning && d.panning.enabled : d.panning, m = d.panKey && a[d.panKey + "Key"], v = a.chartX, B = a.chartY, G = this.selectionMarker;
                    G && G.touch || (v < c ? v = c : v > c + h && (v = c + h), B < f ? B = f : B > f + g && (B = f + g), this.hasDragged = Math.sqrt(Math.pow(k - v, 2) + Math.pow(e - B, 2)), 10 < this.hasDragged && (c = b.isInsidePlot(k - c, e - f, { visiblePlotOnly: !0 }), B = this.getSelectionMarkerAttrs(v, B), v = B.shapeType, B = B.attrs, !b.hasCartesianSeries && !b.mapView || !this.zoomX && !this.zoomY || !c || m || G || (this.selectionMarker = G = b.renderer[v](), G.attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), b.styledMode || G.attr({ fill: d.selectionMarkerFill || q("#335cad").setOpacity(.25).get() })),
                        G && G.attr(B), c && !G && r && b.pan(a, d.panning)))
                }; c.prototype.dragStart = function (a) { var b = this.chart; b.mouseIsDown = a.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = a.chartX; b.mouseDownY = this.mouseDownY = a.chartY }; c.prototype.getSelectionBox = function (a) { var b = { args: { marker: a }, result: {} }; f(this, "getSelectionBox", b, function (b) { b.result = { x: a.attr ? +a.attr("x") : a.x, y: a.attr ? +a.attr("y") : a.y, width: a.attr ? a.attr("width") : a.width, height: a.attr ? a.attr("height") : a.height } }); return b.result }; c.prototype.drop = function (a) {
                    var b =
                        this, c = this.chart, e = this.hasPinched; if (this.selectionMarker) {
                            var n = this.getSelectionBox(this.selectionMarker), p = n.x, g = n.y, A = n.width, r = n.height, v = { originalEvent: a, xAxis: [], yAxis: [], x: p, y: g, width: A, height: r }, B = !!c.mapView; if (this.hasDragged || e) c.axes.forEach(function (d) {
                                if (d.zoomEnabled && k(d.min) && (e || b[{ xAxis: "zoomX", yAxis: "zoomY" }[d.coll]]) && h(p) && h(g) && h(A) && h(r)) {
                                    var c = d.horiz, f = "touchend" === a.type ? d.minPixelPadding : 0, l = d.toValue((c ? p : g) + f); c = d.toValue((c ? p + A : g + r) - f); v[d.coll].push({
                                        axis: d, min: Math.min(l,
                                            c), max: Math.max(l, c)
                                    }); B = !0
                                }
                            }), B && f(c, "selection", v, function (a) { c.zoom(d(a, e ? { animation: !1 } : null)) }); h(c.index) && (this.selectionMarker = this.selectionMarker.destroy()); e && this.scaleGroups()
                        } c && h(c.index) && (m(c.container, { cursor: c._cursor }), c.cancelClick = 10 < this.hasDragged, c.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                }; c.prototype.findNearestKDPoint = function (a, b, d) {
                    var c; a.forEach(function (a) {
                        var f = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y"); a = a.searchPoint(d,
                            f); if ((f = p(a, !0) && a.series) && !(f = !p(c, !0))) { f = c.distX - a.distX; var g = c.dist - a.dist, l = (a.series.group && a.series.group.zIndex) - (c.series.group && c.series.group.zIndex); f = 0 < (0 !== f && b ? f : 0 !== g ? g : 0 !== l ? l : c.series.index > a.series.index ? -1 : 1) } f && (c = a)
                    }); return c
                }; c.prototype.getChartCoordinatesFromPoint = function (a, b) {
                    var d = a.series, c = d.xAxis; d = d.yAxis; var f = a.shapeArgs; if (c && d) {
                        var k = v(a.clientX, a.plotX), g = a.plotY || 0; a.isNode && f && h(f.x) && h(f.y) && (k = f.x, g = f.y); return b ? {
                            chartX: d.len + d.pos - g, chartY: c.len + c.pos -
                                k
                        } : { chartX: k + c.pos, chartY: g + d.pos }
                    } if (f && f.x && f.y) return { chartX: f.x, chartY: f.y }
                }; c.prototype.getChartPosition = function () { if (this.chartPosition) return this.chartPosition; var a = this.chart.container, b = D(a); this.chartPosition = { left: b.left, top: b.top, scaleX: 1, scaleY: 1 }; var d = a.offsetWidth; a = a.offsetHeight; 2 < d && 2 < a && (this.chartPosition.scaleX = b.width / d, this.chartPosition.scaleY = b.height / a); return this.chartPosition }; c.prototype.getCoordinates = function (a) {
                    var b = { xAxis: [], yAxis: [] }; this.chart.axes.forEach(function (d) {
                        b[d.isXAxis ?
                            "xAxis" : "yAxis"].push({ axis: d, value: d.toValue(a[d.horiz ? "chartX" : "chartY"]) })
                    }); return b
                }; c.prototype.getHoverData = function (a, d, c, h, n, k) {
                    var g = []; h = !(!h || !a); var l = function (a) { return a.visible && !(!n && a.directTouch) && v(a.options.enableMouseTracking, !0) }, e = { chartX: k ? k.chartX : void 0, chartY: k ? k.chartY : void 0, shared: n }; f(this, "beforeGetHoverData", e); var u = d && !d.stickyTracking ? [d] : c.filter(function (a) { return a.stickyTracking && (e.filter || l)(a) }); var z = h || !k ? a : this.findNearestKDPoint(u, n, k); d = z && z.series;
                    z && (n && !d.noSharedTooltip ? (u = c.filter(function (a) { return e.filter ? e.filter(a) : l(a) && !a.noSharedTooltip }), u.forEach(function (a) { var d = b(a.points, function (a) { return a.x === z.x && !a.isNull }); p(d) && (a.boosted && a.boost && (d = a.boost.getPoint(d)), g.push(d)) })) : g.push(z)); e = { hoverPoint: z }; f(this, "afterGetHoverData", e); return { hoverPoint: e.hoverPoint, hoverSeries: d, hoverPoints: g }
                }; c.prototype.getPointFromEvent = function (a) { a = a.target; for (var b; a && !b;)b = a.point, a = a.parentNode; return b }; c.prototype.onTrackerMouseOut =
                    function (a) { a = a.relatedTarget || a.toElement; var b = this.chart.hoverSeries; this.isDirectTouch = !1; if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut() }; c.prototype.inClass = function (a, b) { for (var d; a;) { if (d = t(a, "class")) { if (-1 !== d.indexOf(b)) return !0; if (-1 !== d.indexOf("highcharts-container")) return !1 } a = a.parentElement } }; c.prototype.init = function (a, b) {
                        this.options = b; this.chart = a; this.runChartClick =
                            !(!b.chart.events || !b.chart.events.click); this.pinchDown = []; this.lastValidTouch = {}; x && (a.tooltip = new x(a, b.tooltip)); this.setDOMEvents()
                    }; c.prototype.normalize = function (a, b) { var c = a.touches, f = c ? c.length ? c.item(0) : v(c.changedTouches, a.changedTouches)[0] : a; b || (b = this.getChartPosition()); c = f.pageX - b.left; f = f.pageY - b.top; c /= b.scaleX; f /= b.scaleY; return d(a, { chartX: Math.round(c), chartY: Math.round(f) }) }; c.prototype.onContainerClick = function (a) {
                        var b = this.chart, c = b.hoverPoint; a = this.normalize(a); var h = b.plotLeft,
                            n = b.plotTop; b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (f(c.series, "click", d(a, { point: c })), b.hoverPoint && c.firePointEvent("click", a)) : (d(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - h, a.chartY - n, { visiblePlotOnly: !0 }) && f(b, "click", a)))
                    }; c.prototype.onContainerMouseDown = function (a) {
                        var b = 1 === ((a.buttons || a.button) & 1); a = this.normalize(a); if (e.isFirefox && 0 !== a.button) this.onContainerMouseMove(a); if ("undefined" === typeof a.button || b) this.zoomOption(a), b && a.preventDefault && a.preventDefault(),
                            this.dragStart(a)
                    }; c.prototype.onContainerMouseLeave = function (a) { var b = w[v(c.hoverChartIndex, -1)], d = this.chart.tooltip; a = this.normalize(a); b && (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = void 0); d && !d.isHidden && this.reset() }; c.prototype.onContainerMouseEnter = function (a) { delete this.chartPosition }; c.prototype.onContainerMouseMove = function (a) {
                        var b = this.chart, d = b.tooltip; a = this.normalize(a); this.setHoverChartIndex(); a.preventDefault || (a.returnValue = !1); ("mousedown" === b.mouseIsDown ||
                            this.touchSelect(a)) && this.drag(a); b.openMenu || !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop, { visiblePlotOnly: !0 }) || d && d.shouldStickOnContact(a) || (this.inClass(a.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(a))
                    }; c.prototype.onDocumentTouchEnd = function (a) { var b = w[v(c.hoverChartIndex, -1)]; b && b.pointer.drop(a) }; c.prototype.onContainerTouchMove = function (a) { if (this.touchSelect(a)) this.onContainerMouseMove(a); else this.touch(a) };
                c.prototype.onContainerTouchStart = function (a) { if (this.touchSelect(a)) this.onContainerMouseDown(a); else this.zoomOption(a), this.touch(a, !0) }; c.prototype.onDocumentMouseMove = function (a) { var b = this.chart, d = b.tooltip, c = this.chartPosition; a = this.normalize(a, c); !c || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop, { visiblePlotOnly: !0 }) || d && d.shouldStickOnContact(a) || this.inClass(a.target, "highcharts-tracker") || this.reset() }; c.prototype.onDocumentMouseUp = function (a) {
                    var b = w[v(c.hoverChartIndex, -1)];
                    b && b.pointer.drop(a)
                }; c.prototype.pinch = function (a) {
                    var b = this, c = b.chart, h = b.pinchDown, n = a.touches || [], k = n.length, g = b.lastValidTouch, e = b.hasZoom, p = {}, r = 1 === k && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || b.runChartClick), m = {}, B = b.chart.tooltip; B = 1 === k && v(B && B.options.followTouchMove, !0); var G = b.selectionMarker; 1 < k ? b.initiated = !0 : B && (b.initiated = !1); e && b.initiated && !r && !1 !== a.cancelable && a.preventDefault();[].map.call(n, function (a) { return b.normalize(a) }); "touchstart" === a.type ? ([].forEach.call(n,
                        function (a, b) { h[b] = { chartX: a.chartX, chartY: a.chartY } }), g.x = [h[0].chartX, h[1] && h[1].chartX], g.y = [h[0].chartY, h[1] && h[1].chartY], c.axes.forEach(function (a) { if (a.zoomEnabled) { var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, g = a.toPixels(Math.min(v(a.options.min, a.dataMin), a.dataMin)), f = a.toPixels(Math.max(v(a.options.max, a.dataMax), a.dataMax)), l = Math.max(g, f); b.min = Math.min(a.pos, Math.min(g, f) - d); b.max = Math.max(a.pos + a.len, l + d) } }), b.res = !0) : B ? this.runPointActions(b.normalize(a)) : h.length && (f(c, "touchpan",
                            { originalEvent: a }, function () { G || (b.selectionMarker = G = d({ destroy: F, touch: !0 }, c.plotBox)); b.pinchTranslate(h, n, p, G, m, g); b.hasPinched = e; b.scaleGroups(p, m) }), b.res && (b.res = !1, this.reset(!1, 0)))
                }; c.prototype.pinchTranslate = function (a, b, d, c, f, h) { this.zoomHor && this.pinchTranslateDirection(!0, a, b, d, c, f, h); this.zoomVert && this.pinchTranslateDirection(!1, a, b, d, c, f, h) }; c.prototype.pinchTranslateDirection = function (a, b, d, c, f, h, g, k) {
                    var l = this.chart, n = a ? "x" : "y", e = a ? "X" : "Y", p = "chart" + e, A = a ? "width" : "height", u = l["plot" +
                        (a ? "Left" : "Top")], r = l.inverted, m = l.bounds[a ? "h" : "v"], z = 1 === b.length, E = b[0][p], v = !z && b[1][p]; b = function () { "number" === typeof y && 20 < Math.abs(E - v) && (D = k || Math.abs(t - y) / Math.abs(E - v)); G = (u - t) / D + E; B = l["plot" + (a ? "Width" : "Height")] / D }; var B, G, D = k || 1, t = d[0][p], y = !z && d[1][p]; b(); d = G; if (d < m.min) { d = m.min; var q = !0 } else d + B > m.max && (d = m.max - B, q = !0); q ? (t -= .8 * (t - g[n][0]), "number" === typeof y && (y -= .8 * (y - g[n][1])), b()) : g[n] = [t, y]; r || (h[n] = G - u, h[A] = B); h = r ? 1 / D : D; f[A] = B; f[n] = d; c[r ? a ? "scaleY" : "scaleX" : "scale" + e] = D; c["translate" +
                            e] = h * u + (t - h * E)
                }; c.prototype.reset = function (a, b) {
                    var d = this.chart, c = d.hoverSeries, f = d.hoverPoint, h = d.hoverPoints, g = d.tooltip, k = g && g.shared ? h : f; a && k && B(k).forEach(function (b) { b.series.isCartesian && "undefined" === typeof b.plotX && (a = !1) }); if (a) g && k && B(k).length && (g.refresh(k), g.shared && h ? h.forEach(function (a) { a.setState(a.state, !0); a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a)) }) : f && (f.setState(f.state,
                        !0), d.axes.forEach(function (a) { a.crosshair && f.series[a.coll] === a && a.drawCrosshair(null, f) }))); else { if (f) f.onMouseOut(); h && h.forEach(function (a) { a.setState() }); if (c) c.onMouseOut(); g && g.hide(b); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); d.axes.forEach(function (a) { a.hideCrosshair() }); this.hoverX = d.hoverPoints = d.hoverPoint = null }
                }; c.prototype.runPointActions = function (a, d, f) {
                    var h = this.chart, l = h.tooltip && h.tooltip.options.enabled ? h.tooltip : void 0, k = l ? l.shared : !1, g = d || h.hoverPoint,
                    e = g && g.series || h.hoverSeries; d = this.getHoverData(g, e, h.series, (!a || "touchmove" !== a.type) && (!!d || e && e.directTouch && this.isDirectTouch), k, a); g = d.hoverPoint; e = d.hoverSeries; var p = d.hoverPoints; d = e && e.tooltipOptions.followPointer && !e.tooltipOptions.split; var r = k && e && !e.noSharedTooltip; if (g && (f || g !== h.hoverPoint || l && l.isHidden)) {
                        (h.hoverPoints || []).forEach(function (a) { -1 === p.indexOf(a) && a.setState() }); if (h.hoverSeries !== e) e.onMouseOver(); this.applyInactiveState(p); (p || []).forEach(function (a) { a.setState("hover") });
                        h.hoverPoint && h.hoverPoint.firePointEvent("mouseOut"); if (!g.series) return; h.hoverPoints = p; h.hoverPoint = g; g.firePointEvent("mouseOver", void 0, function () { l && g && l.refresh(r ? p : g, a) })
                    } else d && l && !l.isHidden && (f = l.getAnchor([{}], a), h.isInsidePlot(f[0], f[1], { visiblePlotOnly: !0 }) && l.updatePosition({ plotX: f[0], plotY: f[1] })); this.unDocMouseMove || (this.unDocMouseMove = y(h.container.ownerDocument, "mousemove", function (a) { var b = w[c.hoverChartIndex]; if (b) b.pointer.onDocumentMouseMove(a) }), this.eventsToUnbind.push(this.unDocMouseMove));
                    h.axes.forEach(function (d) { var g = v((d.crosshair || {}).snap, !0), c; g && ((c = h.hoverPoint) && c.series[d.coll] === d || (c = b(p, function (a) { return a.series && a.series[d.coll] === d }))); c || !g ? d.drawCrosshair(a, c) : d.hideCrosshair() })
                }; c.prototype.scaleGroups = function (a, b) {
                    var d = this.chart; d.series.forEach(function (c) { var f = a || c.getPlotBox(); c.group && (c.xAxis && c.xAxis.zoomEnabled || d.mapView) && (c.group.attr(f), c.markerGroup && (c.markerGroup.attr(f), c.markerGroup.clip(b ? d.clipRect : null)), c.dataLabelsGroup && c.dataLabelsGroup.attr(f)) });
                    d.clipRect.attr(b || d.clipBox)
                }; c.prototype.setDOMEvents = function () {
                    var a = this, b = this.chart.container, d = b.ownerDocument; b.onmousedown = this.onContainerMouseDown.bind(this); b.onmousemove = this.onContainerMouseMove.bind(this); b.onclick = this.onContainerClick.bind(this); this.eventsToUnbind.push(y(b, "mouseenter", this.onContainerMouseEnter.bind(this))); this.eventsToUnbind.push(y(b, "mouseleave", this.onContainerMouseLeave.bind(this))); c.unbindDocumentMouseUp || (c.unbindDocumentMouseUp = y(d, "mouseup", this.onDocumentMouseUp.bind(this)));
                    for (var f = this.chart.renderTo.parentElement; f && "BODY" !== f.tagName;)this.eventsToUnbind.push(y(f, "scroll", function () { delete a.chartPosition })), f = f.parentElement; e.hasTouch && (this.eventsToUnbind.push(y(b, "touchstart", this.onContainerTouchStart.bind(this), { passive: !1 })), this.eventsToUnbind.push(y(b, "touchmove", this.onContainerTouchMove.bind(this), { passive: !1 })), c.unbindDocumentTouchEnd || (c.unbindDocumentTouchEnd = y(d, "touchend", this.onDocumentTouchEnd.bind(this), { passive: !1 })))
                }; c.prototype.setHoverChartIndex =
                    function () { var a = this.chart, b = e.charts[v(c.hoverChartIndex, -1)]; if (b && b !== a) b.pointer.onContainerMouseLeave({ relatedTarget: a.container }); b && b.mouseIsDown || (c.hoverChartIndex = a.index) }; c.prototype.touch = function (a, b) {
                        var d = this.chart, c; this.setHoverChartIndex(); if (1 === a.touches.length) if (a = this.normalize(a), (c = d.isInsidePlot(a.chartX - d.plotLeft, a.chartY - d.plotTop, { visiblePlotOnly: !0 })) && !d.openMenu) {
                            b && this.runPointActions(a); if ("touchmove" === a.type) {
                                b = this.pinchDown; var f = b[0] ? 4 <= Math.sqrt(Math.pow(b[0].chartX -
                                    a.chartX, 2) + Math.pow(b[0].chartY - a.chartY, 2)) : !1
                            } v(f, !0) && this.pinch(a)
                        } else b && this.reset(); else 2 === a.touches.length && this.pinch(a)
                    }; c.prototype.touchSelect = function (a) { return !(!this.chart.options.chart.zooming.singleTouch || !a.touches || 1 !== a.touches.length) }; c.prototype.zoomOption = function (a) {
                        var b = this.chart, d = b.options.chart; b = b.inverted; var c = d.zooming.type || ""; /touch/.test(a.type) && (c = v(d.zooming.pinchType, c)); this.zoomX = a = /x/.test(c); this.zoomY = d = /y/.test(c); this.zoomHor = a && !b || d && b; this.zoomVert =
                            d && !b || a && b; this.hasZoom = a || d
                    }; return c
            }(); ""; return c
        }); I(e, "Core/MSPointer.js", [e["Core/Globals.js"], e["Core/Pointer.js"], e["Core/Utilities.js"]], function (c, e, x) {
            function C() { var d = []; d.item = function (b) { return this[b] }; b(p, function (b) { d.push({ pageX: b.pageX, pageY: b.pageY, target: b.target }) }); return d } function q(b, d, c, f) { var a = F[e.hoverChartIndex || NaN]; "touch" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_TOUCH || !a || (a = a.pointer, f(b), a[d]({ type: c, target: b.currentTarget, preventDefault: t, touches: C() })) }
            var w = this && this.__extends || function () { var b = function (d, c) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b, a) { for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]) }; return b(d, c) }; return function (d, c) { function f() { this.constructor = d } b(d, c); d.prototype = null === c ? Object.create(c) : (f.prototype = c.prototype, new f) } }(), F = c.charts, y = c.doc, t = c.noop, m = c.win, k = x.addEvent, d = x.css, b = x.objectEach, f = x.pick, h = x.removeEvent, p = {}, G = !!m.PointerEvent; return function (b) {
                function e() {
                    return null !==
                        b && b.apply(this, arguments) || this
                } w(e, b); e.isRequired = function () { return !(c.hasTouch || !m.PointerEvent && !m.MSPointerEvent) }; e.prototype.batchMSEvents = function (b) { b(this.chart.container, G ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); b(this.chart.container, G ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); b(y, G ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp) }; e.prototype.destroy = function () { this.batchMSEvents(h); b.prototype.destroy.call(this) }; e.prototype.init = function (c, f) {
                    b.prototype.init.call(this,
                        c, f); this.hasZoom && d(c.container, { "-ms-touch-action": "none", "touch-action": "none" })
                }; e.prototype.onContainerPointerDown = function (b) { q(b, "onContainerTouchStart", "touchstart", function (b) { p[b.pointerId] = { pageX: b.pageX, pageY: b.pageY, target: b.currentTarget } }) }; e.prototype.onContainerPointerMove = function (b) { q(b, "onContainerTouchMove", "touchmove", function (b) { p[b.pointerId] = { pageX: b.pageX, pageY: b.pageY }; p[b.pointerId].target || (p[b.pointerId].target = b.currentTarget) }) }; e.prototype.onDocumentPointerUp = function (b) {
                    q(b,
                        "onDocumentTouchEnd", "touchend", function (b) { delete p[b.pointerId] })
                }; e.prototype.setDOMEvents = function () { var d = this.chart.tooltip; b.prototype.setDOMEvents.call(this); (this.hasZoom || f(d && d.options.followTouchMove, !0)) && this.batchMSEvents(k) }; return e
            }(e)
        }); I(e, "Core/Legend/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Series/Point.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w) {
            var F = c.animObject,
            y = c.setAnimation, t = e.format, m = x.marginNames, k = q.distribute, d = w.addEvent, b = w.createElement, f = w.css, h = w.defined, p = w.discardElement, G = w.find, D = w.fireEvent, v = w.isNumber, B = w.merge, r = w.pick, a = w.relativeLength, z = w.stableSort, l = w.syncTimeout; c = function () {
                function c(a, b) {
                    this.allItems = []; this.contentGroup = this.box = void 0; this.display = !1; this.group = void 0; this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop =
                        this.itemMarginBottom = this.itemHeight = this.initialItemY = 0; this.options = void 0; this.padding = 0; this.pages = []; this.proximate = !1; this.scrollGroup = void 0; this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0; this.chart = a; this.init(a, b)
                } c.prototype.init = function (a, b) {
                    this.chart = a; this.setOptions(b); b.enabled && (this.render(), d(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = d(this.chart, "render", function () {
                        this.legend.proximatePositions();
                        this.legend.positionItems()
                    }) : this.unchartrender && this.unchartrender())
                }; c.prototype.setOptions = function (a) { var b = r(a.padding, 8); this.options = a; this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = B(this.itemStyle, a.itemHiddenStyle)); this.itemMarginTop = a.itemMarginTop || 0; this.itemMarginBottom = a.itemMarginBottom || 0; this.padding = b; this.initialItemY = b - 5; this.symbolWidth = r(a.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === a.layout && !this.chart.inverted; this.baseline = void 0 };
                c.prototype.update = function (a, b) { var d = this.chart; this.setOptions(B(!0, this.options, a)); this.destroy(); d.isDirtyLegend = d.isDirtyBox = !0; r(b, !0) && d.redraw(); D(this, "afterUpdate") }; c.prototype.colorizeItem = function (a, b) {
                    var d = a.legendItem || {}, c = d.group, f = d.label, h = d.line; d = d.symbol; if (c) c[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"); if (!this.chart.styledMode) {
                        var l = this.options; c = this.itemHiddenStyle.color; l = b ? l.itemStyle.color : c; var n = b ? a.color || c : c, k = a.options && a.options.marker, e = { fill: n };
                        f && f.css({ fill: l, color: l }); h && h.attr({ stroke: n }); d && (k && d.isMarker && (e = a.pointAttribs(), b || (e.stroke = e.fill = c)), d.attr(e))
                    } D(this, "afterColorizeItem", { item: a, visible: b })
                }; c.prototype.positionItems = function () { this.allItems.forEach(this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() }; c.prototype.positionItem = function (a) {
                    var b = this, d = a.legendItem || {}, c = d.group, f = d.x; f = void 0 === f ? 0 : f; d = d.y; d = void 0 === d ? 0 : d; var l = this.options, n = l.symbolPadding, k = !l.rtl; l = a.checkbox; c && c.element && (n =
                        { translateX: k ? f : this.legendWidth - f - 2 * n - 4, translateY: d }, c[h(c.translateY) ? "animate" : "attr"](n, void 0, function () { D(b, "afterPositionItem", { item: a }) })); l && (l.x = f, l.y = d)
                }; c.prototype.destroyItem = function (a) { for (var b = a.checkbox, d = a.legendItem || {}, c = 0, f = ["group", "label", "line", "symbol"]; c < f.length; c++) { var h = f[c]; d[h] && (d[h] = d[h].destroy()) } b && p(b); a.legendItem = void 0 }; c.prototype.destroy = function () {
                    for (var a = 0, b = this.getAllItems(); a < b.length; a++)this.destroyItem(b[a]); a = 0; for (b = "clipRect up down pager nav box title group".split(" "); a <
                        b.length; a++) { var d = b[a]; this[d] && (this[d] = this[d].destroy()) } this.display = null
                }; c.prototype.positionCheckboxes = function () { var a = this.group && this.group.alignAttr, b = this.clipHeight || this.legendHeight, d = this.titleHeight; if (a) { var c = a.translateY; this.allItems.forEach(function (g) { var h = g.checkbox; if (h) { var l = c + d + h.y + (this.scrollOffset || 0) + 3; f(h, { left: a.translateX + g.checkboxOffset + h.x - 20 + "px", top: l + "px", display: this.proximate || l > c - 6 && l < c + b - 6 ? "" : "none" }) } }, this) } }; c.prototype.renderTitle = function () {
                    var a =
                        this.options, b = this.padding, d = a.title, c = 0; d.text && (this.title || (this.title = this.chart.renderer.label(d.text, b - 3, b - 4, void 0, void 0, void 0, a.useHTML, void 0, "legend-title").attr({ zIndex: 1 }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({ width: this.maxLegendWidth + "px" }), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({ translateY: c })); this.titleHeight = c
                }; c.prototype.setText = function (a) {
                    var b = this.options; a.legendItem.label.attr({
                        text: b.labelFormat ?
                            t(b.labelFormat, a, this.chart) : b.labelFormatter.call(a)
                    })
                }; c.prototype.renderItem = function (a) {
                    var b = a.legendItem = a.legendItem || {}, d = this.chart, c = d.renderer, f = this.options, h = this.symbolWidth, l = f.symbolPadding || 0, n = this.itemStyle, k = this.itemHiddenStyle, e = "horizontal" === f.layout ? r(f.itemDistance, 20) : 0, p = !f.rtl, m = !a.series, u = !m && a.series.drawLegendSymbol ? a.series : a, v = u.options, z = this.createCheckboxForItem && v && v.showCheckbox, G = f.useHTML, t = a.options.className, D = b.label; v = h + l + e + (z ? 20 : 0); D || (b.group = c.g("legend-item").addClass("highcharts-" +
                        u.type + "-series highcharts-color-" + a.colorIndex + (t ? " " + t : "") + (m ? " highcharts-series-" + a.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), b.label = D = c.text("", p ? h + l : -l, this.baseline || 0, G), d.styledMode || D.css(B(a.visible ? n : k)), D.attr({ align: p ? "left" : "right", zIndex: 2 }).add(b.group), this.baseline || (this.fontMetrics = c.fontMetrics(d.styledMode ? 12 : n.fontSize, D), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, D.attr("y", this.baseline), this.symbolHeight = f.symbolHeight || this.fontMetrics.f, f.squareSymbol &&
                            (this.symbolWidth = r(f.symbolWidth, Math.max(this.symbolHeight, 16)), v = this.symbolWidth + l + e + (z ? 20 : 0), p && D.attr("x", this.symbolWidth + l))), u.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, D, G)); z && !a.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a); this.colorizeItem(a, a.visible); !d.styledMode && n.width || D.css({ width: (f.itemWidth || this.widthOption || d.spacingBox.width) - v + "px" }); this.setText(a); d = D.getBBox(); c = this.fontMetrics && this.fontMetrics.h || 0; a.itemWidth = a.checkboxOffset =
                                f.itemWidth || b.labelWidth || d.width + v; this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth); this.totalItemWidth += a.itemWidth; this.itemHeight = a.itemHeight = Math.round(b.labelHeight || (d.height > 1.5 * c ? d.height : c))
                }; c.prototype.layoutItem = function (a) {
                    var b = this.options, d = this.padding, c = "horizontal" === b.layout, f = a.itemHeight, h = this.itemMarginBottom, l = this.itemMarginTop, n = c ? r(b.itemDistance, 20) : 0, k = this.maxLegendWidth; b = b.alignColumns && this.totalItemWidth > k ? this.maxItemWidth : a.itemWidth; var e = a.legendItem ||
                        {}; c && this.itemX - d + b > k && (this.itemX = d, this.lastLineHeight && (this.itemY += l + this.lastLineHeight + h), this.lastLineHeight = 0); this.lastItemY = l + this.itemY + h; this.lastLineHeight = Math.max(f, this.lastLineHeight); e.x = this.itemX; e.y = this.itemY; c ? this.itemX += b : (this.itemY += l + f + h, this.lastLineHeight = f); this.offsetWidth = this.widthOption || Math.max((c ? this.itemX - d - (a.checkbox ? 0 : n) : b) + d, this.offsetWidth)
                }; c.prototype.getAllItems = function () {
                    var a = []; this.chart.series.forEach(function (b) {
                        var d = b && b.options; b && r(d.showInLegend,
                            h(d.linkedTo) ? !1 : void 0, !0) && (a = a.concat((b.legendItem || {}).labels || ("point" === d.legendType ? b.data : b)))
                    }); D(this, "afterGetAllItems", { allItems: a }); return a
                }; c.prototype.getAlignment = function () { var a = this.options; return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0) }; c.prototype.adjustMargins = function (a, b) {
                    var d = this.chart, c = this.options, f = this.getAlignment(); f && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g,
                        l) { g.test(f) && !h(a[l]) && (d[m[l]] = Math.max(d[m[l]], d.legend[(l + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][l] * c[l % 2 ? "x" : "y"] + r(c.margin, 12) + b[l] + (d.titleOffset[l] || 0))) })
                }; c.prototype.proximatePositions = function () {
                    var a = this.chart, b = [], d = "left" === this.options.align; this.allItems.forEach(function (g) {
                        var c; var f = d; if (g.yAxis) {
                            g.xAxis.options.reversed && (f = !f); g.points && (c = G(f ? g.points : g.points.slice(0).reverse(), function (a) { return v(a.plotY) })); f = this.itemMarginTop + g.legendItem.label.getBBox().height +
                                this.itemMarginBottom; var h = g.yAxis.top - a.plotTop; g.visible ? (c = c ? c.plotY : g.yAxis.height, c += h - .3 * f) : c = h + g.yAxis.height; b.push({ target: c, size: f, item: g })
                        }
                    }, this); for (var c, f = 0, h = k(b, a.plotHeight); f < h.length; f++) { var l = h[f]; c = l.item.legendItem || {}; v(l.pos) && (c.y = a.plotTop - a.spacing[0] + l.pos) }
                }; c.prototype.render = function () {
                    var b = this.chart, d = b.renderer, g = this.options, c = this.padding, f = this.getAllItems(), h = this.group, l = this.box; this.itemX = c; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0;
                    this.widthOption = a(g.width, b.spacingBox.width - c); var k = b.spacingBox.width - 2 * c - g.x; -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (k /= 2); this.maxLegendWidth = this.widthOption || k; h || (this.group = h = d.g("legend").addClass(g.className || "").attr({ zIndex: 7 }).add(), this.contentGroup = d.g().attr({ zIndex: 1 }).add(h), this.scrollGroup = d.g().add(this.contentGroup)); this.renderTitle(); z(f, function (a, b) { return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0) }); g.reversed && f.reverse();
                    this.allItems = f; this.display = k = !!f.length; this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; f.forEach(this.renderItem, this); f.forEach(this.layoutItem, this); f = (this.widthOption || this.offsetWidth) + c; var e = this.lastItemY + this.lastLineHeight + this.titleHeight; e = this.handleOverflow(e); e += c; l || (this.box = l = d.rect().addClass("highcharts-legend-box").attr({ r: g.borderRadius }).add(h)); b.styledMode || l.attr({
                        stroke: g.borderColor, "stroke-width": g.borderWidth || 0, fill: g.backgroundColor ||
                            "none"
                    }).shadow(g.shadow); if (0 < f && 0 < e) l[l.placed ? "animate" : "attr"](l.crisp.call({}, { x: 0, y: 0, width: f, height: e }, l.strokeWidth())); h[k ? "show" : "hide"](); b.styledMode && "none" === h.getStyle("display") && (f = e = 0); this.legendWidth = f; this.legendHeight = e; k && this.align(); this.proximate || this.positionItems(); D(this, "afterRender")
                }; c.prototype.align = function (a) {
                    void 0 === a && (a = this.chart.spacingBox); var b = this.chart, d = this.options, c = a.y; /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? c += b.titleOffset[0] :
                        /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b.titleOffset[2] && (c -= b.titleOffset[2]); c !== a.y && (a = B(a, { y: c })); b.hasRendered || (this.group.placed = !1); this.group.align(B(d, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : d.verticalAlign }), !0, a)
                }; c.prototype.handleOverflow = function (a) {
                    var b = this, d = this.chart, c = d.renderer, f = this.options, h = f.y, l = "top" === f.verticalAlign, k = this.padding, n = f.maxHeight, e = f.navigation, p = r(e.animation, !0), m = e.arrowSize || 12, u = this.pages, v = this.allItems,
                    z = function (a) { "number" === typeof a ? q.attr({ height: a }) : q && (b.clipRect = q.destroy(), b.contentGroup.clip()); b.contentGroup.div && (b.contentGroup.div.style.clip = a ? "rect(" + k + "px,9999px," + (k + a) + "px,0)" : "auto") }, B = function (a) { b[a] = c.circle(0, 0, 1.3 * m).translate(m / 2, m / 2).add(y); d.styledMode || b[a].attr("fill", "rgba(0,0,0,0.0001)"); return b[a] }, G, D, t; h = d.spacingBox.height + (l ? -h : h) - k; var y = this.nav, q = this.clipRect; "horizontal" !== f.layout || "middle" === f.verticalAlign || f.floating || (h /= 2); n && (h = Math.min(h, n)); u.length =
                        0; a && 0 < h && a > h && !1 !== e.enabled ? (this.clipHeight = G = Math.max(h - 20 - this.titleHeight - k, 0), this.currentPage = r(this.currentPage, 1), this.fullHeight = a, v.forEach(function (a, b) { t = a.legendItem || {}; a = t.y || 0; var d = Math.round(t.label.getBBox().height), g = u.length; if (!g || a - u[g - 1] > G && (D || a) !== u[g - 1]) u.push(D || a), g++; t.pageIx = g - 1; D && ((v[b - 1].legendItem || {}).pageIx = g - 1); b === v.length - 1 && a + d - u[g - 1] > G && d <= G && (u.push(a), t.pageIx = g); a !== D && (D = a) }), q || (q = b.clipRect = c.clipRect(0, k, 9999, 0), b.contentGroup.clip(q)), z(G), y || (this.nav =
                            y = c.g().attr({ zIndex: 1 }).add(this.group), this.up = c.symbol("triangle", 0, 0, m, m).add(y), B("upTracker").on("click", function () { b.scroll(-1, p) }), this.pager = c.text("", 15, 10).addClass("highcharts-legend-navigation"), !d.styledMode && e.style && this.pager.css(e.style), this.pager.add(y), this.down = c.symbol("triangle-down", 0, 0, m, m).add(y), B("downTracker").on("click", function () { b.scroll(1, p) })), b.scroll(0), a = h) : y && (z(), this.nav = y.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight = 0); return a
                }; c.prototype.scroll =
                    function (a, b) {
                        var d = this, c = this.chart, f = this.pages, h = f.length, k = this.clipHeight, n = this.options.navigation, e = this.pager, p = this.padding, m = this.currentPage + a; m > h && (m = h); 0 < m && ("undefined" !== typeof b && y(b, c), this.nav.attr({ translateX: p, translateY: k + this.padding + 7 + this.titleHeight, visibility: "inherit" }), [this.up, this.upTracker].forEach(function (a) { a.attr({ "class": 1 === m ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }), e.attr({ text: m + "/" + h }), [this.down, this.downTracker].forEach(function (a) {
                            a.attr({
                                x: 18 +
                                    this.pager.getBBox().width, "class": m === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                            })
                        }, this), c.styledMode || (this.up.attr({ fill: 1 === m ? n.inactiveColor : n.activeColor }), this.upTracker.css({ cursor: 1 === m ? "default" : "pointer" }), this.down.attr({ fill: m === h ? n.inactiveColor : n.activeColor }), this.downTracker.css({ cursor: m === h ? "default" : "pointer" })), this.scrollOffset = -f[m - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }), this.currentPage = m, this.positionCheckboxes(),
                            a = F(r(b, c.renderer.globalAnimation, !0)), l(function () { D(d, "afterScroll", { currentPage: m }) }, a.duration))
                    }; c.prototype.setItemEvents = function (a, b, d) {
                        var c = this, g = a.legendItem || {}, f = c.chart.renderer.boxWrapper, h = a instanceof C, l = "highcharts-legend-" + (h ? "point" : "series") + "-active", k = c.chart.styledMode, n = function (b) { c.allItems.forEach(function (d) { a !== d && [d].concat(d.linkedSeries || []).forEach(function (a) { a.setState(b, !h) }) }) }, e = 0; for (d = d ? [b, g.symbol] : [g.group]; e < d.length; e++)if (g = d[e]) g.on("mouseover", function () {
                            a.visible &&
                            n("inactive"); a.setState("hover"); a.visible && f.addClass(l); k || b.css(c.options.itemHoverStyle)
                        }).on("mouseout", function () { c.chart.styledMode || b.css(B(a.visible ? c.itemStyle : c.itemHiddenStyle)); n(""); f.removeClass(l); a.setState() }).on("click", function (b) { var d = function () { a.setVisible && a.setVisible(); n(a.visible ? "inactive" : "") }; f.removeClass(l); b = { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, d) : D(a, "legendItemClick", b, d) })
                    }; c.prototype.createCheckboxForItem = function (a) {
                        a.checkbox =
                        b("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); d(a.checkbox, "click", function (b) { D(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () { a.select() }) })
                    }; return c
            }(); ""; return c
        }); I(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Defaults.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
            var q = e.defaultOptions, w = C.extendClass,
            F = C.merge, y; (function (e) { function m(c, d) { var b = q.plotOptions || {}, f = d.defaultOptions, h = d.prototype; h.type = c; h.pointClass || (h.pointClass = x); f && (b[c] = f); e.seriesTypes[c] = d } e.seriesTypes = c.seriesTypes; e.registerSeriesType = m; e.seriesType = function (c, d, b, f, h) { var k = q.plotOptions || {}; d = d || ""; k[c] = F(k[d], b); m(c, w(e.seriesTypes[d] || function () { }, f)); e.seriesTypes[c].prototype.type = c; h && (e.seriesTypes[c].prototype.pointClass = w(x, h)); return e.seriesTypes[c] } })(y || (y = {})); return y
        }); I(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"],
        e["Core/Axis/Axis.js"], e["Core/Defaults.js"], e["Core/FormatUtilities.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/Legend.js"], e["Core/MSPointer.js"], e["Core/Pointer.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"]], function (c, e, x, C, q, w, F, y, t, m, k, d, b, f, h) {
            var p = c.animate, G = c.animObject, D = c.setAnimation, v = x.defaultOptions, B = x.defaultTime, r = C.numberFormat,
            a = q.registerEventOptions, z = w.charts, l = w.doc, u = w.marginNames, n = w.svg, E = w.win, g = k.seriesTypes, A = f.addEvent, H = f.attr, J = f.cleanRecursively, M = f.createElement, K = f.css, R = f.defined, Y = f.discardElement, L = f.erase, da = f.error, I = f.extend, ca = f.find, N = f.fireEvent, P = f.getStyle, aa = f.isArray, U = f.isNumber, V = f.isObject, T = f.isString, Q = f.merge, W = f.objectEach, O = f.pick, ba = f.pInt, Z = f.relativeLength, fa = f.removeEvent, ea = f.splat, ha = f.syncTimeout, ia = f.uniqueKey; c = function () {
                function c(a, b, d) {
                    this.series = this.renderTo = this.renderer =
                        this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0; this.sharedClips = {}; this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0; this.getArgs(a,
                            b, d)
                } c.chart = function (a, b, d) { return new c(a, b, d) }; c.prototype.getArgs = function (a, b, d) { T(a) || a.nodeName ? (this.renderTo = a, this.init(b, d)) : this.init(a, b) }; c.prototype.init = function (d, c) {
                    var g = d.plotOptions || {}; N(this, "init", { args: arguments }, function () {
                        var f = Q(v, d), h = f.chart; W(f.plotOptions, function (a, b) { V(a) && (a.tooltip = g[b] && Q(g[b].tooltip) || void 0) }); f.tooltip.userOptions = d.chart && d.chart.forExport && d.tooltip.userOptions || d.tooltip; this.userOptions = d; this.margin = []; this.spacing = []; this.bounds = {
                            h: {},
                            v: {}
                        }; this.labelCollectors = []; this.callback = c; this.isResizing = 0; var l = h.zooming = h.zooming || {}; d.chart && !d.chart.zooming && (l.resetButton = h.resetZoomButton); l.key = O(l.key, h.zoomKey); l.pinchType = O(l.pinchType, h.pinchType); l.singleTouch = O(l.singleTouch, h.zoomBySingleTouch); l.type = O(l.type, h.zoomType); this.options = f; this.axes = []; this.series = []; this.time = d.time && Object.keys(d.time).length ? new b(d.time) : w.time; this.numberFormatter = h.numberFormatter || r; this.styledMode = h.styledMode; this.hasCartesianSeries =
                            h.showAxes; this.index = z.length; z.push(this); w.chartCount++; a(this, h); this.xAxis = []; this.yAxis = []; this.pointCount = this.colorCounter = this.symbolCounter = 0; N(this, "afterInit"); this.firstRender()
                    })
                }; c.prototype.initSeries = function (a) { var b = this.options.chart; b = a.type || b.type || b.defaultSeriesType; var d = g[b]; d || da(17, !0, this, { missingModuleFor: b }); b = new d; "function" === typeof b.init && b.init(this, a); return b }; c.prototype.setSeriesData = function () {
                    this.getSeriesOrderByLinks().forEach(function (a) {
                        a.points || a.data ||
                        !a.enabledDataSorting || a.setData(a.options.data, !1)
                    })
                }; c.prototype.getSeriesOrderByLinks = function () { return this.series.concat().sort(function (a, b) { return a.linkedSeries.length || b.linkedSeries.length ? b.linkedSeries.length - a.linkedSeries.length : 0 }) }; c.prototype.orderSeries = function (a) { var b = this.series; a = a || 0; for (var d = b.length; a < d; ++a)b[a] && (b[a].index = a, b[a].name = b[a].getName()) }; c.prototype.isInsidePlot = function (a, b, d) {
                    void 0 === d && (d = {}); var c = this.inverted, g = this.plotBox, f = this.plotLeft, h = this.plotTop,
                        l = this.scrollablePlotBox, k = 0; var e = 0; d.visiblePlotOnly && this.scrollingContainer && (e = this.scrollingContainer, k = e.scrollLeft, e = e.scrollTop); var n = d.series; g = d.visiblePlotOnly && l || g; l = d.inverted ? b : a; b = d.inverted ? a : b; a = { x: l, y: b, isInsidePlot: !0, options: d }; if (!d.ignoreX) { var p = n && (c && !this.polar ? n.yAxis : n.xAxis) || { pos: f, len: Infinity }; l = d.paneCoordinates ? p.pos + l : f + l; l >= Math.max(k + f, p.pos) && l <= Math.min(k + f + g.width, p.pos + p.len) || (a.isInsidePlot = !1) } !d.ignoreY && a.isInsidePlot && (c = d.axis && !d.axis.isXAxis && d.axis ||
                            n && (c ? n.xAxis : n.yAxis) || { pos: h, len: Infinity }, d = d.paneCoordinates ? c.pos + b : h + b, d >= Math.max(e + h, c.pos) && d <= Math.min(e + h + g.height, c.pos + c.len) || (a.isInsidePlot = !1)); N(this, "afterIsInsidePlot", a); return a.isInsidePlot
                }; c.prototype.redraw = function (a) {
                    N(this, "beforeRedraw"); var b = this.hasCartesianSeries ? this.axes : this.colorAxis || [], d = this.series, c = this.pointer, g = this.legend, f = this.userOptions.legend, h = this.renderer, l = h.isHidden(), k = [], e = this.isDirtyBox, n = this.isDirtyLegend; this.setResponsive && this.setResponsive(!1);
                    D(this.hasRendered ? a : !1, this); l && this.temporaryDisplay(); this.layOutTitles(); for (a = d.length; a--;) { var p = d[a]; if (p.options.stacking || p.options.centerInCategory) { var m = !0; if (p.isDirty) { var r = !0; break } } } if (r) for (a = d.length; a--;)p = d[a], p.options.stacking && (p.isDirty = !0); d.forEach(function (a) { a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), n = !0) : f && (f.labelFormatter || f.labelFormat) && (n = !0)); a.isDirtyData && N(a, "updatedData") }); n && g && g.options.enabled && (g.render(),
                        this.isDirtyLegend = !1); m && this.getStacks(); b.forEach(function (a) { a.updateNames(); a.setScale() }); this.getMargins(); b.forEach(function (a) { a.isDirty && (e = !0) }); b.forEach(function (a) { var b = a.min + "," + a.max; a.extKey !== b && (a.extKey = b, k.push(function () { N(a, "afterSetExtremes", I(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (e || m) && a.redraw() }); e && this.drawChartBox(); N(this, "predraw"); d.forEach(function (a) { (e || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); c && c.reset(!0); h.draw(); N(this, "redraw");
                    N(this, "render"); l && this.temporaryDisplay(!0); k.forEach(function (a) { a.call() })
                }; c.prototype.get = function (a) { function b(b) { return b.id === a || b.options && b.options.id === a } for (var d = this.series, c = ca(this.axes, b) || ca(this.series, b), g = 0; !c && g < d.length; g++)c = ca(d[g].points || [], b); return c }; c.prototype.getAxes = function () {
                    var a = this, b = this.options, d = b.xAxis = ea(b.xAxis || {}); b = b.yAxis = ea(b.yAxis || {}); N(this, "getAxes"); d.forEach(function (a, b) { a.index = b; a.isX = !0 }); b.forEach(function (a, b) { a.index = b }); d.concat(b).forEach(function (b) {
                        new e(a,
                            b)
                    }); N(this, "afterGetAxes")
                }; c.prototype.getSelectedPoints = function () { return this.series.reduce(function (a, b) { b.getPointsCollection().forEach(function (b) { O(b.selectedStaging, b.selected) && a.push(b) }); return a }, []) }; c.prototype.getSelectedSeries = function () { return this.series.filter(function (a) { return a.selected }) }; c.prototype.setTitle = function (a, b, d) { this.applyDescription("title", a); this.applyDescription("subtitle", b); this.applyDescription("caption", void 0); this.layOutTitles(d) }; c.prototype.applyDescription =
                    function (a, b) { var d = this, c = "title" === a ? { color: "#333333", fontSize: this.options.isStock ? "16px" : "18px" } : { color: "#666666" }; c = this.options[a] = Q(!this.styledMode && { style: c }, this.options[a], b); var g = this[a]; g && b && (this[a] = g = g.destroy()); c && !g && (g = this.renderer.text(c.text, 0, 0, c.useHTML).attr({ align: c.align, "class": "highcharts-" + a, zIndex: c.zIndex || 4 }).add(), g.update = function (b) { d[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[a]](b) }, this.styledMode || g.css(c.style), this[a] = g) }; c.prototype.layOutTitles =
                        function (a) {
                            var b = [0, 0, 0], d = this.renderer, c = this.spacingBox;["title", "subtitle", "caption"].forEach(function (a) {
                                var g = this[a], f = this.options[a], h = f.verticalAlign || "top"; a = "title" === a ? "top" === h ? -3 : 0 : "top" === h ? b[0] + 2 : 0; var l; if (g) {
                                    this.styledMode || (l = f.style && f.style.fontSize); l = d.fontMetrics(l, g).b; g.css({ width: (f.width || c.width + (f.widthAdjust || 0)) + "px" }); var k = Math.round(g.getBBox(f.useHTML).height); g.align(I({ y: "bottom" === h ? l : a + l, height: k }, f), !1, "spacingBox"); f.floating || ("top" === h ? b[0] = Math.ceil(b[0] +
                                        k) : "bottom" === h && (b[2] = Math.ceil(b[2] + k)))
                                }
                            }, this); b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin); b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin); var g = !this.titleOffset || this.titleOffset.join(",") !== b.join(","); this.titleOffset = b; N(this, "afterLayOutTitles"); !this.isDirtyBox && g && (this.isDirtyBox = this.isDirtyLegend = g, this.hasRendered && O(a, !0) && this.isDirtyBox && this.redraw())
                        }; c.prototype.getChartSize = function () {
                            var a =
                                this.options.chart, b = a.width; a = a.height; var d = this.renderTo; R(b) || (this.containerWidth = P(d, "width")); R(a) || (this.containerHeight = P(d, "height")); this.chartWidth = Math.max(0, b || this.containerWidth || 600); this.chartHeight = Math.max(0, Z(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                        }; c.prototype.temporaryDisplay = function (a) {
                            var b = this.renderTo; if (a) for (; b && b.style;)b.hcOrigStyle && (K(b, b.hcOrigStyle), delete b.hcOrigStyle), b.hcOrigDetached && (l.body.removeChild(b), b.hcOrigDetached = !1),
                                b = b.parentNode; else for (; b && b.style;) { l.body.contains(b) || b.parentNode || (b.hcOrigDetached = !0, l.body.appendChild(b)); if ("none" === P(b, "display", !1) || b.hcOricDetached) b.hcOrigStyle = { display: b.style.display, height: b.style.height, overflow: b.style.overflow }, a = { display: "block", overflow: "hidden" }, b !== this.renderTo && (a.height = 0), K(b, a), b.offsetWidth || b.style.setProperty("display", "block", "important"); b = b.parentNode; if (b === l.body) break }
                        }; c.prototype.setClassName = function (a) {
                            this.container.className = "highcharts-container " +
                                (a || "")
                        }; c.prototype.getContainer = function () {
                            var a = this.options, b = a.chart, c = ia(), g, f = this.renderTo; f || (this.renderTo = f = b.renderTo); T(f) && (this.renderTo = f = l.getElementById(f)); f || da(13, !0, this); var k = ba(H(f, "data-highcharts-chart")); U(k) && z[k] && z[k].hasRendered && z[k].destroy(); H(f, "data-highcharts-chart", this.index); f.innerHTML = h.emptyHTML; b.skipClone || f.offsetWidth || this.temporaryDisplay(); this.getChartSize(); k = this.chartWidth; var e = this.chartHeight; K(f, { overflow: "hidden" }); this.styledMode || (g = I({
                                position: "relative",
                                overflow: "hidden", width: k + "px", height: e + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)", userSelect: "none", "touch-action": "manipulation", outline: "none"
                            }, b.style || {})); this.container = c = M("div", { id: c }, g, f); this._cursor = c.style.cursor; this.renderer = new (b.renderer || !n ? m.getRendererType(b.renderer) : d)(c, k, e, void 0, b.forExport, a.exporting && a.exporting.allowHTML, this.styledMode); D(void 0, this); this.setClassName(b.className); if (this.styledMode) for (var p in a.defs) this.renderer.definition(a.defs[p]);
                            else this.renderer.setStyle(b.style); this.renderer.chartIndex = this.index; N(this, "afterGetContainer")
                        }; c.prototype.getMargins = function (a) { var b = this.spacing, d = this.margin, c = this.titleOffset; this.resetMargins(); c[0] && !R(d[0]) && (this.plotTop = Math.max(this.plotTop, c[0] + b[0])); c[2] && !R(d[2]) && (this.marginBottom = Math.max(this.marginBottom, c[2] + b[2])); this.legend && this.legend.display && this.legend.adjustMargins(d, b); N(this, "getMargins"); a || this.getAxisMargins() }; c.prototype.getAxisMargins = function () {
                            var a =
                                this, b = a.axisOffset = [0, 0, 0, 0], d = a.colorAxis, c = a.margin, g = function (a) { a.forEach(function (a) { a.visible && a.getOffset() }) }; a.hasCartesianSeries ? g(a.axes) : d && d.length && g(d); u.forEach(function (d, g) { R(c[g]) || (a[d] += b[g]) }); a.setChartSize()
                        }; c.prototype.reflow = function (a) {
                            var b = this, d = b.options.chart, c = b.renderTo, g = R(d.width) && R(d.height), h = d.width || P(c, "width"); d = d.height || P(c, "height"); c = a ? a.target : E; delete b.pointer.chartPosition; if (!g && !b.isPrinting && h && d && (c === E || c === l)) {
                                if (h !== b.containerWidth || d !==
                                    b.containerHeight) f.clearTimeout(b.reflowTimeout), b.reflowTimeout = ha(function () { b.container && b.setSize(void 0, void 0, !1) }, a ? 100 : 0); b.containerWidth = h; b.containerHeight = d
                            }
                        }; c.prototype.setReflow = function (a) { var b = this; !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = A(E, "resize", function (a) { b.options && b.reflow(a) }), A(this, "destroy", this.unbindReflow)) }; c.prototype.setSize = function (a, b, d) {
                            var c = this, g = c.renderer; c.isResizing += 1; D(d, c); d =
                                g.globalAnimation; c.oldChartHeight = c.chartHeight; c.oldChartWidth = c.chartWidth; "undefined" !== typeof a && (c.options.chart.width = a); "undefined" !== typeof b && (c.options.chart.height = b); c.getChartSize(); c.styledMode || (d ? p : K)(c.container, { width: c.chartWidth + "px", height: c.chartHeight + "px" }, d); c.setChartSize(!0); g.setSize(c.chartWidth, c.chartHeight, d); c.axes.forEach(function (a) { a.isDirty = !0; a.setScale() }); c.isDirtyLegend = !0; c.isDirtyBox = !0; c.layOutTitles(); c.getMargins(); c.redraw(d); c.oldChartHeight = null; N(c,
                                    "resize"); ha(function () { c && N(c, "endResize", null, function () { --c.isResizing }) }, G(d).duration)
                        }; c.prototype.setChartSize = function (a) {
                            var b = this.inverted, d = this.renderer, c = this.chartWidth, g = this.chartHeight, f = this.options.chart, h = this.spacing, l = this.clipOffset, k, e, n, p; this.plotLeft = k = Math.round(this.plotLeft); this.plotTop = e = Math.round(this.plotTop); this.plotWidth = n = Math.max(0, Math.round(c - k - this.marginRight)); this.plotHeight = p = Math.max(0, Math.round(g - e - this.marginBottom)); this.plotSizeX = b ? p : n; this.plotSizeY =
                                b ? n : p; this.plotBorderWidth = f.plotBorderWidth || 0; this.spacingBox = d.spacingBox = { x: h[3], y: h[0], width: c - h[3] - h[1], height: g - h[0] - h[2] }; this.plotBox = d.plotBox = { x: k, y: e, width: n, height: p }; b = 2 * Math.floor(this.plotBorderWidth / 2); c = Math.ceil(Math.max(b, l[3]) / 2); g = Math.ceil(Math.max(b, l[0]) / 2); this.clipBox = { x: c, y: g, width: Math.floor(this.plotSizeX - Math.max(b, l[1]) / 2 - c), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(b, l[2]) / 2 - g)) }; a || (this.axes.forEach(function (a) { a.setAxisSize(); a.setAxisTranslation() }),
                                    d.alignElements()); N(this, "afterSetChartSize", { skipAxes: a })
                        }; c.prototype.resetMargins = function () { N(this, "resetMargins"); var a = this, b = a.options.chart;["margin", "spacing"].forEach(function (d) { var c = b[d], g = V(c) ? c : [c, c, c, c];["Top", "Right", "Bottom", "Left"].forEach(function (c, f) { a[d][f] = O(b[d + c], g[f]) }) }); u.forEach(function (b, d) { a[b] = O(a.margin[d], a.spacing[d]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0] }; c.prototype.drawChartBox = function () {
                            var a = this.options.chart, b = this.renderer, d = this.chartWidth,
                            c = this.chartHeight, g = this.styledMode, f = this.plotBGImage, h = a.backgroundColor, l = a.plotBackgroundColor, k = a.plotBackgroundImage, e = this.plotLeft, n = this.plotTop, p = this.plotWidth, m = this.plotHeight, r = this.plotBox, A = this.clipRect, u = this.clipBox, v = this.chartBackground, z = this.plotBackground, B = this.plotBorder, G, E = "animate"; v || (this.chartBackground = v = b.rect().addClass("highcharts-background").add(), E = "attr"); if (g) var D = G = v.strokeWidth(); else {
                                D = a.borderWidth || 0; G = D + (a.shadow ? 8 : 0); h = { fill: h || "none" }; if (D || v["stroke-width"]) h.stroke =
                                    a.borderColor, h["stroke-width"] = D; v.attr(h).shadow(a.shadow)
                            } v[E]({ x: G / 2, y: G / 2, width: d - G - D % 2, height: c - G - D % 2, r: a.borderRadius }); E = "animate"; z || (E = "attr", this.plotBackground = z = b.rect().addClass("highcharts-plot-background").add()); z[E](r); g || (z.attr({ fill: l || "none" }).shadow(a.plotShadow), k && (f ? (k !== f.attr("href") && f.attr("href", k), f.animate(r)) : this.plotBGImage = b.image(k, e, n, p, m).add())); A ? A.animate({ width: u.width, height: u.height }) : this.clipRect = b.clipRect(u); E = "animate"; B || (E = "attr", this.plotBorder =
                                B = b.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); g || B.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" }); B[E](B.crisp({ x: e, y: n, width: p, height: m }, -B.strokeWidth())); this.isDirtyBox = !1; N(this, "afterDrawChartBox")
                        }; c.prototype.propFromSeries = function () {
                            var a = this, b = a.options.chart, d = a.options.series, c, f, h;["inverted", "angular", "polar"].forEach(function (l) {
                                f = g[b.type || b.defaultSeriesType]; h = b[l] || f && f.prototype[l]; for (c = d && d.length; !h && c--;)(f = g[d[c].type]) &&
                                    f.prototype[l] && (h = !0); a[l] = h
                            })
                        }; c.prototype.linkSeries = function () { var a = this, b = a.series; b.forEach(function (a) { a.linkedSeries.length = 0 }); b.forEach(function (b) { var d = b.options.linkedTo; T(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && d.linkedParent !== b && (d.linkedSeries.push(b), b.linkedParent = d, d.enabledDataSorting && b.setDataSortingOptions(), b.visible = O(b.options.visible, d.options.visible, b.visible)) }); N(this, "afterLinkSeries") }; c.prototype.renderSeries = function () {
                            this.series.forEach(function (a) {
                                a.translate();
                                a.render()
                            })
                        }; c.prototype.renderLabels = function () { var a = this, b = a.options.labels; b.items && b.items.forEach(function (d) { var c = I(b.style, d.style), g = ba(c.left) + a.plotLeft, f = ba(c.top) + a.plotTop + 12; delete c.left; delete c.top; a.renderer.text(d.html, g, f).attr({ zIndex: 2 }).css(c).add() }) }; c.prototype.render = function () {
                            var a = this.axes, b = this.colorAxis, d = this.renderer, c = this.options, g = function (a) { a.forEach(function (a) { a.visible && a.render() }) }, f = 0; this.setTitle(); this.legend = new F(this, c.legend); this.getStacks &&
                                this.getStacks(); this.getMargins(!0); this.setChartSize(); c = this.plotWidth; a.some(function (a) { if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return f = 21, !0 }); var h = this.plotHeight = Math.max(this.plotHeight - f, 0); a.forEach(function (a) { a.setScale() }); this.getAxisMargins(); var l = 1.1 < c / this.plotWidth, k = 1.05 < h / this.plotHeight; if (l || k) a.forEach(function (a) { (a.horiz && l || !a.horiz && k) && a.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries ? g(a) : b && b.length && g(b);
                            this.seriesGroup || (this.seriesGroup = d.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels(); this.addCredits(); this.setResponsive && this.setResponsive(); this.hasRendered = !0
                        }; c.prototype.addCredits = function (a) {
                            var b = this, d = Q(!0, this.options.credits, a); d.enabled && !this.credits && (this.credits = this.renderer.text(d.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () { d.href && (E.location.href = d.href) }).attr({ align: d.position.align, zIndex: 8 }), b.styledMode ||
                                this.credits.css(d.style), this.credits.add().align(d.position), this.credits.update = function (a) { b.credits = b.credits.destroy(); b.addCredits(a) })
                        }; c.prototype.destroy = function () {
                            var a = this, b = a.axes, d = a.series, c = a.container, g = c && c.parentNode, f; N(a, "destroy"); a.renderer.forExport ? L(z, a) : z[a.index] = void 0; w.chartCount--; a.renderTo.removeAttribute("data-highcharts-chart"); fa(a); for (f = b.length; f--;)b[f] = b[f].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (f = d.length; f--;)d[f] =
                                d[f].destroy(); "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) { var d = a[b]; d && d.destroy && (a[b] = d.destroy()) }); c && (c.innerHTML = h.emptyHTML, fa(c), g && Y(c)); W(a, function (b, d) { delete a[d] })
                        }; c.prototype.firstRender = function () {
                            var a = this, b = a.options; if (!a.isReadyToRender || a.isReadyToRender()) {
                                a.getContainer(); a.resetMargins(); a.setChartSize(); a.propFromSeries();
                                a.getAxes(); (aa(b.series) ? b.series : []).forEach(function (b) { a.initSeries(b) }); a.linkSeries(); a.setSeriesData(); N(a, "beforeRender"); t && (y.isRequired() ? a.pointer = new y(a, b) : a.pointer = new t(a, b)); a.render(); a.pointer.getChartPosition(); if (!a.renderer.imgCount && !a.hasLoaded) a.onload(); a.temporaryDisplay(!0)
                            }
                        }; c.prototype.onload = function () {
                            this.callbacks.concat([this.callback]).forEach(function (a) { a && "undefined" !== typeof this.index && a.apply(this, [this]) }, this); N(this, "load"); N(this, "render"); R(this.index) &&
                                this.setReflow(this.options.chart.reflow); this.warnIfA11yModuleNotLoaded(); this.hasLoaded = !0
                        }; c.prototype.warnIfA11yModuleNotLoaded = function () {
                            var a = this.options, b = this.title; a && !this.accessibility && (this.renderer.boxWrapper.attr({ role: "img", "aria-label": (b && b.element.textContent || "").replace(/</g, "&lt;") }), a.accessibility && !1 === a.accessibility.enabled || da('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
                                !1, this))
                        }; c.prototype.addSeries = function (a, b, d) { var c = this, g; a && (b = O(b, !0), N(c, "addSeries", { options: a }, function () { g = c.initSeries(a); c.isDirtyLegend = !0; c.linkSeries(); g.enabledDataSorting && g.setData(a.data, !1); N(c, "afterAddSeries", { series: g }); b && c.redraw(d) })); return g }; c.prototype.addAxis = function (a, b, d, c) { return this.createAxis(b ? "xAxis" : "yAxis", { axis: a, redraw: d, animation: c }) }; c.prototype.addColorAxis = function (a, b, d) { return this.createAxis("colorAxis", { axis: a, redraw: b, animation: d }) }; c.prototype.createAxis =
                            function (a, b) { a = new e(this, Q(b.axis, { index: this[a].length, isX: "xAxis" === a })); O(b.redraw, !0) && this.redraw(b.animation); return a }; c.prototype.showLoading = function (a) {
                                var b = this, d = b.options, c = d.loading, g = function () { f && K(f, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }, f = b.loadingDiv, l = b.loadingSpan; f || (b.loadingDiv = f = M("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container)); l || (b.loadingSpan = l = M("span", { className: "highcharts-loading-inner" },
                                    null, f), A(b, "redraw", g)); f.className = "highcharts-loading"; h.setElementHTML(l, O(a, d.lang.loading, "")); b.styledMode || (K(f, I(c.style, { zIndex: 10 })), K(l, c.labelStyle), b.loadingShown || (K(f, { opacity: 0, display: "" }), p(f, { opacity: c.style.opacity || .5 }, { duration: c.showDuration || 0 }))); b.loadingShown = !0; g()
                            }; c.prototype.hideLoading = function () {
                                var a = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || p(b, { opacity: 0 }, {
                                    duration: a.loading.hideDuration || 100,
                                    complete: function () { K(b, { display: "none" }) }
                                })); this.loadingShown = !1
                            }; c.prototype.update = function (d, c, g, f) {
                                var h = this, l = { credits: "addCredits", title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }, k = d.isResponsiveOptions, e = [], n, p; N(h, "update", { options: d }); k || h.setResponsive(!1, !0); d = J(d, h.options); h.userOptions = Q(h.userOptions, d); var m = d.chart; if (m) {
                                    Q(!0, h.options.chart, m); "className" in m && h.setClassName(m.className); "reflow" in m && h.setReflow(m.reflow); if ("inverted" in m || "polar" in m || "type" in
                                        m) { h.propFromSeries(); var r = !0 } "alignTicks" in m && (r = !0); "events" in m && a(this, m); W(m, function (a, b) { -1 !== h.propsRequireUpdateSeries.indexOf("chart." + b) && (n = !0); -1 !== h.propsRequireDirtyBox.indexOf(b) && (h.isDirtyBox = !0); -1 !== h.propsRequireReflow.indexOf(b) && (k ? h.isDirtyBox = !0 : p = !0) }); !h.styledMode && m.style && h.renderer.setStyle(h.options.chart.style || {})
                                } !h.styledMode && d.colors && (this.options.colors = d.colors); d.time && (this.time === B && (this.time = new b(d.time)), Q(!0, h.options.time, d.time)); W(d, function (a,
                                    b) { if (h[b] && "function" === typeof h[b].update) h[b].update(a, !1); else if ("function" === typeof h[l[b]]) h[l[b]](a); else "colors" !== b && -1 === h.collectionsWithUpdate.indexOf(b) && Q(!0, h.options[b], d[b]); "chart" !== b && -1 !== h.propsRequireUpdateSeries.indexOf(b) && (n = !0) }); this.collectionsWithUpdate.forEach(function (a) {
                                        if (d[a]) {
                                            var b = []; h[a].forEach(function (a, d) { a.options.isInternal || b.push(O(a.options.index, d)) }); ea(d[a]).forEach(function (d, c) {
                                                var f = R(d.id), l; f && (l = h.get(d.id)); !l && h[a] && (l = h[a][b ? b[c] : c]) && f &&
                                                    R(l.options.id) && (l = void 0); l && l.coll === a && (l.update(d, !1), g && (l.touched = !0)); !l && g && h.collectionsWithInit[a] && (h.collectionsWithInit[a][0].apply(h, [d].concat(h.collectionsWithInit[a][1] || []).concat([!1])).touched = !0)
                                            }); g && h[a].forEach(function (a) { a.touched || a.options.isInternal ? delete a.touched : e.push(a) })
                                        }
                                    }); e.forEach(function (a) { a.chart && a.remove && a.remove(!1) }); r && h.axes.forEach(function (a) { a.update({}, !1) }); n && h.getSeriesOrderByLinks().forEach(function (a) { a.chart && a.update({}, !1) }, this); r = m &&
                                        m.width; m = m && (T(m.height) ? Z(m.height, r || h.chartWidth) : m.height); p || U(r) && r !== h.chartWidth || U(m) && m !== h.chartHeight ? h.setSize(r, m, f) : O(c, !0) && h.redraw(f); N(h, "afterUpdate", { options: d, redraw: c, animation: f })
                            }; c.prototype.setSubtitle = function (a, b) { this.applyDescription("subtitle", a); this.layOutTitles(b) }; c.prototype.setCaption = function (a, b) { this.applyDescription("caption", a); this.layOutTitles(b) }; c.prototype.showResetZoom = function () {
                                function a() { b.zoomOut() } var b = this, d = v.lang, c = b.options.chart.zooming.resetButton,
                                    g = c.theme, f = "chart" === c.relativeTo || "spacingBox" === c.relativeTo ? null : "scrollablePlotBox"; N(this, "beforeShowResetZoom", null, function () { b.resetZoomButton = b.renderer.button(d.resetZoom, null, null, a, g).attr({ align: c.position.align, title: d.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(c.position, !1, f) }); N(this, "afterShowResetZoom")
                            }; c.prototype.zoomOut = function () { N(this, "selection", { resetSelection: !0 }, this.zoom) }; c.prototype.zoom = function (a) {
                                var b = this, d = b.pointer, c = !1, g; !a || a.resetSelection ?
                                    (b.axes.forEach(function (a) { g = a.zoom() }), d.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) { var f = a.axis; if (d[f.isXAxis ? "zoomX" : "zoomY"] && R(d.mouseDownX) && R(d.mouseDownY) && b.isInsidePlot(d.mouseDownX - b.plotLeft, d.mouseDownY - b.plotTop, { axis: f }) || !R(b.inverted ? d.mouseDownX : d.mouseDownY)) g = f.zoom(a.min, a.max), f.displayBtn && (c = !0) }); var f = b.resetZoomButton; c && !f ? b.showResetZoom() : !c && V(f) && (b.resetZoomButton = f.destroy()); g && b.redraw(O(b.options.chart.animation, a && a.animation, 100 > b.pointCount))
                            };
                c.prototype.pan = function (a, b) {
                    var d = this, c = d.hoverPoints; b = "object" === typeof b ? b : { enabled: b, type: "x" }; var g = d.options.chart; g && g.panning && (g.panning = b); var f = b.type, h; N(this, "pan", { originalEvent: a }, function () {
                        c && c.forEach(function (a) { a.setState() }); var b = d.xAxis; "xy" === f ? b = b.concat(d.yAxis) : "y" === f && (b = d.yAxis); var g = {}; b.forEach(function (b) {
                            if (b.options.panningEnabled && !b.options.isInternal) {
                                var c = b.horiz, l = a[c ? "chartX" : "chartY"]; c = c ? "mouseDownX" : "mouseDownY"; var k = d[c], e = b.minPointOffset || 0, n = b.reversed &&
                                    !d.inverted || !b.reversed && d.inverted ? -1 : 1, p = b.getExtremes(), m = b.toValue(k - l, !0) + e * n, r = b.toValue(k + b.len - l, !0) - (e * n || b.isXAxis && b.pointRangePadding || 0), A = r < m; n = b.hasVerticalPanning(); k = A ? r : m; m = A ? m : r; var u = b.panningState; !n || b.isXAxis || u && !u.isDirty || b.series.forEach(function (a) {
                                        var b = a.getProcessedData(!0); b = a.getExtremes(b.yData, !0); u || (u = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }); U(b.dataMin) && U(b.dataMax) && (u.startMin = Math.min(O(a.options.threshold, Infinity), b.dataMin, u.startMin), u.startMax =
                                            Math.max(O(a.options.threshold, -Infinity), b.dataMax, u.startMax))
                                    }); n = Math.min(O(u && u.startMin, p.dataMin), e ? p.min : b.toValue(b.toPixels(p.min) - b.minPixelPadding)); r = Math.max(O(u && u.startMax, p.dataMax), e ? p.max : b.toValue(b.toPixels(p.max) + b.minPixelPadding)); b.panningState = u; b.isOrdinal || (e = n - k, 0 < e && (m += e, k = n), e = m - r, 0 < e && (m = r, k -= e), b.series.length && k !== p.min && m !== p.max && k >= n && m <= r && (b.setExtremes(k, m, !1, !1, { trigger: "pan" }), !d.resetZoomButton && k !== n && m !== r && f.match("y") && (d.showResetZoom(), b.displayBtn =
                                        !1), h = !0), g[c] = l)
                            }
                        }); W(g, function (a, b) { d[b] = a }); h && d.redraw(!1); K(d.container, { cursor: "move" })
                    })
                }; return c
            }(); I(c.prototype, {
                callbacks: [], collectionsWithInit: { xAxis: [c.prototype.addAxis, [!0]], yAxis: [c.prototype.addAxis, [!1]], series: [c.prototype.addSeries] }, collectionsWithUpdate: ["xAxis", "yAxis", "series"], propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
                propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
            }); ""; return c
        }); I(e, "Core/Legend/LegendSymbol.js", [e["Core/Utilities.js"]], function (c) {
            var e = c.extend, x = c.merge, C = c.pick, q; (function (c) {
                c.drawLineMarker = function (c) {
                    var y = this.legendItem = this.legendItem || {}, t = this.options, m = c.symbolWidth, k = c.symbolHeight, d = k / 2, b = this.chart.renderer, f = y.group; c = c.baseline - Math.round(.3 * c.fontMetrics.b); var h = {}, p = t.marker, G = 0; this.chart.styledMode ||
                        (h = { "stroke-width": Math.min(t.lineWidth || 0, 24) }, t.dashStyle ? h.dashstyle = t.dashStyle : "square" !== t.linecap && (h["stroke-linecap"] = "round")); y.line = b.path().addClass("highcharts-graph").attr(h).add(f); h["stroke-linecap"] && (G = Math.min(y.line.strokeWidth(), m) / 2); y.line.attr({ d: [["M", G, c], ["L", m - G, c]] }); p && !1 !== p.enabled && m && (t = Math.min(C(p.radius, d), d), 0 === this.symbol.indexOf("url") && (p = x(p, { width: k, height: k }), t = 0), y.symbol = y = b.symbol(this.symbol, m / 2 - t, c - t, 2 * t, 2 * t, e({ context: "legend" }, p)).addClass("highcharts-point").add(f),
                            y.isMarker = !0)
                }; c.drawRectangle = function (c, e) { e = e.legendItem || {}; var t = c.symbolHeight, m = c.options.squareSymbol; e.symbol = this.chart.renderer.rect(m ? (c.symbolWidth - t) / 2 : 0, c.baseline - t + 1, m ? t : c.symbolWidth, t, C(c.options.symbolRadius, t / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(e.group) }
            })(q || (q = {})); return q
        }); I(e, "Core/Series/SeriesDefaults.js", [], function () {
            return {
                lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                    enabledThreshold: 2, lineColor: "#ffffff",
                    lineWidth: 0, radius: 4, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, enabled: !0, radiusPlus: 2, lineWidthPlus: 1 }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 } }
                }, point: { events: {} }, dataLabels: { animation: {}, align: "center", borderWidth: 0, defer: !0, formatter: function () { var c = this.series.chart.numberFormatter; return "number" !== typeof this.y ? "" : c(this.y, -1) }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 },
                cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: { normal: { animation: !0 }, hover: { animation: { duration: 50 }, lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 } }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: .2 } }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
            }
        }); I(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Defaults.js"], e["Core/Foundation.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Point.js"],
        e["Core/Series/SeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F, y, t, m) {
            var k = c.animObject, d = c.setAnimation, b = e.defaultOptions, f = x.registerEventOptions, h = C.hasTouch, p = C.svg, G = C.win, D = y.seriesTypes, v = m.arrayMax, B = m.arrayMin, r = m.clamp, a = m.cleanRecursively, z = m.correctFloat, l = m.defined, u = m.erase, n = m.error, E = m.extend, g = m.find, A = m.fireEvent, H = m.getNestedProperty, J = m.isArray, M = m.isNumber, K = m.isString, R = m.merge, Y = m.objectEach,
            L = m.pick, da = m.removeEvent, I = m.splat, ca = m.syncTimeout; c = function () {
                function c() { this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0 } c.prototype.init = function (a, b) {
                    A(this, "init", { options: b }); var d = this, c = a.series; this.eventsToUnbind = []; d.chart = a; d.options = d.setOptions(b); b = d.options; d.linkedSeries = []; d.bindAxes(); E(d,
                        { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); f(this, b); var g = b.events; if (g && g.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; d.getColor(); d.getSymbol(); d.parallelArrays.forEach(function (a) { d[a + "Data"] || (d[a + "Data"] = []) }); d.isCartesian && (a.hasCartesianSeries = !0); var h; c.length && (h = c[c.length - 1]); d._i = L(h && h._i, -1) + 1; d.opacity = d.options.opacity; a.orderSeries(this.insert(c)); b.dataSorting && b.dataSorting.enabled ? d.setDataSortingOptions() :
                            d.points || d.data || d.setData(b.data, !1); A(this, "afterInit")
                }; c.prototype.is = function (a) { return D[a] && this instanceof D[a] }; c.prototype.insert = function (a) { var b = this.options.index, d; if (M(b)) { for (d = a.length; d--;)if (b >= L(a[d].options.index, a[d]._i)) { a.splice(d + 1, 0, this); break } -1 === d && a.unshift(this); d += 1 } else a.push(this); return L(d, a.length - 1) }; c.prototype.bindAxes = function () {
                    var a = this, b = a.options, d = a.chart, c; A(this, "bindAxes", null, function () {
                        (a.axisTypes || []).forEach(function (g) {
                            var f = 0; d[g].forEach(function (d) {
                                c =
                                d.options; if (b[g] === f && !c.isInternal || "undefined" !== typeof b[g] && b[g] === c.id || "undefined" === typeof b[g] && 0 === c.index) a.insert(d.series), a[g] = d, d.isDirty = !0; c.isInternal || f++
                            }); a[g] || a.optionalAxis === g || n(18, !0, d)
                        })
                    }); A(this, "afterBindAxes")
                }; c.prototype.updateParallelArrays = function (a, b) { var d = a.series, c = arguments, g = M(b) ? function (c) { var g = "y" === c && d.toYData ? d.toYData(a) : a[c]; d[c + "Data"][b] = g } : function (a) { Array.prototype[b].apply(d[a + "Data"], Array.prototype.slice.call(c, 2)) }; d.parallelArrays.forEach(g) };
                c.prototype.hasData = function () { return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length }; c.prototype.autoIncrement = function (a) {
                    var b = this.options, d = b.pointIntervalUnit, c = b.relativeXValue, g = this.chart.time, f = this.xIncrement, h; f = L(f, b.pointStart, 0); this.pointInterval = h = L(this.pointInterval, b.pointInterval, 1); c && M(a) && (h *= a); d && (b = new g.Date(f), "day" === d ? g.set("Date", b, g.get("Date", b) + h) : "month" === d ? g.set("Month", b, g.get("Month",
                        b) + h) : "year" === d && g.set("FullYear", b, g.get("FullYear", b) + h), h = b.getTime() - f); if (c && M(a)) return f + h; this.xIncrement = f + h; return f
                }; c.prototype.setDataSortingOptions = function () { var a = this.options; E(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }); l(a.pointRange) || (a.pointRange = 1) }; c.prototype.setOptions = function (a) {
                    var d = this.chart, c = d.options, g = c.plotOptions, f = d.userOptions || {}; a = R(a); d = d.styledMode; var h = { plotOptions: g, userOptions: a }; A(this, "setOptions", h); var k = h.plotOptions[this.type],
                        e = f.plotOptions || {}; this.userOptions = h.userOptions; f = R(k, g.series, f.plotOptions && f.plotOptions[this.type], a); this.tooltipOptions = R(b.tooltip, b.plotOptions.series && b.plotOptions.series.tooltip, b.plotOptions[this.type].tooltip, c.tooltip.userOptions, g.series && g.series.tooltip, g[this.type].tooltip, a.tooltip); this.stickyTracking = L(a.stickyTracking, e[this.type] && e[this.type].stickyTracking, e.series && e.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : f.stickyTracking); null === k.marker &&
                            delete f.marker; this.zoneAxis = f.zoneAxis; g = this.zones = (f.zones || []).slice(); !f.negativeColor && !f.negativeFillColor || f.zones || (c = { value: f[this.zoneAxis + "Threshold"] || f.threshold || 0, className: "highcharts-negative" }, d || (c.color = f.negativeColor, c.fillColor = f.negativeFillColor), g.push(c)); g.length && l(g[g.length - 1].value) && g.push(d ? {} : { color: this.color, fillColor: this.fillColor }); A(this, "afterSetOptions", { options: f }); return f
                }; c.prototype.getName = function () {
                    return L(this.options.name, "Series " + (this.index +
                        1))
                }; c.prototype.getCyclic = function (a, b, d) { var c = this.chart, g = this.userOptions, f = a + "Index", h = a + "Counter", k = d ? d.length : L(c.options.chart[a + "Count"], c[a + "Count"]); if (!b) { var e = L(g[f], g["_" + f]); l(e) || (c.series.length || (c[h] = 0), g["_" + f] = e = c[h] % k, c[h] += 1); d && (b = d[e]) } "undefined" !== typeof e && (this[f] = e); this[a] = b }; c.prototype.getColor = function () {
                    this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = "#cccccc" : this.getCyclic("color", this.options.color || b.plotOptions[this.type].color,
                        this.chart.options.colors)
                }; c.prototype.getPointsCollection = function () { return (this.hasGroupedData ? this.points : this.data) || [] }; c.prototype.getSymbol = function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }; c.prototype.findPointIndex = function (a, b) {
                    var d = a.id, c = a.x, f = this.points, h = this.options.dataSorting, l, k; if (d) h = this.chart.get(d), h instanceof w && (l = h); else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) if (l = function (b) {
                        return !b.touched &&
                            b.index === a.index
                    }, h && h.matchByName ? l = function (b) { return !b.touched && b.name === a.name } : this.options.relativeXValue && (l = function (b) { return !b.touched && b.options.x === a.x }), l = g(f, l), !l) return; if (l) { var e = l && l.index; "undefined" !== typeof e && (k = !0) } "undefined" === typeof e && M(c) && (e = this.xData.indexOf(c, b)); -1 !== e && "undefined" !== typeof e && this.cropped && (e = e >= this.cropStart ? e - this.cropStart : e); !k && M(e) && f[e] && f[e].touched && (e = void 0); return e
                }; c.prototype.updateData = function (a, b) {
                    var d = this.options, c = d.dataSorting,
                    g = this.points, f = [], h = this.requireSorting, k = a.length === g.length, e, n, p, m = !0; this.xIncrement = null; a.forEach(function (a, b) { var n = l(a) && this.pointClass.prototype.optionsToObject.call({ series: this }, a) || {}, m = n.x; if (n.id || M(m)) { if (n = this.findPointIndex(n, p), -1 === n || "undefined" === typeof n ? f.push(a) : g[n] && a !== d.data[n] ? (g[n].update(a, !1, null, !1), g[n].touched = !0, h && (p = n + 1)) : g[n] && (g[n].touched = !0), !k || b !== n || c && c.enabled || this.hasDerivedData) e = !0 } else f.push(a) }, this); if (e) for (a = g.length; a--;)(n = g[a]) && !n.touched &&
                        n.remove && n.remove(!1, b); else !k || c && c.enabled ? m = !1 : (a.forEach(function (a, b) { a !== g[b].y && g[b].update && g[b].update(a, !1, null, !1) }), f.length = 0); g.forEach(function (a) { a && (a.touched = !1) }); if (!m) return !1; f.forEach(function (a) { this.addPoint(a, !1, null, null, !1) }, this); null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = v(this.xData), this.autoIncrement()); return !0
                }; c.prototype.setData = function (a, b, d, c) {
                    void 0 === b && (b = !0); var g = this, f = g.points, h = f && f.length || 0, l = g.options, k = g.chart, e = l.dataSorting,
                        p = g.xAxis, m = l.turboThreshold, r = this.xData, A = this.yData, u = g.pointArrayMap; u = u && u.length; var v = l.keys, B, z = 0, G = 1, E = null; if (!k.options.chart.allowMutatingData) { l.data && delete g.options.data; g.userOptions.data && delete g.userOptions.data; var D = R(!0, a) } a = D || a || []; D = a.length; e && e.enabled && (a = this.sortData(a)); k.options.chart.allowMutatingData && !1 !== c && D && h && !g.cropped && !g.hasGroupedData && g.visible && !g.boosted && (B = this.updateData(a, d)); if (!B) {
                            g.xIncrement = null; g.colorCounter = 0; this.parallelArrays.forEach(function (a) {
                                g[a +
                                "Data"].length = 0
                            }); if (m && D > m) if (E = g.getFirstValidPoint(a), M(E)) for (d = 0; d < D; d++)r[d] = this.autoIncrement(), A[d] = a[d]; else if (J(E)) if (u) if (E.length === u) for (d = 0; d < D; d++)r[d] = this.autoIncrement(), A[d] = a[d]; else for (d = 0; d < D; d++)c = a[d], r[d] = c[0], A[d] = c.slice(1, u + 1); else if (v && (z = v.indexOf("x"), G = v.indexOf("y"), z = 0 <= z ? z : 0, G = 0 <= G ? G : 1), 1 === E.length && (G = 0), z === G) for (d = 0; d < D; d++)r[d] = this.autoIncrement(), A[d] = a[d][G]; else for (d = 0; d < D; d++)c = a[d], r[d] = c[z], A[d] = c[G]; else n(12, !1, k); else for (d = 0; d < D; d++)"undefined" !==
                                typeof a[d] && (c = { series: g }, g.pointClass.prototype.applyOptions.apply(c, [a[d]]), g.updateParallelArrays(c, d)); A && K(A[0]) && n(14, !0, k); g.data = []; g.options.data = g.userOptions.data = a; for (d = h; d--;)f[d] && f[d].destroy && f[d].destroy(); p && (p.minRange = p.userMinRange); g.isDirty = k.isDirtyBox = !0; g.isDirtyData = !!f; d = !1
                        } "point" === l.legendType && (this.processData(), this.generatePoints()); b && k.redraw(d)
                }; c.prototype.sortData = function (a) {
                    var b = this, d = b.options.dataSorting.sortKey || "y", c = function (a, b) {
                        return l(b) && a.pointClass.prototype.optionsToObject.call({ series: a },
                            b) || {}
                    }; a.forEach(function (d, g) { a[g] = c(b, d); a[g].index = g }, this); a.concat().sort(function (a, b) { a = H(d, a); b = H(d, b); return b < a ? -1 : b > a ? 1 : 0 }).forEach(function (a, b) { a.x = b }, this); b.linkedSeries && b.linkedSeries.forEach(function (b) { var d = b.options, g = d.data; d.dataSorting && d.dataSorting.enabled || !g || (g.forEach(function (d, f) { g[f] = c(b, d); a[f] && (g[f].x = a[f].x, g[f].index = f) }), b.setData(g, !1)) }); return a
                }; c.prototype.getProcessedData = function (a) {
                    var b = this.xAxis, d = this.options, c = d.cropThreshold, g = a || this.getExtremesFromAll ||
                        d.getExtremesFromAll, f = this.isCartesian; a = b && b.val2lin; d = !(!b || !b.logarithmic); var h = 0, l = this.xData, k = this.yData, e = this.requireSorting; var p = !1; var m = l.length; if (b) { p = b.getExtremes(); var r = p.min; var A = p.max; p = !(!b.categories || b.names.length) } if (f && this.sorted && !g && (!c || m > c || this.forceCrop)) if (l[m - 1] < r || l[0] > A) l = [], k = []; else if (this.yData && (l[0] < r || l[m - 1] > A)) { var u = this.cropData(this.xData, this.yData, r, A); l = u.xData; k = u.yData; h = u.start; u = !0 } for (c = l.length || 1; --c;)if (b = d ? a(l[c]) - a(l[c - 1]) : l[c] - l[c - 1],
                            0 < b && ("undefined" === typeof v || b < v)) var v = b; else 0 > b && e && !p && (n(15, !1, this.chart), e = !1); return { xData: l, yData: k, cropped: u, cropStart: h, closestPointRange: v }
                }; c.prototype.processData = function (a) { var b = this.xAxis; if (this.isCartesian && !this.isDirty && !b.isDirty && !this.yAxis.isDirty && !a) return !1; a = this.getProcessedData(); this.cropped = a.cropped; this.cropStart = a.cropStart; this.processedXData = a.xData; this.processedYData = a.yData; this.closestPointRange = this.basePointRange = a.closestPointRange; A(this, "afterProcessData") };
                c.prototype.cropData = function (a, b, d, c, g) { var f = a.length, h, l = 0, k = f; g = L(g, this.cropShoulder); for (h = 0; h < f; h++)if (a[h] >= d) { l = Math.max(0, h - g); break } for (d = h; d < f; d++)if (a[d] > c) { k = d + g; break } return { xData: a.slice(l, k), yData: b.slice(l, k), start: l, end: k } }; c.prototype.generatePoints = function () {
                    var a = this.options, b = this.processedData || a.data, d = this.processedXData, c = this.processedYData, g = this.pointClass, f = d.length, h = this.cropStart || 0, l = this.hasGroupedData, k = a.keys, e = []; a = a.dataGrouping && a.dataGrouping.groupAll ? h :
                        0; var n, p, m = this.data; if (!m && !l) { var r = []; r.length = b.length; m = this.data = r } k && l && (this.options.keys = !1); for (p = 0; p < f; p++) { r = h + p; if (l) { var u = (new g).init(this, [d[p]].concat(I(c[p]))); u.dataGroup = this.groupMap[a + p]; u.dataGroup.options && (u.options = u.dataGroup.options, E(u, u.dataGroup.options), delete u.dataLabels) } else (u = m[r]) || "undefined" === typeof b[r] || (m[r] = u = (new g).init(this, b[r], d[p])); u && (u.index = l ? a + p : r, e[p] = u) } this.options.keys = k; if (m && (f !== (n = m.length) || l)) for (p = 0; p < n; p++)p !== h || l || (p += f), m[p] &&
                            (m[p].destroyElements(), m[p].plotX = void 0); this.data = m; this.points = e; A(this, "afterGeneratePoints")
                }; c.prototype.getXExtremes = function (a) { return { min: B(a), max: v(a) } }; c.prototype.getExtremes = function (a, b) {
                    var d = this.xAxis, c = this.yAxis, g = this.processedXData || this.xData, f = [], h = this.requireSorting ? this.cropShoulder : 0; c = c ? c.positiveValuesOnly : !1; var l, k = 0, e = 0, n = 0; a = a || this.stackedYData || this.processedYData || []; var p = a.length; if (d) { var m = d.getExtremes(); k = m.min; e = m.max } for (l = 0; l < p; l++) {
                        var r = g[l]; m = a[l];
                        var u = (M(m) || J(m)) && (m.length || 0 < m || !c); r = b || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !d || (g[l + h] || r) >= k && (g[l - h] || r) <= e; if (u && r) if (u = m.length) for (; u--;)M(m[u]) && (f[n++] = m[u]); else f[n++] = m
                    } a = { activeYData: f, dataMin: B(f), dataMax: v(f) }; A(this, "afterGetExtremes", { dataExtremes: a }); return a
                }; c.prototype.applyExtremes = function () { var a = this.getExtremes(); this.dataMin = a.dataMin; this.dataMax = a.dataMax; return a }; c.prototype.getFirstValidPoint = function (a) {
                    for (var b = a.length, d =
                        0, c = null; null === c && d < b;)c = a[d], d++; return c
                }; c.prototype.translate = function () {
                    this.processedXData || this.processData(); this.generatePoints(); var a = this.options, b = a.stacking, d = this.xAxis, c = d.categories, g = this.enabledDataSorting, f = this.yAxis, h = this.points, k = h.length, e = this.pointPlacementToXValue(), n = !!e, p = a.threshold, m = a.startFromThreshold ? p : 0, u = this.zoneAxis || "y", v, B, G = Number.MAX_VALUE; for (v = 0; v < k; v++) {
                        var E = h[v], D = E.x, t = void 0, H = void 0, y = E.y, q = E.low, x = b && f.stacking && f.stacking.stacks[(this.negStacks &&
                            y < (m ? 0 : p) ? "-" : "") + this.stackKey]; if (f.positiveValuesOnly && !f.validatePositiveValue(y) || d.positiveValuesOnly && !d.validatePositiveValue(D)) E.isNull = !0; E.plotX = B = z(r(d.translate(D, 0, 0, 0, 1, e, "flags" === this.type), -1E5, 1E5)); if (b && this.visible && x && x[D]) {
                                var w = this.getStackIndicator(w, D, this.index); !E.isNull && w.key && (t = x[D], H = t.points[w.key]); t && J(H) && (q = H[0], y = H[1], q === m && w.key === x[D].base && (q = L(M(p) ? p : f.min)), f.positiveValuesOnly && l(q) && 0 >= q && (q = void 0), E.total = E.stackTotal = L(t.total), E.percentage = l(E.y) &&
                                    t.total ? E.y / t.total * 100 : void 0, E.stackY = y, this.irregularWidths || t.setOffset(this.pointXOffset || 0, this.barW || 0, void 0, void 0, void 0, this.xAxis))
                            } E.yBottom = l(q) ? r(f.translate(q, 0, 1, 0, 1), -1E5, 1E5) : void 0; this.dataModify && (y = this.dataModify.modifyValue(y, v)); E.plotY = void 0; M(y) && (t = f.translate(y, !1, !0, !1, !0), "undefined" !== typeof t && (E.plotY = r(t, -1E5, 1E5))); E.isInside = this.isPointInside(E); E.clientX = n ? z(d.translate(D, 0, 0, 0, 1, e)) : B; E.negative = E[u] < (a[u + "Threshold"] || p || 0); E.category = L(c && c[E.x], E.x); if (!E.isNull &&
                                !1 !== E.visible) { "undefined" !== typeof C && (G = Math.min(G, Math.abs(B - C))); var C = B } E.zone = this.zones.length ? E.getZone() : void 0; !E.graphic && this.group && g && (E.isNew = !0)
                    } this.closestPointRangePx = G; A(this, "afterTranslate")
                }; c.prototype.getValidPoints = function (a, b, d) { var c = this.chart; return (a || this.points || []).filter(function (a) { return b && !c.isInsidePlot(a.plotX, a.plotY, { inverted: c.inverted }) ? !1 : !1 !== a.visible && (d || !a.isNull) }) }; c.prototype.getClipBox = function () {
                    var a = this.chart, b = this.xAxis, d = this.yAxis, c =
                        R(a.clipBox); b && b.len !== a.plotSizeX && (c.width = b.len); d && d.len !== a.plotSizeY && (c.height = d.len); return c
                }; c.prototype.getSharedClipKey = function () { return this.sharedClipKey = (this.options.xAxis || 0) + "," + (this.options.yAxis || 0) }; c.prototype.setClip = function () { var a = this.chart, b = this.group, d = this.markerGroup, c = a.sharedClips; a = a.renderer; var g = this.getClipBox(), f = this.getSharedClipKey(), h = c[f]; h ? h.animate(g) : c[f] = h = a.clipRect(g); b && b.clip(!1 === this.options.clip ? void 0 : h); d && d.clip() }; c.prototype.animate =
                    function (a) {
                        var b = this.chart, d = this.group, c = this.markerGroup, g = b.inverted, f = k(this.options.animation), h = [this.getSharedClipKey(), f.duration, f.easing, f.defer].join(), l = b.sharedClips[h], e = b.sharedClips[h + "m"]; if (a && d) f = this.getClipBox(), l ? l.attr("height", f.height) : (f.width = 0, g && (f.x = b.plotHeight), l = b.renderer.clipRect(f), b.sharedClips[h] = l, e = b.renderer.clipRect({ x: -99, y: -99, width: g ? b.plotWidth + 199 : 99, height: g ? 99 : b.plotHeight + 199 }), b.sharedClips[h + "m"] = e), d.clip(l), c && c.clip(e); else if (l && !l.hasClass("highcharts-animating")) {
                            b =
                            this.getClipBox(); var n = f.step; c && c.element.childNodes.length && (f.step = function (a, b) { n && n.apply(b, arguments); "width" === b.prop && e && e.element && e.attr(g ? "height" : "width", a + 99) }); l.addClass("highcharts-animating").animate(b, f)
                        }
                    }; c.prototype.afterAnimate = function () { var a = this; this.setClip(); Y(this.chart.sharedClips, function (b, d, c) { b && !a.chart.container.querySelector('[clip-path="url(#'.concat(b.id, ')"]')) && (b.destroy(), delete c[d]) }); this.finishedAnimating = !0; A(this, "afterAnimate") }; c.prototype.drawPoints =
                        function (a) {
                            void 0 === a && (a = this.points); var b = this.chart, d = b.styledMode, c = this.colorAxis, g = this.options.marker, f = this[this.specialGroup || "markerGroup"], h = this.xAxis, l = L(g.enabled, !h || h.isRadial ? !0 : null, this.closestPointRangePx >= g.enabledThreshold * g.radius), k, e; if (!1 !== g.enabled || this._hasPointMarkers) for (k = 0; k < a.length; k++) {
                                var n = a[k]; var p = (e = n.graphic) ? "animate" : "attr"; var m = n.marker || {}; var r = !!n.marker; if ((l && "undefined" === typeof m.enabled || m.enabled) && !n.isNull && !1 !== n.visible) {
                                    var u = L(m.symbol,
                                        this.symbol, "rect"); var A = this.markerAttribs(n, n.selected && "select"); this.enabledDataSorting && (n.startXPos = h.reversed ? -(A.width || 0) : h.width); var v = !1 !== n.isInside; !e && v && (0 < (A.width || 0) || n.hasImage) && (n.graphic = e = b.renderer.symbol(u, A.x, A.y, A.width, A.height, r ? m : g).add(f), this.enabledDataSorting && b.hasRendered && (e.attr({ x: n.startXPos }), p = "animate")); e && "animate" === p && e[v ? "show" : "hide"](v).animate(A); if (e) if (m = this.pointAttribs(n, d || !n.selected ? void 0 : "select"), d) c && e.css({ fill: m.fill }); else e[p](m);
                                    e && e.addClass(n.getClassName(), !0)
                                } else e && (n.graphic = e.destroy())
                            }
                        }; c.prototype.markerAttribs = function (a, b) { var d = this.options, c = d.marker, g = a.marker || {}, f = g.symbol || c.symbol, h = {}, l = L(g.radius, c && c.radius); b && (c = c.states[b], b = g.states && g.states[b], l = L(b && b.radius, c && c.radius, l && l + (c && c.radiusPlus || 0))); a.hasImage = f && 0 === f.indexOf("url"); a.hasImage && (l = 0); a = a.pos(); M(l) && a && (h.x = a[0] - l, h.y = a[1] - l, d.crisp && (h.x = Math.floor(h.x))); l && (h.width = h.height = 2 * l); return h }; c.prototype.pointAttribs = function (a,
                            b) { var d = this.options.marker, c = a && a.options, g = c && c.marker || {}, f = c && c.color, h = a && a.color, l = a && a.zone && a.zone.color, k = this.color; a = L(g.lineWidth, d.lineWidth); c = 1; k = f || l || h || k; f = g.fillColor || d.fillColor || k; h = g.lineColor || d.lineColor || k; b = b || "normal"; d = d.states[b] || {}; b = g.states && g.states[b] || {}; a = L(b.lineWidth, d.lineWidth, a + L(b.lineWidthPlus, d.lineWidthPlus, 0)); f = b.fillColor || d.fillColor || f; h = b.lineColor || d.lineColor || h; c = L(b.opacity, d.opacity, c); return { stroke: h, "stroke-width": a, fill: f, opacity: c } }; c.prototype.destroy =
                                function (a) {
                                    var b = this, d = b.chart, c = /AppleWebKit\/533/.test(G.navigator.userAgent), g = b.data || [], f, h, l, k; A(b, "destroy", { keepEventsForUpdate: a }); this.removeEvents(a); (b.axisTypes || []).forEach(function (a) { (k = b[a]) && k.series && (u(k.series, b), k.isDirty = k.forceRedraw = !0) }); b.legendItem && b.chart.legend.destroyItem(b); for (h = g.length; h--;)(l = g[h]) && l.destroy && l.destroy(); b.clips && b.clips.forEach(function (a) { return a.destroy() }); m.clearTimeout(b.animationTimeout); Y(b, function (a, b) {
                                        a instanceof t && !a.survive &&
                                        (f = c && "group" === b ? "hide" : "destroy", a[f]())
                                    }); d.hoverSeries === b && (d.hoverSeries = void 0); u(d.series, b); d.orderSeries(); Y(b, function (d, c) { a && "hcEvents" === c || delete b[c] })
                                }; c.prototype.applyZones = function () {
                                    var a = this, b = this.chart, d = b.renderer, c = this.zones, g = this.clips || [], f = this.graph, h = this.area, l = Math.max(b.plotWidth, b.plotHeight), k = this[(this.zoneAxis || "y") + "Axis"], e = b.inverted, n, p, m, u, A, v, B, z, G = !1; if (c.length && (f || h) && k && "undefined" !== typeof k.min) {
                                        var E = k.reversed; var D = k.horiz; f && !this.showLine &&
                                            f.hide(); h && h.hide(); var t = k.getExtremes(); c.forEach(function (c, H) {
                                                n = E ? D ? b.plotWidth : 0 : D ? 0 : k.toPixels(t.min) || 0; n = r(L(p, n), 0, l); p = r(Math.round(k.toPixels(L(c.value, t.max), !0) || 0), 0, l); G && (n = p = k.toPixels(t.max)); u = Math.abs(n - p); A = Math.min(n, p); v = Math.max(n, p); k.isXAxis ? (m = { x: e ? v : A, y: 0, width: u, height: l }, D || (m.x = b.plotHeight - m.x)) : (m = { x: 0, y: e ? v : A, width: l, height: u }, D && (m.y = b.plotWidth - m.y)); e && d.isVML && (m = k.isXAxis ? { x: 0, y: E ? A : v, height: m.width, width: b.chartWidth } : {
                                                    x: m.y - b.plotLeft - b.spacingBox.x, y: 0, width: m.height,
                                                    height: b.chartHeight
                                                }); g[H] ? g[H].animate(m) : g[H] = d.clipRect(m); B = a["zone-area-" + H]; z = a["zone-graph-" + H]; f && z && z.clip(g[H]); h && B && B.clip(g[H]); G = c.value > t.max; a.resetZones && 0 === p && (p = void 0)
                                            }); this.clips = g
                                    } else a.visible && (f && f.show(), h && h.show())
                                }; c.prototype.plotGroup = function (a, b, d, c, g) {
                                    var f = this[a], h = !f; d = { visibility: d, zIndex: c || .1 }; "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (d.opacity = this.opacity); h && (this[a] = f = this.chart.renderer.g().add(g)); f.addClass("highcharts-" +
                                        b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (l(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0); f.attr(d)[h ? "attr" : "animate"](this.getPlotBox(b)); return f
                                }; c.prototype.getPlotBox = function (a) {
                                    var b = this.xAxis, d = this.yAxis, c = this.chart; a = c.inverted && !c.polar && b && !1 !== this.invertible && "series" === a; c.inverted && (b = d, d = this.xAxis); return {
                                        translateX: b ? b.left : c.plotLeft, translateY: d ?
                                            d.top : c.plotTop, rotation: a ? 90 : 0, rotationOriginX: a ? (b.len - d.len) / 2 : 0, rotationOriginY: a ? (b.len + d.len) / 2 : 0, scaleX: a ? -1 : 1, scaleY: 1
                                    }
                                }; c.prototype.removeEvents = function (a) { a || da(this); this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) { a() }), this.eventsToUnbind.length = 0) }; c.prototype.render = function () {
                                    var a = this, b = a.chart, d = a.options, c = k(d.animation), g = a.visible ? "inherit" : "hidden", f = d.zIndex, h = a.hasRendered, l = b.seriesGroup; b = !a.finishedAnimating && b.renderer.isSVG ? c.duration : 0; A(this, "render");
                                    a.plotGroup("group", "series", g, f, l); a.markerGroup = a.plotGroup("markerGroup", "markers", g, f, l); !1 !== d.clip && a.setClip(); a.animate && b && a.animate(!0); a.drawGraph && (a.drawGraph(), a.applyZones()); a.visible && a.drawPoints(); a.drawDataLabels && a.drawDataLabels(); a.redrawPoints && a.redrawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.animate && b && a.animate(); h || (b && c.defer && (b += c.defer), a.animationTimeout = ca(function () { a.afterAnimate() }, b || 0)); a.isDirty = !1; a.hasRendered = !0; A(a, "afterRender")
                                };
                c.prototype.redraw = function () { var a = this.isDirty || this.isDirtyData; this.translate(); this.render(); a && delete this.kdTree }; c.prototype.searchPoint = function (a, b) { var d = this.xAxis, c = this.yAxis, g = this.chart.inverted; return this.searchKDTree({ clientX: g ? d.len - a.chartY + d.pos : a.chartX - d.pos, plotY: g ? c.len - a.chartX + c.pos : a.chartY - c.pos }, b, a) }; c.prototype.buildKDTree = function (a) {
                    function b(a, c, g) {
                        var f = a && a.length; if (f) {
                            var h = d.kdAxisArray[c % g]; a.sort(function (a, b) { return a[h] - b[h] }); f = Math.floor(f / 2); return {
                                point: a[f],
                                left: b(a.slice(0, f), c + 1, g), right: b(a.slice(f + 1), c + 1, g)
                            }
                        }
                    } this.buildingKdTree = !0; var d = this, c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete d.kdTree; ca(function () { d.kdTree = b(d.getValidPoints(null, !d.directTouch), c, c); d.buildingKdTree = !1 }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1)
                }; c.prototype.searchKDTree = function (a, b, d) {
                    function c(a, b, d, e) {
                        var n = b.point, p = g.kdAxisArray[d % e], m = n, r = l(a[f]) && l(n[f]) ? Math.pow(a[f] - n[f], 2) : null; var u = l(a[h]) && l(n[h]) ? Math.pow(a[h] - n[h], 2) : null; u = (r || 0) + (u ||
                            0); n.dist = l(u) ? Math.sqrt(u) : Number.MAX_VALUE; n.distX = l(r) ? Math.sqrt(r) : Number.MAX_VALUE; p = a[p] - n[p]; u = 0 > p ? "left" : "right"; r = 0 > p ? "right" : "left"; b[u] && (u = c(a, b[u], d + 1, e), m = u[k] < m[k] ? u : n); b[r] && Math.sqrt(p * p) < m[k] && (a = c(a, b[r], d + 1, e), m = a[k] < m[k] ? a : m); return m
                    } var g = this, f = this.kdAxisArray[0], h = this.kdAxisArray[1], k = b ? "distX" : "dist"; b = -1 < g.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(d); if (this.kdTree) return c(a, this.kdTree, b, b)
                }; c.prototype.pointPlacementToXValue =
                    function () { var a = this.options, b = a.pointRange, d = this.xAxis; a = a.pointPlacement; "between" === a && (a = d.reversed ? -.5 : .5); return M(a) ? a * (b || d.pointRange) : 0 }; c.prototype.isPointInside = function (a) { var b = this.chart, d = this.xAxis, c = this.yAxis; return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= (c ? c.len : b.plotHeight) && 0 <= a.plotX && a.plotX <= (d ? d.len : b.plotWidth) }; c.prototype.drawTracker = function () {
                        var a = this, b = a.options, d = b.trackByArea, c = [].concat(d ? a.areaPath : a.graphPath), g = a.chart,
                        f = g.pointer, l = g.renderer, k = g.options.tooltip.snap, e = a.tracker, n = function (b) { if (g.hoverSeries !== a) a.onMouseOver() }, m = "rgba(192,192,192," + (p ? .0001 : .002) + ")"; e ? e.attr({ d: c }) : a.graph && (a.tracker = l.path(c).attr({ visibility: a.visible ? "inherit" : "hidden", zIndex: 2 }).addClass(d ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), g.styledMode || a.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: m, fill: d ? m : "none", "stroke-width": a.graph.strokeWidth() + (d ? 0 : 2 * k) }), [a.tracker,
                        a.markerGroup, a.dataLabelsGroup].forEach(function (a) { if (a && (a.addClass("highcharts-tracker").on("mouseover", n).on("mouseout", function (a) { f.onTrackerMouseOut(a) }), b.cursor && !g.styledMode && a.css({ cursor: b.cursor }), h)) a.on("touchstart", n) })); A(this, "afterDrawTracker")
                    }; c.prototype.addPoint = function (a, b, d, c, g) {
                        var f = this.options, h = this.data, l = this.chart, k = this.xAxis; k = k && k.hasNames && k.names; var e = f.data, n = this.xData, p; b = L(b, !0); var m = { series: this }; this.pointClass.prototype.applyOptions.apply(m, [a]); var r =
                            m.x; var u = n.length; if (this.requireSorting && r < n[u - 1]) for (p = !0; u && n[u - 1] > r;)u--; this.updateParallelArrays(m, "splice", u, 0, 0); this.updateParallelArrays(m, u); k && m.name && (k[r] = m.name); e.splice(u, 0, a); if (p || this.processedData) this.data.splice(u, 0, null), this.processData(); "point" === f.legendType && this.generatePoints(); d && (h[0] && h[0].remove ? h[0].remove(!1) : (h.shift(), this.updateParallelArrays(m, "shift"), e.shift())); !1 !== g && A(this, "addPoint", { point: m }); this.isDirtyData = this.isDirty = !0; b && l.redraw(c)
                    }; c.prototype.removePoint =
                        function (a, b, c) { var g = this, f = g.data, h = f[a], l = g.points, k = g.chart, e = function () { l && l.length === f.length && l.splice(a, 1); f.splice(a, 1); g.options.data.splice(a, 1); g.updateParallelArrays(h || { series: g }, "splice", a, 1); h && h.destroy(); g.isDirty = !0; g.isDirtyData = !0; b && k.redraw() }; d(c, k); b = L(b, !0); h ? h.firePointEvent("remove", null, e) : e() }; c.prototype.remove = function (a, b, d, c) {
                            function g() { f.destroy(c); h.isDirtyLegend = h.isDirtyBox = !0; h.linkSeries(); L(a, !0) && h.redraw(b) } var f = this, h = f.chart; !1 !== d ? A(f, "remove", null,
                                g) : g()
                        }; c.prototype.update = function (b, d) {
                            b = a(b, this.userOptions); A(this, "update", { options: b }); var c = this, g = c.chart, f = c.userOptions, h = c.initialType || c.type, l = g.options.plotOptions, k = D[h].prototype, e = c.finishedAnimating && { animation: !1 }, p = {}, m = ["eventOptions", "navigatorSeries", "baseSeries"], r = b.type || f.type || g.options.chart.type, u = !(this.hasDerivedData || r && r !== this.type || "undefined" !== typeof b.pointStart || "undefined" !== typeof b.pointInterval || "undefined" !== typeof b.relativeXValue || b.joinBy || b.mapData ||
                                c.hasOptionChanged("dataGrouping") || c.hasOptionChanged("pointStart") || c.hasOptionChanged("pointInterval") || c.hasOptionChanged("pointIntervalUnit") || c.hasOptionChanged("keys")); r = r || h; u && (m.push("data", "isDirtyData", "points", "processedData", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "level", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== b.visible && m.push("area", "graph"), c.parallelArrays.forEach(function (a) { m.push(a + "Data") }),
                                    b.data && (b.dataSorting && E(c.options.dataSorting, b.dataSorting), this.setData(b.data, !1))); b = R(f, e, { index: "undefined" === typeof f.index ? c.index : f.index, pointStart: L(l && l.series && l.series.pointStart, f.pointStart, c.xData[0]) }, !u && { data: c.options.data }, b); u && b.data && (b.data = c.options.data); m = ["group", "markerGroup", "dataLabelsGroup", "transformGroup", "shadowGroup"].concat(m); m.forEach(function (a) { m[a] = c[a]; delete c[a] }); l = !1; if (D[r]) {
                                        if (l = r !== c.type, c.remove(!1, !1, !1, !0), l) if (Object.setPrototypeOf) Object.setPrototypeOf(c,
                                            D[r].prototype); else { e = Object.hasOwnProperty.call(c, "hcEvents") && c.hcEvents; for (v in k) c[v] = void 0; E(c, D[r].prototype); e ? c.hcEvents = e : delete c.hcEvents }
                                    } else n(17, !0, g, { missingModuleFor: r }); m.forEach(function (a) { c[a] = m[a] }); c.init(g, b); if (u && this.points) {
                                        b = c.options; if (!1 === b.visible) p.graphic = 1, p.dataLabel = 1; else if (!c._hasPointLabels) {
                                            k = b.marker; var v = b.dataLabels; f = f.marker || {}; !k || !1 !== k.enabled && f.symbol === k.symbol && f.height === k.height && f.width === k.width || (p.graphic = 1); v && !1 === v.enabled && (p.dataLabel =
                                                1)
                                        } f = 0; for (k = this.points; f < k.length; f++)(v = k[f]) && v.series && (v.resolveColor(), Object.keys(p).length && v.destroyElements(p), !1 === b.showInLegend && v.legendItem && g.legend.destroyItem(v))
                                    } c.initialType = h; g.linkSeries(); l && c.linkedSeries.length && (c.isDirtyData = !0); A(this, "afterUpdate"); L(d, !0) && g.redraw(u ? void 0 : !1)
                        }; c.prototype.setName = function (a) { this.name = this.options.name = this.userOptions.name = a; this.chart.isDirtyLegend = !0 }; c.prototype.hasOptionChanged = function (a) {
                            var b = this.options[a], d = this.chart.options.plotOptions,
                            c = this.userOptions[a]; return c ? b !== c : b !== L(d && d[this.type] && d[this.type][a], d && d.series && d.series[a], b)
                        }; c.prototype.onMouseOver = function () { var a = this.chart, b = a.hoverSeries; a.pointer.setHoverChartIndex(); if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && A(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this }; c.prototype.onMouseOut = function () {
                            var a = this.options, b = this.chart, d = b.tooltip, c = b.hoverPoint; b.hoverSeries = null; if (c) c.onMouseOut(); this && a.events.mouseOut && A(this, "mouseOut");
                            !d || this.stickyTracking || d.shared && !this.noSharedTooltip || d.hide(); b.series.forEach(function (a) { a.setState("", !0) })
                        }; c.prototype.setState = function (a, b) {
                            var d = this, c = d.options, g = d.graph, f = c.inactiveOtherPoints, h = c.states, l = L(h[a || "normal"] && h[a || "normal"].animation, d.chart.options.chart.animation), k = c.lineWidth, e = 0, n = c.opacity; a = a || ""; if (d.state !== a && ([d.group, d.markerGroup, d.dataLabelsGroup].forEach(function (b) {
                                b && (d.state && b.removeClass("highcharts-series-" + d.state), a && b.addClass("highcharts-series-" +
                                    a))
                            }), d.state = a, !d.chart.styledMode)) { if (h[a] && !1 === h[a].enabled) return; a && (k = h[a].lineWidth || k + (h[a].lineWidthPlus || 0), n = L(h[a].opacity, n)); if (g && !g.dashstyle && M(k)) for (c = { "stroke-width": k }, g.animate(c, l); d["zone-graph-" + e];)d["zone-graph-" + e].animate(c, l), e += 1; f || [d.group, d.markerGroup, d.dataLabelsGroup, d.labelBySeries].forEach(function (a) { a && a.animate({ opacity: n }, l) }) } b && f && d.points && d.setAllPointsToState(a || void 0)
                        }; c.prototype.setAllPointsToState = function (a) {
                            this.points.forEach(function (b) {
                                b.setState &&
                                b.setState(a)
                            })
                        }; c.prototype.setVisible = function (a, b) {
                            var d = this, c = d.chart, g = c.options.chart.ignoreHiddenSeries, f = d.visible, h = (d.visible = a = d.options.visible = d.userOptions.visible = "undefined" === typeof a ? !f : a) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) { if (d[a]) d[a][h]() }); if (c.hoverSeries === d || (c.hoverPoint && c.hoverPoint.series) === d) d.onMouseOut(); d.legendItem && c.legend.colorizeItem(d, a); d.isDirty = !0; d.options.stacking && c.series.forEach(function (a) {
                                a.options.stacking &&
                                a.visible && (a.isDirty = !0)
                            }); d.linkedSeries.forEach(function (b) { b.setVisible(a, !1) }); g && (c.isDirtyBox = !0); A(d, h); !1 !== b && c.redraw()
                        }; c.prototype.show = function () { this.setVisible(!0) }; c.prototype.hide = function () { this.setVisible(!1) }; c.prototype.select = function (a) { this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); A(this, a ? "select" : "unselect") }; c.prototype.shouldShowTooltip = function (a, b, d) {
                            void 0 === d && (d = {}); d.series = this; d.visiblePlotOnly =
                                !0; return this.chart.isInsidePlot(a, b, d)
                        }; c.defaultOptions = F; c.types = y.seriesTypes; c.registerType = y.registerSeriesType; return c
            }(); E(c.prototype, { axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: !1, drawLegendSymbol: q.drawLineMarker, isCartesian: !0, kdAxisArray: ["clientX", "plotY"], parallelArrays: ["x", "y"], pointClass: w, requireSorting: !0, sorted: !0 }); y.series = c; ""; ""; return c
        }); I(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"],
        e["Core/Chart/Chart.js"], e["Core/Series/Series.js"], e["Core/Renderer/RendererRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w) {
            var F = c.stop, y = w.addEvent, t = w.createElement, m = w.defined, k = w.merge, d = w.pick; y(x, "afterSetChartSize", function (b) {
                var d = this.options.chart.scrollablePlotArea, c = d && d.minWidth; d = d && d.minHeight; if (!this.renderer.forExport) {
                    if (c) {
                        if (this.scrollablePixelsX = c = Math.max(0, c - this.chartWidth)) {
                            this.scrollablePlotBox = this.renderer.scrollablePlotBox = k(this.plotBox); this.plotBox.width =
                                this.plotWidth += c; this.inverted ? this.clipBox.height += c : this.clipBox.width += c; var p = { 1: { name: "right", value: c } }
                        }
                    } else d && (this.scrollablePixelsY = c = Math.max(0, d - this.chartHeight), m(c) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = k(this.plotBox), this.plotBox.height = this.plotHeight += c, this.inverted ? this.clipBox.width += c : this.clipBox.height += c, p = { 2: { name: "bottom", value: c } })); p && !b.skipAxes && this.axes.forEach(function (b) {
                        p[b.side] ? b.getPlotLinePath = function () {
                            var d = p[b.side].name, c = this[d]; this[d] =
                                c - p[b.side].value; var f = e.prototype.getPlotLinePath.apply(this, arguments); this[d] = c; return f
                        } : (b.setAxisSize(), b.setAxisTranslation())
                    })
                }
            }); y(x, "render", function () { this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed() }); x.prototype.setUpScrolling = function () {
                var b = this, d = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" }; this.scrollablePixelsX && (d.overflowX = "auto"); this.scrollablePixelsY &&
                    (d.overflowY = "auto"); this.scrollingParent = t("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo); this.scrollingContainer = t("div", { className: "highcharts-scrolling" }, d, this.scrollingParent); var c; y(this.scrollingContainer, "scroll", function () { b.pointer && (delete b.pointer.chartPosition, b.hoverPoint && (c = b.hoverPoint), b.pointer.runPointActions(void 0, c, !0)) }); this.innerContainer = t("div", { className: "highcharts-inner-container" }, null, this.scrollingContainer); this.innerContainer.appendChild(this.container);
                this.setUpScrolling = null
            }; x.prototype.moveFixedElements = function () {
                var b = this.container, d = this.fixedRenderer, c = ".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), k; this.scrollablePixelsX && !this.inverted ?
                    k = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? k = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? k = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (k = ".highcharts-yaxis"); k && c.push("" + k + ":not(.highcharts-radial-axis)", "" + k + "-labels:not(.highcharts-radial-axis-labels)"); c.forEach(function (c) { [].forEach.call(b.querySelectorAll(c), function (b) { (b.namespaceURI === d.SVG_NS ? d.box : d.box.parentNode).appendChild(b); b.style.pointerEvents = "auto" }) })
            }; x.prototype.applyFixed = function () {
                var b =
                    !this.fixedDiv, c = this.options.chart, h = c.scrollablePlotArea, k = q.getRendererType(); b ? (this.fixedDiv = t("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: (c.style && c.style.zIndex || 0) + 2, top: 0 }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = c = new k(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style),
                        this.scrollableMask = c.path().attr({ fill: this.options.chart.backgroundColor || "#fff", "fill-opacity": d(h.opacity, .85), zIndex: -1 }).addClass("highcharts-scrollable-mask").add(), y(this, "afterShowResetZoom", this.moveFixedElements), y(this, "afterApplyDrilldown", this.moveFixedElements), y(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); if (this.scrollableDirty || b) this.scrollableDirty = !1, this.moveFixedElements(); c = this.chartWidth + (this.scrollablePixelsX ||
                            0); k = this.chartHeight + (this.scrollablePixelsY || 0); F(this.container); this.container.style.width = c + "px"; this.container.style.height = k + "px"; this.renderer.boxWrapper.attr({ width: c, height: k, viewBox: [0, 0, c, k].join(" ") }); this.chartBackground.attr({ width: c, height: k }); this.scrollingContainer.style.height = this.chartHeight + "px"; b && (h.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * h.scrollPositionX), h.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * h.scrollPositionY));
                k = this.axisOffset; b = this.plotTop - k[0] - 1; h = this.plotLeft - k[3] - 1; c = this.plotTop + this.plotHeight + k[2] + 1; k = this.plotLeft + this.plotWidth + k[1] + 1; var e = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), m = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0); b = this.scrollablePixelsX ? [["M", 0, b], ["L", this.plotLeft - 1, b], ["L", this.plotLeft - 1, c], ["L", 0, c], ["Z"], ["M", e, b], ["L", this.chartWidth, b], ["L", this.chartWidth, c], ["L", e, c], ["Z"]] : this.scrollablePixelsY ? [["M", h, 0], ["L", h, this.plotTop - 1], ["L", k, this.plotTop -
                    1], ["L", k, 0], ["Z"], ["M", h, m], ["L", h, this.chartHeight], ["L", k, this.chartHeight], ["L", k, m], ["Z"]] : [["M", 0, 0]]; "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: b })
            }; y(e, "afterInit", function () { this.chart.scrollableDirty = !0 }); y(C, "show", function () { this.chart.scrollableDirty = !0 }); ""
        }); I(e, "Core/Axis/Stacking/StackItem.js", [e["Core/FormatUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x) {
            var C = c.format, q = e.series, w = x.destroyObjectProperties, F = x.pick,
            y = x.isNumber; c = function () {
                function c(c, k, d, b, f) { var h = c.chart.inverted, e = c.reversed; this.axis = c; c = this.isNegative = !!d !== !!e; this.options = k = k || {}; this.x = b; this.cumulative = this.total = null; this.points = {}; this.hasValidPoints = !1; this.stack = f; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: k.align || (h ? c ? "left" : "right" : "center"), verticalAlign: k.verticalAlign || (h ? "middle" : c ? "bottom" : "top"), y: k.y, x: k.x }; this.textAlign = k.textAlign || (h ? c ? "right" : "left" : "center") } c.prototype.destroy = function () {
                    w(this,
                        this.axis)
                }; c.prototype.render = function (c) {
                    var k = this.axis.chart, d = this.options, b = d.format; b = b ? C(b, this, k) : d.formatter.call(this); this.label ? this.label.attr({ text: b, visibility: "hidden" }) : (this.label = k.renderer.label(b, null, void 0, d.shape, void 0, void 0, d.useHTML, !1, "stack-labels"), b = { r: d.borderRadius || 0, text: b, padding: F(d.padding, 5), visibility: "hidden" }, k.styledMode || (b.fill = d.backgroundColor, b.stroke = d.borderColor, b["stroke-width"] = d.borderWidth, this.label.css(d.style || {})), this.label.attr(b), this.label.added ||
                        this.label.add(c)); this.label.labelrank = k.plotSizeY
                }; c.prototype.setOffset = function (c, k, d, b, f, h) {
                    var e = this.alignOptions, m = this.axis, D = this.label, v = this.options, B = this.textAlign, r = m.chart; c = this.getStackBox({ xOffset: c, width: k, boxBottom: d, boxTop: b, defaultX: f, xAxis: h }); f = e.verticalAlign; D && c && (k = D.getBBox(), d = D.padding, b = "justify" === F(v.overflow, "justify"), e.x = v.x || 0, e.y = v.y || 0, f = this.adjustStackPosition({ labelBox: k, verticalAlign: f, textAlign: B }), B = f.x, f = f.y, c.x -= B, c.y -= f, D.align(e, !1, c), (B = r.isInsidePlot(D.alignAttr.x +
                        e.x + B, D.alignAttr.y + e.y + f)) || (b = !1), b && q.prototype.justifyDataLabel.call(m, D, e, D.alignAttr, k, c), D.attr({ x: D.alignAttr.x, y: D.alignAttr.y, rotation: v.rotation, rotationOriginX: k.width / 2, rotationOriginY: k.height / 2 }), F(!b && v.crop, !0) && (B = y(D.x) && y(D.y) && r.isInsidePlot(D.x - d + D.width, D.y) && r.isInsidePlot(D.x + d, D.y)), D[B ? "show" : "hide"]())
                }; c.prototype.adjustStackPosition = function (c) {
                    var k = c.labelBox, d = { bottom: 0, middle: 1, top: 2, right: 1, center: 0, left: -1 }; return {
                        x: k.width / 2 + k.width / 2 * d[c.textAlign], y: k.height /
                            2 * d[c.verticalAlign]
                    }
                }; c.prototype.getStackBox = function (c) { var k = this.axis, d = k.chart, b = c.boxTop, f = c.defaultX, h = c.xOffset, e = c.width, m = c.boxBottom; b = k.stacking.usePercentage ? 100 : F(b, this.total, 0); b = k.toPixels(b); c = F(f, (c.xAxis || d.xAxis[0]).toPixels(this.x)) + h; k = k.toPixels(m ? m : 0); k = Math.abs(b - k); m = this.isNegative; return d.inverted ? { x: (m ? b : b - k) - d.plotLeft, y: c - d.plotTop, width: k, height: e } : { x: c - d.plotLeft, y: (m ? b - k : b) - d.plotTop, width: e, height: k } }; return c
            }(); ""; return c
        }); I(e, "Core/Axis/Stacking/StackingAxis.js",
            [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Utilities.js"]], function (c, e, x, C, q) {
                function w() {
                    var a = this, b = a.inverted; a.yAxis.forEach(function (a) { a.stacking && a.stacking.stacks && a.hasVisibleSeries && (a.stacking.oldStacks = a.stacking.stacks) }); a.series.forEach(function (d) {
                        var c = d.xAxis && d.xAxis.options || {}; !d.options.stacking || !0 !== d.visible && !1 !== a.options.chart.ignoreHiddenSeries || (d.stackKey = [d.type,
                        l(d.options.stack, ""), b ? c.top : c.left, b ? c.height : c.width].join())
                    })
                } function F() { var a = this.stacking; if (a) { var b = a.stacks; z(b, function (a, d) { v(a); b[d] = null }); a && a.stackTotalGroup && a.stackTotalGroup.destroy() } } function y() { "yAxis" !== this.coll || this.stacking || (this.stacking = new u(this)) } function t(a, b, d, c) { !D(a) || a.x !== b || c && a.stackKey !== c ? a = { x: b, index: 0, key: c, stackKey: c } : a.index++; a.key = [d, b, a.index].join(); return a } function m() {
                    var a = this, b = a.stackKey, d = a.yAxis.stacking.stacks, c = a.processedXData, f =
                        a[a.options.stacking + "Stacker"], h; f && [b, "-" + b].forEach(function (b) { for (var g = c.length, l, k; g--;)l = c[g], h = a.getStackIndicator(h, l, a.index, b), (k = (l = d[b] && d[b][l]) && l.points[h.key]) && f.call(a, k, l, g) })
                } function k(a, b, d) { b = b.total ? 100 / b.total : 0; a[0] = G(a[0] * b); a[1] = G(a[1] * b); this.stackedYData[d] = a[1] } function d() {
                    var a = this.yAxis.stacking; this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? h.setStackedPoints.call(this, "group") : a &&
                        z(a.stacks, function (b, d) { "group" === d.slice(-5) && (z(b, function (a) { return a.destroy() }), delete a.stacks[d]) })
                } function b(a) {
                    var b = this.chart, d = a || this.options.stacking; if (d && (!0 === this.visible || !1 === b.options.chart.ignoreHiddenSeries)) {
                        var c = this.processedXData, f = this.processedYData, h = [], k = f.length, e = this.options, n = e.threshold, p = l(e.startFromThreshold && n, 0); e = e.stack; a = a ? "" + this.type + ",".concat(d) : this.stackKey; var m = "-" + a, u = this.negStacks; b = "group" === d ? b.yAxis[0] : this.yAxis; var v = b.stacking.stacks,
                            B = b.stacking.oldStacks, z, E; b.stacking.stacksTouched += 1; for (E = 0; E < k; E++) {
                                var t = c[E]; var y = f[E]; var q = this.getStackIndicator(q, t, this.index); var x = q.key; var w = (z = u && y < (p ? 0 : n)) ? m : a; v[w] || (v[w] = {}); v[w][t] || (B[w] && B[w][t] ? (v[w][t] = B[w][t], v[w][t].total = null) : v[w][t] = new C(b, b.options.stackLabels, !!z, t, e)); w = v[w][t]; null !== y ? (w.points[x] = w.points[this.index] = [l(w.cumulative, p)], D(w.cumulative) || (w.base = x), w.touched = b.stacking.stacksTouched, 0 < q.index && !1 === this.singleStacks && (w.points[x][0] = w.points[this.index +
                                    "," + t + ",0"][0])) : w.points[x] = w.points[this.index] = null; "percent" === d ? (z = z ? a : m, u && v[z] && v[z][t] ? (z = v[z][t], w.total = z.total = Math.max(z.total, w.total) + Math.abs(y) || 0) : w.total = G(w.total + (Math.abs(y) || 0))) : "group" === d ? (r(y) && (y = y[0]), null !== y && (w.total = (w.total || 0) + 1)) : w.total = G(w.total + (y || 0)); w.cumulative = "group" === d ? (w.total || 1) - 1 : l(w.cumulative, p) + (y || 0); null !== y && (w.points[x].push(w.cumulative), h[E] = w.cumulative, w.hasValidPoints = !0)
                            } "percent" === d && (b.stacking.usePercentage = !0); "group" !== d && (this.stackedYData =
                                h); b.stacking.oldStacks = {}
                    }
                } var f = c.getDeferredAnimation, h = x.series.prototype, p = q.addEvent, G = q.correctFloat, D = q.defined, v = q.destroyObjectProperties, B = q.fireEvent, r = q.isArray, a = q.isNumber, z = q.objectEach, l = q.pick, u = function () {
                    function b(a) { this.oldStacks = {}; this.stacks = {}; this.stacksTouched = 0; this.axis = a } b.prototype.buildStacks = function () {
                        var a = this.axis, b = a.series, d = a.options.reversedStacks, c = b.length, f; this.usePercentage = !1; for (f = c; f--;) { var h = b[d ? f : c - f - 1]; h.setStackedPoints(); h.setGroupedPoints() } for (f =
                            0; f < c; f++)b[f].modifyStacks(); B(a, "afterBuildStacks")
                    }; b.prototype.cleanStacks = function () { if (this.oldStacks) var a = this.stacks = this.oldStacks; z(a, function (a) { z(a, function (a) { a.cumulative = a.total }) }) }; b.prototype.resetStacks = function () { var b = this; z(this.stacks, function (d) { z(d, function (c, g) { a(c.touched) && c.touched < b.stacksTouched ? (c.destroy(), delete d[g]) : (c.total = null, c.cumulative = null) }) }) }; b.prototype.renderStackTotals = function () {
                        var a = this.axis, b = a.chart, d = b.renderer, c = this.stacks; a = f(b, a.options.stackLabels &&
                            a.options.stackLabels.animation || !1); var h = this.stackTotalGroup = this.stackTotalGroup || d.g("stack-labels").attr({ zIndex: 6, opacity: 0 }).add(); h.translate(b.plotLeft, b.plotTop); z(c, function (a) { z(a, function (a) { a.render(h) }) }); h.animate({ opacity: 1 }, a)
                    }; return b
                }(), n; (function (a) {
                    var c = []; a.compose = function (a, g, f) {
                        -1 === c.indexOf(a) && (c.push(a), p(a, "init", y), p(a, "destroy", F)); -1 === c.indexOf(g) && (c.push(g), g.prototype.getStacks = w); -1 === c.indexOf(f) && (c.push(f), a = f.prototype, a.getStackIndicator = t, a.modifyStacks =
                            m, a.percentStacker = k, a.setGroupedPoints = d, a.setStackedPoints = b)
                    }
                })(n || (n = {})); return n
            }); I(e, "Series/Line/LineSeries.js", [e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = this && this.__extends || function () {
                    var c = function (e, t) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, k) { c.__proto__ = k } || function (c, k) { for (var d in k) k.hasOwnProperty(d) && (c[d] = k[d]) }; return c(e, t) }; return function (e, t) {
                        function m() { this.constructor = e }
                        c(e, t); e.prototype = null === t ? Object.create(t) : (m.prototype = t.prototype, new m)
                    }
                }(), q = x.defined, w = x.merge; x = function (e) {
                    function y() { var c = null !== e && e.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; return c } C(y, e); y.prototype.drawGraph = function () {
                        var c = this, e = this.options, k = (this.gappedPath || this.getGraphPath).call(this), d = this.chart.styledMode, b = [["graph", "highcharts-graph"]]; d || b[0].push(e.lineColor || this.color || "#cccccc", e.dashStyle); b = c.getZonesGraphs(b); b.forEach(function (b,
                            h) { var f = b[0], m = c[f], D = m ? "animate" : "attr"; m ? (m.endX = c.preventGraphAnimation ? null : k.xMap, m.animate({ d: k })) : k.length && (c[f] = m = c.chart.renderer.path(k).addClass(b[1]).attr({ zIndex: 1 }).add(c.group)); m && !d && (f = { stroke: b[2], "stroke-width": e.lineWidth || 0, fill: c.fillGraph && c.color || "none" }, b[3] ? f.dashstyle = b[3] : "square" !== e.linecap && (f["stroke-linecap"] = f["stroke-linejoin"] = "round"), m[D](f).shadow(2 > h && e.shadow)); m && (m.startX = k.xMap, m.isArea = k.isArea) })
                    }; y.prototype.getGraphPath = function (c, e, k) {
                        var d = this,
                        b = d.options, f = [], h = [], p, m = b.step; c = c || d.points; var D = c.reversed; D && c.reverse(); (m = { right: 1, center: 2 }[m] || m && 3) && D && (m = 4 - m); c = this.getValidPoints(c, !1, !(b.connectNulls && !e && !k)); c.forEach(function (v, B) {
                            var r = v.plotX, a = v.plotY, z = c[B - 1]; (v.leftCliff || z && z.rightCliff) && !k && (p = !0); v.isNull && !q(e) && 0 < B ? p = !b.connectNulls : v.isNull && !e ? p = !0 : (0 === B || p ? B = [["M", v.plotX, v.plotY]] : d.getPointSpline ? B = [d.getPointSpline(c, v, B)] : m ? (B = 1 === m ? [["L", z.plotX, a]] : 2 === m ? [["L", (z.plotX + r) / 2, z.plotY], ["L", (z.plotX + r) / 2, a]] :
                                [["L", r, z.plotY]], B.push(["L", r, a])) : B = [["L", r, a]], h.push(v.x), m && (h.push(v.x), 2 === m && h.push(v.x)), f.push.apply(f, B), p = !1)
                        }); f.xMap = h; return d.graphPath = f
                    }; y.prototype.getZonesGraphs = function (c) { this.zones.forEach(function (e, k) { k = ["zone-graph-" + k, "highcharts-graph highcharts-zone-graph-" + k + " " + (e.className || "")]; this.chart.styledMode || k.push(e.color || this.color, e.dashStyle || this.options.dashStyle); c.push(k) }, this); return c }; y.defaultOptions = w(c.defaultOptions, {}); return y
                }(c); e.registerSeriesType("line",
                    x); ""; return x
            }); I(e, "Series/Area/AreaSeries.js", [e["Core/Color/Color.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
                var q = this && this.__extends || function () {
                    var c = function (d, b) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var c in d) d.hasOwnProperty(c) && (b[c] = d[c]) }; return c(d, b) }; return function (d, b) {
                        function f() { this.constructor = d } c(d, b); d.prototype = null === b ? Object.create(b) :
                            (f.prototype = b.prototype, new f)
                    }
                }(), w = c.parse, F = x.seriesTypes.line; c = C.extend; var y = C.merge, t = C.objectEach, m = C.pick; C = function (c) {
                    function d() { var b = null !== c && c.apply(this, arguments) || this; b.data = void 0; b.options = void 0; b.points = void 0; return b } q(d, c); d.prototype.drawGraph = function () {
                        this.areaPath = []; c.prototype.drawGraph.apply(this); var b = this, d = this.areaPath, h = this.options, k = [["area", "highcharts-area", this.color, h.fillColor]]; this.zones.forEach(function (d, c) {
                            k.push(["zone-area-" + c, "highcharts-area highcharts-zone-area-" +
                                c + " " + d.className, d.color || b.color, d.fillColor || h.fillColor])
                        }); k.forEach(function (c) { var f = c[0], k = {}, e = b[f], p = e ? "animate" : "attr"; e ? (e.endX = b.preventGraphAnimation ? null : d.xMap, e.animate({ d: d })) : (k.zIndex = 0, e = b[f] = b.chart.renderer.path(d).addClass(c[1]).add(b.group), e.isArea = !0); b.chart.styledMode || (k.fill = m(c[3], w(c[2]).setOpacity(m(h.fillOpacity, .75)).get())); e[p](k); e.startX = d.xMap; e.shiftUnit = h.step ? 2 : 1 })
                    }; d.prototype.getGraphPath = function (b) {
                        var d = F.prototype.getGraphPath, c = this.options, k = c.stacking,
                        e = this.yAxis, D = [], v = [], B = this.index, r = e.stacking.stacks[this.stackKey], a = c.threshold, z = Math.round(e.getThreshold(c.threshold)); c = m(c.connectNulls, "percent" === k); var l = function (d, c, f) { var h = b[d]; d = k && r[h.x].points[B]; var l = h[f + "Null"] || 0; f = h[f + "Cliff"] || 0; h = !0; if (f || l) { var n = (l ? d[0] : d[1]) + f; var p = d[0] + f; h = !!l } else !k && b[c] && b[c].isNull && (n = p = a); "undefined" !== typeof n && (v.push({ plotX: g, plotY: null === n ? z : e.getThreshold(n), isNull: h, isCliff: !0 }), D.push({ plotX: g, plotY: null === p ? z : e.getThreshold(p), doCurve: !1 })) };
                        b = b || this.points; k && (b = this.getStackPoints(b)); for (var u = 0, n = b.length; u < n; ++u) { k || (b[u].leftCliff = b[u].rightCliff = b[u].leftNull = b[u].rightNull = void 0); var E = b[u].isNull; var g = m(b[u].rectPlotX, b[u].plotX); var A = k ? m(b[u].yBottom, z) : z; if (!E || c) c || l(u, u - 1, "left"), E && !k && c || (v.push(b[u]), D.push({ x: u, plotX: g, plotY: A })), c || l(u, u + 1, "right") } l = d.call(this, v, !0, !0); D.reversed = !0; E = d.call(this, D, !0, !0); (A = E[0]) && "M" === A[0] && (E[0] = ["L", A[1], A[2]]); E = l.concat(E); E.length && E.push(["Z"]); d = d.call(this, v, !1, c); E.xMap =
                            l.xMap; this.areaPath = E; return d
                    }; d.prototype.getStackPoints = function (b) {
                        var d = this, c = [], k = [], e = this.xAxis, D = this.yAxis, v = D.stacking.stacks[this.stackKey], B = {}, r = D.series, a = r.length, z = D.options.reversedStacks ? 1 : -1, l = r.indexOf(d); b = b || this.points; if (this.options.stacking) {
                            for (var u = 0; u < b.length; u++)b[u].leftNull = b[u].rightNull = void 0, B[b[u].x] = b[u]; t(v, function (a, b) { null !== a.total && k.push(b) }); k.sort(function (a, b) { return a - b }); var n = r.map(function (a) { return a.visible }); k.forEach(function (b, g) {
                                var f =
                                    0, h, p; if (B[b] && !B[b].isNull) c.push(B[b]), [-1, 1].forEach(function (c) { var f = 1 === c ? "rightNull" : "leftNull", e = v[k[g + c]], m = 0; if (e) for (var u = l; 0 <= u && u < a;) { var A = r[u].index; h = e.points[A]; h || (A === d.index ? B[b][f] = !0 : n[u] && (p = v[b].points[A]) && (m -= p[1] - p[0])); u += z } B[b][1 === c ? "rightCliff" : "leftCliff"] = m }); else { for (var u = l; 0 <= u && u < a;) { if (h = v[b].points[r[u].index]) { f = h[1]; break } u += z } f = m(f, 0); f = D.translate(f, 0, 1, 0, 1); c.push({ isNull: !0, plotX: e.translate(b, 0, 0, 0, 1), x: b, plotY: f, yBottom: f }) }
                            })
                        } return c
                    }; d.defaultOptions =
                        y(F.defaultOptions, { threshold: 0 }); return d
                }(F); c(C.prototype, { singleStacks: !1, drawLegendSymbol: e.drawRectangle }); x.registerSeriesType("area", C); ""; return C
            }); I(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e) {
                var x = this && this.__extends || function () {
                    var c = function (e, t) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, e) { c.__proto__ = e } || function (c, e) { for (var d in e) e.hasOwnProperty(d) && (c[d] = e[d]) }; return c(e, t) }; return function (e,
                        t) { function m() { this.constructor = e } c(e, t); e.prototype = null === t ? Object.create(t) : (m.prototype = t.prototype, new m) }
                }(), C = c.seriesTypes.line, q = e.merge, w = e.pick; e = function (c) {
                    function e() { var e = null !== c && c.apply(this, arguments) || this; e.data = void 0; e.options = void 0; e.points = void 0; return e } x(e, c); e.prototype.getPointSpline = function (c, e, k) {
                        var d = e.plotX || 0, b = e.plotY || 0, f = c[k - 1]; k = c[k + 1]; if (f && !f.isNull && !1 !== f.doCurve && !e.isCliff && k && !k.isNull && !1 !== k.doCurve && !e.isCliff) {
                            c = f.plotY || 0; var h = k.plotX || 0; k =
                                k.plotY || 0; var p = 0; var m = (1.5 * d + (f.plotX || 0)) / 2.5; var D = (1.5 * b + c) / 2.5; h = (1.5 * d + h) / 2.5; var v = (1.5 * b + k) / 2.5; h !== m && (p = (v - D) * (h - d) / (h - m) + b - v); D += p; v += p; D > c && D > b ? (D = Math.max(c, b), v = 2 * b - D) : D < c && D < b && (D = Math.min(c, b), v = 2 * b - D); v > k && v > b ? (v = Math.max(k, b), D = 2 * b - v) : v < k && v < b && (v = Math.min(k, b), D = 2 * b - v); e.rightContX = h; e.rightContY = v
                        } e = ["C", w(f.rightContX, f.plotX, 0), w(f.rightContY, f.plotY, 0), w(m, d, 0), w(D, b, 0), d, b]; f.rightContX = f.rightContY = void 0; return e
                    }; e.defaultOptions = q(C.defaultOptions); return e
                }(C); c.registerSeriesType("spline",
                    e); ""; return e
            }); I(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Spline/SplineSeries.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
                var q = this && this.__extends || function () {
                    var c = function (e, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var c in d) d.hasOwnProperty(c) && (b[c] = d[c]) }; return c(e, d) }; return function (e, d) {
                        function b() { this.constructor = e } c(e, d); e.prototype =
                            null === d ? Object.create(d) : (b.prototype = d.prototype, new b)
                    }
                }(), w = x.seriesTypes, F = w.area; w = w.area.prototype; var y = C.extend, t = C.merge; C = function (e) { function k() { var d = null !== e && e.apply(this, arguments) || this; d.data = void 0; d.points = void 0; d.options = void 0; return d } q(k, e); k.defaultOptions = t(c.defaultOptions, F.defaultOptions); return k }(c); y(C.prototype, { getGraphPath: w.getGraphPath, getStackPoints: w.getStackPoints, drawGraph: w.drawGraph, drawLegendSymbol: e.drawRectangle }); x.registerSeriesType("areaspline", C);
                ""; return C
            }); I(e, "Series/Column/ColumnSeriesDefaults.js", [], function () { ""; return { borderRadius: 0, centerInCategory: !1, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0, cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff" } }); I(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"],
            e["Core/Color/Color.js"], e["Series/Column/ColumnSeriesDefaults.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F, y) {
                var t = this && this.__extends || function () {
                    var a = function (b, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return a(b, d) }; return function (b, d) {
                        function c() {
                            this.constructor =
                            b
                        } a(b, d); b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c)
                    }
                }(), m = c.animObject, k = e.parse, d = C.hasTouch; c = C.noop; var b = y.clamp, f = y.defined, h = y.extend, p = y.fireEvent, G = y.isArray, D = y.isNumber, v = y.merge, B = y.pick, r = y.objectEach; y = function (a) {
                    function c() { var b = null !== a && a.apply(this, arguments) || this; b.borderWidth = void 0; b.data = void 0; b.group = void 0; b.options = void 0; b.points = void 0; return b } t(c, a); c.prototype.animate = function (a) {
                        var d = this, c = this.yAxis, f = d.options, g = this.chart.inverted,
                        l = {}, e = g ? "translateX" : "translateY"; if (a) l.scaleY = .001, a = b(c.toPixels(f.threshold), c.pos, c.pos + c.len), g ? l.translateX = a - c.len : l.translateY = a, d.clipBox && d.setClip(), d.group.attr(l); else { var k = Number(d.group.attr(e)); d.group.animate({ scaleY: 1 }, h(m(d.options.animation), { step: function (a, b) { d.group && (l[e] = k + b.pos * (c.pos - k), d.group.attr(l)) } })) }
                    }; c.prototype.init = function (b, d) {
                        a.prototype.init.apply(this, arguments); var c = this; b = c.chart; b.hasRendered && b.series.forEach(function (a) {
                            a.type === c.type && (a.isDirty =
                                !0)
                        })
                    }; c.prototype.getColumnMetrics = function () {
                        var a = this, b = a.options, d = a.xAxis, c = a.yAxis, g = d.options.reversedStacks; g = d.reversed && !g || !d.reversed && g; var f = {}, h, e = 0; !1 === b.grouping ? e = 1 : a.chart.series.forEach(function (b) { var d = b.yAxis, g = b.options; if (b.type === a.type && (b.visible || !a.chart.options.chart.ignoreHiddenSeries) && c.len === d.len && c.pos === d.pos) { if (g.stacking && "group" !== g.stacking) { h = b.stackKey; "undefined" === typeof f[h] && (f[h] = e++); var l = f[h] } else !1 !== g.grouping && (l = e++); b.columnIndex = l } }); var k =
                            Math.min(Math.abs(d.transA) * (d.ordinal && d.ordinal.slope || b.pointRange || d.closestPointRange || d.tickInterval || 1), d.len), p = k * b.groupPadding, m = (k - 2 * p) / (e || 1); b = Math.min(b.maxPointWidth || d.len, B(b.pointWidth, m * (1 - 2 * b.pointPadding))); a.columnMetrics = { width: b, offset: (m - b) / 2 + (p + ((a.columnIndex || 0) + (g ? 1 : 0)) * m - k / 2) * (g ? -1 : 1), paddedWidth: m, columnCount: e }; return a.columnMetrics
                    }; c.prototype.crispCol = function (a, b, d, c) {
                        var g = this.chart, f = this.borderWidth, h = -(f % 2 ? .5 : 0); f = f % 2 ? .5 : 1; g.inverted && g.renderer.isVML && (f +=
                            1); this.options.crisp && (d = Math.round(a + d) + h, a = Math.round(a) + h, d -= a); c = Math.round(b + c) + f; h = .5 >= Math.abs(b) && .5 < c; b = Math.round(b) + f; c -= b; h && c && (--b, c += 1); return { x: a, y: b, width: d, height: c }
                    }; c.prototype.adjustForMissingColumns = function (a, b, d, c) {
                        var g = this, f = this.options.stacking; if (!d.isNull && 1 < c.columnCount) {
                            var h = this.yAxis.options.reversedStacks, l = 0, e = h ? 0 : -c.columnCount; r(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) {
                                if ("number" === typeof d.x) {
                                    var b = a[d.x.toString()]; b && (a = b.points[g.index],
                                        f ? (a && (l = e), b.hasValidPoints && (h ? e++ : e--)) : G(a) && (a = Object.keys(b.points).filter(function (a) { return !a.match(",") && b.points[a] && 1 < b.points[a].length }).map(parseFloat).sort(function (a, b) { return b - a }), l = a.indexOf(g.index), e = a.length))
                                }
                            }); a = (d.plotX || 0) + ((e - 1) * c.paddedWidth + b) / 2 - b - l * c.paddedWidth
                        } return a
                    }; c.prototype.translate = function () {
                        var a = this, d = a.chart, c = a.options, h = a.dense = 2 > a.closestPointRange * a.xAxis.transA; h = a.borderWidth = B(c.borderWidth, h ? 0 : 1); var g = a.xAxis, e = a.yAxis, k = c.threshold, p = a.translatedThreshold =
                            e.getThreshold(k), m = B(c.minPointLength, 5), r = a.getColumnMetrics(), v = r.width, z = a.pointXOffset = r.offset, G = a.dataMin, t = a.dataMax, q = a.barW = Math.max(v, 1 + 2 * h); d.inverted && (p -= .5); c.pointPadding && (q = Math.ceil(q)); w.prototype.translate.apply(a); a.points.forEach(function (h) {
                                var l = B(h.yBottom, p), n = 999 + Math.abs(l), u = h.plotX || 0; n = b(h.plotY, -n, e.len + n); var A = Math.min(n, l), E = Math.max(n, l) - A, H = v, y = u + z, w = q; m && Math.abs(E) < m && (E = m, u = !e.reversed && !h.negative || e.reversed && h.negative, D(k) && D(t) && h.y === k && t <= k && (e.min ||
                                    0) < k && (G !== t || (e.max || 0) <= k) && (u = !u), A = Math.abs(A - p) > m ? l - m : p - (u ? m : 0)); f(h.options.pointWidth) && (H = w = Math.ceil(h.options.pointWidth), y -= Math.round((H - v) / 2)); c.centerInCategory && (y = a.adjustForMissingColumns(y, H, h, r)); h.barX = y; h.pointWidth = H; h.tooltipPos = d.inverted ? [b(e.len + e.pos - d.plotLeft - n, e.pos - d.plotLeft, e.len + e.pos - d.plotLeft), g.len + g.pos - d.plotTop - y - w / 2, E] : [g.left - d.plotLeft + y + w / 2, b(n + e.pos - d.plotTop, e.pos - d.plotTop, e.len + e.pos - d.plotTop), E]; h.shapeType = a.pointClass.prototype.shapeType || "rect";
                                h.shapeArgs = a.crispCol.apply(a, h.isNull ? [y, p, w, 0] : [y, A, w, E])
                            })
                    }; c.prototype.drawGraph = function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }; c.prototype.pointAttribs = function (a, b) {
                        var d = this.options, c = this.pointAttrToOptions || {}, g = c.stroke || "borderColor", f = c["stroke-width"] || "borderWidth", h = a && a.color || this.color, l = a && a[g] || d[g] || h; c = a && a.options.dashStyle || d.dashStyle; var e = a && a[f] || d[f] || this[f] || 0, p = B(a && a.opacity, d.opacity, 1); if (a && this.zones.length) {
                            var m = a.getZone();
                            h = a.options.color || m && (m.color || a.nonZonedColor) || this.color; m && (l = m.borderColor || l, c = m.dashStyle || c, e = m.borderWidth || e)
                        } b && a && (a = v(d.states[b], a.options.states && a.options.states[b] || {}), b = a.brightness, h = a.color || "undefined" !== typeof b && k(h).brighten(a.brightness).get() || h, l = a[g] || l, e = a[f] || e, c = a.dashStyle || c, p = B(a.opacity, p)); g = { fill: h, stroke: l, "stroke-width": e, opacity: p }; c && (g.dashstyle = c); return g
                    }; c.prototype.drawPoints = function (a) {
                        void 0 === a && (a = this.points); var b = this, d = this.chart, c = b.options,
                            g = d.renderer, f = c.animationLimit || 250, h; a.forEach(function (a) {
                                var l = a.graphic, e = !!l, k = l && d.pointCount < f ? "animate" : "attr"; if (D(a.plotY) && null !== a.y) {
                                    h = a.shapeArgs; l && a.hasNewShapeType() && (l = l.destroy()); b.enabledDataSorting && (a.startXPos = b.xAxis.reversed ? -(h ? h.width || 0 : 0) : b.xAxis.width); l || (a.graphic = l = g[a.shapeType](h).add(a.group || b.group)) && b.enabledDataSorting && d.hasRendered && d.pointCount < f && (l.attr({ x: a.startXPos }), e = !0, k = "animate"); if (l && e) l[k](v(h)); if (c.borderRadius) l[k]({ r: c.borderRadius });
                                    d.styledMode || l[k](b.pointAttribs(a, a.selected && "select")).shadow(!1 !== a.allowShadow && c.shadow, null, c.stacking && !c.borderRadius); l && (l.addClass(a.getClassName(), !0), l.attr({ visibility: a.visible ? "inherit" : "hidden" }))
                                } else l && (a.graphic = l.destroy())
                            })
                    }; c.prototype.drawTracker = function (a) {
                        void 0 === a && (a = this.points); var b = this, c = b.chart, f = c.pointer, g = function (a) { var b = f.getPointFromEvent(a); "undefined" !== typeof b && (f.isDirectTouch = !0, b.onMouseOver(a)) }, h; a.forEach(function (a) {
                            h = G(a.dataLabels) ? a.dataLabels :
                                a.dataLabel ? [a.dataLabel] : []; a.graphic && (a.graphic.element.point = a); h.forEach(function (b) { b.div ? b.div.point = a : b.element.point = a })
                        }); b._hasTracking || (b.trackerGroups.forEach(function (a) { if (b[a]) { b[a].addClass("highcharts-tracker").on("mouseover", g).on("mouseout", function (a) { f.onTrackerMouseOut(a) }); if (d) b[a].on("touchstart", g); !c.styledMode && b.options.cursor && b[a].css({ cursor: b.options.cursor }) } }), b._hasTracking = !0); p(this, "afterDrawTracker")
                    }; c.prototype.remove = function () {
                        var a = this, b = a.chart; b.hasRendered &&
                            b.series.forEach(function (b) { b.type === a.type && (b.isDirty = !0) }); w.prototype.remove.apply(a, arguments)
                    }; c.defaultOptions = v(w.defaultOptions, x); return c
                }(w); h(y.prototype, { cropShoulder: 0, directTouch: !0, drawLegendSymbol: q.drawRectangle, getSymbol: c, negStacks: !0, trackerGroups: ["group", "dataLabelsGroup"] }); F.registerSeriesType("column", y); ""; return y
            }); I(e, "Core/Series/DataLabel.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/FormatUtilities.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = c.getDeferredAnimation,
                q = e.format, w = x.defined, F = x.extend, y = x.fireEvent, t = x.isArray, m = x.isString, k = x.merge, d = x.objectEach, b = x.pick, f = x.splat, h; (function (c) {
                    function h(a, d, c, f, g) {
                        var h = this, l = this.chart, e = this.isCartesian && l.inverted, k = this.enabledDataSorting, n = a.plotX, p = a.plotY, m = c.rotation, r = c.align, u = w(n) && w(p) && l.isInsidePlot(n, Math.round(p), { inverted: e, paneCoordinates: !0, series: h }); p = function (b) { k && h.xAxis && !v && h.setDataLabelStartPos(a, d, g, u, b) }; var v = "justify" === b(c.overflow, k ? "none" : "justify"); n = this.visible && !1 !==
                            a.visible && w(n) && (a.series.forceDL || k && !v || u || b(c.inside, !!this.options.stacking) && f && l.isInsidePlot(n, e ? f.x + 1 : f.y + f.height - 1, { inverted: e, paneCoordinates: !0, series: h })); e = a.pos(); if (n && e) {
                                m && d.attr({ align: r }); r = d.getBBox(!0); var B = [0, 0]; var z = l.renderer.fontMetrics(l.styledMode ? void 0 : c.style.fontSize, d).b; f = F({ x: e[0], y: Math.round(e[1]), width: 0, height: 0 }, f); F(c, { width: r.width, height: r.height }); m ? (v = !1, B = l.renderer.rotCorr(z, m), z = {
                                    x: f.x + (c.x || 0) + f.width / 2 + B.x, y: f.y + (c.y || 0) + { top: 0, middle: .5, bottom: 1 }[c.verticalAlign] *
                                        f.height
                                }, B = [r.x - Number(d.attr("x")), r.y - Number(d.attr("y"))], p(z), d[g ? "attr" : "animate"](z)) : (p(f), d.align(c, void 0, f), z = d.alignAttr); v && 0 <= f.height ? this.justifyDataLabel(d, c, z, r, f, g) : b(c.crop, !0) && (f = z.x, p = z.y, f += B[0], p += B[1], n = l.isInsidePlot(f, p, { paneCoordinates: !0, series: h }) && l.isInsidePlot(f + r.width, p + r.height, { paneCoordinates: !0, series: h })); if (c.shape && !m) d[g ? "attr" : "animate"]({ anchorX: e[0], anchorY: e[1] })
                            } g && k && (d.placed = !1); n || k && !v ? d.show() : (d.hide(), d.placed = !1)
                    } function e(a, b) {
                        var d = b.filter;
                        return d ? (b = d.operator, a = a[d.property], d = d.value, ">" === b && a > d || "<" === b && a < d || ">=" === b && a >= d || "<=" === b && a <= d || "==" === b && a == d || "===" === b && a === d ? !0 : !1) : !0
                    } function p(a) {
                        void 0 === a && (a = this.points); var c = this, h = c.chart, l = c.options, g = c.hasRendered || 0, k = h.renderer, p = h.options.chart, v = p.backgroundColor; p = p.plotBackgroundColor; var z = k.getContrast(m(p) && p || m(v) && v || "#000000"), B = l.dataLabels, D; v = B.animation; v = B.defer ? C(h, v, c) : { defer: 0, duration: 0 }; B = r(r(h.options.plotOptions && h.options.plotOptions.series && h.options.plotOptions.series.dataLabels,
                            h.options.plotOptions && h.options.plotOptions[c.type] && h.options.plotOptions[c.type].dataLabels), B); y(this, "drawDataLabels"); if (t(B) || B.enabled || c._hasPointLabels) {
                                var G = c.plotGroup("dataLabelsGroup", "data-labels", g ? "inherit" : "hidden", B.zIndex || 6); G.attr({ opacity: +g }); !g && (g = c.dataLabelsGroup) && (c.visible && G.show(), g[l.animation ? "animate" : "attr"]({ opacity: 1 }, v)); a.forEach(function (a) {
                                    D = f(r(B, a.dlOptions || a.options && a.options.dataLabels)); D.forEach(function (g, f) {
                                        var n = g.enabled && (!a.isNull || a.dataLabelOnNull) &&
                                            e(a, g), p = a.connectors ? a.connectors[f] : a.connector, m = a.dataLabels ? a.dataLabels[f] : a.dataLabel, r = !m, v = b(g.distance, a.labelDistance); if (n) {
                                                var u = a.getLabelConfig(); var B = b(g[a.formatPrefix + "Format"], g.format); u = w(B) ? q(B, u, h) : (g[a.formatPrefix + "Formatter"] || g.formatter).call(u, g); B = g.style; var A = g.rotation; h.styledMode || (B.color = b(g.color, B.color, c.color, "#000000"), "contrast" === B.color ? (a.contrastColor = k.getContrast(a.color || c.color), B.color = !w(v) && g.inside || 0 > v || l.stacking ? a.contrastColor : z) : delete a.contrastColor,
                                                    l.cursor && (B.cursor = l.cursor)); var D = { r: g.borderRadius || 0, rotation: A, padding: g.padding, zIndex: 1 }; if (!h.styledMode) { v = g.backgroundColor; var t = g.borderColor; D.fill = "auto" === v ? a.color : v; D.stroke = "auto" === t ? a.color : t; D["stroke-width"] = g.borderWidth } d(D, function (a, b) { "undefined" === typeof a && delete D[b] })
                                            } !m || n && w(u) && !!m.div === !!g.useHTML && (m.rotation && g.rotation || m.rotation === g.rotation) || (r = !0, a.dataLabel = m = a.dataLabel && a.dataLabel.destroy(), a.dataLabels && (1 === a.dataLabels.length ? delete a.dataLabels :
                                                delete a.dataLabels[f]), f || delete a.dataLabel, p && (a.connector = a.connector.destroy(), a.connectors && (1 === a.connectors.length ? delete a.connectors : delete a.connectors[f]))); n && w(u) ? (m ? D.text = u : (a.dataLabels = a.dataLabels || [], m = a.dataLabels[f] = A ? k.text(u, 0, 0, g.useHTML).addClass("highcharts-data-label") : k.label(u, 0, 0, g.shape, null, null, g.useHTML, null, "data-label"), f || (a.dataLabel = m), m.addClass(" highcharts-data-label-color-" + a.colorIndex + " " + (g.className || "") + (g.useHTML ? " highcharts-tracker" : ""))), m.options =
                                                    g, m.attr(D), h.styledMode || m.css(B).shadow(g.shadow), (f = g[a.formatPrefix + "TextPath"] || g.textPath) && !g.useHTML && (m.setTextPath(a.getDataLabelPath && a.getDataLabelPath(m) || a.graphic, f), a.dataLabelPath && !f.enabled && (a.dataLabelPath = a.dataLabelPath.destroy())), m.added || m.add(G), c.alignDataLabel(a, m, g, null, r)) : m && m.hide()
                                    })
                                })
                            } y(this, "afterDrawDataLabels")
                    } function B(a, b, d, c, g, f) {
                        var h = this.chart, l = b.align, e = b.verticalAlign, k = a.box ? 0 : a.padding || 0, n = b.x; n = void 0 === n ? 0 : n; var p = b.y; p = void 0 === p ? 0 : p; var m = (d.x ||
                            0) + k; if (0 > m) { "right" === l && 0 <= n ? (b.align = "left", b.inside = !0) : n -= m; var r = !0 } m = (d.x || 0) + c.width - k; m > h.plotWidth && ("left" === l && 0 >= n ? (b.align = "right", b.inside = !0) : n += h.plotWidth - m, r = !0); m = d.y + k; 0 > m && ("bottom" === e && 0 <= p ? (b.verticalAlign = "top", b.inside = !0) : p -= m, r = !0); m = (d.y || 0) + c.height - k; m > h.plotHeight && ("top" === e && 0 >= p ? (b.verticalAlign = "bottom", b.inside = !0) : p += h.plotHeight - m, r = !0); r && (b.x = n, b.y = p, a.placed = !f, a.align(b, void 0, g)); return r
                    } function r(a, b) {
                        var d = [], c; if (t(a) && !t(b)) d = a.map(function (a) {
                            return k(a,
                                b)
                        }); else if (t(b) && !t(a)) d = b.map(function (b) { return k(a, b) }); else if (t(a) || t(b)) for (c = Math.max(a.length, b.length); c--;)d[c] = k(a[c], b[c]); else d = k(a, b); return d
                    } function a(a, b, d, c, g) {
                        var f = this.chart, h = f.inverted, e = this.xAxis, l = e.reversed, k = h ? b.height / 2 : b.width / 2; a = (a = a.pointWidth) ? a / 2 : 0; b.startXPos = h ? g.x : l ? -k - a : e.width - k + a; b.startYPos = h ? l ? this.yAxis.height - k + a : -k - a : g.y; c ? "hidden" === b.visibility && (b.show(), b.attr({ opacity: 0 }).animate({ opacity: 1 })) : b.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, b.hide);
                        f.hasRendered && (d && b.attr({ x: b.startXPos, y: b.startYPos }), b.placed = !0)
                    } var z = []; c.compose = function (b) { if (-1 === z.indexOf(b)) { var d = b.prototype; z.push(b); d.alignDataLabel = h; d.drawDataLabels = p; d.justifyDataLabel = B; d.setDataLabelStartPos = a } }
                })(h || (h = {})); ""; return h
            }); I(e, "Series/Column/ColumnDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = e.series, q = x.merge, w = x.pick, F; (function (e) {
                    function t(c, d, b, f, h) {
                        var e = this.chart.inverted,
                        k = c.series, m = (k.xAxis ? k.xAxis.len : this.chart.plotSizeX) || 0; k = (k.yAxis ? k.yAxis.len : this.chart.plotSizeY) || 0; var v = c.dlBox || c.shapeArgs, B = w(c.below, c.plotY > w(this.translatedThreshold, k)), r = w(b.inside, !!this.options.stacking); v && (f = q(v), 0 > f.y && (f.height += f.y, f.y = 0), v = f.y + f.height - k, 0 < v && v < f.height && (f.height -= v), e && (f = { x: k - f.y - f.height, y: m - f.x - f.width, width: f.height, height: f.width }), r || (e ? (f.x += B ? 0 : f.width, f.width = 0) : (f.y += B ? f.height : 0, f.height = 0))); b.align = w(b.align, !e || r ? "center" : B ? "right" : "left");
                        b.verticalAlign = w(b.verticalAlign, e || r ? "middle" : B ? "top" : "bottom"); C.prototype.alignDataLabel.call(this, c, d, b, f, h); b.inside && c.contrastColor && d.css({ color: c.contrastColor })
                    } var m = []; e.compose = function (e) { c.compose(C); -1 === m.indexOf(e) && (m.push(e), e.prototype.alignDataLabel = t) }
                })(F || (F = {})); return F
            }); I(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = this && this.__extends || function () {
                    var c = function (e, t) {
                        c =
                        Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, e) { c.__proto__ = e } || function (c, e) { for (var d in e) e.hasOwnProperty(d) && (c[d] = e[d]) }; return c(e, t)
                    }; return function (e, t) { function m() { this.constructor = e } c(e, t); e.prototype = null === t ? Object.create(t) : (m.prototype = t.prototype, new m) }
                }(), q = x.extend, w = x.merge; x = function (e) { function q() { var c = null !== e && e.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; return c } C(q, e); q.defaultOptions = w(c.defaultOptions, {}); return q }(c);
                q(x.prototype, { inverted: !0 }); e.registerSeriesType("bar", x); ""; return x
            }); I(e, "Series/Scatter/ScatterSeriesDefaults.js", [], function () { ""; return { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } } }); I(e, "Series/Scatter/ScatterSeries.js", [e["Series/Scatter/ScatterSeriesDefaults.js"], e["Core/Series/SeriesRegistry.js"],
            e["Core/Utilities.js"]], function (c, e, x) {
                var C = this && this.__extends || function () { var c = function (e, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var c in d) d.hasOwnProperty(c) && (b[c] = d[c]) }; return c(e, d) }; return function (e, d) { function b() { this.constructor = e } c(e, d); e.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) } }(), q = e.seriesTypes, w = q.column, F = q.line; q = x.addEvent; var y = x.extend, t = x.merge; x = function (e) {
                    function k() {
                        var d =
                            null !== e && e.apply(this, arguments) || this; d.data = void 0; d.options = void 0; d.points = void 0; return d
                    } C(k, e); k.prototype.applyJitter = function () { var d = this, b = this.options.jitter, c = this.points.length; b && this.points.forEach(function (f, e) { ["x", "y"].forEach(function (h, k) { var p = "plot" + h.toUpperCase(); if (b[h] && !f.isNull) { var m = d[h + "Axis"]; var r = b[h] * m.transA; if (m && !m.isLog) { var a = Math.max(0, f[p] - r); m = Math.min(m.len, f[p] + r); k = 1E4 * Math.sin(e + k * c); f[p] = a + (m - a) * (k - Math.floor(k)); "x" === h && (f.clientX = f.plotX) } } }) }) };
                    k.prototype.drawGraph = function () { this.options.lineWidth ? e.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy()) }; k.defaultOptions = t(F.defaultOptions, c); return k
                }(F); y(x.prototype, { drawTracker: w.prototype.drawTracker, sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1 }); q(x, "afterTranslate", function () { this.applyJitter() }); e.registerSeriesType("scatter", x); return x
            }); I(e, "Series/CenteredUtilities.js", [e["Core/Globals.js"],
            e["Core/Series/Series.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = c.deg2rad, q = x.fireEvent, w = x.isNumber, F = x.pick, y = x.relativeLength, t; (function (c) {
                    c.getCenter = function () {
                        var c = this.options, d = this.chart, b = 2 * (c.slicedOffset || 0), f = d.plotWidth - 2 * b, h = d.plotHeight - 2 * b, p = c.center, m = Math.min(f, h), D = c.thickness, v = c.size, B = c.innerSize || 0; "string" === typeof v && (v = parseFloat(v)); "string" === typeof B && (B = parseFloat(B)); c = [F(p[0], "50%"), F(p[1], "50%"), F(v && 0 > v ? void 0 : c.size, "100%"), F(B && 0 > B ? void 0 : c.innerSize ||
                            0, "0%")]; !d.angular || this instanceof e || (c[3] = 0); for (p = 0; 4 > p; ++p)v = c[p], d = 2 > p || 2 === p && /%$/.test(v), c[p] = y(v, [f, h, m, c[2]][p]) + (d ? b : 0); c[3] > c[2] && (c[3] = c[2]); w(D) && 2 * D < c[2] && 0 < D && (c[3] = c[2] - 2 * D); q(this, "afterGetCenter", { positions: c }); return c
                    }; c.getStartAndEndRadians = function (c, d) { c = w(c) ? c : 0; d = w(d) && d > c && 360 > d - c ? d : c + 360; return { start: C * (c + -90), end: C * (d + -90) } }
                })(t || (t = {})); ""; return t
            }); I(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]],
                function (c, e, x) {
                    var C = this && this.__extends || function () { var c = function (d, b) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var c in d) d.hasOwnProperty(c) && (b[c] = d[c]) }; return c(d, b) }; return function (d, b) { function f() { this.constructor = d } c(d, b); d.prototype = null === b ? Object.create(b) : (f.prototype = b.prototype, new f) } }(), q = c.setAnimation, w = x.addEvent, F = x.defined; c = x.extend; var y = x.isNumber, t = x.pick, m = x.relativeLength; e = function (c) {
                        function d() {
                            var b =
                                null !== c && c.apply(this, arguments) || this; b.labelDistance = void 0; b.options = void 0; b.series = void 0; return b
                        } C(d, c); d.prototype.getConnectorPath = function () { var b = this.labelPosition, d = this.series.options.dataLabels, c = this.connectorShapes, e = d.connectorShape; c[e] && (e = c[e]); return e.call(this, { x: b.final.x, y: b.final.y, alignment: b.alignment }, b.connectorPosition, d) }; d.prototype.getTranslate = function () { return this.sliced ? this.slicedTranslation : { translateX: 0, translateY: 0 } }; d.prototype.haloPath = function (b) {
                            var d =
                                this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(d.x, d.y, d.r + b, d.r + b, { innerR: d.r - 1, start: d.start, end: d.end })
                        }; d.prototype.init = function () { var b = this; c.prototype.init.apply(this, arguments); this.name = t(this.name, "Slice"); var d = function (d) { b.slice("select" === d.type) }; w(this, "select", d); w(this, "unselect", d); return this }; d.prototype.isValid = function () { return y(this.y) && 0 <= this.y }; d.prototype.setVisible = function (b, d) {
                            var c = this, f = this.series, e = f.chart, k = f.options.ignoreHiddenPoint;
                            d = t(d, k); b !== this.visible && (this.visible = this.options.visible = b = "undefined" === typeof b ? !this.visible : b, f.options.data[f.data.indexOf(this)] = this.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (d) { if (c[d]) c[d][b ? "show" : "hide"](b) }), this.legendItem && e.legend.colorizeItem(this, b), b || "hover" !== this.state || this.setState(""), k && (f.isDirty = !0), d && e.redraw())
                        }; d.prototype.slice = function (b, d, c) {
                            var f = this.series; q(c, f.chart); t(d, !0); this.sliced = this.options.sliced = F(b) ? b : !this.sliced;
                            f.options.data[f.data.indexOf(this)] = this.options; this.graphic && this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
                        }; return d
                    }(e); c(e.prototype, {
                        connectorShapes: {
                            fixedOffset: function (c, d, b) { var f = d.breakAt; d = d.touchingSliceAt; return [["M", c.x, c.y], b.softConnector ? ["C", c.x + ("left" === c.alignment ? -5 : 5), c.y, 2 * f.x - d.x, 2 * f.y - d.y, f.x, f.y] : ["L", f.x, f.y], ["L", d.x, d.y]] }, straight: function (c, d) { d = d.touchingSliceAt; return [["M", c.x, c.y], ["L", d.x, d.y]] }, crookedLine: function (c,
                                d, b) { d = d.touchingSliceAt; var f = this.series, h = f.center[0], e = f.chart.plotWidth, k = f.chart.plotLeft; f = c.alignment; var D = this.shapeArgs.r; b = m(b.crookDistance, 1); e = "left" === f ? h + D + (e + k - h - D) * (1 - b) : k + (h - D) * b; b = ["L", e, c.y]; h = !0; if ("left" === f ? e > c.x || e < d.x : e < c.x || e > d.x) h = !1; c = [["M", c.x, c.y]]; h && c.push(b); c.push(["L", d.x, d.y]); return c }
                        }
                    }); return e
                }); I(e, "Series/Pie/PieSeriesDefaults.js", [], function () {
                    ""; return {
                        center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {
                            allowOverlap: !0, connectorPadding: 5, connectorShape: "fixedOffset",
                            crookDistance: "70%", distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, softConnector: !0, x: 0
                        }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: .1 } }
                    }
                }); I(e, "Series/Pie/PieSeries.js", [e["Series/CenteredUtilities.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"],
                e["Core/Legend/LegendSymbol.js"], e["Series/Pie/PiePoint.js"], e["Series/Pie/PieSeriesDefaults.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/Symbols.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F, y, t, m) {
                    var k = this && this.__extends || function () {
                        var b = function (d, c) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return b(d, c) }; return function (d, c) {
                            function a() {
                                this.constructor =
                                d
                            } b(d, c); d.prototype = null === c ? Object.create(c) : (a.prototype = c.prototype, new a)
                        }
                    }(), d = c.getStartAndEndRadians; x = x.noop; var b = m.clamp, f = m.extend, h = m.fireEvent, p = m.merge, G = m.pick, D = m.relativeLength; m = function (c) {
                        function f() { var b = null !== c && c.apply(this, arguments) || this; b.center = void 0; b.data = void 0; b.maxLabelDistance = void 0; b.options = void 0; b.points = void 0; return b } k(f, c); f.prototype.animate = function (b) {
                            var a = this, d = a.points, c = a.startAngleRad; b || d.forEach(function (b) {
                                var d = b.graphic, f = b.shapeArgs; d &&
                                    f && (d.attr({ r: G(b.startR, a.center && a.center[3] / 2), start: c, end: c }), d.animate({ r: f.r, start: f.start, end: f.end }, a.options.animation))
                            })
                        }; f.prototype.drawEmpty = function () {
                            var b = this.startAngleRad, a = this.endAngleRad, d = this.options; if (0 === this.total && this.center) {
                                var c = this.center[0]; var f = this.center[1]; this.graph || (this.graph = this.chart.renderer.arc(c, f, this.center[1] / 2, 0, b, a).addClass("highcharts-empty-series").add(this.group)); this.graph.attr({
                                    d: t.arc(c, f, this.center[2] / 2, 0, {
                                        start: b, end: a, innerR: this.center[3] /
                                            2
                                    })
                                }); this.chart.styledMode || this.graph.attr({ "stroke-width": d.borderWidth, fill: d.fillColor || "none", stroke: d.color || "#cccccc" })
                            } else this.graph && (this.graph = this.graph.destroy())
                        }; f.prototype.drawPoints = function () { var b = this.chart.renderer; this.points.forEach(function (a) { a.graphic && a.hasNewShapeType() && (a.graphic = a.graphic.destroy()); a.graphic || (a.graphic = b[a.shapeType](a.shapeArgs).add(a.series.group), a.delayedRendering = !0) }) }; f.prototype.generatePoints = function () {
                            c.prototype.generatePoints.call(this);
                            this.updateTotals()
                        }; f.prototype.getX = function (d, a, c) { var f = this.center, h = this.radii ? this.radii[c.index] || 0 : f[2] / 2; d = Math.asin(b((d - f[1]) / (h + c.labelDistance), -1, 1)); return f[0] + (a ? -1 : 1) * Math.cos(d) * (h + c.labelDistance) + (0 < c.labelDistance ? (a ? -1 : 1) * this.options.dataLabels.padding : 0) }; f.prototype.hasData = function () { return !!this.processedXData.length }; f.prototype.redrawPoints = function () {
                            var b = this, a = b.chart, d = a.renderer, c = b.options.shadow, f, h, e, g; this.drawEmpty(); !c || b.shadowGroup || a.styledMode || (b.shadowGroup =
                                d.g("shadow").attr({ zIndex: -1 }).add(b.group)); b.points.forEach(function (l) {
                                    var k = {}; h = l.graphic; if (!l.isNull && h) {
                                        var n = void 0; g = l.shapeArgs; f = l.getTranslate(); a.styledMode || (n = l.shadowGroup, c && !n && (n = l.shadowGroup = d.g("shadow").add(b.shadowGroup)), n && n.attr(f), e = b.pointAttribs(l, l.selected && "select")); l.delayedRendering ? (h.setRadialReference(b.center).attr(g).attr(f), a.styledMode || h.attr(e).attr({ "stroke-linejoin": "round" }).shadow(c, n), l.delayedRendering = !1) : (h.setRadialReference(b.center), a.styledMode ||
                                            p(!0, k, e), p(!0, k, g, f), h.animate(k)); h.attr({ visibility: l.visible ? "inherit" : "hidden" }); h.addClass(l.getClassName(), !0)
                                    } else h && (l.graphic = h.destroy())
                                })
                        }; f.prototype.sortByAngle = function (b, a) { b.sort(function (b, d) { return "undefined" !== typeof b.angle && (d.angle - b.angle) * a }) }; f.prototype.translate = function (b) {
                            h(this, "translate"); this.generatePoints(); var a = this.options, c = a.slicedOffset, f = c + (a.borderWidth || 0), e = d(a.startAngle, a.endAngle), k = this.startAngleRad = e.start; e = (this.endAngleRad = e.end) - k; var m = this.points,
                                g = a.dataLabels.distance; a = a.ignoreHiddenPoint; var p = m.length, r, v = 0; b || (this.center = b = this.getCenter()); for (r = 0; r < p; r++) {
                                    var B = m[r]; var t = k + v * e; !B.isValid() || a && !B.visible || (v += B.percentage / 100); var q = k + v * e; var w = { x: b[0], y: b[1], r: b[2] / 2, innerR: b[3] / 2, start: Math.round(1E3 * t) / 1E3, end: Math.round(1E3 * q) / 1E3 }; B.shapeType = "arc"; B.shapeArgs = w; B.labelDistance = G(B.options.dataLabels && B.options.dataLabels.distance, g); B.labelDistance = D(B.labelDistance, w.r); this.maxLabelDistance = Math.max(this.maxLabelDistance ||
                                        0, B.labelDistance); q = (q + t) / 2; q > 1.5 * Math.PI ? q -= 2 * Math.PI : q < -Math.PI / 2 && (q += 2 * Math.PI); B.slicedTranslation = { translateX: Math.round(Math.cos(q) * c), translateY: Math.round(Math.sin(q) * c) }; w = Math.cos(q) * b[2] / 2; var y = Math.sin(q) * b[2] / 2; B.tooltipPos = [b[0] + .7 * w, b[1] + .7 * y]; B.half = q < -Math.PI / 2 || q > Math.PI / 2 ? 1 : 0; B.angle = q; t = Math.min(f, B.labelDistance / 5); B.labelPosition = {
                                            natural: { x: b[0] + w + Math.cos(q) * B.labelDistance, y: b[1] + y + Math.sin(q) * B.labelDistance }, "final": {}, alignment: 0 > B.labelDistance ? "center" : B.half ? "right" :
                                                "left", connectorPosition: { breakAt: { x: b[0] + w + Math.cos(q) * t, y: b[1] + y + Math.sin(q) * t }, touchingSliceAt: { x: b[0] + w, y: b[1] + y } }
                                        }
                                } h(this, "afterTranslate")
                        }; f.prototype.updateTotals = function () { var b = this.points, a = b.length, d = this.options.ignoreHiddenPoint, c, f = 0; for (c = 0; c < a; c++) { var h = b[c]; !h.isValid() || d && !h.visible || (f += h.y) } this.total = f; for (c = 0; c < a; c++)h = b[c], h.percentage = 0 < f && (h.visible || !d) ? h.y / f * 100 : 0, h.total = f }; f.defaultOptions = p(F.defaultOptions, w); return f
                    }(F); f(m.prototype, {
                        axisTypes: [], directTouch: !0,
                        drawGraph: void 0, drawLegendSymbol: C.drawRectangle, drawTracker: e.prototype.drawTracker, getCenter: c.getCenter, getSymbol: x, isCartesian: !1, noSharedTooltip: !0, pointAttribs: e.prototype.pointAttribs, pointClass: q, requireSorting: !1, searchPoint: x, trackerGroups: ["group", "dataLabelsGroup"]
                    }); y.registerSeriesType("pie", m); return m
                }); I(e, "Series/Pie/PieDataLabel.js", [e["Core/Series/DataLabel.js"], e["Core/Globals.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]],
                    function (c, e, x, C, q) {
                        var w = e.noop, F = x.distribute, y = C.series, t = q.arrayMax, m = q.clamp, k = q.defined, d = q.merge, b = q.pick, f = q.relativeLength, h; (function (h) {
                            function e() {
                                var a = this, c = a.data, f = a.chart, h = a.options.dataLabels || {}, e = h.connectorPadding, m = f.plotWidth, g = f.plotHeight, p = f.plotLeft, r = Math.round(f.chartWidth / 3), v = a.center, B = v[2] / 2, D = v[1], G = [[], []], q = [0, 0, 0, 0], w = a.dataLabelPositioners, x, C, K, I, P, aa, U, V, T, Q, W, O; a.visible && (h.enabled || a._hasPointLabels) && (c.forEach(function (a) {
                                    a.dataLabel && a.visible && a.dataLabel.shortened &&
                                    (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1)
                                }), y.prototype.drawDataLabels.apply(a), c.forEach(function (a) {
                                    a.dataLabel && (a.visible ? (G[a.half].push(a), a.dataLabel._pos = null, !k(h.style.width) && !k(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > r && (a.dataLabel.css({ width: Math.round(.7 * r) + "px" }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length &&
                                        delete a.dataLabels))
                                }), G.forEach(function (d, c) {
                                    var l = d.length, n = [], r; if (l) {
                                        a.sortByAngle(d, c - .5); if (0 < a.maxLabelDistance) {
                                            var u = Math.max(0, D - B - a.maxLabelDistance); var z = Math.min(D + B + a.maxLabelDistance, f.plotHeight); d.forEach(function (a) { 0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, D - B - a.labelDistance), a.bottom = Math.min(D + B + a.labelDistance, f.plotHeight), r = a.dataLabel.getBBox().height || 21, a.distributeBox = { target: a.labelPosition.natural.y - a.top + r / 2, size: r, rank: a.y }, n.push(a.distributeBox)) }); u =
                                                z + r - u; F(n, u, u / 5)
                                        } for (W = 0; W < l; W++) {
                                            x = d[W]; aa = x.labelPosition; I = x.dataLabel; Q = !1 === x.visible ? "hidden" : "inherit"; T = u = aa.natural.y; n && k(x.distributeBox) && ("undefined" === typeof x.distributeBox.pos ? Q = "hidden" : (U = x.distributeBox.size, T = w.radialDistributionY(x))); delete x.positionIndex; if (h.justify) V = w.justify(x, B, v); else switch (h.alignTo) { case "connectors": V = w.alignToConnectors(d, c, m, p); break; case "plotEdges": V = w.alignToPlotEdges(I, c, m, p); break; default: V = w.radialDistributionX(a, x, T, u) }I._attr = {
                                                visibility: Q,
                                                align: aa.alignment
                                            }; O = x.options.dataLabels || {}; I._pos = { x: V + b(O.x, h.x) + ({ left: e, right: -e }[aa.alignment] || 0), y: T + b(O.y, h.y) - 10 }; aa.final.x = V; aa.final.y = T; b(h.crop, !0) && (P = I.getBBox().width, u = null, V - P < e && 1 === c ? (u = Math.round(P - V + e), q[3] = Math.max(u, q[3])) : V + P > m - e && 0 === c && (u = Math.round(V + P - m + e), q[1] = Math.max(u, q[1])), 0 > T - U / 2 ? q[0] = Math.max(Math.round(-T + U / 2), q[0]) : T + U / 2 > g && (q[2] = Math.max(Math.round(T + U / 2 - g), q[2])), I.sideOverflow = u)
                                        }
                                    }
                                }), 0 === t(q) || this.verifyDataLabelOverflow(q)) && (this.placeDataLabels(),
                                    this.points.forEach(function (c) {
                                        O = d(h, c.options.dataLabels); if (C = b(O.connectorWidth, 1)) {
                                            var g; K = c.connector; if ((I = c.dataLabel) && I._pos && c.visible && 0 < c.labelDistance) {
                                                Q = I._attr.visibility; if (g = !K) c.connector = K = f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c.colorIndex + (c.className ? " " + c.className : "")).add(a.dataLabelsGroup), f.styledMode || K.attr({ "stroke-width": C, stroke: O.connectorColor || c.color || "#666666" }); K[g ? "attr" : "animate"]({ d: c.getConnectorPath() }); K.attr("visibility",
                                                    Q)
                                            } else K && (c.connector = K.destroy())
                                        }
                                    }))
                            } function p() { this.points.forEach(function (a) { var b = a.dataLabel, d; b && a.visible && ((d = b._pos) ? (b.sideOverflow && (b._attr.width = Math.max(b.getBBox().width - b.sideOverflow, 0), b.css({ width: b._attr.width + "px", textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis" }), b.shortened = !0), b.attr(b._attr), b[b.moved ? "animate" : "attr"](d), b.moved = !0) : b && b.attr({ y: -9999 })); delete a.distributeBox }, this) } function v(a) {
                                var b = this.center, d = this.options, c = d.center,
                                h = d.minSize || 80, e = null !== d.size; if (!e) { if (null !== c[0]) var g = Math.max(b[2] - Math.max(a[1], a[3]), h); else g = Math.max(b[2] - a[1] - a[3], h), b[0] += (a[3] - a[1]) / 2; null !== c[1] ? g = m(g, h, b[2] - Math.max(a[0], a[2])) : (g = m(g, h, b[2] - a[0] - a[2]), b[1] += (a[0] - a[2]) / 2); g < b[2] ? (b[2] = g, b[3] = Math.min(d.thickness ? Math.max(0, g - 2 * d.thickness) : Math.max(0, f(d.innerSize || 0, g)), g), this.translate(b), this.drawDataLabels && this.drawDataLabels()) : e = !0 } return e
                            } var B = [], r = {
                                radialDistributionY: function (a) { return a.top + a.distributeBox.pos },
                                radialDistributionX: function (a, b, d, c) { return a.getX(d < b.top + 2 || d > b.bottom - 2 ? c : d, b.half, b) }, justify: function (a, b, d) { return d[0] + (a.half ? -1 : 1) * (b + a.labelDistance) }, alignToPlotEdges: function (a, b, d, c) { a = a.getBBox().width; return b ? a + c : d - a - c }, alignToConnectors: function (a, b, d, c) { var f = 0, h; a.forEach(function (a) { h = a.dataLabel.getBBox().width; h > f && (f = h) }); return b ? f + c : d - f - c }
                            }; h.compose = function (a) {
                                c.compose(y); -1 === B.indexOf(a) && (B.push(a), a = a.prototype, a.dataLabelPositioners = r, a.alignDataLabel = w, a.drawDataLabels =
                                    e, a.placeDataLabels = p, a.verifyDataLabelOverflow = v)
                            }
                        })(h || (h = {})); return h
                    }); I(e, "Extensions/OverlappingDataLabels.js", [e["Core/Chart/Chart.js"], e["Core/Utilities.js"]], function (c, e) {
                        function x(c, e) {
                            var d = !1; if (c) {
                                var b = c.newOpacity; c.oldOpacity !== b && (c.alignAttr && c.placed ? (c[b ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), d = !0, c.alignAttr.opacity = b, c[c.isOld ? "animate" : "attr"](c.alignAttr, null, function () { e.styledMode || c.css({ pointerEvents: b ? "auto" : "none" }) }), q(e, "afterHideOverlappingLabel")) :
                                    c.attr({ opacity: b })); c.isOld = !0
                            } return d
                        } var C = e.addEvent, q = e.fireEvent, w = e.isArray, F = e.isNumber, y = e.objectEach, t = e.pick; C(c, "render", function () {
                            var c = this, e = []; (this.labelCollectors || []).forEach(function (d) { e = e.concat(d()) }); (this.yAxis || []).forEach(function (d) { d.stacking && d.options.stackLabels && !d.options.stackLabels.allowOverlap && y(d.stacking.stacks, function (b) { y(b, function (b) { b.label && e.push(b.label) }) }) }); (this.series || []).forEach(function (d) {
                                var b = d.options.dataLabels; d.visible && (!1 !== b.enabled ||
                                    d._hasPointLabels) && (b = function (b) { return b.forEach(function (b) { b.visible && (w(b.dataLabels) ? b.dataLabels : b.dataLabel ? [b.dataLabel] : []).forEach(function (d) { var f = d.options; d.labelrank = t(f.labelrank, b.labelrank, b.shapeArgs && b.shapeArgs.height); f.allowOverlap ? (d.oldOpacity = d.opacity, d.newOpacity = 1, x(d, c)) : e.push(d) }) }) }, b(d.nodes || []), b(d.points))
                            }); this.hideOverlappingLabels(e)
                        }); c.prototype.hideOverlappingLabels = function (c) {
                            var e = this, d = c.length, b = e.renderer, f, h, p, m = !1; var D = function (d) {
                                var a, c = d.box ?
                                    0 : d.padding || 0, f = a = 0, h; if (d && (!d.alignAttr || d.placed)) { var e = d.alignAttr || { x: d.attr("x"), y: d.attr("y") }; var k = d.parentGroup; d.width || (a = d.getBBox(), d.width = a.width, d.height = a.height, a = b.fontMetrics(null, d.element).h); var g = d.width - 2 * c; (h = { left: "0", center: "0.5", right: "1" }[d.alignValue]) ? f = +h * g : F(d.x) && Math.round(d.x) !== d.translateX && (f = d.x - d.translateX); return { x: e.x + (k.translateX || 0) + c - (f || 0), y: e.y + (k.translateY || 0) + c - a, width: d.width - 2 * c, height: d.height - 2 * c } }
                            }; for (h = 0; h < d; h++)if (f = c[h]) f.oldOpacity =
                                f.opacity, f.newOpacity = 1, f.absoluteBox = D(f); c.sort(function (b, a) { return (a.labelrank || 0) - (b.labelrank || 0) }); for (h = 0; h < d; h++) { var v = (D = c[h]) && D.absoluteBox; for (f = h + 1; f < d; ++f) { var B = (p = c[f]) && p.absoluteBox; !v || !B || D === p || 0 === D.newOpacity || 0 === p.newOpacity || "hidden" === D.visibility || "hidden" === p.visibility || B.x >= v.x + v.width || B.x + B.width <= v.x || B.y >= v.y + v.height || B.y + B.height <= v.y || ((D.labelrank < p.labelrank ? D : p).newOpacity = 0) } } c.forEach(function (b) { x(b, e) && (m = !0) }); m && q(e, "afterHideAllOverlappingLabels")
                        }
                    });
    I(e, "Core/Responsive.js", [e["Core/Utilities.js"]], function (c) {
        var e = c.extend, x = c.find, C = c.isArray, q = c.isObject, w = c.merge, F = c.objectEach, y = c.pick, t = c.splat, m = c.uniqueKey, k; (function (d) {
            var b = []; d.compose = function (d) { -1 === b.indexOf(d) && (b.push(d), e(d.prototype, c.prototype)); return d }; var c = function () {
                function b() { } b.prototype.currentOptions = function (b) {
                    function d(b, f, a, h) {
                        var e; F(b, function (b, l) {
                            if (!h && -1 < c.collectionsWithUpdate.indexOf(l) && f[l]) for (b = t(b), a[l] = [], e = 0; e < Math.max(b.length, f[l].length); e++)f[l][e] &&
                                (void 0 === b[e] ? a[l][e] = f[l][e] : (a[l][e] = {}, d(b[e], f[l][e], a[l][e], h + 1))); else q(b) ? (a[l] = C(b) ? [] : {}, d(b, f[l] || {}, a[l], h + 1)) : a[l] = "undefined" === typeof f[l] ? null : f[l]
                        })
                    } var c = this, f = {}; d(b, this.options, f, 0); return f
                }; b.prototype.matchResponsiveRule = function (b, d) { var c = b.condition; (c.callback || function () { return this.chartWidth <= y(c.maxWidth, Number.MAX_VALUE) && this.chartHeight <= y(c.maxHeight, Number.MAX_VALUE) && this.chartWidth >= y(c.minWidth, 0) && this.chartHeight >= y(c.minHeight, 0) }).call(this) && d.push(b._id) };
                b.prototype.setResponsive = function (b, d) {
                    var c = this, f = this.options.responsive, h = this.currentResponsive, e = []; !d && f && f.rules && f.rules.forEach(function (a) { "undefined" === typeof a._id && (a._id = m()); c.matchResponsiveRule(a, e) }, this); d = w.apply(void 0, e.map(function (a) { return x((f || {}).rules || [], function (b) { return b._id === a }) }).map(function (a) { return a && a.chartOptions })); d.isResponsiveOptions = !0; e = e.toString() || void 0; e !== (h && h.ruleIds) && (h && this.update(h.undoOptions, b, !0), e ? (h = this.currentOptions(d), h.isResponsiveOptions =
                        !0, this.currentResponsive = { ruleIds: e, mergedOptions: d, undoOptions: h }, this.update(d, b, !0)) : this.currentResponsive = void 0)
                }; return b
            }()
        })(k || (k = {})); ""; ""; return k
    }); I(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Defaults.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/FormatUtilities.js"], e["Core/Renderer/RendererUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"],
    e["Core/Renderer/HTML/HTMLElement.js"], e["Core/Renderer/HTML/HTMLRenderer.js"], e["Core/Axis/Axis.js"], e["Core/Axis/DateTimeAxis.js"], e["Core/Axis/LogarithmicAxis.js"], e["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"], e["Core/Axis/Tick.js"], e["Core/Tooltip.js"], e["Core/Series/Point.js"], e["Core/Pointer.js"], e["Core/MSPointer.js"], e["Core/Legend/Legend.js"], e["Core/Chart/Chart.js"], e["Core/Axis/Stacking/StackingAxis.js"], e["Core/Axis/Stacking/StackItem.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"],
    e["Series/Column/ColumnSeries.js"], e["Series/Column/ColumnDataLabel.js"], e["Series/Pie/PieSeries.js"], e["Series/Pie/PieDataLabel.js"], e["Core/Series/DataLabel.js"], e["Core/Responsive.js"], e["Core/Color/Color.js"], e["Core/Time.js"]], function (c, e, x, C, q, w, F, y, t, m, k, d, b, f, h, p, G, D, v, B, r, a, z, l, u, n, E, g, A, H, J, M, S, R, I) {
        c.animate = q.animate; c.animObject = q.animObject; c.getDeferredAnimation = q.getDeferredAnimation; c.setAnimation = q.setAnimation; c.stop = q.stop; c.timers = C.timers; c.AST = w; c.Axis = b; c.Chart = z; c.chart =
            z.chart; c.Fx = C; c.Legend = a; c.PlotLineOrBand = p; c.Point = v; c.Pointer = r.isRequired() ? r : B; c.Series = n; c.StackItem = u; c.SVGElement = t; c.SVGRenderer = m; c.Tick = G; c.Time = I; c.Tooltip = D; c.Color = R; c.color = R.parse; d.compose(m); k.compose(t); c.defaultOptions = x.defaultOptions; c.getOptions = x.getOptions; c.time = x.defaultTime; c.setOptions = x.setOptions; c.dateFormat = F.dateFormat; c.format = F.format; c.numberFormat = F.numberFormat; c.addEvent = e.addEvent; c.arrayMax = e.arrayMax; c.arrayMin = e.arrayMin; c.attr = e.attr; c.clearTimeout = e.clearTimeout;
        c.correctFloat = e.correctFloat; c.createElement = e.createElement; c.css = e.css; c.defined = e.defined; c.destroyObjectProperties = e.destroyObjectProperties; c.discardElement = e.discardElement; c.distribute = y.distribute; c.erase = e.erase; c.error = e.error; c.extend = e.extend; c.extendClass = e.extendClass; c.find = e.find; c.fireEvent = e.fireEvent; c.getMagnitude = e.getMagnitude; c.getStyle = e.getStyle; c.inArray = e.inArray; c.isArray = e.isArray; c.isClass = e.isClass; c.isDOMElement = e.isDOMElement; c.isFunction = e.isFunction; c.isNumber =
            e.isNumber; c.isObject = e.isObject; c.isString = e.isString; c.keys = e.keys; c.merge = e.merge; c.normalizeTickInterval = e.normalizeTickInterval; c.objectEach = e.objectEach; c.offset = e.offset; c.pad = e.pad; c.pick = e.pick; c.pInt = e.pInt; c.relativeLength = e.relativeLength; c.removeEvent = e.removeEvent; c.seriesType = E.seriesType; c.splat = e.splat; c.stableSort = e.stableSort; c.syncTimeout = e.syncTimeout; c.timeUnits = e.timeUnits; c.uniqueKey = e.uniqueKey; c.useSerialIds = e.useSerialIds; c.wrap = e.wrap; A.compose(g); M.compose(n); f.compose(b);
        h.compose(b); J.compose(H); p.compose(b); S.compose(z); l.compose(b, z, n); return c
    }); I(e, "Core/Axis/Color/ColorAxisComposition.js", [e["Core/Color/Color.js"], e["Core/Utilities.js"]], function (c, e) {
        var x = c.parse, C = e.addEvent, q = e.extend, w = e.merge, F = e.pick, y = e.splat, t; (function (c) {
            function e() { var a = this, b = this.options; this.colorAxis = []; b.colorAxis && (b.colorAxis = y(b.colorAxis), b.colorAxis.forEach(function (b, d) { b.index = d; new z(a, b) })) } function d(a) {
                var b = this, d = function (d) {
                    d = a.allItems.indexOf(d); -1 !== d && (b.destroyItem(a.allItems[d]),
                        a.allItems.splice(d, 1))
                }, c = [], f, h; (this.chart.colorAxis || []).forEach(function (a) { (f = a.options) && f.showInLegend && (f.dataClasses && f.visible ? c = c.concat(a.getDataClassLegendSymbols()) : f.visible && c.push(a), a.series.forEach(function (a) { if (!a.options.showInLegend || f.dataClasses) "point" === a.options.legendType ? a.points.forEach(function (a) { d(a) }) : d(a) })) }); for (h = c.length; h--;)a.allItems.unshift(c[h])
            } function b(a) { a.visible && a.item.legendColor && a.item.legendItem.symbol.attr({ fill: a.item.legendColor }) } function f() {
                var a =
                    this.chart.colorAxis; a && a.forEach(function (a, b, d) { a.update({}, d) })
            } function h() { (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors() } function p() { var a = this.axisTypes; a ? -1 === a.indexOf("colorAxis") && a.push("colorAxis") : this.axisTypes = ["colorAxis"] } function m(a) { var b = this, d = a ? "show" : "hide"; b.visible = b.options.visible = !!a;["graphic", "dataLabel"].forEach(function (a) { if (b[a]) b[a][d]() }); this.series.buildKDTree() } function D() {
                var a = this, b = this.options.nullColor,
                d = this.colorAxis, c = this.colorKey; (this.data.length ? this.data : this.points).forEach(function (f) { var g = f.getNestedProperty(c); (g = f.options.color || (f.isNull || null === f.value ? b : d && "undefined" !== typeof g ? d.toColor(g, f) : f.color || a.color)) && f.color !== g && (f.color = g, "point" === a.options.legendType && f.legendItem && f.legendItem.label && a.chart.legend.colorizeItem(f, f.visible)) })
            } function v(a) {
                var b = a.prototype.createAxis; a.prototype.createAxis = function (a, d) {
                    if ("colorAxis" !== a) return b.apply(this, arguments); var c =
                        new z(this, w(d.axis, { index: this[a].length, isX: !1 })); this.isDirtyLegend = !0; this.axes.forEach(function (a) { a.series = [] }); this.series.forEach(function (a) { a.bindAxes(); a.isDirtyData = !0 }); F(d.redraw, !0) && this.redraw(d.animation); return c
                }
            } function B() { this.elem.attr("fill", x(this.start).tweenTo(x(this.end), this.pos), void 0, !0) } function r() { this.elem.attr("stroke", x(this.start).tweenTo(x(this.end), this.pos), void 0, !0) } var a = [], z; c.compose = function (c, k, n, t, g) {
                z || (z = c); -1 === a.indexOf(k) && (a.push(k), c = k.prototype,
                    c.collectionsWithUpdate.push("colorAxis"), c.collectionsWithInit.colorAxis = [c.addColorAxis], C(k, "afterGetAxes", e), v(k)); -1 === a.indexOf(n) && (a.push(n), k = n.prototype, k.fillSetter = B, k.strokeSetter = r); -1 === a.indexOf(t) && (a.push(t), C(t, "afterGetAllItems", d), C(t, "afterColorizeItem", b), C(t, "afterUpdate", f)); -1 === a.indexOf(g) && (a.push(g), q(g.prototype, { optionalAxis: "colorAxis", translateColors: D }), q(g.prototype.pointClass.prototype, { setVisible: m }), C(g, "afterTranslate", h, { order: 1 }), C(g, "bindAxes", p))
            }; c.pointSetVisible =
                m
        })(t || (t = {})); return t
    }); I(e, "Core/Axis/Color/ColorAxisDefaults.js", [], function () { return { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: { animation: { duration: 50 }, width: .01, color: "#999999" }, labels: { overflow: "justify", rotation: 0 }, minColor: "#e6ebf5", maxColor: "#003399", tickLength: 5, showInLegend: !0 } }); I(e, "Core/Axis/Color/ColorAxis.js", [e["Core/Axis/Axis.js"], e["Core/Color/Color.js"], e["Core/Axis/Color/ColorAxisComposition.js"], e["Core/Axis/Color/ColorAxisDefaults.js"],
    e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F, y) {
        var t = this && this.__extends || function () { var b = function (d, c) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var c in d) d.hasOwnProperty(c) && (b[c] = d[c]) }; return b(d, c) }; return function (d, c) { function f() { this.constructor = d } b(d, c); d.prototype = null === c ? Object.create(c) : (f.prototype = c.prototype, new f) } }(), m = e.parse,
        k = F.series, d = y.extend, b = y.isNumber, f = y.merge, h = y.pick; e = function (c) {
            function e(b, d) { var f = c.call(this, b, d) || this; f.beforePadding = !1; f.chart = void 0; f.coll = "colorAxis"; f.dataClasses = void 0; f.name = ""; f.options = void 0; f.stops = void 0; f.visible = !0; f.init(b, d); return f } t(e, c); e.compose = function (b, d, c, f) { x.compose(e, b, d, c, f) }; e.prototype.init = function (b, d) {
                var h = b.options.legend || {}, k = d.layout ? "vertical" !== d.layout : "vertical" !== h.layout, a = d.visible; h = f(e.defaultColorAxisOptions, d, {
                    showEmpty: !1, title: null,
                    visible: h.enabled && !1 !== a
                }); this.coll = "colorAxis"; this.side = d.side || k ? 2 : 1; this.reversed = d.reversed || !k; this.opposite = !k; c.prototype.init.call(this, b, h); this.userOptions.visible = a; d.dataClasses && this.initDataClasses(d); this.initStops(); this.horiz = k; this.zoomEnabled = !1
            }; e.prototype.initDataClasses = function (b) {
                var d = this.chart, c = this.legendItem = this.legendItem || {}, h = b.dataClasses.length, a = this.options, e, l = 0, k = d.options.chart.colorCount; this.dataClasses = e = []; c.labels = []; (b.dataClasses || []).forEach(function (b,
                    c) { b = f(b); e.push(b); if (d.styledMode || !b.color) "category" === a.dataClassColor ? (d.styledMode || (c = d.options.colors, k = c.length, b.color = c[l]), b.colorIndex = l, l++, l === k && (l = 0)) : b.color = m(a.minColor).tweenTo(m(a.maxColor), 2 > h ? .5 : c / (h - 1)) })
            }; e.prototype.hasData = function () { return !!(this.tickPositions || []).length }; e.prototype.setTickPositions = function () { if (!this.dataClasses) return c.prototype.setTickPositions.call(this) }; e.prototype.initStops = function () {
                this.stops = this.options.stops || [[0, this.options.minColor],
                [1, this.options.maxColor]]; this.stops.forEach(function (b) { b.color = m(b[1]) })
            }; e.prototype.setOptions = function (b) { c.prototype.setOptions.call(this, b); this.options.crosshair = this.options.marker }; e.prototype.setAxisSize = function () {
                var b = this.legendItem && this.legendItem.symbol, d = this.chart, c = d.options.legend || {}, f, a; b ? (this.left = c = b.attr("x"), this.top = f = b.attr("y"), this.width = a = b.attr("width"), this.height = b = b.attr("height"), this.right = d.chartWidth - c - a, this.bottom = d.chartHeight - f - b, this.len = this.horiz ?
                    a : b, this.pos = this.horiz ? c : f) : this.len = (this.horiz ? c.symbolWidth : c.symbolHeight) || e.defaultLegendLength
            }; e.prototype.normalizedValue = function (b) { this.logarithmic && (b = this.logarithmic.log2lin(b)); return 1 - (this.max - b) / (this.max - this.min || 1) }; e.prototype.toColor = function (b, d) {
                var c = this.dataClasses, f = this.stops, a; if (c) for (a = c.length; a--;) { var h = c[a]; var e = h.from; f = h.to; if (("undefined" === typeof e || b >= e) && ("undefined" === typeof f || b <= f)) { var k = h.color; d && (d.dataClass = a, d.colorIndex = h.colorIndex); break } } else {
                    b =
                    this.normalizedValue(b); for (a = f.length; a-- && !(b > f[a][0]);); e = f[a] || f[a + 1]; f = f[a + 1] || e; b = 1 - (f[0] - b) / (f[0] - e[0] || 1); k = e.color.tweenTo(f.color, b)
                } return k
            }; e.prototype.getOffset = function () {
                var b = this.legendItem && this.legendItem.group, d = this.chart.axisOffset[this.side]; if (b) {
                    this.axisParent = b; c.prototype.getOffset.call(this); var f = this.chart.legend; f.allItems.forEach(function (b) { b instanceof e && b.drawLegendSymbol(f, b) }); f.render(); this.chart.getMargins(!0); this.added || (this.added = !0, this.labelLeft = 0,
                        this.labelRight = this.width); this.chart.axisOffset[this.side] = d
                }
            }; e.prototype.setLegendColor = function () { var b = this.reversed, d = b ? 1 : 0; b = b ? 0 : 1; d = this.horiz ? [d, 0, b, 0] : [0, b, 0, d]; this.legendColor = { linearGradient: { x1: d[0], y1: d[1], x2: d[2], y2: d[3] }, stops: this.stops } }; e.prototype.drawLegendSymbol = function (b, d) {
                d = d.legendItem || {}; var c = b.padding, f = b.options, a = h(f.itemDistance, 10), k = this.horiz, l = h(f.symbolWidth, k ? e.defaultLegendLength : 12), m = h(f.symbolHeight, k ? 12 : e.defaultLegendLength); f = h(f.labelPadding, k ? 16 :
                    30); this.setLegendColor(); d.symbol || (d.symbol = this.chart.renderer.rect(0, b.baseline - 11, l, m).attr({ zIndex: 1 }).add(d.group)); d.labelWidth = l + c + (k ? a : this.options.labels.x + this.maxLabelLength); d.labelHeight = m + c + (k ? f : 0)
            }; e.prototype.setState = function (b) { this.series.forEach(function (d) { d.setState(b) }) }; e.prototype.setVisible = function () { }; e.prototype.getSeriesExtremes = function () {
                var b = this.series, d = b.length, c; this.dataMin = Infinity; for (this.dataMax = -Infinity; d--;) {
                    var f = b[d]; var a = f.colorKey = h(f.options.colorKey,
                        f.colorKey, f.pointValKey, f.zoneAxis, "y"); var e = f.pointArrayMap; var l = f[a + "Min"] && f[a + "Max"]; if (f[a + "Data"]) var m = f[a + "Data"]; else if (e) { m = []; e = e.indexOf(a); var n = f.yData; if (0 <= e && n) for (c = 0; c < n.length; c++)m.push(h(n[c][e], n[c])) } else m = f.yData; l ? (f.minColorValue = f[a + "Min"], f.maxColorValue = f[a + "Max"]) : (m = k.prototype.getExtremes.call(f, m), f.minColorValue = m.dataMin, f.maxColorValue = m.dataMax); "undefined" !== typeof f.minColorValue && (this.dataMin = Math.min(this.dataMin, f.minColorValue), this.dataMax = Math.max(this.dataMax,
                            f.maxColorValue)); l || k.prototype.applyExtremes.call(f)
                }
            }; e.prototype.drawCrosshair = function (b, d) {
                var f = this.legendItem || {}, h = d && d.plotX, a = d && d.plotY, e = this.pos, l = this.len; if (d) {
                    var k = this.toPixels(d.getNestedProperty(d.series.colorKey)); k < e ? k = e - 2 : k > e + l && (k = e + l + 2); d.plotX = k; d.plotY = this.len - k; c.prototype.drawCrosshair.call(this, b, d); d.plotX = h; d.plotY = a; this.cross && !this.cross.addedToColorAxis && f.group && (this.cross.addClass("highcharts-coloraxis-marker").add(f.group), this.cross.addedToColorAxis = !0,
                        this.chart.styledMode || "object" !== typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color }))
                }
            }; e.prototype.getPlotLinePath = function (d) { var f = this.left, h = d.translatedValue, e = this.top; return b(h) ? this.horiz ? [["M", h - 4, e - 6], ["L", h + 4, e - 6], ["L", h, e], ["Z"]] : [["M", f, h], ["L", f - 6, h + 6], ["L", f - 6, h - 6], ["Z"]] : c.prototype.getPlotLinePath.call(this, d) }; e.prototype.update = function (b, d) {
                var f = this.chart.legend; this.series.forEach(function (b) { b.isDirtyData = !0 }); (b.dataClasses && f.allItems || this.dataClasses) &&
                    this.destroyItems(); c.prototype.update.call(this, b, d); this.legendItem && this.legendItem.label && (this.setLegendColor(), f.colorizeItem(this, !0))
            }; e.prototype.destroyItems = function () { var b = this.chart, d = this.legendItem || {}; if (d.label) b.legend.destroyItem(this); else if (d.labels) { var c = 0; for (d = d.labels; c < d.length; c++)b.legend.destroyItem(d[c]) } b.isDirtyLegend = !0 }; e.prototype.destroy = function () { this.chart.isDirtyLegend = !0; this.destroyItems(); c.prototype.destroy.apply(this, [].slice.call(arguments)) }; e.prototype.remove =
                function (b) { this.destroyItems(); c.prototype.remove.call(this, b) }; e.prototype.getDataClassLegendSymbols = function () {
                    var b = this, c = b.chart, f = b.legendItem && b.legendItem.labels || [], e = c.options.legend, a = h(e.valueDecimals, -1), k = h(e.valueSuffix, ""), l = function (a) { return b.series.reduce(function (b, d) { b.push.apply(b, d.points.filter(function (b) { return b.dataClass === a })); return b }, []) }, m; f.length || b.dataClasses.forEach(function (h, e) {
                        var g = h.from, n = h.to, p = c.numberFormatter, r = !0; m = ""; "undefined" === typeof g ? m = "< " :
                            "undefined" === typeof n && (m = "> "); "undefined" !== typeof g && (m += p(g, a) + k); "undefined" !== typeof g && "undefined" !== typeof n && (m += " - "); "undefined" !== typeof n && (m += p(n, a) + k); f.push(d({ chart: c, name: m, options: {}, drawLegendSymbol: w.drawRectangle, visible: !0, isDataClass: !0, setState: function (a) { for (var b = 0, d = l(e); b < d.length; b++)d[b].setState(a) }, setVisible: function () { this.visible = r = b.visible = !r; for (var a = 0, d = l(e); a < d.length; a++)d[a].setVisible(r); c.legend.colorizeItem(this, r) } }, h))
                    }); return f
                }; e.defaultColorAxisOptions =
                    C; e.defaultLegendLength = 200; e.keepProps = ["legendItem"]; return e
        }(c); Array.prototype.push.apply(c.keepProps, e.keepProps); ""; return e
    }); I(e, "Maps/MapNavigationDefaults.js", [e["Core/Defaults.js"], e["Core/Utilities.js"]], function (c, e) {
        e = e.extend; var x = {
            buttonOptions: { alignTo: "plotBox", align: "left", verticalAlign: "top", x: 0, width: 18, height: 18, padding: 5, style: { fontSize: "15px", fontWeight: "bold" }, theme: { "stroke-width": 1, "text-align": "center" } }, buttons: {
                zoomIn: {
                    onclick: function () { this.mapZoom(.5) }, text: "+",
                    y: 0
                }, zoomOut: { onclick: function () { this.mapZoom(2) }, text: "-", y: 28 }
            }, mouseWheelSensitivity: 1.1
        }; e(c.defaultOptions.lang, { zoomIn: "Zoom in", zoomOut: "Zoom out" }); return c.defaultOptions.mapNavigation = x
    }); I(e, "Maps/MapNavigation.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e, x) {
        function C(b) { b && (b.preventDefault && b.preventDefault(), b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0) } function q(b) { this.navButtons = []; this.init(b) } var w = e.doc, F = x.addEvent, y = x.extend,
            t = x.isNumber, m = x.merge, k = x.objectEach, d = x.pick; q.prototype.init = function (b) { this.chart = b }; q.prototype.update = function (b) {
                var c = this, h = this.chart, e = h.options.mapNavigation, t, q = function (b) { this.handler.call(h, b); C(b) }, v = c.navButtons; b && (e = h.options.mapNavigation = m(h.options.mapNavigation, b)); for (; v.length;)v.pop().destroy(); d(e.enableButtons, e.enabled) && !h.renderer.forExport && (c.navButtonsGroup || (c.navButtonsGroup = h.renderer.g().attr({ zIndex: 4 }).add()), k(e.buttons, function (b, d) {
                    b = m(e.buttonOptions,
                        b); !h.styledMode && b.theme && (t = b.theme, t.style = m(b.theme.style, b.style)); var a = h.renderer.button(b.text || "", 0, 0, q, t, void 0, void 0, void 0, "zoomIn" === d ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + { zoomIn: "zoom-in", zoomOut: "zoom-out" }[d]).attr({ width: b.width, height: b.height, title: h.options.lang[d], padding: b.padding, zIndex: 5 }).add(c.navButtonsGroup); a.handler = b.onclick; F(a.element, "dblclick", C); v.push(a); y(b, { width: a.width, height: 2 * a.height }); if (h.hasLoaded) a.align(b, !1,
                            b.alignTo); else var f = F(h, "load", function () { a.element && a.align(b, !1, b.alignTo); f() })
                }), b = function () { var b = h.exportingGroup && h.exportingGroup.getBBox(); if (b) { var d = c.navButtonsGroup.getBBox(); if (!(d.x >= b.x + b.width || d.x + d.width <= b.x || d.y >= b.y + b.height || d.y + d.height <= b.y)) { var a = -d.y - d.height + b.y - 5; b = b.y + b.height - d.y + 5; c.navButtonsGroup.attr({ translateY: "bottom" === (e.buttonOptions && e.buttonOptions.verticalAlign) ? a : b }) } } }, h.hasLoaded || F(h, "render", b)); this.updateEvents(e)
            }; q.prototype.updateEvents = function (b) {
                var c =
                    this.chart; d(b.enableDoubleClickZoom, b.enabled) || b.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || F(c.container, "dblclick", function (b) { c.pointer.onContainerDblClick(b) }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick()); d(b.enableMouseWheelZoom, b.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel || F(c.container, void 0 !== w.onwheel ? "wheel" : void 0 !== w.onmousewheel ? "mousewheel" : "DOMMouseScroll", function (b) {
                        c.pointer.inClass(b.target, "highcharts-no-mousewheel") || (c.pointer.onContainerMouseWheel(b),
                            C(b)); return !1
                    }) : this.unbindMouseWheel && (this.unbindMouseWheel = this.unbindMouseWheel())
            }; y(c.prototype, {
                fitToBox: function (b, d) { [["x", "width"], ["y", "height"]].forEach(function (c) { var f = c[0]; c = c[1]; b[f] + b[c] > d[f] + d[c] && (b[c] > d[c] ? (b[c] = d[c], b[f] = d[f]) : b[f] = d[f] + d[c] - b[c]); b[c] > d[c] && (b[c] = d[c]); b[f] < d[f] && (b[f] = d[f]) }); return b }, mapZoom: function (b, d, c, e, k) {
                    this.mapView && (t(b) && (b = Math.log(b) / Math.log(.5)), this.mapView.zoomBy(b, t(d) && t(c) ? this.mapView.projection.inverse([d, c]) : void 0, t(e) && t(k) ? [e, k] :
                        void 0))
                }
            }); F(c, "beforeRender", function () { this.mapNavigation = new q(this); this.mapNavigation.update() }); e.MapNavigation = q
    }); I(e, "Maps/MapPointer.js", [e["Core/Pointer.js"], e["Core/Utilities.js"]], function (c, e) {
        var x = e.defined, C = e.extend, q = e.pick; e = e.wrap; var w = c.prototype.normalize, F = 0, y; C(c.prototype, {
            normalize: function (c, e) { var k = this.chart; c = w.call(this, c, e); k && k.mapView && (e = k.mapView.pixelsToLonLat({ x: c.chartX - k.plotLeft, y: c.chartY - k.plotTop })) && C(c, e); return c }, onContainerDblClick: function (c) {
                var e =
                    this.chart; c = this.normalize(c); e.options.mapNavigation.enableDoubleClickZoomTo ? e.pointer.inClass(c.target, "highcharts-tracker") && e.hoverPoint && e.hoverPoint.zoomTo() : e.isInsidePlot(c.chartX - e.plotLeft, c.chartY - e.plotTop) && e.mapZoom(.5, void 0, void 0, c.chartX, c.chartY)
            }, onContainerMouseWheel: function (c) {
                var e = this.chart; c = this.normalize(c); var k = x(c.wheelDelta) && -c.wheelDelta / 120 || c.deltaY || c.detail; 1 <= Math.abs(k) && (F += Math.abs(k), y && clearTimeout(y), y = setTimeout(function () { F = 0 }, 50)); 10 > F && e.isInsidePlot(c.chartX -
                    e.plotLeft, c.chartY - e.plotTop) && e.mapView && e.mapView.zoomBy((e.options.mapNavigation.mouseWheelSensitivity - 1) * -k, void 0, [c.chartX, c.chartY], 1 > Math.abs(k) ? !1 : void 0)
            }
        }); e(c.prototype, "zoomOption", function (c) { var e = this.chart.options.mapNavigation; q(e.enableTouchZoom, e.enabled) && (this.chart.options.chart.zooming.pinchType = "xy"); c.apply(this, [].slice.call(arguments, 1)) }); e(c.prototype, "pinchTranslate", function (c, e, k, d, b, f, h) {
            c.call(this, e, k, d, b, f, h); "map" === this.chart.options.chart.type && this.hasZoom &&
                (c = d.scaleX > d.scaleY, this.pinchTranslateDirection(!c, e, k, d, b, f, h, c ? d.scaleX : d.scaleY))
        })
    }); I(e, "Series/ColorMapComposition.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e) {
        var x = c.seriesTypes.column.prototype, C = e.addEvent, q = e.defined, w; (function (c) {
            function e(c) { this.moveToTopOnHover && this.graphic && this.graphic.attr({ zIndex: c && "hover" === c.state ? 1 : 0 }) } var t = []; c.pointMembers = {
                dataLabelOnNull: !0, moveToTopOnHover: !0, isValid: function () {
                    return null !== this.value && Infinity !==
                        this.value && -Infinity !== this.value && (void 0 === this.value || !isNaN(this.value))
                }
            }; c.seriesMembers = { colorKey: "value", axisTypes: ["xAxis", "yAxis", "colorAxis"], parallelArrays: ["x", "y", "value"], pointArrayMap: ["value"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], colorAttribs: function (c) { var e = {}; !q(c.color) || c.state && "normal" !== c.state || (e[this.colorProp || "fill"] = c.color); return e }, pointAttribs: x.pointAttribs }; c.compose = function (c) {
                var k = c.prototype.pointClass; -1 === t.indexOf(k) && (t.push(k), C(k,
                    "afterSetState", e)); return c
            }
        })(w || (w = {})); return w
    }); I(e, "Maps/MapSymbols.js", [e["Core/Renderer/SVG/SVGRenderer.js"]], function (c) {
        function e(c, e, q, w, F, y, t, m) { return [["M", c + F, e], ["L", c + q - y, e], ["C", c + q - y / 2, e, c + q, e + y / 2, c + q, e + y], ["L", c + q, e + w - t], ["C", c + q, e + w - t / 2, c + q - t / 2, e + w, c + q - t, e + w], ["L", c + m, e + w], ["C", c + m / 2, e + w, c, e + w - m / 2, c, e + w - m], ["L", c, e + F], ["C", c, e + F / 2, c + F / 2, e, c + F, e], ["Z"]] } c = c.prototype.symbols; c.bottombutton = function (c, C, q, w, F) { F = F && F.r || 0; return e(c - 1, C - 1, q, w, 0, 0, F, F) }; c.topbutton = function (c, C,
            q, w, F) { F = F && F.r || 0; return e(c - 1, C - 1, q, w, F, F, 0, 0) }; return c
    }); I(e, "Core/Chart/MapChart.js", [e["Core/Chart/Chart.js"], e["Core/Defaults.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
        var q = this && this.__extends || function () {
            var c = function (e, k) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b } || function (d, b) { for (var c in b) b.hasOwnProperty(c) && (d[c] = b[c]) }; return c(e, k) }; return function (e, k) {
                function d() { this.constructor = e } c(e, k);
                e.prototype = null === k ? Object.create(k) : (d.prototype = k.prototype, new d)
            }
        }(), w = e.getOptions, F = C.merge, y = C.pick; c = function (c) {
            function e() { return null !== c && c.apply(this, arguments) || this } q(e, c); e.prototype.init = function (e, d) {
                var b = w().credits; e = F({ chart: { panning: { enabled: !0, type: "xy" }, type: "map" }, credits: { mapText: y(b.mapText, ' \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'), mapTextFull: y(b.mapTextFull, "{geojson.copyright}") }, mapView: {}, tooltip: { followTouchMove: !1 } }, e); c.prototype.init.call(this,
                    e, d)
            }; return e
        }(c); (function (c) { c.maps = {}; c.mapChart = function (e, k, d) { return new c(e, k, d) }; c.splitPath = function (c) { "string" === typeof c && (c = c.replace(/([A-Za-z])/g, " $1 ").replace(/^\s*/, "").replace(/\s*$/, ""), c = c.split(/[ ,;]+/).map(function (c) { return /[A-za-z]/.test(c) ? c : parseFloat(c) })); return x.prototype.pathToSegments(c) } })(c || (c = {})); return c
    }); I(e, "Maps/MapUtilities.js", [], function () {
        return {
            boundsFromPath: function (c) {
                var e = -Number.MAX_VALUE, x = Number.MAX_VALUE, C = -Number.MAX_VALUE, q = Number.MAX_VALUE,
                w; c.forEach(function (c) { var y = c[c.length - 2]; c = c[c.length - 1]; "number" === typeof y && "number" === typeof c && (x = Math.min(x, y), e = Math.max(e, y), q = Math.min(q, c), C = Math.max(C, c), w = !0) }); if (w) return { x1: x, y1: q, x2: e, y2: C }
            }, pointInPolygon: function (c, e) { var x, C = !1, q = c.x, w = c.y; c = 0; for (x = e.length - 1; c < e.length; x = c++) { var F = e[c][1] > w; var y = e[x][1] > w; F !== y && q < (e[x][0] - e[c][0]) * (w - e[c][1]) / (e[x][1] - e[c][1]) + e[c][0] && (C = !C) } return C }
        }
    }); I(e, "Series/Map/MapPoint.js", [e["Series/ColorMapComposition.js"], e["Maps/MapUtilities.js"],
    e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
        var q = this && this.__extends || function () { var c = function (e, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, d) { b.__proto__ = d } || function (b, d) { for (var c in d) d.hasOwnProperty(c) && (b[c] = d[c]) }; return c(e, d) }; return function (e, d) { function b() { this.constructor = e } c(e, d); e.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) } }(), w = e.boundsFromPath, F = C.extend, y = C.isNumber, t = C.pick; e = function (c) {
            function e() {
                var d =
                    null !== c && c.apply(this, arguments) || this; d.options = void 0; d.path = void 0; d.series = void 0; return d
            } q(e, c); e.getProjectedPath = function (d, b) { d.projectedPath || (b && d.geometry ? (b.hasCoordinates = !0, d.projectedPath = b.path(d.geometry)) : d.projectedPath = d.path); return d.projectedPath || [] }; e.prototype.applyOptions = function (d, b) {
                var f = this.series; d = c.prototype.applyOptions.call(this, d, b); b = f.joinBy; f.mapData && f.mapMap && (b = c.prototype.getNestedProperty.call(d, b[1]), (b = "undefined" !== typeof b && f.mapMap[b]) ? F(d, b) :
                    -1 !== f.pointArrayMap.indexOf("value") && (d.value = d.value || null)); return d
            }; e.prototype.getProjectedBounds = function (d) { d = e.getProjectedPath(this, d); d = w(d); var b = this.properties; if (d) { var c = b && b["hc-middle-x"]; b = b && b["hc-middle-y"]; d.midX = d.x1 + (d.x2 - d.x1) * t(this.middleX, y(c) ? c : .5); c = t(this.middleY, y(b) ? b : .5); this.geometry || (c = 1 - c); d.midY = d.y2 - (d.y2 - d.y1) * c; return d } }; e.prototype.onMouseOver = function (d) {
                C.clearTimeout(this.colorInterval); if (!this.isNull && this.visible || this.series.options.nullInteraction) c.prototype.onMouseOver.call(this,
                    d); else this.series.onMouseOut(d)
            }; e.prototype.setVisible = function (d) { var b = d ? "show" : "hide"; this.visible = this.options.visible = !!d; if (this.dataLabel) this.dataLabel[b](); this.graphic && this.graphic.attr(this.series.pointAttribs(this)) }; e.prototype.zoomTo = function () {
                var d = this.series.chart, b = d.mapView, c = this.bounds; if (b && c) {
                    var e = y(this.insetIndex) && b.insets[this.insetIndex]; if (e) {
                        var k = e.projectedUnitsToPixels({ x: c.x1, y: c.y1 }); c = e.projectedUnitsToPixels({ x: c.x2, y: c.y2 }); k = b.pixelsToProjectedUnits({
                            x: k.x,
                            y: k.y
                        }); c = b.pixelsToProjectedUnits({ x: c.x, y: c.y }); c = { x1: k.x, y1: k.y, x2: c.x, y2: c.y }
                    } b.fitToBounds(c, void 0, !1); this.series.isDirty = !0; d.redraw()
                }
            }; return e
        }(x.seriesTypes.scatter.prototype.pointClass); F(e.prototype, { dataLabelOnNull: c.pointMembers.dataLabelOnNull, moveToTopOnHover: c.pointMembers.moveToTopOnHover, isValid: c.pointMembers.isValid }); return e
    }); I(e, "Maps/MapViewOptionsDefault.js", [], function () {
        return {
            center: [0, 0], fitToGeometry: void 0, maxZoom: void 0, padding: 0, projection: {
                name: void 0, parallels: void 0,
                rotation: void 0
            }, zoom: void 0
        }
    }); I(e, "Maps/MapViewInsetsOptionsDefault.js", [], function () { return { borderColor: "#cccccc", borderWidth: 1, center: [0, 0], padding: "10%", relativeTo: "mapBoundingBox", units: "percent" } }); I(e, "Extensions/GeoJSON.js", [e["Core/Chart/Chart.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
        function q(d, b) {
            b || (b = Object.keys(d.objects)[0]); b = d.objects[b]; if (b["hc-decoded-geojson"]) return b["hc-decoded-geojson"]; var c = d.arcs; if (d.transform) {
                var e =
                    d.transform, k = e.scale, m = e.translate; c = d.arcs.map(function (b) { var d = 0, c = 0; return b.map(function (a) { a = a.slice(); a[0] = (d += a[0]) * k[0] + m[0]; a[1] = (c += a[1]) * k[1] + m[1]; return a }) })
            } var q = function (b) { return "number" === typeof b[0] ? b.reduce(function (b, d, a) { var f = 0 > d ? c[~d] : c[d]; 0 > d ? (f = f.slice(0, 0 === a ? f.length : f.length - 1), f.reverse()) : a && (f = f.slice(1)); return b.concat(f) }, []) : b.map(q) }; e = b.geometries.map(function (b) {
                return {
                    type: "Feature", properties: b.properties, geometry: {
                        type: b.type, coordinates: b.coordinates ||
                            q(b.arcs)
                    }
                }
            }); d = { type: "FeatureCollection", copyright: d.copyright, copyrightShort: d.copyrightShort, copyrightUrl: d.copyrightUrl, features: e, "hc-recommended-mapview": b["hc-recommended-mapview"], bbox: d.bbox, title: d.title }; return b["hc-decoded-geojson"] = d
        } function w(d, b, c) {
            void 0 === b && (b = "map"); var f = []; d = "Topology" === d.type ? q(d) : d; d.features.forEach(function (d) {
                var c = d.geometry || {}, e = c.type; c = c.coordinates; d = d.properties; var h; "map" !== b && "mapbubble" !== b || "Polygon" !== e && "MultiPolygon" !== e ? "mapline" !== b ||
                    "LineString" !== e && "MultiLineString" !== e ? "mappoint" === b && "Point" === e && c.length && (h = { geometry: { coordinates: c, type: e } }) : c.length && (h = { geometry: { coordinates: c, type: e } }) : c.length && (h = { geometry: { coordinates: c, type: e } }); if (h) { e = d && (d.name || d.NAME); c = d && d.lon; var k = d && d.lat; f.push(m(h, { lat: "number" === typeof k ? k : void 0, lon: "number" === typeof c ? c : void 0, name: "string" === typeof e ? e : void 0, properties: d })) }
            }); c && d.copyrightShort && (c.chart.mapCredits = F(c.chart.options.credits.mapText, { geojson: d }), c.chart.mapCreditsFull =
                F(c.chart.options.credits.mapTextFull, { geojson: d })); return f
        } var F = e.format, y = x.win, t = C.error, m = C.extend, k = C.merge; e = C.wrap; ""; c.prototype.transformFromLatLon = function (d, b) {
            var c = this.options.chart.proj4 || y.proj4; if (c) {
                var e = b.jsonmarginX; e = void 0 === e ? 0 : e; var k = b.jsonmarginY; k = void 0 === k ? 0 : k; var m = b.jsonres; m = void 0 === m ? 1 : m; var q = b.scale; q = void 0 === q ? 1 : q; var v = b.xoffset; v = void 0 === v ? 0 : v; var B = b.xpan; B = void 0 === B ? 0 : B; var r = b.yoffset; r = void 0 === r ? 0 : r; var a = b.ypan; a = void 0 === a ? 0 : a; d = c(b.crs, [d.lon, d.lat]);
                c = b.cosAngle || b.rotation && Math.cos(b.rotation); var z = b.sinAngle || b.rotation && Math.sin(b.rotation); b = b.rotation ? [d[0] * c + d[1] * z, -d[0] * z + d[1] * c] : d; return { x: ((b[0] - v) * q + B) * m + e, y: -(((r - b[1]) * q + a) * m - k) }
            } t(21, !1, this)
        }; c.prototype.transformToLatLon = function (d, b) {
            var c = this.options.chart.proj4 || y.proj4; if (!c) t(21, !1, this); else if (null !== d.y) {
                var e = b.jsonmarginX, k = b.jsonmarginY, m = b.jsonres; m = void 0 === m ? 1 : m; var q = b.scale; q = void 0 === q ? 1 : q; var v = b.xoffset, B = b.xpan, r = b.yoffset, a = b.ypan; d = {
                    x: ((d.x - (void 0 === e ?
                        0 : e)) / m - (void 0 === B ? 0 : B)) / q + (void 0 === v ? 0 : v), y: ((d.y - (void 0 === k ? 0 : k)) / m + (void 0 === a ? 0 : a)) / q + (void 0 === r ? 0 : r)
                }; e = b.cosAngle || b.rotation && Math.cos(b.rotation); k = b.sinAngle || b.rotation && Math.sin(b.rotation); b = c(b.crs, "WGS84", b.rotation ? { x: d.x * e + d.y * -k, y: d.x * k + d.y * e } : d); return { lat: b.y, lon: b.x }
            }
        }; c.prototype.fromPointToLatLon = function (d) { return this.mapView && this.mapView.projectedUnitsToLonLat(d) }; c.prototype.fromLatLonToPoint = function (d) { return this.mapView && this.mapView.lonLatToProjectedUnits(d) }; e(c.prototype,
            "addCredits", function (d, b) { b = k(!0, this.options.credits, b); this.mapCredits && (b.href = null); d.call(this, b); this.credits && this.mapCreditsFull && this.credits.attr({ title: this.mapCreditsFull }) }); x.geojson = w; x.topo2geo = q; return { geojson: w, topo2geo: q }
    }); I(e, "Core/Geometry/PolygonClip.js", [], function () {
        var c = function (c, e, w) { return (e[0] - c[0]) * (w[1] - c[1]) > (e[1] - c[1]) * (w[0] - c[0]) }, e = function (c, e, w, x) {
            var q = [c[0] - e[0], c[1] - e[1]], t = [w[0] - x[0], w[1] - x[1]]; c = c[0] * e[1] - c[1] * e[0]; w = w[0] * x[1] - w[1] * x[0]; x = 1 / (q[0] * t[1] -
                q[1] * t[0]); q = [(c * t[0] - w * q[0]) * x, (c * t[1] - w * q[1]) * x]; q.isIntersection = !0; return q
        }, x; (function (x) {
            x.clipLineString = function (c, e) { var q = []; c = x.clipPolygon(c, e, !1); for (e = 1; e < c.length; e++)c[e].isIntersection && c[e - 1].isIntersection && (q.push(c.splice(0, e)), e = 0), e === c.length - 1 && q.push(c); return q }; x.clipPolygon = function (q, w, x) {
                void 0 === x && (x = !0); for (var y = w[w.length - 1], t, m, k = q, d = 0; d < w.length; d++) {
                    var b = k; q = w[d]; k = []; t = x ? b[b.length - 1] : b[0]; for (var f = 0; f < b.length; f++)m = b[f], c(y, q, m) ? (c(y, q, t) || k.push(e(y, q,
                        t, m)), k.push(m)) : c(y, q, t) && k.push(e(y, q, t, m)), t = m; y = q
                } return k
            }
        })(x || (x = {})); return x
    }); I(e, "Maps/Projections/LambertConformalConic.js", [], function () {
        var c = Math.sign || function (c) { return 0 === c ? 0 : 0 < c ? 1 : -1 }, e = Math.PI / 180, x = Math.PI / 2; return function () {
            function C(q) {
                var w, C = (q.parallels || []).map(function (c) { return c * e }), y = C[0] || 0; C = null !== (w = C[1]) && void 0 !== w ? w : y; w = Math.cos(y); "object" === typeof q.projectedBounds && (this.projectedBounds = q.projectedBounds); q = y === C ? Math.sin(y) : Math.log(w / Math.cos(C)) / Math.log(Math.tan((x +
                    C) / 2) / Math.tan((x + y) / 2)); 1e-10 > Math.abs(q) && (q = 1e-10 * (c(q) || 1)); this.n = q; this.c = w * Math.pow(Math.tan((x + y) / 2), q) / q
            } C.prototype.forward = function (c) { var q = c[0] * e, C = this.c, y = this.n, t = this.projectedBounds; c = c[1] * e; 0 < C ? c < -x + .000001 && (c = -x + .000001) : c > x - .000001 && (c = x - .000001); var m = C / Math.pow(Math.tan((x + c) / 2), y); c = m * Math.sin(y * q) * 63.78137; q = 63.78137 * (C - m * Math.cos(y * q)); C = [c, q]; t && (c < t.x1 || c > t.x2 || q < t.y1 || q > t.y2) && (C.outside = !0); return C }; C.prototype.inverse = function (q) {
                var w = q[0] / 63.78137, C = this.c, y = this.n;
                q = C - q[1] / 63.78137; var t = c(y) * Math.sqrt(w * w + q * q), m = Math.atan2(w, Math.abs(q)) * c(q); 0 > q * y && (m -= Math.PI * c(w) * c(q)); return [m / y / e, (2 * Math.atan(Math.pow(C / t, 1 / y)) - x) / e]
            }; return C
        }()
    }); I(e, "Maps/Projections/EqualEarth.js", [], function () {
        var c = Math.sqrt(3) / 2; return function () {
            function e() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -97.52595454902263, y2: 97.52595454902263 } } e.prototype.forward = function (e) {
                var x = Math.PI / 180, q = Math.asin(c * Math.sin(e[1] * x)), w = q * q, F = w * w * w; return [e[0] * x * Math.cos(q) *
                    74.03120656864502 / (c * (1.340264 + 3 * -.081106 * w + F * (7 * .000893 + .034164 * w))), 74.03120656864502 * q * (1.340264 + -.081106 * w + F * (.000893 + .003796 * w))]
            }; e.prototype.inverse = function (e) {
                var x = e[0] / 74.03120656864502; e = e[1] / 74.03120656864502; var q = 180 / Math.PI, w = e, F; for (F = 0; 12 > F; ++F) { var y = w * w; var t = y * y * y; var m = w * (1.340264 + -.081106 * y + t * (.000893 + .003796 * y)) - e; y = 1.340264 + 3 * -.081106 * y + t * (7 * .000893 + .034164 * y); w -= m /= y; if (1e-9 > Math.abs(m)) break } y = w * w; return [q * c * x * (1.340264 + 3 * -.081106 * y + y * y * y * (7 * .000893 + .034164 * y)) / Math.cos(w),
                q * Math.asin(Math.sin(w) / c)]
            }; return e
        }()
    }); I(e, "Maps/Projections/Miller.js", [], function () { var c = Math.PI / 4, e = Math.PI / 180; return function () { function x() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -146.91480769173063, y2: 146.91480769173063 } } x.prototype.forward = function (x) { return [x[0] * e * 63.78137, 79.7267125 * Math.log(Math.tan(c + .4 * x[1] * e))] }; x.prototype.inverse = function (x) { return [x[0] / 63.78137 / e, 2.5 * (Math.atan(Math.exp(x[1] / 63.78137 * .8)) - c) / e] }; return x }() }); I(e, "Maps/Projections/Orthographic.js",
        [], function () {
            var c = Math.PI / 180; return function () {
                function e() { this.antimeridianCutting = !1; this.bounds = { x1: -63.78460826781007, x2: 63.78460826781007, y1: -63.78460826781007, y2: 63.78460826781007 } } e.prototype.forward = function (e) { var x = e[0]; e = e[1] * c; e = [Math.cos(e) * Math.sin(x * c) * 63.78460826781007, 63.78460826781007 * Math.sin(e)]; if (-90 > x || 90 < x) e.outside = !0; return e }; e.prototype.inverse = function (e) {
                    var x = e[0] / 63.78460826781007; e = e[1] / 63.78460826781007; var q = Math.sqrt(x * x + e * e), w = Math.asin(q), F = Math.sin(w); return [Math.atan2(x *
                        F, q * Math.cos(w)) / c, Math.asin(q && e * F / q) / c]
                }; return e
            }()
        }); I(e, "Maps/Projections/WebMercator.js", [], function () {
            var c = Math.PI / 180; return function () {
                function e() { this.bounds = { x1: -200.37508342789243, x2: 200.37508342789243, y1: -200.3750834278071, y2: 200.3750834278071 }; this.maxLatitude = 85.0511287798 } e.prototype.forward = function (e) { var x = Math.sin(e[1] * c); x = [63.78137 * e[0] * c, 63.78137 * Math.log((1 + x) / (1 - x)) / 2]; 85.0511287798 < Math.abs(e[1]) && (x.outside = !0); return x }; e.prototype.inverse = function (e) {
                    return [e[0] / (63.78137 *
                        c), (2 * Math.atan(Math.exp(e[1] / 63.78137)) - Math.PI / 2) / c]
                }; return e
            }()
        }); I(e, "Maps/Projections/ProjectionRegistry.js", [e["Maps/Projections/LambertConformalConic.js"], e["Maps/Projections/EqualEarth.js"], e["Maps/Projections/Miller.js"], e["Maps/Projections/Orthographic.js"], e["Maps/Projections/WebMercator.js"]], function (c, e, x, C, q) { return { EqualEarth: e, LambertConformalConic: c, Miller: x, Orthographic: C, WebMercator: q } }); I(e, "Maps/Projection.js", [e["Core/Geometry/PolygonClip.js"], e["Maps/Projections/ProjectionRegistry.js"],
        e["Core/Utilities.js"]], function (c, e, x) {
            var C = this && this.__spreadArray || function (c, d, b) { if (b || 2 === arguments.length) for (var f = 0, e = d.length, k; f < e; f++)!k && f in d || (k || (k = Array.prototype.slice.call(d, 0, f)), k[f] = d[f]); return c.concat(k || Array.prototype.slice.call(d)) }, q = c.clipLineString, w = c.clipPolygon, F = x.clamp, y = x.erase, t = 2 * Math.PI / 360, m = function (c) { -180 > c && (c += 360); 180 < c && (c -= 360); return c }; return function () {
                function c(d) {
                    void 0 === d && (d = {}); this.hasGeoProjection = this.hasCoordinates = !1; this.maxLatitude =
                        90; this.options = d; var b = d.name, f = d.projectedBounds, e = d.rotation; this.rotator = e ? this.getRotator(e) : void 0; if (b = b ? c.registry[b] : void 0) this.def = new b(d); var k = this.def, m = this.rotator; k && (this.maxLatitude = k.maxLatitude || 90, this.hasGeoProjection = !0); m && k ? (this.forward = function (b) { return k.forward(m.forward(b)) }, this.inverse = function (b) { return m.inverse(k.inverse(b)) }) : k ? (this.forward = function (b) { return k.forward(b) }, this.inverse = function (b) { return k.inverse(b) }) : m && (this.forward = m.forward, this.inverse =
                            m.inverse); this.bounds = "world" === f ? k && k.bounds : f
                } c.add = function (d, b) { c.registry[d] = b }; c.greatCircle = function (d, b, c) {
                    var e = Math.atan2, f = Math.cos, k = Math.sin, m = Math.sqrt, v = d[1] * t, B = d[0] * t, r = b[1] * t, a = b[0] * t, z = r - v, l = a - B; z = k(z / 2) * k(z / 2) + f(v) * f(r) * k(l / 2) * k(l / 2); z = 2 * e(m(z), m(1 - z)); var u = Math.round(6371E3 * z / 5E5); l = []; c && l.push(d); if (1 < u) for (u = d = 1 / u; .999 > u; u += d) { var n = k((1 - u) * z) / k(z), q = k(u * z) / k(z), g = n * f(v) * f(B) + q * f(r) * f(a), A = n * f(v) * k(B) + q * f(r) * k(a); n = n * k(v) + q * k(r); n = e(n, m(g * g + A * A)); g = e(A, g); l.push([g / t, n / t]) } c &&
                        l.push(b); return l
                }; c.insertGreatCircles = function (d) { for (var b = d.length - 1; b--;)if (10 < Math.max(Math.abs(d[b][0] - d[b + 1][0]), Math.abs(d[b][1] - d[b + 1][1]))) { var f = c.greatCircle(d[b], d[b + 1]); f.length && d.splice.apply(d, C([b + 1, 0], f, !1)) } }; c.toString = function (d) { d = d || {}; var b = d.rotation; return [d.name, b && b.join(",")].join(";") }; c.prototype.lineIntersectsBounds = function (d) {
                    var b = this.bounds || {}, c = b.x2, e = b.y1, k = b.y2, m = function (b, d, c) {
                        var a = b[0]; b = b[1]; var e = d ? 0 : 1; if ("number" === typeof c && a[d] >= c !== b[d] >= c) return a =
                            a[e] + (c - a[d]) / (b[d] - a[d]) * (b[e] - a[e]), d ? [a, c] : [c, a]
                    }, q = d[0]; if (b = m(d, 0, b.x1)) q = b, d[1] = b; else if (b = m(d, 0, c)) q = b, d[1] = b; if (b = m(d, 1, e)) q = b; else if (b = m(d, 1, k)) q = b; return q
                }; c.prototype.getRotator = function (d) {
                    var b = d[0] * t, c = (d[1] || 0) * t; d = (d[2] || 0) * t; var e = Math.cos(c), k = Math.sin(c), m = Math.cos(d), q = Math.sin(d); if (0 !== b || 0 !== c || 0 !== d) return {
                        forward: function (d) {
                            var c = d[0] * t + b, f = d[1] * t, a = Math.cos(f); d = Math.cos(c) * a; c = Math.sin(c) * a; f = Math.sin(f); a = f * e + d * k; return [Math.atan2(c * m - a * q, d * e - f * k) / t, Math.asin(a * m + c *
                                q) / t]
                        }, inverse: function (d) { var c = d[0] * t, f = d[1] * t, a = Math.cos(f); d = Math.cos(c) * a; c = Math.sin(c) * a; f = Math.sin(f); a = f * m - c * q; return [(Math.atan2(c * m + f * q, d * e + a * k) - b) / t, Math.asin(a * e - d * k) / t] }
                    }
                }; c.prototype.forward = function (d) { return d }; c.prototype.inverse = function (d) { return d }; c.prototype.cutOnAntimeridian = function (d, b) {
                    var e = [], h = [d]; d.forEach(function (a, c) {
                        var f = d[c - 1]; if (!c) { if (!b) return; f = d[d.length - 1] } var h = f[0], g = a[0]; (-90 > h || 90 < h) && (-90 > g || 90 < g) && 0 < h !== 0 < g && (g = F((180 - (h + 360) % 360) / ((g + 360) % 360 - (h + 360) %
                            360), 0, 1), e.push({ i: c, lat: f[1] + g * (a[1] - f[1]), direction: 0 > h ? 1 : -1, previousLonLat: f, lonLat: a }))
                    }); if (e.length) if (b) {
                        if (1 === e.length % 2) { var k = e.slice().sort(function (a, b) { return Math.abs(b.lat) - Math.abs(a.lat) })[0]; y(e, k) } for (var q = e.length - 2; 0 <= q;) { var t = e[q].i, v = m(180 + .000001 * e[q].direction), B = m(180 - .000001 * e[q].direction); t = d.splice.apply(d, C([t, e[q + 1].i - t], c.greatCircle([v, e[q].lat], [v, e[q + 1].lat], !0), !1)); t.push.apply(t, c.greatCircle([B, e[q + 1].lat], [B, e[q].lat], !0)); h.push(t); q -= 2 } if (k) for (v = 0; v <
                            h.length; v++) { q = k.direction; var r = k.lat; B = h[v]; t = B.indexOf(k.lonLat); if (-1 < t) { v = (0 > r ? -1 : 1) * this.maxLatitude; var a = m(180 + .000001 * q), z = m(180 - .000001 * q); r = c.greatCircle([a, r], [a, v], !0); for (a += 120 * q; -180 < a && 180 > a; a += 120 * q)r.push([a, v]); r.push.apply(r, c.greatCircle([z, v], [z, k.lat], !0)); B.splice.apply(B, C([t, 0], r, !1)); break } }
                    } else for (q = e.length; q--;)t = e[q].i, t = d.splice(t, d.length, [m(180 + .000001 * e[q].direction), e[q].lat]), t.unshift([m(180 - .000001 * e[q].direction), e[q].lat]), h.push(t); return h
                }; c.prototype.path =
                    function (d) {
                        var b = this, e = this.bounds, h = this.def, k = this.rotator, m = [], t = "Polygon" === d.type || "MultiPolygon" === d.type, v = this.hasGeoProjection, B = !h || !1 !== h.antimeridianCutting, r = B ? k : void 0, a = B ? h || this : this, z; e && (z = [[e.x1, e.y1], [e.x2, e.y1], [e.x2, e.y2], [e.x1, e.y2]]); var l = function (d) {
                            d = d.map(function (a) { if (B) { r && (a = r.forward(a)); var b = a[0]; .000001 > Math.abs(b - 180) && (b = 180 > b ? 179.999999 : 180.000001); a = [b, a[1]] } return a }); var f = [d]; v && (c.insertGreatCircles(d), B && (f = b.cutOnAntimeridian(d, t))); f.forEach(function (b) {
                                if (!(2 >
                                    b.length)) {
                                        var d = !1, f = !1, h = function (a) { d ? m.push(["L", a[0], a[1]]) : (m.push(["M", a[0], a[1]]), d = !0) }, k = !1, l = !1, n = b.map(function (b) { b = a.forward(b); b.outside ? k = !0 : l = !0; Infinity === b[1] ? b[1] = 1E10 : -Infinity === b[1] && (b[1] = -1E10); return b }); if (B) { t && n.push(n[0]); if (k) { if (!l) return; if (z) if (t) n = w(n, z); else if (e) { q(n, z).forEach(function (a) { d = !1; a.forEach(h) }); return } } n.forEach(h) } else for (var p = 0; p < n.length; p++) {
                                            var r = b[p], u = n[p]; if (u.outside) f = !0; else {
                                                if (t && !y) { var y = r; b.push(r); n.push(u) } f && x && (t && v ? c.greatCircle(x,
                                                    r).forEach(function (b) { return h(a.forward(b)) }) : d = !1); h(u); var x = r; f = !1
                                            }
                                        }
                                }
                            })
                        }; "LineString" === d.type ? l(d.coordinates) : "MultiLineString" === d.type ? d.coordinates.forEach(function (a) { return l(a) }) : "Polygon" === d.type ? (d.coordinates.forEach(function (a) { return l(a) }), m.length && m.push(["Z"])) : "MultiPolygon" === d.type && (d.coordinates.forEach(function (a) { a.forEach(function (a) { return l(a) }) }), m.length && m.push(["Z"])); return m
                    }; c.registry = e; return c
            }()
        }); I(e, "Maps/MapView.js", [e["Maps/MapViewOptionsDefault.js"],
        e["Maps/MapViewInsetsOptionsDefault.js"], e["Extensions/GeoJSON.js"], e["Core/Chart/MapChart.js"], e["Maps/MapUtilities.js"], e["Maps/Projection.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F) {
            var y = this && this.__extends || function () {
                var a = function (b, d) { a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return a(b, d) }; return function (b, d) {
                    function c() { this.constructor = b } a(b, d); b.prototype = null === d ? Object.create(d) :
                        (c.prototype = d.prototype, new c)
                }
            }(), t = this && this.__spreadArray || function (a, b, d) { if (d || 2 === arguments.length) for (var c = 0, e = b.length, f; c < e; c++)!f && c in b || (f || (f = Array.prototype.slice.call(b, 0, c)), f[c] = b[c]); return a.concat(f || Array.prototype.slice.call(b)) }, m = x.topo2geo, k = C.maps, d = q.boundsFromPath, b = q.pointInPolygon, f = F.addEvent, h = F.clamp, p = F.fireEvent, G = F.isArray, D = F.isNumber, v = F.isObject, B = F.isString, r = F.merge, a = F.pick, z = F.relativeLength, l = function (a, b) {
                return Math.log(400.979322 / Math.max((a.x2 - a.x1) /
                    (b.width / 256), (a.y2 - a.y1) / (b.height / 256))) / Math.log(2)
            }, u = function () {
                function e(a, b) {
                    var d = this; this.insets = []; this.padding = [0, 0, 0, 0]; this.eventsToUnbind = []; var g; if (!(this instanceof n)) {
                        var h = t([a.options.chart.map], (a.options.series || []).map(function (a) { return a.mapData }), !0).map(function (a) { return d.getGeoMap(a) }), k = []; h.forEach(function (a) { a && (g || (g = a["hc-recommended-mapview"]), a.bbox && (a = a.bbox, k.push({ x1: a[0], y1: a[1], x2: a[2], y2: a[3] }))) }); var l = k.length && e.compositeBounds(k); if (l) {
                            var m = l.x1;
                            var p = l.y1, A = l.x2; l = l.y2; m = 180 < A - m && 90 < l - p ? { name: "EqualEarth" } : { name: "LambertConformalConic", parallels: [p, l], rotation: [-(m + A) / 2] }
                        } this.geoMap = h[0]
                    } this.userOptions = b || {}; h = r(c, { projection: m }, g, b); l = g && g.insets; b = b && b.insets; l && b && (h.insets = e.mergeInsets(l, b)); this.chart = a; this.center = h.center; this.options = h; this.projection = new w(h.projection); this.playingField = a.plotBox; this.zoom = h.zoom || 0; this.createInsets(); this.eventsToUnbind.push(f(a, "afterSetChartSize", function () {
                        d.playingField = d.getField();
                        if (void 0 === d.minZoom || d.minZoom === d.zoom) d.fitToBounds(void 0, void 0, !1), !d.chart.hasRendered && D(d.userOptions.zoom) && (d.zoom = d.userOptions.zoom), d.userOptions.center && r(!0, d.center, d.userOptions.center)
                    })); this.setUpEvents()
                } e.mergeInsets = function (a, b) { var d = function (a) { var b = {}; a.forEach(function (a, d) { b[a && a.id || "i".concat(d)] = a }); return b }, c = r(d(a), d(b)); return Object.keys(c).map(function (a) { return c[a] }) }; e.prototype.createInsets = function () {
                    var a = this, b = this.options, d = b.insets; d && d.forEach(function (d) {
                        d =
                        new n(a, r(b.insetOptions, d)); a.insets.push(d)
                    })
                }; e.prototype.fitToBounds = function (b, d, c, e) { void 0 === c && (c = !0); var f = b || this.getProjectedBounds(); if (f) { var g = a(d, b ? 0 : this.options.padding); d = this.getField(!1); g = G(g) ? g : [g, g, g, g]; this.padding = [z(g[0], d.height), z(g[1], d.width), z(g[2], d.height), z(g[3], d.width)]; this.playingField = this.getField(); d = l(f, this.playingField); b || (this.minZoom = d); b = this.projection.inverse([(f.x2 + f.x1) / 2, (f.y2 + f.y1) / 2]); this.setView(b, d, c, e) } }; e.prototype.getField = function (a) {
                    void 0 ===
                    a && (a = !0); a = a ? this.padding : [0, 0, 0, 0]; return { x: a[3], y: a[0], width: this.chart.plotWidth - a[1] - a[3], height: this.chart.plotHeight - a[0] - a[2] }
                }; e.prototype.getGeoMap = function (a) { if (B(a)) return k[a]; if (v(a, !0)) { if ("FeatureCollection" === a.type) return a; if ("Topology" === a.type) return m(a) } }; e.prototype.getMapBBox = function () {
                    var a = this.getProjectedBounds(), b = this.getScale(); if (a) {
                        var d = this.padding, c = this.projectedUnitsToPixels({ x: a.x1, y: a.y2 }); return {
                            width: (a.x2 - a.x1) * b + d[1] + d[3], height: (a.y2 - a.y1) * b + d[0] + d[2],
                            x: c.x - d[3], y: c.y - d[0]
                        }
                    }
                }; e.prototype.getProjectedBounds = function () {
                    var a = this.projection, b = this.chart.series.reduce(function (a, b) { var d = b.getProjectedBounds && b.getProjectedBounds(); d && !1 !== b.options.affectsMapView && a.push(d); return a }, []), c = this.options.fitToGeometry; return c ? (this.fitToGeometryCache || ("MultiPoint" === c.type ? (c = c.coordinates.map(function (b) { return a.forward(b) }), b = c.map(function (a) { return a[0] }), c = c.map(function (a) { return a[1] }), this.fitToGeometryCache = {
                        x1: Math.min.apply(0, b), x2: Math.max.apply(0,
                            b), y1: Math.min.apply(0, c), y2: Math.max.apply(0, c)
                    }) : this.fitToGeometryCache = d(a.path(c))), this.fitToGeometryCache) : this.projection.bounds || e.compositeBounds(b)
                }; e.prototype.getScale = function () { return 256 / 400.979322 * Math.pow(2, this.zoom) }; e.prototype.getSVGTransform = function () {
                    var a = this.playingField, b = a.x, d = a.y, c = a.width; a = a.height; var e = this.projection.forward(this.center), f = this.projection.hasCoordinates ? -1 : 1, h = this.getScale(); f *= h; return {
                        scaleX: h, scaleY: f, translateX: b + c / 2 - e[0] * h, translateY: d + a /
                            2 - e[1] * f
                    }
                }; e.prototype.lonLatToPixels = function (a) { if (a = this.lonLatToProjectedUnits(a)) return this.projectedUnitsToPixels(a) }; e.prototype.lonLatToProjectedUnits = function (a) {
                    var d = this.chart, c = d.mapTransforms; if (c) { for (var e in c) if (Object.hasOwnProperty.call(c, e) && c[e].hitZone) { var f = d.transformFromLatLon(a, c[e]); if (f && b(f, c[e].hitZone.coordinates[0])) return f } return d.transformFromLatLon(a, c["default"]) } c = 0; for (e = this.insets; c < e.length; c++)if (d = e[c], d.options.geoBounds && b({ x: a.lon, y: a.lat }, d.options.geoBounds.coordinates[0])) return a =
                        d.projection.forward([a.lon, a.lat]), a = d.projectedUnitsToPixels({ x: a[0], y: a[1] }), this.pixelsToProjectedUnits(a); a = this.projection.forward([a.lon, a.lat]); if (!a.outside) return { x: a[0], y: a[1] }
                }; e.prototype.projectedUnitsToLonLat = function (a) {
                    var d = this.chart, c = d.mapTransforms; if (c) { for (var e in c) if (Object.hasOwnProperty.call(c, e) && c[e].hitZone && b(a, c[e].hitZone.coordinates[0])) return d.transformToLatLon(a, c[e]); return d.transformToLatLon(a, c["default"]) } c = this.projectedUnitsToPixels(a); e = 0; for (var f = this.insets; e <
                        f.length; e++)if (d = f[e], d.hitZone && b(c, d.hitZone.coordinates[0])) return a = d.pixelsToProjectedUnits(c), a = d.projection.inverse([a.x, a.y]), { lon: a[0], lat: a[1] }; a = this.projection.inverse([a.x, a.y]); return { lon: a[0], lat: a[1] }
                }; e.prototype.redraw = function (a) { this.chart.series.forEach(function (a) { a.useMapGeometry && (a.isDirty = !0) }); this.chart.redraw(a) }; e.prototype.setView = function (a, b, d, c) {
                    void 0 === d && (d = !0); a && (this.center = a); "number" === typeof b && ("number" === typeof this.minZoom && (b = Math.max(b, this.minZoom)),
                        "number" === typeof this.options.maxZoom && (b = Math.min(b, this.options.maxZoom)), D(b) && (this.zoom = b)); var e = this.getProjectedBounds(); if (e) {
                            a = this.projection.forward(this.center); var f = this.playingField; b = f.x; var g = f.y, h = f.width; f = f.height; var k = this.getScale(), l = this.projectedUnitsToPixels({ x: e.x1, y: e.y1 }), n = this.projectedUnitsToPixels({ x: e.x2, y: e.y2 }); e = [(e.x1 + e.x2) / 2, (e.y1 + e.y2) / 2]; var m = l.x, r = n.y; n = n.x; l = l.y; n - m < h ? a[0] = e[0] : m < b && n < b + h ? a[0] += Math.max(m - b, n - h - b) / k : n > b + h && m > b && (a[0] += Math.min(n - h - b,
                                m - b) / k); l - r < f ? a[1] = e[1] : r < g && l < g + f ? a[1] -= Math.max(r - g, l - f - g) / k : l > g + f && r > g && (a[1] -= Math.min(l - f - g, r - g) / k); this.center = this.projection.inverse(a); this.insets.forEach(function (a) { a.options.field && (a.hitZone = a.getHitZone(), a.playingField = a.getField()) }); this.render()
                        } p(this, "afterSetView"); d && this.redraw(c)
                }; e.prototype.projectedUnitsToPixels = function (a) { var b = this.getScale(), d = this.projection.forward(this.center), c = this.playingField; return { x: c.x + c.width / 2 - b * (d[0] - a.x), y: c.y + c.height / 2 + b * (d[1] - a.y) } };
                e.prototype.pixelsToLonLat = function (a) { return this.projectedUnitsToLonLat(this.pixelsToProjectedUnits(a)) }; e.prototype.pixelsToProjectedUnits = function (a) { var b = a.x; a = a.y; var d = this.getScale(), c = this.projection.forward(this.center), e = this.playingField; return { x: c[0] + (b - (e.x + e.width / 2)) / d, y: c[1] - (a - (e.y + e.height / 2)) / d } }; e.prototype.setUpEvents = function () {
                    var a = this, b = this.chart, d, c, e, k = function (f) {
                        var g = b.pointer.pinchDown, k = a.projection, n = b.mouseDownX, m = b.mouseDownY; 1 === g.length && (n = g[0].chartX, m = g[0].chartY);
                        if ("number" === typeof n && "number" === typeof m) {
                            var p = "" + n + ",".concat(m), r = f.originalEvent; g = r.chartX; r = r.chartY; p !== c && (c = p, d = a.projection.forward(a.center), e = (a.projection.options.rotation || [0, 0]).slice()); p = (p = k.def && k.def.bounds) && l(p, a.playingField) || -Infinity; "Orthographic" === k.options.name && (a.minZoom || Infinity) < 1.1 * p ? (k = 440 / (a.getScale() * Math.min(b.plotWidth, b.plotHeight)), e && (n = (n - g) * k - e[0], m = h(-e[1] - (m - r) * k, -80, 80), g = a.zoom, a.update({ projection: { rotation: [-n, -m] } }, !1), a.zoom = g, b.redraw(!1))) :
                                D(g) && D(r) && (k = a.getScale(), m = a.projection.inverse([d[0] + (n - g) / k, d[1] - (m - r) / k * (a.projection.hasCoordinates ? 1 : -1)]), a.setView(m, void 0, !0, !1)); f.preventDefault()
                        }
                    }; f(b, "pan", k); f(b, "touchpan", k); f(b, "selection", function (d) {
                        if (d.resetSelection) a.zoomBy(); else {
                            var c = d.x - b.plotLeft, e = d.y - b.plotTop, f = a.pixelsToProjectedUnits({ x: c, y: e }), g = f.y; f = f.x; c = a.pixelsToProjectedUnits({ x: c + d.width, y: e + d.height }); a.fitToBounds({ x1: f, y1: g, x2: c.x, y2: c.y }, void 0, !0, d.originalEvent.touches ? !1 : void 0); /^touch/.test(d.originalEvent.type) ||
                                b.showResetZoom(); d.preventDefault()
                        }
                    })
                }; e.prototype.render = function () { this.group || (this.group = this.chart.renderer.g("map-view").attr({ zIndex: 4 }).add()) }; e.prototype.update = function (a, b, d) {
                    void 0 === b && (b = !0); var c = a.projection; c = c && w.toString(c) !== w.toString(this.options.projection); var e = !1; r(!0, this.userOptions, a); r(!0, this.options, a); "insets" in a && (this.insets.forEach(function (a) { return a.destroy() }), this.insets.length = 0, e = !0); (c || "fitToGeometry" in a) && delete this.fitToGeometryCache; if (c || e) this.chart.series.forEach(function (a) {
                        var b =
                            a.transformGroups; a.clearBounds && a.clearBounds(); a.isDirty = !0; a.isDirtyData = !0; if (e && b) for (; 1 < b.length;)(a = b.pop()) && a.destroy()
                    }), c && (this.projection = new w(this.options.projection)), e && this.createInsets(), a.center || D(a.zoom) || this.fitToBounds(void 0, void 0, !1); a.center || D(a.zoom) ? this.setView(this.options.center, a.zoom, !1) : "fitToGeometry" in a && this.fitToBounds(void 0, void 0, !1); b && this.chart.redraw(d)
                }; e.prototype.zoomBy = function (a, b, d, c) {
                    var e = this.chart, f = this.projection.forward(this.center); b =
                        b ? this.projection.forward(b) : []; var g = b[0], h = b[1]; "number" === typeof a ? (a = this.zoom + a, b = void 0, d && (g = d[0], h = d[1], d = this.getScale(), g = g - e.plotLeft - e.plotWidth / 2, e = h - e.plotTop - e.plotHeight / 2, g = f[0] + g / d, h = f[1] + e / d), "number" === typeof g && "number" === typeof h && (d = 1 - Math.pow(2, this.zoom) / Math.pow(2, a), g = f[0] - g, e = f[1] - h, f[0] -= g * d, f[1] += e * d, b = this.projection.inverse(f)), this.setView(b, a, void 0, c)) : this.fitToBounds(void 0, void 0, void 0, c)
                }; e.compositeBounds = function (a) {
                    if (a.length) return a.slice(1).reduce(function (a,
                        b) { a.x1 = Math.min(a.x1, b.x1); a.y1 = Math.min(a.y1, b.y1); a.x2 = Math.max(a.x2, b.x2); a.y2 = Math.max(a.y2, b.y2); return a }, r(a[0]))
                }; return e
            }(), n = function (a) {
                function c(b, c) { var f = a.call(this, b.chart, c) || this; f.id = c.id; f.mapView = b; f.options = r(e, c); f.allBounds = []; f.options.geoBounds && (b = b.projection.path(f.options.geoBounds), f.geoBoundsProjectedBox = d(b), f.geoBoundsProjectedPolygon = b.map(function (a) { return [a[1] || 0, a[2] || 0] })); return f } y(c, a); c.prototype.getField = function (b) {
                    void 0 === b && (b = !0); var d = this.hitZone;
                    if (d) { var c = b ? this.padding : [0, 0, 0, 0]; d = d.coordinates[0]; var e = d.map(function (a) { return a[0] }), f = d.map(function (a) { return a[1] }); d = Math.min.apply(0, e) + c[3]; e = Math.max.apply(0, e) - c[1]; var g = Math.min.apply(0, f) + c[0]; c = Math.max.apply(0, f) - c[2]; if (D(d) && D(g)) return { x: d, y: g, width: e - d, height: c - g } } return a.prototype.getField.call(this, b)
                }; c.prototype.getHitZone = function () {
                    var a = this.chart, b = this.mapView, d = this.options, c = (d.field || {}).coordinates; if (c) {
                        c = c[0]; if ("percent" === d.units) {
                            var e = "mapBoundingBox" ===
                                d.relativeTo && b.getMapBBox() || r(a.plotBox, { x: 0, y: 0 }); c = c.map(function (a) { return [z("" + a[0] + "%", e.width, e.x), z("" + a[1] + "%", e.height, e.y)] })
                        } return { type: "Polygon", coordinates: [c] }
                    }
                }; c.prototype.getProjectedBounds = function () { return u.compositeBounds(this.allBounds) }; c.prototype.isInside = function (a) { var d = this.geoBoundsProjectedBox, c = this.geoBoundsProjectedPolygon; return !!(d && a.x >= d.x1 && a.x <= d.x2 && a.y >= d.y1 && a.y <= d.y2 && c && b(a, c)) }; c.prototype.render = function () {
                    var a = this.chart, b = this.mapView, d = this.options,
                    c = d.borderPath || d.field; if (c && b.group) {
                        var e = !0; this.border || (this.border = a.renderer.path().addClass("highcharts-mapview-inset-border").add(b.group), e = !1); a.styledMode || this.border.attr({ stroke: d.borderColor, "stroke-width": d.borderWidth }); var f = Math.round(this.border.strokeWidth()) % 2 / 2, g = "mapBoundingBox" === d.relativeTo && b.getMapBBox() || b.playingField; b = (c.coordinates || []).reduce(function (b, c) {
                            return c.reduce(function (b, c, e) {
                                var h = c[0]; c = c[1]; "percent" === d.units && (h = a.plotLeft + z("" + h + "%", g.width, g.x),
                                    c = a.plotTop + z("" + c + "%", g.height, g.y)); h = Math.floor(h) + f; c = Math.floor(c) + f; b.push(0 === e ? ["M", h, c] : ["L", h, c]); return b
                            }, b)
                        }, []); this.border[e ? "animate" : "attr"]({ d: b })
                    }
                }; c.prototype.destroy = function () { this.border && (this.border = this.border.destroy()); this.eventsToUnbind.forEach(function (a) { return a() }) }; c.prototype.setUpEvents = function () { }; return c
            }(u); f(C, "afterInit", function () { this.mapView = new u(this, this.options.mapView) }); return u
        }); I(e, "Series/Map/MapSeries.js", [e["Core/Animation/AnimationUtilities.js"],
        e["Series/ColorMapComposition.js"], e["Series/CenteredUtilities.js"], e["Core/Globals.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Chart/MapChart.js"], e["Series/Map/MapPoint.js"], e["Maps/MapView.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F, y, t, m, k, d) {
            var b = this && this.__extends || function () {
                var a = function (b, d) {
                    a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } ||
                    function (a, b) { for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]) }; return a(b, d)
                }; return function (b, d) { function c() { this.constructor = b } a(b, d); b.prototype = null === d ? Object.create(d) : (c.prototype = d.prototype, new c) }
            }(), f = c.animObject; c = C.noop; var h = w.splitPath; w = m.seriesTypes; var p = w.column, G = w.scatter; w = d.extend; var D = d.find, v = d.fireEvent, B = d.getNestedProperty, r = d.isArray, a = d.defined, z = d.isNumber, l = d.isObject, u = d.merge, n = d.objectEach, E = d.pick, g = d.splat; d = function (d) {
                function c() {
                    var a = null !== d && d.apply(this,
                        arguments) || this; a.chart = void 0; a.data = void 0; a.group = void 0; a.joinBy = void 0; a.options = void 0; a.points = void 0; a.processedData = []; return a
                } b(c, d); c.prototype.animate = function (a) { var b = this.chart, d = this.group, c = f(this.options.animation); b.renderer.isSVG && (a ? d.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .001, scaleY: .001 }) : d.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1 }, c)) }; c.prototype.animateDrilldown = function (a) {
                    var b = this.chart, d = this.group;
                    b.renderer.isSVG && (a ? d.attr({ translateX: b.plotLeft + b.plotWidth / 2, translateY: b.plotTop + b.plotHeight / 2, scaleX: .1, scaleY: .1, opacity: .01 }) : (d.animate({ translateX: b.plotLeft, translateY: b.plotTop, scaleX: 1, scaleY: 1, opacity: 1 }, this.chart.options.drilldown.animation), b.drilldown && b.drilldown.fadeInGroup(this.dataLabelsGroup)))
                }; c.prototype.animateDrillupFrom = function () {
                    var a = this.chart; a.renderer.isSVG && this.group.animate({
                        translateX: a.plotLeft + a.plotWidth / 2, translateY: a.plotTop + a.plotHeight / 2, scaleX: .1, scaleY: .1,
                        opacity: .01
                    })
                }; c.prototype.animateDrillupTo = function (a) { p.prototype.animateDrillupTo.call(this, a) }; c.prototype.clearBounds = function () { this.points.forEach(function (a) { delete a.bounds; delete a.insetIndex; delete a.projectedPath }); delete this.bounds }; c.prototype.doFullTranslate = function () { return !(!(this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML) && this.hasRendered) }; c.prototype.drawMapDataLabels = function () { t.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) };
                c.prototype.drawPoints = function () {
                    var a = this, b = this, d = this.chart, c = this.group, e = this.transformGroups, f = void 0 === e ? [] : e, g = d.mapView, h = d.renderer; g && (this.transformGroups = f, f[0] || (f[0] = h.g().add(c)), g.insets.forEach(function (a, b) { f[b + 1] || f.push(h.g().add(c)) }), this.doFullTranslate() && (this.points.forEach(function (b) {
                        var c = b.graphic, e = b.shapeArgs; b.group = f["number" === typeof b.insetIndex ? b.insetIndex + 1 : 0]; c && c.parentGroup !== b.group && c.add(b.group); e && d.hasRendered && !d.styledMode && (e.fill = a.pointAttribs(b,
                            b.state).fill)
                    }), p.prototype.drawPoints.apply(this), this.points.forEach(function (c) {
                        var e = c.graphic; if (e) {
                            var f = e.animate, g = ""; c.name && (g += "highcharts-name-" + c.name.replace(/ /g, "-").toLowerCase()); c.properties && c.properties["hc-key"] && (g += " highcharts-key-" + c.properties["hc-key"].toString().toLowerCase()); g && e.addClass(g); d.styledMode && e.css(a.pointAttribs(c, c.selected && "select" || void 0)); e.animate = function (a, c, g) {
                                var h = z(a["stroke-width"]) && !z(e["stroke-width"]), k = z(e["stroke-width"]) && !z(a["stroke-width"]);
                                if (h || k) { var l = E(b.getStrokeWidth(b.options), 1) / (d.mapView && d.mapView.getScale() || 1); h && (e["stroke-width"] = l); k && (a["stroke-width"] = l) } return f.call(e, a, c, k ? function () { e.element.removeAttribute("stroke-width"); delete e["stroke-width"]; g && g.apply(this, arguments) } : g)
                            }
                        }
                    })), f.forEach(function (c, e) {
                        var f = (0 === e ? g : g.insets[e - 1]).getSVGTransform(), k = E(a.getStrokeWidth(a.options), 1), l = f.scaleX, n = 0 < f.scaleY ? 1 : -1, m = function (d) {
                            (b.points || []).forEach(function (b) {
                                var c = b.graphic, e; c && c["stroke-width"] && (e = a.getStrokeWidth(b.options)) &&
                                    c.attr({ "stroke-width": e / d })
                            })
                        }; if (h.globalAnimation && d.hasRendered) { var p = Number(c.attr("translateX")), r = Number(c.attr("translateY")), v = Number(c.attr("scaleX")); c.attr({ animator: 0 }).animate({ animator: 1 }, { step: function (a, b) { a = v + (l - v) * b.pos; c.attr({ translateX: p + (f.translateX - p) * b.pos, translateY: r + (f.translateY - r) * b.pos, scaleX: a, scaleY: a * n, "stroke-width": k / a }); m(a) } }) } else c.attr(u(f, { "stroke-width": k / l })), m(l)
                    }), this.drawMapDataLabels())
                }; c.prototype.getProjectedBounds = function () {
                    if (!this.bounds &&
                        this.chart.mapView) {
                            var a = this.chart.mapView, b = a.insets, d = a.projection, c = []; (this.points || []).forEach(function (a) {
                                if (a.path || a.geometry) {
                                    "string" === typeof a.path ? a.path = h(a.path) : r(a.path) && "M" === a.path[0] && (a.path = k.prototype.pathToSegments(a.path)); if (!a.bounds) {
                                        var e = a.getProjectedBounds(d); if (e) {
                                            a.labelrank = E(a.labelrank, (e.x2 - e.x1) * (e.y2 - e.y1)); var f = e.midX, g = e.midY; if (b && z(f) && z(g)) {
                                                var l = D(b, function (a) { return a.isInside({ x: f, y: g }) }); l && (delete a.projectedPath, (e = a.getProjectedBounds(l.projection)) &&
                                                    l.allBounds.push(e), a.insetIndex = b.indexOf(l))
                                            } a.bounds = e
                                        }
                                    } a.bounds && void 0 === a.insetIndex && c.push(a.bounds)
                                }
                            }); this.bounds = y.compositeBounds(c)
                    } return this.bounds
                }; c.prototype.getStrokeWidth = function (a) { var b = this.pointAttrToOptions; return a[b && b["stroke-width"] || "borderWidth"] }; c.prototype.hasData = function () { return !!this.processedXData.length }; c.prototype.pointAttribs = function (b, d) {
                    var c = b.series.chart, e = c.mapView; c = c.styledMode ? this.colorAttribs(b) : p.prototype.pointAttribs.call(this, b, d); var f =
                        this.getStrokeWidth(b.options); d && (d = u(this.options.states[d], b.options.states && b.options.states[d] || {}), d = this.getStrokeWidth(d), a(d) && (f = d)); f && e && (f /= e.getScale()); d = this.getStrokeWidth(this.options); c.dashstyle && e && z(d) && (f = d / e.getScale()); b.visible || (c.fill = this.options.nullColor); a(f) ? c["stroke-width"] = f : delete c["stroke-width"]; c["stroke-linecap"] = c["stroke-linejoin"] = this.options.linecap; return c
                }; c.prototype.updateData = function () {
                    return this.processedData ? !1 : d.prototype.updateData.apply(this,
                        arguments)
                }; c.prototype.setData = function (a, b, c, e) { void 0 === b && (b = !0); delete this.bounds; d.prototype.setData.call(this, a, !1, void 0, e); this.processData(); this.generatePoints(); b && this.chart.redraw(c) }; c.prototype.processData = function () {
                    var a = this.options, b = a.data, d = this.chart.options.chart, c = this.joinBy, e = a.keys || this.pointArrayMap, f = [], g = {}, h = this.chart.mapView; h = h && (l(a.mapData, !0) ? h.getGeoMap(a.mapData) : h.geoMap); var k = this.chart.mapTransforms; (this.chart.mapTransforms = k = d.mapTransforms || h && h["hc-transform"] ||
                        k) && n(k, function (a) { a.rotation && (a.cosAngle = Math.cos(a.rotation), a.sinAngle = Math.sin(a.rotation)) }); if (r(a.mapData)) var m = a.mapData; else h && "FeatureCollection" === h.type && (this.mapTitle = h.title, m = C.geojson(h, this.type, this)); var p = this.processedData = []; b && b.forEach(function (d, f) {
                            var g = 0; if (z(d)) p[f] = { value: d }; else if (r(d)) {
                                p[f] = {}; !a.keys && d.length > e.length && "string" === typeof d[0] && (p[f]["hc-key"] = d[0], ++g); for (var h = 0; h < e.length; ++h, ++g)e[h] && "undefined" !== typeof d[g] && (0 < e[h].indexOf(".") ? F.prototype.setNestedProperty(p[f],
                                    d[g], e[h]) : p[f][e[h]] = d[g])
                            } else p[f] = b[f]; c && "_i" === c[0] && (p[f]._i = f)
                        }); if (m) {
                            this.mapData = m; this.mapMap = {}; for (k = 0; k < m.length; k++)d = m[k], h = d.properties, d._i = k, c[0] && h && h[c[0]] && (d[c[0]] = h[c[0]]), g[d[c[0]]] = d; this.mapMap = g; if (c[1]) { var v = c[1]; p.forEach(function (a) { a = B(v, a); g[a] && f.push(g[a]) }) } if (a.allAreas) {
                                if (c[1]) { var q = c[1]; p.forEach(function (a) { f.push(B(q, a)) }) } var t = "|" + f.map(function (a) { return a && a[c[0]] }).join("|") + "|"; m.forEach(function (a) {
                                    c[0] && -1 !== t.indexOf("|" + a[c[0]] + "|") || p.push(u(a,
                                        { value: null }))
                                })
                            }
                        } this.processedXData = Array(p.length)
                }; c.prototype.setOptions = function (a) { a = t.prototype.setOptions.call(this, a); var b = a.joinBy; null === b && (b = "_i"); b = this.joinBy = g(b); b[1] || (b[1] = b[0]); return a }; c.prototype.translate = function () {
                    var a = this.doFullTranslate(), b = this.chart.mapView, d = b && b.projection; !this.chart.hasRendered || !this.isDirtyData && this.hasRendered || (this.processData(), this.generatePoints(), delete this.bounds, !b || b.userOptions.center || z(b.userOptions.zoom) ? this.getProjectedBounds() :
                        b.fitToBounds(void 0, void 0, !1)); if (b) { var c = b.getSVGTransform(); this.points.forEach(function (e) { var f = z(e.insetIndex) && b.insets[e.insetIndex].getSVGTransform() || c; f && e.bounds && z(e.bounds.midX) && z(e.bounds.midY) && (e.plotX = e.bounds.midX * f.scaleX + f.translateX, e.plotY = e.bounds.midY * f.scaleY + f.translateY); a && (e.shapeType = "path", e.shapeArgs = { d: F.getProjectedPath(e, d) }) }) } v(this, "afterTranslate")
                }; c.defaultOptions = u(G.defaultOptions, {
                    affectsMapView: !0, animation: !1, dataLabels: {
                        crop: !1, formatter: function () {
                            var a =
                                this.series.chart.numberFormatter, b = this.point.value; return z(b) ? a(b, -1) : ""
                        }, inside: !0, overflow: !1, padding: 0, verticalAlign: "middle"
                    }, linecap: "butt", marker: null, nullColor: "#f7f7f7", stickyTracking: !1, tooltip: { followPointer: !0, pointFormat: "{point.name}: {point.value}<br/>" }, turboThreshold: 0, allAreas: !0, borderColor: "#cccccc", borderWidth: 1, joinBy: "hc-key", states: { hover: { halo: null, brightness: .2 }, normal: { animation: !0 }, select: { color: "#cccccc" } }
                }); return c
            }(G); w(d.prototype, {
                type: "map", axisTypes: e.seriesMembers.axisTypes,
                colorAttribs: e.seriesMembers.colorAttribs, colorKey: e.seriesMembers.colorKey, directTouch: !0, drawDataLabels: c, drawGraph: c, drawLegendSymbol: q.drawRectangle, forceDL: !0, getCenter: x.getCenter, getExtremesFromAll: !0, getSymbol: c, isCartesian: !1, parallelArrays: e.seriesMembers.parallelArrays, pointArrayMap: e.seriesMembers.pointArrayMap, pointClass: F, preserveAspectRatio: !0, searchPoint: c, trackerGroups: e.seriesMembers.trackerGroups, useMapGeometry: !0
            }); e.compose(d); m.registerSeriesType("map", d); ""; return d
        }); I(e, "Series/MapLine/MapLineSeries.js",
            [e["Series/Map/MapSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = this && this.__extends || function () { var c = function (e, m) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, d) { c.__proto__ = d } || function (c, d) { for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]) }; return c(e, m) }; return function (e, m) { function k() { this.constructor = e } c(e, m); e.prototype = null === m ? Object.create(m) : (k.prototype = m.prototype, new k) } }(), q = e.series, w = x.extend, F = x.merge; x = function (e) {
                    function q() {
                        var c =
                            null !== e && e.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; return c
                    } C(q, e); q.prototype.pointAttribs = function (e, k) { e = c.prototype.pointAttribs.call(this, e, k); e.fill = this.options.fillColor; return e }; q.defaultOptions = F(c.defaultOptions, { lineWidth: 1, fillColor: "none" }); return q
                }(c); w(x.prototype, { type: "mapline", colorProp: "stroke", drawLegendSymbol: q.prototype.drawLegendSymbol, pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" } }); e.registerSeriesType("mapline", x); "";
                return x
            }); I(e, "Series/MapPoint/MapPointPoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e) {
                var x = this && this.__extends || function () { var c = function (e, q) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, e) { c.__proto__ = e } || function (c, e) { for (var m in e) e.hasOwnProperty(m) && (c[m] = e[m]) }; return c(e, q) }; return function (e, q) { function w() { this.constructor = e } c(e, q); e.prototype = null === q ? Object.create(q) : (w.prototype = q.prototype, new w) } }(), C = e.isNumber; return function (c) {
                    function e() {
                        var e =
                            null !== c && c.apply(this, arguments) || this; e.options = void 0; e.series = void 0; return e
                    } x(e, c); e.prototype.isValid = function () { return !!(this.options.geometry || C(this.x) && C(this.y) || C(this.options.lon) && C(this.options.lat)) }; return e
                }(c.seriesTypes.scatter.prototype.pointClass)
            }); I(e, "Series/MapPoint/MapPointSeries.js", [e["Core/Globals.js"], e["Series/MapPoint/MapPointPoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (c, e, x, C, q) {
                var w = this &&
                    this.__extends || function () { var b = function (c, d) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return b(c, d) }; return function (c, d) { function e() { this.constructor = c } b(c, d); c.prototype = null === d ? Object.create(d) : (e.prototype = d.prototype, new e) } }(); c = c.noop; var F = x.seriesTypes, y = F.map, t = F.scatter; F = q.extend; var m = q.fireEvent, k = q.isNumber, d = q.merge; q = function (b) {
                        function c() {
                            var c = null !== b && b.apply(this,
                                arguments) || this; c.chart = void 0; c.data = void 0; c.options = void 0; c.points = void 0; c.clearBounds = y.prototype.clearBounds; return c
                        } w(c, b); c.prototype.drawDataLabels = function () { b.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) }; c.prototype.projectPoint = function (b) { var c = this.chart.mapView; if (c) { var d = b.geometry, e = b.lon; b = b.lat; d = d && "Point" === d.type && d.coordinates; k(e) && k(b) && (d = [e, b]); if (d) return c.lonLatToProjectedUnits({ lon: d[0], lat: d[1] }) } }; c.prototype.translate =
                            function () {
                                var b = this, c = this.chart.mapView; this.processedXData || this.processData(); this.generatePoints(); this.getProjectedBounds && this.isDirtyData && (delete this.bounds, this.getProjectedBounds()); if (c) {
                                    var d = c.getSVGTransform(), e = c.projection.hasCoordinates; this.points.forEach(function (f) {
                                        var h = f.x; h = void 0 === h ? void 0 : h; var m = f.y; m = void 0 === m ? void 0 : m; var a = k(f.insetIndex) && c.insets[f.insetIndex].getSVGTransform() || d, p = b.projectPoint(f.options) || f.properties && b.projectPoint(f.properties); if (p) h = p.x,
                                            m = p.y; else if (f.bounds && (h = f.bounds.midX, m = f.bounds.midY, a && k(h) && k(m))) { f.plotX = h * a.scaleX + a.translateX; f.plotY = m * a.scaleY + a.translateY; var l = !0 } k(h) && k(m) ? l || (l = c.projectedUnitsToPixels({ x: h, y: m }), f.plotX = l.x, f.plotY = e ? l.y : b.chart.plotHeight - l.y) : f.y = f.plotX = f.plotY = void 0; f.isInside = b.isPointInside(f); f.zone = b.zones.length ? f.getZone() : void 0
                                    })
                                } m(this, "afterTranslate")
                            }; c.defaultOptions = d(t.defaultOptions, {
                                dataLabels: {
                                    crop: !1, defer: !1, enabled: !0, formatter: function () { return this.point.name }, overflow: !1,
                                    style: { color: "#000000" }
                                }
                            }); return c
                    }(t); C.prototype.symbols.mapmarker = function (b, c, d, e, k) { var f = k && "legend" === k.context; f ? (b += d / 2, k = c + e) : k && "number" === typeof k.anchorX && "number" === typeof k.anchorY ? (b = k.anchorX, k = k.anchorY) : (b += d / 2, k = c + e / 2, c -= e); e = f ? e / 3 : e / 2; return [["M", b, k], ["C", b, k, b - e, c + 1.5 * e, b - e, c + e], ["A", e, e, 1, 1, 1, b + e, c + e], ["C", b + e, c + 1.5 * e, b, k, b, k], ["Z"]] }; F(q.prototype, { type: "mappoint", axisTypes: ["colorAxis"], forceDL: !0, isCartesian: !1, pointClass: e, searchPoint: c, useMapGeometry: !0 }); x.registerSeriesType("mappoint",
                        q); ""; return q
            }); I(e, "Series/Bubble/BubbleLegendDefaults.js", [], function () {
                return {
                    borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: !1, labels: { className: void 0, allowOverlap: !1, format: "", formatter: void 0, align: "right", style: { fontSize: "10px", color: "#000000" }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 }, sizeBy: "area", sizeByAbsoluteValue: !1,
                    zIndex: 1, zThreshold: 0
                }
            }); I(e, "Series/Bubble/BubbleLegendItem.js", [e["Core/Color/Color.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
                var q = c.parse, w = x.noop, F = C.arrayMax, y = C.arrayMin, t = C.isNumber, m = C.merge, k = C.pick, d = C.stableSort; c = function () {
                    function b(b, c) { this.options = this.symbols = this.visible = this.selected = this.ranges = this.movementX = this.maxLabel = this.legend = this.fontMetrics = this.chart = void 0; this.setState = w; this.init(b, c) } b.prototype.init = function (b,
                        c) { this.options = b; this.visible = !0; this.chart = c.chart; this.legend = c }; b.prototype.addToLegend = function (b) { b.splice(this.options.legendIndex, 0, this) }; b.prototype.drawLegendSymbol = function (b) {
                            var c = this.chart, e = k(b.options.itemDistance, 20), f = this.legendItem || {}, m = this.options, q = m.ranges, B = m.connectorDistance; this.fontMetrics = c.renderer.fontMetrics(m.labels.style.fontSize); q && q.length && t(q[0].value) ? (d(q, function (b, a) { return a.value - b.value }), this.ranges = q, this.setOptions(), this.render(), b = this.getMaxLabelSize(),
                                q = this.ranges[0].radius, c = 2 * q, B = B - q + b.width, B = 0 < B ? B : 0, this.maxLabel = b, this.movementX = "left" === m.labels.align ? B : 0, f.labelWidth = c + B + e, f.labelHeight = c + this.fontMetrics.h / 2) : b.options.bubbleLegend.autoRanges = !0
                        }; b.prototype.setOptions = function () {
                            var b = this.ranges, c = this.options, d = this.chart.series[c.seriesIndex], e = this.legend.baseline, t = { zIndex: c.zIndex, "stroke-width": c.borderWidth }, v = { zIndex: c.zIndex, "stroke-width": c.connectorWidth }, B = {
                                align: this.legend.options.rtl || "left" === c.labels.align ? "right" : "left",
                                zIndex: c.zIndex
                            }, r = d.options.marker.fillOpacity, a = this.chart.styledMode; b.forEach(function (f, h) { a || (t.stroke = k(f.borderColor, c.borderColor, d.color), t.fill = k(f.color, c.color, 1 !== r ? q(d.color).setOpacity(r).get("rgba") : d.color), v.stroke = k(f.connectorColor, c.connectorColor, d.color)); b[h].radius = this.getRangeRadius(f.value); b[h] = m(b[h], { center: b[0].radius - b[h].radius + e }); a || m(!0, b[h], { bubbleAttribs: m(t), connectorAttribs: m(v), labelAttribs: B }) }, this)
                        }; b.prototype.getRangeRadius = function (b) {
                            var c = this.options;
                            return this.chart.series[this.options.seriesIndex].getRadius.call(this, c.ranges[c.ranges.length - 1].value, c.ranges[0].value, c.minSize, c.maxSize, b)
                        }; b.prototype.render = function () {
                            var b = this.legendItem || {}, c = this.chart.renderer, d = this.options.zThreshold; this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }); b.symbol = c.g("bubble-legend"); b.label = c.g("bubble-legend-item"); b.symbol.translateX = 0; c = b.symbol.translateY = 0; for (var e = this.ranges; c < e.length; c++) { var k = e[c]; k.value >= d && this.renderRange(k) } b.symbol.add(b.label);
                            b.label.add(b.group); this.hideOverlappingLabels()
                        }; b.prototype.renderRange = function (b) {
                            var c = this.options, d = c.labels, e = this.chart, f = e.series[c.seriesIndex], k = e.renderer, m = this.symbols; e = m.labels; var r = b.center, a = Math.abs(b.radius), q = c.connectorDistance || 0, l = d.align, u = c.connectorWidth, n = this.ranges[0].radius || 0, t = r - a - c.borderWidth / 2 + u / 2, g = this.fontMetrics; g = g.f / 2 - (g.h - g.f) / 2; var w = k.styledMode; q = this.legend.options.rtl || "left" === l ? -q : q; "center" === l && (q = 0, c.connectorDistance = 0, b.labelAttribs.align =
                                "center"); l = t + c.labels.y; var y = n + q + c.labels.x; m.bubbleItems.push(k.circle(n, r + ((t % 1 ? 1 : .5) - (u % 2 ? 0 : .5)), a).attr(w ? {} : b.bubbleAttribs).addClass((w ? "highcharts-color-" + f.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (c.className || "")).add(this.legendItem.symbol)); m.connectors.push(k.path(k.crispLine([["M", n, t], ["L", n + q, t]], c.connectorWidth)).attr(w ? {} : b.connectorAttribs).addClass((w ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (c.connectorClassName ||
                                    "")).add(this.legendItem.symbol)); b = k.text(this.formatLabel(b), y, l + g).attr(w ? {} : b.labelAttribs).css(w ? {} : d.style).addClass("highcharts-bubble-legend-labels " + (c.labels.className || "")).add(this.legendItem.symbol); e.push(b); b.placed = !0; b.alignAttr = { x: y, y: l + g }
                        }; b.prototype.getMaxLabelSize = function () { var b, c; this.symbols.labels.forEach(function (d) { c = d.getBBox(!0); b = b ? c.width > b.width ? c : b : c }); return b || {} }; b.prototype.formatLabel = function (b) {
                            var c = this.options, d = c.labels.formatter; c = c.labels.format; var f =
                                this.chart.numberFormatter; return c ? e.format(c, b) : d ? d.call(b) : f(b.value, 1)
                        }; b.prototype.hideOverlappingLabels = function () { var b = this.chart, c = this.symbols; !this.options.labels.allowOverlap && c && (b.hideOverlappingLabels(c.labels), c.labels.forEach(function (b, d) { b.newOpacity ? b.newOpacity !== b.oldOpacity && c.connectors[d].show() : c.connectors[d].hide() })) }; b.prototype.getRanges = function () {
                            var b = this.legend.bubbleLegend, c = b.options.ranges, d, e = Number.MAX_VALUE, q = -Number.MAX_VALUE; b.chart.series.forEach(function (b) {
                                b.isBubble &&
                                !b.ignoreSeries && (d = b.zData.filter(t), d.length && (e = k(b.options.zMin, Math.min(e, Math.max(y(d), !1 === b.options.displayNegative ? b.options.zThreshold : -Number.MAX_VALUE))), q = k(b.options.zMax, Math.max(q, F(d)))))
                            }); var v = e === q ? [{ value: q }] : [{ value: e }, { value: (e + q) / 2 }, { value: q, autoRanges: !0 }]; c.length && c[0].radius && v.reverse(); v.forEach(function (b, d) { c && c[d] && (v[d] = m(c[d], b)) }); return v
                        }; b.prototype.predictBubbleSizes = function () {
                            var b = this.chart, c = this.fontMetrics, d = b.legend.options, e = d.floating, k = (d = "horizontal" ===
                                d.layout) ? b.legend.lastLineHeight : 0, m = b.plotSizeX, q = b.plotSizeY, r = b.series[this.options.seriesIndex], a = r.getPxExtremes(); b = Math.ceil(a.minPxSize); a = Math.ceil(a.maxPxSize); var t = Math.min(q, m); r = r.options.maxSize; if (e || !/%$/.test(r)) c = a; else if (r = parseFloat(r), c = (t + k - c.h / 2) * r / 100 / (r / 100 + 1), d && q - c >= m || !d && m - c >= q) c = a; return [b, Math.ceil(c)]
                        }; b.prototype.updateRanges = function (b, c) { var d = this.legend.options.bubbleLegend; d.minSize = b; d.maxSize = c; d.ranges = this.getRanges() }; b.prototype.correctSizes = function () {
                            var b =
                                this.legend, c = this.chart.series[this.options.seriesIndex].getPxExtremes(); 1 < Math.abs(Math.ceil(c.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, c.maxPxSize), b.render())
                        }; return b
                }(); ""; return c
            }); I(e, "Series/Bubble/BubbleLegendComposition.js", [e["Series/Bubble/BubbleLegendDefaults.js"], e["Series/Bubble/BubbleLegendItem.js"], e["Core/Defaults.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
                function q(c, d, e) {
                    var f = this.legend, h = 0 <= w(this), k; if (f && f.options.enabled && f.bubbleLegend &&
                        f.options.bubbleLegend.autoRanges && h) {
                            var a = f.bubbleLegend.options; h = f.bubbleLegend.predictBubbleSizes(); f.bubbleLegend.updateRanges(h[0], h[1]); a.placed || (f.group.placed = !1, f.allItems.forEach(function (a) { k = a.legendItem || {}; k.group && (k.group.translateY = null) })); f.render(); this.getMargins(); this.axes.forEach(function (c) { c.visible && c.render(); a.placed || (c.setScale(), c.updateNames(), b(c.ticks, function (a) { a.isNew = !0; a.isNewLabel = !0 })) }); a.placed = !0; this.getMargins(); c.call(this, d, e); f.bubbleLegend.correctSizes();
                        m(f, F(f))
                    } else c.call(this, d, e), f && f.options.enabled && f.bubbleLegend && (f.render(), m(f, F(f)))
                } function w(b) { b = b.series; for (var c = 0; c < b.length;) { if (b[c] && b[c].isBubble && b[c].visible && b[c].zData.length) return c; c++ } return -1 } function F(b) {
                    b = b.allItems; var c = [], d = b.length, e, f = 0; for (e = 0; e < d; e++) {
                        var h = b[e].legendItem || {}; var a = (b[e + 1] || {}).legendItem || {}; h.labelHeight && (b[e].itemHeight = h.labelHeight); if (b[e] === b[d - 1] || h.y !== a.y) {
                            c.push({ height: 0 }); h = c[c.length - 1]; for (f; f <= e; f++)b[f].itemHeight > h.height &&
                                (h.height = b[f].itemHeight); h.step = e
                        }
                    } return c
                } function y(b) { var c = this.bubbleLegend, d = this.options, f = d.bubbleLegend, h = w(this.chart); c && c.ranges && c.ranges.length && (f.ranges.length && (f.autoRanges = !!f.ranges[0].autoRanges), this.destroyItem(c)); 0 <= h && d.enabled && f.enabled && (f.seriesIndex = h, this.bubbleLegend = new e(f, this), this.bubbleLegend.addToLegend(b.allItems)) } function t() {
                    var b = this.chart, c = this.visible, d = this.chart.legend; d && d.bubbleLegend && (this.visible = !c, this.ignoreSeries = c, b = 0 <= w(b), d.bubbleLegend.visible !==
                        b && (d.update({ bubbleLegend: { enabled: b } }), d.bubbleLegend.visible = b), this.visible = c)
                } function m(b, c) { var d = b.options.rtl, e, f, h, a, k = 0; b.allItems.forEach(function (b, m) { a = b.legendItem || {}; if (a.group) { e = a.group.translateX || 0; f = a.y || 0; if ((h = b.movementX) || d && b.ranges) h = d ? e - b.options.maxSize / 2 : e + h, a.group.attr({ translateX: h }); m > c[k].step && k++; a.group.attr({ translateY: Math.round(f + c[k].height / 2) }); a.y = f + c[k].height / 2 } }) } var k = x.setOptions, d = C.addEvent, b = C.objectEach, f = C.wrap, h = []; return {
                    compose: function (b,
                        e, m) { -1 === h.indexOf(b) && (h.push(b), k({ legend: { bubbleLegend: c } }), f(b.prototype, "drawChartBox", q)); -1 === h.indexOf(e) && (h.push(e), d(e, "afterGetAllItems", y)); -1 === h.indexOf(m) && (h.push(m), d(m, "legendItemClick", t)) }
                }
            }); I(e, "Series/Bubble/BubblePoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = this && this.__extends || function () {
                    var c = function (e, q) {
                        c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, e) { c.__proto__ = e } || function (c,
                            e) { for (var m in e) e.hasOwnProperty(m) && (c[m] = e[m]) }; return c(e, q)
                    }; return function (e, q) { function w() { this.constructor = e } c(e, q); e.prototype = null === q ? Object.create(q) : (w.prototype = q.prototype, new w) }
                }(); x = x.extend; e = function (e) { function q() { var c = null !== e && e.apply(this, arguments) || this; c.options = void 0; c.series = void 0; return c } C(q, e); q.prototype.haloPath = function (e) { return c.prototype.haloPath.call(this, 0 === e ? 0 : (this.marker ? this.marker.radius || 0 : 0) + e) }; return q }(e.seriesTypes.scatter.prototype.pointClass);
                x(e.prototype, { ttBelow: !1 }); return e
            }); I(e, "Series/Bubble/BubbleSeries.js", [e["Series/Bubble/BubbleLegendComposition.js"], e["Series/Bubble/BubblePoint.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w) {
                function F() {
                    var b = this, a = this.len, c = this.chart, d = this.isXAxis, e = d ? "xData" : "yData", f = this.min, h = this.max - f, g = 0, k = a, m = a / h, p; this.series.forEach(function (a) {
                        if (a.bubblePadding && (a.visible || !c.options.chart.ignoreHiddenSeries)) {
                            p =
                            b.allowZoomOutside = !0; var l = a[e]; d && ((a.onPoint || a).getRadii(0, 0, a), a.onPoint && (a.radii = a.onPoint.radii)); if (0 < h) for (var n = l.length; n--;)if (G(l[n]) && b.dataMin <= l[n] && l[n] <= b.max) { var r = a.radii && a.radii[n] || 0; g = Math.min((l[n] - f) * m - r, g); k = Math.max((l[n] - f) * m + r, k) }
                        }
                    }); p && 0 < h && !this.logarithmic && (k -= a, m *= (a + Math.max(0, g) - Math.min(k, a)) / a, [["min", "userMin", g], ["max", "userMax", k]].forEach(function (a) { "undefined" === typeof v(b.options[a[0]], b[a[1]]) && (b[a[0]] += a[2] / m) }))
                } var y = this && this.__extends || function () {
                    var b =
                        function (a, c) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return b(a, c) }; return function (a, c) { function d() { this.constructor = a } b(a, c); a.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d) }
                }(), t = x.parse; x = C.noop; var m = q.series, k = q.seriesTypes; C = k.column.prototype; var d = k.scatter; k = w.addEvent; var b = w.arrayMax, f = w.arrayMin, h = w.clamp, p = w.extend, G = w.isNumber, D = w.merge, v = w.pick, B = [];
                w = function (e) {
                    function a() { var a = null !== e && e.apply(this, arguments) || this; a.data = void 0; a.maxPxSize = void 0; a.minPxSize = void 0; a.options = void 0; a.points = void 0; a.radii = void 0; a.yData = void 0; a.zData = void 0; return a } y(a, e); a.compose = function (a, b, d, e) { c.compose(b, d, e); -1 === B.indexOf(a) && (B.push(a), a.prototype.beforePadding = F) }; a.prototype.animate = function (a) {
                        !a && this.points.length < this.options.animationLimit && this.points.forEach(function (a) {
                            var b = a.graphic; b && b.width && (this.hasRendered || b.attr({
                                x: a.plotX,
                                y: a.plotY, width: 1, height: 1
                            }), b.animate(this.markerAttribs(a), this.options.animation))
                        }, this)
                    }; a.prototype.getRadii = function () {
                        var a = this, b = this.zData, c = this.yData, d = [], e = this.chart.bubbleZExtremes; var f = this.getPxExtremes(); var h = f.minPxSize, k = f.maxPxSize; if (!e) {
                            var m = Number.MAX_VALUE, p = -Number.MAX_VALUE, r; this.chart.series.forEach(function (b) {
                                b.bubblePadding && (b.visible || !a.chart.options.chart.ignoreHiddenSeries) && (b = (b.onPoint || b).getZExtremes()) && (m = Math.min(m || b.zMin, b.zMin), p = Math.max(p || b.zMax,
                                    b.zMax), r = !0)
                            }); r ? (e = { zMin: m, zMax: p }, this.chart.bubbleZExtremes = e) : e = { zMin: 0, zMax: 0 }
                        } var q = 0; for (f = b.length; q < f; q++) { var t = b[q]; d.push(this.getRadius(e.zMin, e.zMax, h, k, t, c && c[q])) } this.radii = d
                    }; a.prototype.getRadius = function (a, b, c, d, e, f) {
                        var g = this.options, h = "width" !== g.sizeBy, k = g.zThreshold, l = b - a, m = .5; if (null === f || null === e) return null; if (G(e)) { g.sizeByAbsoluteValue && (e = Math.abs(e - k), l = Math.max(b - k, Math.abs(a - k)), a = 0); if (e < a) return c / 2 - 1; 0 < l && (m = (e - a) / l) } h && 0 <= m && (m = Math.sqrt(m)); return Math.ceil(c +
                            m * (d - c)) / 2
                    }; a.prototype.hasData = function () { return !!this.processedXData.length }; a.prototype.pointAttribs = function (a, b) { var c = this.options.marker.fillOpacity; a = m.prototype.pointAttribs.call(this, a, b); 1 !== c && (a.fill = t(a.fill).setOpacity(c).get("rgba")); return a }; a.prototype.translate = function () { e.prototype.translate.call(this); this.getRadii(); this.translateBubble() }; a.prototype.translateBubble = function () {
                        for (var a = this.data, b = this.radii, c = this.getPxExtremes().minPxSize, d = a.length; d--;) {
                            var e = a[d], f =
                                b ? b[d] : 0; G(f) && f >= c / 2 ? (e.marker = p(e.marker, { radius: f, width: 2 * f, height: 2 * f }), e.dlBox = { x: e.plotX - f, y: e.plotY - f, width: 2 * f, height: 2 * f }) : (e.shapeArgs = e.plotY = e.dlBox = void 0, e.isInside = !1)
                        }
                    }; a.prototype.getPxExtremes = function () { var a = Math.min(this.chart.plotWidth, this.chart.plotHeight), b = function (b) { if ("string" === typeof b) { var c = /%$/.test(b); b = parseInt(b, 10) } return c ? a * b / 100 : b }, c = b(v(this.options.minSize, 8)); b = Math.max(b(v(this.options.maxSize, "20%")), c); return { minPxSize: c, maxPxSize: b } }; a.prototype.getZExtremes =
                        function () { var a = this.options, c = (this.zData || []).filter(G); if (c.length) { var d = v(a.zMin, h(f(c), !1 === a.displayNegative ? a.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)); a = v(a.zMax, b(c)); if (G(d) && G(a)) return { zMin: d, zMax: a } } }; a.defaultOptions = D(d.defaultOptions, {
                            dataLabels: { formatter: function () { var a = this.series.chart.numberFormatter, b = this.point.z; return G(b) ? a(b, -1) : "" }, inside: !0, verticalAlign: "middle" }, animationLimit: 250, marker: {
                                lineColor: null, lineWidth: 1, fillOpacity: .5, radius: null, states: { hover: { radiusPlus: 0 } },
                                symbol: "circle"
                            }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z"
                        }); return a
                }(d); p(w.prototype, { alignDataLabel: C.alignDataLabel, applyZones: x, bubblePadding: !0, buildKDTree: x, directTouch: !0, isBubble: !0, pointArrayMap: ["y", "z"], pointClass: e, parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group", zoneAxis: "z" }); k(w, "updatedData", function (b) { delete b.target.chart.bubbleZExtremes });
                k(w, "remove", function (b) { delete b.target.chart.bubbleZExtremes }); q.registerSeriesType("bubble", w); ""; ""; return w
            }); I(e, "Series/MapBubble/MapBubblePoint.js", [e["Series/Bubble/BubblePoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x) {
                var C = this && this.__extends || function () {
                    var c = function (e, q) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, e) { c.__proto__ = e } || function (c, e) { for (var m in e) e.hasOwnProperty(m) && (c[m] = e[m]) }; return c(e, q) }; return function (e,
                        q) { function w() { this.constructor = e } c(e, q); e.prototype = null === q ? Object.create(q) : (w.prototype = q.prototype, new w) }
                }(); e = e.seriesTypes.map.prototype.pointClass.prototype; x = x.extend; c = function (c) { function e() { return null !== c && c.apply(this, arguments) || this } C(e, c); e.prototype.isValid = function () { return "number" === typeof this.z }; return e }(c); x(c.prototype, { applyOptions: e.applyOptions, getProjectedBounds: e.getProjectedBounds }); return c
            }); I(e, "Series/MapBubble/MapBubbleSeries.js", [e["Series/Bubble/BubbleSeries.js"],
            e["Series/MapBubble/MapBubblePoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (c, e, x, C) {
                var q = this && this.__extends || function () { var c = function (e, d) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, c) { b.__proto__ = c } || function (b, c) { for (var d in c) c.hasOwnProperty(d) && (b[d] = c[d]) }; return c(e, d) }; return function (e, d) { function b() { this.constructor = e } c(e, d); e.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b) } }(), w = x.seriesTypes, F = w.map.prototype,
                y = w.mappoint.prototype; w = C.extend; var t = C.merge; C = function (e) {
                    function k() { var c = null !== e && e.apply(this, arguments) || this; c.data = void 0; c.options = void 0; c.points = void 0; c.clearBounds = F.clearBounds; return c } q(k, e); k.prototype.searchPoint = function (c, b) { return this.searchKDTree({ clientX: c.chartX - this.chart.plotLeft, plotY: c.chartY - this.chart.plotTop }, b, c) }; k.prototype.translate = function () { y.translate.call(this); this.getRadii(); this.translateBubble() }; k.defaultOptions = t(c.defaultOptions, {
                        lineWidth: 0, animationLimit: 500,
                        joinBy: "hc-key", tooltip: { pointFormat: "{point.name}: {point.z}" }
                    }); return k
                }(c); w(C.prototype, { type: "mapbubble", axisTypes: ["colorAxis"], getProjectedBounds: F.getProjectedBounds, isCartesian: !1, pointArrayMap: ["z"], pointClass: e, processData: F.processData, projectPoint: y.projectPoint, setData: F.setData, setOptions: F.setOptions, updateData: F.updateData, useMapGeometry: !0, xyFromShape: !0 }); x.registerSeriesType("mapbubble", C); ""; return C
            }); I(e, "Series/Heatmap/HeatmapPoint.js", [e["Core/Series/SeriesRegistry.js"],
            e["Core/Utilities.js"]], function (c, e) {
                var x = this && this.__extends || function () { var c = function (e, m) { c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c, d) { c.__proto__ = d } || function (c, d) { for (var b in d) d.hasOwnProperty(b) && (c[b] = d[b]) }; return c(e, m) }; return function (e, m) { function k() { this.constructor = e } c(e, m); e.prototype = null === m ? Object.create(m) : (k.prototype = m.prototype, new k) } }(), C = e.clamp, q = e.defined, w = e.extend, F = e.pick; c = function (c) {
                    function e() {
                        var e = null !== c && c.apply(this, arguments) ||
                            this; e.options = void 0; e.series = void 0; e.value = void 0; e.x = void 0; e.y = void 0; return e
                    } x(e, c); e.prototype.applyOptions = function (e, k) { (this.isNull || null === this.value) && delete this.color; c.prototype.applyOptions.call(this, e, k); this.formatPrefix = this.isNull || null === this.value ? "null" : "point"; return this }; e.prototype.getCellAttributes = function () {
                        var c = this.series, e = c.options, d = (e.colsize || 1) / 2, b = (e.rowsize || 1) / 2, f = c.xAxis, h = c.yAxis, p = this.options.marker || c.options.marker; c = c.pointPlacementToXValue(); var t =
                            F(this.pointPadding, e.pointPadding, 0), w = { x1: C(Math.round(f.len - f.translate(this.x - d, !1, !0, !1, !0, -c)), -f.len, 2 * f.len), x2: C(Math.round(f.len - f.translate(this.x + d, !1, !0, !1, !0, -c)), -f.len, 2 * f.len), y1: C(Math.round(h.translate(this.y - b, !1, !0, !1, !0)), -h.len, 2 * h.len), y2: C(Math.round(h.translate(this.y + b, !1, !0, !1, !0)), -h.len, 2 * h.len) };[["width", "x"], ["height", "y"]].forEach(function (b) {
                                var c = b[0]; b = b[1]; var d = b + "1", a = b + "2", e = Math.abs(w[d] - w[a]), f = p && p.lineWidth || 0, h = Math.abs(w[d] + w[a]) / 2; c = p && p[c]; q(c) && c <
                                    e && (c = c / 2 + f / 2, w[d] = h - c, w[a] = h + c); t && ("y" === b && (d = a, a = b + "1"), w[d] += t, w[a] -= t)
                            }); return w
                    }; e.prototype.haloPath = function (c) { if (!c) return []; var e = this.shapeArgs || {}, d = e.x; d = void 0 === d ? 0 : d; var b = e.y; b = void 0 === b ? 0 : b; var f = e.width; f = void 0 === f ? 0 : f; e = e.height; e = void 0 === e ? 0 : e; return [["M", d - c, b - c], ["L", d - c, b + e + c], ["L", d + f + c, b + e + c], ["L", d + f + c, b - c], ["Z"]] }; e.prototype.isValid = function () { return Infinity !== this.value && -Infinity !== this.value }; return e
                }(c.seriesTypes.scatter.prototype.pointClass); w(c.prototype,
                    { dataLabelOnNull: !0, moveToTopOnHover: !0, ttBelow: !1 }); return c
            }); I(e, "Series/Heatmap/HeatmapSeries.js", [e["Core/Color/Color.js"], e["Series/ColorMapComposition.js"], e["Series/Heatmap/HeatmapPoint.js"], e["Core/Legend/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (c, e, x, C, q, w, F) {
                var y = this && this.__extends || function () {
                    var b = function (c, d) {
                        b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (b, a) { b.__proto__ = a } || function (b,
                            a) { for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]) }; return b(c, d)
                    }; return function (c, d) { function e() { this.constructor = c } b(c, d); c.prototype = null === d ? Object.create(d) : (e.prototype = d.prototype, new e) }
                }(), t = q.series, m = q.seriesTypes, k = m.column, d = m.scatter, b = w.prototype.symbols; w = F.extend; var f = F.fireEvent, h = F.isNumber, p = F.merge, G = F.pick; F = function (e) {
                    function k() {
                        var b = null !== e && e.apply(this, arguments) || this; b.colorAxis = void 0; b.data = void 0; b.options = void 0; b.points = void 0; b.valueMax = NaN; b.valueMin = NaN;
                        return b
                    } y(k, e); k.prototype.drawPoints = function () { var b = this; if ((this.options.marker || {}).enabled || this._hasPointMarkers) t.prototype.drawPoints.call(this), this.points.forEach(function (c) { c.graphic && (c.graphic[b.chart.styledMode ? "css" : "animate"](b.colorAttribs(c)), null === c.value && c.graphic.addClass("highcharts-null-point")) }) }; k.prototype.getExtremes = function () { var b = t.prototype.getExtremes.call(this, this.valueData), c = b.dataMin; b = b.dataMax; h(c) && (this.valueMin = c); h(b) && (this.valueMax = b); return t.prototype.getExtremes.call(this) };
                    k.prototype.getValidPoints = function (b, c) { return t.prototype.getValidPoints.call(this, b, c, !0) }; k.prototype.hasData = function () { return !!this.processedXData.length }; k.prototype.init = function () { e.prototype.init.apply(this, arguments); var c = this.options; c.pointRange = G(c.pointRange, c.colsize || 1); this.yAxis.axisPointRange = c.rowsize || 1; b.ellipse = b.circle; c.marker && (c.marker.r = c.borderRadius) }; k.prototype.markerAttribs = function (b, c) {
                        var a = b.shapeArgs || {}; if (b.hasImage) return { x: b.plotX, y: b.plotY }; if (c && "normal" !==
                            c) { var d = b.options.marker || {}; b = this.options.marker || {}; b = b.states && b.states[c] || {}; d = d.states && d.states[c] || {}; c = (d.width || b.width || a.width || 0) + (d.widthPlus || b.widthPlus || 0); b = (d.height || b.height || a.height || 0) + (d.heightPlus || b.heightPlus || 0); return { x: (a.x || 0) + ((a.width || 0) - c) / 2, y: (a.y || 0) + ((a.height || 0) - b) / 2, width: c, height: b } } return a
                    }; k.prototype.pointAttribs = function (b, d) {
                        var a = t.prototype.pointAttribs.call(this, b, d), e = this.options || {}, f = this.chart.options.plotOptions || {}, h = f.series || {}, k = f.heatmap ||
                            {}; f = b && b.options.borderColor || e.borderColor || k.borderColor || h.borderColor; h = b && b.options.borderWidth || e.borderWidth || k.borderWidth || h.borderWidth || a["stroke-width"]; a.stroke = b && b.marker && b.marker.lineColor || e.marker && e.marker.lineColor || f || this.color; a["stroke-width"] = h; d && "normal" !== d && (b = p(e.states && e.states[d], e.marker && e.marker.states && e.marker.states[d], b && b.options.states && b.options.states[d] || {}), a.fill = b.color || c.parse(a.fill).brighten(b.brightness || 0).get(), a.stroke = b.lineColor || a.stroke);
                        return a
                    }; k.prototype.translate = function () {
                        var c = this.options, d = c.marker && c.marker.symbol || "rect", a = b[d] ? d : "rect", e = -1 !== ["circle", "square"].indexOf(a); this.generatePoints(); this.points.forEach(function (f) {
                            var h = f.getCellAttributes(), k = Math.min(h.x1, h.x2), l = Math.min(h.y1, h.y2), g = Math.max(Math.abs(h.x2 - h.x1), 0), m = Math.max(Math.abs(h.y2 - h.y1), 0); f.hasImage = 0 === (f.marker && f.marker.symbol || d || "").indexOf("url"); e && (l = Math.abs(g - m), k = Math.min(h.x1, h.x2) + (g < m ? 0 : l / 2), l = Math.min(h.y1, h.y2) + (g < m ? l / 2 : 0), g =
                                m = Math.min(g, m)); f.hasImage && (f.marker = { width: g, height: m }); f.plotX = f.clientX = (h.x1 + h.x2) / 2; f.plotY = (h.y1 + h.y2) / 2; f.shapeType = "path"; f.shapeArgs = p(!0, { x: k, y: l, width: g, height: m }, { d: b[a](k, l, g, m, { r: c.borderRadius }) })
                        }); f(this, "afterTranslate")
                    }; k.defaultOptions = p(d.defaultOptions, {
                        animation: !1, borderRadius: 0, borderWidth: 0, nullColor: "#f7f7f7", dataLabels: {
                            formatter: function () { var b = this.series.chart.numberFormatter, c = this.point.value; return h(c) ? b(c, -1) : "" }, inside: !0, verticalAlign: "middle", crop: !1, overflow: "allow",
                            padding: 0
                        }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: !0, pointRange: null, tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" }, states: { hover: { halo: !1, brightness: .2 } }
                    }); return k
                }(d); w(F.prototype, {
                    axisTypes: e.seriesMembers.axisTypes, colorKey: e.seriesMembers.colorKey, directTouch: !0, getExtremesFromAll: !0, parallelArrays: e.seriesMembers.parallelArrays, pointArrayMap: ["y", "value"], pointClass: x, specialGroup: "group", trackerGroups: e.seriesMembers.trackerGroups,
                    alignDataLabel: k.prototype.alignDataLabel, colorAttribs: e.seriesMembers.colorAttribs, drawLegendSymbol: C.drawRectangle, getSymbol: t.prototype.getSymbol
                }); e.compose(F); q.registerSeriesType("heatmap", F); ""; ""; return F
            }); I(e, "masters/modules/map.src.js", [e["Core/Globals.js"], e["Core/Axis/Color/ColorAxis.js"], e["Series/MapBubble/MapBubbleSeries.js"], e["Core/Chart/MapChart.js"], e["Maps/MapView.js"], e["Maps/Projection.js"]], function (c, e, x, C, q, w) {
                c.ColorAxis = e; c.MapChart = C; c.mapChart = c.Map = C.mapChart; c.MapView =
                    q; c.maps = C.maps; c.Projection = w; e.compose(c.Chart, c.Fx, c.Legend, c.Series); x.compose(c.Axis, c.Chart, c.Legend, c.Series)
            }); I(e, "masters/highmaps.src.js", [e["masters/highcharts.src.js"]], function (c) { c.product = "Highmaps"; return c }); e["masters/highmaps.src.js"]._modules = e; return e["masters/highmaps.src.js"]
});
//# sourceMappingURL=highmaps.js.map