﻿/*
 Highcharts JS v10.3.3 (2023-01-20)

 ColorAxis module

 (c) 2012-2021 Pawel Potaczek

 License: www.highcharts.com/license
*/
(function (b) { "object" === typeof module && module.exports ? (b["default"] = b, module.exports = b) : "function" === typeof define && define.amd ? define("highcharts/modules/color-axis", ["highcharts"], function (n) { b(n); b.Highcharts = n; return b }) : b("undefined" !== typeof Highcharts ? Highcharts : void 0) })(function (b) {
    function n(b, k, t, p) { b.hasOwnProperty(k) || (b[k] = p.apply(null, t), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: k, module: b[k] } }))) } b = b ? b._modules : {}; n(b,
        "Core/Axis/Color/ColorAxisComposition.js", [b["Core/Color/Color.js"], b["Core/Utilities.js"]], function (b, k) {
            var m = b.parse, p = k.addEvent, n = k.extend, y = k.merge, z = k.pick, u = k.splat, v; (function (b) {
                function k() { var c = this, a = this.options; this.colorAxis = []; a.colorAxis && (a.colorAxis = u(a.colorAxis), a.colorAxis.forEach(function (a, d) { a.index = d; new q(c, a) })) } function v(a) {
                    var c = this, d = function (d) { d = a.allItems.indexOf(d); -1 !== d && (c.destroyItem(a.allItems[d]), a.allItems.splice(d, 1)) }, e = [], l, h; (this.chart.colorAxis ||
                        []).forEach(function (a) { (l = a.options) && l.showInLegend && (l.dataClasses && l.visible ? e = e.concat(a.getDataClassLegendSymbols()) : l.visible && e.push(a), a.series.forEach(function (a) { if (!a.options.showInLegend || l.dataClasses) "point" === a.options.legendType ? a.points.forEach(function (a) { d(a) }) : d(a) })) }); for (h = e.length; h--;)a.allItems.unshift(e[h])
                } function t(a) { a.visible && a.item.legendColor && a.item.legendItem.symbol.attr({ fill: a.item.legendColor }) } function x() {
                    var a = this.chart.colorAxis; a && a.forEach(function (a,
                        c, d) { a.update({}, d) })
                } function r() { (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors() } function D() { var a = this.axisTypes; a ? -1 === a.indexOf("colorAxis") && a.push("colorAxis") : this.axisTypes = ["colorAxis"] } function f(a) { var c = this, d = a ? "show" : "hide"; c.visible = c.options.visible = !!a;["graphic", "dataLabel"].forEach(function (a) { if (c[a]) c[a][d]() }); this.series.buildKDTree() } function a() {
                    var a = this, c = this.options.nullColor, d = this.colorAxis, e = this.colorKey; (this.data.length ?
                        this.data : this.points).forEach(function (h) { var f = h.getNestedProperty(e); (f = h.options.color || (h.isNull || null === h.value ? c : d && "undefined" !== typeof f ? d.toColor(f, h) : h.color || a.color)) && h.color !== f && (h.color = f, "point" === a.options.legendType && h.legendItem && h.legendItem.label && a.chart.legend.colorizeItem(h, h.visible)) })
                } function c(a) {
                    var c = a.prototype.createAxis; a.prototype.createAxis = function (a, d) {
                        if ("colorAxis" !== a) return c.apply(this, arguments); var e = new q(this, y(d.axis, { index: this[a].length, isX: !1 }));
                        this.isDirtyLegend = !0; this.axes.forEach(function (a) { a.series = [] }); this.series.forEach(function (a) { a.bindAxes(); a.isDirtyData = !0 }); z(d.redraw, !0) && this.redraw(d.animation); return e
                    }
                } function e() { this.elem.attr("fill", m(this.start).tweenTo(m(this.end), this.pos), void 0, !0) } function d() { this.elem.attr("stroke", m(this.start).tweenTo(m(this.end), this.pos), void 0, !0) } var h = [], q; b.compose = function (l, g, b, w, m) {
                    q || (q = l); -1 === h.indexOf(g) && (h.push(g), l = g.prototype, l.collectionsWithUpdate.push("colorAxis"), l.collectionsWithInit.colorAxis =
                        [l.addColorAxis], p(g, "afterGetAxes", k), c(g)); -1 === h.indexOf(b) && (h.push(b), g = b.prototype, g.fillSetter = e, g.strokeSetter = d); -1 === h.indexOf(w) && (h.push(w), p(w, "afterGetAllItems", v), p(w, "afterColorizeItem", t), p(w, "afterUpdate", x)); -1 === h.indexOf(m) && (h.push(m), n(m.prototype, { optionalAxis: "colorAxis", translateColors: a }), n(m.prototype.pointClass.prototype, { setVisible: f }), p(m, "afterTranslate", r, { order: 1 }), p(m, "bindAxes", D))
                }; b.pointSetVisible = f
            })(v || (v = {})); return v
        }); n(b, "Core/Axis/Color/ColorAxisDefaults.js",
            [], function () { return { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: { animation: { duration: 50 }, width: .01, color: "#999999" }, labels: { overflow: "justify", rotation: 0 }, minColor: "#e6ebf5", maxColor: "#003399", tickLength: 5, showInLegend: !0 } }); n(b, "Core/Axis/Color/ColorAxis.js", [b["Core/Axis/Axis.js"], b["Core/Color/Color.js"], b["Core/Axis/Color/ColorAxisComposition.js"], b["Core/Axis/Color/ColorAxisDefaults.js"], b["Core/Globals.js"], b["Core/Legend/LegendSymbol.js"],
            b["Core/Series/SeriesRegistry.js"], b["Core/Utilities.js"]], function (b, k, n, p, E, y, z, u) {
                var m = this && this.__extends || function () { var b = function (f, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, e) { a.__proto__ = e } || function (a, e) { for (var d in e) e.hasOwnProperty(d) && (a[d] = e[d]) }; return b(f, a) }; return function (f, a) { function c() { this.constructor = f } b(f, a); f.prototype = null === a ? Object.create(a) : (c.prototype = a.prototype, new c) } }(), t = k.parse, A = z.series, B = u.extend, C = u.isNumber, x = u.merge, r = u.pick;
                k = function (b) {
                    function f(a, c) { var e = b.call(this, a, c) || this; e.beforePadding = !1; e.chart = void 0; e.coll = "colorAxis"; e.dataClasses = void 0; e.name = ""; e.options = void 0; e.stops = void 0; e.visible = !0; e.init(a, c); return e } m(f, b); f.compose = function (a, c, e, d) { n.compose(f, a, c, e, d) }; f.prototype.init = function (a, c) {
                        var e = a.options.legend || {}, d = c.layout ? "vertical" !== c.layout : "vertical" !== e.layout, h = c.visible; e = x(f.defaultColorAxisOptions, c, { showEmpty: !1, title: null, visible: e.enabled && !1 !== h }); this.coll = "colorAxis"; this.side =
                            c.side || d ? 2 : 1; this.reversed = c.reversed || !d; this.opposite = !d; b.prototype.init.call(this, a, e); this.userOptions.visible = h; c.dataClasses && this.initDataClasses(c); this.initStops(); this.horiz = d; this.zoomEnabled = !1
                    }; f.prototype.initDataClasses = function (a) {
                        var c = this.chart, e = this.legendItem = this.legendItem || {}, d = a.dataClasses.length, h = this.options, b, f = 0, g = c.options.chart.colorCount; this.dataClasses = b = []; e.labels = []; (a.dataClasses || []).forEach(function (a, e) {
                            a = x(a); b.push(a); if (c.styledMode || !a.color) "category" ===
                                h.dataClassColor ? (c.styledMode || (e = c.options.colors, g = e.length, a.color = e[f]), a.colorIndex = f, f++, f === g && (f = 0)) : a.color = t(h.minColor).tweenTo(t(h.maxColor), 2 > d ? .5 : e / (d - 1))
                        })
                    }; f.prototype.hasData = function () { return !!(this.tickPositions || []).length }; f.prototype.setTickPositions = function () { if (!this.dataClasses) return b.prototype.setTickPositions.call(this) }; f.prototype.initStops = function () {
                        this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]]; this.stops.forEach(function (a) {
                            a.color =
                            t(a[1])
                        })
                    }; f.prototype.setOptions = function (a) { b.prototype.setOptions.call(this, a); this.options.crosshair = this.options.marker }; f.prototype.setAxisSize = function () {
                        var a = this.legendItem && this.legendItem.symbol, c = this.chart, e = c.options.legend || {}, d, b; a ? (this.left = e = a.attr("x"), this.top = d = a.attr("y"), this.width = b = a.attr("width"), this.height = a = a.attr("height"), this.right = c.chartWidth - e - b, this.bottom = c.chartHeight - d - a, this.len = this.horiz ? b : a, this.pos = this.horiz ? e : d) : this.len = (this.horiz ? e.symbolWidth : e.symbolHeight) ||
                            f.defaultLegendLength
                    }; f.prototype.normalizedValue = function (a) { this.logarithmic && (a = this.logarithmic.log2lin(a)); return 1 - (this.max - a) / (this.max - this.min || 1) }; f.prototype.toColor = function (a, c) {
                        var e = this.dataClasses, d = this.stops, b; if (e) for (b = e.length; b--;) { var f = e[b]; var l = f.from; d = f.to; if (("undefined" === typeof l || a >= l) && ("undefined" === typeof d || a <= d)) { var g = f.color; c && (c.dataClass = b, c.colorIndex = f.colorIndex); break } } else {
                            a = this.normalizedValue(a); for (b = d.length; b-- && !(a > d[b][0]);); l = d[b] || d[b + 1];
                            d = d[b + 1] || l; a = 1 - (d[0] - a) / (d[0] - l[0] || 1); g = l.color.tweenTo(d.color, a)
                        } return g
                    }; f.prototype.getOffset = function () { var a = this.legendItem && this.legendItem.group, c = this.chart.axisOffset[this.side]; if (a) { this.axisParent = a; b.prototype.getOffset.call(this); var e = this.chart.legend; e.allItems.forEach(function (a) { a instanceof f && a.drawLegendSymbol(e, a) }); e.render(); this.chart.getMargins(!0); this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width); this.chart.axisOffset[this.side] = c } }; f.prototype.setLegendColor =
                        function () { var a = this.reversed, c = a ? 1 : 0; a = a ? 0 : 1; c = this.horiz ? [c, 0, a, 0] : [0, a, 0, c]; this.legendColor = { linearGradient: { x1: c[0], y1: c[1], x2: c[2], y2: c[3] }, stops: this.stops } }; f.prototype.drawLegendSymbol = function (a, c) {
                            c = c.legendItem || {}; var e = a.padding, d = a.options, b = r(d.itemDistance, 10), q = this.horiz, l = r(d.symbolWidth, q ? f.defaultLegendLength : 12), g = r(d.symbolHeight, q ? 12 : f.defaultLegendLength); d = r(d.labelPadding, q ? 16 : 30); this.setLegendColor(); c.symbol || (c.symbol = this.chart.renderer.rect(0, a.baseline - 11, l, g).attr({ zIndex: 1 }).add(c.group));
                            c.labelWidth = l + e + (q ? b : this.options.labels.x + this.maxLabelLength); c.labelHeight = g + e + (q ? d : 0)
                        }; f.prototype.setState = function (a) { this.series.forEach(function (c) { c.setState(a) }) }; f.prototype.setVisible = function () { }; f.prototype.getSeriesExtremes = function () {
                            var a = this.series, c = a.length, e; this.dataMin = Infinity; for (this.dataMax = -Infinity; c--;) {
                                var d = a[c]; var b = d.colorKey = r(d.options.colorKey, d.colorKey, d.pointValKey, d.zoneAxis, "y"); var f = d.pointArrayMap; var l = d[b + "Min"] && d[b + "Max"]; if (d[b + "Data"]) var g = d[b +
                                    "Data"]; else if (f) { g = []; f = f.indexOf(b); var k = d.yData; if (0 <= f && k) for (e = 0; e < k.length; e++)g.push(r(k[e][f], k[e])) } else g = d.yData; l ? (d.minColorValue = d[b + "Min"], d.maxColorValue = d[b + "Max"]) : (g = A.prototype.getExtremes.call(d, g), d.minColorValue = g.dataMin, d.maxColorValue = g.dataMax); "undefined" !== typeof d.minColorValue && (this.dataMin = Math.min(this.dataMin, d.minColorValue), this.dataMax = Math.max(this.dataMax, d.maxColorValue)); l || A.prototype.applyExtremes.call(d)
                            }
                        }; f.prototype.drawCrosshair = function (a, c) {
                            var e =
                                this.legendItem || {}, d = c && c.plotX, f = c && c.plotY, k = this.pos, l = this.len; if (c) { var g = this.toPixels(c.getNestedProperty(c.series.colorKey)); g < k ? g = k - 2 : g > k + l && (g = k + l + 2); c.plotX = g; c.plotY = this.len - g; b.prototype.drawCrosshair.call(this, a, c); c.plotX = d; c.plotY = f; this.cross && !this.cross.addedToColorAxis && e.group && (this.cross.addClass("highcharts-coloraxis-marker").add(e.group), this.cross.addedToColorAxis = !0, this.chart.styledMode || "object" !== typeof this.crosshair || this.cross.attr({ fill: this.crosshair.color })) }
                        };
                    f.prototype.getPlotLinePath = function (a) { var c = this.left, e = a.translatedValue, d = this.top; return C(e) ? this.horiz ? [["M", e - 4, d - 6], ["L", e + 4, d - 6], ["L", e, d], ["Z"]] : [["M", c, e], ["L", c - 6, e + 6], ["L", c - 6, e - 6], ["Z"]] : b.prototype.getPlotLinePath.call(this, a) }; f.prototype.update = function (a, c) {
                        var e = this.chart.legend; this.series.forEach(function (a) { a.isDirtyData = !0 }); (a.dataClasses && e.allItems || this.dataClasses) && this.destroyItems(); b.prototype.update.call(this, a, c); this.legendItem && this.legendItem.label && (this.setLegendColor(),
                            e.colorizeItem(this, !0))
                    }; f.prototype.destroyItems = function () { var a = this.chart, c = this.legendItem || {}; if (c.label) a.legend.destroyItem(this); else if (c.labels) { var b = 0; for (c = c.labels; b < c.length; b++)a.legend.destroyItem(c[b]) } a.isDirtyLegend = !0 }; f.prototype.destroy = function () { this.chart.isDirtyLegend = !0; this.destroyItems(); b.prototype.destroy.apply(this, [].slice.call(arguments)) }; f.prototype.remove = function (a) { this.destroyItems(); b.prototype.remove.call(this, a) }; f.prototype.getDataClassLegendSymbols =
                        function () {
                            var a = this, c = a.chart, b = a.legendItem && a.legendItem.labels || [], d = c.options.legend, f = r(d.valueDecimals, -1), k = r(d.valueSuffix, ""), l = function (c) { return a.series.reduce(function (a, b) { a.push.apply(a, b.points.filter(function (a) { return a.dataClass === c })); return a }, []) }, g; b.length || a.dataClasses.forEach(function (d, e) {
                                var h = d.from, m = d.to, n = c.numberFormatter, p = !0; g = ""; "undefined" === typeof h ? g = "< " : "undefined" === typeof m && (g = "> "); "undefined" !== typeof h && (g += n(h, f) + k); "undefined" !== typeof h && "undefined" !==
                                    typeof m && (g += " - "); "undefined" !== typeof m && (g += n(m, f) + k); b.push(B({ chart: c, name: g, options: {}, drawLegendSymbol: y.drawRectangle, visible: !0, isDataClass: !0, setState: function (a) { for (var c = 0, d = l(e); c < d.length; c++)d[c].setState(a) }, setVisible: function () { this.visible = p = a.visible = !p; for (var d = 0, b = l(e); d < b.length; d++)b[d].setVisible(p); c.legend.colorizeItem(this, p) } }, d))
                            }); return b
                        }; f.defaultColorAxisOptions = p; f.defaultLegendLength = 200; f.keepProps = ["legendItem"]; return f
                }(b); Array.prototype.push.apply(b.keepProps,
                    k.keepProps); ""; return k
            }); n(b, "masters/modules/coloraxis.src.js", [b["Core/Globals.js"], b["Core/Axis/Color/ColorAxis.js"]], function (b, k) { b.ColorAxis = k; k.compose(b.Chart, b.Fx, b.Legend, b.Series) })
});
//# sourceMappingURL=coloraxis.js.map