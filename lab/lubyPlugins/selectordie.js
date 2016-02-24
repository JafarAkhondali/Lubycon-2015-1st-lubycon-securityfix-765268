/* ===========================================================
 *
 *  Name:          selectordie.min.js
 *  Updated:       2014-10-11
 *  Version:       0.1.8
 *  Created by:    Per V @ Vst.mn
 *  What?:         Minified version of the Select or Die JS
 *
 *  Copyright (c) 2014 Per Vestman
 *  Dual licensed under the MIT and GPL licenses.
 *
 *  Beards, Rock & Loud Guns | Cogs 'n Kegs
 *
 * =========================================================== */
! function (a) {
    "use strict";
    a.fn.selectOrDie = function (b) {
        var f, g, c = {
            customID: null,
            customClass: "",
            placeholder: null,
            placeholderOption: !1,
            prefix: null,
            cycle: !1,
            stripEmpty: !1,
            links: !1,
            linksExternal: !1,
            size: 0,
            tabIndex: 0,
            onChange: a.noop
        },
        d = {},
        e = !1,
        h = {
            initSoD: function (b) {
                return d = a.extend({}, c, b), this.each(function () {
                    if (a(this).parent().hasClass("sod_select")) console.log("already exists");
                    else {
                        var u, v, w, b = a(this),
                            c = b.data("custom-id") ? b.data("custom-id") : d.customID,
                            e = b.data("custom-class") ? b.data("custom-class") : d.customClass,
                            f = b.data("prefix") ? b.data("prefix") : d.prefix,
                            g = b.data("placeholder") ? b.data("placeholder") : d.placeholder,
                            i = b.data("placeholder-option") ? b.data("placeholder-option") : d.placeholderOption,
                            j = b.data("cycle") ? b.data("cycle") : d.cycle,
                            k = b.data("links") ? b.data("links") : d.links,
                            l = b.data("links-external") ? b.data("links-external") : d.linksExternal,
                            m = parseInt(b.data("size")) ? b.data("size") : d.size,
                            n = parseInt(b.data("tabindex")) ? b.data("tabindex") : d.tabIndex ? d.tabIndex : b.attr("tabindex") ? b.attr("tabindex") : d.tabIndex,
                            o = b.data("strip-empty") ? b.data("strip-empty") : d.stripEmpty,
                            p = b.prop("title") ? b.prop("title") : null,
                            q = b.is(":disabled") ? " disabled" : "",
                            r = "",
                            s = "",
                            t = 0;
                        f && (r = '<span class="sod_prefix">' + f + "</span> "), s += g && !f ? '<span class="sod_label sod_placeholder">' + g + "</span>" : '<span class="sod_label">' + r + "</span>", 
                        u = a("<span/>", {
                            id: c,
                            "class": "sod_select " + e + q,
                            title: p,
                            tabindex: n,
                            html: s,
                            "data-cycle": j,
                            "data-links": k,
                            "data-links-external": l,
                            "data-placeholder": g,
                            "data-placeholder-option": i,
                            "data-prefix": f,
                            "data-filter": ""
                        })
                        .insertAfter(this), h.isTouch() && u.addClass("touch"), v = a("<span/>", {"class": "sod_list_wrapper"}).appendTo(u), 
                        w = a("<span/>", {"class": "sod_list"}).appendTo(v), a("option, optgroup", b)
                        .each(function (b) {
                            var c = a(this);
                            o && !a.trim(c.text()) ? c.remove() : 0 === b && i && !r ? h.populateSoD(c, w, u, !0) : h.populateSoD(c, w, u, !1)
                        }), 
                        m && (v.show(), a(".sod_option:lt(" + m + ")", w).each(function () {
                            t += a(this).outerHeight()
                        }), 
                        v.removeAttr("style"), 
                        w.css({
                            "max-height": t
                        })), 
                        b.appendTo(u), 
                        u.on("focusin", h.focusSod).on("click", h.triggerSod).on("click", ".sod_option", h.optionClick).on("mousemove", ".sod_option", h.optionHover).on("keydown", h.keyboardUse), b.on("change", h.selectChange), a(document).on("click", "label[for='" + b.attr("id") + "']", function (a) {
                            a.preventDefault(), u.focus()
                        })
                    }
                })
            },
            populateSoD: function (b, c, d, e) {
                var f = d.data("placeholder"),
                    g = d.data("placeholder-option"),
                    h = d.data("prefix"),
                    i = d.find(".sod_label"),
                    j = b.parent(),
                    k = b.text(),
                    l = b.val(),
                    m = b.data("custom-id") ? b.data("custom-id") : null,
                    n = b.data("custom-class") ? b.data("custom-class") : "",
                    o = b.is(":disabled") ? " disabled " : "",
                    p = b.is(":selected") ? " selected active " : "",
                    q = b.data("link") ? " link " : "",
                    r = b.data("link-external") ? " linkexternal" : "",
                    s = b.prop("label");
                b.is("option") ? (a("<span/>", {
                    "class": "sod_option " + n + o + p + q + r,
                    id: m,
                    title: k,
                    html: k,
                    "data-value": l
                }).appendTo(c), e && !h ? (d.data("label", k), d.data("placeholder", k), b.prop("disabled", !0), c.find(".sod_option:last").addClass("is-placeholder disabled"), p && i.addClass("sod_placeholder")) : p && f && !g && !h ? d.data("label", f) : p && d.data("label", k), (p && !f || p && g || p && h) && i.append(k), j.is("optgroup") && (c.find(".sod_option:last").addClass("groupchild"), j.is(":disabled") && c.find(".sod_option:last").addClass("disabled"))) : a("<span/>", {
                    "class": "sod_option optgroup " + o,
                    title: s,
                    html: s,
                    "data-label": s
                }).appendTo(c)
            },
            focusSod: function () {
                var b = a(this);
                b.hasClass("disabled") ? h.blurSod(b) : (h.blurSod(a(".sod_select.focus").not(b)), 
                    b.addClass("focus"), 
                    a("html").on("click.sodBlur", function () {
                        h.blurSod(b);
                        console.log("sodBlur2");
                    })
                )
            },
            triggerSod: function (b) {
                b.stopPropagation();
                var c = a(this),
                    d = c.find(".sod_list"),
                    e = c.data("placeholder"),
                    f = c.find(".active"),
                    i = c.find(".selected");
                c.hasClass("disabled") || c.hasClass("open") || c.hasClass("touch") ? (clearTimeout(g), c.removeClass("open"), e && (c.find(".sod_label").get(0).lastChild.nodeValue = f.text())) : (c.addClass("open"), e && !c.data("prefix") && c.find(".sod_label").addClass("sod_placeholder").html(e), h.listScroll(d, i), h.checkViewport(c, d))
            },
            keyboardUse: function (b) {
                var l, m, n, c = a(this),
                    d = c.find(".sod_list"),
                    g = c.find(".sod_option"),
                    i = c.find(".sod_label"),
                    j = c.data("cycle"),
                    k = g.filter(".active");
                return b.which > 36 && b.which < 41 ? (37 === b.which || 38 === b.which ? (m = k.prevAll(":not('.disabled, .optgroup')").first(), n = g.not(".disabled, .optgroup").last()) : (39 === b.which || 40 === b.which) && (m = k.nextAll(":not('.disabled, .optgroup')").first(), n = g.not(".disabled, .optgroup").first()), !m.hasClass("sod_option") && j && (m = n), (m.hasClass("sod_option") || j) && (k.removeClass("active"), m.addClass("active"), i.get(0).lastChild.nodeValue = m.text(), h.listScroll(d, m), c.hasClass("open") || (e = !0)), !1) : (13 === b.which || 32 === b.which && c.hasClass("open") && (" " === c.data("filter")[0] || "" === c.data("filter")) ? (b.preventDefault(), k.click()) : 32 !== b.which || c.hasClass("open") || " " !== c.data("filter")[0] && "" !== c.data("filter") ? 27 === b.which && h.blurSod(c) : (b.preventDefault(), e = !1, c.click()), 0 !== b.which && (clearTimeout(f), c.data("filter", c.data("filter") + String.fromCharCode(b.which)), l = g.filter(function () {
                    return 0 === a(this).text().toLowerCase().indexOf(c.data("filter").toLowerCase())
                }).not(".disabled, .optgroup").first(), l.length && (k.removeClass("active"), l.addClass("active"), h.listScroll(d, l), i.get(0).lastChild.nodeValue = l.text(), c.hasClass("open") || (e = !0)), f = setTimeout(function () {
                    c.data("filter", "")
                }, 500)), void 0)
            },
            optionHover: function () {
                var b = a(this);
                b.hasClass("disabled") || b.hasClass("optgroup") || b.siblings().removeClass("active").end().addClass("active")
            },
            optionClick: function (b) {
                b.stopPropagation();
                var c = a(this),
                    d = c.closest(".sod_select"),
                    e = c.hasClass("disabled"),
                    f = c.hasClass("optgroup"),
                    h = d.find(".sod_option:not('.optgroup')").index(this);
                d.hasClass("touch") || (e || f || (d.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder"), c.addClass("selected"), d.find("select option")[h].selected = !0, d.find("select").change()), clearTimeout(g), d.removeClass("open"))
            },
            selectChange: function () {
                var b = a(this),
                    c = b.find(":selected"),
                    e = c.text(),
                    f = b.closest(".sod_select");
                f.find(".sod_label").get(0).lastChild.nodeValue = e, f.data("label", e), d.onChange.call(this), !f.data("links") && !c.data("link") || c.data("link-external") ? (f.data("links-external") || c.data("link-external")) && window.open(c.val(), "_blank") : window.location.href = c.val()
            },
            blurSod: function (b) {
                if (a("body").find(b).length) {
                    var c = b.data("label"),
                        d = b.data("placeholder"),
                        f = b.find(".active"),
                        h = b.find(".selected"),
                        i = !1;
                    console.log("blurSod");
                    clearTimeout(g), e && !f.hasClass("selected") ? (f.click(), i = !0) : f.hasClass("selected") || (f.removeClass("active"), h.addClass("active")), !i && d ? b.find(".sod_label").get(0).lastChild.nodeValue = h.text() : i || (b.find(".sod_label").get(0).lastChild.nodeValue = c), e = !1, b.removeClass("open focus"), b.blur(), a("html").off(".sodBlur")
                }
            },
            checkViewport: function (b, c) {
                var d = b[0].getBoundingClientRect(),
                    e = c.outerHeight();
                d.bottom + e + 10 > a(window).height() && d.top - e > 10 ? b.addClass("above") : b.removeClass("above"), g = setTimeout(function () {
                    h.checkViewport(b, c)
                }, 200)
            },
            listScroll: function (a, b) {
                var c = a[0].getBoundingClientRect(),
                    d = b[0].getBoundingClientRect();
                c.top > d.top ? a.scrollTop(a.scrollTop() - c.top + d.top) : c.bottom < d.bottom && a.scrollTop(a.scrollTop() - c.bottom + d.bottom)
            },
            isTouch: function () {
                return "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            }
        },
        i = {
            destroy: function () {
                return this.each(function () {
                    var b = a(this),
                        c = b.parent();
                    c.hasClass("sod_select") ? (b.off("change"), c.find("span").remove(), b.unwrap()) : console.log("Select or Die: There's no SoD to destroy")
                })
            },
            update: function () {
                return this.each(function () {
                    var b = a(this),
                        c = b.parent(),
                        d = c.find(".sod_list:first");
                    c.hasClass("sod_select") ? (d.empty(), c.find(".sod_label").get(0).lastChild.nodeValue = "", b.is(":disabled") && c.addClass("disabled"), a("option, optgroup", b).each(function () {
                        h.populateSoD(a(this), d, c)
                    })) : console.log("Select or Die: There's no SoD to update")
                })
            },
            disable: function (b) {
                return this.each(function () {
                    var c = a(this),
                        d = c.parent();
                    d.hasClass("sod_select") ? "undefined" != typeof b ? (d.find(".sod_list:first .sod_option[data-value='" + b + "']").addClass("disabled"), d.find(".sod_list:first .sod_option[data-label='" + b + "']").nextUntil(":not(.groupchild)").addClass("disabled"), a("option[value='" + b + "'], optgroup[label='" + b + "']", this).prop("disabled", !0)) : d.hasClass("sod_select") && (d.addClass("disabled"), c.prop("disabled", !0)) : console.log("Select or Die: There's no SoD to disable")
                })
            },
            enable: function (b) {
                return this.each(function () {
                    var c = a(this),
                        d = c.parent();
                    d.hasClass("sod_select") ? 
                        "undefined" != typeof b ? 
                            (d.find(".sod_list:first .sod_option[data-value='" + b + "']").removeClass("disabled"), d.find(".sod_list:first .sod_option[data-label='" + b + "']").nextUntil(":not(.groupchild)").removeClass("disabled"), a("option[value='" + b + "'], optgroup[label='" + b + "']", this).prop("disabled", !1)) : d.hasClass("sod_select") && (d.removeClass("disabled"), c.prop("disabled", !1)) : console.log("Select or Die: There's no SoD to enable")
                })
            }
        }
        
        return i[b] ? 
        i[b].apply(this, Array.prototype.slice.call(arguments, 1)) : 
        "object" != typeof b && b ? 
            (a.error('Select or Die: Oh no! No such method "' + b + '" for the SoD instance'), void 0) : 
            h.initSoD.apply(this, arguments)
    }
}(jQuery);