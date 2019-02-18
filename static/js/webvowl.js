webvowl = function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    function r(e, t) {
        var n = t.key.replace(":", "").toLowerCase();
        e[n] = t.value
    }
    n(1);
    var o = n(5)(),
        a = n(40)(),
        i = {};
    i.graph = n(57), i.options = n(64), i.version = "1.1.3", i.util = {}, i.util.constants = n(12), i.util.languageTools = n(11), i.util.elementTools = n(63), i.util.prefixTools = n(72), i.modules = {}, i.modules.colorExternalsSwitch = n(73), i.modules.compactNotationSwitch = n(74), i.modules.datatypeFilter = n(75), i.modules.disjointFilter = n(77), i.modules.focuser = n(78), i.modules.emptyLiteralFilter = n(79), i.modules.nodeDegreeFilter = n(80), i.modules.nodeScalingSwitch = n(81), i.modules.objectPropertyFilter = n(82), i.modules.pickAndPin = n(83), i.modules.selectionDetailsDisplayer = n(315), i.modules.setOperatorFilter = n(316), i.modules.statistics = n(317), i.modules.subclassFilter = n(318), i.nodes = {}, o.entries().forEach(function(e) {
        r(i.nodes, e)
    }), i.properties = {}, a.entries().forEach(function(e) {
        r(i.properties, e)
    }), e.exports = i
}, function(e, t) {}, , , , function(e, t, n) {
    (function(t) {
        var r = [];
        r.push(n(7)), r.push(n(18)), r.push(n(19)), r.push(n(26)), r.push(n(27)), r.push(n(28)), r.push(n(29)), r.push(n(30)), r.push(n(31)), r.push(n(32)), r.push(n(33)), r.push(n(34)), r.push(n(38)), r.push(n(39));
        var o = t.map(r, function(e) {
            return (new e).type()
        });
        e.exports = function() {
            return o
        }
    }).call(t, n(6))
}, function(e, t) {
    e.exports = d3
}, function(e, t, n) {
    var r = n(8);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["external"]).type("ExternalClass")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(9),
        o = n(14),
        a = n(17)();
    e.exports = function() {
        var e = function(e) {
            function t() {
                var t = u.backgroundColor();
                u.attributes().indexOf("deprecated") > -1 && (t = void 0);
                var n = new o(u.nodeElement(), t),
                    r = u.equivalentsString(),
                    a = r ? "," : "";
                return n.addText(u.labelForCurrentLanguage(), "", a), n.addEquivalents(r), e.options().compactNotation() || n.addSubText(u.indicationString()), n.addInstanceCount(u.individuals().length), n
            }
            r.apply(this, arguments);
            var n, i, s, l, u = this,
                c = !1,
                d = 50,
                p = null,
                f = !1;
            this.setRectangularRepresentation = function(e) {
                f = e
            }, this.getRectangularRepresentation = function() {
                return f
            }, this.getHalos = function() {
                return p
            }, this.collapsible = function(e) {
                return arguments.length ? (c = e, this) : c
            }, this.textBlock = function(e) {
                return arguments.length ? (l = e, this) : l
            }, this.radius = function(e) {
                return arguments.length ? (d = e, this) : d
            }, this.setHoverHighlighting = function(e) {
                u.nodeElement().selectAll("circle").classed("hovered", e)
            }, this.textWidth = function(e) {
                var t = 2 * this.actualRadius();
                if (e) {
                    var n = Math.abs(e) / this.actualRadius(),
                        r = n <= 1;
                    t = r ? Math.cos(n) * t : 0
                }
                return t
            }, this.toggleFocus = function() {
                u.focused(!u.focused()), u.nodeElement() && u.nodeElement().select("circle").classed("focused", u.focused()), e.resetSearchHighlight(), e.options().searchMenu().clearText()
            }, this.actualRadius = function() {
                if (!e.options().scaleNodesByIndividuals() || u.individuals().length <= 0) return u.radius();
                var t = 8,
                    n = Math.log(u.individuals().length + 1) * t + 5;
                return u.radius() + n
            }, this.distanceToBorder = function() {
                return u.actualRadius()
            }, this.removeHalo = function() {
                u.halo() && (u.halo(!1), p && p.remove())
            }, this.drawHalo = function(e) {
                if (u.halo(!0), p = f === !0 ? a.drawRectHalo(u.nodeElement(), 80, 80, 5) : a.drawHalo(u.nodeElement(), u.actualRadius(), this.removeHalo), e === !1) {
                    var t = p.selectAll(".searchResultA");
                    t.classed("searchResultA", !1), t.classed("searchResultB", !0), t.attr("animationRunning", !1)
                }
            }, this.drawPin = function() {
                u.pinned(!0);
                var t = -.7 * u.actualRadius(),
                    n = -.7 * u.actualRadius();
                i = a.drawPin(u.nodeElement(), t, n, this.removePin, e.options().showDraggerObject, e.options().useAccuracyHelper())
            }, this.removePin = function() {
                u.pinned(!1), i && i.remove(), e.updateStyle()
            }, this.drawCollapsingButton = function() {
                n = u.nodeElement().append("g").classed("hidden-in-export", !0).attr("transform", function() {
                    var e = -.4 * u.actualRadius(),
                        t = .5 * u.actualRadius();
                    return "translate(" + e + "," + t + ")"
                }), n.append("rect").classed("class pin feature", !0).attr("x", 0).attr("y", 0).attr("width", 40).attr("height", 24), n.append("line").attr("x1", 13).attr("y1", 12).attr("x2", 27).attr("y2", 12), n.append("line").attr("x1", 20).attr("y1", 6).attr("x2", 20).attr("y2", 18)
            }, this.draw = function(e, t) {
                var n = u.collectCssClasses();
                u.nodeElement(e);
                var r = u.backgroundColor();
                null === r && (r = void 0), u.attributes().indexOf("deprecated") > -1 && (r = void 0), t instanceof Array && (n = n.concat(t)), s = f === !0 ? a.appendRectangularClass(e, 80, 80, n, u.labelForCurrentLanguage(), r) : a.appendCircularClass(e, u.actualRadius(), n, u.labelForCurrentLanguage(), r), u.postDrawActions(e)
            }, this.redrawElement = function() {
                s.remove(), l.remove();
                var e = u.backgroundColor();
                u.attributes().indexOf("deprecated") > -1 && (e = void 0);
                var t = u.collectCssClasses();
                s = f === !0 ? a.appendRectangularClass(u.nodeElement(), 80, 80, t, u.labelForCurrentLanguage(), e) : a.appendCircularClass(u.nodeElement(), u.actualRadius(), t, u.labelForCurrentLanguage(), e), u.postDrawActions(u.nodeElement())
            }, this.postDrawActions = function() {
                u.textBlock(t()), u.addMouseListeners(), u.pinned() && u.drawPin(), u.halo() && u.drawHalo(!1), u.collapsible() && u.drawCollapsingButton()
            }, this.redrawLabelText = function() {
                u.textBlock().remove(), u.textBlock(t()), s.select("title").text(u.labelForCurrentLanguage())
            }, this.equivalentsString = function() {
                var e = u.equivalents();
                if (e) return e.map(function(e) {
                    return e.labelForCurrentLanguage()
                }).join(", ")
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    (function(t) {
        var r = n(10),
            o = n(13)();
        e.exports = function() {
            var e = function(e) {
                function n() {
                    if (!g.mouseEntered() && b !== !0) {
                        var t = g.nodeElement().node(),
                            n = t.parentNode;
                        g.animationProcess() === !1 && n.appendChild(t), e.isTouchDevice() === !1 ? (g.setHoverHighlighting(!0), g.mouseEntered(!0), e.editorMode() === !0 && e.ignoreOtherHoverEvents() === !1 && e.activateHoverElements(!0, g)) : e.editorMode() === !0 && e.ignoreOtherHoverEvents() === !1 && e.activateHoverElements(!0, g, !0)
                    }
                }

                function a() {
                    g.setHoverHighlighting(!1), g.mouseEntered(!1), e.editorMode() === !0 && e.ignoreOtherHoverEvents() === !1 && e.activateHoverElements(!1)
                }
                r.apply(this, arguments);
                var i, s, l, u, c, d, p, f, h, v, g = this,
                    y = [],
                    m = "round",
                    b = !1,
                    x = [];
                g.editingTextElement = !1, this.isPropertyAssignedToThisElement = function(e) {
                    if (console.log("Element IRI :" + e.iri()), "rdfs:subClassOf" === e.type())
                        for (var t = 0; t < x.length; t++) {
                            var n = x[t].iri();
                            if (e.iri() === n) return !0;
                            if ("rdfs:subClassOf" === e.type() && "rdfs:subClassOf" === x[t].type()) return !0;
                            if ("owl:disjointWith" === e.type() && "owl:disjointWith" === x[t].type()) return !0
                        }
                    return !1
                }, this.existingPropertyIRI = function(e) {
                    for (var t = 0; t < x.length; t++) {
                        var n = x[t].iri();
                        if (n === e) return !0
                    }
                    return !1
                }, this.addProperty = function(e) {
                    x.indexOf(e) === -1 && x.push(e)
                }, this.removePropertyElement = function(e) {
                    x.indexOf(e) !== -1 && x.splice(x.indexOf(e), 1)
                }, this.getMyProperties = function() {
                    return x
                }, this.copyOtherProperties = function(e) {
                    x = e
                }, this.copyInformation = function(e) {
                    console.log(e.labelForCurrentLanguage()), "owl:Thing" !== e.type() && g.label(e.label()), g.complement(e.complement()), g.iri(e.iri()), g.copyOtherProperties(e.getMyProperties()), g.baseIri(e.baseIri()), "owl:Class" === e.type() && g.backupLabel(e.label()), void 0 !== e.backupLabel() && g.backupLabel(e.backupLabel())
                }, this.enableEditing = function(e) {
                    e !== !1 && g.raiseDoubleClickEdit(!0)
                }, this.raiseDoubleClickEdit = function(n) {
                    if (t.selectAll(".foreignelements").remove(), void 0 === v || "owl:Thing" === this.type() || "rdfs:Literal" === this.type()) return void console.log("No Container found");
                    void 0 !== f && v.selectAll(".foreignelements").remove(), h = void 0, e.options().focuserModule().handle(void 0), e.options().focuserModule().handle(g), e.isTouchDevice() === !0 && e.activateHoverElements(!0, g, !0), g.editingTextElement = !0, b = !0, g.nodeElement().selectAll("circle").classed("hoveredForEditing", !0), e.killDelayedTimer(), e.ignoreOtherHoverEvents(!1), f = v.append("foreignObject").attr("x", -.5 * (g.textWidth() - 2)).attr("y", -12).attr("height", 30).attr("class", "foreignelements").on("dragstart", function() {
                        return !1
                    }).attr("width", g.textWidth() - 2);
                    var r = f.append("xhtml:input").attr("class", "nodeEditSpan").attr("id", g.id()).attr("align", "center").attr("contentEditable", "true").on("dragstart", function() {
                            return !1
                        }),
                        o = "#f00",
                        a = g.textWidth() - 2;
                    r.style({
                        align: "center",
                        color: "black",
                        width: a + "px",
                        height: "15px",
                        "background-color": o,
                        "border-bottom": "2px solid black"
                    });
                    var i = r.node();
                    i.value = g.labelForCurrentLanguage(), i.focus(), i.select(), g.frozen(!0), g.locked(!0), t.event.stopPropagation(), r.on("click", function() {
                        t.event.stopPropagation()
                    }), r.on("mouseout", function() {
                        t.event.stopPropagation()
                    }), r.on("mousedown", function() {
                        t.event.stopPropagation()
                    }).on("keydown", function() {
                        t.event.stopPropagation(), 13 === t.event.keyCode && (this.blur(), g.frozen(!1), g.locked(!1))
                    }).on("keyup", function() {
                        if (n) {
                            var o = r.node().value,
                                a = o.replaceAll(" ", "_"),
                                i = g.baseIri() + a;
                            h = i, t.select("#element_iriEditor").node().title = i, t.select("#element_iriEditor").node().value = e.options().prefixModule().getPrefixRepresentationForFullURI(i)
                        }
                        t.select("#element_labelEditor").node().value = r.node().value
                    }).on("blur", function() {
                        g.editingTextElement = !1, b = !1, g.nodeElement().selectAll("circle").classed("hoveredForEditing", !1);
                        var t = r.node().value;
                        if (v.selectAll(".foreignelements").remove(), g.label(t), g.backupLabel(t), g.redrawLabelText(), g.frozen(e.paused()), g.locked(e.paused()), e.ignoreOtherHoverEvents(!1), h) {
                            var n = e.checkIfIriClassAlreadyExist(h);
                            n === !1 ? g.iri(h) : e.options().warningModule().showWarning("Already seen this class", "Input IRI: " + h + " for element: " + g.labelForCurrentLanguage() + " already been set", "Restoring previous IRI for Element : " + g.iri(), 2, !1, n)
                        }
                        e.isADraggerActive() === !1 && (e.options().focuserModule().handle(void 0), e.options().focuserModule().handle(g))
                    })
                }, this.renderType = function(e) {
                    return arguments.length ? (m = e, this) : m
                }, this.complement = function(e) {
                    return arguments.length ? (i = e, this) : i
                }, this.disjointUnion = function(e) {
                    return arguments.length ? (s = e, this) : s
                }, this.disjointWith = function(e) {
                    return arguments.length ? (l = e, this) : l
                }, this.individuals = function(e) {
                    return arguments.length ? (y = e || [], this) : y
                }, this.intersection = function(e) {
                    return arguments.length ? (u = e, this) : u
                }, this.links = function(e) {
                    return arguments.length ? (d = e, this) : d
                }, this.maxIndividualCount = function(e) {
                    return arguments.length ? (p = e, this) : p
                }, this.nodeElement = function(e) {
                    return arguments.length ? (v = e, this) : v
                }, this.union = function(e) {
                    return arguments.length ? (c = e, this) : c
                }, g.collectCssClasses = function() {
                    var e = [];
                    return "string" == typeof g.styleClass() && e.push(g.styleClass()), e = e.concat(g.visualAttributes())
                }, this.addMouseListeners = function() {
                    return g.nodeElement() ? void g.nodeElement().selectAll("*").on("mouseover", n).on("mouseout", a) : void console.warn(this)
                }, this.animationProcess = function() {
                    var e = !1;
                    if (g.getHalos()) {
                        var t = g.getHalos(),
                            n = t.selectAll(".searchResultA");
                        e = t.attr("animationRunning"), "boolean" != typeof e && (e = "true" === e), e === !1 && (n.classed("searchResultA", !1), n.classed("searchResultB", !0))
                    }
                    return e
                }, this.foreground = function() {
                    var e = g.nodeElement().node(),
                        t = e.parentNode;
                    g.animationProcess() === !1 && t.appendChild(e)
                }, o.addTo(this)
            };
            return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
        }()
    }).call(t, n(6))
}, function(e, t, n) {
    e.exports = function() {
        var e = function(e) {
            var t, r, o, a, i, s, l, u, c, d, p, f, h = [],
                v = [],
                g = [],
                y = !1,
                m = [],
                b = !1,
                x = !0,
                E = n(11)();
            this.backupLabel = function(e) {
                return arguments.length ? void(f = e) : f
            }, this.attributes = function(e) {
                return arguments.length ? (v = e, this) : v
            }, this.annotations = function(e) {
                return arguments.length ? (s = e, this) : s
            }, this.redrawElement = function() {}, this.backgroundColor = function(e) {
                return arguments.length ? (l = e, this) : l
            }, this.baseIri = function(e) {
                return arguments.length ? (i = e, this) : i
            }, this.comment = function(e) {
                return arguments.length ? (u = e, this) : u
            }, this.description = function(e) {
                return arguments.length ? (c = e, this) : c
            }, this.equivalents = function(e) {
                return arguments.length ? (h = e || [], this) : h
            }, this.equivalentBase = function(e) {
                return arguments.length ? (d = e, this) : d
            }, this.focused = function(e) {
                return arguments.length ? (y = e, this) : y
            }, this.id = function(e) {
                return arguments.length ? (t = e, this) : t
            }, this.indications = function(e) {
                return arguments.length ? (m = e, this) : m
            }, this.iri = function(e) {
                return arguments.length ? (a = e, this) : a
            }, this.label = function(e) {
                return arguments.length ? (r = e, this) : r
            }, this.mouseEntered = function(e) {
                return arguments.length ? (b = e, this) : b
            }, this.styleClass = function(e) {
                return arguments.length ? (p = e, this) : p
            }, this.type = function(e) {
                return arguments.length ? (o = e, this) : o
            }, this.visible = function(e) {
                return arguments.length ? (x = e, this) : x
            }, this.visualAttributes = function(e) {
                return arguments.length ? (g = e, this) : g
            }, this.commentForCurrentLanguage = function() {
                return E.textInLanguage(this.comment(), e.language())
            }, this.cssClassOfNode = function() {
                return "node" + this.id()
            }, this.descriptionForCurrentLanguage = function() {
                return E.textInLanguage(this.description(), e.language())
            }, this.defaultLabel = function() {
                return E.textInLanguage(this.label(), "default")
            }, this.indicationString = function() {
                return this.indications().join(", ")
            }, this.labelForCurrentLanguage = function() {
                var t = e && e.language ? e.language() : null;
                return E.textInLanguage(this.label(), t)
            }
        };
        return e.prototype.constructor = e, e.prototype.equals = function(t) {
            return t instanceof e && this.id() === t.id()
        }, e.prototype.toString = function() {
            return this.labelForCurrentLanguage() + " (" + this.type() + ")"
        }, e
    }()
}, function(e, t, n) {
    var r = n(12)();
    e.exports = function() {
        function e(e, t) {
            for (var n in e)
                if (n === t && e.hasOwnProperty(n)) return e[n]
        }
        var t = {};
        return t.textInLanguage = function(t, n) {
                if ("undefined" != typeof t) {
                    if ("string" == typeof t) return t;
                    if (n && t.hasOwnProperty(n)) return t[n];
                    var o = e(t, "en");
                    return o ? o : (o = e(t, r.LANG_UNDEFINED), o ? o : t[r.LANG_IRIBASED])
                }
            },
            function() {
                return t
            }
    }()
}, function(e, t) {
    e.exports = function() {
        var e = {};
        return e.LANG_IRIBASED = "IRI-based", e.LANG_UNDEFINED = "undefined",
            function() {
                return e
            }
    }()
}, function(e, t) {
    function n(e) {
        function t() {
            e.locked() || e.frozen() || e.pinned() ? e.fixed = !0 : e.fixed = !1
        }
        var n = !1,
            r = !1,
            o = !1,
            a = !1;
        e.locked = function(r) {
            return arguments.length ? (n = r, t(), e) : n
        }, e.frozen = function(n) {
            return arguments.length ? (r = n, t(), e) : r
        }, e.halo = function(n) {
            return arguments.length ? (o = n, t(), e) : o
        }, e.pinned = function(n) {
            return arguments.length ? (a = n, t(), e) : a
        }
    }
    var r = {};
    e.exports = function() {
        return r
    }, r.addTo = function(e) {
        n(e)
    }
}, function(e, t, n) {
    function r(e, t) {
        a.apply(this, arguments), this.storedFullTextLines = [], this.storedSpanArrays = [], this.storedStyle = []
    }
    var o = n(15)(),
        a = n(16);
    e.exports = r, r.prototype = Object.create(a.prototype), r.prototype.constructor = r, r.prototype.addText = function(e, t, n) {
        e && this.addTextline(e, this.CSS_CLASSES.default, t, n)
    }, r.prototype.addSubText = function(e) {
        e && this.addTextline(e, this.CSS_CLASSES.subtext, "(", ")")
    }, r.prototype.addEquivalents = function(e) {
        e && this.addTextline(e, this.CSS_CLASSES.default)
    }, r.prototype.addInstanceCount = function(e) {
        e && this.addTextline(e.toString(), this.CSS_CLASSES.instanceCount)
    }, r.prototype.saveCorrespondingSpan = function(e) {
        this.storedSpanArrays.push(e)
    }, r.prototype.saveFullTextLine = function(e) {
        this.storedFullTextLines.push(e)
    }, r.prototype.saveStyle = function(e) {
        this.storedStyle.push(e)
    }, r.prototype.updateAllTextElements = function() {
        for (var e = 0; e < this.storedSpanArrays.length; e++) {
            var t = o.truncate(this.storedFullTextLines[e], this._textBlock().datum().textWidth(), this.storedStyle[e]);
            this.storedSpanArrays[e].text(t)
        }
    }, r.prototype.addTextline = function(e, t, n, r) {
        var a = o.truncate(e, this._textBlock().datum().textWidth(), t);
        this.saveFullTextLine(e), this.saveStyle(t);
        var i = this._textBlock().append("tspan").classed(this.CSS_CLASSES.default, !0).classed(t, !0).text(this._applyPreAndPostFix(a, n, r)).attr("x", 0);
        this._repositionTextLine(i), this.saveCorrespondingSpan(i), this._repositionTextBlock()
    }, r.prototype._repositionTextLine = function(e) {
        var t = window.getComputedStyle(e.node()).getPropertyValue("font-size"),
            n = parseFloat(t),
            r = this._lineCount() - 1,
            o = r > 0 ? this.LINE_DISTANCE : 0;
        e.attr("dy", n + o + "px")
    }, r.prototype.getTextBox = function() {
        return this._textBlock()
    }, r.prototype._repositionTextBlock = function() {
        var e = this._lineCount();
        if (e < 1) return void this._textBlock().attr("y", 0);
        var t = this._textBlock().node().getBBox().height;
        this._textBlock().attr("y", .5 * -t + "px")
    }, r.prototype._lineCount = function() {
        return this._textBlock().property("childElementCount")
    }
}, function(e, t, n) {
    (function(t) {
        function n(e, n) {
            n || (n = "text");
            var r = t.select("body").append("div").attr("class", n).attr("id", "width-test").attr("style", "position:absolute; float:left; white-space:nowrap; visibility:hidden;").text(e),
                o = document.getElementById("width-test").offsetWidth;
            return r.remove(), o
        }
        var r = 4,
            o = {};
        o.truncate = function(e, t, o, a) {
            if (t -= isNaN(a) ? r : a, isNaN(t) || t <= 0) return e;
            for (var i, s, l, u = e;;) {
                if (s = n(u, o), s <= t) break;
                if (l = s / t, i = Math.floor(u.length / l), u.length === i) break;
                u = u.substring(0, i)
            }
            return e.length > u.length ? e.substring(0, u.length - 3) + "..." : e
        }, e.exports = function() {
            return o
        }
    }).call(t, n(6))
}, function(e, t, n) {
    (function(t) {
        function n(e, t) {
            var n = e.append("text").classed("text", !0).style("fill", this._getTextColor(t)).attr("text-anchor", "middle");
            this._textBlock = function() {
                return n
            }
        }

        function r(e) {
            return .3 * (e.r / 255) + .59 * (e.g / 255) + .11 * (e.b / 255)
        }
        e.exports = n, n.prototype.LINE_DISTANCE = 1, n.prototype.CSS_CLASSES = {
            default: "text",
            subtext: "subtext",
            instanceCount: "instance-count"
        }, n.prototype.DARK_TEXT_COLOR = "#000", n.prototype.LIGHT_TEXT_COLOR = "#fff", n.prototype.translation = function(e, t) {
            return this._textBlock().attr("transform", "translate(" + e + ", " + t + ")"), this
        }, n.prototype.remove = function() {
            return this._textBlock().remove(), this
        }, n.prototype._applyPreAndPostFix = function(e, t, n) {
            return t && (e = t + e), n && (e += n), e
        }, n.prototype._getTextColor = function(e) {
            if (!e) return n.prototype.DARK_TEXT_COLOR;
            var o = t.rgb(e);
            return r(o) > .5 ? n.prototype.DARK_TEXT_COLOR : n.prototype.LIGHT_TEXT_COLOR
        }
    }).call(t, n(6))
}, function(e, t, n) {
    (function(t) {
        e.exports = function() {
            function e(e, t) {
                t instanceof Array && t.forEach(function(t) {
                    e.classed(t, !0)
                })
            }

            function n(e, t) {
                t && e.append("title").text(t)
            }

            function r(e, t) {
                t && e.style("fill", t)
            }
            var o = {};
            return o.appendCircularClass = function(t, o, a, i, s) {
                    var l = t.append("circle").classed("class", !0).attr("r", o);
                    return e(l, a), n(l, i), r(l, s), l
                }, o.appendRectangularClass = function(t, o, a, i, s, l) {
                    var u = t.append("rect").classed("class", !0).attr("x", -o / 2).attr("y", -a / 2).attr("width", o).attr("height", a);
                    return e(u, i), n(u, s), r(u, l), u
                }, o.drawPin = function(e, n, r, o, a, i) {
                    var s = e.append("g").classed("hidden-in-export", !0).attr("transform", "translate(" + n + "," + r + ")"),
                        l = s.append("circle").classed("class pin feature", !0).attr("r", 12).on("click", function() {
                            o && o(), t.event.stopPropagation()
                        });
                    return s.append("line").attr("x1", 0).attr("x2", 0).attr("y1", 12).attr("y2", 16), i === !0 && s.append("circle").attr("r", 15).attr("cx", -7).attr("cy", -7).classed("superHiddenElement ", !0).classed("superOpacityElement", !a()).on("click", function() {
                        o && o(), t.event.stopPropagation()
                    }).on("mouseover", function() {
                        l.classed("feature_hover", !0)
                    }).on("mouseout", function() {
                        l.classed("feature_hover", !1)
                    }), s
                }, o.drawRectHalo = function(e, t, n, r) {
                    var o;
                    if (o = e.nodeElement ? e.nodeElement() : e.labelElement()) {
                        var a = o.append("g").classed("hidden-in-export", !0);
                        return a.append("rect").classed("searchResultA", !0).attr("x", (-t - r) / 2).attr("y", (-r - n) / 2).attr("width", t + r).attr("height", n + r), a.attr("animationRunning", !0), a.node().addEventListener("webkitAnimationEnd", function() {
                            var e = a.selectAll(".searchResultA");
                            e.classed("searchResultA", !1).classed("searchResultB", !0), a.attr("animationRunning", !1)
                        }), a.node().addEventListener("animationend", function() {
                            var e = a.selectAll(".searchResultA");
                            e.classed("searchResultA", !1).classed("searchResultB", !0), a.attr("animationRunning", !1)
                        }), a
                    }
                }, o.drawHalo = function(e, t) {
                    if (void 0 === e) return null;
                    var n = e.append("g").classed("hidden-in-export", !0);
                    return n.append("circle", ":first-child").classed("searchResultA", !0).attr("r", t + 15), n.attr("animationRunning", !0), n.node().addEventListener("webkitAnimationEnd", function() {
                        var e = n.selectAll(".searchResultA");
                        e.classed("searchResultA", !1).classed("searchResultB", !0).attr("animationRunning", !1), n.attr("animationRunning", !1)
                    }), n.node().addEventListener("animationend", function() {
                        var e = n.selectAll(".searchResultA");
                        e.classed("searchResultA", !1).classed("searchResultB", !0).attr("animationRunning", !1), n.attr("animationRunning", !1)
                    }), n
                },
                function() {
                    return o
                }
        }()
    }).call(t, n(6))
}, function(e, t, n) {
    var r = n(8);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.type("owl:Class")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(20);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this,
                n = t.draw;
            this.styleClass("complementof").type("owl:complementOf"), this.draw = function(e) {
                n(e);
                var r = e.append("g").classed("embedded", !0);
                r.append("circle").attr("class", "symbol").classed("fineline", !0).attr("r", 10), r.append("path").attr("class", "nofill").attr("d", "m -7,-1.5 12,0 0,6").attr("transform", "scale(.5)"), r.attr("transform", "translate(-" + (t.radius() - 15) / 100 + ",-" + (t.radius() - 15) / 100 + ")"), t.postDrawActions()
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(21),
        o = n(22),
        a = n(8),
        i = n(17)();
    e.exports = function() {
        var e = function(e) {
            a.apply(this, arguments);
            var t = this,
                n = t.setHoverHighlighting,
                s = t.postDrawActions;
            this.setHoverHighlighting = function(e) {
                n(e), t.links().filter(function(e) {
                    return e instanceof o
                }).filter(function(e) {
                    return e.domain().equals(t)
                }).forEach(function(t) {
                    t.property().setHighlighting(e)
                })
            }, this.draw = function(e) {
                t.nodeElement(e), i.appendCircularClass(e, t.actualRadius(), t.collectCssClasses().join(" "), t.labelForCurrentLanguage(), t.backgroundColor())
            }, this.postDrawActions = function() {
                s(), t.textBlock().remove();
                var n = new r(t.nodeElement(), t.backgroundColor()),
                    o = t.equivalentsString(),
                    a = o ? -30 : -17,
                    i = o ? "," : "";
                n.addText(t.labelForCurrentLanguage(), a, "", i), n.addEquivalents(o, -17), e.options().compactNotation() ? n.addInstanceCount(t.individuals().length, 17) : t.indicationString().length > 0 ? (n.addSubText(t.indicationString(), 17), n.addInstanceCount(t.individuals().length, 30)) : n.addInstanceCount(t.individuals().length, 17), t.textBlock(n)
            }
        };
        return e.prototype = Object.create(a.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    function r(e, t) {
        a.apply(this, arguments)
    }
    var o = n(15)(),
        a = n(16);
    e.exports = r, r.prototype = Object.create(a.prototype), r.prototype.constructor = r, r.prototype.addText = function(e, t, n, r) {
        e && this.addTextline(e, this.CSS_CLASSES.default, t, n, r)
    }, r.prototype.addSubText = function(e, t) {
        e && this.addTextline(e, this.CSS_CLASSES.subtext, t, "(", ")")
    }, r.prototype.addEquivalents = function(e, t) {
        e && this.addTextline(e, this.CSS_CLASSES.default, t)
    }, r.prototype.addInstanceCount = function(e, t) {
        e && this.addTextline(e.toString(), this.CSS_CLASSES.instanceCount, t)
    }, r.prototype.addTextline = function(e, t, n, r, a) {
        var i = o.truncate(e, this._textBlock().datum().textWidth(n), t),
            s = this._textBlock().append("tspan").classed(this.CSS_CLASSES.default, !0).classed(t, !0).text(this._applyPreAndPostFix(i, r, a)).attr("x", 0);
        this._repositionTextLine(s, n)
    }, r.prototype._repositionTextLine = function(e, t) {
        var n = window.getComputedStyle(e.node()).getPropertyValue("font-size"),
            r = parseFloat(n),
            o = 1 / 3 * r;
        e.attr("y", o + (t || 0) + "px")
    }
}, function(e, t, n) {
    function r(e, t, n) {
        s.apply(this, arguments)
    }

    function o(e, t) {
        var n = i(e, t);
        n.attr("refX", -8), n.append("path").attr("d", "M0,-8L8,0L0,8L-8,0L0,-8L8,0").classed(t.markerType(), !0), t.markerElement(n)
    }

    function a(e, t) {
        var n = i(e, t);
        n.attr("refX", 8), n.append("path").attr("d", "M0,-8L8,0L0,8L-8,0L0,-8L8,0").classed(t.markerType(), !0), t.markerElement(n)
    }

    function i(e, t) {
        return e.append("marker").datum(t).attr("id", t.markerId()).attr("viewBox", "-10 -10 20 20").attr("markerWidth", 20).attr("markerHeight", 20).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto")
    }
    var s = n(23);
    e.exports = r, r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.draw = function(e, t) {
        var n = this.label().property(),
            r = this.label().inverse();
        o(t, n), r && a(t, r), s.prototype.draw.apply(this, arguments), e.attr("marker-start", "url(#" + n.markerId() + ")"), r && e.attr("marker-end", "url(#" + r.markerId() + ")")
    }
}, function(e, t, n) {
    function r(e, t, r) {
        var a, i, s, l, u, c = new o(r, this),
            d = n(25)(e, c, this),
            p = n(25)(c, t, this);
        this.layers = function(e) {
            return arguments.length ? (a = e, this) : a
        }, this.layerIndex = function(e) {
            return arguments.length ? (i = e, this) : i
        }, this.loops = function(e) {
            return arguments.length ? (s = e, this) : s
        }, this.loopIndex = function(e) {
            return arguments.length ? (l = e, this) : l
        }, this.domain = function() {
            return e
        }, this.label = function() {
            return c
        }, this.linkParts = function() {
            return [p, d]
        }, this.range = function() {
            return t
        }, this.pathObj = function(e) {
            return arguments.length ? void(u = e) : u
        }
    }
    var o = n(24);
    e.exports = r, r.prototype.draw = function(e) {
        var t = this.label().property(),
            n = this.label().inverse();
        t.linkGroup(e), n && n.linkGroup(e);
        var r = e.append("path");
        r.classed("link-path", !0).classed(this.domain().cssClassOfNode(), !0).classed(this.range().cssClassOfNode(), !0).classed(t.linkType(), !0), this.pathObj(r)
    }, r.prototype.inverse = function() {
        return this.label().inverse()
    }, r.prototype.isLoop = function() {
        return this.domain().equals(this.range())
    }, r.prototype.property = function() {
        return this.label().property()
    }
}, function(e, t) {
    function n(e, t) {
        this.link = function() {
            return t
        }, this.property = function() {
            return e
        }, Object.defineProperty(this, "fixed", {
            get: function() {
                var t = !!e.inverse() && e.inverse().fixed;
                return e.fixed || t
            },
            set: function(t) {
                e.fixed = t, e.inverse() && (e.inverse().fixed = t)
            }
        }), this.frozen = e.frozen, this.locked = e.locked, this.pinned = e.pinned
    }
    e.exports = n, n.prototype.actualRadius = function() {
        return this.property().actualRadius()
    }, n.prototype.draw = function(e) {
        return this.property().draw(e)
    }, n.prototype.inverse = function() {
        return this.property().inverse()
    }, n.prototype.equals = function(e) {
        if (!e) return !1;
        var t = e instanceof n,
            r = this.property().equals(e.property()),
            o = !1;
        return this.inverse() ? o = this.inverse().equals(e.inverse()) : e.inverse() || (o = !0), t && r && o
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = {},
            o = e,
            a = n,
            i = t;
        return Object.defineProperties(r, {
            source: {
                value: o,
                writable: !0
            },
            target: {
                value: i,
                writable: !0
            }
        }), r.domain = function() {
            return o
        }, r.link = function() {
            return a
        }, r.range = function() {
            return i
        }, r
    }
}, function(e, t, n) {
    var r = n(8);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["deprecated"]).type("owl:DeprecatedClass").styleClass("deprecated").indications(["deprecated"])
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(20);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this,
                n = t.draw;
            this.styleClass("disjointunionof").type("owl:disjointUnionOf"), this.draw = function(e) {
                n(e);
                var r = e.append("g").classed("embedded", !0),
                    o = 10;
                r.append("circle").attr("class", "symbol").attr("r", o), r.append("circle").attr("cx", 10).attr("class", "symbol").classed("fineline", !0).attr("r", o), r.append("circle").attr("class", "nofill").classed("fineline", !0).attr("r", o), r.append("text").attr("class", "link").text("1").attr("transform", "scale(.7)translate(3,5)"), r.attr("transform", "translate(-" + (t.radius() - 15) / 7 + ",-" + (t.radius() - 15) / 100 + ")"), t.postDrawActions()
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(8),
        o = n(17)();
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t, n = 4,
                a = this,
                i = a.actualRadius;
            this.styleClass("equivalentclass").type("owl:equivalentClass"), this.actualRadius = function() {
                return i() + n
            }, this.redrawElement = function() {
                t.remove(), a.textBlock().remove();
                var e = a.backgroundColor();
                a.attributes().indexOf("deprecated") > -1 && (e = void 0);
                var r = a.collectCssClasses();
                t = a.nodeElement().append("g"), a.getRectangularRepresentation() === !0 ? (o.appendRectangularClass(t, 84, 84, ["white", "embedded"]), o.appendRectangularClass(t, 80 - n, 80 - n, r, a.labelForCurrentLanguage(), e)) : (o.appendCircularClass(t, a.actualRadius(), ["white", "embedded"]), console.log(r), console.log(a.attributes()), console.log("what is bgColor" + e), o.appendCircularClass(t, a.actualRadius() - n, r, a.labelForCurrentLanguage(), e)), a.postDrawActions(a.nodeElement())
            }, this.draw = function(e) {
                var r = a.collectCssClasses();
                a.nodeElement(e), t = e.append("g");
                var i = a.backgroundColor();
                a.attributes().indexOf("deprecated") > -1 && (i = void 0), a.getRectangularRepresentation() === !0 ? (o.appendRectangularClass(t, 84, 84, ["white", "embedded"]), o.appendRectangularClass(t, 80 - n, 80 - n, r, a.labelForCurrentLanguage(), i)) : (o.appendCircularClass(t, a.actualRadius(), ["white", "embedded"]), o.appendCircularClass(t, a.actualRadius() - n, r, a.labelForCurrentLanguage(), i)), a.postDrawActions()
            }, a.setHoverHighlighting = function(e) {
                a.nodeElement().selectAll("circle:last-of-type").classed("hovered", e)
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(20);
    e.exports = function() {
        var e = function(e) {
            function t() {
                var e = 18,
                    t = 5,
                    n = -(e / 2),
                    r = 7,
                    o = 5,
                    a = e - o,
                    i = "M" + t + "," + n,
                    s = "c" + r + "," + o + " " + r + "," + a + " 0," + e,
                    l = "c" + -r + "," + -o + " " + -r + "," + -a + " 0," + -e;
                return i + s + l
            }
            r.apply(this, arguments);
            var n = this,
                o = n.draw,
                a = t();
            this.styleClass("intersectionof").type("owl:intersectionOf"), this.draw = function(e) {
                o(e);
                var t = e.append("g").classed("embedded", !0),
                    r = 10;
                t.append("path").attr("class", "nostroke").classed("symbol", !0).attr("d", a), t.append("circle").attr("class", "nofill").classed("fineline", !0).attr("r", r), t.append("circle").attr("cx", 10).attr("class", "nofill").classed("fineline", !0).attr("r", r), t.append("path").attr("class", "nofill").attr("d", "m 9,5 c 0,-2 0,-4 0,-6 0,0 0,0 0,0 0,0 0,-1.8 -1,-2.3 -0.7,-0.6 -1.7,-0.8 -2.9,-0.8 -1.2,0 -2,0 -3,0.8 -0.7,0.5 -1,1.4 -1,2.3 0,2 0,4 0,6").attr("transform", "scale(.5)translate(5,0)"), t.attr("transform", "translate(-" + (n.radius() - 15) / 7 + ",-" + (n.radius() - 15) / 100 + ")"), n.postDrawActions()
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(31);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.label("Nothing").type("owl:Nothing").iri("http://www.w3.org/2002/07/owl#Nothing")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(8);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this.draw;
            this.label("Thing").type("owl:Thing").iri("http://www.w3.org/2002/07/owl#Thing").radius(30), this.draw = function(e) {
                t(e, ["white", "dashed"])
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(20);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this,
                n = t.draw;
            this.styleClass("unionof").type("owl:unionOf"), this.draw = function(e) {
                n(e);
                var r = e.append("g").classed("embedded", !0),
                    o = 10;
                r.append("circle").attr("class", "symbol").attr("r", o), r.append("circle").attr("cx", 10).attr("class", "symbol").classed("fineline", !0).attr("r", o), r.append("circle").attr("class", "nofill").classed("fineline", !0).attr("r", o), r.append("path").attr("class", "link").attr("d", "m 1,-3 c 0,2 0,4 0,6 0,0 0,0 0,0 0,2 2,3 4,3 2,0 4,-1 4,-3 0,-2 0,-4 0,-6").attr("transform", "scale(.5)translate(5,0)"), r.attr("transform", "translate(-" + (t.radius() - 15) / 7 + ",-" + (t.radius() - 15) / 100 + ")"), t.postDrawActions()
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(8);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["rdf"]).type("rdfs:Class")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(35);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = "undefined";
            this.attributes(["datatype"]).type("rdfs:Datatype").styleClass("datatype"), this.dType = function(e) {
                return arguments.length ? void(t = e) : t
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(36);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments)
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    (function(t) {
        var r = n(9),
            o = n(14),
            a = n(17)(),
            i = n(37)();
        e.exports = function() {
            var e = function(e) {
                function n(e, n) {
                    n || (n = "text");
                    var r = t.select("body").append("div").attr("class", n).attr("id", "width-test").attr("style", "position:absolute; float:left; white-space:nowrap; visibility:hidden;").text(e),
                        o = document.getElementById("width-test").offsetWidth;
                    return r.remove(), o
                }
                r.apply(this, arguments);
                var s, l, u, c, d = this,
                    p = 20,
                    f = 60,
                    h = 80,
                    v = 80,
                    g = 80,
                    y = p / 2;
                d.renderType("rect"), this.height = function(e) {
                    return arguments.length ? (p = e, this) : p
                }, this.width = function(e) {
                    return arguments.length ? (f = e, this) : f
                }, this.getHalos = function() {
                    return l
                }, this.actualRadius = function() {
                    return y
                }, this.distanceToBorder = function(e, t) {
                    return i.distanceToBorder(d, e, t)
                }, this.setHoverHighlighting = function(e) {
                    d.nodeElement().selectAll("rect").classed("hovered", e);
                    var t = d.getHalos();
                    if (t) {
                        var n = t.selectAll(".searchResultA");
                        n.classed("searchResultA", !1), n.classed("searchResultB", !0)
                    }
                }, this.textWidth = function() {
                    return h
                }, this.width = function() {
                    return h
                }, this.getMyWidth = function() {
                    var e = d.labelForCurrentLanguage();
                    v = n(e, "text") + 20;
                    var t = d.indicationString(),
                        r = n(t, "subtext") + 20;
                    return r > v && (v = r), v
                }, this.textWidth = function() {
                    return d.width()
                }, this.toggleFocus = function() {
                    d.focused(!d.focused()), d.nodeElement().select("rect").classed("focused", d.focused()), e.resetSearchHighlight(), e.options().searchMenu().clearText()
                }, this.draw = function(t, n) {
                    var r = d.collectCssClasses();
                    d.nodeElement(t), n instanceof Array && (r = r.concat(n)), h = e.options().dynamicLabelWidth() === !0 ? Math.min(d.getMyWidth(), e.options().maxLabelWidth()) : g, f = h, u = a.appendRectangularClass(t, d.width(), d.height(), r, d.labelForCurrentLanguage(), d.backgroundColor()), c = new o(t, d.backgroundColor()), c.addText(d.labelForCurrentLanguage()), d.addMouseListeners(), d.pinned() && d.drawPin(), d.halo() && d.drawHalo(!1)
                }, this.drawPin = function() {
                    d.pinned(!0);
                    var t = -.5 * h + 5,
                        n = -1.1 * p;
                    s = a.drawPin(d.nodeElement(), t, n, this.removePin, e.options().showDraggerObject, e.options().useAccuracyHelper())
                }, this.removePin = function() {
                    d.pinned(!1), s && s.remove(), e.updateStyle()
                }, this.removeHalo = function() {
                    d.halo(!1), l && (l.remove(), l = null)
                }, this.drawHalo = function(e) {
                    d.halo(!0);
                    var t = 0;
                    if (l = a.drawRectHalo(d, this.width(), this.height(), t), e === !1) {
                        var n = l.selectAll(".searchResultA");
                        n.classed("searchResultA", !1), n.classed("searchResultB", !0), n.attr("animationRunning", !1)
                    }
                    if (d.pinned()) {
                        var r = s.node(),
                            o = r.parentNode;
                        o.appendChild(r)
                    }
                }, this.updateTextElement = function() {
                    c.updateAllTextElements()
                }, this.textBlock = function() {
                    return c
                }, this.redrawLabelText = function() {
                    c.remove(), c = new o(d.nodeElement(), d.backgroundColor()), c.addText(d.labelForCurrentLanguage()), d.animateDynamicLabelWidth(e.options().dynamicLabelWidth()), u.select("title").text(d.labelForCurrentLanguage())
                }, this.animateDynamicLabelWidth = function(t) {
                    d.removeHalo();
                    var n = d.height();
                    if (t === !0 ? (h = Math.min(d.getMyWidth(), e.options().maxLabelWidth()), u.transition().tween("attr", function() {}).ease("linear").duration(100).attr({
                            x: -h / 2,
                            y: -n / 2,
                            width: h,
                            height: n
                        }).each("end", function() {
                            d.updateTextElement()
                        })) : (h = g, d.updateTextElement(), u.transition().tween("attr", function() {}).ease("linear").duration(100).attr({
                            x: -h / 2,
                            y: -n / 2,
                            width: h,
                            height: n
                        })), d.pinned() === !0 && s) {
                        var r = .5 * h - 10,
                            o = -1.1 * n;
                        s.transition().tween("attr.translate", function() {}).attr("transform", "translate(" + r + "," + o + ")").ease("linear").duration(100)
                    }
                }, this.addTextLabelElement = function() {
                    var e = d.nodeElement();
                    c = new o(e, this.backgroundColor()), c.addText(d.labelForCurrentLanguage())
                }
            };
            return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
        }()
    }).call(t, n(6))
}, function(e, t) {
    var n = {};
    e.exports = function() {
        return n
    }, n.distanceToBorder = function(e, t, n) {
        var r, o = e.width(),
            a = e.height(),
            i = Math.abs(n / t),
            s = a / o;
        if (i <= s) {
            var l = t / (o / 2),
                u = n / l;
            r = Math.sqrt(Math.pow(o / 2, 2) + Math.pow(u, 2))
        } else {
            var c = n / (a / 2),
                d = t / c;
            r = Math.sqrt(Math.pow(a / 2, 2) + Math.pow(d, 2))
        }
        return r
    }
}, function(e, t, n) {
    var r = n(35);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this.draw,
                n = this.label;
            this.attributes(["datatype"]).label("Literal").styleClass("literal").type("rdfs:Literal").iri("http://www.w3.org/2000/01/rdf-schema#Literal"), this.draw = function(e) {
                t(e, ["dashed"])
            }, this.label = function(e) {
                return arguments.length ? this : n()
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(8);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this.draw;
            this.attributes(["rdf"]).label("Resource").radius(30).styleClass("rdfsresource").type("rdfs:Resource"), this.draw = function(e) {
                t(e, ["rdf", "dashed"])
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    (function(t) {
        var r = [];
        r.push(n(41)), r.push(n(44)), r.push(n(45)), r.push(n(46)), r.push(n(47)), r.push(n(48)), r.push(n(49)), r.push(n(50)), r.push(n(51)), r.push(n(52)), r.push(n(53)), r.push(n(54)), r.push(n(55)), r.push(n(56));
        var o = t.map(r, function(e) {
            return (new e).type()
        });
        e.exports = function() {
            return o
        }
    }).call(t, n(6))
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this.generateCardinalityText;
            this.linkType("values-from").markerType("filled values-from").styleClass("allvaluesfromproperty").type("owl:allValuesFrom"), this.generateCardinalityText = function() {
                var e = "A",
                    n = t();
                return n && (e += ", " + n), e
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    (function(t) {
        var r = n(10),
            o = n(14),
            a = n(17)(),
            i = n(13)(),
            s = n(37)();
        n(43)();
        e.exports = function() {
            var e = 28,
                n = 80,
                l = e / 2,
                u = function(e) {
                    function n() {
                        var e = [];
                        return S.subproperties() && (e = e.concat(S.subproperties())), S.superproperties() && (e = e.concat(S.superproperties())), e
                    }

                    function l() {
                        var e = n();
                        e.forEach(function(e) {
                            e.foreground && e.foreground()
                        })
                    }

                    function u() {
                        S.mouseEntered() || P === !0 || (S.mouseEntered(!0), S.setHighlighting(!0), S.foreground(), l())
                    }

                    function c() {
                        S.mouseEntered(!1), S.setHighlighting(!1)
                    }

                    function d(e, n) {
                        n || (n = "text");
                        var r = t.select("body").append("div").attr("class", n).attr("id", "width-test").attr("style", "position:absolute; float:left; white-space:nowrap; visibility:hidden;").text(e),
                            o = document.getElementById("width-test").offsetWidth;
                        return r.remove(), o
                    }

                    function p(t) {
                        if (e.ignoreOtherHoverEvents() === !1) {
                            var n = !1;
                            S.inverse() && (n = !0), t === !0 && e.activateHoverElementsForProperties(t, S, n)
                        }
                    }
                    r.apply(this, arguments);
                    var f, h, v, g, y, m, b, x, E, w, O, C, k, P, _, j, M, D, L, A, T, S = this,
                        R = "normal",
                        I = "filled",
                        N = !0,
                        F = 80,
                        H = 80,
                        B = [];
                    this.existingPropertyIRI = function(t) {
                        return e.options().editSidebar().checkForExistingURL(t)
                    }, this.getHalos = function() {
                        return M
                    }, this.getPin = function() {
                        return j
                    }, this.labelObject = function(e, t) {
                        return arguments.length ? (A = e, void(S.inverse() && t !== !0 && S.inverse().labelObject(e, !0))) : A
                    }, this.hide = function(e) {
                        S.labelElement().classed("hidden", e), S.linkGroup().classed("hidden", e), S.cardinalityElement() && S.cardinalityElement().classed("hidden", e)
                    }, this.cardinality = function(e) {
                        return arguments.length ? (f = e, this) : f
                    }, this.cardinalityElement = function(e) {
                        return arguments.length ? (w = e, this) : w
                    }, this.domain = function(e) {
                        return arguments.length ? (h = e, this) : h
                    }, this.inverse = function(e) {
                        return arguments.length ? (v = e, this) : v
                    }, this.labelElement = function(e) {
                        return arguments.length ? (O = e, this) : O
                    }, this.labelVisible = function(e) {
                        return arguments.length ? (N = e, this) : N
                    }, this.link = function(e) {
                        return arguments.length ? (g = e, this) : g
                    }, this.linkGroup = function(e) {
                        return arguments.length ? (C = e, this) : C
                    }, this.linkType = function(e) {
                        return arguments.length ? (R = e, this) : R
                    }, this.markerElement = function(e) {
                        return arguments.length ? (k = e, this) : k
                    }, this.markerType = function(e) {
                        return arguments.length ? (I = e, this) : I
                    }, this.maxCardinality = function(e) {
                        return arguments.length ? (m = e, this) : m
                    }, this.minCardinality = function(e) {
                        return arguments.length ? (y = e, this) : y
                    }, this.range = function(e) {
                        return arguments.length ? (b = e, this) : b
                    }, this.redundantProperties = function(e) {
                        return arguments.length ? (B = e, this) : B
                    }, this.subproperties = function(e) {
                        return arguments.length ? (x = e, this) : x
                    }, this.superproperties = function(e) {
                        return arguments.length ? (E = e, this) : E
                    }, this.distanceToBorder = function(e, t) {
                        return s.distanceToBorder(S, e, t)
                    }, this.linkHasMarker = function() {
                        return "dashed" !== R
                    }, this.markerId = function() {
                        return "marker" + S.id()
                    }, this.toggleFocus = function() {
                        S.focused(!S.focused()), O.select("rect").classed("focused", S.focused()), e.resetSearchHighlight(), e.options().searchMenu().clearText()
                    }, this.getShapeElement = function() {
                        return D
                    }, this.textBlock = function() {
                        return L
                    }, this.redrawElement = function() {
                        D.remove(), L.remove(), S.drawLabel(S.labelElement()), S.animateDynamicLabelWidth(e.options().dynamicLabelWidth())
                    }, this.draw = function(t) {
                        function n(e) {
                            var n = t.append("g").datum(e).classed("label", !0).attr("id", e.id());
                            return e.drawLabel(n), n
                        }
                        if (S.labelVisible()) {
                            if (F = e.options().dynamicLabelWidth() === !0 ? Math.min(S.getMyWidth(), e.options().maxLabelWidth()) : H, S.labelElement(n(S)), S.inverse()) {
                                var r = S.height() / 2 + 1;
                                S.inverse().labelElement(n(S.inverse())), S.labelElement().attr("transform", "translate(0,-" + r + ")"), S.inverse().labelElement().attr("transform", "translate(0," + r + ")")
                            }
                            return S.pinned() ? S.drawPin() : S.inverse() && S.inverse().pinned() && S.inverse().drawPin(), S.halo() && S.drawHalo(!1), S.labelElement()
                        }
                    }, this.addRect = function(e) {
                        var t = e.append("rect").classed(S.styleClass(), !0).classed("property", !0).attr("x", -S.width() / 2).attr("y", -S.height() / 2).attr("width", S.width()).attr("height", S.height()).on("mouseover", function() {
                            u()
                        }).on("mouseout", function() {
                            c()
                        });
                        t.append("title").text(S.labelForCurrentLanguage()), S.visualAttributes() && t.classed(S.visualAttributes(), !0);
                        var n = S.backgroundColor();
                        return S.attributes().indexOf("deprecated") > -1 ? (n = void 0, t.classed("deprecatedproperty", !0)) : t.classed("deprecatedproperty", !1), t.style("fill", n), t
                    }, this.drawLabel = function(e) {
                        D = this.addRect(e);
                        var t = S.equivalentsString(),
                            n = t ? "," : "",
                            r = S.backgroundColor();
                        S.attributes().indexOf("deprecated") > -1 && (r = void 0), L = new o(e, r), L.addText(this.labelForCurrentLanguage(), "", n), L.addEquivalents(t), L.addSubText(this.indicationString())
                    }, this.equivalentsString = function() {
                        var e = S.equivalents();
                        if (e) return e.map(function(e) {
                            return void 0 === e || "string" == typeof e ? "ERROR" : e.labelForCurrentLanguage()
                        }).join(", ")
                    }, this.drawCardinality = function(e) {
                        var t = this.generateCardinalityText();
                        return !!t && (S.cardinalityElement(e), 0 === t.indexOf("A") && 1 === t.length ? (e.classed("cardinality", !0).attr("text-anchor", "middle").append("path").classed("cardinality", !0).attr("d", "m -8.8832678,-11.303355 -7.97e-4,0 0.717374,1.833297 8.22987151,21.371761 8.66826659,-21.2123526 0.797082,-1.9927054 0.02471,0 -0.8218553,1.9927054 -2.2517565,5.4201577 -12.4444429,8e-6 -2.2019394,-5.5795821 z").style("fill", "none").attr("transform", "matrix(0.5,0,0,0.5,0.5,0.5)"), !0) : 0 === t.indexOf("E") && 1 === t.length ? (e.classed("cardinality", !0).attr("text-anchor", "middle").append("path").classed("cardinality", !0).attr("d", "m -5.5788451,-8.0958763 10.8749368,0 0,8.34681523 -9.5707468,0.040132 9.5707468,-0.040132 0,8.42707237 -10.9150654,0").style("fill", "none").attr("transform", "matrix(0.5,0,0,0.5,0.5,0.5)"), !0) : (e.append("text").classed("cardinality", !0).attr("text-anchor", "middle").attr("dy", "0.5ex").text(t), !0))
                    }, this.generateCardinalityText = function() {
                        if (S.cardinality()) return S.cardinality();
                        if (S.minCardinality() || S.maxCardinality()) {
                            var e = S.minCardinality() || "*",
                                t = S.maxCardinality() || "*";
                            return e + ".." + t
                        }
                    }, S.setHighlighting = function(t) {
                        S.labelElement && S.labelElement() && S.labelElement().select("rect").classed("hovered", t), S.linkGroup().selectAll("path, text").classed("hovered", t), S.markerElement() && (S.markerElement().select("path").classed("hovered", t), S.cardinalityElement() && (S.cardinalityElement().selectAll("path").classed("hovered-MathSymbol", t), S.cardinalityElement().classed("hovered", t)));
                        var r = n();
                        r.forEach(function(e) {
                            e.labelElement && e.labelElement() && e.labelElement().select("rect").classed("indirect-highlighting", t)
                        });
                        var o = !1;
                        e.ignoreOtherHoverEvents() === !1 && (S.inverse() && (o = !0), e.isTouchDevice() === !1 ? e.activateHoverElementsForProperties(t, S, o) : (S.labelElement().select("rect").classed("hovered", !1), S.linkGroup().selectAll("path, text").classed("hovered", !1), S.markerElement() && (S.markerElement().select("path").classed("hovered", !1), S.cardinalityElement() && S.cardinalityElement().classed("hovered", !1)), e.activateHoverElementsForProperties(t, S, o, !0)))
                    }, this.foreground = function() {
                        if (S.labelElement() && null !== S.labelElement().node().parentNode) {
                            var e = S.labelElement().node().parentNode,
                                t = e.parentNode,
                                n = S.linkGroup().node(),
                                r = S.linkGroup().node().parentNode;
                            S.animationProcess() === !1 && t.appendChild(e), r.appendChild(n)
                        }
                    }, this.drawPin = function() {
                        if (S.pinned(!0), F = e.options().dynamicLabelWidth() === !0 ? S.getMyWidth() : H, S.inverse()) {
                            var t = S.labelElement().attr("transform"),
                                n = S.inverse().labelElement().attr("transform"),
                                r = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(t)[2],
                                o = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(n)[2];
                            j = r < o ? a.drawPin(S.labelElement(), -.5 * S.width() + 10, -25, this.removePin, e.options().showDraggerObject, e.options().useAccuracyHelper()) : a.drawPin(S.inverse().labelElement(), -.5 * S.inverse().width() + 10, -25, this.removePin, e.options().showDraggerObject, e.options().useAccuracyHelper())
                        } else j = a.drawPin(S.labelElement(), -.5 * S.width() + 10, -25, this.removePin, e.options().showDraggerObject, e.options().useAccuracyHelper())
                    }, this.removePin = function() {
                        S.pinned(!1), j && j.remove(), e.updateStyle()
                    }, this.removeHalo = function() {
                        S.halo(!1), M && (M.remove(), M = null)
                    }, this.animationProcess = function() {
                        var e = !1;
                        if (S.getHalos()) {
                            var t = S.getHalos(),
                                n = t.selectAll(".searchResultA");
                            e = t.attr("animationRunning"), "boolean" != typeof e && (e = "true" === e), e === !1 && (n.classed("searchResultA", !1), n.classed("searchResultB", !0))
                        }
                        return e
                    }, this.drawHalo = function(e) {
                        S.halo(!0);
                        var t = 0;
                        if (S.labelElement() && S.labelElement().node()) {
                            var n = S.labelElement().node(),
                                r = n.parentNode;
                            S.animationProcess() === !1 && r.appendChild(n)
                        }
                        if (M = a.drawRectHalo(S, S.width(), S.height(), t)) {
                            var o = M.node(),
                                i = o.parentNode;
                            i.appendChild(o)
                        }
                        var s, l;
                        if (S.pinned() && (s = j.node(), l = s.parentNode, l.appendChild(s)), S.inverse() && S.inverse().pinned() && S.inverse().getPin() && (s = S.inverse().getPin().node(), l = s.parentNode, l.appendChild(s)), e === !1) {
                            var u = M.selectAll(".searchResultA");
                            u.classed("searchResultA", !1), u.classed("searchResultB", !0), u.attr("animationRunning", !1)
                        }
                    }, this.getMyWidth = function() {
                        var e = S.labelForCurrentLanguage();
                        F = d(e, "text") + 20;
                        var t = S.indicationString(),
                            n = d(t, "subtext") + 20;
                        return n > F && (F = n), F
                    }, this.textWidth = function() {
                        return F
                    }, this.width = function() {
                        return F
                    }, this.animateDynamicLabelWidth = function(t) {
                        if (S.removeHalo(), void 0 !== D) {
                            var n = S.height();
                            if (t === !0 ? (F = Math.min(S.getMyWidth(), e.options().maxLabelWidth()), D.transition().tween("attr", function() {}).ease("linear").duration(100).attr({
                                    x: -F / 2,
                                    y: -n / 2,
                                    width: F,
                                    height: n
                                }).each("end", function() {
                                    S.updateTextElement()
                                })) : (F = H, S.updateTextElement(), D.transition().tween("attr", function() {}).ease("linear").duration(100).attr({
                                    x: -F / 2,
                                    y: -n / 2,
                                    width: F,
                                    height: n
                                })), S.pinned() === !0 && j) {
                                var r = -.5 * F + 10,
                                    o = -25;
                                j.transition().tween("attr.translate", function() {}).attr("transform", "translate(" + r + "," + o + ")").ease("linear").duration(100)
                            }
                        }
                    }, this.redrawLabelText = function() {
                        L.remove(), S.addTextLabelElement(), S.animateDynamicLabelWidth(e.options().dynamicLabelWidth()), D.select("title").text(S.labelForCurrentLanguage())
                    }, this.addTextLabelElement = function() {
                        var e = S.labelElement(),
                            t = S.equivalentsString(),
                            n = t ? "," : "";
                        L = new o(e, this.backgroundColor()), L.addText(this.labelForCurrentLanguage(), "", n), L.addEquivalents(t), L.addSubText(this.indicationString())
                    }, this.updateTextElement = function() {
                        L.updateAllTextElements()
                    }, this.enableEditing = function(e) {
                        e !== !1 && S.raiseDoubleClickEdit(!0)
                    }, this.raiseDoubleClickEdit = function(n) {
                        if (t.selectAll(".foreignelements").remove(), void 0 === S.labelElement() || "owl:disjointWith" === this.type() || "rdfs:subClassOf" === this.type()) return void console.log("No Container found");
                        void 0 !== _ && S.labelElement().selectAll(".foreignelements").remove(), T = void 0, e.options().focuserModule().handle(void 0), e.options().focuserModule().handle(S), S.editingTextElement = !0, P = !0, S.labelElement().selectAll("rect").classed("hoveredForEditing", !0), S.frozen(!0), e.killDelayedTimer(), e.ignoreOtherHoverEvents(!1), _ = S.labelElement().append("foreignObject").attr("x", -.5 * S.textWidth()).attr("y", -13).attr("height", 25).attr("class", "foreignelements").on("dragstart", function() {
                            return !1
                        }).attr("width", S.textWidth() - 2);
                        var r = _.append("xhtml:input").attr("class", "nodeEditSpan").attr("id", S.id()).attr("align", "center").attr("contentEditable", "true").on("dragstart", function() {
                                return !1
                            }),
                            o = "#f00",
                            a = S.textWidth() - 2;
                        r.style({
                            align: "center",
                            color: "black",
                            width: a + "px",
                            "background-color": o,
                            "border-bottom": "2px solid black"
                        });
                        var i = r.node();
                        i.value = S.labelForCurrentLanguage(), i.focus(), i.select(), t.event.stopPropagation && t.event.stopPropagation(), t.event.sourceEvent && t.event.sourceEvent.stopPropagation && t.event.sourceEvent.stopPropagation(), r.on("click", function() {
                            t.event.stopPropagation && t.event.stopPropagation(), t.event.sourceEvent && t.event.sourceEvent.stopPropagation && t.event.sourceEvent.stopPropagation()
                        }), r.on("mouseout", function() {
                            t.event.stopPropagation && t.event.stopPropagation(), t.event.sourceEvent && t.event.sourceEvent.stopPropagation && t.event.sourceEvent.stopPropagation()
                        }), r.on("mousedown", function() {
                            t.event.stopPropagation && t.event.stopPropagation(), t.event.sourceEvent && t.event.sourceEvent.stopPropagation && t.event.sourceEvent.stopPropagation()
                        }).on("keydown", function() {
                            13 === t.event.keyCode && (this.blur(), S.frozen(!1), S.locked(!1))
                        }).on("keyup", function() {
                            if (n) {
                                var o = r.node().value,
                                    a = o.replaceAll(" ", "_"),
                                    i = S.baseIri() + a;
                                T = i, t.select("#element_iriEditor").node().title = i, t.select("#element_iriEditor").node().value = e.options().prefixModule().getPrefixRepresentationForFullURI(i)
                            }
                            t.select("#element_labelEditor").node().value = r.node().value
                        }).on("blur", function() {
                            S.editingTextElement = !1, P = !1, S.labelElement().selectAll("rect").classed("hoveredForEditing", !1);
                            var t = r.node().value;
                            if (S.labelElement().selectAll(".foreignelements").remove(), S.label(t), S.backupLabel(t), S.redrawLabelText(), p(!0), e.showHoverElementsAfterAnimation(S, !1), e.ignoreOtherHoverEvents(!1), S.frozen(e.paused()), S.locked(e.paused()), S.domain().frozen(e.paused()), S.domain().locked(e.paused()), S.range().frozen(e.paused()), S.range().locked(e.paused()), e.removeEditElements(), T) {
                                var n = e.options().editSidebar().checkProperIriChange(S, T);
                                n !== !1 && e.options().warningModule().showWarning("Already seen this property", "Input IRI: " + T + " for element: " + S.labelForCurrentLanguage() + " already been set", "Continuing with duplicate property!", 1, !1, n), S.iri(T)
                            }
                            e.options().focuserModule().handle(void 0), e.options().focuserModule().handle(S), e.updatePropertyDraggerElements(S)
                        })
                    }, S.copyInformation = function(e) {
                        S.label(e.label()), S.iri(e.iri()), S.baseIri(e.baseIri()), "owl:ObjectProperty" !== e.type() && "owl:DatatypeProperty" !== e.type() || S.backupLabel(e.label()), void 0 !== e.backupLabel() && S.backupLabel(e.backupLabel())
                    }, i.addTo(this)
                };
            return u.prototype = Object.create(r.prototype), u.prototype.constructor = u, u.prototype.height = function() {
                return e
            }, u.prototype.width = function() {
                return n
            }, u.prototype.actualRadius = function() {
                return l
            }, u.prototype.textWidth = u.prototype.width, u
        }()
    }).call(t, n(6))
}, function(e, t, n) {
    (function(t) {
        e.exports = function() {
            function e(e) {
                return e %= 360, e < 0 && (e += 360), Math.PI * e / 180
            }

            function n(e) {
                return e * (180 / Math.PI)
            }
            var r = {},
                o = t.svg.line().x(function(e) {
                    return e.x
                }).y(function(e) {
                    return e.y
                }).interpolate("cardinal").tension(-1);
            return r.calculateNormalVector = function(e, t, n) {
                    var r = t.x - e.x,
                        o = t.y - e.y,
                        a = -o,
                        i = r,
                        s = Math.sqrt(a * a + i * i),
                        l = 0 !== s ? n / s : 0;
                    return {
                        x: a * l,
                        y: i * l
                    }
                }, r.getLoopPoints = function(t) {
                    var r = t.domain(),
                        o = t.label(),
                        a = 360 / t.loops().length,
                        i = .8 * a,
                        s = Math.min(60, i);
                    o.increasedLoopAngle === !0 && (s = 120);
                    var l = o.x - r.x,
                        u = o.y - r.y,
                        c = Math.atan2(u, l),
                        d = n(c),
                        p = d - s / 2,
                        f = d + s / 2,
                        h = e(p),
                        v = e(f),
                        g = Math.cos(h) * r.actualRadius(),
                        y = Math.sin(h) * r.actualRadius(),
                        m = Math.cos(v) * r.actualRadius(),
                        b = Math.sin(v) * r.actualRadius(),
                        x = {
                            x: r.x + g,
                            y: r.y + y
                        },
                        E = {
                            x: r.x + m,
                            y: r.y + b
                        };
                    return [x, E]
                }, r.calculateLoopPath = function(t) {
                    var r = t.domain(),
                        a = t.label(),
                        i = 360 / t.loops().length,
                        s = .8 * i,
                        l = Math.min(60, s);
                    a.increasedLoopAngle === !0 && (l = 120);
                    var u = a.x - r.x,
                        c = a.y - r.y,
                        d = Math.atan2(c, u),
                        p = n(d),
                        f = p - l / 2,
                        h = p + l / 2,
                        v = e(f),
                        g = e(h),
                        y = Math.cos(v) * r.actualRadius(),
                        m = Math.sin(v) * r.actualRadius(),
                        b = Math.cos(g) * r.actualRadius(),
                        x = Math.sin(g) * r.actualRadius(),
                        E = {
                            x: r.x + y,
                            y: r.y + m
                        },
                        w = {
                            x: r.x + b,
                            y: r.y + x
                        };
                    return o([E, t.label(), w])
                }, r.calculateLoopPoints = function(t) {
                    var r = t.domain(),
                        o = t.label(),
                        a = 360 / t.loops().length,
                        i = .8 * a,
                        s = Math.min(60, i),
                        l = o.x - r.x,
                        u = o.y - r.y,
                        c = Math.atan2(u, l),
                        d = n(c),
                        p = d - s / 2,
                        f = d + s / 2,
                        h = e(p),
                        v = e(f),
                        g = Math.cos(h) * r.actualRadius(),
                        y = Math.sin(h) * r.actualRadius(),
                        m = Math.cos(v) * r.actualRadius(),
                        b = Math.sin(v) * r.actualRadius(),
                        x = {
                            x: r.x + g,
                            y: r.y + y
                        },
                        E = {
                            x: r.x + m,
                            y: r.y + b
                        };
                    return [x, t.label(), E]
                }, r.calculateIntersection = function(e, t, n) {
                    var r = t.x - e.x,
                        o = t.y - e.y,
                        a = Math.sqrt(r * r + o * o);
                    if (0 === a) return {
                        x: e.x,
                        y: e.y
                    };
                    var i = t.distanceToBorder(r, o),
                        s = (a - (i + n)) / a,
                        l = r * s + e.x,
                        u = o * s + e.y;
                    return {
                        x: l,
                        y: u
                    }
                }, r.calculateCenter = function(e, t) {
                    return {
                        x: (e.x + t.x) / 2,
                        y: (e.y + t.y) / 2
                    }
                },
                function() {
                    return r
                }
        }()
    }).call(t, n(6))
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["datatype"]).styleClass("datatypeproperty").type("owl:DatatypeProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["deprecated"]).styleClass("deprecatedproperty").type("owl:DeprecatedProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42),
        o = n(14);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t, n = "Disjoint With";
            this.label = function(e) {
                return arguments.length ? this : n
            }, this.linkType("dashed").styleClass("disjointwith").type("owl:disjointWith"), this.drawLabel = function(n) {
                t = this.addRect(n), n.append("circle").classed("symbol", !0).classed("fineline", !0).classed("embedded", !0).attr("cx", -12.5).attr("r", 10), n.append("circle").classed("symbol", !0).classed("fineline", !0).classed("embedded", !0).attr("cx", 12.5).attr("r", 10);
                var r = new o(n, this.backgroundColor());
                e.options().compactNotation() || r.addSubText("disjoint"), r.translation(0, 20)
            }, this.getShapeElement = function() {
                return t
            }, this.markerElement = function() {}
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.styleClass("equivalentproperty").type("owl:equivalentProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["functional"]).styleClass("functionalproperty").type("owl:FunctionalProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["inverse functional"]).styleClass("inversefunctionalproperty").type("owl:InverseFunctionalProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["object"]).styleClass("objectproperty").type("owl:ObjectProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this.generateCardinalityText;
            this.linkType("values-from").markerType("filled values-from").styleClass("somevaluesfromproperty").type("owl:someValuesFrom"), this.generateCardinalityText = function() {
                var e = "E",
                    n = t();
                return n && (e += ", " + n), e
            }
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["symmetric"]).styleClass("symmetricproperty").type("owl:SymmetricProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["transitive"]).styleClass("transitiveproperty").type("owl:TransitiveProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.attributes(["rdf"]).styleClass("rdfproperty").type("rdf:Property")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments);
            var t = this,
                n = t.draw,
                o = "Subclass of";
            this.draw = function(r) {
                return t.labelVisible(!e.options().compactNotation()), n(r)
            }, this.label = function(e) {
                return arguments.length ? this : o
            }, this.linkType("dotted").markerType("white").styleClass("subclass").type("rdfs:subClassOf"), t.baseIri("http://www.w3.org/2000/01/rdf-schema#"), t.iri("http://www.w3.org/2000/01/rdf-schema#subClassOf")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    var r = n(42);
    e.exports = function() {
        var e = function(e) {
            r.apply(this, arguments), this.labelVisible(!1).linkType("dashed").markerType("white").styleClass("setoperatorproperty").type("setOperatorProperty")
        };
        return e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e
    }()
}, function(e, t, n) {
    (function(t) {
        var r = n(58),
            o = n(43)(),
            a = n(60)(),
            i = n(63)(),
            s = n(5)(),
            l = n(40)();
        e.exports = function(e) {
            function u() {
                Se.graphContainerSelector(e);
                var n = !1;
                ye = t.layout.force().on("tick", c), me = t.behavior.drag().origin(function(e) {
                    return e
                }).on("dragstart", function(e) {
                    t.event.sourceEvent.stopPropagation(), De.ignoreOtherHoverEvents(!0), e.type && "Class_dragger" === e.type() ? (xt.mouseButtonPressed = !0, clearTimeout(Oe), xt.selectedViaTouch(!0), e.parentNode().locked(!0), at = !0) : e.type && "Range_dragger" === e.type() ? (De.ignoreOtherHoverEvents(!0), clearTimeout(Oe), ke = Ot.parentNode().domain(), Pe = Ot.parentNode().range(), Ot.setInitialPosition(), Ot.hideClone(!1), Ot.hideParentProperty(!0), Ot.updateElement(), xe.classed("hidden", !0), Ee.classed("hidden", !0), ke.frozen(!0), ke.locked(!0), Pe.frozen(!0), Pe.locked(!0), wt.updateElement(), wt.mouseButtonPressed = !0, Et.updateElement(), Et.mouseButtonPressed = !0) : e.type && "Domain_dragger" === e.type() ? (De.ignoreOtherHoverEvents(!0), clearTimeout(Oe), ke = Ot.parentNode().domain(), Pe = Ot.parentNode().range(), Ot.setInitialPosition(), Ot.hideClone(!1), Ot.hideParentProperty(!0), Ot.updateElement(), xe.classed("hidden", !0), Ee.classed("hidden", !0), ke.frozen(!0), ke.locked(!0), Pe.frozen(!0), Pe.locked(!0), wt.updateElement(), wt.mouseButtonPressed = !0, Et.updateElement(), Et.mouseButtonPressed = !0) : (e.locked(!0), n = !1)
                }).on("drag", function(e) {
                    e.type && "Class_dragger" === e.type() ? (clearTimeout(Oe), xt.setPosition(t.event.x, t.event.y)) : e.type && "Range_dragger" === e.type() ? (clearTimeout(Oe), Et.setPosition(t.event.x, t.event.y), Ot.setPosition(t.event.x, t.event.y), wt.updateElementViaRangeDragger(t.event.x, t.event.y)) : e.type && "Domain_dragger" === e.type() ? (clearTimeout(Oe), wt.setPosition(t.event.x, t.event.y), Ot.setPositionDomain(t.event.x, t.event.y), Et.updateElementViaDomainDragger(t.event.x, t.event.y)) : (e.px = t.event.x, e.py = t.event.y, ye.resume(), T(), n = !0, e.renderType && "round" === e.renderType() && xt.setParentNode(e))
                }).on("dragend", function(e) {
                    if (De.ignoreOtherHoverEvents(!1), e.type && "Class_dragger" === e.type()) {
                        var t = xt.x,
                            r = xt.y;
                        clearTimeout(Oe), xt.mouseButtonPressed = !1, xt.selectedViaTouch(!1), e.setParentNode(e.parentNode());
                        var o = [t, r],
                            a = De.getTargetNode(o);
                        a && U(e.parentNode(), a, o), Ke === !1 && K(), at = !1
                    } else if (e.type && "Range_dragger" === e.type()) {
                        De.ignoreOtherHoverEvents(!1), ke.frozen(!1), ke.locked(!1), Pe.frozen(!1), Pe.locked(!1), Et.mouseButtonPressed = !1, wt.mouseButtonPressed = !1, wt.updateElement(), Et.updateElement(), Ot.hideClone(!0);
                        var s = Et.x,
                            l = Et.y,
                            u = [s, l],
                            c = De.getTargetNode(u);
                        i.isDatatype(c) === !0 && (c = null, console.log("---------------TARGET NODE IS A DATATYPE/ LITERAL ------------")), null === c ? (e.reDrawEverthing(), Ot.hideParentProperty(!1)) : (e.updateRange(c), De.update(), Ot.hideParentProperty(!1))
                    } else if (e.type && "Domain_dragger" === e.type()) {
                        De.ignoreOtherHoverEvents(!1), ke.frozen(!1), ke.locked(!1), Pe.frozen(!1), Pe.locked(!1), Et.mouseButtonPressed = !1, wt.mouseButtonPressed = !1, wt.updateElement(), Et.updateElement(), Ot.hideClone(!0);
                        var d = wt.x,
                            p = wt.y,
                            f = [d, p],
                            h = De.getTargetNode(f);
                        i.isDatatype(h) === !0 && (h = null, console.log("---------------TARGET NODE IS A DATATYPE/ LITERAL ------------")), Ot.hideClone(!0), null === h ? (e.reDrawEverthing(), Ot.hideParentProperty(!1)) : (e.updateDomain(h), De.update(), Ot.hideParentProperty(!1))
                    } else {
                        e.locked(!1);
                        var v = De.options().pickAndPinModule();
                        v.enabled() === !0 && n === !0 && (e.id && v.handle(e, !0), e.property && v.handle(e.property(), !0))
                    }
                }), Me = t.behavior.zoom().duration(150).scaleExtent([Se.minMagnification(), Se.maxMagnification()]).on("zoom", v), nt.push(xt), nt.push(Et), nt.push(wt), nt.push(Ot), ye.stop()
            }

            function c() {
                if (ct = !1, De.options().loadingModule().successfullyLoadedOntology() === !1) return ye.stop(), t.select("#progressBarValue").node().innerHTML = "", De.updateProgressBarMode(), De.options().loadingModule().showErrorDetailsMessage(c), void(vt && gt === !1 && De.options().loadingModule().collapseDetails("hiddenRecalculatePositions"));
                if (He === !1) {
                    var e = 1 - 10 * ye.alpha(),
                        n = parseInt(200 * e) + "%";
                    De.options().loadingModule().setPercentValue(n), t.select("#progressBarValue").style("width", n), t.select("#progressBarValue").node().innerHTML = n, e > .49 && (He = !0, ne && (ne.style("opacity", "1"), n = "100%", t.select("#progressBarValue").style("width", n), t.select("#progressBarValue").node().innerHTML = n, De.options().ontologyMenu().append_message_toLastBulletPoint("done"), t.select("#reloadCachedOntology").classed("hidden", !yt)), Fe && (De.paused() === !1 && ye.resume(), Fe = !1), ct = !0, ft === !0 ? (ye.on("tick", d), d()) : (ye.on("tick", p), p()), We === !0 && ye.nodes().length > 0 && (ye.nodes().length < 10 ? De.forceRelocationEvent(!0) : De.forceRelocationEvent(), We = !1), De.showEditorHintIfNeeded(), De.options().loadingModule().missingImportsWarning() === !1 ? (De.options().loadingModule().hideLoadingIndicator(), De.options().ontologyMenu().append_bulletPoint("Successfully loaded ontology"), De.options().loadingModule().setSuccessful()) : (De.options().loadingModule().showWarningDetailsMessage(), De.options().ontologyMenu().append_bulletPoint("Loaded ontology with warnings")))
                }
            }

            function d() {
                p(), _e = Date.now();
                var e = _e - je,
                    t = (1e3 / e).toFixed(2);
                ut.node().innerHTML = "FPS: " + t + "<br>Nodes: " + ye.nodes().length + "<br>Links: " + ye.links().length, je = Date.now()
            }

            function p() {
                return lt ? (se.attr("transform", function(e) {
                    return "translate(" + e.x + "," + e.y + ")"
                }), le.attr("transform", function(e) {
                    var t, n = e.link();
                    if (1 !== n.layers().length || n.loops()) e.linkDomainIntersection = o.calculateIntersection(n.label(), n.domain(), 0), e.linkRangeIntersection = o.calculateIntersection(n.label(), n.range(), 0), n.property().focused() !== !0 && void 0 === ot || (Et.updateElement(), wt.updateElement());
                    else {
                        var r = o.calculateIntersection(n.range(), n.domain(), 0),
                            a = o.calculateIntersection(n.domain(), n.range(), 0);
                        t = o.calculateCenter(r, a), e.x = t.x, e.y = t.y, e.linkRangeIntersection = a, e.linkDomainIntersection = r, n.property().focused() !== !0 && void 0 === ot || (Et.updateElement(), wt.updateElement())
                    }
                    return "translate(" + e.x + "," + e.y + ")"
                }), ce.attr("d", function(e) {
                    if (e.isLoop()) {
                        var t = o.getLoopPoints(e);
                        return e.label().linkRangeIntersection = t[1], e.label().linkDomainIntersection = t[0], e.property().focused() !== !0 && void 0 === ot || (Et.updateElement(), wt.updateElement()), o.calculateLoopPath(e)
                    }
                    var n = e.label(),
                        r = o.calculateIntersection(n, e.domain(), 1),
                        a = o.calculateIntersection(n, e.range(), 1);
                    return e.linkRangeIntersection = r, e.linkDomainIntersection = a, e.property().focused() !== !0 && void 0 === ot || (wt.updateElement(), Et.updateElement()), Te([r, n, a])
                }), de.attr("transform", function(e) {
                    var t = e.link().label(),
                        n = o.calculateIntersection(t, e.range(), Le),
                        r = o.calculateNormalVector(t, e.range(), Ae);
                    return "translate(" + (n.x + r.x) + "," + (n.y + r.y) + ")"
                }), rt && (ee(rt), Q(rt), at === !1 && xt.setParentNode(rt)), ot && te(ot), void T()) : (se.attr("transform", function(e) {
                    return "translate(" + e.x + "," + e.y + ")"
                }), le.attr("transform", function(e) {
                    var t, n = e.link();
                    if (1 === n.layers().length && !n.loops()) {
                        var r = o.calculateIntersection(n.range(), n.domain(), 0),
                            a = o.calculateIntersection(n.domain(), n.range(), 0);
                        t = o.calculateCenter(r, a), e.x = t.x, e.y = t.y
                    }
                    return "translate(" + e.x + "," + e.y + ")"
                }), ce.attr("d", function(e) {
                    if (e.isLoop()) return o.calculateLoopPath(e);
                    var t = e.label(),
                        n = o.calculateIntersection(t, e.domain(), 1),
                        r = o.calculateIntersection(t, e.range(), 1);
                    return Te([n, t, r])
                }), de.attr("transform", function(e) {
                    var t = e.link().label(),
                        n = o.calculateIntersection(t, e.range(), Le),
                        r = o.calculateNormalVector(t, e.range(), Ae);
                    return "translate(" + (n.x + r.x) + "," + (n.y + r.y) + ")"
                }), void T())
            }

            function f() {
                function e(e) {
                    Se.selectionModules().forEach(function(t) {
                        t.handle(e)
                    })
                }
                se.on("click", function(n) {
                    Ke === !0 && G() === !0 ? (t.event.stopPropagation(), lt === !0 && n.raiseDoubleClickEdit(h(n))) : e(n)
                }), se.on("dblclick", function(e) {
                    t.event.stopPropagation(), lt === !0 && e.raiseDoubleClickEdit(h(e))
                }), le.selectAll(".label").on("click", function(n) {
                    e(n), Ke === !0 && G() === !0 && (t.event.stopPropagation(), lt === !0 && n.raiseDoubleClickEdit(h(n)))
                }), le.selectAll(".label").on("dblclick", function(e) {
                    t.event.stopPropagation(), lt === !0 && e.raiseDoubleClickEdit(h(e))
                })
            }

            function h(e) {
                if (De.options().getGeneralMetaObject().iri) {
                    var t = De.options().getGeneralMetaObject().iri + e.id();
                    return e.iri() === t
                }
                return !1
            }

            function v() {
                if (pt === !0) return Me.translate(Ve), void Me.scale(Be);
                var e = !1;
                if (t.event.sourceEvent && t.event.sourceEvent.deltaY && (e = !0), e === !1) {
                    if (ze === !0) return;
                    return Be = t.event.scale, Ve = t.event.translate, ne.attr("transform", "translate(" + Ve + ")scale(" + Be + ")"), T(), void De.options().zoomSlider().updateZoomSliderValue(Be)
                }
                Be = t.event.scale, Ve = t.event.translate, ne.transition().tween("attr.translate", function() {
                    return function(e) {
                        ze = !0;
                        var n = t.transform(ne.attr("transform"));
                        Ve[0] = n.translate[0], Ve[1] = n.translate[1], Be = n.scale[0], T(), De.options().zoomSlider().updateZoomSliderValue(Be)
                    }
                }).each("end", function() {
                    ze = !1
                }).attr("transform", "translate(" + Ve + ")scale(" + Be + ")").ease("linear").duration(250)
            }

            function g() {
                b(), ne = t.selectAll(Se.graphContainerSelector()).append("svg").classed("vowlGraph", !0).attr("width", Se.width()).attr("height", Se.height()).call(Me).append("g");
                var e = t.selectAll(".vowlGraph");
                Qe = e.on("dblclick.zoom"), et = e.on("touchstart"), e.on("touchstart", Z), lt === !0 ? e.on("dblclick.zoom", De.modified_dblClickFunction) : e.on("dblclick.zoom", Qe)
            }

            function y() {
                Ee = we.append("g").classed("hidden-in-export", !0).classed("hidden", !0).classed("addDataPropertyElement", !0).attr("transform", "translate(0,0)"), Ee.append("circle").attr("r", 12).attr("cx", 0).attr("cy", 0).append("title").text("Add Datatype Property"), Ee.append("line").attr("x1", -8).attr("y1", 0).attr("x2", 8).attr("y2", 0).append("title").text("Add Datatype Property"), Ee.append("line").attr("x1", 0).attr("y1", -8).attr("x2", 0).attr("y2", 8).append("title").text("Add Datatype Property"), De.options().useAccuracyHelper() && Ee.append("circle").attr("r", 15).attr("cx", -7).attr("cy", 7).classed("superHiddenElement", !0).classed("superOpacityElement", !De.options().showDraggerObject()), xe = we.append("g").classed("hidden-in-export", !0).classed("hidden", !0).classed("deleteParentElement", !0).attr("transform", "translate(0,0)"), xe.append("circle").attr("r", 12).attr("cx", 0).attr("cy", 0).append("title").text("Delete This Node");
                var e = 5;
                xe.append("line").attr("x1", -e).attr("y1", -e).attr("x2", e).attr("y2", e).append("title").text("Delete This Node"), xe.append("line").attr("x1", e).attr("y1", -e).attr("x2", -e).attr("y2", e).append("title").text("Delete This Node"), De.options().useAccuracyHelper() && xe.append("circle").attr("r", 15).attr("cx", 7).attr("cy", -7).classed("superHiddenElement", !0).classed("superOpacityElement", !De.options().showDraggerObject())
            }

            function m() {
                var e;
                if (ne) {
                    ne.selectAll("*").remove(), ie = ne.append("g").classed("linkContainer", !0), ae = ne.append("g").classed("cardinalityContainer", !0), oe = ne.append("g").classed("labelContainer", !0), re = ne.append("g").classed("nodeContainer", !0);
                    var n = ne.append("g").classed("linkContainer", !0);
                    tt = ne.append("g").classed("editContainer", !0), we = ne.append("g").classed("editContainer", !0), n.classed("hidden-in-export", !0), we.classed("hidden-in-export", !0), tt.classed("hidden-in-export", !0), e = ie.append("defs");
                    var r = tt.selectAll(".node").data(nt).enter().append("g").classed("node", !0).classed("hidden-in-export", !0).attr("id", function(e) {
                        return e.id()
                    }).call(me);
                    r.each(function(e) {
                        e.svgRoot(t.select(this)), e.svgPathLayer(n), "shadowClone" === e.type() ? (e.drawClone(), e.hideClone(!0)) : (e.drawNode(), e.hideDragger(!0))
                    }), y(), e = ie.append("defs"), void 0 === pe && (pe = []), se = re.selectAll(".node").data(pe).enter().append("g").classed("node", !0).attr("id", function(e) {
                        return e.id()
                    }).call(me), se.each(function(e) {
                        e.draw(t.select(this))
                    }), void 0 === fe && (fe = []), le = oe.selectAll(".labelGroup").data(fe).enter().append("g").classed("labelGroup", !0).call(me), le.each(function(e) {
                        var n = e.draw(t.select(this));
                        e.property().labelObject(e), n || t.select(this).remove()
                    }), le.each(function(e) {
                        if (this.parentNode && i.isRdfsSubClassOf(e.property())) {
                            var t = this.parentNode;
                            t.insertBefore(this, t.firstChild)
                        }
                    }), void 0 === ve && (ve = []), de = ae.selectAll(".cardinality").data(ve).enter().append("g").classed("cardinality", !0), de.each(function(e) {
                        var n = e.drawCardinality(t.select(this));
                        n || t.select(this).remove()
                    }), void 0 === he && (he = []), ue = ie.selectAll(".link").data(he).enter().append("g").classed("link", !0), ue.each(function(n) {
                        n.draw(t.select(this), e)
                    }), ce = ue.selectAll("path"), f()
                }
            }

            function b() {
                ne && t.select(ne.node().parentNode).remove()
            }

            function x() {
                Ze = [];
                for (var e, t = 0; t < ye.nodes().length; t++) {
                    if (e = ye.nodes()[t], e.id) {
                        Ze[e.id()] = t;
                        var n = e.equivalents();
                        if (n.length > 0)
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                Ze[o.id()] = t
                            }
                    }
                    if (e.property) {
                        Ze[e.property().id()] = t;
                        var a = e.inverse();
                        a && (Ze[a.id()] = t)
                    }
                }
            }

            function E() {
                for (var e, t, n, r = 0; r < ye.nodes().length; r++) n = ye.nodes()[r], n.id && (e = n.getHalos(), e && (t = e.selectAll(".searchResultA"), t.classed("searchResultA", !1), t.classed("searchResultB", !0))), n.property && (e = n.property().getHalos(), e && (t = e.selectAll(".searchResultA"), t.classed("searchResultA", !1), t.classed("searchResultB", !0)))
            }

            function w(e) {
                var t, n = [],
                    r = e.nodes;
                for (t = 0; t < r.length; t++) void 0 !== r[t].labelForCurrentLanguage() && n.push(r[t]);
                var o = e.properties;
                for (t = 0; t < o.length; t++) void 0 !== o[t].labelForCurrentLanguage() && n.push(o[t]);
                Re.setDictionary(n);
                var a = De.options().literalFilter(),
                    i = a.removedNodes(),
                    s = Re.getDictionary(),
                    l = [];
                for (t = 0; t < s.length; t++) {
                    var u, c = s[t];
                    u = c.property ? c.property().id() : c.id();
                    for (var d = !0, p = 0; p < i.length; p++) {
                        var f = i[p];
                        f === u && (d = !1)
                    }
                    d === !0 && l.push(c)
                }
                Re.setDictionary(l)
            }

            function O(e) {
                var n = De.options().loadingModule();
                if (ye.stop(), ye.nodes([]), ye.links([]), Ge = [], Ue = [], $e = 0, t.select("#locateSearchResult").classed("highlighted", !1), t.select("#locateSearchResult").node().title = "Nothing to locate, enter search term.", De.clearGraphData(), e) return void ye.stop();
                Re.parse(Se.data()), ge = {
                    nodes: Re.nodes(),
                    properties: Re.properties()
                }, Fe = !0, He = !0;
                var o = De.options().loadingModule().successfullyLoadedOntology();
                if (ne && o === !0 ? (He = !1, De.options().ontologyMenu().append_bulletPoint("Generating visualization ... "), n.setPercentMode(), ge.nodes.length > 0 ? (ne.style("opacity", "0"), ye.on("tick", c)) : (ne.style("opacity", "1"), ft === !0 ? ye.on("tick", d) : ye.on("tick", p)), ye.start()) : (ye.stop(), De.options().ontologyMenu().append_bulletPoint("Failed to load ontology"), n.setErrorMode()), De.options().clearMetaObject(), De.options().clearGeneralMetaObject(), De.options().editSidebar().clearMetaObjectValue(), void 0 !== Se.data()) {
                    var a = Se.data().header;
                    if (a) {
                        if (a.iri && De.options().addOrUpdateGeneralObjectEntry("iri", a.iri), a.title && De.options().addOrUpdateGeneralObjectEntry("title", a.title), a.author && De.options().addOrUpdateGeneralObjectEntry("author", a.author), a.version && De.options().addOrUpdateGeneralObjectEntry("version", a.version), a.description && De.options().addOrUpdateGeneralObjectEntry("description", a.description), a.prefixList) {
                            var i = a.prefixList;
                            for (var s in i)
                                if (i.hasOwnProperty(s)) {
                                    var l = i[s];
                                    De.options().addPrefix(s, l)
                                }
                        }
                        if (a.other) {
                            var u = a.other;
                            for (var f in u)
                                if (u.hasOwnProperty(f)) {
                                    var h = u[f];
                                    h.hasOwnProperty("identifier") && h.hasOwnProperty("value") && De.options().addOrUpdateMetaObjectEntry(h.identfier, h.value)
                                }
                        }
                    }
                }
                var v = r.clone(ge);
                Se.filterModules().forEach(function(e) {
                    v = P(e, v, !0)
                }), w(ge), Re.parseSettings(), qe = Re.settingsImported(), We = !0, Re.settingsImportGraphZoomAndTranslation() === !0 && (We = !1), De.options().searchMenu().requestDictionaryUpdate(), De.options().editSidebar().updateGeneralOntologyInfo(), De.options().editSidebar().updatePrefixUi(), De.options().editSidebar().updateElementWidth()
            }

            function C() {
                he = a.createLinks(ve), fe = he.map(function(e) {
                    return e.label()
                }), _(pe, he), j(pe, fe, he)
            }

            function k() {
                var e = Se.literalFilter().enabled();
                De.executeEmptyLiteralFilter(), Se.literalFilter().enabled(e);
                var t = r.clone(ge);
                Se.filterModules().forEach(function(e) {
                    t = P(e, t)
                }), Se.focuserModule().handle(void 0, !0), pe = t.nodes, ve = t.properties, he = a.createLinks(ve), fe = he.map(function(e) {
                    return e.label()
                }), _(pe, he), j(pe, fe, he)
            }

            function P(e, t, n) {
                return he = a.createLinks(t.properties), _(t.nodes, he), n && e.initialize && e.initialize(t.nodes, t.properties), e.filter(t.nodes, t.properties), {
                    nodes: e.filteredNodes(),
                    properties: e.filteredProperties()
                }
            }

            function _(e, t) {
                for (var n = 0, r = e.length; n < r; n++) {
                    for (var o = e[n], a = [], i = 0, s = t.length; i < s; i++) {
                        var l = t[i];
                        l.domain() !== o && l.range() !== o || a.push(l)
                    }
                    o.links(a)
                }
            }

            function j(e, t, n) {
                var r = [];
                n.forEach(function(e) {
                    r = r.concat(e.linkParts())
                });
                var o = [].concat(e).concat(t);
                M(ye.nodes(), t), ye.nodes(o).links(r)
            }

            function M(e, t) {
                t.forEach(function(t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r.equals(t)) {
                            t.x = r.x, t.y = r.y, t.px = r.px, t.py = r.py;
                            break
                        }
                    }
                })
            }

            function D() {
                Me = Me.scaleExtent([Se.minMagnification(), Se.maxMagnification()]), ne && Me.event(ne), ye.charge(function(e) {
                    var t = Se.charge();
                    return i.isLabel(e) && (t *= .8), t
                }).size([Se.width(), Se.height()]).linkDistance(L).gravity(Se.gravity()).linkStrength(Se.linkStrength()), ye.nodes().forEach(function(e) {
                    e.frozen(Ne)
                })
            }

            function L(e) {
                var t = e.link();
                if (t.isLoop()) return Se.loopDistance();
                var n = A(t) / 2;
                return n += e.domain().actualRadius(), n += e.range().actualRadius()
            }

            function A(e) {
                return i.isDatatype(e.domain()) || i.isDatatype(e.range()) ? Se.datatypeDistance() : Se.classDistance()
            }

            function T() {
                if (Ue && Ue.length > 0)
                    for (var e = ye.nodes(), t = 0; t < Ue.length; t++) {
                        var n = e[Ue[t]];
                        if (n) {
                            if (n.property && n.property().inverse) {
                                var r = De.options().searchMenu().getSearchString().toLowerCase(),
                                    o = n.property().labelForCurrentLanguage().toLowerCase();
                                if (o === r) I(n);
                                else if (n.property().removeHalo(), n.property().inverse() && (n.property().inverse().getHalos() || n.property().inverse().drawHalo(), I(n, !0)), n.property().equivalents()) {
                                    for (var a = n.property().equivalents(), i = 0; i < a.length; i++) a[i].getHalos() || a[i].drawHalo();
                                    n.property().getHalos() || n.property().drawHalo(), I(n, !1)
                                }
                            }
                            I(n)
                        }
                    }
            }

            function S(e, t, n, r) {
                var o = n[0] + e * r,
                    a = n[1] + t * r;
                return {
                    x: o,
                    y: a
                }
            }

            function R(e, t, n, r) {
                var o = (e - n[0]) / r,
                    a = (t - n[1]) / r;
                return {
                    x: o,
                    y: a
                }
            }

            function I(e, t) {
                var n = e,
                    r = De.options().width(),
                    o = De.options().height(),
                    a = S(e.x, e.y, Ve, Be),
                    i = !1;
                t && t === !0 && (i = !0, a = S(e.x, e.y + 20, Ve, Be));
                var s, l, u, c, d, p = a.x,
                    f = a.y,
                    h = !1,
                    v = 0,
                    g = 0,
                    y = 15;
                if (e.property && i === !0 && (e.property().inverse() ? u = e.property().inverse().getHalos().select("rect") : e.property().getHalos() ? u = e.property().getHalos().select("rect") : (e.property().drawHalo(), u = e.property().getHalos().select("rect")), u.classed("hidden", !0), e.property().inverse() ? e.property().inverse().getHalos() && (l = e.property().inverse().getHalos().select("circle")) : l = e.property().getHalos().select("circle"), null === l.node() && (d = e.property().inverse().width() + 15, l = e.property().inverse().getHalos().append("circle").classed("searchResultB", !0).classed("searchResultA", !1).attr("r", d + 15)), s = l, h = !0, n = e.property().inverse()), e.id) {
                    if (!e.getHalos()) return;
                    s = e.getHalos().select("rect"), null === s.node() ? (h = !1, l = e.getHalos().select("circle"), c = e.actualRadius(), l.attr("r", c + y), s = l) : (h = !0, u = e.getHalos().select("rect"), u.classed("hidden", !0), l = e.getHalos().select("circle"), null === l.node() && (d = e.width(), l = e.getHalos().append("circle").classed("searchResultB", !0).classed("searchResultA", !1).attr("r", d + y)), s = l)
                }
                if (e.property && !t) {
                    if (!e.property().getHalos()) return;
                    u = e.property().getHalos().select("rect"), u.classed("hidden", !0), l = e.property().getHalos().select("circle"), null === l.node() && (d = e.property().width(), l = e.property().getHalos().append("circle").classed("searchResultB", !0).classed("searchResultA", !1).attr("r", d + 15)), s = l, h = !0, n = e.property()
                }
                if (p < 0 || p > r || f < 0 || f > o) {
                    p < 0 && f < 0 ? (v = 0, g = 0) : p > 0 && p < r && f < 0 ? (v = p, g = 0) : p > r && f < 0 ? (v = r, g = 0) : p > r && f > 0 && f < o ? (v = r, g = f) : p > r && f > o ? (v = r, g = o) : p > 0 && p < r && f > o ? (v = p, g = o) : p < 0 && f > o ? (v = 0, g = o) : p < 0 && f > 0 && f < o && (v = 0, g = f), n.getHalos().select("rect").classed("searchResultA", !1), n.getHalos().select("circle").classed("searchResultA", !1), n.getHalos().select("rect").classed("searchResultB", !0), n.getHalos().select("circle").classed("searchResultB", !0), s.classed("hidden", !1);
                    var m = v - p,
                        b = g - f,
                        x = m * m + b * b;
                    x = Math.sqrt(x);
                    var E = m / x,
                        w = b / x;
                    x += 20;
                    var O = E * x + p,
                        C = w * x + f,
                        k = (O - Ve[0]) / Be,
                        P = (C - Ve[1]) / Be,
                        _ = k - e.x,
                        j = P - e.y;
                    i === !0 && (j = P - e.y - 20), i === !1 && e.property && e.property().inverse() && (j = P - e.y + 20);
                    var M = Math.sqrt(_ * _ + j * j);
                    s = n.getHalos().select("circle"), h ? (c = .5 * n.width(), M < c && (M = c), s.attr("r", M)) : (c = e.actualRadius() + y, M < c && (M = c), s.attr("r", M))
                } else if (c = e.actualRadius() + 15, h) {
                    s = n.getHalos().select("rect"), s.classed("hidden", !1);
                    var D = n.getHalos().select("circle");
                    D.classed("hidden", !0), n.getHalos().select("rect").classed("hidden", !1), n.getHalos().select("circle").classed("hidden", !0)
                } else s.attr("r", c)
            }

            function N(e, t, n) {
                return Be = De.options().height() / e[2], Ve = [t - e[0] * Be, n - e[1] * Be], T(), Me.translate(Ve), Me.scale(Be), De.options().zoomSlider().updateZoomSliderValue(Be), "translate(" + Ve[0] + "," + Ve[1] + ")scale(" + Be + ")"
            }

            function F(e) {
                var n = .5 * De.options().width(),
                    r = .5 * De.options().height(),
                    o = H(n, r, Ve, Be),
                    a = [o.x, o.y, De.options().height() / Be],
                    i = Math.max(Xe + .5 * Xe, Ye),
                    s = [e.x, e.y, De.options().height() / i],
                    l = t.interpolateZoom(a, s),
                    u = l.duration;
                u > 2500 && (u = 2500), ne.attr("transform", N(a, n, r)).transition().duration(u).attrTween("transform", function() {
                    return function(e) {
                        return N(l(e), n, r)
                    }
                }).each("end", function() {
                    ne.attr("transform", "translate(" + Ve + ")scale(" + Be + ")"), Me.translate(Ve), Me.scale(Be), T()
                })
            }

            function H(e, t, n, r) {
                var o, a, i = r[0];
                return i ? (o = (e - n[0]) / i, a = (t - n[1]) / i) : (o = (e - n[0]) / r, a = (t - n[1]) / r), {
                    x: o,
                    y: a
                }
            }

            function B(e, t) {
                var n = De.options().width(),
                    r = De.options().height(),
                    o = S(e.x, e.y, Ve, Be),
                    a = o.x,
                    i = o.y,
                    s = !(a < 0 || a > n || i < 0 || i > r);
                return s
            }

            function W() {
                Et.hideDragger(!0), wt.hideDragger(!0), Ot.hideClone(!0), xt.hideDragger(!0), Ee && Ee.classed("hidden", !0), xe && xe.classed("hidden", !0), rt && rt.pinned() === !1 && (rt.locked(De.paused()), rt.frozen(De.paused())), ot && ot.pinned() === !1 && (ot.locked(De.paused()), ot.frozen(De.paused()))
            }

            function z(e) {
                return t.map(e.values(), function(e) {
                    return (new e).type().toLowerCase()
                })
            }

            function V(e) {
                var n, r, o = !0,
                    a = t.select("#defaultClass").node().title;
                r = mt.get(a.toLowerCase()), n = new r(De);
                var i = !1;
                "owl:Thing" === a ? n.label("Thing") : (n.label("NewClass"), i = !0), n.x = e.x, n.y = e.y, n.px = n.x, n.py = n.y, n.id("Class" + st++), n.baseIri(t.select("#iriEditor").node().value), n.iri(n.baseIri() + n.id()), q(n, o), Se.focuserModule().handle(n, !0), n.frozen(De.paused()), n.locked(De.paused()), n.enableEditing(i)
            }

            function q(e) {
                ge.nodes.push(e), pe.indexOf(e) === -1 && pe.push(e), w(ge), De.getUpdateDictionary(), De.fastUpdate()
            }

            function U(e, n, r) {
                var o = t.select("#defaultProperty").node().title;
                if (De.sanityCheckProperty(e, n, o) === !1) return !1;
                var a = bt.get(o.toLowerCase()),
                    i = new a(De);
                if (i.id("objectProperty" + it++), i.domain(e), i.range(n), i.label("newObjectProperty"), i.baseIri(t.select("#iriEditor").node().value), i.iri(i.baseIri() + i.id()), De.propertyCheckExistenceChecker(i, e, n) === !1) return !1;
                var s = !1;
                "owl:objectProperty" === o && (s = !0);
                var l = .49 * (e.x + n.x),
                    u = .49 * (e.y + n.y);
                if (e === n) {
                    var c = r[0] - e.x,
                        d = r[1] - e.y,
                        p = Math.sqrt(c * c + d * d),
                        f = c / p,
                        h = d / p;
                    isNaN(p) && (f = 0, h = -1);
                    var v = 2 * e.actualRadius() + 50;
                    l = e.x + v * f, u = e.y + v * h
                }
                e.addProperty(i), n.addProperty(i), ge.properties.push(i), ve.indexOf(i) === -1 && ve.push(i), De.fastUpdate(), i.labelObject().x = l, i.labelObject().px = l, i.labelObject().y = u, i.labelObject().py = u, i.frozen(De.paused()), i.locked(De.paused()), e.frozen(De.paused()), e.locked(De.paused()), n.frozen(De.paused()), n.locked(De.paused()), w(ge), De.getUpdateDictionary(), Se.focuserModule().handle(i), De.activateHoverElementsForProperties(!0, i, !1, Ke), i.labelObject().increasedLoopAngle = !0, i.enableEditing(s)
            }

            function G() {
                var e = t.event.timeStamp,
                    n = 1;
                return t.event && t.event.touches && t.event.touches.length && (n = t.event.touches.length), e - be < 300 && 1 === n && (t.event.stopPropagation(), lt === !0) ? (t.event.preventDefault(), t.event.stopPropagation(), be = e, !0) : (be = e, !1)
            }

            function Z() {
                pt = !0;
                var e = t.event.timeStamp;
                return e - be < 300 && 1 === t.event.touches.length ? (t.event.stopPropagation(), void(lt === !0 ? (t.event.preventDefault(), t.event.stopPropagation(), Me.translate(Ve), Me.scale(Be), De.modified_dblTouchFunction()) : (pt = !1, et && et()))) : (pt = !1, be = e, void(et && et()))
            }

            function $(e) {
                if (e !== !0) {
                    if (rt) {
                        if (rt.editingTextElement === !0) return;
                        Oe = setTimeout(function() {
                            xe.classed("hidden", !0), Ee.classed("hidden", !0), xt.hideDragger(!0), rt && rt.pinned() === !1 && De.paused() === !1 && rt.editingTextElement === !1 && (rt.frozen(!1), rt.locked(!1))
                        }, 1e3)
                    }
                    if (ot) {
                        if (ot.editingTextElement === !0) return;
                        Oe = setTimeout(function() {
                            xe.classed("hidden", !0), Ee.classed("hidden", !0), xt.hideDragger(!0), Et.hideDragger(!0), wt.hideDragger(!0), Ot.hideClone(!0), ot && ot.focused() === !0 && De.options().drawPropertyDraggerOnHover() === !0 && (ot.labelObject().increasedLoopAngle = !1, p()), ot && ot.pinned() === !1 && De.paused() === !1 && ot.editingTextElement === !1 && (ot.frozen(!1), ot.locked(!1))
                        }, 1e3)
                    }
                }
            }

            function X() {
                xt.nodeElement.classed("classDraggerNodeHovered", !0), xt.nodeElement.classed("classDraggerNode", !1), J()
            }

            function Y() {
                xt.nodeElement.classed("classDraggerNodeHovered", !1), xt.nodeElement.classed("classDraggerNode", !0), K()
            }

            function J(e) {
                e !== !0 && clearTimeout(Oe)
            }

            function K(e) {
                if (rt) {
                    if (De.ignoreOtherHoverEvents() === !0 || e === !0 || rt.editingTextElement === !0) return;
                    Oe = setTimeout(function() {
                        De.isADraggerActive() !== !0 && (xe.classed("hidden", !0), Ee.classed("hidden", !0), xt.hideDragger(!0), rt && rt.pinned() === !1 && De.paused() === !1 && (rt.frozen(!1), rt.locked(!1)))
                    }, 1e3)
                }
                if (ot) {
                    if (De.ignoreOtherHoverEvents() === !0 || e === !0 || ot.editingTextElement === !0) return;
                    Oe = setTimeout(function() {
                        De.isADraggerActive() !== !0 && (xe.classed("hidden", !0), Ee.classed("hidden", !0), xt.hideDragger(!0), ot && ot.pinned() === !1 && De.paused() === !1 && (ot.frozen(!1), ot.locked(!1)))
                    }, 1e3)
                }
            }

            function Q(e) {
                var t, n = 0;
                if ("round" === e.renderType()) {
                    var r = .5 * Math.sqrt(2),
                        o = r * e.actualRadius(),
                        a = r * e.actualRadius();
                    t = e.x - o, n = e.y + a, Ee.attr("transform", "translate(" + t + "," + n + ")")
                }
            }

            function ee(e) {
                var t, n = 0;
                if ("round" === e.renderType()) {
                    var r = .5 * Math.sqrt(2),
                        o = r * e.actualRadius(),
                        a = r * e.actualRadius();
                    t = e.x + o, n = e.y - a
                } else t = e.x + .5 * e.width() + 6, n = e.y - .5 * e.height() - 6;
                xe.attr("transform", "translate(" + t + "," + n + ")")
            }

            function te(e, t) {
                if (e && e.labelElement()) {
                    var n = [e.labelObject().x, e.labelObject().y],
                        r = parseFloat(e.getShapeElement().attr("width")),
                        o = parseFloat(e.getShapeElement().attr("height")),
                        a = n[0] + .5 * r + 6,
                        i = n[1] - .5 * o - 6;
                    "translate(0,15)" === e.labelElement().attr("transform") && (i += 15), "translate(0,-15)" === e.labelElement().attr("transform") && (i -= 15), xe.attr("transform", "translate(" + a + "," + i + ")")
                } else xe.classed("hidden", !0)
            }
            var ne, re, oe, ae, ie, se, le, ue, ce, de, pe, fe, he, ve, ge, ye, me, be, xe, Ee, we, Oe, Ce, ke, Pe, _e, je, Me, De = {},
                Le = 20,
                Ae = 10,
                Te = t.svg.line().x(function(e) {
                    return e.x
                }).y(function(e) {
                    return e.y
                }).interpolate("cardinal"),
                Se = n(64)(),
                Re = n(65)(De),
                Ie = "default",
                Ne = !1,
                Fe = !0,
                He = !1,
                Be = 1,
                We = !1,
                ze = !1,
                Ve = [0, 0],
                qe = !1,
                Ue = [],
                Ge = [],
                Ze = [],
                $e = 0,
                Xe = 1,
                Ye = .8,
                Je = -1,
                Ke = !1,
                Qe = null,
                et = null,
                tt = null,
                nt = [],
                rt = null,
                ot = null,
                at = !1,
                it = 0,
                st = 0,
                lt = !0,
                ut = t.select("#FPS_Statistics"),
                ct = !1,
                dt = !1,
                pt = !1,
                ft = !1,
                ht = !1,
                vt = !0,
                gt = !1,
                yt = !1,
                mt = z(s),
                bt = z(l),
                xt = n(68)(De),
                Et = n(69)(De),
                wt = n(70)(De),
                Ot = n(71)(De);
            De.math = function() {
                return o
            }, De.isEditorMode = function() {
                return lt
            }, De.getGlobalDOF = function() {
                return Je
            }, De.setGlobalDOF = function(e) {
                Je = e
            }, De.updateZoomSliderValueFromOutside = function() {
                De.options().zoomSlider().updateZoomSliderValue(Be)
            }, De.setDefaultZoom = function(e) {
                Xe = e, De.reset(), De.options().zoomSlider().updateZoomSliderValue(Xe)
            }, De.setTargetZoom = function(e) {
                Ye = e
            }, De.graphOptions = function() {
                return Se
            }, De.scaleFactor = function() {
                return Be
            }, De.translation = function() {
                return Ve
            }, De.graphNodeElements = function() {
                return se
            }, De.graphLabelElements = function() {
                return fe
            }, De.graphLinkElements = function() {
                return he
            }, De.setSliderZoom = function(e) {
                var n = .5 * De.options().width(),
                    r = .5 * De.options().height(),
                    o = H(n, r, Ve, Be),
                    a = [o.x, o.y, De.options().height() / Be],
                    i = [o.x, o.y, De.options().height() / e],
                    s = t.interpolateZoom(a, i);
                ne.attr("transform", N(a, n, r)).transition().duration(1).attrTween("transform", function() {
                    return function(e) {
                        return N(s(e), n, r)
                    }
                }).each("end", function() {
                    ne.attr("transform", "translate(" + Ve + ")scale(" + Be + ")"), Me.translate(Ve), Me.scale(Be), De.options().zoomSlider().updateZoomSliderValue(Be)
                })
            }, De.setZoom = function(e) {
                Me.scale(e)
            }, De.setTranslation = function(e) {
                Me.translate([e[0], e[1]])
            }, De.options = function() {
                return Se
            }, De.getUpdateDictionary = function() {
                return Re.getDictionary()
            }, De.language = function(e) {
                return arguments.length ? (Ie !== e && (Ie = e || "default", m(), p(), De.options().searchMenu().requestDictionaryUpdate(), De.resetSearchHighlight()), De) : Ie
            }, De.lazyRefresh = function() {
                m(), p()
            }, De.adjustingGraphSize = function(e) {
                gt = e
            }, De.showReloadButtonAfterLayoutOptimization = function(e) {
                yt = e
            }, De.showEditorHintIfNeeded = function() {
                ht === !1 && lt === !0 && (ht = !0, De.options().warningModule().showEditorHint())
            }, De.setForceTickFunctionWithFPS = function() {
                ft = !0, ye && ct === !0 && ye.on("tick", d)
            }, De.setDefaultForceTickFunction = function() {
                ft = !1, ye && ct === !0 && ye.on("tick", p)
            }, De.updatePropertyDraggerElements = function(e) {
                "owl:DatatypeProperty" !== e.type() ? (Ot.setParentProperty(e), Et.setParentProperty(e), Et.hideDragger(!1), Et.addMouseEvents(), wt.setParentProperty(e), wt.hideDragger(!1), wt.addMouseEvents()) : (Et.hideDragger(!0), wt.hideDragger(!0), Ot.hideClone(!0))
            }, De.getUnfilteredData = function() {
                return ge
            }, De.getClassDataForTtlExport = function() {
                for (var e = ge.nodes, t = [], n = 0; n < e.length; n++) "rdfs:Literal" !== e[n].type() && "rdfs:Datatype" !== e[n].type() && "owl:Thing" !== e[n].type() && t.push(e[n]);
                return t
            }, De.getPropertyDataForTtlExport = function() {
                for (var e = [], t = ge.properties, n = 0; n < t.length; n++) "owl:ObjectProperty" === t[n].type() || "owl:DatatypeProperty" === t[n].type() || "owl:ObjectProperty" === t[n].type() ? e.push(t[n]) : ("rdfs:subClassOf" === t[n].type() && (t[n].baseIri("http://www.w3.org/2000/01/rdf-schema#"), t[n].iri("http://www.w3.org/2000/01/rdf-schema#subClassOf")), "owl:disjointWith" === t[n].type() && (t[n].baseIri("http://www.w3.org/2002/07/owl#"), t[n].iri("http://www.w3.org/2002/07/owl#disjointWith")));
                return e
            }, De.getAxiomsForTtlExport = function() {
                for (var e = [], t = ge.properties, n = 0; n < t.length; n++) "owl:ObjectProperty" === t[n].type() || "owl:DatatypeProperty" === t[n].type() || "owl:ObjectProperty" === t[n].type() || "rdfs:subClassOf" === t[n].type();
                return e
            }, De.getUnfilteredData = function() {
                return ge
            }, De.getClassDataForTtlExport = function() {
                for (var e = ge.nodes, t = [], n = 0; n < e.length; n++) "rdfs:Literal" !== e[n].type() && "rdfs:Datatype" !== e[n].type() && "owl:Thing" !== e[n].type() && t.push(e[n]);
                return t
            }, u(), De.updateCanvasContainerSize = function() {
                if (ne) {
                    var e = t.selectAll(".vowlGraph");
                    e.attr("width", Se.width()), e.attr("height", Se.height()), ne.attr("transform", "translate(" + Ve + ")scale(" + Be + ")")
                }
            }, De.start = function() {
                ye.stop(), O(!0), g(), De.update(!0), De.options().loadingModule().successfullyLoadedOntology() === !1 && De.options().loadingModule().setErrorMode()
            }, De.updateStyle = function() {
                D(), De.options().loadingModule().successfullyLoadedOntology() === !1 ? ye.stop() : ye.start()
            }, De.reload = function() {
                O(), De.update()
            }, De.load = function() {
                ye.stop(), O(), k();
                for (var e = 0; e < fe.length; e++) {
                    var t = fe[e];
                    t.property().x && t.property().y && (t.x = t.property().x, t.y = t.property().y, t.px = t.x, t.py = t.y)
                }
                De.update()
            }, De.fastUpdate = function() {
                C(), x(), ye.start(), m(), De.updatePulseIds(Ge), D(), E()
            }, De.update = function(e) {
                var t = De.options().loadingModule().successfullyLoadedOntology();
                return t === !1 && e && e === !0 ? void De.options().loadingModule().collapseDetails() : void(t !== !1 && (vt = !1, k(), x(), ye.start(), m(), De.updatePulseIds(Ge), D(), E()))
            }, De.paused = function(e) {
                return arguments.length ? (Ne = e, De.updateStyle(), De) : Ne
            }, De.reset = function() {
                var e = .5 * De.options().width(),
                    t = .5 * De.options().height(),
                    n = e - Xe * e,
                    r = t - Xe * t;
                Me.translate([n, r]).scale(Xe)
            }, De.zoomOut = function() {
                var e = Se.minMagnification(),
                    n = Se.maxMagnification(),
                    r = (n - e) / 10,
                    o = Be - r;
                o < e && (o = e);
                var a = .5 * De.options().width(),
                    i = .5 * De.options().height(),
                    s = H(a, i, Ve, Be),
                    l = [s.x, s.y, De.options().height() / Be],
                    u = [s.x, s.y, De.options().height() / o],
                    c = t.interpolateZoom(l, u);
                ne.attr("transform", N(l, a, i)).transition().duration(250).attrTween("transform", function() {
                    return function(e) {
                        return N(c(e), a, i)
                    }
                }).each("end", function() {
                    ne.attr("transform", "translate(" + Ve + ")scale(" + Be + ")"), Me.translate(Ve), Me.scale(Be), T(), Se.zoomSlider().updateZoomSliderValue(Be)
                })
            }, De.zoomIn = function() {
                var e = Se.minMagnification(),
                    n = Se.maxMagnification(),
                    r = (n - e) / 10,
                    o = Be + r;
                o > n && (o = n);
                var a = .5 * De.options().width(),
                    i = .5 * De.options().height(),
                    s = H(a, i, Ve, Be),
                    l = [s.x, s.y, De.options().height() / Be],
                    u = [s.x, s.y, De.options().height() / o],
                    c = t.interpolateZoom(l, u);
                ne.attr("transform", N(l, a, i)).transition().duration(250).attrTween("transform", function() {
                    return function(e) {
                        return N(c(e), a, i)
                    }
                }).each("end", function() {
                    ne.attr("transform", "translate(" + Ve + ")scale(" + Be + ")"), Me.translate(Ve), Me.scale(Be), T(), Se.zoomSlider().updateZoomSliderValue(Be)
                })
            };
            var Ct = null;
            De.clearAllGraphData = function() {
                Ct = De.graphNodeElements() && De.graphNodeElements().length > 0 ? De.options().exportMenu().createJSON_exportObject() : null, ye.stop(), ge && (ge.nodes = [], ge.properties = [])
            }, De.getCachedJsonObj = function() {
                return Ct
            }, De.clearGraphData = function() {
                ye.stop();
                var e = De.options().sidebar();
                e && e.clearOntologyInformation(), ne && g()
            }, De.updateProgressBarMode = function() {
                var e = De.options().loadingModule(),
                    t = e.getProgressBarMode();
                switch (t) {
                    case 0:
                        e.setErrorMode();
                        break;
                    case 1:
                        e.setBusyMode();
                        break;
                    case 2:
                        e.setPercentMode();
                        break;
                    default:
                        e.setPercentMode()
                }
            }, De.handleOnLoadingError = function() {
                ye.stop(), De.clearGraphData(), De.options().ontologyMenu().append_bulletPoint("Failed to load ontology"), t.select("#progressBarValue").node().innherHTML = "", t.select("#progressBarValue").classed("busyProgressBar", !1), De.options().loadingModule().setErrorMode(), De.options().loadingModule().showErrorDetailsMessage()
            }, De.animateDynamicLabelWidth = function() {
                var e, t = Se.dynamicLabelWidth();
                for (e = 0; e < pe.length; e++) {
                    var n = pe[e];
                    i.isDatatype(n) && n.animateDynamicLabelWidth(t)
                }
                for (e = 0; e < ve.length; e++) ve[e].animateDynamicLabelWidth(t)
            }, De.zoomToElementInGraph = function(e) {
                F(e)
            }, De.updateHaloRadius = function(e) {
                I(e)
            }, De.locateSearchResult = function() {
                if (Ue && Ue.length > 0) {
                    if (ze === !0) return;
                    var e = ye.nodes()[Ue[$e]];
                    $e++, $e %= Ue.length, e.id && e.foreground(), e.property && e.property().foreground(), F(e)
                }
            }, De.resetSearchHighlight = function() {
                Ue = [], Ge = [];
                var e, t = ge.nodes,
                    n = ge.properties;
                for (e = 0; e < t.length; e++) {
                    var r = t[e];
                    r.removeHalo && r.removeHalo()
                }
                for (e = 0; e < n.length; e++) {
                    var o = n[e];
                    o.removeHalo && o.removeHalo()
                }
            }, De.updatePulseIds = function(e) {
                Ue = [];
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = Ze[r];
                    if (void 0 !== o) {
                        var a = ye.nodes()[o];
                        a.id && Ue.indexOf(o) === -1 && Ue.push(o), a.property && Ue.indexOf(o) === -1 && Ue.push(o)
                    }
                }
                $e = 0, Ue.length > 0 ? (t.select("#locateSearchResult").classed("highlighted", !0), t.select("#locateSearchResult").node().title = "Locate search term") : (t.select("#locateSearchResult").classed("highlighted", !1), t.select("#locateSearchResult").node().title = "Nothing to locate, enter search term.")
            }, De.highLightNodes = function(e) {
                if (0 !== e.length) {
                    Ue = [], Ge = e;
                    for (var n = [], r = 0; r < e.length; r++) {
                        var o = e[r],
                            a = Ze[o];
                        if (void 0 !== a) {
                            var i = ye.nodes()[a];
                            i.id && Ue.indexOf(a) === -1 && (Ue.push(a), i.foreground(), i.drawHalo()), i.property && Ue.indexOf(a) === -1 && (Ue.push(a), i.property().foreground(), i.property().drawHalo())
                        } else n.push(o)
                    }
                    n.length === e.length;
                    var s = ge.nodes,
                        l = ge.properties;
                    for (r = 0; r < n.length; r++) {
                        for (var u = n[r], c = 0; c < s.length; c++) {
                            var d = s[c].id();
                            d === u && s[c].drawHalo()
                        }
                        for (var p = 0; p < l.length; p++) {
                            var f = l[p].id();
                            f === u && l[p].drawHalo()
                        }
                    }
                    n.length === e.length ? t.select("#locateSearchResult").classed("highlighted", !1) : t.select("#locateSearchResult").classed("highlighted", !0), $e = 0, T()
                }
            }, De.hideHalos = function() {
                var e = t.selectAll(".searchResultA,.searchResultB");
                return e.classed("hidden", !0), e
            }, De.getBoundingBoxForTex = function() {
                var e = De.hideHalos(),
                    t = ne.node().getBoundingClientRect();
                e.classed("hidden", !1);
                for (var n, r = De.options().width(), o = De.options().height(), a = H(0, 0, Ve, Be), i = H(r, o, Ve, Be), s = H(t.left, t.top, Ve, Be), l = H(t.right, t.bottom, Ve, Be), u = Math.max(s.x, a.x), c = Math.max(s.y, a.y), d = Math.min(l.x, i.x), p = Math.min(l.y, i.y), f = ye.nodes(), h = f.length, v = {
                        tx: 1e12,
                        ty: 1e12,
                        bx: -1e12,
                        by: -1e12
                    }, g = 0; g < h; g++) {
                    var y = f[g];
                    if (y)
                        if (y.property) {
                            if (B(y, !0)) {
                                if (void 0 === y.property().labelElement()) continue;
                                n = y.property().labelElement().node().getBoundingClientRect(), n && (v.tx = Math.min(v.tx, n.left), v.bx = Math.max(v.bx, n.right), v.ty = Math.min(v.ty, n.top), v.by = Math.max(v.by, n.bottom))
                            }
                        } else B(y, !1) && (n = y.nodeElement().node().getBoundingClientRect(), n && (v.tx = Math.min(v.tx, n.left), v.bx = Math.max(v.bx, n.right), v.ty = Math.min(v.ty, n.top), v.by = Math.max(v.by, n.bottom)))
                }
                var m = H(v.tx, v.ty, Ve, Be),
                    b = H(v.bx, v.by, Ve, Be);
                return u = Math.max(u, m.x), c = Math.max(c, m.y), d = Math.min(d, b.x), p = Math.min(p, b.y), [u, -c, d, -p]
            };
            var kt = function() {
                var e = ne.node().getBoundingClientRect(),
                    n = 50,
                    r = H(e.left, e.top, Ve, Be),
                    o = H(e.right, e.bottom, Ve, Be),
                    a = De.options().width();
                De.options().leftSidebar().isSidebarVisible() === !0 && (a -= 200);
                var i = De.options().height();
                r.x += n, r.y -= n, o.x -= n, o.y += n;
                var s = o.x - r.x,
                    l = o.y - r.y,
                    u = .5 * (r.x + o.x),
                    c = .5 * (r.y + o.y),
                    d = .5 * a,
                    p = .5 * i;
                De.options().leftSidebar().isSidebarVisible() === !0 && (d += 200);
                var f = H(d, p, Ve, Be),
                    h = 1,
                    v = a / s,
                    g = i / l;
                h = v < g ? v : g, h > Me.scaleExtent()[1] && (h = Me.scaleExtent()[1]), h < Me.scaleExtent()[0] && (h = Me.scaleExtent()[0]);
                var y = [f.x, f.y, i / Be],
                    m = [u, c, i / h],
                    b = t.interpolateZoom(y, m);
                return [b, d, p]
            };
            return De.forceRelocationEvent = function(e) {
                var n = De.hideHalos(),
                    r = ne.node().getBoundingClientRect();
                n.classed("hidden", !1);
                var o = 50,
                    a = H(r.left, r.top, Ve, Be),
                    i = H(r.right, r.bottom, Ve, Be),
                    s = De.options().width();
                De.options().leftSidebar().isSidebarVisible() === !0 && (s -= 200);
                var l = De.options().height();
                a.x += o, a.y -= o, i.x -= o, i.y += o;
                var u = i.x - a.x,
                    c = i.y - a.y,
                    d = .5 * (a.x + i.x),
                    p = .5 * (a.y + i.y),
                    f = .5 * s,
                    h = .5 * l;
                De.options().leftSidebar().isSidebarVisible() === !0 && (f += 200);
                var v = H(f, h, Ve, Be),
                    g = 1,
                    y = s / u,
                    m = l / c;
                g = y < m ? y : m, g > Me.scaleExtent()[1] && (g = Me.scaleExtent()[1]), g < Me.scaleExtent()[0] && (g = Me.scaleExtent()[0]);
                var b = [v.x, v.y, l / Be],
                    x = [d, p, l / g],
                    E = t.interpolateZoom(b, x),
                    w = E.duration;
                w > 2500 && (w = 2500), ne.attr("transform", N(b, f, h)).transition().duration(w).attrTween("transform", function() {
                    return function(t) {
                        if (e) {
                            var n = kt(),
                                r = n[0](t);
                            return N(r, f, h)
                        }
                        return N(E(t), f, h)
                    }
                }).each("end", function() {
                    e || (ne.attr("transform", "translate(" + Ve + ")scale(" + Be + ")"), Me.translate(Ve), Me.scale(Be), De.options().zoomSlider().updateZoomSliderValue(Be))
                })
            }, De.isADraggerActive = function() {
                return xt.mouseButtonPressed === !0 || wt.mouseButtonPressed === !0 || Et.mouseButtonPressed === !0
            }, De.changeNodeType = function(e) {
                var n = t.select("#typeEditor").node().value;
                if (De.classesSanityCheck(e, n) === !1) return void De.options().editSidebar().updateSelectionInformation(e);
                var r = mt.get(n.toLowerCase()),
                    o = new r(De);
                if (o.x = e.x, o.y = e.y, o.px = e.x, o.py = e.y, o.id(e.id()), o.copyInformation(e), "owl:Thing" === n ? o.label("Thing") : i.isDatatype(e) === !1 && (void 0 !== e.backupLabel() ? o.label(e.backupLabel()) : void 0 !== o.backupLabel() ? o.label(o.backupLabel()) : o.label("NewClass")), "rdfs:Datatype" === n)
                    if ("undefined" === o.dType()) o.label("undefined");
                    else {
                        var a = o.dType().split(":")[1];
                        o.label(a)
                    }
                var s;
                for (s = 0; s < ge.properties.length; s++) ge.properties[s].domain() === e && ge.properties[s].domain(o), ge.properties[s].range() === e && ge.properties[s].range(o);
                for (s = 0; s < ve.length; s++) ve[s].domain() === e && ve[s].domain(o), ve[s].range() === e && ve[s].range(o);
                var l = ge.nodes.indexOf(e);
                l !== -1 && ge.nodes.splice(l, 1), l = pe.indexOf(e), l !== -1 && pe.splice(l, 1), q(o), Se.focuserModule().handle(o),
                    w(ge), De.getUpdateDictionary(), e = null
            }, De.changePropertyType = function(e) {
                var n = t.select("#typeEditor").node().value;
                if (De.sanityCheckProperty(e.domain(), e.range(), n) === !1) return !1;
                var r = bt.get(n.toLowerCase()),
                    o = new r(De);
                if (o.copyInformation(e), o.id(e.id()), e.domain().removePropertyElement(e), e.range().removePropertyElement(e), o.domain(e.domain()), o.range(e.range()), void 0 !== e.backupLabel() ? o.label(e.backupLabel()) : o.label("newObjectProperty"), "rdfs:subClassOf" === o.type() ? o.iri("http://www.w3.org/2000/01/rdf-schema#subClassOf") : "http://www.w3.org/2000/01/rdf-schema#subClassOf" === e.iri() && o.iri(De.options().getGeneralMetaObjectProperty("iri") + o.id()), De.propertyCheckExistenceChecker(o, e.domain(), e.range()) === !1) return void De.options().editSidebar().updateSelectionInformation(e);
                ge.properties.push(o), ve.indexOf(o) === -1 && ve.push(o);
                var a = ge.properties.indexOf(e);
                a !== -1 && ge.properties.splice(a, 1), ve.indexOf(o) === -1 && ve.push(o), a = ve.indexOf(e), a !== -1 && ve.splice(a, 1), De.fastUpdate(), o.domain().addProperty(o), o.range().addProperty(o), e.labelObject() && o.labelObject() && (o.labelObject().x = e.labelObject().x, o.labelObject().px = e.labelObject().px, o.labelObject().y = e.labelObject().y, o.labelObject().py = e.labelObject().py), Se.focuserModule().handle(o), e = null
            }, De.removeEditElements = function() {
                W()
            }, De.editorMode = function(e) {
                var n = t.select("#empty"),
                    r = t.select("#emptyContainer"),
                    o = t.select("#modeOfOperationString").node();
                if (!arguments.length) return n.node().checked = lt, lt === !1 ? (r.node().title = "Enable editing in modes menu to create a new ontology", n.node().title = "Enable editing in modes menu to create a new ontology", n.style("pointer-events", "none")) : (r.node().title = "Creates a new empty ontology", n.node().title = "Creates a new empty ontology", t.select("#useAccuracyHelper").style("color", "#2980b9"), t.select("#useAccuracyHelper").style("pointer-events", "auto"), n.node().disabled = !1, n.style("pointer-events", "auto")), lt;
                De.options().setEditorModeForDefaultObject(e), lt = e, n && (n.classed("disabled", !lt), lt ? (r.node().title = "Creates a new empty ontology", n.node().title = "Creates a new empty ontology", t.select("#useAccuracyHelper").style("color", "#2980b9"), t.select("#useAccuracyHelper").style("pointer-events", "auto"), n.style("pointer-events", "auto")) : (r.node().title = "Enable editing in modes menu to create a new ontology", n.node().title = "Enable editing in modes menu to create a new ontology", n.node().disabled = !0, t.select("#useAccuracyHelper").style("color", "#979797"), t.select("#useAccuracyHelper").style("pointer-events", "none"), n.style("pointer-events", "none")));
                var a = t.select("#compactnotationModuleCheckbox");
                a && (a.classed("disabled", !lt), lt ? (t.select("#compactNotationOption").node().title = "Compact notation can only be used in view mode", a.node().disabled = !0, a.node().checked = !1, Se.compactNotationModule().enabled(!1), Se.literalFilter().enabled(!1), De.executeCompactNotationModule(), De.executeEmptyLiteralFilter(), De.lazyRefresh(), a.style("pointer-events", "none"), t.select("#compactNotationOption").style("color", "#979797")) : (a.node().title = "", a.node().disabled = !1, a.style("pointer-events", "auto"), t.select("#compactNotationOption").style("color", ""), t.select("#compactNotationOption").node().title = "", Se.literalFilter().enabled(!0), De.update())), o && (Ke === !0 ? o.innerHTML = "touch able device detected" : o.innerHTML = "point & click device detected");
                var i = t.selectAll(".vowlGraph");
                lt === !0 ? (Se.leftSidebar().showSidebar(Se.leftSidebar().getSidebarVisibility(), !0), Se.leftSidebar().hideCollapseButton(!1), De.options().editSidebar().updatePrefixUi(), De.options().editSidebar().updateElementWidth(), i.on("dblclick.zoom", De.modified_dblClickFunction)) : (i.on("dblclick.zoom", Qe), Se.leftSidebar().showSidebar(0), Se.leftSidebar().hideCollapseButton(!0), De.options().warningModule().hideEditorHint(), W()), Se.sidebar().updateShowedInformation(), Se.editSidebar().updateElementWidth()
            }, De.getTargetNode = function(e) {
                var t = e[0],
                    n = e[1],
                    r = null,
                    o = 1e12;
                if (ge.nodes.forEach(function(e) {
                        var a = Math.sqrt((e.x - t) * (e.x - t) + (e.y - n) * (e.y - n));
                        a < o && (o = a, r = e)
                    }), rt) {
                    var a = rt.actualRadius() + 30;
                    return o > a ? null : "rect" === r.renderType() ? null : r === rt && o <= rt.actualRadius() ? r : r === rt && o > rt.actualRadius() ? null : r
                }
                return o > r.actualRadius() + 30 ? null : r
            }, De.genericPropertySanityCheck = function(e, t, n, r, o) {
                return e === t && "rdfs:subClassOf" === n ? (De.options().warningModule().showWarning(r, "rdfs:subClassOf can not be created as loops (domain == range)", o, 1, !1), !1) : e === t && "owl:disjointWith" === n ? (De.options().warningModule().showWarning(r, "owl:disjointWith  can not be created as loops (domain == range)", o, 1, !1), !1) : "owl:Thing" === e.type() && "owl:allValuesFrom" === n ? (De.options().warningModule().showWarning(r, "owl:allValuesFrom can not originate from owl:Thing", o, 1, !1), !1) : "owl:Thing" === e.type() && "owl:someValuesFrom" === n ? (De.options().warningModule().showWarning(r, "owl:someValuesFrom can not originate from owl:Thing", o, 1, !1), !1) : "owl:Thing" === t.type() && "owl:allValuesFrom" === n ? (De.options().warningModule().showWarning(r, "owl:allValuesFrom can not be connected to owl:Thing", o, 1, !1), !1) : "owl:Thing" !== t.type() || "owl:someValuesFrom" !== n || (De.options().warningModule().showWarning(r, "owl:someValuesFrom can not be connected to owl:Thing", o, 1, !1), !1)
            }, De.checkIfIriClassAlreadyExist = function(e) {
                for (var t = ge.nodes, n = 0; n < t.length; n++)
                    if (i.isDatatype(t[n]) !== !0 && "owl:Thing" !== t[n].type()) {
                        var r = t[n].iri();
                        if (e === r) return t[n]
                    }
                return !1
            }, De.classesSanityCheck = function(e, t) {
                if ("owl:Class" === t) return !0;
                for (var n = ge.properties, r = 0; r < n.length; r++)
                    if (n[r].range() === e || n[r].domain() === e) {
                        if ("owl:someValuesFrom" === n[r].type()) return De.options().warningModule().showWarning("Can not change class type", "The element has a property that is of type owl:someValuesFrom", "Element type not changed!", 1, !0), !1;
                        if ("owl:allValuesFrom" === n[r].type()) return De.options().warningModule().showWarning("Can not change class type", "The element has a property that is of type owl:allValuesFrom", "Element type not changed!", 1, !0), !1
                    }
                return !0
            }, De.propertyCheckExistenceChecker = function(e, t, n) {
                var r, o = ge.properties;
                if ("rdfs:subClassOf" === e.type() || "owl:disjointWith" === e.type()) {
                    for (r = 0; r < o.length; r++)
                        if (o[r] !== e) {
                            if (o[r].domain() === t && o[r].range() === n && o[r].type() === e.type()) return De.options().warningModule().showWarning("Warning", "This triple already exist!", "Element not created!", 1, !1), !1;
                            if (o[r].domain() === n && o[r].range() === t && o[r].type() === e.type()) return De.options().warningModule().showWarning("Warning", "Inverse assignment already exist! ", "Element not created!", 1, !1), !1
                        }
                    return !0
                }
                return !0
            }, De.sanityCheckProperty = function(e, t, n) {
                return "owl:objectProperty" === n && De.options().objectPropertyFilter().enabled() === !0 ? (De.options().warningModule().showWarning("Warning", "Object properties are filtered out in the visualization!", "Element not created!", 1, !1), !1) : "owl:disjointWith" === n && De.options().disjointPropertyFilter().enabled() === !0 ? (De.options().warningModule().showWarning("Warning", "owl:disjointWith properties are filtered out in the visualization!", "Element not created!", 1, !1), !1) : e === t && "rdfs:subClassOf" === n ? (De.options().warningModule().showWarning("Warning", "rdfs:subClassOf can not be created as loops (domain == range)", "Element not created!", 1, !1), !1) : e === t && "owl:disjointWith" === n ? (De.options().warningModule().showWarning("Warning", "owl:disjointWith  can not be created as loops (domain == range)", "Element not created!", 1, !1), !1) : "owl:Thing" === e.type() && "owl:someValuesFrom" === n ? (De.options().warningModule().showWarning("Warning", "owl:someValuesFrom can not originate from owl:Thing", "Element not created!", 1, !1), !1) : "owl:Thing" === e.type() && "owl:allValuesFrom" === n ? (De.options().warningModule().showWarning("Warning", "owl:allValuesFrom can not originate from owl:Thing", "Element not created!", 1, !1), !1) : "owl:Thing" === t.type() && "owl:allValuesFrom" === n ? (De.options().warningModule().showWarning("Warning", "owl:allValuesFrom can not be connected to owl:Thing", "Element not created!", 1, !1), !1) : "owl:Thing" !== t.type() || "owl:someValuesFrom" !== n || (De.options().warningModule().showWarning("Warning", "owl:someValuesFrom can not be connected to owl:Thing", "Element not created!", 1, !1), !1)
            }, De.createDataTypeProperty = function(e) {
                if (clearTimeout(Ce), De.options().datatypeFilter().enabled() === !0) return void De.options().warningModule().showWarning("Warning", "Datatype properties are filtered out in the visualization!", "Element not created!", 1, !1);
                var n, r, o = t.select("#defaultDatatype").node().title;
                if ("rdfs:Literal" === o) r = mt.get("rdfs:literal"), n = new r(De), n.label("Literal"), n.iri("http://www.w3.org/2000/01/rdf-schema#Literal"), n.baseIri("http://www.w3.org/2000/01/rdf-schema#");
                else {
                    r = mt.get("rdfs:datatype"), n = new r(De);
                    var a = "";
                    "undefined" === o ? (a = "undefined", n.label(a), n.iri("http://www.undefinedDatatype.org/#" + a), n.baseIri("http://www.undefinedDatatype.org/#"), n.dType(o)) : (a = o.split(":")[1], n.label(a), n.dType(o), n.iri("http://www.w3.org/2001/XMLSchema#" + a), n.baseIri("http://www.w3.org/2001/XMLSchema#"))
                }
                var i = e.x - e.actualRadius() - 100,
                    s = e.y + e.actualRadius() + 100;
                n.x = i, n.y = s, n.px = n.x, n.py = n.y, n.id("NodeId" + st++), ge.nodes.push(n), pe.indexOf(n) === -1 && pe.push(n);
                var l = bt.get("owl:datatypeproperty"),
                    u = new l(De);
                u.id("datatypeProperty" + it++), u.domain(e), u.range(n), u.label("newDatatypeProperty");
                var c = t.select("#iriEditor").node().value;
                u.baseIri(c), u.iri(c + u.id()), ge.properties.push(u), ve.indexOf(u) === -1 && ve.push(u), De.fastUpdate(), w(ge), De.getUpdateDictionary(), Ce = setTimeout(function() {
                    e && e.frozen() === !0 && e.pinned() === !1 && De.paused() === !1 && (e.frozen(De.paused()), e.locked(De.paused()))
                }, 1e3), Se.focuserModule().handle(void 0), e && (e.frozen(!0), e.locked(!0))
            }, De.removeNodesViaResponse = function(e, t) {
                var n, r;
                for (n = 0; n < t.length; n++) r = ge.properties.indexOf(t[n]), r !== -1 && ge.properties.splice(r, 1), r = ve.indexOf(t[n]), r !== -1 && ve.splice(r, 1), t[n] = null;
                for (n = 0; n < e.length; n++) r = ge.nodes.indexOf(e[n]), r !== -1 && ge.nodes.splice(r, 1), r = pe.indexOf(e[n]), r !== -1 && pe.splice(r, 1), e[n] = null;
                De.fastUpdate(), w(ge), De.getUpdateDictionary(), Se.focuserModule().handle(void 0), e = null, t = null
            }, De.removeNodeViaEditor = function(e) {
                var t, n = [],
                    r = [],
                    o = 0;
                r.push(e);
                for (var a = 0; a < ge.properties.length; a++) ge.properties[a].domain() !== e && ge.properties[a].range() !== e || (n.push(ge.properties[a]), "owl:datatypeproperty" === ge.properties[a].type().toLocaleLowerCase() && ge.properties[a].range() !== e && (r.push(ge.properties[a].range()), o++));
                var i = n.length + r.length;
                if (i > 2) {
                    var s = "You are about to delete 1 class and " + n.length + " properties";
                    0 !== o && (s = "You are about to delete 1 class, " + o + " datatypes  and " + n.length + " properties"), De.options().warningModule().responseWarning("Removing elements", s, "Awaiting response!", De.removeNodesViaResponse, [r, n], !1)
                } else {
                    for (a = 0; a < n.length; a++) t = ge.properties.indexOf(n[a]), t !== -1 && ge.properties.splice(t, 1), t = ve.indexOf(n[a]), t !== -1 && ve.splice(t, 1), n[a] = null;
                    for (a = 0; a < r.length; a++) t = ge.nodes.indexOf(r[a]), t !== -1 && ge.nodes.splice(t, 1), t = pe.indexOf(r[a]), t !== -1 && pe.splice(t, 1), r[a] = null;
                    De.fastUpdate(), w(ge), De.getUpdateDictionary(), Se.focuserModule().handle(void 0), r = null, n = null
                }
            }, De.removePropertyViaEditor = function(e) {
                e.domain().removePropertyElement(e), e.range().removePropertyElement(e);
                var t;
                if ("owl:datatypeproperty" === e.type().toLocaleLowerCase()) {
                    var n = e.range();
                    t = ge.nodes.indexOf(e.range()), t !== -1 && ge.nodes.splice(t, 1), t !== -1 && (t = pe.indexOf(e.range())), pe.splice(t, 1), n = null
                }
                t = ge.properties.indexOf(e), t !== -1 && ge.properties.splice(t, 1), t = ve.indexOf(e), t !== -1 && ve.splice(t, 1), e.inverse() && e.inverse().inverse(0), ot = void 0, De.fastUpdate(), w(ge), De.getUpdateDictionary(), Se.focuserModule().handle(void 0), e = null
            }, De.executeColorExternalsModule = function() {
                Se.colorExternalsModule().filter(ge.nodes, ge.properties)
            }, De.executeCompactNotationModule = function() {
                ge && Se.compactNotationModule().filter(ge.nodes, ge.properties)
            }, De.executeEmptyLiteralFilter = function() {
                ge && ge.nodes.length > 1 && (Se.literalFilter().filter(ge.nodes, ge.properties), ge.nodes = Se.literalFilter().filteredNodes(), ge.properties = Se.literalFilter().filteredProperties())
            }, De.animateDynamicLabelWidth = function() {
                var e, t = Se.dynamicLabelWidth();
                for (e = 0; e < pe.length; e++) {
                    var n = pe[e];
                    i.isDatatype(n) && n.animateDynamicLabelWidth(t)
                }
                for (e = 0; e < ve.length; e++) ve[e].animateDynamicLabelWidth(t)
            }, De.setTouchDevice = function(e) {
                Ke = e
            }, De.isTouchDevice = function() {
                return Ke
            }, De.modified_dblClickFunction = function() {
                t.event.stopPropagation(), t.event.preventDefault();
                var e = R(t.event.clientX, t.event.clientY, De.translation(), De.scaleFactor());
                V(e)
            }, De.modified_dblTouchFunction = function(e) {
                t.event.stopPropagation(), t.event.preventDefault();
                var n;
                lt === !0 && (n = t.touches(t.selectAll(".vowlGraph").node()));
                var r = R(n[0][0], n[0][1], De.translation(), De.scaleFactor());
                V(r)
            }, De.ignoreOtherHoverEvents = function(e) {
                return arguments.length ? void(dt = e) : dt
            }, De.hideHoverPropertyElementsForAnimation = function() {
                xe.classed("hidden", !0)
            }, De.showHoverElementsAfterAnimation = function(e, t) {
                te(e, t), xe.classed("hidden", !1)
            }, De.killDelayedTimer = function() {
                clearTimeout(Oe), clearTimeout(Ce)
            }, De.activateHoverElementsForProperties = function(e, n, r, o) {
                lt !== !1 && (void 0 === o && (o = !1), e === !0 ? (clearTimeout(Oe), ot && ot.domain() === ot.range() && (ot.labelObject().increasedLoopAngle = !1, p()), ot = n, De.options().drawPropertyDraggerOnHover() === !0 ? "owl:DatatypeProperty" !== n.type() ? (n.domain() === n.range() && (n.labelObject().increasedLoopAngle = !0, p()), Ot.setParentProperty(n, r), Et.setParentProperty(n, r), Et.hideDragger(!1), Et.addMouseEvents(), wt.setParentProperty(n, r), wt.hideDragger(!1), wt.addMouseEvents()) : "owl:DatatypeProperty" === n.type() && (Ot.setParentProperty(n, r), Et.setParentProperty(n, r), Et.hideDragger(!0), Et.addMouseEvents(), wt.setParentProperty(n, r), wt.hideDragger(!1), wt.addMouseEvents()) : De.options().drawPropertyDraggerOnHover() === !0 && (Et.hideDragger(!0), wt.hideDragger(!0), Ot.hideClone(!0), n.domain() === n.range() && (n.labelObject().increasedLoopAngle = !1, p())), rt && rt && rt.pinned() === !1 && De.paused() === !1 && (rt.frozen(!1), rt.locked(!1)), rt = void 0, xe.classed("hidden", !1), te(n, r), xe.selectAll("*").on("click", function() {
                    return o && n.focused() === !1 ? void De.options().focuserModule().handle(n) : (De.removePropertyViaEditor(n), void t.event.stopPropagation())
                }), xt.hideDragger(!0), Ee.classed("hidden", !0)) : $())
            }, De.updateDraggerElements = function() {
                Et.draggerObject.classed("superOpacityElement", !De.options().showDraggerObject()), wt.draggerObject.classed("superOpacityElement", !De.options().showDraggerObject()), xt.draggerObject.classed("superOpacityElement", !De.options().showDraggerObject()), re.selectAll(".superHiddenElement").classed("superOpacityElement", !De.options().showDraggerObject()), oe.selectAll(".superHiddenElement").classed("superOpacityElement", !De.options().showDraggerObject()), xe.selectAll(".superHiddenElement").classed("superOpacityElement", !De.options().showDraggerObject()), Ee.selectAll(".superHiddenElement").classed("superOpacityElement", !De.options().showDraggerObject())
            }, De.activateHoverElements = function(e, n, r) {
                lt !== !1 && (void 0 === r && (r = !1), e === !0 ? (De.options().drawPropertyDraggerOnHover() === !0 && (Et.hideDragger(!0), wt.hideDragger(!0), Ot.hideClone(!0)), clearTimeout(Oe), clearTimeout(Ce), rt && n.pinned() === !1 && De.paused() === !1 && (rt.frozen(!1), rt.locked(!1)), rt = n, n && n.frozen() === !1 && n.pinned() === !1 && (n.frozen(!0), n.locked(!1)), ot && ot.focused() === !1 && (ot.labelObject().increasedLoopAngle = !1, p()), ot = void 0, xe.classed("hidden", !1), ee(n), xe.selectAll("*").on("click", function() {
                    return r && n.focused() === !1 ? void De.options().focuserModule().handle(n) : (De.removeNodeViaEditor(n), void t.event.stopPropagation())
                }).on("mouseover", function() {
                    J(n, r)
                }).on("mouseout", function() {
                    K(n, r)
                }), Ee.classed("hidden", !0), xt.nodeElement.on("mouseover", J).on("mouseout", K), xt.draggerObject.on("mouseover", X).on("mouseout", Y), "round" === n.renderType() ? (xt.svgRoot(tt), xt.setParentNode(n), xt.hideDragger(!1), Ee.classed("hidden", !1), Q(n), Ee.selectAll("*").on("click", function() {
                    return r && n.focused() === !1 ? void De.options().focuserModule().handle(n) : (De.createDataTypeProperty(n), void t.event.stopPropagation())
                }).on("mouseover", function() {
                    J(n, r)
                }).on("mouseout", function() {
                    K(n, r)
                })) : xt.hideDragger(!0)) : $(n, r))
            }, De
        }
    }).call(t, n(6))
}, function(e, t, n) {
    var r;
    (function(e, o) {
        (function() {
            function a(e, t) {
                return e.push.apply(e, t), e
            }

            function i(e, t, n, r) {
                for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o;)
                    if (t(e[a], a, e)) return a;
                return -1
            }

            function s(e) {
                return function(t) {
                    return null == t ? ot : t[e]
                }
            }

            function l(e) {
                return function(t) {
                    return null == e ? ot : e[t]
                }
            }

            function u(e, t, n, r, o) {
                return o(e, function(e, o, a) {
                    n = r ? (r = !1, e) : t(n, e, o, a)
                }), n
            }

            function c(e, t) {
                return L(t, function(t) {
                    return e[t]
                })
            }

            function d(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }

            function p(e) {
                return e instanceof f ? e : new f(e)
            }

            function f(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t
            }

            function h(e, t, n) {
                var r = e[t];
                Nt.call(e, t) && je(r, n) && (n !== ot || t in e) || v(e, t, n)
            }

            function v(e, t, n) {
                e[t] = n
            }

            function g(e, t, n) {
                if ("function" != typeof e) throw new TypeError(it);
                return setTimeout(function() {
                    e.apply(ot, n)
                }, t)
            }

            function y(e, t) {
                var n = !0;
                return Zt(e, function(e, r, o) {
                    return n = !!t(e, r, o)
                }), n
            }

            function m(e, t, n) {
                for (var r = -1, o = e.length; ++r < o;) {
                    var a = e[r],
                        i = t(a);
                    if (null != i && (s === ot ? i === i && !0 : n(i, s))) var s = i,
                        l = a
                }
                return l
            }

            function b(e, t) {
                var n = [];
                return Zt(e, function(e, r, o) {
                    t(e, r, o) && n.push(e)
                }), n
            }

            function x(e, t, n, r, o) {
                var i = -1,
                    s = e.length;
                for (n || (n = J), o || (o = []); ++i < s;) {
                    var l = e[i];
                    t > 0 && n(l) ? t > 1 ? x(l, t - 1, n, r, o) : a(o, l) : r || (o[o.length] = l)
                }
                return o
            }

            function E(e, t) {
                return e && $t(e, t, dn)
            }

            function w(e, t) {
                return b(t, function(t) {
                    return Se(e[t])
                })
            }

            function O(e) {
                return te(e)
            }

            function C(e, t) {
                return e > t
            }

            function k(e) {
                return Ne(e) && O(e) == yt
            }

            function P(e, t, n, r, o) {
                return e === t || (null == e || null == t || !Ne(e) && !Ne(t) ? e !== e && t !== t : _(e, t, n, r, P, o))
            }

            function _(e, t, n, r, o, a) {
                var i = nn(e),
                    s = nn(t),
                    l = i ? ht : O(e),
                    u = s ? ht : O(t);
                l = l == ft ? wt : l, u = u == ft ? wt : u;
                var c = l == wt,
                    d = u == wt,
                    p = l == u;
                a || (a = []);
                var f = Jt(a, function(t) {
                        return t[0] == e
                    }),
                    h = Jt(a, function(e) {
                        return e[0] == t
                    });
                if (f && h) return f[1] == t;
                if (a.push([e, t]), a.push([t, e]), p && !c) {
                    var v = i ? Z(e, t, n, r, o, a) : $(e, t, l, n, r, o, a);
                    return a.pop(), v
                }
                if (!(n & st)) {
                    var g = c && Nt.call(e, "__wrapped__"),
                        y = d && Nt.call(t, "__wrapped__");
                    if (g || y) {
                        var m = g ? e.value() : e,
                            b = y ? t.value() : t,
                            v = o(m, b, n, r, a);
                        return a.pop(), v
                    }
                }
                if (!p) return !1;
                var v = X(e, t, n, r, o, a);
                return a.pop(), v
            }

            function j(e) {
                return Ne(e) && O(e) == Ct
            }

            function M(e) {
                return "function" == typeof e ? e : null == e ? Ye : ("object" == typeof e ? A : s)(e)
            }

            function D(e, t) {
                return e < t
            }

            function L(e, t) {
                var n = -1,
                    r = Me(e) ? Array(e.length) : [];
                return Zt(e, function(e, o, a) {
                    r[++n] = t(e, o, a)
                }), r
            }

            function A(e) {
                var t = qt(e);
                return function(n) {
                    var r = t.length;
                    if (null == n) return !r;
                    for (n = Object(n); r--;) {
                        var o = t[r];
                        if (!(o in n && P(e[o], n[o], st | lt))) return !1
                    }
                    return !0
                }
            }

            function T(e, t) {
                return e = Object(e), xe(t, function(t, n) {
                    return n in e && (t[n] = e[n]), t
                }, {})
            }

            function S(e, t) {
                return Yt(ne(e, t, Ye), e + "")
            }

            function R(e, t, n) {
                var r = -1,
                    o = e.length;
                t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var a = Array(o); ++r < o;) a[r] = e[r + t];
                return a
            }

            function I(e) {
                return R(e, 0, e.length)
            }

            function N(e, t) {
                var n;
                return Zt(e, function(e, r, o) {
                    return n = t(e, r, o), !n
                }), !!n
            }

            function F(e, t) {
                var n = e;
                return xe(t, function(e, t) {
                    return t.func.apply(t.thisArg, a([e], t.args))
                }, n)
            }

            function H(e, t) {
                if (e !== t) {
                    var n = e !== ot,
                        r = null === e,
                        o = e === e,
                        a = !1,
                        i = t !== ot,
                        s = null === t,
                        l = t === t,
                        u = !1;
                    if (!s && !u && !a && e > t || a && i && l && !s && !u || r && i && l || !n && l || !o) return 1;
                    if (!r && !a && !u && e < t || u && n && o && !r && !a || s && n && o || !i && o || !l) return -1
                }
                return 0
            }

            function B(e, t, n, r) {
                var o = !n;
                n || (n = {});
                for (var a = -1, i = t.length; ++a < i;) {
                    var s = t[a],
                        l = r ? r(n[s], e[s], s, n, e) : ot;
                    l === ot && (l = e[s]), o ? v(n, s, l) : h(n, s, l)
                }
                return n
            }

            function W(e) {
                return S(function(t, n) {
                    var r = -1,
                        o = n.length,
                        a = o > 1 ? n[o - 1] : ot;
                    for (a = e.length > 3 && "function" == typeof a ? (o--, a) : ot, t = Object(t); ++r < o;) {
                        var i = n[r];
                        i && e(t, i, r, a)
                    }
                    return t
                })
            }

            function z(e, t) {
                return function(n, r) {
                    if (null == n) return n;
                    if (!Me(n)) return e(n, r);
                    for (var o = n.length, a = t ? o : -1, i = Object(n);
                        (t ? a-- : ++a < o) && r(i[a], a, i) !== !1;);
                    return n
                }
            }

            function V(e) {
                return function(t, n, r) {
                    for (var o = -1, a = Object(t), i = r(t), s = i.length; s--;) {
                        var l = i[e ? s : ++o];
                        if (n(a[l], l, a) === !1) break
                    }
                    return t
                }
            }

            function q(e) {
                return function() {
                    var t = arguments,
                        n = Gt(e.prototype),
                        r = e.apply(n, t);
                    return Ie(r) ? r : n
                }
            }

            function U(e) {
                return function(t, n, r) {
                    var o = Object(t);
                    if (!Me(t)) {
                        var a = M(n, 3);
                        t = dn(t), n = function(e) {
                            return a(o[e], e, o)
                        }
                    }
                    var i = e(t, n, r);
                    return i > -1 ? o[a ? t[i] : i] : ot
                }
            }

            function G(e, t, n, r) {
                function o() {
                    for (var t = -1, s = arguments.length, l = -1, u = r.length, c = Array(u + s), d = this && this !== At && this instanceof o ? i : e; ++l < u;) c[l] = r[l];
                    for (; s--;) c[l++] = arguments[++t];
                    return d.apply(a ? n : this, c)
                }
                if ("function" != typeof e) throw new TypeError(it);
                var a = t & ut,
                    i = q(e);
                return o
            }

            function Z(e, t, n, r, o, a) {
                var i = n & st,
                    s = e.length,
                    l = t.length;
                if (s != l && !(i && l > s)) return !1;
                for (var u = -1, c = !0, d = n & lt ? [] : ot; ++u < s;) {
                    var p, f = e[u],
                        h = t[u];
                    if (p !== ot) {
                        if (p) continue;
                        c = !1;
                        break
                    }
                    if (d) {
                        if (!N(t, function(e, t) {
                                if (!ue(d, t) && (f === e || o(f, e, n, r, a))) return d.push(t)
                            })) {
                            c = !1;
                            break
                        }
                    } else if (f !== h && !o(f, h, n, r, a)) {
                        c = !1;
                        break
                    }
                }
                return c
            }

            function $(e, t, n, r, o, a, i) {
                switch (n) {
                    case gt:
                    case yt:
                    case Et:
                        return je(+e, +t);
                    case mt:
                        return e.name == t.name && e.message == t.message;
                    case Ct:
                    case kt:
                        return e == t + ""
                }
                return !1
            }

            function X(e, t, n, r, o, a) {
                var i = n & st,
                    s = dn(e),
                    l = s.length,
                    u = dn(t),
                    c = u.length;
                if (l != c && !i) return !1;
                for (var d = l; d--;) {
                    var p = s[d];
                    if (!(i ? p in t : Nt.call(t, p))) return !1
                }
                for (var f = !0, h = i; ++d < l;) {
                    p = s[d];
                    var v, g = e[p],
                        y = t[p];
                    if (!(v === ot ? g === y || o(g, y, n, r, a) : v)) {
                        f = !1;
                        break
                    }
                    h || (h = "constructor" == p)
                }
                if (f && !h) {
                    var m = e.constructor,
                        b = t.constructor;
                    m != b && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof b && b instanceof b) && (f = !1)
                }
                return f
            }

            function Y(e) {
                return Yt(ne(e, ot, ie), e + "")
            }

            function J(e) {
                return nn(e) || tn(e)
            }

            function K(e, t) {
                var n = typeof e;
                return t = null == t ? pt : t, !!t && ("number" == n || "symbol" != n && jt.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function Q(e, t, n) {
                if (!Ie(n)) return !1;
                var r = typeof t;
                return !!("number" == r ? Me(n) && K(t, n.length) : "string" == r && t in n) && je(n[t], e)
            }

            function ee(e) {
                var t = [];
                if (null != e)
                    for (var n in Object(e)) t.push(n);
                return t
            }

            function te(e) {
                return Ht.call(e)
            }

            function ne(e, t, n) {
                return t = Ut(t === ot ? e.length - 1 : t, 0),
                    function() {
                        for (var r = arguments, o = -1, a = Ut(r.length - t, 0), i = Array(a); ++o < a;) i[o] = r[t + o];
                        o = -1;
                        for (var s = Array(t + 1); ++o < t;) s[o] = r[o];
                        return s[t] = n(i), e.apply(this, s)
                    }
            }

            function re(e) {
                return b(e, Boolean)
            }

            function oe() {
                var e = arguments.length;
                if (!e) return [];
                for (var t = Array(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                return a(nn(n) ? I(n) : [n], x(t, 1))
            }

            function ae(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var o = null == n ? 0 : an(n);
                return o < 0 && (o = Ut(r + o, 0)), i(e, M(t, 3), o)
            }

            function ie(e) {
                var t = null == e ? 0 : e.length;
                return t ? x(e, 1) : []
            }

            function se(e) {
                var t = null == e ? 0 : e.length;
                return t ? x(e, dt) : []
            }

            function le(e) {
                return e && e.length ? e[0] : ot
            }

            function ue(e, t, n) {
                var r = null == e ? 0 : e.length;
                n = "number" == typeof n ? n < 0 ? Ut(r + n, 0) : n : 0;
                for (var o = (n || 0) - 1, a = t === t; ++o < r;) {
                    var i = e[o];
                    if (a ? i === t : i !== i) return o
                }
                return -1
            }

            function ce(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : ot
            }

            function de(e, t, n) {
                var r = null == e ? 0 : e.length;
                return t = null == t ? 0 : +t, n = n === ot ? r : +n, r ? R(e, t, n) : []
            }

            function pe(e) {
                var t = p(e);
                return t.__chain__ = !0, t
            }

            function fe(e, t) {
                return t(e), e
            }

            function he(e, t) {
                return t(e)
            }

            function ve() {
                return F(this.__wrapped__, this.__actions__)
            }

            function ge(e, t, n) {
                return t = n ? ot : t, y(e, M(t))
            }

            function ye(e, t) {
                return b(e, M(t))
            }

            function me(e, t) {
                return Zt(e, M(t))
            }

            function be(e, t) {
                return L(e, M(t))
            }

            function xe(e, t, n) {
                return u(e, M(t), n, arguments.length < 3, Zt)
            }

            function Ee(e) {
                return null == e ? 0 : (e = Me(e) ? e : qt(e), e.length)
            }

            function we(e, t, n) {
                return t = n ? ot : t, N(e, M(t))
            }

            function Oe(e, t) {
                var n = 0;
                return t = M(t), L(L(e, function(e, r, o) {
                    return {
                        value: e,
                        index: n++,
                        criteria: t(e, r, o)
                    }
                }).sort(function(e, t) {
                    return H(e.criteria, t.criteria) || e.index - t.index
                }), s("value"))
            }

            function Ce(e, t) {
                var n;
                if ("function" != typeof t) throw new TypeError(it);
                return e = an(e),
                    function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = ot), n
                    }
            }

            function ke(e) {
                if ("function" != typeof e) throw new TypeError(it);
                return function() {
                    var t = arguments;
                    return !e.apply(this, t)
                }
            }

            function Pe(e) {
                return Ce(2, e)
            }

            function _e(e) {
                return Ie(e) ? nn(e) ? I(e) : B(e, qt(e)) : e
            }

            function je(e, t) {
                return e === t || e !== e && t !== t
            }

            function Me(e) {
                return null != e && Re(e.length) && !Se(e)
            }

            function De(e) {
                return e === !0 || e === !1 || Ne(e) && O(e) == gt
            }

            function Le(e) {
                return Me(e) && (nn(e) || We(e) || Se(e.splice) || tn(e)) ? !e.length : !qt(e).length
            }

            function Ae(e, t) {
                return P(e, t)
            }

            function Te(e) {
                return "number" == typeof e && Vt(e)
            }

            function Se(e) {
                if (!Ie(e)) return !1;
                var t = O(e);
                return t == bt || t == xt || t == vt || t == Ot
            }

            function Re(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= pt
            }

            function Ie(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Ne(e) {
                return null != e && "object" == typeof e
            }

            function Fe(e) {
                return Be(e) && e != +e
            }

            function He(e) {
                return null === e
            }

            function Be(e) {
                return "number" == typeof e || Ne(e) && O(e) == Et
            }

            function We(e) {
                return "string" == typeof e || !nn(e) && Ne(e) && O(e) == kt
            }

            function ze(e) {
                return e === ot
            }

            function Ve(e) {
                return Me(e) ? e.length ? I(e) : [] : $e(e)
            }

            function qe(e) {
                return "string" == typeof e ? e : null == e ? "" : e + ""
            }

            function Ue(e, t) {
                var n = Gt(e);
                return null == t ? n : ln(n, t)
            }

            function Ge(e, t) {
                return null != e && Nt.call(e, t)
            }

            function Ze(e, t, n) {
                var r = null == e ? ot : e[t];
                return r === ot && (r = n), Se(r) ? r.call(e) : r
            }

            function $e(e) {
                return null == e ? [] : c(e, dn(e))
            }

            function Xe(e) {
                return e = qe(e), e && _t.test(e) ? e.replace(Pt, St) : e
            }

            function Ye(e) {
                return e
            }

            function Je(e) {
                return A(ln({}, e))
            }

            function Ke(e, t, n) {
                var r = dn(t),
                    o = w(t, r);
                null != n || Ie(t) && (o.length || !r.length) || (n = t, t = e, e = this, o = w(t, dn(t)));
                var i = !(Ie(n) && "chain" in n && !n.chain),
                    s = Se(e);
                return Zt(o, function(n) {
                    var r = t[n];
                    e[n] = r, s && (e.prototype[n] = function() {
                        var t = this.__chain__;
                        if (i || t) {
                            var n = e(this.__wrapped__),
                                o = n.__actions__ = I(this.__actions__);
                            return o.push({
                                func: r,
                                args: arguments,
                                thisArg: e
                            }), n.__chain__ = t, n
                        }
                        return r.apply(e, a([this.value()], arguments))
                    })
                }), e
            }

            function Qe() {
                return At._ === this && (At._ = Bt), this
            }

            function et() {}

            function tt(e) {
                var t = ++Ft;
                return qe(e) + t
            }

            function nt(e) {
                return e && e.length ? m(e, Ye, C) : ot
            }

            function rt(e) {
                return e && e.length ? m(e, Ye, D) : ot
            }
            var ot, at = "4.17.11",
                it = "Expected a function",
                st = 1,
                lt = 2,
                ut = 1,
                ct = 32,
                dt = 1 / 0,
                pt = 9007199254740991,
                ft = "[object Arguments]",
                ht = "[object Array]",
                vt = "[object AsyncFunction]",
                gt = "[object Boolean]",
                yt = "[object Date]",
                mt = "[object Error]",
                bt = "[object Function]",
                xt = "[object GeneratorFunction]",
                Et = "[object Number]",
                wt = "[object Object]",
                Ot = "[object Proxy]",
                Ct = "[object RegExp]",
                kt = "[object String]",
                Pt = /[&<>"']/g,
                _t = RegExp(Pt.source),
                jt = /^(?:0|[1-9]\d*)$/,
                Mt = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                },
                Dt = "object" == typeof e && e && e.Object === Object && e,
                Lt = "object" == typeof self && self && self.Object === Object && self,
                At = Dt || Lt || Function("return this")(),
                Tt = "object" == typeof t && t && !t.nodeType && t,
                St = (Tt && "object" == typeof o && o && !o.nodeType && o, l(Mt)),
                Rt = Array.prototype,
                It = Object.prototype,
                Nt = It.hasOwnProperty,
                Ft = 0,
                Ht = It.toString,
                Bt = At._,
                Wt = Object.create,
                zt = It.propertyIsEnumerable,
                Vt = At.isFinite,
                qt = d(Object.keys, Object),
                Ut = Math.max,
                Gt = function() {
                    function e() {}
                    return function(t) {
                        if (!Ie(t)) return {};
                        if (Wt) return Wt(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = ot, n
                    }
                }();
            f.prototype = Gt(p.prototype), f.prototype.constructor = f;
            var Zt = z(E),
                $t = V(),
                Xt = et,
                Yt = Ye,
                Jt = U(ae),
                Kt = S(function(e, t, n) {
                    return G(e, ut | ct, t, n)
                }),
                Qt = S(function(e, t) {
                    return g(e, 1, t)
                }),
                en = S(function(e, t, n) {
                    return g(e, sn(t) || 0, n)
                }),
                tn = Xt(function() {
                    return arguments
                }()) ? Xt : function(e) {
                    return Ne(e) && Nt.call(e, "callee") && !zt.call(e, "callee")
                },
                nn = Array.isArray,
                rn = k,
                on = j,
                an = Number,
                sn = Number,
                ln = W(function(e, t) {
                    B(t, qt(t), e)
                }),
                un = W(function(e, t) {
                    B(t, ee(t), e)
                }),
                cn = S(function(e, t) {
                    e = Object(e);
                    var n = -1,
                        r = t.length,
                        o = r > 2 ? t[2] : ot;
                    for (o && Q(t[0], t[1], o) && (r = 1); ++n < r;)
                        for (var a = t[n], i = pn(a), s = -1, l = i.length; ++s < l;) {
                            var u = i[s],
                                c = e[u];
                            (c === ot || je(c, It[u]) && !Nt.call(e, u)) && (e[u] = a[u])
                        }
                    return e
                }),
                dn = qt,
                pn = ee,
                fn = Y(function(e, t) {
                    return null == e ? {} : T(e, t)
                }),
                hn = M;
            p.assignIn = un, p.before = Ce, p.bind = Kt, p.chain = pe, p.compact = re, p.concat = oe, p.create = Ue, p.defaults = cn, p.defer = Qt, p.delay = en, p.filter = ye, p.flatten = ie, p.flattenDeep = se, p.iteratee = hn, p.keys = dn, p.map = be, p.matches = Je, p.mixin = Ke, p.negate = ke, p.once = Pe, p.pick = fn, p.slice = de, p.sortBy = Oe, p.tap = fe, p.thru = he, p.toArray = Ve, p.values = $e, p.extend = un, Ke(p, p), p.clone = _e, p.escape = Xe, p.every = ge, p.find = Jt, p.forEach = me, p.has = Ge, p.head = le, p.identity = Ye, p.indexOf = ue, p.isArguments = tn, p.isArray = nn, p.isBoolean = De, p.isDate = rn, p.isEmpty = Le, p.isEqual = Ae, p.isFinite = Te, p.isFunction = Se, p.isNaN = Fe, p.isNull = He, p.isNumber = Be, p.isObject = Ie, p.isRegExp = on, p.isString = We, p.isUndefined = ze, p.last = ce, p.max = nt, p.min = rt, p.noConflict = Qe, p.noop = et, p.reduce = xe, p.result = Ze, p.size = Ee, p.some = we, p.uniqueId = tt, p.each = me, p.first = le, Ke(p, function() {
                var e = {};
                return E(p, function(t, n) {
                    Nt.call(p.prototype, n) || (e[n] = t)
                }), e
            }(), {
                chain: !1
            }), p.VERSION = at, Zt(["pop", "join", "replace", "reverse", "split", "push", "shift", "sort", "splice", "unshift"], function(e) {
                var t = (/^(?:replace|split)$/.test(e) ? String.prototype : Rt)[e],
                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    r = /^(?:pop|join|replace|shift)$/.test(e);
                p.prototype[e] = function() {
                    var e = arguments;
                    if (r && !this.__chain__) {
                        var o = this.value();
                        return t.apply(nn(o) ? o : [], e)
                    }
                    return this[n](function(n) {
                        return t.apply(nn(n) ? n : [], e)
                    })
                }
            }), p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = ve, At._ = p, r = function() {
                return p
            }.call(t, n, t, o), !(r !== ot && (o.exports = r))
        }).call(this)
    }).call(t, function() {
        return this
    }(), n(59)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t, n) {
    var r = n(61),
        o = n(22),
        a = n(23),
        i = n(46),
        s = n(56);
    e.exports = function() {
        function e(e) {
            for (var t, r = [], o = n(62)(), a = 0, i = e.length; a < i; a++)
                if (t = e[a], !o.has(t)) {
                    var s = u(t);
                    t.link(s), t.inverse() && t.inverse().link(s), r.push(s), o.add(t), t.inverse() && o.add(t.inverse())
                }
            return r
        }

        function t(e, t) {
            var n, r, o, a;
            if ("undefined" == typeof e.layers()) {
                for (r = [], o = 0, a = t.length; o < a; o++) {
                    var i = t[o];
                    (e.domain() === i.domain() && e.range() === i.range() || e.domain() === i.range() && e.range() === i.domain()) && r.push(i)
                }
                for (o = 0, a = r.length; o < a; ++o) n = r[o], n.layerIndex(o), n.layers(r)
            }
        }

        function l(e, t) {
            var n, r, o, a;
            if ("undefined" == typeof e.loops()) {
                for (r = [], o = 0, a = t.length; o < a; o++) {
                    var i = t[o];
                    e.domain() === i.domain() && e.domain() === i.range() && r.push(i)
                }
                for (o = 0, a = r.length; o < a; ++o) n = r[o], n.loopIndex(o), n.loops(r)
            }
        }

        function u(e) {
            var t = e.domain(),
                n = e.range();
            return e instanceof i ? new a(t, n, e) : e instanceof s ? new o(t, n, e) : new r(t, n, e)
        }
        var c = {};
        return c.createLinks = function(n) {
                for (var r = e(n), o = 0, a = r.length; o < a; o++) {
                    var i = r[o];
                    t(i, r), l(i, r)
                }
                return r
            },
            function() {
                return c
            }
    }()
}, function(e, t, n) {
    function r(e, t, n) {
        s.apply(this, arguments)
    }

    function o(e, t) {
        var n = i(e, t),
            r = -12,
            o = 8,
            a = -12,
            s = -8;
        n.append("path").attr("d", "M0,0L " + r + "," + o + "L" + a + "," + s + "L0,0").classed(t.markerType(), !0), t.markerElement(n)
    }

    function a(e, t) {
        var n = -12,
            r = 8,
            o = -12,
            a = -8,
            s = i(e, t);
        s.append("path").attr("d", "M0,0L " + -n + "," + -r + "L" + -o + "," + -a + "L0,0").classed(t.markerType(), !0), t.markerElement(s)
    }

    function i(e, t) {
        return e.append("marker").datum(t).attr("id", t.markerId()).attr("viewBox", "-14 -10 28 20").attr("markerWidth", 10).attr("markerHeight", 10).attr("orient", "auto")
    }
    var s = n(23);
    e.exports = r, r.prototype = Object.create(s.prototype), r.prototype.constructor = r, r.prototype.draw = function(e, t) {
        var n = this.label().property(),
            r = this.label().inverse();
        o(t, n), r && a(t, r), s.prototype.draw.apply(this, arguments), e.attr("marker-end", "url(#" + n.markerId() + ")"), r && e.attr("marker-start", "url(#" + r.markerId() + ")")
    }
}, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            var n = {},
                r = t.set(e);
            return n.has = function(e) {
                return r.has(e.id())
            }, n.add = function(e) {
                return r.add(e.id())
            }, n.remove = function(e) {
                return r.remove(e.id())
            }, n.empty = function() {
                return r.empty()
            }, n.size = function() {
                return r.size()
            }, n
        }
    }).call(t, n(6))
}, function(e, t, n) {
    var r = n(42),
        o = n(9),
        a = n(35),
        i = n(31),
        s = n(50),
        l = n(44),
        u = n(55),
        c = n(24),
        d = {};
    e.exports = function() {
        return d
    }, d.isLabel = function(e) {
        return e instanceof c
    }, d.isNode = function(e) {
        return e instanceof o
    }, d.isDatatype = function(e) {
        return e instanceof a
    }, d.isThing = function(e) {
        return e instanceof i
    }, d.isProperty = function(e) {
        return e instanceof r
    }, d.isObjectProperty = function(e) {
        return e instanceof s
    }, d.isDatatypeProperty = function(e) {
        return e instanceof l
    }, d.isRdfsSubClassOf = function(e) {
        return e instanceof u;
    }
}, function(e, t, n) {
    (function(t) {
        e.exports = function() {
            function e(e) {
                var t = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
                return t.test(e)
            }

            function n() {
                de.sidebar = R.sidebar().getSidebarVisibility(), de.cd = R.classDistance(), de.dd = R.datatypeDistance(), de.filter_datatypes = String(R.filterMenu().getCheckBoxValue("datatypeFilterCheckbox")), de.filter_sco = String(R.filterMenu().getCheckBoxValue("subclassFilterCheckbox")), de.filter_disjoint = String(R.filterMenu().getCheckBoxValue("disjointFilterCheckbox")), de.filter_setOperator = String(R.filterMenu().getCheckBoxValue("setoperatorFilterCheckbox")), de.filter_objectProperties = String(R.filterMenu().getCheckBoxValue("objectPropertyFilterCheckbox")), de.mode_dynamic = String(R.dynamicLabelWidth()), de.mode_scaling = String(R.modeMenu().getCheckBoxValue("nodescalingModuleCheckbox")), de.mode_compact = String(R.modeMenu().getCheckBoxValue("compactnotationModuleCheckbox")), de.mode_colorExt = String(R.modeMenu().getCheckBoxValue("colorexternalsModuleCheckbox")), de.mode_multiColor = String(R.modeMenu().colorModeState()), de.mode_pnp = String(R.modeMenu().getCheckBoxValue("pickandpinModuleCheckbox")), de.rect = 0
            }
            var r, o, a, i, s, l, u, c, d, p, f, h, v, g, y, m, b, x, E, w, O, C, k, P, _, j, M, D, L, A, T, S, R = {},
                I = 200,
                N = 120,
                F = 150,
                H = -500,
                B = .025,
                W = 1,
                z = 600,
                V = 800,
                q = [],
                U = [],
                G = .01,
                Z = 4,
                $ = !1,
                X = !0,
                Y = 120,
                J = {},
                K = {},
                Q = !1,
                ee = !0,
                te = !1,
                ne = !0,
                re = !0,
                oe = !0,
                ae = !1,
                ie = !0,
                se = ["rdfs:Literal", "xsd:boolean", "xsd:double", "xsd:integer", "xsd:string", "undefined"],
                le = ["owl:Thing", "owl:Class", "owl:DeprecatedClass"],
                ue = ["owl:objectProperty", "rdfs:subClassOf", "owl:disjointWith", "owl:allValuesFrom", "owl:someValuesFrom"],
                ce = {
                    rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
                    rdfs: "http://www.w3.org/2000/01/rdf-schema#",
                    owl: "http://www.w3.org/2002/07/owl#",
                    xsd: "http://www.w3.org/2001/XMLSchema#",
                    dc: "http://purl.org/dc/elements/1.1/#",
                    xml: "http://www.w3.org/XML/1998/namespace"
                };
            R.clearMetaObject = function() {
                K = {}
            }, R.clearGeneralMetaObject = function() {
                K = {}
            }, R.debugMenu = function(e) {
                return arguments.length ? void(S = e) : S
            }, R.getHideDebugFeatures = function() {
                return ie
            }, R.executeHiddenDebugFeatuers = function() {
                ie = !ie, t.selectAll(".debugOption").classed("hidden", ie), ie === !1 ? x.setForceTickFunctionWithFPS() : x.setDefaultForceTickFunction(), S && S.updateSettings(), R.setHideDebugFeaturesForDefaultObject(ie)
            }, R.addOrUpdateGeneralObjectEntry = function(t, n) {
                if (K.hasOwnProperty(t)) {
                    if ("iri" === t && e(n) === !1) return D.showWarning("Invalid Ontology IRI", "Input IRI does not represent an URL", "Restoring previous IRI for ontology", 1, !1), !1;
                    K[t] = n
                } else K[t] = n;
                return !0
            }, R.getGeneralMetaObjectProperty = function(e) {
                if (K.hasOwnProperty(e)) return K[e]
            }, R.getGeneralMetaObject = function() {
                return K
            }, R.addOrUpdateMetaObjectEntry = function(e, t) {
                J.hasOwnProperty(e) ? J[e] = t : J[e] = t
            }, R.getMetaObjectProperty = function(e) {
                if (J.hasOwnProperty(e)) return J[e]
            }, R.getMetaObject = function() {
                return J
            }, R.prefixList = function() {
                return ce
            }, R.addPrefix = function(e, t) {
                ce[e] = t
            }, R.updatePrefix = function(t, n, r, o) {
                if (t === n && r === o) return !0;
                if (t === n && r !== o && e(o) === !0) ce[t] = o;
                else if (t === n && r !== o && e(o) === !1) return e(o) === !1 && (D.showWarning("Invalid Prefix IRI", "Input IRI does not represent an IRI", "You should enter a valid IRI in form of a URL", 1, !1), !1);
                return t !== n && e(o) === !0 ? ce.hasOwnProperty(n) ? (D.showWarning("Prefix Already Exist", "Prefix: " + n + " is already defined", "You should use an other one", 1, !1), !1) : (R.removePrefix(t), R.addPrefix(n, o), y.updateEditDeleteButtonIds(t, n), !0) : (e(o) === !1 && D.showWarning("Invalid Prefix IRI", "Input IRI does not represent an URL", "You should enter a valid URL", 1, !1), !1)
            }, R.removePrefix = function(e) {
                delete ce[e]
            }, R.supportedDatatypes = function() {
                return se
            }, R.supportedClasses = function() {
                return le
            }, R.supportedProperties = function() {
                return ue
            }, R.datatypeFilter = function(e) {
                return arguments.length ? void(w = e) : w
            }, R.showDraggerObject = function(e) {
                return arguments.length ? void(te = e) : te
            }, R.useAccuracyHelper = function(e) {
                return arguments.length ? void(re = e) : re
            }, R.showAccuracyHelper = function(e) {
                return arguments.length ? void R.showDraggerObject(e) : R.showDraggerObject()
            }, R.showRenderingStatistic = function(e) {
                return arguments.length ? void(oe = e) : oe
            }, R.showInputModality = function(e) {
                return arguments.length ? void(ae = e) : ae
            }, R.drawPropertyDraggerOnHover = function(e) {
                return arguments.length ? void(ee = e) : ee
            }, R.warningModule = function(e) {
                return arguments.length ? void(D = e) : D
            }, R.directInputModule = function(e) {
                return arguments.length ? void(A = e) : A
            }, R.prefixModule = function(e) {
                return arguments.length ? void(L = e) : L
            }, R.focuserModule = function(e) {
                return arguments.length ? void(O = e) : O
            }, R.colorExternalsModule = function(e) {
                return arguments.length ? void(C = e) : C
            }, R.compactNotationModule = function(e) {
                return arguments.length ? void(k = e) : k
            }, R.maxLabelWidth = function(e) {
                return arguments.length ? void(Y = e) : Y
            }, R.objectPropertyFilter = function(e) {
                return arguments.length ? void(P = e) : P
            }, R.disjointPropertyFilter = function(e) {
                return arguments.length ? void(M = e) : M
            }, R.subclassFilter = function(e) {
                return arguments.length ? void(_ = e) : _
            }, R.setOperatorFilter = function(e) {
                return arguments.length ? void(j = e) : j
            }, R.leftSidebar = function(e) {
                return arguments.length ? void(g = e) : g
            }, R.editSidebar = function(e) {
                return arguments.length ? void(y = e) : y
            }, R.zoomSlider = function(e) {
                return arguments.length ? void(E = e) : E
            }, R.graphObject = function(e) {
                return arguments.length ? void(x = e) : x
            };
            var de = {};
            return de.sidebar = "1", de.doc = -1, de.cd = 200, de.dd = 120, de.editorMode = "false", de.filter_datatypes = "false", de.filter_objectProperties = "false", de.filter_sco = "false", de.filter_disjoint = "true", de.filter_setOperator = "false", de.mode_dynamic = "true", de.mode_scaling = "true", de.mode_compact = "false", de.mode_colorExt = "true", de.mode_multiColor = "false", de.debugFeatures = "false", de.rect = 0, R.initialConfig = function() {
                var e = {};
                return e.sidebar = "1", e.doc = -1, e.cd = 200, e.dd = 120, e.editorMode = "false", e.filter_datatypes = "false", e.filter_objectProperties = "false", e.filter_sco = "false", e.filter_disjoint = "true", e.filter_setOperator = "false", e.mode_dynamic = "true", e.mode_scaling = "true", e.mode_compact = "false", e.mode_colorExt = "true", e.mode_multiColor = "false", e.mode_pnp = "false", e.debugFeatures = "false", e.rect = 0, e
            }, R.setEditorModeForDefaultObject = function(e) {
                de.editorMode = String(e)
            }, R.setHideDebugFeaturesForDefaultObject = function(e) {
                de.debugFeatures = String(!e)
            }, R.defaultConfig = function() {
                return n(), de
            }, R.exportMenu = function(e) {
                return arguments.length ? void(b = e) : b
            }, R.rectangularRepresentation = function(e) {
                if (!arguments.length) return Q;
                var t = parseInt(e);
                Q = 0 !== t
            }, R.dynamicLabelWidth = function(e) {
                return arguments.length ? void(X = e) : X
            }, R.sidebar = function(e) {
                return arguments.length ? (v = e, R) : v
            }, R.navigationMenu = function(e) {
                return arguments.length ? (m = e, R) : m
            }, R.ontologyMenu = function(e) {
                return arguments.length ? (h = e, R) : h
            }, R.searchMenu = function(e) {
                return arguments.length ? (f = e, R) : f
            }, R.resetMenu = function(e) {
                return arguments.length ? (p = e, R) : p
            }, R.pausedMenu = function(e) {
                return arguments.length ? (c = e, R) : c
            }, R.pickAndPinModule = function(e) {
                return arguments.length ? (d = e, R) : d
            }, R.gravityMenu = function(e) {
                return arguments.length ? (i = e, R) : i
            }, R.filterMenu = function(e) {
                return arguments.length ? (s = e, R) : s
            }, R.modeMenu = function(e) {
                return arguments.length ? (u = e, R) : u
            }, R.charge = function(e) {
                return arguments.length ? (H = +e, R) : H
            }, R.classDistance = function(e) {
                return arguments.length ? (I = +e, R) : I
            }, R.compactNotation = function(e) {
                return arguments.length ? ($ = e, R) : $
            }, R.data = function(e) {
                return arguments.length ? (r = e, R) : r
            }, R.datatypeDistance = function(e) {
                return arguments.length ? (N = +e, R) : N
            }, R.filterModules = function(e) {
                return arguments.length ? (U = e, R) : U
            }, R.graphContainerSelector = function(e) {
                return arguments.length ? (o = e, R) : o
            }, R.gravity = function(e) {
                return arguments.length ? (B = +e, R) : B
            }, R.height = function(e) {
                return arguments.length ? (z = +e, R) : z
            }, R.linkStrength = function(e) {
                return arguments.length ? (W = +e, R) : W
            }, R.loopDistance = function(e) {
                return arguments.length ? (F = e, R) : F
            }, R.minMagnification = function(e) {
                return arguments.length ? (G = +e, R) : G
            }, R.maxMagnification = function(e) {
                return arguments.length ? (Z = +e, R) : Z
            }, R.scaleNodesByIndividuals = function(e) {
                return arguments.length ? (ne = e, R) : ne
            }, R.selectionModules = function(e) {
                return arguments.length ? (q = e, R) : q
            }, R.width = function(e) {
                return arguments.length ? (V = +e, R) : V
            }, R.literalFilter = function(e) {
                return arguments.length ? (a = e, R) : a
            }, R.nodeDegreeFilter = function(e) {
                return arguments.length ? (T = e, R) : T
            }, R.loadingModule = function(e) {
                return arguments.length ? (l = e, R) : l
            }, R.setOptionsFromURL = function(e, n) {
                if (void 0 !== e.sidebar && v.showSidebar(parseInt(e.sidebar), !0), e.doc) {
                    var r = parseInt(e.doc);
                    s.setDegreeSliderValue(r), x.setGlobalDOF(r), de.doc = -1
                }
                var o = !1;
                e.editorMode && ("true" === e.editorMode && (o = !0), t.select("#editorModeModuleCheckbox").node().checked = o, n && n === !0 && x.editorMode(o), de.editorMode = e.editorMode), e.cd && (R.classDistance(e.cd), de.cd = e.cd), e.dd && (R.datatypeDistance(e.dd), de.cd = e.cd), (e.cd || e.dd) && R.gravityMenu().reset(), o = !1, e.filter_datatypes && ("true" === e.filter_datatypes && (o = !0), s.setCheckBoxValue("datatypeFilterCheckbox", o), de.filter_datatypes = e.filter_datatypes), e.debugFeatures && ("true" === e.debugFeatures && (o = !0), ie = o, R.getHideDebugFeatures() === !1 && R.executeHiddenDebugFeatuers(), de.debugFeatures = e.debugFeatures), o = !1, e.filter_objectProperties && ("true" === e.filter_objectProperties && (o = !0), s.setCheckBoxValue("objectPropertyFilterCheckbox", o), de.filter_objectProperties = e.filter_objectProperties), o = !1, e.filter_sco && ("true" === e.filter_sco && (o = !0), s.setCheckBoxValue("subclassFilterCheckbox", o), de.filter_sco = e.filter_sco), o = !1, e.filter_disjoint && ("true" === e.filter_disjoint && (o = !0), s.setCheckBoxValue("disjointFilterCheckbox", o), de.filter_disjoint = e.filter_disjoint), o = !1, e.filter_setOperator && ("true" === e.filter_setOperator && (o = !0), s.setCheckBoxValue("setoperatorFilterCheckbox", o), de.filter_setOperator = e.filter_setOperator), s.updateSettings(), o = !1, e.mode_dynamic && ("true" === e.mode_dynamic && (o = !0), u.setDynamicLabelWidth(o), X = o, de.mode_dynamic = e.mode_dynamic), o = !1, e.mode_pnp && ("true" === e.mode_pnp && (o = !0), u.setCheckBoxValue("pickandpinModuleCheckbox", o), de.mode_pnp = e.mode_pnp), o = !1, e.mode_scaling && ("true" === e.mode_scaling && (o = !0), u.setCheckBoxValue("nodescalingModuleCheckbox", o), de.mode_scaling = e.mode_scaling), o = !1, e.mode_compact && ("true" === e.mode_compact && (o = !0), u.setCheckBoxValue("compactnotationModuleCheckbox", o), de.mode_compact = e.mode_compact), o = !1, e.mode_colorExt && ("true" === e.mode_colorExt && (o = !0), u.setCheckBoxValue("colorexternalsModuleCheckbox", o), de.mode_colorExt = e.mode_colorExt), o = !1, e.mode_multiColor && ("true" === e.mode_multiColor && (o = !0), u.setColorSwitchStateUsingURL(o), de.mode_multiColor = e.mode_multiColor), u.updateSettingsUsingURL(), R.rectangularRepresentation(e.rect)
            }, R
        }
    }).call(t, n(6))
}, function(e, t, n) {
    (function(t) {
        var r = n(46),
            o = n(66)(),
            a = n(67)(),
            i = n(5)(),
            s = n(40)();
        e.exports = function(e) {
            function n(n, r) {
                var o = [],
                    a = u(i);
                return n && n.forEach(function(n) {
                    var i;
                    if (r) {
                        for (var s = 0; s < r.length; s++) {
                            var l = r[s];
                            if (n.id === l.id) {
                                i = l;
                                break
                            }
                        }
                        E(n, i)
                    }
                    var u = a.get(n.type.toLowerCase());
                    if (u) {
                        E(n, u);
                        var c = new u(e);
                        c.annotations(n.annotations).baseIri(n.baseIri).comment(n.comment).complement(n.complement).disjointUnion(n.disjointUnion).description(n.description).equivalents(n.equivalent).id(n.id).intersection(n.intersection).label(n.label).union(n.union).iri(n.iri), n.pos && (c.x = n.pos[0], c.y = n.pos[1], c.px = c.x, c.py = c.y);
                        var d = n.pinned;
                        if (d === !0 && (c.pinned(!0), e.options().pickAndPinModule().addPinnedElement(c)), n.individuals && n.individuals.forEach(function(t) {
                                var n = new u(e);
                                n.label(t.labels).iri(t.iri), c.individuals().push(n)
                            }), n.attributes) {
                            var p = t.set(n.attributes.concat(c.attributes()));
                            c.attributes(p.values())
                        }
                        o.push(c)
                    } else console.error("Unknown element type: " + n.type)
                }), o
            }

            function l(n, r) {
                var o = [],
                    a = u(s);
                return n && n.forEach(function(n) {
                    var i;
                    if (r) {
                        for (var s = 0; s < r.length; s++) {
                            var l = r[s];
                            if (n.id === l.id) {
                                i = l;
                                break
                            }
                        }
                        E(n, i)
                    }
                    var u = a.get(n.type.toLowerCase());
                    if (u) {
                        var c = new u(e);
                        c.annotations(n.annotations).baseIri(n.baseIri).cardinality(n.cardinality).comment(n.comment).domain(n.domain).description(n.description).equivalents(n.equivalent).id(n.id).inverse(n.inverse).label(n.label).minCardinality(n.minCardinality).maxCardinality(n.maxCardinality).range(n.range).subproperties(n.subproperty).superproperties(n.superproperty).iri(n.iri), n.pos && (c.x = n.pos[0], c.y = n.pos[1], c.px = n.pos[0], c.py = n.pos[1]);
                        var d = n.pinned;
                        if (d === !0 && (c.pinned(!0), e.options().pickAndPinModule().addPinnedElement(c)), n.attributes) {
                            var p = t.set(n.attributes.concat(c.attributes()));
                            c.attributes(p.values())
                        }
                        o.push(c)
                    } else console.error("Unknown element type: " + n.type)
                }), o
            }

            function u(e) {
                return t.map(e.values(), function(e) {
                    return (new e).type().toLowerCase()
                })
            }

            function c(t, n) {
                var r = a.merge(t.slice(), n.slice(), j, P, e);
                n.length = 0, Array.prototype.push.apply(n, r), P = x(n)
            }

            function d(e, t) {
                var n = [],
                    r = 0;
                return e.forEach(function(e) {
                    r = Math.max(r, e.individuals().length), e.visible(!0)
                }), e.forEach(function(e) {
                    m(e, t), o.parseClassAttributes(e), e.maxIndividualCount(r)
                }), e.forEach(function(e) {
                    e.visible() && n.push(e)
                }), n
            }

            function p(e) {
                if (e instanceof r != !1) {
                    var t = e.domain(),
                        n = e.range();
                    t.disjointWith() || t.disjointWith([]), n.disjointWith() || n.disjointWith([]), t.disjointWith().push(e.range()), n.disjointWith().push(e.domain())
                }
            }

            function f(e, t, n) {
                var r = [];
                return e.forEach(function(e) {
                    e.visible(!0)
                }), e.forEach(function(e) {
                    var r, o, a, i, s;
                    if (e.domain() && e.range() || e.inverse()) {
                        var l = O(e.inverse());
                        l && (s = n[l], s || (console.warn("No inverse property was found for id: " + l), e.inverse(void 0))), "undefined" != typeof e.domain() && "undefined" != typeof e.range() ? (r = O(e.domain()), o = O(e.range()), a = t[r], i = t[o]) : s ? (r = O(s.range()), o = O(s.domain()), a = t[r], i = t[o]) : console.warn("Domain and range not found for property: " + e.id()), e.domain(a), e.range(i), s && (e.inverse(s), s.inverse(e), s.domain(i), s.range(a))
                    }
                    h(e.subproperties()), h(e.superproperties())
                }), e.forEach(function(e) {
                    m(e, n), p(e), o.parsePropertyAttributes(e)
                }), e.forEach(function(t) {
                    var n = !1;
                    if (void 0 === t.domain()) return void console.warn("No Domain was found for id:" + t.id());
                    if (v(t.domain()) && (t.domain(t.domain().equivalentBase()), n = !0), void 0 === t.range()) return void console.warn("No range was found for id:" + t.id());
                    v(t.range()) && (t.range(t.range().equivalentBase()), n = !0);
                    var o = g(e, t);
                    n && o && (t.visible(!1), o.redundantProperties().push(t)), t.domain().visible() && t.range().visible() || t.visible(!1), t.visible() && r.push(t)
                }), r
            }

            function h(e) {
                var t, n;
                if (e)
                    for (t = 0, n = e.length; t < n; ++t) {
                        var r = O(e[t]),
                            o = j[r];
                        o ? e[t] = o : console.warn("No sub-/superproperty was found for id: " + r)
                    }
            }

            function v(e) {
                return !e.visible() && e.equivalentBase()
            }

            function g(e, t) {
                var n, r, o;
                for (n = 0, r = e.length; n < r; n++)
                    if (o = e[n], t !== o && t.domain() === o.domain() && t.range() === o.range())
                        if (t.iri() && o.iri()) {
                            if (t.iri() === o.iri()) return o
                        } else if (t.type() === o.type() && t.defaultLabel() === o.defaultLabel()) return o
            }

            function y(e, t) {
                function n(e, n, r) {
                    n && n.forEach(function(n, o) {
                        var a = {
                            id: "GENERATED-" + r + "-" + e + "-" + n + "-" + o,
                            type: "setOperatorProperty",
                            domain: e,
                            range: n
                        };
                        t.push(a)
                    })
                }
                e.forEach(function(e) {
                    n(e.id(), e.complement(), "COMPLEMENT"), n(e.id(), e.intersection(), "INTERSECTION"), n(e.id(), e.union(), "UNION"), n(e.id(), e.disjointUnion(), "DISJOINTUNION")
                })
            }

            function m(e, t) {
                var n = e.equivalents();
                if (n && !e.equivalentBase())
                    for (var r = 0, o = n.length; r < o; ++r) {
                        var a = O(n[r]),
                            i = t[a];
                        i ? (i.equivalents(i.equivalents()), i.equivalents().push(e), i.equivalentBase(e), n[r] = i, i.visible(!1)) : console.warn("No class/property was found for equivalent id: " + a)
                    }
            }

            function b(e, t) {
                e.forEach(function(e) {
                    "string" == typeof e.iri() && e.iri(w(e.iri(), t))
                })
            }

            function x(e) {
                for (var t = {}, n = 0, r = e.length; n < r; n++) {
                    var o = e[n];
                    t[o.id()] = o
                }
                return t
            }

            function E(e, t) {
                t = t || {};
                for (var n in t) n in e || !t.hasOwnProperty(n) || (e[n] = t[n]);
                return e
            }

            function w(e, t) {
                var n = e.indexOf(":");
                if (n === -1) return e;
                for (var r = e.substring(0, n), o = 0, a = t.length; o < a; ++o) {
                    var i = t[o];
                    if (r === i.name) return i.iri + e.substring(n + 1)
                }
                return e
            }

            function O(e) {
                return e ? "string" == typeof e ? e : "id" in e ? e.id() : void console.warn("No Id was found for this object: " + e) : void 0
            }
            var C, k, P, _, j, M = {},
                D = !1,
                L = !1,
                A = [];
            return M.getDictionary = function() {
                return A
            }, M.setDictionary = function(e) {
                A = e
            }, M.settingsImported = function() {
                return D
            }, M.settingsImportGraphZoomAndTranslation = function() {
                return L
            }, M.parseSettings = function() {
                if (D = !0, L = !1, !_) return void(D = !1);
                if (_.global) {
                    if (_.global.zoom) {
                        var t = _.global.zoom;
                        e.setZoom(t), L = !0
                    }
                    if (_.global.translation) {
                        var n = _.global.translation;
                        e.setTranslation(n), L = !0
                    }
                    if (_.global.paused) {
                        var r = _.global.paused;
                        e.options().pausedMenu().setPauseValue(r)
                    }
                }
                if (_.gravity) {
                    if (_.gravity.classDistance) {
                        var o = _.gravity.classDistance;
                        e.options().classDistance(o)
                    }
                    if (_.gravity.datatypeDistance) {
                        var a = _.gravity.datatypeDistance;
                        e.options().datatypeDistance(a)
                    }
                    e.options().gravityMenu().reset()
                }
                var i, s, l;
                if (_.filter) {
                    if (_.filter.checkBox) {
                        var u = _.filter.checkBox;
                        for (i = 0; i < u.length; i++) s = u[i].id, l = u[i].checked, e.options().filterMenu().setCheckBoxValue(s, l)
                    }
                    if (_.filter.degreeSliderValue) {
                        var c = _.filter.degreeSliderValue;
                        e.options().filterMenu().setDegreeSliderValue(c)
                    }
                    e.options().filterMenu().updateSettings()
                }
                if (_.modes) {
                    if (_.modes.checkBox) {
                        var d = _.modes.checkBox;
                        for (i = 0; i < d.length; i++) s = d[i].id, l = d[i].checked, e.options().modeMenu().setCheckBoxValue(s, l)
                    }
                    var p = _.modes.colorSwitchState;
                    p !== !0 && p !== !1 || e.options().modeMenu().setColorSwitchState(p), e.options().modeMenu().updateSettings()
                }
                e.updateStyle()
            }, M.parse = function(e) {
                if (!e) return C = [], k = [], void(A = []);
                A = [], _ = e.settings ? e.settings : void 0;
                var t, r = n(e.class, e.classAttribute),
                    o = n(e.datatype, e.datatypeAttribute),
                    a = r.concat(o),
                    i = e.property || [];
                y(a, i), t = l(i, e.propertyAttribute), P = x(a), j = x(t), c(t, a), b(a, e.namespace), b(t, e.namespace), C = d(a, P), k = f(t, P, j)
            }, M.nodes = function() {
                return C
            }, M.properties = function() {
                return k
            }, M
        }
    }).call(t, n(6))
}, function(e, t) {
    e.exports = function() {
        function e(e) {
            b.forEach(function(n) {
                t(e, n)
            })
        }

        function t(e, t) {
            var n, r, o;
            for (n = 0, r = t.length; n < r; n++)
                if (o = t[n], e.attributes().indexOf(o) >= 0) {
                    e.visualAttributes().push(o);
                    break
                }
        }

        function n(e) {
            var t, n, r;
            for (t = 0, n = x.length; t < n; t++) r = x[t], e.attributes().indexOf(r) >= 0 && e.indications().push(r)
        }

        function r(e) {
            var t, n, r;
            for (t = 0, n = E.length; t < n; t++) r = E[t], e.attributes().indexOf(r) >= 0 && e.indications().push(r)
        }
        var o = {},
            a = "anonymous",
            i = "datatype",
            s = "deprecated",
            l = "external",
            u = "object",
            c = "rdf",
            d = "asymmetric",
            p = "functional",
            f = "inverse functional",
            h = "irreflexive",
            v = "key",
            g = "reflexive",
            y = "symmetric",
            m = "transitive",
            b = [
                [s, i, u, c],
                [a]
            ],
            x = [s, l],
            E = [d, p, f, h, v, g, y, m];
        return o.parseClassAttributes = function(t) {
                t.attributes() instanceof Array && (e(t), n(t))
            }, o.parsePropertyAttributes = function(t) {
                t.attributes() instanceof Array && (e(t), r(t))
            },
            function() {
                return o
            }
    }()
}, function(e, t, n) {
    (function(t) {
        function r(e) {
            return function(t) {
                return e[t]
            }
        }

        function o(e, n) {
            var r = a(e, n),
                o = t.set(r.keys());
            if (o.remove(v), o.remove(g), 1 === o.size()) {
                var i = o.values()[0],
                    s = r.get(i);
                if (1 === s.length) return s[0]
            }
        }

        function a(e, n) {
            var r = t.map();
            return e.forEach(function(e) {
                if (void 0 !== e) {
                    var t = n[e.range()],
                        o = t.type();
                    r.has(o) || r.set(o, []), r.get(o).push(t)
                }
            }), r
        }

        function i(e, t) {
            var n;
            return n = p.isDatatypeProperty(e) ? new d(t) : new c(t), n.id(h + e.id()), n
        }

        function s(e, t, n, r) {
            var o = [];
            return e.forEach(function(e) {
                if (void 0 !== e && void 0 !== t) {
                    var a = e.range();
                    e.range(t.id()), l(a, n) || o.push(a), r.add(e.id())
                }
            }), o
        }

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (r.domain() === e || r.range() === e) return !0
            }
            return !1
        }

        function u(e, t) {
            var n = [];
            return e.forEach(function(e) {
                t.has(e.id()) || n.push(e)
            }), n
        }
        var c = n(31),
            d = n(38),
            p = n(63)(),
            f = {};
        e.exports = function() {
            return f
        };
        var h = "GENERATED-MERGED_RANGE-",
            v = "owl:Thing",
            g = "rdfs:Literal";
        f.merge = function(e, n, a, l, c) {
            for (var d = t.set(), p = t.set(), f = [], h = 0; h < e.length; h++) {
                var v = e[h],
                    g = v.equivalents().map(r(a));
                if (0 !== g.length && !p.has(v.id())) {
                    var y = g.concat(v),
                        m = o(y, l);
                    m || void 0 !== m && (m = i(v, c), f.push(m));
                    for (var b = s(y, m, e, p), x = 0; x < b.length; x++) d.add(b[x])
                }
            }
            return u(n.concat(f), d)
        }
    }).call(t, n(6))
}, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            var n = {};
            return n.nodeId = 10001, n.parent = void 0, n.x = 0, n.y = 0, n.rootElement = void 0, n.rootNodeLayer = void 0, n.pathLayer = void 0, n.mouseEnteredVar = !1, n.mouseButtonPressed = !1, n.nodeElement = void 0, n.draggerObject = void 0, n.pathElement = void 0, n.typus = "Class_dragger", n.type = function() {
                return n.typus
            }, n.parentNode = function() {
                return n.parent
            }, n.hideClass_dragger = function(e) {
                n.pathElement.classed("hidden", e), n.nodeElement.classed("hidden", e), n.draggerObject.classed("hidden", e)
            }, n.setParentNode = function(e) {
                n.parent = e, n.mouseButtonPressed === !1 && (n.parent.actualRadius && n.parent.actualRadius() ? (n.x = n.parent.x + 10 + n.parent.actualRadius(), n.y = n.parent.y + 10 + n.parent.actualRadius()) : (n.x = n.parent.x + 60, n.y = n.parent.y + 60)), n.updateElement()
            }, n.hideDragger = function(e) {
                n.pathElement && n.pathElement.classed("hidden", e), n.nodeElement && n.nodeElement.classed("hidden", e), n.draggerObject && n.draggerObject.classed("hidden", e)
            }, n.id = function(e) {
                return arguments.length ? void(n.nodeId = e) : n.nodeId
            }, n.svgPathLayer = function(e) {
                n.pathLayer = e.append("g")
            }, n.svgRoot = function(e) {
                return arguments.length ? (n.rootElement = e, n.rootNodeLayer = n.rootElement.append("g"), void n.addMouseEvents()) : n.rootElement
            }, n.drawNode = function() {
                n.pathElement = n.pathLayer.append("line").classed("classNodeDragPath", !0), n.pathElement.attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0);
                var r = (t.svg.line().x(function(e) {
                    return e.x
                }).y(function(e) {
                    return e.y
                }).interpolate("basis-closed"), "M 20,40 C 0,15 0,-15 20,-40 L -40,0 Z");
                n.nodeElement = n.rootNodeLayer.append("path").attr("d", r), n.nodeElement.classed("classDraggerNode", !0), n.draggerObject = n.rootNodeLayer.append("circle"), e.options().useAccuracyHelper() && (n.draggerObject.attr("r", 40).attr("cx", 0).attr("cy", 0).classed("superHiddenElement", !0), n.draggerObject.classed("superOpacityElement", !e.options().showDraggerObject()))
            }, n.updateElement = function() {
                if (n.pathElement) {
                    var e = n.parent.x,
                        t = n.parent.y,
                        r = n.x,
                        o = n.y,
                        a = r - e,
                        i = o - t,
                        s = Math.sqrt(a * a + i * i),
                        l = a / s,
                        u = i / s,
                        c = e + l * n.parent.actualRadius(),
                        d = t + u * n.parent.actualRadius(),
                        p = 15 * l,
                        f = 15 * u;
                    n.draggerObject.attr("cx", p).attr("cy", f), n.pathElement.attr("x1", c).attr("y1", d).attr("x2", r).attr("y2", o)
                }
                var h = 180 * Math.atan2(n.parent.y - n.y, n.parent.x - n.x) / Math.PI;
                n.nodeElement.attr("transform", "translate(" + n.x + "," + n.y + ")rotate(" + h + ")"), n.draggerObject.attr("transform", "translate(" + n.x + "," + n.y + ")")
            }, n.addMouseEvents = function() {
                n.rootNodeLayer.selectAll("*").on("mouseover", n.onMouseOver).on("mouseout", n.onMouseOut).on("click", function() {}).on("dblclick", function() {}).on("mousedown", n.mouseDown).on("mouseup", n.mouseUp)
            }, n.mouseDown = function() {
                n.nodeElement.style("cursor", "move"), n.nodeElement.classed("classDraggerNodeHovered", !0), n.mouseButtonPressed = !0, console.log("Mouse DOWN from Dragger")
            }, n.mouseUp = function() {
                n.nodeElement.style("cursor", "auto"), n.mouseButtonPressed = !1, console.log("Mouse UP from Dragger")
            }, n.mouseEntered = function(e) {
                return arguments.length ? (n.mouseEnteredVar = e, n) : n.mouseEnteredVar
            }, n.selectedViaTouch = function(e) {
                n.nodeElement.classed("classDraggerNode", !e), n.nodeElement.classed("classDraggerNodeHovered", e)
            }, n.onMouseOver = function() {
                if (!n.mouseEntered()) {
                    n.nodeElement.classed("classDraggerNode", !1), n.nodeElement.classed("classDraggerNodeHovered", !0);
                    var e = n.rootElement.node(),
                        t = e.parentNode;
                    t.appendChild(e), n.mouseEntered(!0)
                }
            }, n.onMouseOut = function() {
                n.mouseButtonPressed !== !0 && (n.nodeElement.classed("classDraggerNodeHovered", !1), n.nodeElement.classed("classDraggerNode", !0), n.mouseEntered(!1))
            }, n.setPosition = function(e, t) {
                n.x = e, n.y = t, n.updateElement()
            }, n.setAdditionalClassForClass_dragger = function(e, t) {}, n
        }
    }).call(t, n(6))
}, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            var n = {};
            return n.nodeId = 10002, n.parent = void 0, n.x = 0, n.y = 0, n.rootElement = void 0, n.rootNodeLayer = void 0, n.pathLayer = void 0, n.mouseEnteredVar = !1, n.mouseButtonPressed = !1, n.nodeElement = void 0, n.draggerObject = void 0, n.pathElement = void 0, n.typus = "Range_dragger", n.type = function() {
                return n.typus
            }, n.parentNode = function() {
                return n.parent
            }, n.hide_dragger = function(e) {
                n.pathElement.classed("hidden", e), n.nodeElement.classed("hidden", e), n.draggerObject.classed("hidden", e)
            }, n.hideDragger = function(e) {
                n.pathElement && n.pathElement.classed("hidden", e), n.nodeElement && n.nodeElement.classed("hidden", e), n.draggerObject && n.draggerObject.classed("hidden", e)
            }, n.reDrawEverthing = function() {
                n.setParentProperty(n.parent)
            }, n.updateRange = function(t) {
                if (e.genericPropertySanityCheck(n.parent.domain(), t, n.parent.type(), "Could not update range", "Restoring previous range") !== !1 && e.propertyCheckExistenceChecker(n.parent, n.parent.domain(), t) !== !1 && void 0 !== n.parent.labelElement()) {
                    if ("translate(0,15)" === n.parent.labelElement().attr("transform") || "translate(0,-15)" === n.parent.labelElement().attr("transform")) {
                        var r = n.parent;
                        n.parent.inverse().inverse(null), n.parent.inverse(null), r.range(t)
                    } else n.parent.range(t);
                    var o = t.x,
                        a = t.y,
                        i = n.parent.domain().x,
                        s = n.parent.domain().y,
                        l = .49 * (i + o),
                        u = .49 * (s + a);
                    n.parent.labelElement().x = l, n.parent.labelElement().px = l, n.parent.labelElement().y = u, n.parent.labelElement().py = u
                }
            }, n.setParentProperty = function(e, t) {
                n.parent = e;
                var r, o;
                n.isLoopProperty = !1, e.domain() === e.range() && (n.isLoopProperty = !0), n.parent = e, o = e.labelObject(), t === !0 && e.labelElement() && "translate(0,15)" === e.labelElement().attr("transform") ? (r = o.linkDomainIntersection, o.linkDomainIntersection && (n.x = r.x, n.y = r.y)) : (r = o.linkRangeIntersection, o.linkRangeIntersection && (n.x = r.x, n.y = r.y)), n.updateElement()
            }, n.id = function(e) {
                return arguments.length ? void(n.nodeId = e) : n.nodeId
            }, n.svgPathLayer = function(e) {
                n.pathLayer = e.append("g")
            }, n.svgRoot = function(e) {
                return arguments.length ? (n.rootElement = e, n.rootNodeLayer = n.rootElement.append("g"), void n.addMouseEvents()) : n.rootElement
            }, n.drawNode = function() {
                n.pathElement = n.pathLayer.append("line").classed("classNodeDragPath", !0), n.pathElement.attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0);
                var r = (t.svg.line().x(function(e) {
                    return e.x
                }).y(function(e) {
                    return e.y
                }).interpolate("basis-closed"), "M 61,40 C 41,15 41,-15 61,-40 L 1,0 Z");
                n.nodeElement = n.rootNodeLayer.append("path").attr("d", r), n.nodeElement.classed("classDraggerNode", !0), e.options().useAccuracyHelper() && (n.draggerObject = n.rootNodeLayer.append("circle"), n.draggerObject.attr("r", 40).attr("cx", 0).attr("cy", 0).classed("superHiddenElement", !0), n.draggerObject.classed("superOpacityElement", !e.options().showDraggerObject()))
            }, n.updateElementViaDomainDragger = function(e, t) {
                var r = e,
                    o = t,
                    a = n.parent.range().x,
                    i = n.parent.range().y,
                    s = e - a,
                    l = t - i,
                    u = Math.sqrt(s * s + l * l),
                    c = s / u,
                    d = l / u,
                    p = a + c * n.parent.range().actualRadius(),
                    f = i + d * n.parent.range().actualRadius(),
                    h = r - p,
                    v = o - f;
                u = Math.sqrt(h * h + v * v), c = h / u, d = v / u;
                var g = 180 * Math.atan2(f - o, p - r) / Math.PI + 180;
                n.nodeElement.attr("transform", "translate(" + p + "," + f + ")rotate(" + g + ")");
                var y = p + 40 * c,
                    m = f + 40 * d;
                n.draggerObject.attr("transform", "translate(" + y + "," + m + ")")
            }, n.updateElement = function() {
                if (n.mouseButtonPressed !== !0 && void 0 !== n.parent) {
                    var e = n.parent.range(),
                        t = n.parent.labelObject().linkRangeIntersection;
                    if (void 0 !== n.parent.labelElement()) {
                        var r = 48;
                        if ("translate(0,15)" === n.parent.labelElement().attr("transform") && (e = n.parent.inverse().domain(), t = n.parent.labelObject().linkDomainIntersection, r = -48), void 0 !== t) {
                            var o = e.x,
                                a = e.y,
                                i = t.x,
                                s = t.y,
                                l = o - i,
                                u = a - s,
                                c = Math.sqrt(l * l + u * u),
                                d = l / c,
                                p = u / c,
                                f = 180 * Math.atan2(s - a, i - o) / Math.PI,
                                h = i - 40 * d,
                                v = s - 40 * p;
                            n.isLoopProperty === !0 && (f -= r), n.nodeElement.attr("transform", "translate(" + i + "," + s + ")rotate(" + f + ")"), n.draggerObject.attr("transform", "translate(" + h + "," + v + ")")
                        }
                    }
                }
            }, n.addMouseEvents = function() {
                var e = n.rootNodeLayer.selectAll("*");
                e.on("mouseover", n.onMouseOver).on("mouseout", n.onMouseOut).on("click", function() {}).on("dblclick", function() {}).on("mousedown", n.mouseDown).on("mouseup", n.mouseUp)
            }, n.mouseDown = function() {
                n.nodeElement.style("cursor", "move"), n.nodeElement.classed("classDraggerNodeHovered", !0), n.mouseButtonPressed = !0
            }, n.mouseUp = function() {
                n.nodeElement.style("cursor", "auto"), n.nodeElement.classed("classDraggerNodeHovered", !1), n.mouseButtonPressed = !1
            }, n.mouseEntered = function(e) {
                return arguments.length ? (n.mouseEnteredVar = e, n) : n.mouseEnteredVar
            }, n.selectedViaTouch = function(e) {
                n.nodeElement.classed("classDraggerNode", !e), n.nodeElement.classed("classDraggerNodeHovered", e)
            }, n.onMouseOver = function() {
                if (!n.mouseEntered()) {
                    n.nodeElement.classed("classDraggerNode", !1), n.nodeElement.classed("classDraggerNodeHovered", !0);
                    var e = n.rootElement.node(),
                        t = e.parentNode;
                    t.appendChild(e), n.mouseEntered(!0)
                }
            }, n.onMouseOut = function() {
                n.mouseButtonPressed !== !0 && (n.nodeElement.classed("classDraggerNodeHovered", !1), n.nodeElement.classed("classDraggerNode", !0), n.mouseEntered(!1))
            }, n.setPosition = function(e, t) {
                var r = n.parent.domain().x,
                    o = n.parent.domain().y,
                    a = e,
                    i = t,
                    s = r - a,
                    l = o - i,
                    u = Math.sqrt(s * s + l * l),
                    c = s / u,
                    d = l / u,
                    p = 180 * Math.atan2(l, s) / Math.PI,
                    f = a + 40 * c,
                    h = i + 40 * d;
                n.nodeElement.attr("transform", "translate(" + a + "," + i + ")rotate(" + p + ")"), n.draggerObject.attr("transform", "translate(" + f + "," + h + ")"), n.x = e, n.y = t
            }, n.setAdditionalClassForClass_dragger = function(e, t) {}, n
        }
    }).call(t, n(6))
}, function(e, t) {
    e.exports = function(e) {
        var t = {};
        return t.nodeId = 10002, t.parent = void 0, t.x = 0, t.y = 0, t.rootElement = void 0, t.rootNodeLayer = void 0, t.pathLayer = void 0, t.mouseEnteredVar = !1, t.mouseButtonPressed = !1, t.nodeElement = void 0, t.draggerObject = void 0, t.pathElement = void 0, t.typus = "Domain_dragger", t.type = function() {
            return t.typus
        }, t.parentNode = function() {
            return t.parent
        }, t.hide_dragger = function(e) {
            t.pathElement.classed("hidden", e), t.nodeElement.classed("hidden", e), t.draggerObject.classed("hidden", e)
        }, t.reDrawEverthing = function() {
            t.setParentProperty(t.parent)
        }, t.updateDomain = function(n) {
            if (e.genericPropertySanityCheck(t.parent.range(), n, t.parent.type(), "Could not update domain", "Restoring previous domain") === !1) return void t.updateElement();
            if (e.propertyCheckExistenceChecker(t.parent, n, t.parent.range()) !== !1) {
                if (void 0 === t.parent.labelElement()) return void t.updateElement();
                if ("translate(0,15)" === t.parent.labelElement().attr("transform") || "translate(0,-15)" === t.parent.labelElement().attr("transform")) {
                    var r = t.parent;
                    t.parent.inverse().inverse(null), t.parent.inverse(null), console.log("SPLITTING ITEMS!"), r.domain(n)
                } else t.parent.domain(n);
                var o = t.parent.range().x,
                    a = t.parent.range().y,
                    i = n.x,
                    s = n.y,
                    l = .49 * (i + o),
                    u = .49 * (s + a);
                t.parent.labelObject().x = l, t.parent.labelObject().px = l, t.parent.labelObject().y = u, t.parent.labelObject().py = u, t.updateElement()
            }
        }, t.setParentProperty = function(e, n) {
            t.invertedProperty = n;
            var r, o;
            t.isLoopProperty = !1, e.domain() === e.range() && (t.isLoopProperty = !0), t.parent = e, r = e.labelObject(), n === !0 && e.labelElement() && "translate(0,15)" === e.labelElement().attr("transform") ? (o = r.linkRangeIntersection, r.linkRangeIntersection && (t.x = o.x, t.y = o.y)) : (o = r.linkDomainIntersection, r.linkDomainIntersection && (t.x = o.x, t.y = o.y)), t.updateElement()
        }, t.hideDragger = function(e) {
            t.pathElement && t.pathElement.classed("hidden", e), t.nodeElement && t.nodeElement.classed("hidden", e), t.draggerObject && t.draggerObject.classed("hidden", e)
        }, t.id = function(e) {
            return arguments.length ? void(t.nodeId = e) : t.nodeId
        }, t.svgPathLayer = function(e) {
            t.pathLayer = e.append("g")
        }, t.svgRoot = function(e) {
            return arguments.length ? (t.rootElement = e, t.rootNodeLayer = t.rootElement.append("g"), void t.addMouseEvents()) : t.rootElement
        }, t.drawNode = function() {
            t.pathElement = t.pathLayer.append("line").classed("classNodeDragPath", !0), t.pathElement.attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0);
            var n = "M 10,40 C -10,15 -10,-15 10,-40 -8.8233455,-13.641384 -36.711107,-5.1228436 -50,0 -36.696429,4.9079017 -8.6403157,13.745728 10,40 Z";
            t.nodeElement = t.rootNodeLayer.append("path").attr("d", n), t.nodeElement.classed("classDraggerNode", !0), e.options().useAccuracyHelper() && (t.draggerObject = t.rootNodeLayer.append("circle"), t.draggerObject.attr("r", 40).attr("cx", 0).attr("cy", 0).classed("superHiddenElement", !0), t.draggerObject.classed("superOpacityElement", !e.options().showDraggerObject()))
        }, t.updateElementViaRangeDragger = function(e, n) {
            var r = e,
                o = n,
                a = t.parent.domain().x,
                i = t.parent.domain().y,
                s = e - a,
                l = n - i,
                u = Math.sqrt(s * s + l * l),
                c = s / u,
                d = l / u,
                p = a + c * t.parent.domain().actualRadius(),
                f = i + d * t.parent.domain().actualRadius(),
                h = 180 * Math.atan2(f - o, p - r) / Math.PI;
            t.nodeElement.attr("transform", "translate(" + p + "," + f + ")rotate(" + h + ")");
            var v = p + 20 * c,
                g = f + 20 * d;
            t.draggerObject.attr("transform", "translate(" + v + "," + g + ")")
        }, t.updateElement = function() {
            if (t.mouseButtonPressed !== !0 && void 0 !== t.parent) {
                var e = t.parent.domain(),
                    n = t.parent.labelObject().linkDomainIntersection;
                if (void 0 !== t.parent.labelElement()) {
                    "translate(0,15)" === t.parent.labelElement().attr("transform") && (t.parent.inverse().domain(), n = t.parent.labelObject().linkRangeIntersection);
                    var r = e.x,
                        o = e.y;
                    if (void 0 !== n) {
                        var a = n.x,
                            i = n.y,
                            s = r - a,
                            l = o - i,
                            u = Math.sqrt(s * s + l * l),
                            c = s / u,
                            d = l / u,
                            p = a - 20 * c,
                            f = i - 20 * d,
                            h = 180 * Math.atan2(i - o, a - r) / Math.PI + 180;
                        t.nodeElement.attr("transform", "translate(" + a + "," + i + ")rotate(" + h + ")"), t.draggerObject.attr("transform", "translate(" + p + "," + f + ")")
                    }
                }
            }
        }, t.addMouseEvents = function() {
            var e = t.rootNodeLayer.selectAll("*");
            e.on("mouseover", t.onMouseOver).on("mouseout", t.onMouseOut).on("click", function() {}).on("dblclick", function() {}).on("mousedown", t.mouseDown).on("mouseup", t.mouseUp)
        }, t.mouseDown = function() {
            t.nodeElement.style("cursor", "move"), t.nodeElement.classed("classDraggerNodeHovered", !0), t.mouseButtonPressed = !0
        }, t.mouseUp = function() {
            t.nodeElement.style("cursor", "auto"), t.nodeElement.classed("classDraggerNodeHovered", !1), t.mouseButtonPressed = !1
        }, t.mouseEntered = function(e) {
            return arguments.length ? (t.mouseEnteredVar = e, t) : t.mouseEnteredVar
        }, t.selectedViaTouch = function(e) {
            t.nodeElement.classed("classDraggerNode", !e), t.nodeElement.classed("classDraggerNodeHovered", e)
        }, t.onMouseOver = function() {
            if (!t.mouseEntered()) {
                t.nodeElement.classed("classDraggerNode", !1), t.nodeElement.classed("classDraggerNodeHovered", !0);
                var e = t.rootElement.node(),
                    n = e.parentNode;
                n.appendChild(e), t.mouseEntered(!0)
            }
        }, t.onMouseOut = function() {
            t.mouseButtonPressed !== !0 && (t.nodeElement.classed("classDraggerNodeHovered", !1), t.nodeElement.classed("classDraggerNode", !0), t.mouseEntered(!1))
        }, t.setPosition = function(e, n) {
            var r = t.parent.range().x,
                o = t.parent.range().y,
                a = e,
                i = n,
                s = r - a,
                l = o - i,
                u = Math.sqrt(s * s + l * l),
                c = s / u,
                d = l / u,
                p = a + 20 * c,
                f = i + 20 * d,
                h = 180 * Math.atan2(o - i, r - a) / Math.PI + 180;
            t.nodeElement.attr("transform", "translate(" + a + "," + i + ")rotate(" + h + ")"), t.draggerObject.attr("transform", "translate(" + p + "," + f + ")"), t.x = e, t.y = n
        }, t.setAdditionalClassForClass_dragger = function(e, t) {}, t
    }
}, function(e, t, n) {
    var r = n(14),
        o = n(63)(),
        a = n(43)();
    e.exports = function(e) {
        var t = {};
        return t.nodeId = 10003, t.parent = void 0, t.s_x = 0, t.s_y = 0, t.e_x = 0, t.e_y = 0, t.rootElement = void 0, t.rootNodeLayer = void 0, t.pathLayer = void 0, t.nodeElement = void 0, t.pathElement = void 0, t.typus = "shadowClone", t.type = function() {
            return t.typus
        }, t.parentNode = function() {
            return t.parent
        }, t.setParentProperty = function(e, n) {
            t.invertedProperty = n, t.parent = e;
            var a;
            if (n === !0) {
                if (a = e.inverse().labelObject(), a.linkRangeIntersection && a.linkDomainIntersection) {
                    var i = a.linkDomainIntersection,
                        s = a.linkRangeIntersection;
                    t.s_x = s.x, t.s_y = s.y, t.e_x = i.x, t.e_y = i.y
                }
            } else if (a = e.labelObject(), a.linkRangeIntersection && a.linkDomainIntersection) {
                var l = a.linkRangeIntersection,
                    u = a.linkDomainIntersection;
                t.s_x = u.x, t.s_y = u.y, t.e_x = l.x, t.e_y = l.y
            }
            if (t.rootNodeLayer.remove(), t.rootNodeLayer = t.rootElement.append("g"), t.rootNodeLayer.datum(e), t.pathElement.remove(), t.pathElement = t.pathLayer.append("line"), t.markerElement = t.pathLayer.append("marker"), t.markerElement.attr("id", "shadowCloneMarker"), t.pathElement.attr("x1", t.e_x).attr("y1", t.e_y).attr("x2", t.s_x).attr("y2", t.s_y), t.pathElement.classed(e.linkType(), !0), e.markerElement()) {
                t.markerElement.attr("viewBox", e.markerElement().attr("viewBox")).attr("markerWidth", e.markerElement().attr("markerWidth")).attr("markerHeight", e.markerElement().attr("markerHeight")).attr("orient", e.markerElement().attr("orient"));
                var c = e.markerElement().select("path");
                t.markerElement.append("path").attr("d", c.attr("d")).classed(e.markerType(), !0), t.pathElement.attr("marker-end", "url(#shadowCloneMarker)"), t.markerElement.classed("hidden", !o.isDatatypeProperty(e))
            }
            var d = t.rootNodeLayer.append("rect").classed(e.styleClass(), !0).classed("property", !0).attr("x", -e.width() / 2).attr("y", -e.height() / 2).attr("width", e.width()).attr("height", e.height());
            e.visualAttributes() && d.classed(e.visualAttributes(), !0), d.classed("datatype", !1);
            var p = e.backgroundColor();
            e.attributes().indexOf("deprecated") > -1 ? (p = void 0, d.classed("deprecatedproperty", !0)) : d.classed("deprecatedproperty", !1), d.style("fill", p);
            var f = e.equivalentsString(),
                h = f ? "," : "",
                v = new r(t.rootNodeLayer, p);
            v.addText(e.labelForCurrentLanguage(), "", h), v.addEquivalents(f), v.addSubText(e.indicationString());
            var g = .5 * (t.s_x + t.e_x),
                y = .5 * (t.s_y + t.e_y);
            t.rootNodeLayer.attr("transform", "translate(" + g + "," + y + ")"), t.rootNodeLayer.classed("hidden", !0), t.pathElement.classed("hidden", !0)
        }, t.hideClone = function(e) {
            t.rootNodeLayer && t.rootNodeLayer.classed("hidden", e), t.pathElement && t.pathElement.classed("hidden", e)
        }, t.hideParentProperty = function(e) {
            var n = t.parent.labelObject();
            n && ("translate(0,15)" !== t.parent.labelElement().attr("transform") && "translate(0,-15)" !== t.parent.labelElement().attr("transform") || t.parent.inverse().hide(e)), t.parent.hide(e)
        }, t.id = function(e) {
            return arguments.length ? void(t.nodeId = e) : t.nodeId
        }, t.svgPathLayer = function(e) {
            t.pathLayer = e.append("g")
        }, t.svgRoot = function(e) {
            return arguments.length ? (t.rootElement = e, void(t.rootNodeLayer = t.rootElement.append("g"))) : t.rootElement
        }, t.drawClone = function() {
            t.pathElement = t.pathLayer.append("line"), t.pathElement.attr("x1", 0).attr("y1", 0).attr("x2", 0).attr("y2", 0)
        }, t.updateElement = function() {
            t.pathElement.attr("x1", t.e_x).attr("y1", t.e_y).attr("x2", t.s_x).attr("y2", t.s_y);
            var e = .5 * (t.s_x + t.e_x),
                n = .5 * (t.s_y + t.e_y);
            t.rootNodeLayer.attr("transform", "translate(" + e + "," + n + ")")
        }, t.setInitialPosition = function() {
            var e = t.parent.labelObject();
            if (e.linkRangeIntersection && e.linkDomainIntersection) {
                var n = e.linkRangeIntersection,
                    r = e.linkDomainIntersection;
                t.e_x = r.x, t.e_y = r.y, t.s_x = n.x, t.s_y = n.y
            }
            t.updateElement()
        }, t.setPositionDomain = function(e, n) {
            var r = t.parent.range().x,
                i = t.parent.range().y;
            if (o.isDatatype(t.parent.range()) === !0) {
                var s = a.calculateIntersection({
                    x: e,
                    y: n
                }, t.parent.range(), 0);
                t.s_x = s.x, t.s_y = s.y
            } else {
                var l = r - e,
                    u = i - n,
                    c = Math.sqrt(l * l + u * u),
                    d = l / c,
                    p = u / c;
                t.s_x = r - d * t.parent.range().actualRadius(), t.s_y = i - p * t.parent.range().actualRadius()
            }
            t.e_x = e, t.e_y = n, t.updateElement()
        }, t.setPosition = function(e, n) {
            t.s_x = e, t.s_y = n;
            var r = t.parent.domain().x,
                o = t.parent.domain().y,
                a = e - r,
                i = n - o,
                s = Math.sqrt(a * a + i * i),
                l = a / s,
                u = i / s;
            t.e_x = r + l * t.parent.domain().actualRadius(), t.e_y = o + u * t.parent.domain().actualRadius(), t.updateElement()
        }, t
    }
}, function(e, t) {
    e.exports = function(e) {
        function t(e) {
            var t = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
            return t.test(e)
        }

        function n(t) {
            var n = {
                base: "",
                resource: ""
            };
            if (void 0 === t) return n = {
                base: "ERROR",
                resource: "NOT FOUND"
            };
            var r, o;
            return t.indexOf("#") > -1 ? (r = t.substring(t.lastIndexOf("#") + 1), o = t.substring(0, t.length - r.length), o === e.options().getGeneralMetaObjectProperty("iri") && (o = ":"), n.base = o, n.resource = r) : (r = t.substring(t.lastIndexOf("/") + 1), o = t.substring(0, t.length - r.length), o === e.options().getGeneralMetaObjectProperty("iri") && (o = ":"), n.base = o, n.resource = r), n
        }
        var r, o = {};
        return o.updatePrefixModel = function() {
            r = e.options().prefixList()
        }, o.validURL = function(e) {
            return t(e)
        }, o.getPrefixRepresentationForFullURI = function(e) {
            o.updatePrefixModel();
            var t = n(e);
            for (var a in r)
                if (r.hasOwnProperty(a) && r[a] === t.base) return a + ":" + t.resource;
            return ":" === t.base ? ":" + t.resource : e
        }, o
    }
}, function(e, t, n) {
    (function(t) {
        var r = n(58);
        e.exports = function() {
            function e(e) {
                return e.filter(function(e) {
                    return !(e.visualAttributes().indexOf("deprecated") >= 0) && e.attributes().indexOf("external") >= 0
                })
            }

            function n(e) {
                for (var n = o(e), i = n.entries(), s = t.scale.linear().domain([0, i.length - 1]).range(r.find(p, {
                        type: v
                    }).range).interpolate(t.interpolateHsl), l = 0; l < i.length; l++) {
                    var u = i[l].value;
                    a(u, s(l))
                }
            }

            function o(e) {
                var n = t.map();
                return e.forEach(function(e) {
                    var t = e.baseIri();
                    n.has(t) || n.set(t, []), n.get(t).push(e)
                }), n
            }

            function a(e, t) {
                e.forEach(function(e) {
                    e.backgroundColor(t)
                })
            }

            function i(e) {
                console.log("Resetting color"), e.forEach(function(e) {
                    e.backgroundColor(null)
                })
            }
            var s, l, u, c, d = !0,
                p = [{
                    type: "same",
                    range: [t.rgb("#36C"), t.rgb("#36C")]
                }, {
                    type: "gradient",
                    range: [t.rgb("#36C"), t.rgb("#EE2867")]
                }],
                f = {},
                h = d,
                v = "same";
            return f.filter = function(t, r) {
                s = t, l = r;
                var o = e(s.concat(l));
                h ? n(o) : i(o), u = s, c = l
            }, f.colorModeType = function(e) {
                return arguments.length ? (v = e, f) : v
            }, f.enabled = function(e) {
                return arguments.length ? (h = e, f) : h
            }, f.reset = function() {
                h = d
            }, f.filteredNodes = function() {
                return u
            }, f.filteredProperties = function() {
                return c
            }, f
        }
    }).call(t, n(6))
}, function(e, t) {
    e.exports = function(e) {
        var t, n, r, o, a = !1,
            i = {},
            s = a;
        return i.filter = function(a, i) {
            t = a, n = i, e.options().compactNotation(s), r = t, o = n
        }, i.enabled = function(e) {
            return arguments.length ? (s = e, i) : s
        }, i.reset = function() {
            s = a
        }, i.filteredNodes = function() {
            return r
        }, i.filteredProperties = function() {
            return o
        }, i
    }
}, function(e, t, n) {
    var r = n(63)(),
        o = n(76)();
    e.exports = function() {
        function e() {
            var e = o.filterNodesAndTidy(n, a, t);
            n = e.nodes, a = e.properties
        }

        function t(e) {
            return !r.isDatatype(e)
        }
        var n, a, i, s, l = {},
            u = !1;
        return l.filter = function(t, r) {
            n = t, a = r, this.enabled() && e(), i = n, s = a
        }, l.enabled = function(e) {
            return arguments.length ? (u = e, l) : u
        }, l.filteredNodes = function() {
            return i
        }, l.filteredProperties = function() {
            return s
        }, l
    }
}, function(e, t, n) {
    var r = n(63)();
    e.exports = function() {
        function e(e, t) {
            return !e.has(t.domain()) && !e.has(t.range())
        }
        var t = {};
        return t.filterNodesAndTidy = function(t, o, a) {
                var i = n(62)(),
                    s = [],
                    l = [];
                return t.forEach(function(e) {
                    a(e) ? s.push(e) : i.add(e)
                }), o.forEach(function(t) {
                    if (e(i, t)) l.push(t);
                    else if (r.isDatatypeProperty(t)) {
                        var n = s.indexOf(t.range());
                        n >= 0 && s.splice(n, 1)
                    }
                }), {
                    nodes: s,
                    properties: l
                }
            },
            function() {
                return t
            }
    }()
}, function(e, t, n) {
    var r = n(46);
    e.exports = function() {
        function e() {
            var e, t, o, a = [];
            for (e = 0, t = n.length; e < t; e++) o = n[e], o instanceof r || a.push(o);
            n = a
        }
        var t, n, o, a, i = {},
            s = !0;
        return i.filter = function(r, i) {
            t = r, n = i, this.enabled() && e(), o = t, a = n
        }, i.enabled = function(e) {
            return arguments.length ? (s = e, i) : s
        }, i.filteredNodes = function() {
            return o
        }, i.filteredProperties = function() {
            return a
        }, i
    }
}, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            var n, r = {},
                o = webvowl.util.elementTools();
            return r.handle = function(r, a) {
                if (!t.event || !t.event.defaultPrevented || void 0 !== a)
                    if (void 0 !== n && n.toggleFocus(), n !== r && r ? (r.toggleFocus(), n = r) : n = void 0, n && n.focused())
                        if (e.options().editSidebar().updateSelectionInformation(n), o.isProperty(r) === !0) {
                            var i = !1;
                            r.inverse() && (i = !0), e.activateHoverElementsForProperties(!0, r, i, e.isTouchDevice())
                        } else e.activateHoverElements(!0, r, e.isTouchDevice());
                else e.options().editSidebar().updateSelectionInformation(void 0), e.removeEditElements()
            }, r.reset = function() {
                n && (n.toggleFocus(), n = void 0)
            }, r
        }
    }).call(t, n(6))
}, function(e, t) {
    e.exports = function() {
        var e, t, n, r = {},
            o = !0;
        return r.enabled = function(e) {
            return arguments.length ? void(o = e) : o
        }, r.filter = function(r, a) {
            if (o === !1) return e = r, n = a, void(t = []);
            for (var i, s = [], l = [], u = 0; u < a.length; u++) {
                var c = a[u];
                c.range() && (i = c.range(), "rdfs:Literal" === i.type() && (s[i.id()] = 1)), c.range() && (i = c.range(), "owl:Thing" === i.type() && (l[i.id()] = 1)), c.domain() && (i = c.domain(), "owl:Thing" === i.type() && (l[i.id()] = 1))
            }
            var d = [],
                p = [];
            for (u = 0; u < r.length; u++) {
                var f = r[u].id();
                "rdfs:Literal" === r[u].type() ? void 0 === s[f] ? d.push(f) : p.push(r[u]) : "owl:Thing" === r[u].type() && void 0 === l[f] ? d.push(f) : p.push(r[u])
            }
            e = p, n = a, t = d
        }, r.filteredNodes = function() {
            return e
        }, r.removedNodes = function() {
            return t
        }, r.filteredProperties = function() {
            return n
        }, r
    }
}, function(e, t, n) {
    var r = n(63)(),
        o = n(76)();
    e.exports = function(e) {
        function t(e, t, n) {
            for (var r = 0; r < n; r++) {
                var o = l(e, t, r);
                if (o.nodes.length <= x) return r
            }
            return 0
        }

        function n(t) {
            var n = e.getGraphObject().getGlobalDOF();
            return n >= 0 ? n <= t ? n : (e.getGraphObject().setGlobalDOF(t), t) : e.getDefaultDegreeValue()
        }

        function a(e) {
            for (var t = 0, n = 0, r = e.length; n < r; n++) {
                var o = i(e[n].links());
                t = Math.max(t, o.length)
            }
            return t
        }

        function i(e) {
            return e.filter(function(e) {
                return !r.isDatatypeProperty(e.property())
            })
        }

        function s(e) {
            var t = l(c, d, e);
            c = t.nodes, d = t.properties
        }

        function l(e, t, n) {
            return o.filterNodesAndTidy(e, t, u(n))
        }

        function u(e) {
            return function(t) {
                return i(t.links()).length >= e
            }
        }
        var c, d, p, f, h, v, g, y, m = {},
            b = !0,
            x = 50;
        return m.initialize = function(r, o) {
            g = -1;
            var i = a(r);
            h instanceof Function && h(i), e.setDefaultDegreeValue(t(r, o, i));
            var s = n(i);
            y instanceof Function ? (y(s), e.highlightForDegreeSlider(s > 0)) : console.error("No degree setter function set.")
        }, m.filter = function(e, t) {
            c = e, d = t, this.enabled() && (v instanceof Function ? s(v()) : console.error("No degree query function set.")), p = c, f = d, 0 === p.length && (y(0), p = e, f = t), g = v()
        }, m.setMaxDegreeSetter = function(e) {
            h = e
        }, m.setDegreeGetter = function(e) {
            v = e
        }, m.setDegreeSetter = function(e) {
            y = e
        }, m.enabled = function(e) {
            return arguments.length ? (b = e, m) : b
        }, m.filteredNodes = function() {
            return p
        }, m.filteredProperties = function() {
            return f
        }, m
    }
}, function(e, t) {
    e.exports = function(e) {
        var t, n, r, o, a = !0,
            i = {},
            s = a;
        return i.filter = function(a, i) {
            t = a, n = i, e.options().scaleNodesByIndividuals(s), r = t, o = n
        }, i.enabled = function(e) {
            return arguments.length ? (s = e, i) : s
        }, i.reset = function() {
            s = a
        }, i.filteredNodes = function() {
            return r
        }, i.filteredProperties = function() {
            return o
        }, i
    }
}, function(e, t, n) {
    var r = n(63)();
    e.exports = function() {
        function e() {
            i = i.filter(t), a = a.filter(n)
        }

        function t(e) {
            return !r.isObjectProperty(e)
        }

        function n(e) {
            var t = !r.isThing(e),
                n = o(e, i);
            return t || n
        }

        function o(e, n) {
            for (var r = 0; r < n.length; r++) {
                var o = n[r];
                if ((o.domain() === e || o.range() === e) && t(o)) return !0
            }
            return !1
        }
        var a, i, s, l, u = {},
            c = !1;
        return u.filter = function(t, n) {
            a = t, i = n, this.enabled() && e(), s = a, l = i
        }, u.enabled = function(e) {
            return arguments.length ? (c = e, u) : c
        }, u.filteredNodes = function() {
            return s
        }, u.filteredProperties = function() {
            return l
        }, u
    }
}, function(e, t, n) {
    (function(t) {
        var r = n(84),
            o = n(63)();
        e.exports = function() {
            function e() {
                return !t.event.defaultPrevented
            }

            function n(e) {
                return 1 === r.intersection(e.domain().links(), e.range().links()).length
            }
            var a = {},
                i = !1,
                s = [];
            return a.addPinnedElement = function(e) {
                var t = s.indexOf(e);
                t === -1 && s.push(e)
            }, a.handle = function(t, r) {
                if (i && (r || !e())) {
                    if (o.isProperty(t)) {
                        if (t.inverse() && t.inverse().pinned()) return;
                        if (n(t)) return
                    }
                    t.pinned() || (t.drawPin(), a.addPinnedElement(t))
                }
            }, a.enabled = function(e) {
                return arguments.length ? (i = e, a) : i
            }, a.reset = function() {
                s.forEach(function(e) {
                    e.removePin()
                }), s.length = 0
            }, a
        }
    }).call(t, n(6))
}, function(e, t, n) {
    e.exports = {
        chunk: n(85),
        compact: n(105),
        concat: n(106),
        difference: n(114),
        differenceBy: n(167),
        differenceWith: n(229),
        drop: n(230),
        dropRight: n(231),
        dropRightWhile: n(232),
        dropWhile: n(234),
        fill: n(235),
        findIndex: n(239),
        findLastIndex: n(240),
        first: n(241),
        flatten: n(243),
        flattenDeep: n(244),
        flattenDepth: n(245),
        fromPairs: n(246),
        head: n(242),
        indexOf: n(247),
        initial: n(248),
        intersection: n(249),
        intersectionBy: n(252),
        intersectionWith: n(253),
        join: n(254),
        last: n(228),
        lastIndexOf: n(255),
        nth: n(257),
        pull: n(259),
        pullAll: n(260),
        pullAllBy: n(263),
        pullAllWith: n(264),
        pullAt: n(265),
        remove: n(272),
        reverse: n(273),
        slice: n(274),
        sortedIndex: n(275),
        sortedIndexBy: n(278),
        sortedIndexOf: n(279),
        sortedLastIndex: n(280),
        sortedLastIndexBy: n(281),
        sortedLastIndexOf: n(282),
        sortedUniq: n(283),
        sortedUniqBy: n(285),
        tail: n(286),
        take: n(287),
        takeRight: n(288),
        takeRightWhile: n(289),
        takeWhile: n(290),
        union: n(291),
        unionBy: n(295),
        unionWith: n(296),
        uniq: n(297),
        uniqBy: n(298),
        uniqWith: n(299),
        unzip: n(300),
        unzipWith: n(301),
        without: n(302),
        xor: n(303),
        xorBy: n(305),
        xorWith: n(306),
        zip: n(307),
        zipObject: n(308),
        zipObjectDeep: n(312),
        zipWith: n(314)
    }
}, function(e, t, n) {
    function r(e, t, n) {
        t = (n ? a(e, t, n) : void 0 === t) ? 1 : l(i(t), 0);
        var r = null == e ? 0 : e.length;
        if (!r || t < 1) return [];
        for (var u = 0, c = 0, d = Array(s(r / t)); u < r;) d[c++] = o(e, u, u += t);
        return d
    }
    var o = n(86),
        a = n(87),
        i = n(100),
        s = Math.ceil,
        l = Math.max;
    e.exports = r
}, function(e, t) {
    function n(e, t, n) {
        var r = -1,
            o = e.length;
        t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
        for (var a = Array(o); ++r < o;) a[r] = e[r + t];
        return a
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        if (!s(n)) return !1;
        var r = typeof t;
        return !!("number" == r ? a(n) && i(t, n.length) : "string" == r && t in n) && o(n[t], e)
    }
    var o = n(88),
        a = n(89),
        i = n(99),
        s = n(97);
    e.exports = r
}, function(e, t) {
    function n(e, t) {
        return e === t || e !== e && t !== t
    }
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        return null != e && a(e.length) && !o(e)
    }
    var o = n(90),
        a = n(98);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        if (!a(e)) return !1;
        var t = o(e);
        return t == s || t == l || t == i || t == u
    }
    var o = n(91),
        a = n(97),
        i = "[object AsyncFunction]",
        s = "[object Function]",
        l = "[object GeneratorFunction]",
        u = "[object Proxy]";
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return null == e ? void 0 === e ? l : s : u && u in Object(e) ? a(e) : i(e)
    }
    var o = n(92),
        a = n(95),
        i = n(96),
        s = "[object Null]",
        l = "[object Undefined]",
        u = o ? o.toStringTag : void 0;
    e.exports = r
}, function(e, t, n) {
    var r = n(93),
        o = r.Symbol;
    e.exports = o
}, function(e, t, n) {
    var r = n(94),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = r || o || Function("return this")();
    e.exports = a
}, function(e, t) {
    (function(t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(t, function() {
        return this
    }())
}, function(e, t, n) {
    function r(e) {
        var t = i.call(e, l),
            n = e[l];
        try {
            e[l] = void 0;
            var r = !0
        } catch (e) {}
        var o = s.call(e);
        return r && (t ? e[l] = n : delete e[l]), o
    }
    var o = n(92),
        a = Object.prototype,
        i = a.hasOwnProperty,
        s = a.toString,
        l = o ? o.toStringTag : void 0;
    e.exports = r
}, function(e, t) {
    function n(e) {
        return o.call(e)
    }
    var r = Object.prototype,
        o = r.toString;
    e.exports = n
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
    }
    var r = 9007199254740991;
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        var n = typeof e;
        return t = null == t ? r : t, !!t && ("number" == n || "symbol" != n && o.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
    var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        var t = o(e),
            n = t % 1;
        return t === t ? n ? t - n : t : 0
    }
    var o = n(101);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        if (!e) return 0 === e ? e : 0;
        if (e = o(e), e === a || e === -a) {
            var t = e < 0 ? -1 : 1;
            return t * i
        }
        return e === e ? e : 0
    }
    var o = n(102),
        a = 1 / 0,
        i = 1.7976931348623157e308;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return i;
        if (o(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(s, "");
        var n = u.test(e);
        return n || c.test(e) ? d(e.slice(2), n ? 2 : 8) : l.test(e) ? i : +e
    }
    var o = n(97),
        a = n(103),
        i = NaN,
        s = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        d = parseInt;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return "symbol" == typeof e || a(e) && o(e) == i
    }
    var o = n(91),
        a = n(104),
        i = "[object Symbol]";
    e.exports = r
}, function(e, t) {
    function n(e) {
        return null != e && "object" == typeof e
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        for (var t = -1, n = null == e ? 0 : e.length, r = 0, o = []; ++t < n;) {
            var a = e[t];
            a && (o[r++] = a)
        }
        return o
    }
    e.exports = n
}, function(e, t, n) {
    function r() {
        var e = arguments.length;
        if (!e) return [];
        for (var t = Array(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
        return o(s(n) ? i(n) : [n], a(t, 1))
    }
    var o = n(107),
        a = n(108),
        i = n(113),
        s = n(112);
    e.exports = r
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
        return e
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n, i, s) {
        var l = -1,
            u = e.length;
        for (n || (n = a), s || (s = []); ++l < u;) {
            var c = e[l];
            t > 0 && n(c) ? t > 1 ? r(c, t - 1, n, i, s) : o(s, c) : i || (s[s.length] = c)
        }
        return s
    }
    var o = n(107),
        a = n(109);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return i(e) || a(e) || !!(s && e && e[s])
    }
    var o = n(92),
        a = n(110),
        i = n(112),
        s = o ? o.isConcatSpreadable : void 0;
    e.exports = r
}, function(e, t, n) {
    var r = n(111),
        o = n(104),
        a = Object.prototype,
        i = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        l = r(function() {
            return arguments
        }()) ? r : function(e) {
            return o(e) && i.call(e, "callee") && !s.call(e, "callee")
        };
    e.exports = l
}, function(e, t, n) {
    function r(e) {
        return a(e) && o(e) == i
    }
    var o = n(91),
        a = n(104),
        i = "[object Arguments]";
    e.exports = r
}, function(e, t) {
    var n = Array.isArray;
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        var n = -1,
            r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(115),
        o = n(108),
        a = n(157),
        i = n(166),
        s = a(function(e, t) {
            return i(e) ? r(e, o(t, 1, i, !0)) : []
        });
    e.exports = s
}, function(e, t, n) {
    function r(e, t, n, r) {
        var d = -1,
            p = a,
            f = !0,
            h = e.length,
            v = [],
            g = t.length;
        if (!h) return v;
        n && (t = s(t, l(n))), r ? (p = i, f = !1) : t.length >= c && (p = u, f = !1, t = new o(t));
        e: for (; ++d < h;) {
            var y = e[d],
                m = null == n ? y : n(y);
            if (y = r || 0 !== y ? y : 0, f && m === m) {
                for (var b = g; b--;)
                    if (t[b] === m) continue e;
                v.push(y)
            } else p(t, m, r) || v.push(y)
        }
        return v
    }
    var o = n(116),
        a = n(148),
        i = n(153),
        s = n(154),
        l = n(155),
        u = n(156),
        c = 200;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new o; ++t < n;) this.add(e[t])
    }
    var o = n(117),
        a = n(146),
        i = n(147);
    r.prototype.add = r.prototype.push = a, r.prototype.has = i, e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    var o = n(118),
        a = n(140),
        i = n(143),
        s = n(144),
        l = n(145);
    r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = i, r.prototype.has = s, r.prototype.set = l, e.exports = r
}, function(e, t, n) {
    function r() {
        this.size = 0, this.__data__ = {
            hash: new o,
            map: new(i || a),
            string: new o
        }
    }
    var o = n(119),
        a = n(132),
        i = n(139);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    var o = n(120),
        a = n(128),
        i = n(129),
        s = n(130),
        l = n(131);
    r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = i, r.prototype.has = s, r.prototype.set = l, e.exports = r
}, function(e, t, n) {
    function r() {
        this.__data__ = o ? o(null) : {}, this.size = 0
    }
    var o = n(121);
    e.exports = r
}, function(e, t, n) {
    var r = n(122),
        o = r(Object, "create");
    e.exports = o
}, function(e, t, n) {
    function r(e, t) {
        var n = a(e, t);
        return o(n) ? n : void 0
    }
    var o = n(123),
        a = n(127);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        if (!i(e) || a(e)) return !1;
        var t = o(e) ? h : u;
        return t.test(s(e))
    }
    var o = n(90),
        a = n(124),
        i = n(97),
        s = n(126),
        l = /[\\^$.*+?()[\]{}|]/g,
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        d = Object.prototype,
        p = c.toString,
        f = d.hasOwnProperty,
        h = RegExp("^" + p.call(f).replace(l, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return !!a && a in e
    }
    var o = n(125),
        a = function() {
            var e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
    e.exports = r
}, function(e, t, n) {
    var r = n(93),
        o = r["__core-js_shared__"];
    e.exports = o
}, function(e, t) {
    function n(e) {
        if (null != e) {
            try {
                return o.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
    var r = Function.prototype,
        o = r.toString;
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        return null == e ? void 0 : e[t]
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        var t = this.__data__;
        if (o) {
            var n = t[e];
            return n === a ? void 0 : n
        }
        return s.call(t, e) ? t[e] : void 0
    }
    var o = n(121),
        a = "__lodash_hash_undefined__",
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = this.__data__;
        return o ? void 0 !== t[e] : i.call(t, e)
    }
    var o = n(121),
        a = Object.prototype,
        i = a.hasOwnProperty;
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = o && void 0 === t ? a : t, this
    }
    var o = n(121),
        a = "__lodash_hash_undefined__";
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    var o = n(133),
        a = n(134),
        i = n(136),
        s = n(137),
        l = n(138);
    r.prototype.clear = o, r.prototype.delete = a, r.prototype.get = i, r.prototype.has = s, r.prototype.set = l, e.exports = r
}, function(e, t) {
    function n() {
        this.__data__ = [], this.size = 0
    }
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        var t = this.__data__,
            n = o(t, e);
        if (n < 0) return !1;
        var r = t.length - 1;
        return n == r ? t.pop() : i.call(t, n, 1), --this.size, !0
    }
    var o = n(135),
        a = Array.prototype,
        i = a.splice;
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        for (var n = e.length; n--;)
            if (o(e[n][0], t)) return n;
        return -1
    }
    var o = n(88);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = this.__data__,
            n = o(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
    var o = n(135);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return o(this.__data__, e) > -1
    }
    var o = n(135);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = this.__data__,
            r = o(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    }
    var o = n(135);
    e.exports = r
}, function(e, t, n) {
    var r = n(122),
        o = n(93),
        a = r(o, "Map");
    e.exports = a
}, function(e, t, n) {
    function r(e) {
        var t = o(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
    var o = n(141);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = e.__data__;
        return o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
    var o = n(142);
    e.exports = r
}, function(e, t) {
    function n(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        return o(this, e).get(e)
    }
    var o = n(141);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return o(this, e).has(e)
    }
    var o = n(141);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = o(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    }
    var o = n(141);
    e.exports = r
}, function(e, t) {
    function n(e) {
        return this.__data__.set(e, r), this
    }
    var r = "__lodash_hash_undefined__";
    e.exports = n
}, function(e, t) {
    function n(e) {
        return this.__data__.has(e)
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t) {
        var n = null == e ? 0 : e.length;
        return !!n && o(e, t, 0) > -1
    }
    var o = n(149);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        return t === t ? i(e, t, n) : o(e, a, n)
    }
    var o = n(150),
        a = n(151),
        i = n(152);
    e.exports = r
}, function(e, t) {
    function n(e, t, n, r) {
        for (var o = e.length, a = n + (r ? 1 : -1); r ? a-- : ++a < o;)
            if (t(e[a], a, e)) return a;
        return -1
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return e !== e
    }
    e.exports = n
}, function(e, t) {
    function n(e, t, n) {
        for (var r = n - 1, o = e.length; ++r < o;)
            if (e[r] === t) return r;
        return -1
    }
    e.exports = n
}, function(e, t) {
    function n(e, t, n) {
        for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
            if (n(t, e[r])) return !0;
        return !1
    }
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
        return o
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return function(t) {
            return e(t)
        }
    }
    e.exports = n
}, function(e, t) {
    function n(e, t) {
        return e.has(t)
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t) {
        return i(a(e, t, o), e + "")
    }
    var o = n(158),
        a = n(159),
        i = n(161);
    e.exports = r
}, function(e, t) {
    function n(e) {
        return e
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        return t = a(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var r = arguments, i = -1, s = a(r.length - t, 0), l = Array(s); ++i < s;) l[i] = r[t + i];
                i = -1;
                for (var u = Array(t + 1); ++i < t;) u[i] = r[i];
                return u[t] = n(l), o(e, this, u)
            }
    }
    var o = n(160),
        a = Math.max;
    e.exports = r
}, function(e, t) {
    function n(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(162),
        o = n(165),
        a = o(r);
    e.exports = a
}, function(e, t, n) {
    var r = n(163),
        o = n(164),
        a = n(158),
        i = o ? function(e, t) {
            return o(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(t),
                writable: !0
            })
        } : a;
    e.exports = i
}, function(e, t) {
    function n(e) {
        return function() {
            return e
        }
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(122),
        o = function() {
            try {
                var e = r(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = 0,
            n = 0;
        return function() {
            var i = a(),
                s = o - (i - n);
            if (n = i, s > 0) {
                if (++t >= r) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
    var r = 800,
        o = 16,
        a = Date.now;
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        return a(e) && o(e)
    }
    var o = n(89),
        a = n(104);
    e.exports = r
}, function(e, t, n) {
    var r = n(115),
        o = n(108),
        a = n(168),
        i = n(157),
        s = n(166),
        l = n(228),
        u = i(function(e, t) {
            var n = l(t);
            return s(n) && (n = void 0), s(e) ? r(e, o(t, 1, s, !0), a(n, 2)) : []
        });
    e.exports = u
}, function(e, t, n) {
    function r(e) {
        return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? s(e) ? a(e[0], e[1]) : o(e) : l(e)
    }
    var o = n(169),
        a = n(211),
        i = n(158),
        s = n(112),
        l = n(225);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = a(e);
        return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(n) {
            return n === e || o(n, e, t)
        }
    }
    var o = n(170),
        a = n(208),
        i = n(210);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r) {
        var l = n.length,
            u = l,
            c = !r;
        if (null == e) return !u;
        for (e = Object(e); l--;) {
            var d = n[l];
            if (c && d[2] ? d[1] !== e[d[0]] : !(d[0] in e)) return !1
        }
        for (; ++l < u;) {
            d = n[l];
            var p = d[0],
                f = e[p],
                h = d[1];
            if (c && d[2]) {
                if (void 0 === f && !(p in e)) return !1
            } else {
                var v = new o;
                if (r) var g = r(f, h, p, e, t, v);
                if (!(void 0 === g ? a(h, f, i | s, r, v) : g)) return !1
            }
        }
        return !0
    }
    var o = n(171),
        a = n(177),
        i = 1,
        s = 2;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = this.__data__ = new o(e);
        this.size = t.size
    }
    var o = n(132),
        a = n(172),
        i = n(173),
        s = n(174),
        l = n(175),
        u = n(176);
    r.prototype.clear = a, r.prototype.delete = i, r.prototype.get = s, r.prototype.has = l, r.prototype.set = u, e.exports = r
}, function(e, t, n) {
    function r() {
        this.__data__ = new o, this.size = 0
    }
    var o = n(132);
    e.exports = r
}, function(e, t) {
    function n(e) {
        var t = this.__data__,
            n = t.delete(e);
        return this.size = t.size, n
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return this.__data__.get(e)
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        return this.__data__.has(e)
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t) {
        var n = this.__data__;
        if (n instanceof o) {
            var r = n.__data__;
            if (!a || r.length < s - 1) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new i(r)
        }
        return n.set(e, t), this.size = n.size, this
    }
    var o = n(132),
        a = n(139),
        i = n(117),
        s = 200;
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, i, s) {
        return e === t || (null == e || null == t || !a(e) && !a(t) ? e !== e && t !== t : o(e, t, n, i, r, s))
    }
    var o = n(178),
        a = n(104);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r, g, m) {
        var b = u(e),
            x = u(t),
            E = b ? h : l(e),
            w = x ? h : l(t);
        E = E == f ? v : E, w = w == f ? v : w;
        var O = E == v,
            C = w == v,
            k = E == w;
        if (k && c(e)) {
            if (!c(t)) return !1;
            b = !0, O = !1
        }
        if (k && !O) return m || (m = new o), b || d(e) ? a(e, t, n, r, g, m) : i(e, t, E, n, r, g, m);
        if (!(n & p)) {
            var P = O && y.call(e, "__wrapped__"),
                _ = C && y.call(t, "__wrapped__");
            if (P || _) {
                var j = P ? e.value() : e,
                    M = _ ? t.value() : t;
                return m || (m = new o), g(j, M, n, r, m)
            }
        }
        return !!k && (m || (m = new o), s(e, t, n, r, g, m))
    }
    var o = n(171),
        a = n(179),
        i = n(181),
        s = n(185),
        l = n(203),
        u = n(112),
        c = n(194),
        d = n(196),
        p = 1,
        f = "[object Arguments]",
        h = "[object Array]",
        v = "[object Object]",
        g = Object.prototype,
        y = g.hasOwnProperty;
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r, u, c) {
        var d = n & s,
            p = e.length,
            f = t.length;
        if (p != f && !(d && f > p)) return !1;
        var h = c.get(e);
        if (h && c.get(t)) return h == t;
        var v = -1,
            g = !0,
            y = n & l ? new o : void 0;
        for (c.set(e, t), c.set(t, e); ++v < p;) {
            var m = e[v],
                b = t[v];
            if (r) var x = d ? r(b, m, v, t, e, c) : r(m, b, v, e, t, c);
            if (void 0 !== x) {
                if (x) continue;
                g = !1;
                break
            }
            if (y) {
                if (!a(t, function(e, t) {
                        if (!i(y, t) && (m === e || u(m, e, n, r, c))) return y.push(t)
                    })) {
                    g = !1;
                    break
                }
            } else if (m !== b && !u(m, b, n, r, c)) {
                g = !1;
                break
            }
        }
        return c.delete(e), c.delete(t), g
    }
    var o = n(116),
        a = n(180),
        i = n(156),
        s = 1,
        l = 2;
    e.exports = r
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
            if (t(e[n], n, e)) return !0;
        return !1
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n, r, o, O, k) {
        switch (n) {
            case w:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case E:
                return !(e.byteLength != t.byteLength || !O(new a(e), new a(t)));
            case p:
            case f:
            case g:
                return i(+e, +t);
            case h:
                return e.name == t.name && e.message == t.message;
            case y:
            case b:
                return e == t + "";
            case v:
                var P = l;
            case m:
                var _ = r & c;
                if (P || (P = u), e.size != t.size && !_) return !1;
                var j = k.get(e);
                if (j) return j == t;
                r |= d, k.set(e, t);
                var M = s(P(e), P(t), r, o, O, k);
                return k.delete(e), M;
            case x:
                if (C) return C.call(e) == C.call(t)
        }
        return !1
    }
    var o = n(92),
        a = n(182),
        i = n(88),
        s = n(179),
        l = n(183),
        u = n(184),
        c = 1,
        d = 2,
        p = "[object Boolean]",
        f = "[object Date]",
        h = "[object Error]",
        v = "[object Map]",
        g = "[object Number]",
        y = "[object RegExp]",
        m = "[object Set]",
        b = "[object String]",
        x = "[object Symbol]",
        E = "[object ArrayBuffer]",
        w = "[object DataView]",
        O = o ? o.prototype : void 0,
        C = O ? O.valueOf : void 0;
    e.exports = r
}, function(e, t, n) {
    var r = n(93),
        o = r.Uint8Array;
    e.exports = o
}, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e, r) {
            n[++t] = [r, e]
        }), n
    }
    e.exports = n
}, function(e, t) {
    function n(e) {
        var t = -1,
            n = Array(e.size);
        return e.forEach(function(e) {
            n[++t] = e
        }), n
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n, r, i, l) {
        var u = n & a,
            c = o(e),
            d = c.length,
            p = o(t),
            f = p.length;
        if (d != f && !u) return !1;
        for (var h = d; h--;) {
            var v = c[h];
            if (!(u ? v in t : s.call(t, v))) return !1
        }
        var g = l.get(e);
        if (g && l.get(t)) return g == t;
        var y = !0;
        l.set(e, t), l.set(t, e);
        for (var m = u; ++h < d;) {
            v = c[h];
            var b = e[v],
                x = t[v];
            if (r) var E = u ? r(x, b, v, t, e, l) : r(b, x, v, e, t, l);
            if (!(void 0 === E ? b === x || i(b, x, n, r, l) : E)) {
                y = !1;
                break
            }
            m || (m = "constructor" == v)
        }
        if (y && !m) {
            var w = e.constructor,
                O = t.constructor;
            w != O && "constructor" in e && "constructor" in t && !("function" == typeof w && w instanceof w && "function" == typeof O && O instanceof O) && (y = !1);
        }
        return l.delete(e), l.delete(t), y
    }
    var o = n(186),
        a = 1,
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return o(e, i, a)
    }
    var o = n(187),
        a = n(188),
        i = n(191);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        var r = t(e);
        return a(e) ? r : o(r, n(e))
    }
    var o = n(107),
        a = n(112);
    e.exports = r
}, function(e, t, n) {
    var r = n(189),
        o = n(190),
        a = Object.prototype,
        i = a.propertyIsEnumerable,
        s = Object.getOwnPropertySymbols,
        l = s ? function(e) {
            return null == e ? [] : (e = Object(e), r(s(e), function(t) {
                return i.call(e, t)
            }))
        } : o;
    e.exports = l
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, o = 0, a = []; ++n < r;) {
            var i = e[n];
            t(i, n, e) && (a[o++] = i)
        }
        return a
    }
    e.exports = n
}, function(e, t) {
    function n() {
        return []
    }
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        return i(e) ? o(e) : a(e)
    }
    var o = n(192),
        a = n(199),
        i = n(89);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = i(e),
            r = !n && a(e),
            c = !n && !r && s(e),
            p = !n && !r && !c && u(e),
            f = n || r || c || p,
            h = f ? o(e.length, String) : [],
            v = h.length;
        for (var g in e) !t && !d.call(e, g) || f && ("length" == g || c && ("offset" == g || "parent" == g) || p && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || l(g, v)) || h.push(g);
        return h
    }
    var o = n(193),
        a = n(110),
        i = n(112),
        s = n(194),
        l = n(99),
        u = n(196),
        c = Object.prototype,
        d = c.hasOwnProperty;
    e.exports = r
}, function(e, t) {
    function n(e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }
    e.exports = n
}, function(e, t, n) {
    (function(e) {
        var r = n(93),
            o = n(195),
            a = "object" == typeof t && t && !t.nodeType && t,
            i = a && "object" == typeof e && e && !e.nodeType && e,
            s = i && i.exports === a,
            l = s ? r.Buffer : void 0,
            u = l ? l.isBuffer : void 0,
            c = u || o;
        e.exports = c
    }).call(t, n(59)(e))
}, function(e, t) {
    function n() {
        return !1
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(197),
        o = n(155),
        a = n(198),
        i = a && a.isTypedArray,
        s = i ? o(i) : r;
    e.exports = s
}, function(e, t, n) {
    function r(e) {
        return i(e) && a(e.length) && !!L[o(e)]
    }
    var o = n(91),
        a = n(98),
        i = n(104),
        s = "[object Arguments]",
        l = "[object Array]",
        u = "[object Boolean]",
        c = "[object Date]",
        d = "[object Error]",
        p = "[object Function]",
        f = "[object Map]",
        h = "[object Number]",
        v = "[object Object]",
        g = "[object RegExp]",
        y = "[object Set]",
        m = "[object String]",
        b = "[object WeakMap]",
        x = "[object ArrayBuffer]",
        E = "[object DataView]",
        w = "[object Float32Array]",
        O = "[object Float64Array]",
        C = "[object Int8Array]",
        k = "[object Int16Array]",
        P = "[object Int32Array]",
        _ = "[object Uint8Array]",
        j = "[object Uint8ClampedArray]",
        M = "[object Uint16Array]",
        D = "[object Uint32Array]",
        L = {};
    L[w] = L[O] = L[C] = L[k] = L[P] = L[_] = L[j] = L[M] = L[D] = !0, L[s] = L[l] = L[x] = L[u] = L[E] = L[c] = L[d] = L[p] = L[f] = L[h] = L[v] = L[g] = L[y] = L[m] = L[b] = !1, e.exports = r
}, function(e, t, n) {
    (function(e) {
        var r = n(94),
            o = "object" == typeof t && t && !t.nodeType && t,
            a = o && "object" == typeof e && e && !e.nodeType && e,
            i = a && a.exports === o,
            s = i && r.process,
            l = function() {
                try {
                    var e = a && a.require && a.require("util").types;
                    return e ? e : s && s.binding && s.binding("util")
                } catch (e) {}
            }();
        e.exports = l
    }).call(t, n(59)(e))
}, function(e, t, n) {
    function r(e) {
        if (!o(e)) return a(e);
        var t = [];
        for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
    var o = n(200),
        a = n(201),
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = r
}, function(e, t) {
    function n(e) {
        var t = e && e.constructor,
            n = "function" == typeof t && t.prototype || r;
        return e === n
    }
    var r = Object.prototype;
    e.exports = n
}, function(e, t, n) {
    var r = n(202),
        o = r(Object.keys, Object);
    e.exports = o
}, function(e, t) {
    function n(e, t) {
        return function(n) {
            return e(t(n))
        }
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(204),
        o = n(139),
        a = n(205),
        i = n(206),
        s = n(207),
        l = n(91),
        u = n(126),
        c = "[object Map]",
        d = "[object Object]",
        p = "[object Promise]",
        f = "[object Set]",
        h = "[object WeakMap]",
        v = "[object DataView]",
        g = u(r),
        y = u(o),
        m = u(a),
        b = u(i),
        x = u(s),
        E = l;
    (r && E(new r(new ArrayBuffer(1))) != v || o && E(new o) != c || a && E(a.resolve()) != p || i && E(new i) != f || s && E(new s) != h) && (E = function(e) {
        var t = l(e),
            n = t == d ? e.constructor : void 0,
            r = n ? u(n) : "";
        if (r) switch (r) {
            case g:
                return v;
            case y:
                return c;
            case m:
                return p;
            case b:
                return f;
            case x:
                return h
        }
        return t
    }), e.exports = E
}, function(e, t, n) {
    var r = n(122),
        o = n(93),
        a = r(o, "DataView");
    e.exports = a
}, function(e, t, n) {
    var r = n(122),
        o = n(93),
        a = r(o, "Promise");
    e.exports = a
}, function(e, t, n) {
    var r = n(122),
        o = n(93),
        a = r(o, "Set");
    e.exports = a
}, function(e, t, n) {
    var r = n(122),
        o = n(93),
        a = r(o, "WeakMap");
    e.exports = a
}, function(e, t, n) {
    function r(e) {
        for (var t = a(e), n = t.length; n--;) {
            var r = t[n],
                i = e[r];
            t[n] = [r, i, o(i)]
        }
        return t
    }
    var o = n(209),
        a = n(191);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return e === e && !o(e)
    }
    var o = n(97);
    e.exports = r
}, function(e, t) {
    function n(e, t) {
        return function(n) {
            return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
        }
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t) {
        return s(e) && l(t) ? u(c(e), t) : function(n) {
            var r = a(n, e);
            return void 0 === r && r === t ? i(n, e) : o(t, r, d | p)
        }
    }
    var o = n(177),
        a = n(212),
        i = n(222),
        s = n(215),
        l = n(209),
        u = n(210),
        c = n(221),
        d = 1,
        p = 2;
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? void 0 : o(e, t);
        return void 0 === r ? n : r
    }
    var o = n(213);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        t = o(t, e);
        for (var n = 0, r = t.length; null != e && n < r;) e = e[a(t[n++])];
        return n && n == r ? e : void 0
    }
    var o = n(214),
        a = n(221);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return o(e) ? e : a(e, t) ? [e] : i(s(e))
    }
    var o = n(112),
        a = n(215),
        i = n(216),
        s = n(219);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        if (o(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !a(e)) || (s.test(e) || !i.test(e) || null != t && e in Object(t))
    }
    var o = n(112),
        a = n(103),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    e.exports = r
}, function(e, t, n) {
    var r = n(217),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        i = r(function(e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, function(e, n, r, o) {
                t.push(r ? o.replace(a, "$1") : n || e)
            }), t
        });
    e.exports = i
}, function(e, t, n) {
    function r(e) {
        var t = o(e, function(e) {
                return n.size === a && n.clear(), e
            }),
            n = t.cache;
        return t
    }
    var o = n(218),
        a = 500;
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(a);
        var n = function() {
            var r = arguments,
                o = t ? t.apply(this, r) : r[0],
                a = n.cache;
            if (a.has(o)) return a.get(o);
            var i = e.apply(this, r);
            return n.cache = a.set(o, i) || a, i
        };
        return n.cache = new(r.Cache || o), n
    }
    var o = n(117),
        a = "Expected a function";
    r.Cache = o, e.exports = r
}, function(e, t, n) {
    function r(e) {
        return null == e ? "" : o(e)
    }
    var o = n(220);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        if ("string" == typeof e) return e;
        if (i(e)) return a(e, r) + "";
        if (s(e)) return c ? c.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -l ? "-0" : t
    }
    var o = n(92),
        a = n(154),
        i = n(112),
        s = n(103),
        l = 1 / 0,
        u = o ? o.prototype : void 0,
        c = u ? u.toString : void 0;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        if ("string" == typeof e || o(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -a ? "-0" : t
    }
    var o = n(103),
        a = 1 / 0;
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return null != e && a(e, t, o)
    }
    var o = n(223),
        a = n(224);
    e.exports = r
}, function(e, t) {
    function n(e, t) {
        return null != e && t in Object(e)
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        t = o(t, e);
        for (var r = -1, c = t.length, d = !1; ++r < c;) {
            var p = u(t[r]);
            if (!(d = null != e && n(e, p))) break;
            e = e[p]
        }
        return d || ++r != c ? d : (c = null == e ? 0 : e.length, !!c && l(c) && s(p, c) && (i(e) || a(e)))
    }
    var o = n(214),
        a = n(110),
        i = n(112),
        s = n(99),
        l = n(98),
        u = n(221);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return i(e) ? o(s(e)) : a(e)
    }
    var o = n(226),
        a = n(227),
        i = n(215),
        s = n(221);
    e.exports = r
}, function(e, t) {
    function n(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        return function(t) {
            return o(t, e)
        }
    }
    var o = n(213);
    e.exports = r
}, function(e, t) {
    function n(e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0
    }
    e.exports = n
}, function(e, t, n) {
    var r = n(115),
        o = n(108),
        a = n(157),
        i = n(166),
        s = n(228),
        l = a(function(e, t) {
            var n = s(t);
            return i(n) && (n = void 0), i(e) ? r(e, o(t, 1, i, !0), void 0, n) : []
        });
    e.exports = l
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r ? (t = n || void 0 === t ? 1 : a(t), o(e, t < 0 ? 0 : t, r)) : []
    }
    var o = n(86),
        a = n(100);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r ? (t = n || void 0 === t ? 1 : a(t), t = r - t, o(e, 0, t < 0 ? 0 : t)) : []
    }
    var o = n(86),
        a = n(100);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length ? a(e, o(t, 3), !0, !0) : []
    }
    var o = n(168),
        a = n(233);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r) {
        for (var a = e.length, i = r ? a : -1;
            (r ? i-- : ++i < a) && t(e[i], i, e););
        return n ? o(e, r ? 0 : i, r ? i + 1 : a) : o(e, r ? i + 1 : 0, r ? a : i)
    }
    var o = n(86);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length ? a(e, o(t, 3), !0) : []
    }
    var o = n(168),
        a = n(233);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r) {
        var i = null == e ? 0 : e.length;
        return i ? (n && "number" != typeof n && a(e, t, n) && (n = 0, r = i), o(e, t, n, r)) : []
    }
    var o = n(236),
        a = n(87);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r) {
        var i = e.length;
        for (n = o(n), n < 0 && (n = -n > i ? 0 : i + n), r = void 0 === r || r > i ? i : o(r), r < 0 && (r += i), r = n > r ? 0 : a(r); n < r;) e[n++] = t;
        return e
    }
    var o = n(100),
        a = n(237);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return e ? o(a(e), 0, i) : 0
    }
    var o = n(238),
        a = n(100),
        i = 4294967295;
    e.exports = r
}, function(e, t) {
    function n(e, t, n) {
        return e === e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var l = null == n ? 0 : i(n);
        return l < 0 && (l = s(r + l, 0)), o(e, a(t, 3), l)
    }
    var o = n(150),
        a = n(168),
        i = n(100),
        s = Math.max;
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var u = r - 1;
        return void 0 !== n && (u = i(n), u = n < 0 ? s(r + u, 0) : l(u, r - 1)), o(e, a(t, 3), u, !0)
    }
    var o = n(150),
        a = n(168),
        i = n(100),
        s = Math.max,
        l = Math.min;
    e.exports = r
}, function(e, t, n) {
    e.exports = n(242)
}, function(e, t) {
    function n(e) {
        return e && e.length ? e[0] : void 0
    }
    e.exports = n
}, function(e, t, n) {
    function r(e) {
        var t = null == e ? 0 : e.length;
        return t ? o(e, 1) : []
    }
    var o = n(108);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = null == e ? 0 : e.length;
        return t ? o(e, a) : []
    }
    var o = n(108),
        a = 1 / 0;
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = null == e ? 0 : e.length;
        return n ? (t = void 0 === t ? 1 : a(t), o(e, t)) : []
    }
    var o = n(108),
        a = n(100);
    e.exports = r
}, function(e, t) {
    function n(e) {
        for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
            var o = e[t];
            r[o[0]] = o[1]
        }
        return r
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var s = null == n ? 0 : a(n);
        return s < 0 && (s = i(r + s, 0)), o(e, t, s)
    }
    var o = n(149),
        a = n(100),
        i = Math.max;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = null == e ? 0 : e.length;
        return t ? o(e, 0, -1) : []
    }
    var o = n(86);
    e.exports = r
}, function(e, t, n) {
    var r = n(154),
        o = n(250),
        a = n(157),
        i = n(251),
        s = a(function(e) {
            var t = r(e, i);
            return t.length && t[0] === e[0] ? o(t) : []
        });
    e.exports = s
}, function(e, t, n) {
    function r(e, t, n) {
        for (var r = n ? i : a, d = e[0].length, p = e.length, f = p, h = Array(p), v = 1 / 0, g = []; f--;) {
            var y = e[f];
            f && t && (y = s(y, l(t))), v = c(y.length, v), h[f] = !n && (t || d >= 120 && y.length >= 120) ? new o(f && y) : void 0
        }
        y = e[0];
        var m = -1,
            b = h[0];
        e: for (; ++m < d && g.length < v;) {
            var x = y[m],
                E = t ? t(x) : x;
            if (x = n || 0 !== x ? x : 0, !(b ? u(b, E) : r(g, E, n))) {
                for (f = p; --f;) {
                    var w = h[f];
                    if (!(w ? u(w, E) : r(e[f], E, n))) continue e
                }
                b && b.push(E), g.push(x)
            }
        }
        return g
    }
    var o = n(116),
        a = n(148),
        i = n(153),
        s = n(154),
        l = n(155),
        u = n(156),
        c = Math.min;
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return o(e) ? e : []
    }
    var o = n(166);
    e.exports = r
}, function(e, t, n) {
    var r = n(154),
        o = n(250),
        a = n(168),
        i = n(157),
        s = n(251),
        l = n(228),
        u = i(function(e) {
            var t = l(e),
                n = r(e, s);
            return t === l(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? o(n, a(t, 2)) : []
        });
    e.exports = u
}, function(e, t, n) {
    var r = n(154),
        o = n(250),
        a = n(157),
        i = n(251),
        s = n(228),
        l = a(function(e) {
            var t = s(e),
                n = r(e, i);
            return t = "function" == typeof t ? t : void 0, t && n.pop(), n.length && n[0] === e[0] ? o(n, void 0, t) : []
        });
    e.exports = l
}, function(e, t) {
    function n(e, t) {
        return null == e ? "" : o.call(e, t)
    }
    var r = Array.prototype,
        o = r.join;
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        if (!r) return -1;
        var c = r;
        return void 0 !== n && (c = s(n), c = c < 0 ? l(r + c, 0) : u(c, r - 1)), t === t ? i(e, t, c) : o(e, a, c, !0)
    }
    var o = n(150),
        a = n(151),
        i = n(256),
        s = n(100),
        l = Math.max,
        u = Math.min;
    e.exports = r
}, function(e, t) {
    function n(e, t, n) {
        for (var r = n + 1; r--;)
            if (e[r] === t) return r;
        return r
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length ? o(e, a(t)) : void 0
    }
    var o = n(258),
        a = n(100);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = e.length;
        if (n) return t += t < 0 ? n : 0, o(t, n) ? e[t] : void 0
    }
    var o = n(99);
    e.exports = r
}, function(e, t, n) {
    var r = n(157),
        o = n(260),
        a = r(o);
    e.exports = a
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length && t && t.length ? o(e, t) : e
    }
    var o = n(261);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r) {
        var u = r ? i : a,
            d = -1,
            p = t.length,
            f = e;
        for (e === t && (t = l(t)), n && (f = o(e, s(n))); ++d < p;)
            for (var h = 0, v = t[d], g = n ? n(v) : v;
                (h = u(f, g, h, r)) > -1;) f !== e && c.call(f, h, 1), c.call(e, h, 1);
        return e
    }
    var o = n(154),
        a = n(149),
        i = n(262),
        s = n(155),
        l = n(113),
        u = Array.prototype,
        c = u.splice;
    e.exports = r
}, function(e, t) {
    function n(e, t, n, r) {
        for (var o = n - 1, a = e.length; ++o < a;)
            if (r(e[o], t)) return o;
        return -1
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        return e && e.length && t && t.length ? a(e, t, o(n, 2)) : e
    }
    var o = n(168),
        a = n(261);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        return e && e.length && t && t.length ? o(e, t, void 0, n) : e
    }
    var o = n(261);
    e.exports = r
}, function(e, t, n) {
    var r = n(154),
        o = n(266),
        a = n(267),
        i = n(270),
        s = n(271),
        l = n(99),
        u = s(function(e, t) {
            var n = null == e ? 0 : e.length,
                s = o(e, t);
            return a(e, r(t, function(e) {
                return l(e, n) ? +e : e
            }).sort(i)), s
        });
    e.exports = u
}, function(e, t, n) {
    function r(e, t) {
        for (var n = -1, r = t.length, a = Array(r), i = null == e; ++n < r;) a[n] = i ? void 0 : o(e, t[n]);
        return a
    }
    var o = n(212);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        for (var n = e ? t.length : 0, r = n - 1; n--;) {
            var i = t[n];
            if (n == r || i !== l) {
                var l = i;
                a(i) ? s.call(e, i, 1) : o(e, i)
            }
        }
        return e
    }
    var o = n(268),
        a = n(99),
        i = Array.prototype,
        s = i.splice;
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return t = o(t, e), e = i(e, t), null == e || delete e[s(a(t))]
    }
    var o = n(214),
        a = n(228),
        i = n(269),
        s = n(221);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return t.length < 2 ? e : o(e, a(t, 0, -1))
    }
    var o = n(213),
        a = n(86);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        if (e !== t) {
            var n = void 0 !== e,
                r = null === e,
                a = e === e,
                i = o(e),
                s = void 0 !== t,
                l = null === t,
                u = t === t,
                c = o(t);
            if (!l && !c && !i && e > t || i && s && u && !l && !c || r && s && u || !n && u || !a) return 1;
            if (!r && !i && !c && e < t || c && n && a && !r && !i || l && n && a || !s && a || !u) return -1
        }
        return 0
    }
    var o = n(103);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return i(a(e, void 0, o), e + "")
    }
    var o = n(243),
        a = n(159),
        i = n(161);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = [];
        if (!e || !e.length) return n;
        var r = -1,
            i = [],
            s = e.length;
        for (t = o(t, 3); ++r < s;) {
            var l = e[r];
            t(l, r, e) && (n.push(l), i.push(r))
        }
        return a(e, i), n
    }
    var o = n(168),
        a = n(267);
    e.exports = r
}, function(e, t) {
    function n(e) {
        return null == e ? e : o.call(e)
    }
    var r = Array.prototype,
        o = r.reverse;
    e.exports = n
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r ? (n && "number" != typeof n && a(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : i(t), n = void 0 === n ? r : i(n)), o(e, t, n)) : []
    }
    var o = n(86),
        a = n(87),
        i = n(100);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return o(e, t)
    }
    var o = n(276);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        var r = 0,
            s = null == e ? r : e.length;
        if ("number" == typeof t && t === t && s <= l) {
            for (; r < s;) {
                var u = r + s >>> 1,
                    c = e[u];
                null !== c && !i(c) && (n ? c <= t : c < t) ? r = u + 1 : s = u
            }
            return s
        }
        return o(e, t, a, n)
    }
    var o = n(277),
        a = n(158),
        i = n(103),
        s = 4294967295,
        l = s >>> 1;
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r) {
        t = n(t);
        for (var a = 0, u = null == e ? 0 : e.length, c = t !== t, d = null === t, p = o(t), f = void 0 === t; a < u;) {
            var h = s((a + u) / 2),
                v = n(e[h]),
                g = void 0 !== v,
                y = null === v,
                m = v === v,
                b = o(v);
            if (c) var x = r || m;
            else x = f ? m && (r || g) : d ? m && g && (r || !y) : p ? m && g && !y && (r || !b) : !y && !b && (r ? v <= t : v < t);
            x ? a = h + 1 : u = h
        }
        return l(u, i)
    }
    var o = n(103),
        a = 4294967295,
        i = a - 1,
        s = Math.floor,
        l = Math.min;
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        return a(e, t, o(n, 2))
    }
    var o = n(168),
        a = n(277);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = null == e ? 0 : e.length;
        if (n) {
            var r = o(e, t);
            if (r < n && a(e[r], t)) return r
        }
        return -1
    }
    var o = n(276),
        a = n(88);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return o(e, t, !0)
    }
    var o = n(276);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        return a(e, t, o(n, 2), !0)
    }
    var o = n(168),
        a = n(277);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        var n = null == e ? 0 : e.length;
        if (n) {
            var r = o(e, t, !0) - 1;
            if (a(e[r], t)) return r
        }
        return -1
    }
    var o = n(276),
        a = n(88);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        return e && e.length ? o(e) : []
    }
    var o = n(284);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        for (var n = -1, r = e.length, a = 0, i = []; ++n < r;) {
            var s = e[n],
                l = t ? t(s) : s;
            if (!n || !o(l, u)) {
                var u = l;
                i[a++] = 0 === s ? 0 : s
            }
        }
        return i
    }
    var o = n(88);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length ? a(e, o(t, 2)) : []
    }
    var o = n(168),
        a = n(284);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        var t = null == e ? 0 : e.length;
        return t ? o(e, 1, t) : []
    }
    var o = n(86);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        return e && e.length ? (t = n || void 0 === t ? 1 : a(t), o(e, 0, t < 0 ? 0 : t)) : []
    }
    var o = n(86),
        a = n(100);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        var r = null == e ? 0 : e.length;
        return r ? (t = n || void 0 === t ? 1 : a(t), t = r - t, o(e, t < 0 ? 0 : t, r)) : []
    }
    var o = n(86),
        a = n(100);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length ? a(e, o(t, 3), !1, !0) : []
    }
    var o = n(168),
        a = n(233);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length ? a(e, o(t, 3)) : []
    }
    var o = n(168),
        a = n(233);
    e.exports = r
}, function(e, t, n) {
    var r = n(108),
        o = n(157),
        a = n(292),
        i = n(166),
        s = o(function(e) {
            return a(r(e, 1, i, !0))
        });
    e.exports = s
}, function(e, t, n) {
    function r(e, t, n) {
        var r = -1,
            d = a,
            p = e.length,
            f = !0,
            h = [],
            v = h;
        if (n) f = !1, d = i;
        else if (p >= c) {
            var g = t ? null : l(e);
            if (g) return u(g);
            f = !1, d = s, v = new o
        } else v = t ? [] : h;
        e: for (; ++r < p;) {
            var y = e[r],
                m = t ? t(y) : y;
            if (y = n || 0 !== y ? y : 0, f && m === m) {
                for (var b = v.length; b--;)
                    if (v[b] === m) continue e;
                t && v.push(m), h.push(y)
            } else d(v, m, n) || (v !== h && v.push(m), h.push(y))
        }
        return h
    }
    var o = n(116),
        a = n(148),
        i = n(153),
        s = n(156),
        l = n(293),
        u = n(184),
        c = 200;
    e.exports = r
}, function(e, t, n) {
    var r = n(206),
        o = n(294),
        a = n(184),
        i = 1 / 0,
        s = r && 1 / a(new r([, -0]))[1] == i ? function(e) {
            return new r(e)
        } : o;
    e.exports = s
}, function(e, t) {
    function n() {}
    e.exports = n
}, function(e, t, n) {
    var r = n(108),
        o = n(168),
        a = n(157),
        i = n(292),
        s = n(166),
        l = n(228),
        u = a(function(e) {
            var t = l(e);
            return s(t) && (t = void 0), i(r(e, 1, s, !0), o(t, 2))
        });
    e.exports = u
}, function(e, t, n) {
    var r = n(108),
        o = n(157),
        a = n(292),
        i = n(166),
        s = n(228),
        l = o(function(e) {
            var t = s(e);
            return t = "function" == typeof t ? t : void 0, a(r(e, 1, i, !0), void 0, t)
        });
    e.exports = l
}, function(e, t, n) {
    function r(e) {
        return e && e.length ? o(e) : []
    }
    var o = n(292);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return e && e.length ? a(e, o(t, 2)) : []
    }
    var o = n(168),
        a = n(292);
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        return t = "function" == typeof t ? t : void 0, e && e.length ? o(e, void 0, t) : []
    }
    var o = n(292);
    e.exports = r
}, function(e, t, n) {
    function r(e) {
        if (!e || !e.length) return [];
        var t = 0;
        return e = o(e, function(e) {
            if (l(e)) return t = u(e.length, t), !0
        }), s(t, function(t) {
            return a(e, i(t))
        })
    }
    var o = n(189),
        a = n(154),
        i = n(226),
        s = n(193),
        l = n(166),
        u = Math.max;
    e.exports = r
}, function(e, t, n) {
    function r(e, t) {
        if (!e || !e.length) return [];
        var n = i(e);
        return null == t ? n : a(n, function(e) {
            return o(t, void 0, e)
        })
    }
    var o = n(160),
        a = n(154),
        i = n(300);
    e.exports = r
}, function(e, t, n) {
    var r = n(115),
        o = n(157),
        a = n(166),
        i = o(function(e, t) {
            return a(e) ? r(e, t) : []
        });
    e.exports = i
}, function(e, t, n) {
    var r = n(189),
        o = n(157),
        a = n(304),
        i = n(166),
        s = o(function(e) {
            return a(r(e, i))
        });
    e.exports = s
}, function(e, t, n) {
    function r(e, t, n) {
        var r = e.length;
        if (r < 2) return r ? i(e[0]) : [];
        for (var s = -1, l = Array(r); ++s < r;)
            for (var u = e[s], c = -1; ++c < r;) c != s && (l[s] = o(l[s] || u, e[c], t, n));
        return i(a(l, 1), t, n)
    }
    var o = n(115),
        a = n(108),
        i = n(292);
    e.exports = r
}, function(e, t, n) {
    var r = n(189),
        o = n(168),
        a = n(157),
        i = n(304),
        s = n(166),
        l = n(228),
        u = a(function(e) {
            var t = l(e);
            return s(t) && (t = void 0), i(r(e, s), o(t, 2))
        });
    e.exports = u
}, function(e, t, n) {
    var r = n(189),
        o = n(157),
        a = n(304),
        i = n(166),
        s = n(228),
        l = o(function(e) {
            var t = s(e);
            return t = "function" == typeof t ? t : void 0, a(r(e, i), void 0, t)
        });
    e.exports = l
}, function(e, t, n) {
    var r = n(157),
        o = n(300),
        a = r(o);
    e.exports = a
}, function(e, t, n) {
    function r(e, t) {
        return a(e || [], t || [], o)
    }
    var o = n(309),
        a = n(311);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        var r = e[t];
        s.call(e, t) && a(r, n) && (void 0 !== n || t in e) || o(e, t, n)
    }
    var o = n(310),
        a = n(88),
        i = Object.prototype,
        s = i.hasOwnProperty;
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n) {
        "__proto__" == t && o ? o(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : e[t] = n
    }
    var o = n(164);
    e.exports = r
}, function(e, t) {
    function n(e, t, n) {
        for (var r = -1, o = e.length, a = t.length, i = {}; ++r < o;) {
            var s = r < a ? t[r] : void 0;
            n(i, e[r], s)
        }
        return i
    }
    e.exports = n
}, function(e, t, n) {
    function r(e, t) {
        return a(e || [], t || [], o)
    }
    var o = n(313),
        a = n(311);
    e.exports = r
}, function(e, t, n) {
    function r(e, t, n, r) {
        if (!s(e)) return e;
        t = a(t, e);
        for (var u = -1, c = t.length, d = c - 1, p = e; null != p && ++u < c;) {
            var f = l(t[u]),
                h = n;
            if (u != d) {
                var v = p[f];
                h = r ? r(v, f, p) : void 0, void 0 === h && (h = s(v) ? v : i(t[u + 1]) ? [] : {})
            }
            o(p, f, h), p = p[f]
        }
        return e
    }
    var o = n(309),
        a = n(214),
        i = n(99),
        s = n(97),
        l = n(221);
    e.exports = r
}, function(e, t, n) {
    var r = n(157),
        o = n(301),
        a = r(function(e) {
            var t = e.length,
                n = t > 1 ? e[t - 1] : void 0;
            return n = "function" == typeof n ? (e.pop(), n) : void 0, o(e, n)
        });
    e.exports = a
}, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            var n, r = {};
            return r.handle = function(r) {
                if (!t.event.defaultPrevented) {
                    var o = !0;
                    n === r && (o = !1), e instanceof Function && e(o ? r : void 0), n = o ? r : void 0
                }
            }, r.reset = function() {
                n && (e(void 0), n = void 0)
            }, r
        }
    }).call(t, n(6))
}, function(e, t, n) {
    var r = n(20);
    e.exports = function() {
        function e() {
            var e = c.filterNodesAndTidy(o, a, t);
            o = e.nodes, a = e.properties
        }

        function t(e) {
            return !(e instanceof r)
        }
        var o, a, i, s, l = {},
            u = !1,
            c = n(76)();
        return l.filter = function(t, n) {
            o = t, a = n, this.enabled() && e(), i = o, s = a
        }, l.enabled = function(e) {
            return arguments.length ? (u = e, l) : u
        }, l.filteredNodes = function() {
            return i
        }, l.filteredProperties = function() {
            return s
        }, l
    }
}, function(e, t, n) {
    (function(t) {
        var r = n(20),
            o = n(31),
            a = n(30),
            i = n(63)();
        e.exports = function() {
            function e() {
                h = 0, v = 0, g = 0, y = 0, m = 0, b = 0, x = 0, E = 0
            }

            function s(e, t) {
                h = e.length;
                var r, o, a, i = n(62)();
                for (r = 0, o = t.length; r < o; r++) a = t[r], i.has(a) || (v += 1), i.add(a), a.inverse() && i.add(a.inverse())
            }

            function l(e) {
                var n = t.set(),
                    s = !1,
                    l = !1;
                g = 0;
                var u = 0,
                    c = 0;
                e.forEach(function(e) {
                    if (i.isDatatype(e)) n.add(e.defaultLabel());
                    else if (e instanceof r) e instanceof r && (u = g, g += 1, c = g);
                    else if (e instanceof o) s = !0;
                    else if (e instanceof a) l = !0;
                    else {
                        u = g;
                        var t = 1 + d(e.equivalents());
                        g += t, c = g
                    }
                }), y = n.size()
            }

            function u(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                    var r, o = e[t],
                        a = !1;
                    o.attributes && (r = o.attributes(), r && r.indexOf("datatype") !== -1 && (a = !0)), a === !0 ? m += c(o) : i.isObjectProperty(o) && (b += c(o))
                }
                x = b + m
            }

            function c(e) {
                var t = 1;
                return t += d(e.equivalents()), t += d(e.redundantProperties())
            }

            function d(e) {
                return e ? e.length : 0
            }

            function p(e, t) {
                e.forEach(function(e) {
                    var n = e.type(),
                        r = t[n];
                    "undefined" == typeof r ? r = 0 : r += 1, t[n] = r
                })
            }

            function f(e) {
                for (var t = {}, n = 0, r = 0, o = e.length; r < o; r++) {
                    for (var a = e[r].individuals(), i = 0, s = 0; s < a.length; s++) void 0 === t[a[s].iri()] && (t[a[s].iri()] = 1, i++);
                    n += i
                }
                E = n, t = {}
            }
            var h, v, g, y, m, b, x, E, w, O, C = {},
                k = {},
                P = {};
            return C.filter = function(t, n) {
                e(), s(t, n), l(t), u(n), p(t, k), p(n, P), f(t), w = t, O = n
            }, C.nodeCount = function() {
                return h
            }, C.occurencesOfClassAndDatatypeTypes = function() {
                return k
            }, C.edgeCount = function() {
                return v
            }, C.occurencesOfPropertyTypes = function() {
                return P
            }, C.classCount = function() {
                return g
            }, C.datatypeCount = function() {
                return y
            }, C.datatypePropertyCount = function() {
                return m
            }, C.objectPropertyCount = function() {
                return b
            }, C.propertyCount = function() {
                return x
            }, C.totalIndividualCount = function() {
                return E
            }, C.filteredNodes = function() {
                return w
            }, C.filteredProperties = function() {
                return O
            }, C
        }
    }).call(t, n(6))
}, function(e, t, n) {
    var r = n(63)();
    e.exports = function() {
        function e() {
            var e, n, u, c, d, p = [],
                f = [],
                h = [];
            for (c = 0, d = l.length; c < d; c++) u = l[c], r.isRdfsSubClassOf(u) && h.push(u.domain());
            for (c = 0, d = h.length; c < d; c++) n = h[c], e = t(n, l), o(e) && a(n, e) && (p = p.concat(e), f.push(n));
            s = i(s, f), l = i(l, p)
        }

        function t(e, o, a) {
            var i, s, l, u = [];
            for (s = 0, l = o.length; s < l; s++)
                if (i = o[s], (i.domain() === e || i.range() === e) && (u.push(i), r.isRdfsSubClassOf(i))) {
                    var c = i.domain();
                    if (a = a || n(62)(), e === i.range() && !a.has(c)) {
                        a.add(c);
                        var d = t(c, o, a);
                        u = u.concat(d)
                    }
                }
            return u
        }

        function o(e) {
            var t, n, o, a = !0;
            for (n = 0, o = e.length; n < o; n++)
                if (t = e[n], !r.isRdfsSubClassOf(t)) {
                    a = !1;
                    break
                }
            return a
        }

        function a(e, t) {
            for (var n = 0, r = 0, o = t.length; r < o; r++) {
                var a = t[r];
                if (a.domain() === e && (n += 1), n > 1) return !1
            }
            return !0
        }

        function i(e, t) {
            var n, r, o, a = [];
            for (r = 0, o = e.length; r < o; r++) n = e[r], t.indexOf(n) === -1 && a.push(n);
            return a
        }
        var s, l, u, c, d = {},
            p = !1;
        return d.filter = function(t, n) {
            s = t, l = n, this.enabled() && e(), u = s, c = l
        }, d.enabled = function(e) {
            return arguments.length ? (p = e, d) : p
        }, d.filteredNodes = function() {
            return u
        }, d.filteredProperties = function() {
            return c
        }, d
    }
}]);