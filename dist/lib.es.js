import * as D from "react";
import re, { useCallback as Oe, createContext as dt, useMemo as Ue, createElement as F, useContext as sn, useLayoutEffect as Qn, useRef as z, useEffect as H, useState as $e, forwardRef as q, Children as ye, isValidElement as Ye, cloneElement as bt, Fragment as ln, useReducer as er } from "react";
import { flushSync as un } from "react-dom";
var O = "colors", L = "sizes", y = "space", tr = { gap: y, gridGap: y, columnGap: y, gridColumnGap: y, rowGap: y, gridRowGap: y, inset: y, insetBlock: y, insetBlockEnd: y, insetBlockStart: y, insetInline: y, insetInlineEnd: y, insetInlineStart: y, margin: y, marginTop: y, marginRight: y, marginBottom: y, marginLeft: y, marginBlock: y, marginBlockEnd: y, marginBlockStart: y, marginInline: y, marginInlineEnd: y, marginInlineStart: y, padding: y, paddingTop: y, paddingRight: y, paddingBottom: y, paddingLeft: y, paddingBlock: y, paddingBlockEnd: y, paddingBlockStart: y, paddingInline: y, paddingInlineEnd: y, paddingInlineStart: y, top: y, right: y, bottom: y, left: y, scrollMargin: y, scrollMarginTop: y, scrollMarginRight: y, scrollMarginBottom: y, scrollMarginLeft: y, scrollMarginX: y, scrollMarginY: y, scrollMarginBlock: y, scrollMarginBlockEnd: y, scrollMarginBlockStart: y, scrollMarginInline: y, scrollMarginInlineEnd: y, scrollMarginInlineStart: y, scrollPadding: y, scrollPaddingTop: y, scrollPaddingRight: y, scrollPaddingBottom: y, scrollPaddingLeft: y, scrollPaddingX: y, scrollPaddingY: y, scrollPaddingBlock: y, scrollPaddingBlockEnd: y, scrollPaddingBlockStart: y, scrollPaddingInline: y, scrollPaddingInlineEnd: y, scrollPaddingInlineStart: y, fontSize: "fontSizes", background: O, backgroundColor: O, backgroundImage: O, borderImage: O, border: O, borderBlock: O, borderBlockEnd: O, borderBlockStart: O, borderBottom: O, borderBottomColor: O, borderColor: O, borderInline: O, borderInlineEnd: O, borderInlineStart: O, borderLeft: O, borderLeftColor: O, borderRight: O, borderRightColor: O, borderTop: O, borderTopColor: O, caretColor: O, color: O, columnRuleColor: O, fill: O, outline: O, outlineColor: O, stroke: O, textDecorationColor: O, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: L, minBlockSize: L, maxBlockSize: L, inlineSize: L, minInlineSize: L, maxInlineSize: L, width: L, minWidth: L, maxWidth: L, height: L, minHeight: L, maxHeight: L, flexBasis: L, gridTemplateColumns: L, gridTemplateRows: L, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, nr = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Se = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const a = ((i) => JSON.stringify(i, nr))(t);
    return a in e ? e[a] : e[a] = n(t, ...r);
  };
}, ae = Symbol.for("sxs.internal"), yt = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Ut = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: rr } = Object.prototype, ft = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), or = /\s+(?![^()]*\))/, ve = (e) => (t) => e(...typeof t == "string" ? String(t).split(or) : [t]), Yt = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: ve((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: ve((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: ve((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: ve((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: ve((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: ve((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, rt = /([\d.]+)([^]*)/, ar = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((a) => a.includes("&") ? a.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(a) ? `:is(${r})` : r) : r + " " + a)), n), []) : t, ir = (e, t) => e in cr && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, a, i) => r + (a === "stretch" ? `-moz-available${i};${ft(e)}:${r}-webkit-fill-available` : `-moz-fit-content${i};${ft(e)}:${r}fit-content`) + i) : String(t), cr = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, te = (e) => e ? e + "-" : "", dn = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, a, i, s, c) => s == "$" == !!i ? r : (a || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? te(t) + (c.includes("$") ? "" : te(n)) + c.replace(/\$/g, "-") : c) + ")" + (a || s == "--" ? "*" + (a || "") + (i || "1") + ")" : "")), sr = /\s*,\s*(?![^()]*\))/, lr = Object.prototype.toString, be = (e, t, n, r, a) => {
  let i, s, c;
  const l = (u, p, f) => {
    let d, g;
    const $ = (m) => {
      for (d in m) {
        const E = d.charCodeAt(0) === 64, A = E && Array.isArray(m[d]) ? m[d] : [m[d]];
        for (g of A) {
          const P = /[A-Z]/.test(b = d) ? b : b.replace(/-[^]/g, (R) => R[1].toUpperCase()), _ = typeof g == "object" && g && g.toString === lr && (!r.utils[P] || !p.length);
          if (P in r.utils && !_) {
            const R = r.utils[P];
            if (R !== s) {
              s = R, $(R(g)), s = null;
              continue;
            }
          } else if (P in Yt) {
            const R = Yt[P];
            if (R !== c) {
              c = R, $(R(g)), c = null;
              continue;
            }
          }
          if (E && (S = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = S.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (R, I, j, M, Y, J) => {
            const Q = rt.test(I), V = 0.0625 * (Q ? -1 : 1), [G, ne] = Q ? [M, I] : [I, M];
            return "(" + (j[0] === "=" ? "" : j[0] === ">" === Q ? "max-" : "min-") + G + ":" + (j[0] !== "=" && j.length === 1 ? ne.replace(rt, (Te, ue, de) => Number(ue) + V * (j === ">" ? 1 : -1) + de) : ne) + (Y ? ") and (" + (Y[0] === ">" ? "min-" : "max-") + G + ":" + (Y.length === 1 ? J.replace(rt, (Te, ue, de) => Number(ue) + V * (Y === ">" ? -1 : 1) + de) : J) : "") + ")";
          })), _) {
            const R = E ? f.concat(d) : [...f], I = E ? [...p] : ar(p, d.split(sr));
            i !== void 0 && a(Vt(...i)), i = void 0, l(g, I, R);
          } else
            i === void 0 && (i = [[], p, f]), d = E || d.charCodeAt(0) !== 36 ? d : `--${te(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = _ ? g : typeof g == "number" ? g && P in ur ? String(g) + "px" : String(g) : dn(ir(P, g == null ? "" : g), r.prefix, r.themeMap[P]), i[0].push(`${E ? `${d} ` : `${ft(d)}:`}${g}`);
        }
      }
      var S, b;
    };
    $(u), i !== void 0 && a(Vt(...i)), i = void 0;
  };
  l(e, t, n);
}, Vt = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, ur = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Ht = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), ie = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = Ht(n % 52) + r;
  return Ht(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), ke = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], dr = (e) => {
  if (e.href && !e.href.startsWith(location.origin))
    return !1;
  try {
    return !!e.cssRules;
  } catch {
    return !1;
  }
}, fr = (e) => {
  let t;
  const n = () => {
    const { cssRules: a } = t.sheet;
    return [].map.call(a, (i, s) => {
      const { cssText: c } = i;
      let l = "";
      if (c.startsWith("--sxs"))
        return "";
      if (a[s - 1] && (l = a[s - 1].cssText).startsWith("--sxs")) {
        if (!i.cssRules.length)
          return "";
        for (const u in t.rules)
          if (t.rules[u].group === i)
            return `--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${c}`;
        return i.cssRules.length ? `${l}${c}` : "";
      }
      return c;
    }).join("");
  }, r = () => {
    if (t) {
      const { rules: c, sheet: l } = t;
      if (!l.deleteRule) {
        for (; Object(Object(l.cssRules)[0]).type === 3; )
          l.cssRules.splice(0, 1);
        l.cssRules = [];
      }
      for (const u in c)
        delete c[u];
    }
    const a = Object(e).styleSheets || [];
    for (const c of a)
      if (dr(c)) {
        for (let l = 0, u = c.cssRules; u[l]; ++l) {
          const p = Object(u[l]);
          if (p.type !== 1)
            continue;
          const f = Object(u[l + 1]);
          if (f.type !== 4)
            continue;
          ++l;
          const { cssText: d } = p;
          if (!d.startsWith("--sxs"))
            continue;
          const g = d.slice(14, -3).trim().split(/\s+/), $ = ke[g[0]];
          $ && (t || (t = { sheet: c, reset: r, rules: {}, toString: n }), t.rules[$] = { group: f, index: l, cache: new Set(g) });
        }
        if (t)
          break;
      }
    if (!t) {
      const c = (l, u) => ({ type: u, cssRules: [], insertRule(p, f) {
        this.cssRules.splice(f, 0, c(p, { import: 3, undefined: 1 }[(p.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return l === "@media{}" ? `@media{${[].map.call(this.cssRules, (p) => p.cssText).join("")}}` : l;
      } });
      t = { sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : c("", "text/css"), rules: {}, reset: r, toString: n };
    }
    const { sheet: i, rules: s } = t;
    for (let c = ke.length - 1; c >= 0; --c) {
      const l = ke[c];
      if (!s[l]) {
        const u = ke[c + 1], p = s[u] ? s[u].index : i.cssRules.length;
        i.insertRule("@media{}", p), i.insertRule(`--sxs{--sxs:${c}}`, p), s[l] = { group: i.cssRules[p + 1], index: p, cache: /* @__PURE__ */ new Set([c]) };
      }
      pr(s[l]);
    }
  };
  return r(), t;
}, pr = (e) => {
  const t = e.group;
  let n = t.cssRules.length;
  e.apply = (r) => {
    try {
      t.insertRule(r, n), ++n;
    } catch {
    }
  };
}, Re = Symbol(), vr = Se(), Gt = (e, t) => vr(e, () => (...n) => {
  let r = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const a of n)
    if (a != null)
      if (a[ae]) {
        r.type == null && (r.type = a[ae].type);
        for (const i of a[ae].composers)
          r.composers.add(i);
      } else
        a.constructor !== Object || a.$$typeof ? r.type == null && (r.type = a) : r.composers.add(mr(a, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), gr(e, r, t);
}), mr = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, a) => {
  const i = `${te(a.prefix)}c-${ie(r)}`, s = [], c = [], l = /* @__PURE__ */ Object.create(null), u = [];
  for (const d in n)
    l[d] = String(n[d]);
  if (typeof e == "object" && e)
    for (const d in e) {
      p = l, f = d, rr.call(p, f) || (l[d] = "undefined");
      const g = e[d];
      for (const $ in g) {
        const m = { [d]: String($) };
        String($) === "undefined" && u.push(d);
        const S = g[$], b = [m, S, !Ut(S)];
        s.push(b);
      }
    }
  var p, f;
  if (typeof t == "object" && t)
    for (const d of t) {
      let { css: g, ...$ } = d;
      g = typeof g == "object" && g || {};
      for (const S in $)
        $[S] = String($[S]);
      const m = [$, g, !Ut(g)];
      c.push(m);
    }
  return [i, r, s, c, l, u];
}, gr = (e, t, n) => {
  const [r, a, i, s] = hr(t.composers), c = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[Re].length; g++) {
        const [$, m] = d[Re][g];
        f.rules[$].apply(m);
      }
      return d[Re] = [], null;
    }
    return d[Re] = [], d.rules = {}, ke.forEach((g) => d.rules[g] = { apply: ($) => d[Re].push([g, $]) }), d;
  })(n) : null, l = (c || n).rules, u = `.${r}${a.length > 1 ? `:where(.${a.slice(1).join(".")})` : ""}`, p = (f) => {
    f = typeof f == "object" && f || br;
    const { css: d, ...g } = f, $ = {};
    for (const b in i)
      if (delete g[b], b in f) {
        let E = f[b];
        typeof E == "object" && E ? $[b] = { "@initial": i[b], ...E } : (E = String(E), $[b] = E !== "undefined" || s.has(b) ? E : i[b]);
      } else
        $[b] = i[b];
    const m = /* @__PURE__ */ new Set([...a]);
    for (const [b, E, A, P] of t.composers) {
      n.rules.styled.cache.has(b) || (n.rules.styled.cache.add(b), be(E, [`.${b}`], [], e, (I) => {
        l.styled.apply(I);
      }));
      const _ = Kt(A, $, e.media), R = Kt(P, $, e.media, !0);
      for (const I of _)
        if (I !== void 0)
          for (const [j, M, Y] of I) {
            const J = `${b}-${ie(M)}-${j}`;
            m.add(J);
            const Q = (Y ? n.rules.resonevar : n.rules.onevar).cache, V = Y ? l.resonevar : l.onevar;
            Q.has(J) || (Q.add(J), be(M, [`.${J}`], [], e, (G) => {
              V.apply(G);
            }));
          }
      for (const I of R)
        if (I !== void 0)
          for (const [j, M] of I) {
            const Y = `${b}-${ie(M)}-${j}`;
            m.add(Y), n.rules.allvar.cache.has(Y) || (n.rules.allvar.cache.add(Y), be(M, [`.${Y}`], [], e, (J) => {
              l.allvar.apply(J);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const b = `${r}-i${ie(d)}-css`;
      m.add(b), n.rules.inline.cache.has(b) || (n.rules.inline.cache.add(b), be(d, [`.${b}`], [], e, (E) => {
        l.inline.apply(E);
      }));
    }
    for (const b of String(f.className || "").trim().split(/\s+/))
      b && m.add(b);
    const S = g.className = [...m].join(" ");
    return { type: t.type, className: S, selector: u, props: g, toString: () => S, deferredInjector: c };
  };
  return yt(p, { className: r, selector: u, [ae]: t, toString: () => (n.rules.styled.cache.has(r) || p(), r) });
}, hr = (e) => {
  let t = "";
  const n = [], r = {}, a = [];
  for (const [i, , , , s, c] of e) {
    t === "" && (t = i), n.push(i), a.push(...c);
    for (const l in s) {
      const u = s[l];
      (r[l] === void 0 || u !== "undefined" || c.includes(u)) && (r[l] = u);
    }
  }
  return [t, n, r, new Set(a)];
}, Kt = (e, t, n, r) => {
  const a = [];
  e:
    for (let [i, s, c] of e) {
      if (c)
        continue;
      let l, u = 0, p = !1;
      for (l in i) {
        const f = i[l];
        let d = t[l];
        if (d !== f) {
          if (typeof d != "object" || !d)
            continue e;
          {
            let g, $, m = 0;
            for (const S in d) {
              if (f === String(d[S])) {
                if (S !== "@initial") {
                  const b = S.slice(1);
                  ($ = $ || []).push(b in n ? n[b] : S.replace(/^@media ?/, "")), p = !0;
                }
                u += m, g = !0;
              }
              ++m;
            }
            if ($ && $.length && (s = { ["@media " + $.join(", ")]: s }), !g)
              continue e;
          }
        }
      }
      (a[u] = a[u] || []).push([r ? "cv" : `${l}-${i[l]}`, s, p]);
    }
  return a;
}, br = {}, yr = Se(), $r = (e, t) => yr(e, () => (...n) => {
  const r = () => {
    for (let a of n) {
      a = typeof a == "object" && a || {};
      let i = ie(a);
      if (!t.rules.global.cache.has(i)) {
        if (t.rules.global.cache.add(i), "@import" in a) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let c of [].concat(a["@import"]))
            c = c.includes('"') || c.includes("'") ? c : `"${c}"`, t.sheet.insertRule(`@import ${c};`, s++);
          delete a["@import"];
        }
        be(a, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return yt(r, { toString: r });
}), Sr = Se(), Er = (e, t) => Sr(e, () => (n) => {
  const r = `${te(e.prefix)}k-${ie(n)}`, a = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const i = [];
      be(n, [], [], e, (c) => i.push(c));
      const s = `@keyframes ${r}{${i.join("")}}`;
      t.rules.global.apply(s);
    }
    return r;
  };
  return yt(a, { get name() {
    return a();
  }, toString: a });
}), xr = class {
  constructor(e, t, n, r) {
    this.token = e == null ? "" : String(e), this.value = t == null ? "" : String(t), this.scale = n == null ? "" : String(n), this.prefix = r == null ? "" : String(r);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + te(this.prefix) + te(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Rr = Se(), Cr = (e, t) => Rr(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const a = `.${n = (n = typeof n == "string" ? n : "") || `${te(e.prefix)}t-${ie(r)}`}`, i = {}, s = [];
  for (const l in r) {
    i[l] = {};
    for (const u in r[l]) {
      const p = `--${te(e.prefix)}${l}-${u}`, f = dn(String(r[l][u]), e.prefix, l);
      i[l][u] = new xr(u, f, l, e.prefix), s.push(`${p}:${f}`);
    }
  }
  const c = () => {
    if (s.length && !t.rules.themed.cache.has(n)) {
      t.rules.themed.cache.add(n);
      const l = `${r === e.theme ? ":root," : ""}.${n}{${s.join(";")}}`;
      t.rules.themed.apply(l);
    }
    return n;
  };
  return { ...i, get className() {
    return c();
  }, selector: a, toString: c };
}), wr = Se(), kr = Se(), Pr = (e) => {
  const t = ((n) => {
    let r = !1;
    const a = wr(n, (i) => {
      r = !0;
      const s = "prefix" in (i = typeof i == "object" && i || {}) ? String(i.prefix) : "", c = typeof i.media == "object" && i.media || {}, l = typeof i.root == "object" ? i.root || null : globalThis.document || null, u = typeof i.theme == "object" && i.theme || {}, p = { prefix: s, media: c, theme: u, themeMap: typeof i.themeMap == "object" && i.themeMap || { ...tr }, utils: typeof i.utils == "object" && i.utils || {} }, f = fr(l), d = { css: Gt(p, f), globalCss: $r(p, f), keyframes: Er(p, f), createTheme: Cr(p, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: p, prefix: s, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || a.reset(), a;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => kr(n, () => {
    const a = Gt(n, r);
    return (...i) => {
      const s = a(...i), c = s[ae].type, l = re.forwardRef((u, p) => {
        const f = u && u.as || c, { props: d, deferredInjector: g } = s(u);
        return delete d.as, d.ref = p, g ? re.createElement(re.Fragment, null, re.createElement(f, d), re.createElement(g, null)) : re.createElement(f, d);
      });
      return l.className = s.className, l.displayName = `Styled.${c.displayName || c.name || c}`, l.selector = s.selector, l.toString = () => s.selector, l[ae] = s[ae], l;
    };
  }))(t), t;
};
const {
  styled: Ve,
  css: fa,
  globalCss: pa,
  keyframes: fn,
  getCssText: va,
  theme: ma,
  createTheme: ga,
  config: ha
} = Pr({
  theme: {
    colors: {
      primary: "#8257E5",
      primary_light: "#996DFF",
      primary_dark: "#633BBC",
      secondary: "#EB8A1D",
      secondary_light: "#FBA94C",
      secondary_dark: "#C47216",
      success: "#198754",
      info: "#0DCAF0",
      warning: "#FFC107",
      danger: "#DC3545",
      light: "#F8F9FA",
      dark: "#121214",
      black: "#000000",
      white: "#FFFFFF",
      overlay: "rgba(0,0,0,0.5)"
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      40: "10rem",
      64: "16rem",
      80: "20rem",
      px: "1px"
    },
    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "9xl": "6rem"
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  }
}), Or = Ve("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 $4",
  fontSize: "$md",
  lineHeight: 1,
  fontWeight: "$medium",
  height: "2.5rem",
  background: "$primary",
  color: "$white",
  cursor: "pointer",
  transition: "background 0.3s ease 0s, box-shadow 0.2s ease 0s",
  "&:hover": {
    background: "$primary_light"
  },
  "&:focus-visible": {
    outline: 0,
    boxShadow: "0 0 0 4px #121214, 0 0 0 6px rgba(255, 255, 255, 0.7)"
  }
});
var He = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function Tr() {
  if (Xt)
    return Ce;
  Xt = 1;
  var e = re, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var p, f = {}, d = null, g = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (p in l)
      r.call(l, p) && !i.hasOwnProperty(p) && (f[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        f[p] === void 0 && (f[p] = l[p]);
    return { $$typeof: t, type: c, key: d, ref: g, props: f, _owner: a.current };
  }
  return Ce.Fragment = n, Ce.jsx = s, Ce.jsxs = s, Ce;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function _r() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = re, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), $ = Symbol.iterator, m = "@@iterator";
    function S(o) {
      if (o === null || typeof o != "object")
        return null;
      var v = $ && o[$] || o[m];
      return typeof v == "function" ? v : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(o) {
      {
        for (var v = arguments.length, h = new Array(v > 1 ? v - 1 : 0), x = 1; x < v; x++)
          h[x - 1] = arguments[x];
        A("error", o, h);
      }
    }
    function A(o, v, h) {
      {
        var x = b.ReactDebugCurrentFrame, k = x.getStackAddendum();
        k !== "" && (v += "%s", h = h.concat([k]));
        var T = h.map(function(w) {
          return String(w);
        });
        T.unshift("Warning: " + v), Function.prototype.apply.call(console[o], console, T);
      }
    }
    var P = !1, _ = !1, R = !1, I = !1, j = !1, M;
    M = Symbol.for("react.module.reference");
    function Y(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === i || j || o === a || o === u || o === p || I || o === g || P || _ || R || typeof o == "object" && o !== null && (o.$$typeof === d || o.$$typeof === f || o.$$typeof === s || o.$$typeof === c || o.$$typeof === l || o.$$typeof === M || o.getModuleId !== void 0));
    }
    function J(o, v, h) {
      var x = o.displayName;
      if (x)
        return x;
      var k = v.displayName || v.name || "";
      return k !== "" ? h + "(" + k + ")" : h;
    }
    function Q(o) {
      return o.displayName || "Context";
    }
    function V(o) {
      if (o == null)
        return null;
      if (typeof o.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof o == "function")
        return o.displayName || o.name || null;
      if (typeof o == "string")
        return o;
      switch (o) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case c:
            var v = o;
            return Q(v) + ".Consumer";
          case s:
            var h = o;
            return Q(h._context) + ".Provider";
          case l:
            return J(o, o.render, "ForwardRef");
          case f:
            var x = o.displayName || null;
            return x !== null ? x : V(o.type) || "Memo";
          case d: {
            var k = o, T = k._payload, w = k._init;
            try {
              return V(w(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, ne = 0, Te, ue, de, Rt, Ct, wt, kt;
    function Pt() {
    }
    Pt.__reactDisabledLog = !0;
    function Pn() {
      {
        if (ne === 0) {
          Te = console.log, ue = console.info, de = console.warn, Rt = console.error, Ct = console.group, wt = console.groupCollapsed, kt = console.groupEnd;
          var o = {
            configurable: !0,
            enumerable: !0,
            value: Pt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: o,
            log: o,
            warn: o,
            error: o,
            group: o,
            groupCollapsed: o,
            groupEnd: o
          });
        }
        ne++;
      }
    }
    function On() {
      {
        if (ne--, ne === 0) {
          var o = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, o, {
              value: Te
            }),
            info: G({}, o, {
              value: ue
            }),
            warn: G({}, o, {
              value: de
            }),
            error: G({}, o, {
              value: Rt
            }),
            group: G({}, o, {
              value: Ct
            }),
            groupCollapsed: G({}, o, {
              value: wt
            }),
            groupEnd: G({}, o, {
              value: kt
            })
          });
        }
        ne < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xe = b.ReactCurrentDispatcher, qe;
    function _e(o, v, h) {
      {
        if (qe === void 0)
          try {
            throw Error();
          } catch (k) {
            var x = k.stack.trim().match(/\n( *(at )?)/);
            qe = x && x[1] || "";
          }
        return `
` + qe + o;
      }
    }
    var Je = !1, Ie;
    {
      var Tn = typeof WeakMap == "function" ? WeakMap : Map;
      Ie = new Tn();
    }
    function Ot(o, v) {
      if (!o || Je)
        return "";
      {
        var h = Ie.get(o);
        if (h !== void 0)
          return h;
      }
      var x;
      Je = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = Xe.current, Xe.current = null, Pn();
      try {
        if (v) {
          var w = function() {
            throw Error();
          };
          if (Object.defineProperty(w.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(w, []);
            } catch (ee) {
              x = ee;
            }
            Reflect.construct(o, [], w);
          } else {
            try {
              w.call();
            } catch (ee) {
              x = ee;
            }
            o.call(w.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            x = ee;
          }
          o();
        }
      } catch (ee) {
        if (ee && x && typeof ee.stack == "string") {
          for (var C = ee.stack.split(`
`), W = x.stack.split(`
`), B = C.length - 1, N = W.length - 1; B >= 1 && N >= 0 && C[B] !== W[N]; )
            N--;
          for (; B >= 1 && N >= 0; B--, N--)
            if (C[B] !== W[N]) {
              if (B !== 1 || N !== 1)
                do
                  if (B--, N--, N < 0 || C[B] !== W[N]) {
                    var K = `
` + C[B].replace(" at new ", " at ");
                    return o.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", o.displayName)), typeof o == "function" && Ie.set(o, K), K;
                  }
                while (B >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        Je = !1, Xe.current = T, On(), Error.prepareStackTrace = k;
      }
      var pe = o ? o.displayName || o.name : "", zt = pe ? _e(pe) : "";
      return typeof o == "function" && Ie.set(o, zt), zt;
    }
    function _n(o, v, h) {
      return Ot(o, !1);
    }
    function In(o) {
      var v = o.prototype;
      return !!(v && v.isReactComponent);
    }
    function De(o, v, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Ot(o, In(o));
      if (typeof o == "string")
        return _e(o);
      switch (o) {
        case u:
          return _e("Suspense");
        case p:
          return _e("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return _n(o.render);
          case f:
            return De(o.type, v, h);
          case d: {
            var x = o, k = x._payload, T = x._init;
            try {
              return De(T(k), v, h);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, Tt = {}, _t = b.ReactDebugCurrentFrame;
    function Be(o) {
      if (o) {
        var v = o._owner, h = De(o.type, o._source, v ? v.type : null);
        _t.setExtraStackFrame(h);
      } else
        _t.setExtraStackFrame(null);
    }
    function Dn(o, v, h, x, k) {
      {
        var T = Function.call.bind(Ae);
        for (var w in o)
          if (T(o, w)) {
            var C = void 0;
            try {
              if (typeof o[w] != "function") {
                var W = Error((x || "React class") + ": " + h + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              C = o[w](v, w, x, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              C = B;
            }
            C && !(C instanceof Error) && (Be(k), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", h, w, typeof C), Be(null)), C instanceof Error && !(C.message in Tt) && (Tt[C.message] = !0, Be(k), E("Failed %s type: %s", h, C.message), Be(null));
          }
      }
    }
    var An = Array.isArray;
    function Ze(o) {
      return An(o);
    }
    function Bn(o) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, h = v && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return h;
      }
    }
    function Fn(o) {
      try {
        return It(o), !1;
      } catch {
        return !0;
      }
    }
    function It(o) {
      return "" + o;
    }
    function Dt(o) {
      if (Fn(o))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Bn(o)), It(o);
    }
    var xe = b.ReactCurrentOwner, Nn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Bt, Qe;
    Qe = {};
    function jn(o) {
      if (Ae.call(o, "ref")) {
        var v = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Mn(o) {
      if (Ae.call(o, "key")) {
        var v = Object.getOwnPropertyDescriptor(o, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Wn(o, v) {
      if (typeof o.ref == "string" && xe.current && v && xe.current.stateNode !== v) {
        var h = V(xe.current.type);
        Qe[h] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(xe.current.type), o.ref), Qe[h] = !0);
      }
    }
    function Ln(o, v) {
      {
        var h = function() {
          At || (At = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function zn(o, v) {
      {
        var h = function() {
          Bt || (Bt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        h.isReactWarning = !0, Object.defineProperty(o, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var Un = function(o, v, h, x, k, T, w) {
      var C = {
        $$typeof: t,
        type: o,
        key: v,
        ref: h,
        props: w,
        _owner: T
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function Yn(o, v, h, x, k) {
      {
        var T, w = {}, C = null, W = null;
        h !== void 0 && (Dt(h), C = "" + h), Mn(v) && (Dt(v.key), C = "" + v.key), jn(v) && (W = v.ref, Wn(v, k));
        for (T in v)
          Ae.call(v, T) && !Nn.hasOwnProperty(T) && (w[T] = v[T]);
        if (o && o.defaultProps) {
          var B = o.defaultProps;
          for (T in B)
            w[T] === void 0 && (w[T] = B[T]);
        }
        if (C || W) {
          var N = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          C && Ln(w, N), W && zn(w, N);
        }
        return Un(o, C, W, k, x, xe.current, w);
      }
    }
    var et = b.ReactCurrentOwner, Ft = b.ReactDebugCurrentFrame;
    function fe(o) {
      if (o) {
        var v = o._owner, h = De(o.type, o._source, v ? v.type : null);
        Ft.setExtraStackFrame(h);
      } else
        Ft.setExtraStackFrame(null);
    }
    var tt;
    tt = !1;
    function nt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function Nt() {
      {
        if (et.current) {
          var o = V(et.current.type);
          if (o)
            return `

Check the render method of \`` + o + "`.";
        }
        return "";
      }
    }
    function Vn(o) {
      {
        if (o !== void 0) {
          var v = o.fileName.replace(/^.*[\\\/]/, ""), h = o.lineNumber;
          return `

Check your code at ` + v + ":" + h + ".";
        }
        return "";
      }
    }
    var jt = {};
    function Hn(o) {
      {
        var v = Nt();
        if (!v) {
          var h = typeof o == "string" ? o : o.displayName || o.name;
          h && (v = `

Check the top-level render call using <` + h + ">.");
        }
        return v;
      }
    }
    function Mt(o, v) {
      {
        if (!o._store || o._store.validated || o.key != null)
          return;
        o._store.validated = !0;
        var h = Hn(v);
        if (jt[h])
          return;
        jt[h] = !0;
        var x = "";
        o && o._owner && o._owner !== et.current && (x = " It was passed a child from " + V(o._owner.type) + "."), fe(o), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, x), fe(null);
      }
    }
    function Wt(o, v) {
      {
        if (typeof o != "object")
          return;
        if (Ze(o))
          for (var h = 0; h < o.length; h++) {
            var x = o[h];
            nt(x) && Mt(x, v);
          }
        else if (nt(o))
          o._store && (o._store.validated = !0);
        else if (o) {
          var k = S(o);
          if (typeof k == "function" && k !== o.entries)
            for (var T = k.call(o), w; !(w = T.next()).done; )
              nt(w.value) && Mt(w.value, v);
        }
      }
    }
    function Gn(o) {
      {
        var v = o.type;
        if (v == null || typeof v == "string")
          return;
        var h;
        if (typeof v == "function")
          h = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === l || v.$$typeof === f))
          h = v.propTypes;
        else
          return;
        if (h) {
          var x = V(v);
          Dn(h, o.props, "prop", x, o);
        } else if (v.PropTypes !== void 0 && !tt) {
          tt = !0;
          var k = V(v);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Kn(o) {
      {
        for (var v = Object.keys(o.props), h = 0; h < v.length; h++) {
          var x = v[h];
          if (x !== "children" && x !== "key") {
            fe(o), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), fe(null);
            break;
          }
        }
        o.ref !== null && (fe(o), E("Invalid attribute `ref` supplied to `React.Fragment`."), fe(null));
      }
    }
    function Lt(o, v, h, x, k, T) {
      {
        var w = Y(o);
        if (!w) {
          var C = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Vn(k);
          W ? C += W : C += Nt();
          var B;
          o === null ? B = "null" : Ze(o) ? B = "array" : o !== void 0 && o.$$typeof === t ? (B = "<" + (V(o.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : B = typeof o, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, C);
        }
        var N = Yn(o, v, h, k, T);
        if (N == null)
          return N;
        if (w) {
          var K = v.children;
          if (K !== void 0)
            if (x)
              if (Ze(K)) {
                for (var pe = 0; pe < K.length; pe++)
                  Wt(K[pe], o);
                Object.freeze && Object.freeze(K);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(K, o);
        }
        return o === r ? Kn(N) : Gn(N), N;
      }
    }
    function Xn(o, v, h) {
      return Lt(o, v, h, !0);
    }
    function qn(o, v, h) {
      return Lt(o, v, h, !1);
    }
    var Jn = qn, Zn = Xn;
    we.Fragment = r, we.jsx = Jn, we.jsxs = Zn;
  }()), we;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Tr() : e.exports = _r();
})(He);
const pn = He.exports.Fragment, X = He.exports.jsx, $t = He.exports.jsxs, ba = ({
  children: e,
  onClick: t
}) => /* @__PURE__ */ X(Or, {
  "aria-hidden": "true",
  onClick: t,
  children: e
}), ya = ({
  children: e,
  onClick: t
}) => /* @__PURE__ */ X("div", {
  "aria-hidden": "true",
  onClick: t,
  children: e
});
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, U.apply(this, arguments);
}
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(a) {
    if (e == null || e(a), n === !1 || !a.defaultPrevented)
      return t == null ? void 0 : t(a);
  };
}
function Ir(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function vn(...e) {
  return (t) => e.forEach(
    (n) => Ir(n, t)
  );
}
function Ee(...e) {
  return Oe(vn(...e), e);
}
function Dr(e, t = []) {
  let n = [];
  function r(i, s) {
    const c = /* @__PURE__ */ dt(s), l = n.length;
    n = [
      ...n,
      s
    ];
    function u(f) {
      const { scope: d, children: g, ...$ } = f, m = (d == null ? void 0 : d[e][l]) || c, S = Ue(
        () => $,
        Object.values($)
      );
      return /* @__PURE__ */ F(m.Provider, {
        value: S
      }, g);
    }
    function p(f, d) {
      const g = (d == null ? void 0 : d[e][l]) || c, $ = sn(g);
      if ($)
        return $;
      if (s !== void 0)
        return s;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return u.displayName = i + "Provider", [
      u,
      p
    ];
  }
  const a = () => {
    const i = n.map((s) => /* @__PURE__ */ dt(s));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || i;
      return Ue(
        () => ({
          [`__scope${e}`]: {
            ...c,
            [e]: l
          }
        }),
        [
          c,
          l
        ]
      );
    };
  };
  return a.scopeName = e, [
    r,
    Ar(a, ...t)
  ];
}
function Ar(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (a) => ({
        useScope: a(),
        scopeName: a.scopeName
      })
    );
    return function(i) {
      const s = r.reduce((c, { useScope: l, scopeName: u }) => {
        const f = l(i)[`__scope${u}`];
        return {
          ...c,
          ...f
        };
      }, {});
      return Ue(
        () => ({
          [`__scope${t.scopeName}`]: s
        }),
        [
          s
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const pt = Boolean(globalThis == null ? void 0 : globalThis.document) ? Qn : () => {
}, Br = D["useId".toString()] || (() => {
});
let Fr = 0;
function ot(e) {
  const [t, n] = D.useState(Br());
  return pt(() => {
    e || n(
      (r) => r != null ? r : String(Fr++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function se(e) {
  const t = z(e);
  return H(() => {
    t.current = e;
  }), Ue(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Nr({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, a] = jr({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, s = i ? e : r, c = se(n), l = Oe((u) => {
    if (i) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && c(f);
    } else
      a(u);
  }, [
    i,
    e,
    a,
    c
  ]);
  return [
    s,
    l
  ];
}
function jr({ defaultProp: e, onChange: t }) {
  const n = $e(e), [r] = n, a = z(r), i = se(t);
  return H(() => {
    a.current !== r && (i(r), a.current = r);
  }, [
    r,
    a,
    i
  ]), n;
}
const St = /* @__PURE__ */ q((e, t) => {
  const { children: n, ...r } = e, a = ye.toArray(n), i = a.find(Wr);
  if (i) {
    const s = i.props.children, c = a.map((l) => l === i ? ye.count(s) > 1 ? ye.only(null) : /* @__PURE__ */ Ye(s) ? s.props.children : null : l);
    return /* @__PURE__ */ F(vt, U({}, r, {
      ref: t
    }), /* @__PURE__ */ Ye(s) ? /* @__PURE__ */ bt(s, void 0, c) : null);
  }
  return /* @__PURE__ */ F(vt, U({}, r, {
    ref: t
  }), n);
});
St.displayName = "Slot";
const vt = /* @__PURE__ */ q((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Ye(n) ? /* @__PURE__ */ bt(n, {
    ...Lr(r, n.props),
    ref: vn(t, n.ref)
  }) : ye.count(n) > 1 ? ye.only(null) : null;
});
vt.displayName = "SlotClone";
const Mr = ({ children: e }) => /* @__PURE__ */ F(ln, null, e);
function Wr(e) {
  return /* @__PURE__ */ Ye(e) && e.type === Mr;
}
function Lr(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const a = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...c) => {
      i == null || i(...c), a == null || a(...c);
    } : r === "style" ? n[r] = {
      ...a,
      ...i
    } : r === "className" && (n[r] = [
      a,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const zr = [
  "a",
  "button",
  "div",
  "h2",
  "h3",
  "img",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Ge = zr.reduce((e, t) => {
  const n = /* @__PURE__ */ q((r, a) => {
    const { asChild: i, ...s } = r, c = i ? St : t;
    return H(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ F(c, U({}, s, {
      ref: a
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ur(e, t) {
  e && un(
    () => e.dispatchEvent(t)
  );
}
function Yr(e) {
  const t = se(e);
  H(() => {
    const n = (r) => {
      r.key === "Escape" && t(r);
    };
    return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
  }, [
    t
  ]);
}
const mt = "dismissableLayer.update", Vr = "dismissableLayer.pointerDownOutside", Hr = "dismissableLayer.focusOutside";
let Jt;
const Gr = /* @__PURE__ */ dt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Kr = /* @__PURE__ */ q((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: c, ...l } = e, u = sn(Gr), [p, f] = $e(null), [, d] = $e({}), g = Ee(
    t,
    (R) => f(R)
  ), $ = Array.from(u.layers), [m] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), S = $.indexOf(m), b = p ? $.indexOf(p) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, A = b >= S, P = Xr((R) => {
    const I = R.target, j = [
      ...u.branches
    ].some(
      (M) => M.contains(I)
    );
    !A || j || (a == null || a(R), s == null || s(R), R.defaultPrevented || c == null || c());
  }), _ = qr((R) => {
    const I = R.target;
    [
      ...u.branches
    ].some(
      (M) => M.contains(I)
    ) || (i == null || i(R), s == null || s(R), R.defaultPrevented || c == null || c());
  });
  return Yr((R) => {
    b === u.layers.size - 1 && (r == null || r(R), !R.defaultPrevented && c && (R.preventDefault(), c()));
  }), H(() => {
    if (!!p)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Jt = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(p)), u.layers.add(p), Zt(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = Jt);
      };
  }, [
    p,
    n,
    u
  ]), H(() => () => {
    !p || (u.layers.delete(p), u.layersWithOutsidePointerEventsDisabled.delete(p), Zt());
  }, [
    p,
    u
  ]), H(() => {
    const R = () => d({});
    return document.addEventListener(mt, R), () => document.removeEventListener(mt, R);
  }, []), /* @__PURE__ */ F(Ge.div, U({}, l, {
    ref: g,
    style: {
      pointerEvents: E ? A ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ce(e.onFocusCapture, _.onFocusCapture),
    onBlurCapture: ce(e.onBlurCapture, _.onBlurCapture),
    onPointerDownCapture: ce(e.onPointerDownCapture, P.onPointerDownCapture)
  }));
});
function Xr(e) {
  const t = se(e), n = z(!1), r = z(() => {
  });
  return H(() => {
    const a = (s) => {
      if (s.target && !n.current) {
        let l = function() {
          mn(Vr, t, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (document.removeEventListener("click", r.current), r.current = l, document.addEventListener("click", r.current, {
          once: !0
        })) : l();
      }
      n.current = !1;
    }, i = window.setTimeout(() => {
      document.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), document.removeEventListener("pointerdown", a), document.removeEventListener("click", r.current);
    };
  }, [
    t
  ]), {
    onPointerDownCapture: () => n.current = !0
  };
}
function qr(e) {
  const t = se(e), n = z(!1);
  return H(() => {
    const r = (a) => {
      a.target && !n.current && mn(Hr, t, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return document.addEventListener("focusin", r), () => document.removeEventListener("focusin", r);
  }, [
    t
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Zt() {
  const e = new CustomEvent(mt);
  document.dispatchEvent(e);
}
function mn(e, t, n, { discrete: r }) {
  const a = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && a.addEventListener(e, t, {
    once: !0
  }), r ? Ur(a, i) : a.dispatchEvent(i);
}
const at = "focusScope.autoFocusOnMount", it = "focusScope.autoFocusOnUnmount", Qt = {
  bubbles: !1,
  cancelable: !0
}, Jr = /* @__PURE__ */ q((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: a, onUnmountAutoFocus: i, ...s } = e, [c, l] = $e(null), u = se(a), p = se(i), f = z(null), d = Ee(
    t,
    (m) => l(m)
  ), g = z({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  H(() => {
    if (r) {
      let m = function(b) {
        if (g.paused || !c)
          return;
        const E = b.target;
        c.contains(E) ? f.current = E : oe(f.current, {
          select: !0
        });
      }, S = function(b) {
        g.paused || !c || c.contains(b.relatedTarget) || oe(f.current, {
          select: !0
        });
      };
      return document.addEventListener("focusin", m), document.addEventListener("focusout", S), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", S);
      };
    }
  }, [
    r,
    c,
    g.paused
  ]), H(() => {
    if (c) {
      tn.add(g);
      const m = document.activeElement;
      if (!c.contains(m)) {
        const b = new CustomEvent(at, Qt);
        c.addEventListener(at, u), c.dispatchEvent(b), b.defaultPrevented || (Zr(ro(gn(c)), {
          select: !0
        }), document.activeElement === m && oe(c));
      }
      return () => {
        c.removeEventListener(at, u), setTimeout(() => {
          const b = new CustomEvent(it, Qt);
          c.addEventListener(it, p), c.dispatchEvent(b), b.defaultPrevented || oe(m != null ? m : document.body, {
            select: !0
          }), c.removeEventListener(it, p), tn.remove(g);
        }, 0);
      };
    }
  }, [
    c,
    u,
    p,
    g
  ]);
  const $ = Oe((m) => {
    if (!n && !r || g.paused)
      return;
    const S = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, b = document.activeElement;
    if (S && b) {
      const E = m.currentTarget, [A, P] = Qr(E);
      A && P ? !m.shiftKey && b === P ? (m.preventDefault(), n && oe(A, {
        select: !0
      })) : m.shiftKey && b === A && (m.preventDefault(), n && oe(P, {
        select: !0
      })) : b === E && m.preventDefault();
    }
  }, [
    n,
    r,
    g.paused
  ]);
  return /* @__PURE__ */ F(Ge.div, U({
    tabIndex: -1
  }, s, {
    ref: d,
    onKeyDown: $
  }));
});
function Zr(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (oe(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Qr(e) {
  const t = gn(e), n = en(t, e), r = en(t.reverse(), e);
  return [
    n,
    r
  ];
}
function gn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function en(e, t) {
  for (const n of e)
    if (!eo(n, {
      upTo: t
    }))
      return n;
}
function eo(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function to(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && to(e) && t && e.select();
  }
}
const tn = no();
function no() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = nn(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = nn(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function nn(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ro(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
function oo(e, t) {
  return er((n, r) => {
    const a = t[n][r];
    return a != null ? a : n;
  }, e);
}
const Et = (e) => {
  const { present: t, children: n } = e, r = ao(t), a = typeof n == "function" ? n({
    present: r.isPresent
  }) : ye.only(n), i = Ee(r.ref, a.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ bt(a, {
    ref: i
  }) : null;
};
Et.displayName = "Presence";
function ao(e) {
  const [t, n] = $e(), r = z({}), a = z(e), i = z("none"), s = e ? "mounted" : "unmounted", [c, l] = oo(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return H(() => {
    const u = Fe(r.current);
    i.current = c === "mounted" ? u : "none";
  }, [
    c
  ]), pt(() => {
    const u = r.current, p = a.current;
    if (p !== e) {
      const d = i.current, g = Fe(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(p && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    l
  ]), pt(() => {
    if (t) {
      const u = (f) => {
        const g = Fe(r.current).includes(f.animationName);
        f.target === t && g && un(
          () => l("ANIMATION_END")
        );
      }, p = (f) => {
        f.target === t && (i.current = Fe(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(c),
    ref: Oe((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Fe(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let ct = 0;
function io() {
  H(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : rn()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : rn()), ct++, () => {
      ct === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), ct--;
    };
  }, []);
}
function rn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Z = function() {
  return Z = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Z.apply(this, arguments);
};
function hn(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function co(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, i; r < a; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Le = "right-scroll-bar-position", ze = "width-before-scroll-bar", so = "with-scroll-bars-hidden", lo = "--removed-body-scroll-bar-size";
function uo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fo(e, t) {
  var n = $e(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var a = n.value;
          a !== r && (n.value = r, n.callback(r, a));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function po(e, t) {
  return fo(t || null, function(n) {
    return e.forEach(function(r) {
      return uo(r, n);
    });
  });
}
function vo(e) {
  return e;
}
function mo(e, t) {
  t === void 0 && (t = vo);
  var n = [], r = !1, a = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, r);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(c) {
          return i(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(i), s = n;
      }
      var l = function() {
        var p = s;
        s = [], p.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(p) {
          s.push(p), u();
        },
        filter: function(p) {
          return s = s.filter(p), n;
        }
      };
    }
  };
  return a;
}
function go(e) {
  e === void 0 && (e = {});
  var t = mo(null);
  return t.options = Z({ async: !0, ssr: !1 }, e), t;
}
var bn = function(e) {
  var t = e.sideCar, n = hn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ X(r, {
    ...Z({}, n)
  });
};
bn.isSideCarExport = !0;
function ho(e, t) {
  return e.useMedium(t), bn;
}
var yn = go(), st = function() {
}, Ke = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: st,
    onWheelCapture: st,
    onTouchMoveCapture: st
  }), a = r[0], i = r[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, p = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, $ = e.inert, m = e.allowPinchZoom, S = e.as, b = S === void 0 ? "div" : S, E = hn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), A = d, P = po([n, t]), _ = Z(Z({}, E), a);
  return /* @__PURE__ */ $t(pn, {
    children: [p && /* @__PURE__ */ X(A, {
      sideCar: yn,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: $,
      setCallbacks: i,
      allowPinchZoom: !!m,
      lockRef: n
    }), s ? D.cloneElement(D.Children.only(c), Z(Z({}, _), {
      ref: P
    })) : /* @__PURE__ */ X(b, {
      ...Z({}, _, {
        className: l,
        ref: P
      }),
      children: c
    })]
  });
});
Ke.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ke.classNames = {
  fullWidth: ze,
  zeroRight: Le
};
var bo = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yo() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = bo();
  return t && e.setAttribute("nonce", t), e;
}
function $o(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function So(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Eo = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = yo()) && ($o(t, n), So(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, xo = function() {
  var e = Eo();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $n = function() {
  var e = xo(), t = function(n) {
    var r = n.styles, a = n.dynamic;
    return e(r, a), null;
  };
  return t;
}, Ro = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lt = function(e) {
  return parseInt(e || "", 10) || 0;
}, Co = function(e) {
  var t = window.getComputedStyle(document.body);
  process.env.NODE_ENV !== "production" && t.overflowY === "hidden" && console.error("react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body");
  var n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lt(n), lt(r), lt(a)];
}, wo = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ro;
  var t = Co(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, ko = $n(), Po = function(e, t, n, r) {
  var a = e.left, i = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(so, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Le, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(ze, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Le, " .").concat(Le, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ze, " .").concat(ze, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(lo, ": ").concat(c, `px;
  }
`);
}, Oo = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, a = r === void 0 ? "margin" : r, i = D.useMemo(function() {
    return wo(a);
  }, [a]);
  return /* @__PURE__ */ X(ko, {
    styles: Po(i, !t, a, n ? "" : "!important")
  });
}, gt = !1;
if (typeof window < "u")
  try {
    var Ne = Object.defineProperty({}, "passive", {
      get: function() {
        return gt = !0, !0;
      }
    });
    window.addEventListener("test", Ne, Ne), window.removeEventListener("test", Ne, Ne);
  } catch {
    gt = !1;
  }
var me = gt ? { passive: !1 } : !1, To = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, _o = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, on = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Sn(e, n);
    if (r) {
      var a = En(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Io = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Do = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Sn = function(e, t) {
  return e === "v" ? To(t) : _o(t);
}, En = function(e, t) {
  return e === "v" ? Io(t) : Do(t);
}, Ao = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Bo = function(e, t, n, r, a) {
  var i = Ao(e, window.getComputedStyle(t).direction), s = i * r, c = n.target, l = t.contains(c), u = !1, p = s > 0, f = 0, d = 0;
  do {
    var g = En(e, c), $ = g[0], m = g[1], S = g[2], b = m - S - i * $;
    ($ || b) && Sn(e, c) && (f += b, d += $), c = c.parentNode;
  } while (!l && c !== document.body || l && (t.contains(c) || t === c));
  return (p && (a && f === 0 || !a && s > f) || !p && (a && d === 0 || !a && -s > d)) && (u = !0), u;
}, je = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, an = function(e) {
  return [e.deltaX, e.deltaY];
}, cn = function(e) {
  return e && "current" in e ? e.current : e;
}, Fo = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, No = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, jo = 0, ge = [];
function Mo(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), a = D.useState(jo++)[0], i = D.useState(function() {
    return $n();
  })[0], s = D.useRef(e);
  D.useEffect(function() {
    s.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var m = co([e.lockRef.current], (e.shards || []).map(cn), !0).filter(Boolean);
      return m.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), m.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = D.useCallback(function(m, S) {
    if ("touches" in m && m.touches.length === 2)
      return !s.current.allowPinchZoom;
    var b = je(m), E = n.current, A = "deltaX" in m ? m.deltaX : E[0] - b[0], P = "deltaY" in m ? m.deltaY : E[1] - b[1], _, R = m.target, I = Math.abs(A) > Math.abs(P) ? "h" : "v";
    if ("touches" in m && I === "h" && R.type === "range")
      return !1;
    var j = on(I, R);
    if (!j)
      return !0;
    if (j ? _ = I : (_ = I === "v" ? "h" : "v", j = on(I, R)), !j)
      return !1;
    if (!r.current && "changedTouches" in m && (A || P) && (r.current = _), !_)
      return !0;
    var M = r.current || _;
    return Bo(M, S, m, M === "h" ? A : P, !0);
  }, []), l = D.useCallback(function(m) {
    var S = m;
    if (!(!ge.length || ge[ge.length - 1] !== i)) {
      var b = "deltaY" in S ? an(S) : je(S), E = t.current.filter(function(_) {
        return _.name === S.type && _.target === S.target && Fo(_.delta, b);
      })[0];
      if (E && E.should) {
        S.preventDefault();
        return;
      }
      if (!E) {
        var A = (s.current.shards || []).map(cn).filter(Boolean).filter(function(_) {
          return _.contains(S.target);
        }), P = A.length > 0 ? c(S, A[0]) : !s.current.noIsolation;
        P && S.preventDefault();
      }
    }
  }, []), u = D.useCallback(function(m, S, b, E) {
    var A = {
      name: m,
      delta: S,
      target: b,
      should: E
    };
    t.current.push(A), setTimeout(function() {
      t.current = t.current.filter(function(P) {
        return P !== A;
      });
    }, 1);
  }, []), p = D.useCallback(function(m) {
    n.current = je(m), r.current = void 0;
  }, []), f = D.useCallback(function(m) {
    u(m.type, an(m), m.target, c(m, e.lockRef.current));
  }, []), d = D.useCallback(function(m) {
    u(m.type, je(m), m.target, c(m, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return ge.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, me), document.addEventListener("touchmove", l, me), document.addEventListener("touchstart", p, me), function() {
      ge = ge.filter(function(m) {
        return m !== i;
      }), document.removeEventListener("wheel", l, me), document.removeEventListener("touchmove", l, me), document.removeEventListener("touchstart", p, me);
    };
  }, []);
  var g = e.removeScrollBar, $ = e.inert;
  return /* @__PURE__ */ $t(pn, {
    children: [$ ? /* @__PURE__ */ X(i, {
      styles: No(a)
    }) : null, g ? /* @__PURE__ */ X(Oo, {
      gapMode: "margin"
    }) : null]
  });
}
const Wo = ho(yn, Mo);
var xn = D.forwardRef(function(e, t) {
  return /* @__PURE__ */ X(Ke, {
    ...Z({}, e, {
      ref: t,
      sideCar: Wo
    })
  });
});
xn.classNames = Ke.classNames;
const Lo = xn;
var zo = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, he = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), We = {}, ut = 0, Uo = function(e, t, n, r) {
  var a = Array.isArray(e) ? e : [e];
  We[n] || (We[n] = /* @__PURE__ */ new WeakMap());
  var i = We[n], s = [], c = /* @__PURE__ */ new Set(), l = new Set(a), u = function(f) {
    !f || c.has(f) || (c.add(f), u(f.parentNode));
  };
  a.forEach(u);
  var p = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (c.has(d))
        p(d);
      else {
        var g = d.getAttribute(r), $ = g !== null && g !== "false", m = (he.get(d) || 0) + 1, S = (i.get(d) || 0) + 1;
        he.set(d, m), i.set(d, S), s.push(d), m === 1 && $ && Me.set(d, !0), S === 1 && d.setAttribute(n, "true"), $ || d.setAttribute(r, "true");
      }
    });
  };
  return p(t), c.clear(), ut++, function() {
    s.forEach(function(f) {
      var d = he.get(f) - 1, g = i.get(f) - 1;
      he.set(f, d), i.set(f, g), d || (Me.has(f) || f.removeAttribute(r), Me.delete(f)), g || f.removeAttribute(n);
    }), ut--, ut || (he = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap(), We = {});
  };
}, Yo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), a = t || zo(e);
  return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), Uo(r, a, n, "aria-hidden")) : function() {
    return null;
  };
};
const Rn = "Dialog", [Cn, $a] = Dr(Rn), [Vo, le] = Cn(Rn), Ho = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: a, onOpenChange: i, modal: s = !0 } = e, c = z(null), l = z(null), [u = !1, p] = Nr({
    prop: r,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ F(Vo, {
    scope: t,
    triggerRef: c,
    contentRef: l,
    contentId: ot(),
    titleId: ot(),
    descriptionId: ot(),
    open: u,
    onOpenChange: p,
    onOpenToggle: Oe(
      () => p(
        (f) => !f
      ),
      [
        p
      ]
    ),
    modal: s
  }, n);
}, Go = "DialogTrigger", Ko = /* @__PURE__ */ q((e, t) => {
  const { __scopeDialog: n, ...r } = e, a = le(Go, n), i = Ee(t, a.triggerRef);
  return /* @__PURE__ */ F(Ge.button, U({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": a.open,
    "aria-controls": a.contentId,
    "data-state": xt(a.open)
  }, r, {
    ref: i,
    onClick: ce(e.onClick, a.onOpenToggle)
  }));
}), Xo = "DialogPortal", [Sa, wn] = Cn(Xo, {
  forceMount: void 0
}), ht = "DialogOverlay", qo = /* @__PURE__ */ q((e, t) => {
  const n = wn(ht, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, i = le(ht, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ F(Et, {
    present: r || i.open
  }, /* @__PURE__ */ F(Jo, U({}, a, {
    ref: t
  }))) : null;
}), Jo = /* @__PURE__ */ q((e, t) => {
  const { __scopeDialog: n, ...r } = e, a = le(ht, n);
  return /* @__PURE__ */ F(Lo, {
    as: St,
    allowPinchZoom: !0,
    shards: [
      a.contentRef
    ]
  }, /* @__PURE__ */ F(Ge.div, U({
    "data-state": xt(a.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), Pe = "DialogContent", Zo = /* @__PURE__ */ q((e, t) => {
  const n = wn(Pe, e.__scopeDialog), { forceMount: r = n.forceMount, ...a } = e, i = le(Pe, e.__scopeDialog);
  return /* @__PURE__ */ F(Et, {
    present: r || i.open
  }, i.modal ? /* @__PURE__ */ F(Qo, U({}, a, {
    ref: t
  })) : /* @__PURE__ */ F(ea, U({}, a, {
    ref: t
  })));
}), Qo = /* @__PURE__ */ q((e, t) => {
  const n = le(Pe, e.__scopeDialog), r = z(null), a = Ee(t, n.contentRef, r);
  return H(() => {
    const i = r.current;
    if (i)
      return Yo(i);
  }, []), /* @__PURE__ */ F(kn, U({}, e, {
    ref: a,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ce(e.onCloseAutoFocus, (i) => {
      var s;
      i.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ce(e.onPointerDownOutside, (i) => {
      const s = i.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || c) && i.preventDefault();
    }),
    onFocusOutside: ce(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), ea = /* @__PURE__ */ q((e, t) => {
  const n = le(Pe, e.__scopeDialog), r = z(!1);
  return /* @__PURE__ */ F(kn, U({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0);
      const c = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault();
    }
  }));
}), kn = /* @__PURE__ */ q((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, ...s } = e, c = le(Pe, n), l = z(null), u = Ee(t, l);
  return io(), /* @__PURE__ */ F(ln, null, /* @__PURE__ */ F(Jr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: a,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ F(Kr, U({
    role: "dialog",
    id: c.contentId,
    "aria-describedby": c.descriptionId,
    "aria-labelledby": c.titleId,
    "data-state": xt(c.open)
  }, s, {
    ref: u,
    onDismiss: () => c.onOpenChange(!1)
  }))), !1);
});
function xt(e) {
  return e ? "open" : "closed";
}
const ta = Ho, na = qo, ra = Zo, oa = fn({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
}), aa = fn({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
}), ia = Ve(ra, ""), ca = Ve(na, {
  backgroundColor: "$overlay",
  position: "fixed",
  zIndex: 9999,
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${oa} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
}), sa = Ve("div", {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  zIndex: 99999,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${aa} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  "&:focus": { outline: "none" }
}), Ea = ({
  children: e,
  overlay: t = !0,
  ...n
}) => /* @__PURE__ */ $t(ta, {
  ...n,
  children: [t && /* @__PURE__ */ X(ca, {}), e]
}), xa = ({
  children: e,
  ...t
}) => /* @__PURE__ */ X(ia, {
  ...t,
  children: /* @__PURE__ */ X(sa, {
    children: e
  })
}), la = Ko;
la.displayName = "ModalTrigger";
export {
  ba as Button,
  ya as Card,
  Ea as Modal,
  xa as ModalContent,
  la as ModalTrigger
};
//# sourceMappingURL=lib.es.js.map
