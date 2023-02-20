﻿/*
 Highcharts JS v10.3.3 (2023-01-20)

 Marker clusters module for Highcharts

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function (n) { "object" === typeof module && module.exports ? (n["default"] = n, module.exports = n) : "function" === typeof define && define.amd ? define("highcharts/modules/marker-clusters", ["highcharts"], function (w) { n(w); n.Highcharts = w; return n }) : n("undefined" !== typeof Highcharts ? Highcharts : void 0) })(function (n) {
    function w(n, E, w, J) { n.hasOwnProperty(E) || (n[E] = J.apply(null, w), "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded", { detail: { path: E, module: n[E] } }))) } n = n ? n._modules :
        {}; w(n, "Extensions/MarkerClusters.js", [n["Core/Animation/AnimationUtilities.js"], n["Core/Chart/Chart.js"], n["Core/Defaults.js"], n["Core/Series/Point.js"], n["Core/Series/Series.js"], n["Core/Series/SeriesRegistry.js"], n["Core/Renderer/SVG/SVGRenderer.js"], n["Core/Utilities.js"], n["Core/Axis/Axis.js"]], function (n, w, ea, J, N, O, t, x, fa) {
            function E(a) { var b = a.length, c = 0, e = 0, d; for (d = 0; d < b; d++)c += a[d].x, e += a[d].y; return { x: c / b, y: e / b } } function T(a, b) {
                var c = []; c.length = b; a.clusters.forEach(function (a) {
                    a.data.forEach(function (a) {
                        c[a.dataIndex] =
                        a
                    })
                }); a.noise.forEach(function (a) { c[a.data[0].dataIndex] = a.data[0] }); return c
            } function U(a, b, c, e, d) { a.point && (e && a.point.graphic && (a.point.graphic.show(), a.point.graphic.attr({ opacity: b }).animate({ opacity: 1 }, c)), d && a.point.dataLabel && (a.point.dataLabel.show(), a.point.dataLabel.attr({ opacity: b }).animate({ opacity: 1 }, c))) } function V(a, b, c) { a.point && (b && a.point.graphic && a.point.graphic.hide(), c && a.point.dataLabel && a.point.dataLabel.hide()) } function ha(a) { a && W(a, function (a) { a.point && a.point.destroy && a.point.destroy() }) }
            function P(a, b, c, e) { U(a, e, c, !0, !0); b.forEach(function (a) { a.point && a.point.destroy && a.point.destroy() }) } var X = n.animObject; n = ea.defaultOptions; O = O.seriesTypes; var K = t.prototype.symbols, A = x.addEvent, B = x.defined, Y = x.error, Z = x.isArray, Q = x.isFunction, R = x.isObject, F = x.isNumber, S = x.merge, W = x.objectEach, aa = x.relativeLength, L = x.syncTimeout; ""; t = O.scatter; var ba = N.prototype.generatePoints, M = [], ca = 0, C = {
                enabled: !1, allowOverlap: !0, animation: { duration: 500 }, drillToCluster: !0, minimumClusterSize: 2, layoutAlgorithm: {
                    gridSize: 50,
                    distance: 40, kmeansThreshold: 100
                }, marker: { symbol: "cluster", radius: 15, lineWidth: 0, lineColor: "#ffffff" }, dataLabels: { enabled: !0, format: "{point.clusterPointsAmount}", verticalAlign: "middle", align: "center", style: { color: "contrast" }, inside: !0 }
            }; (n.plotOptions || {}).series = S((n.plotOptions || {}).series, { cluster: C, tooltip: { clusterFormat: "<span>Clustered points: {point.clusterPointsAmount}</span><br/>" } }); var I = function (a, b) {
                var c = a.chart, e = a.xAxis; a = a.yAxis; return c.mapView ? c.mapView.pixelsToProjectedUnits(b) :
                    { x: e ? e.toValue(b.x) : 0, y: a ? a.toValue(b.y) : 0 }
            }, H = function (a, b) { var c = a.chart, e = a.xAxis; a = a.yAxis; return c.mapView ? c.mapView.projectedUnitsToPixels(b) : { x: e ? e.toPixels(b.x) : 0, y: a ? a.toPixels(b.y) : 0 } }; K.cluster = function (a, b, c, e) { c /= 2; e /= 2; var d = K.arc(a + c, b + e, c - 4, e - 4, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }), h = K.arc(a + c, b + e, c - 3, e - 3, { start: .5 * Math.PI, end: 2.5 * Math.PI, innerR: c - 2, open: !1 }); return K.arc(a + c, b + e, c - 1, e - 1, { start: .5 * Math.PI, end: 2.5 * Math.PI, innerR: c, open: !1 }).concat(h, d) }; t.prototype.animateClusterPoint =
                function (a) {
                    var b = this.chart, c = b.mapView, e = X((this.options.cluster || {}).animation), d = e.duration || 500, h = (this.markerClusterInfo || {}).pointsState, k = (h || {}).newState, m = (h || {}).oldState, r = [], p = h = 0, q = 0, l = !1, y = !1; if (m && k) {
                        var g = k[a.stateId]; h = H(this, g); p = h.x - (c ? 0 : b.plotLeft); q = h.y - (c ? 0 : b.plotTop); if (1 === g.parentsId.length) {
                            a = (k || {})[a.stateId].parentsId[0]; var f = m[a]; g.point && g.point.graphic && f && f.point && f.point.plotX && f.point.plotY && f.point.plotX !== g.point.plotX && f.point.plotY !== g.point.plotY && (a = g.point.graphic.getBBox(),
                                h = g.point.graphic && g.point.graphic.isImg ? 0 : a.width / 2, g.point.graphic.attr({ x: f.point.plotX - h, y: f.point.plotY - h }), g.point.graphic.animate({ x: p - (g.point.graphic.radius || 0), y: q - (g.point.graphic.radius || 0) }, e, function () { y = !0; f.point && f.point.destroy && f.point.destroy() }), g.point.dataLabel && g.point.dataLabel.alignAttr && f.point.dataLabel && f.point.dataLabel.alignAttr && (g.point.dataLabel.attr({ x: f.point.dataLabel.alignAttr.x, y: f.point.dataLabel.alignAttr.y }), g.point.dataLabel.animate({
                                    x: g.point.dataLabel.alignAttr.x,
                                    y: g.point.dataLabel.alignAttr.y
                                }, e)))
                        } else 0 === g.parentsId.length ? (V(g, !0, !0), L(function () { U(g, .1, e, !0, !0) }, d / 2)) : (V(g, !0, !0), g.parentsId.forEach(function (a) {
                            m && m[a] && (f = m[a], r.push(f), f.point && f.point.graphic && (l = !0, f.point.graphic.show(), f.point.graphic.animate({ x: p - (f.point.graphic.radius || 0), y: q - (f.point.graphic.radius || 0), opacity: .4 }, e, function () { y = !0; P(g, r, e, .7) }), f.point.dataLabel && -9999 !== f.point.dataLabel.y && g.point && g.point.dataLabel && g.point.dataLabel.alignAttr && (f.point.dataLabel.show(),
                                f.point.dataLabel.animate({ x: g.point.dataLabel.alignAttr.x, y: g.point.dataLabel.alignAttr.y, opacity: .4 }, e))))
                        }), L(function () { y || P(g, r, e, .85) }, d), l || L(function () { P(g, r, e, .1) }, d / 2))
                    }
                }; t.prototype.getGridOffset = function () { var a = this.chart, b = this.xAxis, c = this.yAxis; b = b && this.dataMinX && this.dataMaxX ? b.reversed ? b.toPixels(this.dataMaxX) : b.toPixels(this.dataMinX) : a.plotLeft; a = c && this.dataMinY && this.dataMaxY ? c.reversed ? c.toPixels(this.dataMinY) : c.toPixels(this.dataMaxY) : a.plotTop; return { plotLeft: b, plotTop: a } };
            t.prototype.getScaledGridSize = function (a) { var b = this.xAxis, c = this.chart.mapView; a = a.processedGridSize || C.layoutAlgorithm.gridSize; var e = !0, d = 1, h = 1; this.gridValueSize || (this.gridValueSize = c ? a / c.getScale() : Math.abs(b.toValue(a) - b.toValue(0))); b = c ? this.gridValueSize * c.getScale() : b.toPixels(this.gridValueSize) - b.toPixels(0); for (b = +(a / b).toFixed(14); e && 1 !== b;)c = Math.pow(2, d), .75 < b && 1.25 > b ? e = !1 : b >= 1 / c && b < 1 / c * 2 ? (e = !1, h = c) : b <= c && b > c / 2 && (e = !1, h = 1 / c), d++; return a / h / b }; t.prototype.getRealExtremes = function () {
                var a =
                    this.chart, b = a.mapView ? 0 : a.plotLeft, c = I(this, { x: b, y: a.mapView ? 0 : a.plotTop }), e = I(this, { x: b + a.plotWidth, y: b + a.plotHeight }); a = c.x; b = e.x; c = c.y; e = e.y; return { minX: Math.min(a, b), maxX: Math.max(a, b), minY: Math.min(c, e), maxY: Math.max(c, e) }
            }; t.prototype.onDrillToCluster = function (a) {
                (a.point || a.target).firePointEvent("drillToCluster", a, function (a) {
                    var b = a.point || a.target, e = b.series.xAxis, d = b.series.yAxis, h = b.series.chart, k = h.mapView; if ((b.series.options.cluster || {}).drillToCluster && b.clusteredData) {
                        var m = b.clusteredData.map(function (a) { return a.x }).sort(function (a,
                            b) { return a - b }); b = b.clusteredData.map(function (a) { return a.y }).sort(function (a, b) { return a - b }); var r = m[0], p = m[m.length - 1]; m = b[0]; var q = b[b.length - 1], l = Math.abs(.1 * (p - r)), y = Math.abs(.1 * (q - m)); b = Math.min(r, p) - l; r = Math.max(r, p) + l; p = Math.min(m, q) - y; m = Math.max(m, q) + y; k ? k.fitToBounds({ x1: b, x2: r, y1: p, y2: m }) : e && d && (h.pointer.zoomX = !0, h.pointer.zoomY = !0, h.zoom({ originalEvent: a, xAxis: [{ axis: e, min: b, max: r }], yAxis: [{ axis: d, min: p, max: m }] }))
                    }
                })
            }; t.prototype.getClusterDistancesFromPoint = function (a, b, c) {
                for (var e =
                    [], d = 0; d < a.length; d++) { var h = H(this, { x: b, y: c }), k = H(this, { x: a[d].posX, y: a[d].posY }); e.push({ clusterIndex: d, distance: Math.sqrt(Math.pow(h.x - k.x, 2) + Math.pow(h.y - k.y, 2)) }) } return e.sort(function (a, b) { return a.distance - b.distance })
            }; t.prototype.getPointsState = function (a, b, c) {
                b = b ? T(b, c) : []; c = T(a, c); var e = {}, d; M = []; a.clusters.forEach(function (a) { e[a.stateId] = { x: a.x, y: a.y, id: a.stateId, point: a.point, parentsId: [] } }); a.noise.forEach(function (a) { e[a.stateId] = { x: a.x, y: a.y, id: a.stateId, point: a.point, parentsId: [] } });
                for (d = 0; d < c.length; d++) { a = c[d]; var h = b[d]; a && h && a.parentStateId && h.parentStateId && e[a.parentStateId] && -1 === e[a.parentStateId].parentsId.indexOf(h.parentStateId) && (e[a.parentStateId].parentsId.push(h.parentStateId), -1 === M.indexOf(h.parentStateId) && M.push(h.parentStateId)) } return e
            }; t.prototype.markerClusterAlgorithms = {
                grid: function (a, b, c, e) {
                    var d = {}, h = this.getGridOffset(), k = this.getScaledGridSize(e); for (e = 0; e < a.length; e++) {
                        var m = H(this, { x: a[e], y: b[e] }); var r = m.x - h.plotLeft; m = m.y - h.plotTop; r = Math.floor(r /
                            k); m = Math.floor(m / k); r = m + "-" + r; d[r] || (d[r] = []); d[r].push({ dataIndex: c[e], x: a[e], y: b[e] })
                    } return d
                }, kmeans: function (a, b, c, e) {
                    var d = [], h = [], k = {}, m = e.processedDistance || C.layoutAlgorithm.distance, r = e.iterations, p = 0, q = !0, l = 0, y = 0; var g = []; var f; e.processedGridSize = e.processedDistance; l = this.markerClusterAlgorithms ? this.markerClusterAlgorithms.grid.call(this, a, b, c, e) : {}; for (f in l) 1 < l[f].length && (g = E(l[f]), d.push({ posX: g.x, posY: g.y, oldX: 0, oldY: 0, startPointsLen: l[f].length, points: [] })); for (; q;) {
                        d.map(function (a) {
                            a.points.length =
                            0; return a
                        }); for (q = h.length = 0; q < a.length; q++)l = a[q], y = b[q], g = this.getClusterDistancesFromPoint(d, l, y), g.length && g[0].distance < m ? d[g[0].clusterIndex].points.push({ x: l, y: y, dataIndex: c[q] }) : h.push({ x: l, y: y, dataIndex: c[q] }); for (f = 0; f < d.length; f++)1 === d[f].points.length && (g = this.getClusterDistancesFromPoint(d, d[f].points[0].x, d[f].points[0].y), g[1].distance < m && (d[g[1].clusterIndex].points.push(d[f].points[0]), d[g[0].clusterIndex].points.length = 0)); q = !1; for (f = 0; f < d.length; f++)if (g = E(d[f].points), d[f].oldX =
                            d[f].posX, d[f].oldY = d[f].posY, d[f].posX = g.x, d[f].posY = g.y, d[f].posX > d[f].oldX + 1 || d[f].posX < d[f].oldX - 1 || d[f].posY > d[f].oldY + 1 || d[f].posY < d[f].oldY - 1) q = !0; r && (q = p < r - 1); p++
                    } d.forEach(function (a, b) { k["cluster" + b] = a.points }); h.forEach(function (a, b) { k["noise" + b] = [a] }); return k
                }, optimizedKmeans: function (a, b, c, e) {
                    var d = this, h = e.processedDistance || C.layoutAlgorithm.gridSize, k = {}, m = d.getRealExtremes(), r = (d.options.cluster || {}).marker, p, q, l; !d.markerClusterInfo || d.initMaxX && d.initMaxX < m.maxX || d.initMinX && d.initMinX >
                        m.minX || d.initMaxY && d.initMaxY < m.maxY || d.initMinY && d.initMinY > m.minY ? (d.initMaxX = m.maxX, d.initMinX = m.minX, d.initMaxY = m.maxY, d.initMinY = m.minY, k = d.markerClusterAlgorithms ? d.markerClusterAlgorithms.kmeans.call(d, a, b, c, e) : {}, d.baseClusters = null) : (d.baseClusters || (d.baseClusters = { clusters: d.markerClusterInfo.clusters, noise: d.markerClusterInfo.noise }), d.baseClusters.clusters.forEach(function (a) {
                            a.pointsOutside = []; a.pointsInside = []; a.data.forEach(function (b) {
                                var e = H(d, b), c = H(d, a); q = Math.sqrt(Math.pow(e.x -
                                    c.x, 2) + Math.pow(e.y - c.y, 2)); l = a.clusterZone && a.clusterZone.marker && a.clusterZone.marker.radius ? a.clusterZone.marker.radius : r && r.radius ? r.radius : C.marker.radius; p = 0 <= h - l ? h - l : l; q > l + p && B(a.pointsOutside) ? a.pointsOutside.push(b) : B(a.pointsInside) && a.pointsInside.push(b)
                            }); a.pointsInside.length && (k[a.id] = a.pointsInside); a.pointsOutside.forEach(function (b, e) { k[a.id + "_noise" + e] = [b] })
                        }), d.baseClusters.noise.forEach(function (a) { k[a.id] = a.data })); return k
                }
            }; t.prototype.preventClusterCollisions = function (a) {
                var b =
                    this, c = a.key.split("-").map(parseFloat), e = c[0], d = c[1], h = a.gridSize, k = a.groupedData, m = a.defaultRadius, r = a.clusterRadius, p = d * h, q = e * h; c = H(b, a); var l = c.x, y = c.y; c = []; var g = 0, f = 0, n = (b.options.cluster || {}).marker, u = (b.options.cluster || {}).zones, v = b.getGridOffset(), t, da, z, x, w, A, F; l -= v.plotLeft; y -= v.plotTop; for (z = 1; 5 > z; z++) { var G = z % 2 ? -1 : 1; var D = 3 > z ? -1 : 1; G = Math.floor((l + G * r) / h); D = Math.floor((y + D * r) / h); G = [D + "-" + G, D + "-" + d, e + "-" + G]; for (D = 0; D < G.length; D++)-1 === c.indexOf(G[D]) && G[D] !== a.key && c.push(G[D]) } c.forEach(function (a) {
                        if (k[a]) {
                            k[a].posX ||
                            (A = E(k[a]), k[a].posX = A.x, k[a].posY = A.y); var c = H(b, { x: k[a].posX || 0, y: k[a].posY || 0 }); t = c.x - v.plotLeft; da = c.y - v.plotTop; c = a.split("-").map(parseFloat); w = c[0]; x = c[1]; if (u) for (g = k[a].length, z = 0; z < u.length; z++)g >= u[z].from && g <= u[z].to && (f = B((u[z].marker || {}).radius) ? u[z].marker.radius || 0 : n && n.radius ? n.radius : C.marker.radius); 1 < k[a].length && 0 === f && n && n.radius ? f = n.radius : 1 === k[a].length && (f = m); F = r + f; f = 0; x !== d && Math.abs(l - t) < F && (l = 0 > x - d ? p + r : p + h - r); w !== e && Math.abs(y - da) < F && (y = 0 > w - e ? q + r : q + h - r)
                        }
                    }); c = I(b, {
                        x: l +
                            v.plotLeft, y: y + v.plotTop
                    }); k[a.key].posX = c.x; k[a.key].posY = c.y; return c
            }; t.prototype.isValidGroupedDataObject = function (a) { var b = !1, c; if (!R(a)) return !1; W(a, function (a) { b = !0; if (Z(a) && a.length) for (c = 0; c < a.length; c++) { if (!R(a[c]) || !a[c].x || !a[c].y) { b = !1; break } } else b = !1 }); return b }; t.prototype.getClusteredData = function (a, b) {
                var c = [], e = [], d = [], h = [], k = [], m = 0, r = Math.max(2, b.minimumClusterSize || 2), p, q; if (Q(b.layoutAlgorithm.type) && !this.isValidGroupedDataObject(a)) return Y("Highcharts marker-clusters module: The custom algorithm result is not valid!",
                    !1, this.chart), !1; for (q in a) if (a[q].length >= r) {
                        var l = a[q]; var n = Math.random().toString(36).substring(2, 7) + "-" + ca++; var g = l.length; if (b.zones) for (p = 0; p < b.zones.length; p++)if (g >= b.zones[p].from && g <= b.zones[p].to) { var f = b.zones[p]; f.zoneIndex = p; var t = b.zones[p].marker; var u = b.zones[p].className } var v = E(l); "grid" !== b.layoutAlgorithm.type || b.allowOverlap ? v = { x: v.x, y: v.y } : (p = this.options.marker || {}, v = this.preventClusterCollisions({
                            x: v.x, y: v.y, key: q, groupedData: a, gridSize: this.getScaledGridSize(b.layoutAlgorithm),
                            defaultRadius: p.radius || 3 + (p.lineWidth || 0), clusterRadius: t && t.radius ? t.radius : (b.marker || {}).radius || C.marker.radius
                        })); for (p = 0; p < g; p++)l[p].parentStateId = n; d.push({ x: v.x, y: v.y, id: q, stateId: n, index: m, data: l, clusterZone: f, clusterZoneClassName: u }); c.push(v.x); e.push(v.y); k.push({ options: { formatPrefix: "cluster", dataLabels: b.dataLabels, marker: S(b.marker, { states: b.states }, t || {}) } }); if (this.options.data && this.options.data.length) for (p = 0; p < g; p++)R(this.options.data[l[p].dataIndex]) && (l[p].options = this.options.data[l[p].dataIndex]);
                        m++; t = null
                    } else for (p = 0; p < a[q].length; p++)l = a[q][p], n = Math.random().toString(36).substring(2, 7) + "-" + ca++, g = ((this.options || {}).data || [])[l.dataIndex], c.push(l.x), e.push(l.y), l.parentStateId = n, h.push({ x: l.x, y: l.y, id: q, stateId: n, index: m, data: a[q] }), n = g && "object" === typeof g && !Z(g) ? S(g, { x: l.x, y: l.y }) : { userOptions: g, x: l.x, y: l.y }, k.push({ options: n }), m++; return { clusters: d, noise: h, groupedXData: c, groupedYData: e, groupMap: k }
            }; t.prototype.destroyClusteredData = function () {
                (this.markerClusterSeriesData || []).forEach(function (a) {
                    a &&
                    a.destroy && a.destroy()
                }); this.markerClusterSeriesData = null
            }; t.prototype.hideClusteredData = function () { var a = this.markerClusterSeriesData, b = ((this.markerClusterInfo || {}).pointsState || {}).oldState || {}, c = M.map(function (a) { return (b[a].point || {}).id || "" }); (a || []).forEach(function (a) { a && -1 !== c.indexOf(a.id) ? (a.graphic && a.graphic.hide(), a.dataLabel && a.dataLabel.hide()) : a && a.destroy && a.destroy() }) }; t.prototype.generatePoints = function () {
                var a = this, b = a.chart, c = b.mapView, e = a.xData, d = a.yData, h = a.options.cluster,
                k = a.getRealExtremes(), m = [], n = [], p = [], q, l, t; c && a.is("mappoint") && e && d && (a.options.data || []).forEach(function (b, c) { if (b = a.projectPoint(b)) e[c] = b.x, d[c] = b.y }); if (h && h.enabled && e && e.length && d && d.length && !b.polar) {
                    var g = h.layoutAlgorithm.type; c = h.layoutAlgorithm; c.processedGridSize = aa(c.gridSize || C.layoutAlgorithm.gridSize, b.plotWidth); c.processedDistance = aa(c.distance || C.layoutAlgorithm.distance, b.plotWidth); b = c.kmeansThreshold || C.layoutAlgorithm.kmeansThreshold; var f = c.processedGridSize / 2; var x = I(a,
                        { x: 0, y: 0 }); var u = I(a, { x: f, y: f }); f = Math.abs(x.x - u.x); x = Math.abs(x.y - u.y); for (u = 0; u < e.length; u++) { if (!a.dataMaxX) if (B(v) && B(q) && B(w) && B(l)) F(d[u]) && F(w) && F(l) && (v = Math.max(e[u], v), q = Math.min(e[u], q), w = Math.max(d[u] || w, w), l = Math.min(d[u] || l, l)); else { var v = q = e[u]; var w = l = d[u] } e[u] >= k.minX - f && e[u] <= k.maxX + f && (d[u] || k.minY) >= k.minY - x && (d[u] || k.maxY) <= k.maxY + x && (m.push(e[u]), n.push(d[u]), p.push(u)) } B(v) && B(q) && F(w) && F(l) && (a.dataMaxX = v, a.dataMinX = q, a.dataMaxY = w, a.dataMinY = l); k = Q(g) ? g : a.markerClusterAlgorithms ?
                            g && a.markerClusterAlgorithms[g] ? a.markerClusterAlgorithms[g] : m.length < b ? a.markerClusterAlgorithms.kmeans : a.markerClusterAlgorithms.grid : function () { return !1 }; k = (m = k.call(this, m, n, p, c)) ? a.getClusteredData(m, h) : m; h.animation && a.markerClusterInfo && a.markerClusterInfo.pointsState && a.markerClusterInfo.pointsState.oldState ? (ha(a.markerClusterInfo.pointsState.oldState), m = a.markerClusterInfo.pointsState.newState) : m = {}; n = e.length; p = a.markerClusterInfo; k && (a.processedXData = k.groupedXData, a.processedYData = k.groupedYData,
                                a.hasGroupedData = !0, a.markerClusterInfo = k, a.groupMap = k.groupMap); ba.apply(this); k && a.markerClusterInfo && ((a.markerClusterInfo.clusters || []).forEach(function (b) { t = a.points[b.index]; t.isCluster = !0; t.clusteredData = b.data; t.clusterPointsAmount = b.data.length; b.point = t; A(t, "click", a.onDrillToCluster) }), (a.markerClusterInfo.noise || []).forEach(function (b) { b.point = a.points[b.index] }), h.animation && a.markerClusterInfo && (a.markerClusterInfo.pointsState = { oldState: m, newState: a.getPointsState(k, p, n) }), h.animation ?
                                    this.hideClusteredData() : this.destroyClusteredData(), this.markerClusterSeriesData = this.hasGroupedData ? this.points : null)
                } else ba.apply(this)
            }; A(w, "render", function () {
                (this.series || []).forEach(function (a) {
                    if (a.markerClusterInfo) {
                        var b = ((a.markerClusterInfo || {}).pointsState || {}).oldState; (a.options.cluster || {}).animation && a.markerClusterInfo && 0 === a.chart.pointer.pinchDown.length && "pan" !== ((a.xAxis || {}).eventArgs || {}).trigger && b && Object.keys(b).length && (a.markerClusterInfo.clusters.forEach(function (b) { a.animateClusterPoint(b) }),
                            a.markerClusterInfo.noise.forEach(function (b) { a.animateClusterPoint(b) }))
                    }
                })
            }); A(J, "update", function () { if (this.dataGroup) return Y("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.", !1, this.series.chart), !1 }); A(N, "destroy", t.prototype.destroyClusteredData); A(N, "afterRender", function () {
                var a = (this.options.cluster || {}).drillToCluster; this.markerClusterInfo && this.markerClusterInfo.clusters && this.markerClusterInfo.clusters.forEach(function (b) {
                    b.point &&
                    b.point.graphic && (b.point.graphic.addClass("highcharts-cluster-point"), a && b.point && (b.point.graphic.css({ cursor: "pointer" }), b.point.dataLabel && b.point.dataLabel.css({ cursor: "pointer" })), B(b.clusterZone) && b.point.graphic.addClass(b.clusterZoneClassName || "highcharts-cluster-zone-" + b.clusterZone.zoneIndex))
                })
            }); A(J, "drillToCluster", function (a) { var b = (((a.point || a.target).series.options.cluster || {}).events || {}).drillToCluster; Q(b) && b.call(this, a) }); A(fa, "setExtremes", function () {
                var a = this.chart, b = 0, c;
                a.series.forEach(function (a) { a.markerClusterInfo && (c = X((a.options.cluster || {}).animation), b = c.duration || 0) }); L(function () { a.tooltip && a.tooltip.destroy() }, b)
            })
        }); w(n, "masters/modules/marker-clusters.src.js", [], function () { })
});
//# sourceMappingURL=marker-clusters.js.map