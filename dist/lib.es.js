import * as D from "react";
import re, { useCallback as Te, createContext as dt, useMemo as Ye, createElement as F, useContext as sn, useLayoutEffect as Qn, useRef as z, useEffect as H, useState as $e, forwardRef as q, Children as ye, isValidElement as Ve, cloneElement as bt, Fragment as ln, useReducer as er } from "react";
import { flushSync as un } from "react-dom";
var O = "colors", L = "sizes", y = "space", tr = { gap: y, gridGap: y, columnGap: y, gridColumnGap: y, rowGap: y, gridRowGap: y, inset: y, insetBlock: y, insetBlockEnd: y, insetBlockStart: y, insetInline: y, insetInlineEnd: y, insetInlineStart: y, margin: y, marginTop: y, marginRight: y, marginBottom: y, marginLeft: y, marginBlock: y, marginBlockEnd: y, marginBlockStart: y, marginInline: y, marginInlineEnd: y, marginInlineStart: y, padding: y, paddingTop: y, paddingRight: y, paddingBottom: y, paddingLeft: y, paddingBlock: y, paddingBlockEnd: y, paddingBlockStart: y, paddingInline: y, paddingInlineEnd: y, paddingInlineStart: y, top: y, right: y, bottom: y, left: y, scrollMargin: y, scrollMarginTop: y, scrollMarginRight: y, scrollMarginBottom: y, scrollMarginLeft: y, scrollMarginX: y, scrollMarginY: y, scrollMarginBlock: y, scrollMarginBlockEnd: y, scrollMarginBlockStart: y, scrollMarginInline: y, scrollMarginInlineEnd: y, scrollMarginInlineStart: y, scrollPadding: y, scrollPaddingTop: y, scrollPaddingRight: y, scrollPaddingBottom: y, scrollPaddingLeft: y, scrollPaddingX: y, scrollPaddingY: y, scrollPaddingBlock: y, scrollPaddingBlockEnd: y, scrollPaddingBlockStart: y, scrollPaddingInline: y, scrollPaddingInlineEnd: y, scrollPaddingInlineStart: y, fontSize: "fontSizes", background: O, backgroundColor: O, backgroundImage: O, borderImage: O, border: O, borderBlock: O, borderBlockEnd: O, borderBlockStart: O, borderBottom: O, borderBottomColor: O, borderColor: O, borderInline: O, borderInlineEnd: O, borderInlineStart: O, borderLeft: O, borderLeftColor: O, borderRight: O, borderRightColor: O, borderTop: O, borderTopColor: O, caretColor: O, color: O, columnRuleColor: O, fill: O, outline: O, outlineColor: O, stroke: O, textDecorationColor: O, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: L, minBlockSize: L, maxBlockSize: L, inlineSize: L, minInlineSize: L, maxInlineSize: L, width: L, minWidth: L, maxWidth: L, height: L, minHeight: L, maxHeight: L, flexBasis: L, gridTemplateColumns: L, gridTemplateRows: L, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, nr = (e, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, Se = () => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n, ...r) => {
    const i = ((a) => JSON.stringify(a, nr))(t);
    return i in e ? e[i] : e[i] = n(t, ...r);
  };
}, ie = Symbol.for("sxs.internal"), yt = (e, t) => Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), Ut = (e) => {
  for (const t in e)
    return !0;
  return !1;
}, { hasOwnProperty: rr } = Object.prototype, ft = (e) => e.includes("-") ? e : e.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), or = /\s+(?![^()]*\))/, ve = (e) => (t) => e(...typeof t == "string" ? String(t).split(or) : [t]), Yt = { appearance: (e) => ({ WebkitAppearance: e, appearance: e }), backfaceVisibility: (e) => ({ WebkitBackfaceVisibility: e, backfaceVisibility: e }), backdropFilter: (e) => ({ WebkitBackdropFilter: e, backdropFilter: e }), backgroundClip: (e) => ({ WebkitBackgroundClip: e, backgroundClip: e }), boxDecorationBreak: (e) => ({ WebkitBoxDecorationBreak: e, boxDecorationBreak: e }), clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }), content: (e) => ({ content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"` }), hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }), maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }), maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }), tabSize: (e) => ({ MozTabSize: e, tabSize: e }), textSizeAdjust: (e) => ({ WebkitTextSizeAdjust: e, textSizeAdjust: e }), userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }), marginBlock: ve((e, t) => ({ marginBlockStart: e, marginBlockEnd: t || e })), marginInline: ve((e, t) => ({ marginInlineStart: e, marginInlineEnd: t || e })), maxSize: ve((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })), minSize: ve((e, t) => ({ minBlockSize: e, minInlineSize: t || e })), paddingBlock: ve((e, t) => ({ paddingBlockStart: e, paddingBlockEnd: t || e })), paddingInline: ve((e, t) => ({ paddingInlineStart: e, paddingInlineEnd: t || e })) }, rt = /([\d.]+)([^]*)/, ir = (e, t) => e.length ? e.reduce((n, r) => (n.push(...t.map((i) => i.includes("&") ? i.replace(/&/g, /[ +>|~]/.test(r) && /&.*&/.test(i) ? `:is(${r})` : r) : r + " " + i)), n), []) : t, ar = (e, t) => e in cr && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (n, r, i, a) => r + (i === "stretch" ? `-moz-available${a};${ft(e)}:${r}-webkit-fill-available` : `-moz-fit-content${a};${ft(e)}:${r}fit-content`) + a) : String(t), cr = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, te = (e) => e ? e + "-" : "", dn = (e, t, n) => e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (r, i, a, s, c) => s == "$" == !!a ? r : (i || s == "--" ? "calc(" : "") + "var(--" + (s === "$" ? te(t) + (c.includes("$") ? "" : te(n)) + c.replace(/\$/g, "-") : c) + ")" + (i || s == "--" ? "*" + (i || "") + (a || "1") + ")" : "")), sr = /\s*,\s*(?![^()]*\))/, lr = Object.prototype.toString, be = (e, t, n, r, i) => {
  let a, s, c;
  const l = (u, p, f) => {
    let d, g;
    const $ = (m) => {
      for (d in m) {
        const E = d.charCodeAt(0) === 64, A = E && Array.isArray(m[d]) ? m[d] : [m[d]];
        for (g of A) {
          const P = /[A-Z]/.test(b = d) ? b : b.replace(/-[^]/g, (C) => C[1].toUpperCase()), _ = typeof g == "object" && g && g.toString === lr && (!r.utils[P] || !p.length);
          if (P in r.utils && !_) {
            const C = r.utils[P];
            if (C !== s) {
              s = C, $(C(g)), s = null;
              continue;
            }
          } else if (P in Yt) {
            const C = Yt[P];
            if (C !== c) {
              c = C, $(C(g)), c = null;
              continue;
            }
          }
          if (E && (S = d.slice(1) in r.media ? "@media " + r.media[d.slice(1)] : d, d = S.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (C, I, N, M, Y, J) => {
            const Q = rt.test(I), V = 0.0625 * (Q ? -1 : 1), [K, ne] = Q ? [M, I] : [I, M];
            return "(" + (N[0] === "=" ? "" : N[0] === ">" === Q ? "max-" : "min-") + K + ":" + (N[0] !== "=" && N.length === 1 ? ne.replace(rt, (_e, ue, de) => Number(ue) + V * (N === ">" ? 1 : -1) + de) : ne) + (Y ? ") and (" + (Y[0] === ">" ? "min-" : "max-") + K + ":" + (Y.length === 1 ? J.replace(rt, (_e, ue, de) => Number(ue) + V * (Y === ">" ? -1 : 1) + de) : J) : "") + ")";
          })), _) {
            const C = E ? f.concat(d) : [...f], I = E ? [...p] : ir(p, d.split(sr));
            a !== void 0 && i(Vt(...a)), a = void 0, l(g, I, C);
          } else
            a === void 0 && (a = [[], p, f]), d = E || d.charCodeAt(0) !== 36 ? d : `--${te(r.prefix)}${d.slice(1).replace(/\$/g, "-")}`, g = _ ? g : typeof g == "number" ? g && P in ur ? String(g) + "px" : String(g) : dn(ar(P, g == null ? "" : g), r.prefix, r.themeMap[P]), a[0].push(`${E ? `${d} ` : `${ft(d)}:`}${g}`);
        }
      }
      var S, b;
    };
    $(u), a !== void 0 && i(Vt(...a)), a = void 0;
  };
  l(e, t, n);
}, Vt = (e, t, n) => `${n.map((r) => `${r}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, ur = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, Ht = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)), ae = (e) => ((t) => {
  let n, r = "";
  for (n = Math.abs(t); n > 52; n = n / 52 | 0)
    r = Ht(n % 52) + r;
  return Ht(n % 52) + r;
})(((t, n) => {
  let r = n.length;
  for (; r; )
    t = 33 * t ^ n.charCodeAt(--r);
  return t;
})(5381, JSON.stringify(e)) >>> 0), Pe = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], dr = (e) => {
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
    const { cssRules: i } = t.sheet;
    return [].map.call(i, (a, s) => {
      const { cssText: c } = a;
      let l = "";
      if (c.startsWith("--sxs"))
        return "";
      if (i[s - 1] && (l = i[s - 1].cssText).startsWith("--sxs")) {
        if (!a.cssRules.length)
          return "";
        for (const u in t.rules)
          if (t.rules[u].group === a)
            return `--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${c}`;
        return a.cssRules.length ? `${l}${c}` : "";
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
    const i = Object(e).styleSheets || [];
    for (const c of i)
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
          const g = d.slice(14, -3).trim().split(/\s+/), $ = Pe[g[0]];
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
    const { sheet: a, rules: s } = t;
    for (let c = Pe.length - 1; c >= 0; --c) {
      const l = Pe[c];
      if (!s[l]) {
        const u = Pe[c + 1], p = s[u] ? s[u].index : a.cssRules.length;
        a.insertRule("@media{}", p), a.insertRule(`--sxs{--sxs:${c}}`, p), s[l] = { group: a.cssRules[p + 1], index: p, cache: /* @__PURE__ */ new Set([c]) };
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
  for (const i of n)
    if (i != null)
      if (i[ie]) {
        r.type == null && (r.type = i[ie].type);
        for (const a of i[ie].composers)
          r.composers.add(a);
      } else
        i.constructor !== Object || i.$$typeof ? r.type == null && (r.type = i) : r.composers.add(mr(i, e));
  return r.type == null && (r.type = "span"), r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]), gr(e, r, t);
}), mr = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, i) => {
  const a = `${te(i.prefix)}c-${ae(r)}`, s = [], c = [], l = /* @__PURE__ */ Object.create(null), u = [];
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
  return [a, r, s, c, l, u];
}, gr = (e, t, n) => {
  const [r, i, a, s] = hr(t.composers), c = typeof t.type == "function" || t.type.$$typeof ? ((f) => {
    function d() {
      for (let g = 0; g < d[Re].length; g++) {
        const [$, m] = d[Re][g];
        f.rules[$].apply(m);
      }
      return d[Re] = [], null;
    }
    return d[Re] = [], d.rules = {}, Pe.forEach((g) => d.rules[g] = { apply: ($) => d[Re].push([g, $]) }), d;
  })(n) : null, l = (c || n).rules, u = `.${r}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`, p = (f) => {
    f = typeof f == "object" && f || br;
    const { css: d, ...g } = f, $ = {};
    for (const b in a)
      if (delete g[b], b in f) {
        let E = f[b];
        typeof E == "object" && E ? $[b] = { "@initial": a[b], ...E } : (E = String(E), $[b] = E !== "undefined" || s.has(b) ? E : a[b]);
      } else
        $[b] = a[b];
    const m = /* @__PURE__ */ new Set([...i]);
    for (const [b, E, A, P] of t.composers) {
      n.rules.styled.cache.has(b) || (n.rules.styled.cache.add(b), be(E, [`.${b}`], [], e, (I) => {
        l.styled.apply(I);
      }));
      const _ = Kt(A, $, e.media), C = Kt(P, $, e.media, !0);
      for (const I of _)
        if (I !== void 0)
          for (const [N, M, Y] of I) {
            const J = `${b}-${ae(M)}-${N}`;
            m.add(J);
            const Q = (Y ? n.rules.resonevar : n.rules.onevar).cache, V = Y ? l.resonevar : l.onevar;
            Q.has(J) || (Q.add(J), be(M, [`.${J}`], [], e, (K) => {
              V.apply(K);
            }));
          }
      for (const I of C)
        if (I !== void 0)
          for (const [N, M] of I) {
            const Y = `${b}-${ae(M)}-${N}`;
            m.add(Y), n.rules.allvar.cache.has(Y) || (n.rules.allvar.cache.add(Y), be(M, [`.${Y}`], [], e, (J) => {
              l.allvar.apply(J);
            }));
          }
    }
    if (typeof d == "object" && d) {
      const b = `${r}-i${ae(d)}-css`;
      m.add(b), n.rules.inline.cache.has(b) || (n.rules.inline.cache.add(b), be(d, [`.${b}`], [], e, (E) => {
        l.inline.apply(E);
      }));
    }
    for (const b of String(f.className || "").trim().split(/\s+/))
      b && m.add(b);
    const S = g.className = [...m].join(" ");
    return { type: t.type, className: S, selector: u, props: g, toString: () => S, deferredInjector: c };
  };
  return yt(p, { className: r, selector: u, [ie]: t, toString: () => (n.rules.styled.cache.has(r) || p(), r) });
}, hr = (e) => {
  let t = "";
  const n = [], r = {}, i = [];
  for (const [a, , , , s, c] of e) {
    t === "" && (t = a), n.push(a), i.push(...c);
    for (const l in s) {
      const u = s[l];
      (r[l] === void 0 || u !== "undefined" || c.includes(u)) && (r[l] = u);
    }
  }
  return [t, n, r, new Set(i)];
}, Kt = (e, t, n, r) => {
  const i = [];
  e:
    for (let [a, s, c] of e) {
      if (c)
        continue;
      let l, u = 0, p = !1;
      for (l in a) {
        const f = a[l];
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
      (i[u] = i[u] || []).push([r ? "cv" : `${l}-${a[l]}`, s, p]);
    }
  return i;
}, br = {}, yr = Se(), $r = (e, t) => yr(e, () => (...n) => {
  const r = () => {
    for (let i of n) {
      i = typeof i == "object" && i || {};
      let a = ae(i);
      if (!t.rules.global.cache.has(a)) {
        if (t.rules.global.cache.add(a), "@import" in i) {
          let s = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let c of [].concat(i["@import"]))
            c = c.includes('"') || c.includes("'") ? c : `"${c}"`, t.sheet.insertRule(`@import ${c};`, s++);
          delete i["@import"];
        }
        be(i, [], [], e, (s) => {
          t.rules.global.apply(s);
        });
      }
    }
    return "";
  };
  return yt(r, { toString: r });
}), Sr = Se(), Er = (e, t) => Sr(e, () => (n) => {
  const r = `${te(e.prefix)}k-${ae(n)}`, i = () => {
    if (!t.rules.global.cache.has(r)) {
      t.rules.global.cache.add(r);
      const a = [];
      be(n, [], [], e, (c) => a.push(c));
      const s = `@keyframes ${r}{${a.join("")}}`;
      t.rules.global.apply(s);
    }
    return r;
  };
  return yt(i, { get name() {
    return i();
  }, toString: i });
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
}, Cr = Se(), Rr = (e, t) => Cr(e, () => (n, r) => {
  r = typeof n == "object" && n || Object(r);
  const i = `.${n = (n = typeof n == "string" ? n : "") || `${te(e.prefix)}t-${ae(r)}`}`, a = {}, s = [];
  for (const l in r) {
    a[l] = {};
    for (const u in r[l]) {
      const p = `--${te(e.prefix)}${l}-${u}`, f = dn(String(r[l][u]), e.prefix, l);
      a[l][u] = new xr(u, f, l, e.prefix), s.push(`${p}:${f}`);
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
  return { ...a, get className() {
    return c();
  }, selector: i, toString: c };
}), wr = Se(), kr = Se(), Pr = (e) => {
  const t = ((n) => {
    let r = !1;
    const i = wr(n, (a) => {
      r = !0;
      const s = "prefix" in (a = typeof a == "object" && a || {}) ? String(a.prefix) : "", c = typeof a.media == "object" && a.media || {}, l = typeof a.root == "object" ? a.root || null : globalThis.document || null, u = typeof a.theme == "object" && a.theme || {}, p = { prefix: s, media: c, theme: u, themeMap: typeof a.themeMap == "object" && a.themeMap || { ...tr }, utils: typeof a.utils == "object" && a.utils || {} }, f = fr(l), d = { css: Gt(p, f), globalCss: $r(p, f), keyframes: Er(p, f), createTheme: Rr(p, f), reset() {
        f.reset(), d.theme.toString();
      }, theme: {}, sheet: f, config: p, prefix: s, getCssText: f.toString, toString: f.toString };
      return String(d.theme = d.createTheme(u)), d;
    });
    return r || i.reset(), i;
  })(e);
  return t.styled = (({ config: n, sheet: r }) => kr(n, () => {
    const i = Gt(n, r);
    return (...a) => {
      const s = i(...a), c = s[ie].type, l = re.forwardRef((u, p) => {
        const f = u && u.as || c, { props: d, deferredInjector: g } = s(u);
        return delete d.as, d.ref = p, g ? re.createElement(re.Fragment, null, re.createElement(f, d), re.createElement(g, null)) : re.createElement(f, d);
      });
      return l.className = s.className, l.displayName = `Styled.${c.displayName || c.name || c}`, l.selector = s.selector, l.toString = () => s.selector, l[ie] = s[ie], l;
    };
  }))(t), t;
};
const {
  styled: Ee,
  css: mi,
  globalCss: gi,
  keyframes: fn,
  getCssText: hi,
  theme: Or,
  createTheme: bi,
  config: yi
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
      overlay: "rgba(0,0,0,0.5)",
      font: "#333333",
      font_dark: "#1a1523"
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
}), Tr = Ee("button", {
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
var He = { exports: {} }, we = {};
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
function _r() {
  if (Xt)
    return we;
  Xt = 1;
  var e = re, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, l, u) {
    var p, f = {}, d = null, g = null;
    u !== void 0 && (d = "" + u), l.key !== void 0 && (d = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (p in l)
      r.call(l, p) && !a.hasOwnProperty(p) && (f[p] = l[p]);
    if (c && c.defaultProps)
      for (p in l = c.defaultProps, l)
        f[p] === void 0 && (f[p] = l[p]);
    return { $$typeof: t, type: c, key: d, ref: g, props: f, _owner: i.current };
  }
  return we.Fragment = n, we.jsx = s, we.jsxs = s, we;
}
var ke = {};
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
function Ir() {
  return qt || (qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = re, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), $ = Symbol.iterator, m = "@@iterator";
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
    var P = !1, _ = !1, C = !1, I = !1, N = !1, M;
    M = Symbol.for("react.module.reference");
    function Y(o) {
      return !!(typeof o == "string" || typeof o == "function" || o === r || o === a || N || o === i || o === u || o === p || I || o === g || P || _ || C || typeof o == "object" && o !== null && (o.$$typeof === d || o.$$typeof === f || o.$$typeof === s || o.$$typeof === c || o.$$typeof === l || o.$$typeof === M || o.getModuleId !== void 0));
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
        case a:
          return "Profiler";
        case i:
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
    var K = Object.assign, ne = 0, _e, ue, de, Ct, Rt, wt, kt;
    function Pt() {
    }
    Pt.__reactDisabledLog = !0;
    function Pn() {
      {
        if (ne === 0) {
          _e = console.log, ue = console.info, de = console.warn, Ct = console.error, Rt = console.group, wt = console.groupCollapsed, kt = console.groupEnd;
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
            log: K({}, o, {
              value: _e
            }),
            info: K({}, o, {
              value: ue
            }),
            warn: K({}, o, {
              value: de
            }),
            error: K({}, o, {
              value: Ct
            }),
            group: K({}, o, {
              value: Rt
            }),
            groupCollapsed: K({}, o, {
              value: wt
            }),
            groupEnd: K({}, o, {
              value: kt
            })
          });
        }
        ne < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xe = b.ReactCurrentDispatcher, qe;
    function Ie(o, v, h) {
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
    var Je = !1, De;
    {
      var Tn = typeof WeakMap == "function" ? WeakMap : Map;
      De = new Tn();
    }
    function Ot(o, v) {
      if (!o || Je)
        return "";
      {
        var h = De.get(o);
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
          for (var R = ee.stack.split(`
`), W = x.stack.split(`
`), B = R.length - 1, j = W.length - 1; B >= 1 && j >= 0 && R[B] !== W[j]; )
            j--;
          for (; B >= 1 && j >= 0; B--, j--)
            if (R[B] !== W[j]) {
              if (B !== 1 || j !== 1)
                do
                  if (B--, j--, j < 0 || R[B] !== W[j]) {
                    var X = `
` + R[B].replace(" at new ", " at ");
                    return o.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", o.displayName)), typeof o == "function" && De.set(o, X), X;
                  }
                while (B >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        Je = !1, Xe.current = T, On(), Error.prepareStackTrace = k;
      }
      var pe = o ? o.displayName || o.name : "", zt = pe ? Ie(pe) : "";
      return typeof o == "function" && De.set(o, zt), zt;
    }
    function _n(o, v, h) {
      return Ot(o, !1);
    }
    function In(o) {
      var v = o.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ae(o, v, h) {
      if (o == null)
        return "";
      if (typeof o == "function")
        return Ot(o, In(o));
      if (typeof o == "string")
        return Ie(o);
      switch (o) {
        case u:
          return Ie("Suspense");
        case p:
          return Ie("SuspenseList");
      }
      if (typeof o == "object")
        switch (o.$$typeof) {
          case l:
            return _n(o.render);
          case f:
            return Ae(o.type, v, h);
          case d: {
            var x = o, k = x._payload, T = x._init;
            try {
              return Ae(T(k), v, h);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, Tt = {}, _t = b.ReactDebugCurrentFrame;
    function Fe(o) {
      if (o) {
        var v = o._owner, h = Ae(o.type, o._source, v ? v.type : null);
        _t.setExtraStackFrame(h);
      } else
        _t.setExtraStackFrame(null);
    }
    function Dn(o, v, h, x, k) {
      {
        var T = Function.call.bind(Be);
        for (var w in o)
          if (T(o, w)) {
            var R = void 0;
            try {
              if (typeof o[w] != "function") {
                var W = Error((x || "React class") + ": " + h + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              R = o[w](v, w, x, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              R = B;
            }
            R && !(R instanceof Error) && (Fe(k), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", h, w, typeof R), Fe(null)), R instanceof Error && !(R.message in Tt) && (Tt[R.message] = !0, Fe(k), E("Failed %s type: %s", h, R.message), Fe(null));
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
    var Ce = b.ReactCurrentOwner, jn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, At, Bt, Qe;
    Qe = {};
    function Nn(o) {
      if (Be.call(o, "ref")) {
        var v = Object.getOwnPropertyDescriptor(o, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.ref !== void 0;
    }
    function Mn(o) {
      if (Be.call(o, "key")) {
        var v = Object.getOwnPropertyDescriptor(o, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return o.key !== void 0;
    }
    function Wn(o, v) {
      if (typeof o.ref == "string" && Ce.current && v && Ce.current.stateNode !== v) {
        var h = V(Ce.current.type);
        Qe[h] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Ce.current.type), o.ref), Qe[h] = !0);
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
      var R = {
        $$typeof: t,
        type: o,
        key: v,
        ref: h,
        props: w,
        _owner: T
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function Yn(o, v, h, x, k) {
      {
        var T, w = {}, R = null, W = null;
        h !== void 0 && (Dt(h), R = "" + h), Mn(v) && (Dt(v.key), R = "" + v.key), Nn(v) && (W = v.ref, Wn(v, k));
        for (T in v)
          Be.call(v, T) && !jn.hasOwnProperty(T) && (w[T] = v[T]);
        if (o && o.defaultProps) {
          var B = o.defaultProps;
          for (T in B)
            w[T] === void 0 && (w[T] = B[T]);
        }
        if (R || W) {
          var j = typeof o == "function" ? o.displayName || o.name || "Unknown" : o;
          R && Ln(w, j), W && zn(w, j);
        }
        return Un(o, R, W, k, x, Ce.current, w);
      }
    }
    var et = b.ReactCurrentOwner, Ft = b.ReactDebugCurrentFrame;
    function fe(o) {
      if (o) {
        var v = o._owner, h = Ae(o.type, o._source, v ? v.type : null);
        Ft.setExtraStackFrame(h);
      } else
        Ft.setExtraStackFrame(null);
    }
    var tt;
    tt = !1;
    function nt(o) {
      return typeof o == "object" && o !== null && o.$$typeof === t;
    }
    function jt() {
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
    var Nt = {};
    function Hn(o) {
      {
        var v = jt();
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
        if (Nt[h])
          return;
        Nt[h] = !0;
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
          var R = "";
          (o === void 0 || typeof o == "object" && o !== null && Object.keys(o).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Vn(k);
          W ? R += W : R += jt();
          var B;
          o === null ? B = "null" : Ze(o) ? B = "array" : o !== void 0 && o.$$typeof === t ? (B = "<" + (V(o.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : B = typeof o, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, R);
        }
        var j = Yn(o, v, h, k, T);
        if (j == null)
          return j;
        if (w) {
          var X = v.children;
          if (X !== void 0)
            if (x)
              if (Ze(X)) {
                for (var pe = 0; pe < X.length; pe++)
                  Wt(X[pe], o);
                Object.freeze && Object.freeze(X);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wt(X, o);
        }
        return o === r ? Kn(j) : Gn(j), j;
      }
    }
    function Xn(o, v, h) {
      return Lt(o, v, h, !0);
    }
    function qn(o, v, h) {
      return Lt(o, v, h, !1);
    }
    var Jn = qn, Zn = Xn;
    ke.Fragment = r, ke.jsx = Jn, ke.jsxs = Zn;
  }()), ke;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = _r() : e.exports = Ir();
})(He);
const pn = He.exports.Fragment, G = He.exports.jsx, $t = He.exports.jsxs, $i = ({
  children: e,
  onClick: t
}) => /* @__PURE__ */ G(Tr, {
  "aria-hidden": "true",
  onClick: t,
  children: e
}), Si = ({
  children: e,
  onClick: t
}) => /* @__PURE__ */ G("div", {
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
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function Dr(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function vn(...e) {
  return (t) => e.forEach(
    (n) => Dr(n, t)
  );
}
function xe(...e) {
  return Te(vn(...e), e);
}
function Ar(e, t = []) {
  let n = [];
  function r(a, s) {
    const c = /* @__PURE__ */ dt(s), l = n.length;
    n = [
      ...n,
      s
    ];
    function u(f) {
      const { scope: d, children: g, ...$ } = f, m = (d == null ? void 0 : d[e][l]) || c, S = Ye(
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
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return u.displayName = a + "Provider", [
      u,
      p
    ];
  }
  const i = () => {
    const a = n.map((s) => /* @__PURE__ */ dt(s));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || a;
      return Ye(
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
  return i.scopeName = e, [
    r,
    Br(i, ...t)
  ];
}
function Br(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (i) => ({
        useScope: i(),
        scopeName: i.scopeName
      })
    );
    return function(a) {
      const s = r.reduce((c, { useScope: l, scopeName: u }) => {
        const f = l(a)[`__scope${u}`];
        return {
          ...c,
          ...f
        };
      }, {});
      return Ye(
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
}, Fr = D["useId".toString()] || (() => {
});
let jr = 0;
function ot(e) {
  const [t, n] = D.useState(Fr());
  return pt(() => {
    e || n(
      (r) => r != null ? r : String(jr++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function se(e) {
  const t = z(e);
  return H(() => {
    t.current = e;
  }), Ye(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function Nr({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, i] = Mr({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, c = se(n), l = Te((u) => {
    if (a) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && c(f);
    } else
      i(u);
  }, [
    a,
    e,
    i,
    c
  ]);
  return [
    s,
    l
  ];
}
function Mr({ defaultProp: e, onChange: t }) {
  const n = $e(e), [r] = n, i = z(r), a = se(t);
  return H(() => {
    i.current !== r && (a(r), i.current = r);
  }, [
    r,
    i,
    a
  ]), n;
}
const St = /* @__PURE__ */ q((e, t) => {
  const { children: n, ...r } = e, i = ye.toArray(n), a = i.find(Lr);
  if (a) {
    const s = a.props.children, c = i.map((l) => l === a ? ye.count(s) > 1 ? ye.only(null) : /* @__PURE__ */ Ve(s) ? s.props.children : null : l);
    return /* @__PURE__ */ F(vt, U({}, r, {
      ref: t
    }), /* @__PURE__ */ Ve(s) ? /* @__PURE__ */ bt(s, void 0, c) : null);
  }
  return /* @__PURE__ */ F(vt, U({}, r, {
    ref: t
  }), n);
});
St.displayName = "Slot";
const vt = /* @__PURE__ */ q((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Ve(n) ? /* @__PURE__ */ bt(n, {
    ...zr(r, n.props),
    ref: vn(t, n.ref)
  }) : ye.count(n) > 1 ? ye.only(null) : null;
});
vt.displayName = "SlotClone";
const Wr = ({ children: e }) => /* @__PURE__ */ F(ln, null, e);
function Lr(e) {
  return /* @__PURE__ */ Ve(e) && e.type === Wr;
}
function zr(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const i = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? n[r] = (...c) => {
      a == null || a(...c), i == null || i(...c);
    } : r === "style" ? n[r] = {
      ...i,
      ...a
    } : r === "className" && (n[r] = [
      i,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const Ur = [
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
], Ge = Ur.reduce((e, t) => {
  const n = /* @__PURE__ */ q((r, i) => {
    const { asChild: a, ...s } = r, c = a ? St : t;
    return H(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ F(c, U({}, s, {
      ref: i
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Yr(e, t) {
  e && un(
    () => e.dispatchEvent(t)
  );
}
function Vr(e) {
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
const mt = "dismissableLayer.update", Hr = "dismissableLayer.pointerDownOutside", Gr = "dismissableLayer.focusOutside";
let Jt;
const Kr = /* @__PURE__ */ dt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Xr = /* @__PURE__ */ q((e, t) => {
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: s, onDismiss: c, ...l } = e, u = sn(Kr), [p, f] = $e(null), [, d] = $e({}), g = xe(
    t,
    (C) => f(C)
  ), $ = Array.from(u.layers), [m] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), S = $.indexOf(m), b = p ? $.indexOf(p) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, A = b >= S, P = qr((C) => {
    const I = C.target, N = [
      ...u.branches
    ].some(
      (M) => M.contains(I)
    );
    !A || N || (i == null || i(C), s == null || s(C), C.defaultPrevented || c == null || c());
  }), _ = Jr((C) => {
    const I = C.target;
    [
      ...u.branches
    ].some(
      (M) => M.contains(I)
    ) || (a == null || a(C), s == null || s(C), C.defaultPrevented || c == null || c());
  });
  return Vr((C) => {
    b === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && c && (C.preventDefault(), c()));
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
    const C = () => d({});
    return document.addEventListener(mt, C), () => document.removeEventListener(mt, C);
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
function qr(e) {
  const t = se(e), n = z(!1), r = z(() => {
  });
  return H(() => {
    const i = (s) => {
      if (s.target && !n.current) {
        let l = function() {
          mn(Hr, t, c, {
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
    }, a = window.setTimeout(() => {
      document.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), document.removeEventListener("pointerdown", i), document.removeEventListener("click", r.current);
    };
  }, [
    t
  ]), {
    onPointerDownCapture: () => n.current = !0
  };
}
function Jr(e) {
  const t = se(e), n = z(!1);
  return H(() => {
    const r = (i) => {
      i.target && !n.current && mn(Gr, t, {
        originalEvent: i
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
  const i = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && i.addEventListener(e, t, {
    once: !0
  }), r ? Yr(i, a) : i.dispatchEvent(a);
}
const it = "focusScope.autoFocusOnMount", at = "focusScope.autoFocusOnUnmount", Qt = {
  bubbles: !1,
  cancelable: !0
}, Zr = /* @__PURE__ */ q((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...s } = e, [c, l] = $e(null), u = se(i), p = se(a), f = z(null), d = xe(
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
        const b = new CustomEvent(it, Qt);
        c.addEventListener(it, u), c.dispatchEvent(b), b.defaultPrevented || (Qr(oo(gn(c)), {
          select: !0
        }), document.activeElement === m && oe(c));
      }
      return () => {
        c.removeEventListener(it, u), setTimeout(() => {
          const b = new CustomEvent(at, Qt);
          c.addEventListener(at, p), c.dispatchEvent(b), b.defaultPrevented || oe(m != null ? m : document.body, {
            select: !0
          }), c.removeEventListener(at, p), tn.remove(g);
        }, 0);
      };
    }
  }, [
    c,
    u,
    p,
    g
  ]);
  const $ = Te((m) => {
    if (!n && !r || g.paused)
      return;
    const S = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, b = document.activeElement;
    if (S && b) {
      const E = m.currentTarget, [A, P] = eo(E);
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
function Qr(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (oe(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function eo(e) {
  const t = gn(e), n = en(t, e), r = en(t.reverse(), e);
  return [
    n,
    r
  ];
}
function gn(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function en(e, t) {
  for (const n of e)
    if (!to(n, {
      upTo: t
    }))
      return n;
}
function to(e, { upTo: t }) {
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
function no(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && no(e) && t && e.select();
  }
}
const tn = ro();
function ro() {
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
function oo(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
function io(e, t) {
  return er((n, r) => {
    const i = t[n][r];
    return i != null ? i : n;
  }, e);
}
const Et = (e) => {
  const { present: t, children: n } = e, r = ao(t), i = typeof n == "function" ? n({
    present: r.isPresent
  }) : ye.only(n), a = xe(r.ref, i.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ bt(i, {
    ref: a
  }) : null;
};
Et.displayName = "Presence";
function ao(e) {
  const [t, n] = $e(), r = z({}), i = z(e), a = z("none"), s = e ? "mounted" : "unmounted", [c, l] = io(s, {
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
    const u = je(r.current);
    a.current = c === "mounted" ? u : "none";
  }, [
    c
  ]), pt(() => {
    const u = r.current, p = i.current;
    if (p !== e) {
      const d = a.current, g = je(u);
      e ? l("MOUNT") : g === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(p && d !== g ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [
    e,
    l
  ]), pt(() => {
    if (t) {
      const u = (f) => {
        const g = je(r.current).includes(f.animationName);
        f.target === t && g && un(
          () => l("ANIMATION_END")
        );
      }, p = (f) => {
        f.target === t && (a.current = je(r.current));
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
    ref: Te((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function je(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let ct = 0;
function co() {
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
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Z.apply(this, arguments);
};
function hn(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function so(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ze = "right-scroll-bar-position", Ue = "width-before-scroll-bar", lo = "with-scroll-bars-hidden", uo = "--removed-body-scroll-bar-size";
function fo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function po(e, t) {
  var n = $e(function() {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && (n.value = r, n.callback(r, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function vo(e, t) {
  return po(t || null, function(n) {
    return e.forEach(function(r) {
      return fo(r, n);
    });
  });
}
function mo(e) {
  return e;
}
function go(e, t) {
  t === void 0 && (t = mo);
  var n = [], r = !1, i = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(c) {
          return c !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(c) {
          return a(c);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var c = n;
        n = [], c.forEach(a), s = n;
      }
      var l = function() {
        var p = s;
        s = [], p.forEach(a);
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
  return i;
}
function ho(e) {
  e === void 0 && (e = {});
  var t = go(null);
  return t.options = Z({ async: !0, ssr: !1 }, e), t;
}
var bn = function(e) {
  var t = e.sideCar, n = hn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return /* @__PURE__ */ G(r, {
    ...Z({}, n)
  });
};
bn.isSideCarExport = !0;
function bo(e, t) {
  return e.useMedium(t), bn;
}
var yn = ho(), st = function() {
}, Ke = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: st,
    onWheelCapture: st,
    onTouchMoveCapture: st
  }), i = r[0], a = r[1], s = e.forwardProps, c = e.children, l = e.className, u = e.removeScrollBar, p = e.enabled, f = e.shards, d = e.sideCar, g = e.noIsolation, $ = e.inert, m = e.allowPinchZoom, S = e.as, b = S === void 0 ? "div" : S, E = hn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), A = d, P = vo([n, t]), _ = Z(Z({}, E), i);
  return /* @__PURE__ */ $t(pn, {
    children: [p && /* @__PURE__ */ G(A, {
      sideCar: yn,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: $,
      setCallbacks: a,
      allowPinchZoom: !!m,
      lockRef: n
    }), s ? D.cloneElement(D.Children.only(c), Z(Z({}, _), {
      ref: P
    })) : /* @__PURE__ */ G(b, {
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
  fullWidth: Ue,
  zeroRight: ze
};
var yo = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $o() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yo();
  return t && e.setAttribute("nonce", t), e;
}
function So(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Eo(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var xo = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = $o()) && (So(t, n), Eo(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Co = function() {
  var e = xo();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $n = function() {
  var e = Co(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, Ro = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, lt = function(e) {
  return parseInt(e || "", 10) || 0;
}, wo = function(e) {
  var t = window.getComputedStyle(document.body);
  process.env.NODE_ENV !== "production" && t.overflowY === "hidden" && console.error("react-remove-scroll-bar: cannot calculate scrollbar size because it is removed (overflow:hidden on body");
  var n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [lt(n), lt(r), lt(i)];
}, ko = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ro;
  var t = wo(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Po = $n(), Oo = function(e, t, n, r) {
  var i = e.left, a = e.top, s = e.right, c = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(lo, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(c, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(ze, ` {
    right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(Ue, ` {
    margin-right: `).concat(c, "px ").concat(r, `;
  }
  
  .`).concat(ze, " .").concat(ze, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ue, " .").concat(Ue, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(uo, ": ").concat(c, `px;
  }
`);
}, To = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r, a = D.useMemo(function() {
    return ko(i);
  }, [i]);
  return /* @__PURE__ */ G(Po, {
    styles: Oo(a, !t, i, n ? "" : "!important")
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
var me = gt ? { passive: !1 } : !1, _o = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowY !== "hidden" && !(t.overflowY === t.overflowX && t.overflowY === "visible");
}, Io = function(e) {
  var t = window.getComputedStyle(e);
  return t.overflowX !== "hidden" && !(t.overflowY === t.overflowX && t.overflowX === "visible");
}, on = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Sn(e, n);
    if (r) {
      var i = En(e, n), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Do = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ao = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Sn = function(e, t) {
  return e === "v" ? _o(t) : Io(t);
}, En = function(e, t) {
  return e === "v" ? Do(t) : Ao(t);
}, Bo = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Fo = function(e, t, n, r, i) {
  var a = Bo(e, window.getComputedStyle(t).direction), s = a * r, c = n.target, l = t.contains(c), u = !1, p = s > 0, f = 0, d = 0;
  do {
    var g = En(e, c), $ = g[0], m = g[1], S = g[2], b = m - S - a * $;
    ($ || b) && Sn(e, c) && (f += b, d += $), c = c.parentNode;
  } while (!l && c !== document.body || l && (t.contains(c) || t === c));
  return (p && (i && f === 0 || !i && s > f) || !p && (i && d === 0 || !i && -s > d)) && (u = !0), u;
}, Me = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, an = function(e) {
  return [e.deltaX, e.deltaY];
}, cn = function(e) {
  return e && "current" in e ? e.current : e;
}, jo = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, No = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mo = 0, ge = [];
function Wo(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), i = D.useState(Mo++)[0], a = D.useState(function() {
    return $n();
  })[0], s = D.useRef(e);
  D.useEffect(function() {
    s.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var m = so([e.lockRef.current], (e.shards || []).map(cn), !0).filter(Boolean);
      return m.forEach(function(S) {
        return S.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), m.forEach(function(S) {
          return S.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var c = D.useCallback(function(m, S) {
    if ("touches" in m && m.touches.length === 2)
      return !s.current.allowPinchZoom;
    var b = Me(m), E = n.current, A = "deltaX" in m ? m.deltaX : E[0] - b[0], P = "deltaY" in m ? m.deltaY : E[1] - b[1], _, C = m.target, I = Math.abs(A) > Math.abs(P) ? "h" : "v";
    if ("touches" in m && I === "h" && C.type === "range")
      return !1;
    var N = on(I, C);
    if (!N)
      return !0;
    if (N ? _ = I : (_ = I === "v" ? "h" : "v", N = on(I, C)), !N)
      return !1;
    if (!r.current && "changedTouches" in m && (A || P) && (r.current = _), !_)
      return !0;
    var M = r.current || _;
    return Fo(M, S, m, M === "h" ? A : P, !0);
  }, []), l = D.useCallback(function(m) {
    var S = m;
    if (!(!ge.length || ge[ge.length - 1] !== a)) {
      var b = "deltaY" in S ? an(S) : Me(S), E = t.current.filter(function(_) {
        return _.name === S.type && _.target === S.target && jo(_.delta, b);
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
    n.current = Me(m), r.current = void 0;
  }, []), f = D.useCallback(function(m) {
    u(m.type, an(m), m.target, c(m, e.lockRef.current));
  }, []), d = D.useCallback(function(m) {
    u(m.type, Me(m), m.target, c(m, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return ge.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: d
    }), document.addEventListener("wheel", l, me), document.addEventListener("touchmove", l, me), document.addEventListener("touchstart", p, me), function() {
      ge = ge.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", l, me), document.removeEventListener("touchmove", l, me), document.removeEventListener("touchstart", p, me);
    };
  }, []);
  var g = e.removeScrollBar, $ = e.inert;
  return /* @__PURE__ */ $t(pn, {
    children: [$ ? /* @__PURE__ */ G(a, {
      styles: No(i)
    }) : null, g ? /* @__PURE__ */ G(To, {
      gapMode: "margin"
    }) : null]
  });
}
const Lo = bo(yn, Wo);
var xn = D.forwardRef(function(e, t) {
  return /* @__PURE__ */ G(Ke, {
    ...Z({}, e, {
      ref: t,
      sideCar: Lo
    })
  });
});
xn.classNames = Ke.classNames;
const zo = xn;
var Uo = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, he = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), Le = {}, ut = 0, Yo = function(e, t, n, r) {
  var i = Array.isArray(e) ? e : [e];
  Le[n] || (Le[n] = /* @__PURE__ */ new WeakMap());
  var a = Le[n], s = [], c = /* @__PURE__ */ new Set(), l = new Set(i), u = function(f) {
    !f || c.has(f) || (c.add(f), u(f.parentNode));
  };
  i.forEach(u);
  var p = function(f) {
    !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
      if (c.has(d))
        p(d);
      else {
        var g = d.getAttribute(r), $ = g !== null && g !== "false", m = (he.get(d) || 0) + 1, S = (a.get(d) || 0) + 1;
        he.set(d, m), a.set(d, S), s.push(d), m === 1 && $ && We.set(d, !0), S === 1 && d.setAttribute(n, "true"), $ || d.setAttribute(r, "true");
      }
    });
  };
  return p(t), c.clear(), ut++, function() {
    s.forEach(function(f) {
      var d = he.get(f) - 1, g = a.get(f) - 1;
      he.set(f, d), a.set(f, g), d || (We.has(f) || f.removeAttribute(r), We.delete(f)), g || f.removeAttribute(n);
    }), ut--, ut || (he = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), Le = {});
  };
}, Vo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), i = t || Uo(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), Yo(r, i, n, "aria-hidden")) : function() {
    return null;
  };
};
const Cn = "Dialog", [Rn, Ei] = Ar(Cn), [Ho, le] = Rn(Cn), Go = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: s = !0 } = e, c = z(null), l = z(null), [u = !1, p] = Nr({
    prop: r,
    defaultProp: i,
    onChange: a
  });
  return /* @__PURE__ */ F(Ho, {
    scope: t,
    triggerRef: c,
    contentRef: l,
    contentId: ot(),
    titleId: ot(),
    descriptionId: ot(),
    open: u,
    onOpenChange: p,
    onOpenToggle: Te(
      () => p(
        (f) => !f
      ),
      [
        p
      ]
    ),
    modal: s
  }, n);
}, Ko = "DialogTrigger", Xo = /* @__PURE__ */ q((e, t) => {
  const { __scopeDialog: n, ...r } = e, i = le(Ko, n), a = xe(t, i.triggerRef);
  return /* @__PURE__ */ F(Ge.button, U({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": i.open,
    "aria-controls": i.contentId,
    "data-state": xt(i.open)
  }, r, {
    ref: a,
    onClick: ce(e.onClick, i.onOpenToggle)
  }));
}), qo = "DialogPortal", [xi, wn] = Rn(qo, {
  forceMount: void 0
}), ht = "DialogOverlay", Jo = /* @__PURE__ */ q((e, t) => {
  const n = wn(ht, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = le(ht, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ F(Et, {
    present: r || a.open
  }, /* @__PURE__ */ F(Zo, U({}, i, {
    ref: t
  }))) : null;
}), Zo = /* @__PURE__ */ q((e, t) => {
  const { __scopeDialog: n, ...r } = e, i = le(ht, n);
  return /* @__PURE__ */ F(zo, {
    as: St,
    allowPinchZoom: !0,
    shards: [
      i.contentRef
    ]
  }, /* @__PURE__ */ F(Ge.div, U({
    "data-state": xt(i.open)
  }, r, {
    ref: t,
    style: {
      pointerEvents: "auto",
      ...r.style
    }
  })));
}), Oe = "DialogContent", Qo = /* @__PURE__ */ q((e, t) => {
  const n = wn(Oe, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = le(Oe, e.__scopeDialog);
  return /* @__PURE__ */ F(Et, {
    present: r || a.open
  }, a.modal ? /* @__PURE__ */ F(ei, U({}, i, {
    ref: t
  })) : /* @__PURE__ */ F(ti, U({}, i, {
    ref: t
  })));
}), ei = /* @__PURE__ */ q((e, t) => {
  const n = le(Oe, e.__scopeDialog), r = z(null), i = xe(t, n.contentRef, r);
  return H(() => {
    const a = r.current;
    if (a)
      return Vo(a);
  }, []), /* @__PURE__ */ F(kn, U({}, e, {
    ref: i,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ce(e.onCloseAutoFocus, (a) => {
      var s;
      a.preventDefault(), (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ce(e.onPointerDownOutside, (a) => {
      const s = a.detail.originalEvent, c = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || c) && a.preventDefault();
    }),
    onFocusOutside: ce(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), ti = /* @__PURE__ */ q((e, t) => {
  const n = le(Oe, e.__scopeDialog), r = z(!1);
  return /* @__PURE__ */ F(kn, U({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, i), !i.defaultPrevented) {
        var s;
        r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), i.preventDefault();
      }
      r.current = !1;
    },
    onInteractOutside: (i) => {
      var a, s;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, i), i.defaultPrevented || (r.current = !0);
      const c = i.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && i.preventDefault();
    }
  }));
}), kn = /* @__PURE__ */ q((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...s } = e, c = le(Oe, n), l = z(null), u = xe(t, l);
  return co(), /* @__PURE__ */ F(ln, null, /* @__PURE__ */ F(Zr, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ F(Xr, U({
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
const ni = Go, ri = Jo, oi = Qo, ii = fn({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
}), ai = fn({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
}), ci = Ee(oi, ""), si = Ee(ri, {
  backgroundColor: "$overlay",
  position: "fixed",
  zIndex: 9999,
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${ii} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  }
}), li = Ee("div", {
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
  padding: "$4",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${ai} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
  },
  "&:focus": { outline: "none" }
}), Ci = ({
  children: e,
  overlay: t = !0,
  ...n
}) => /* @__PURE__ */ $t(ni, {
  ...n,
  children: [t && /* @__PURE__ */ G(si, {}), e]
}), Ri = ({
  children: e,
  ...t
}) => /* @__PURE__ */ G(ci, {
  ...t,
  children: /* @__PURE__ */ G(li, {
    children: e
  })
}), ui = Xo;
ui.displayName = "ModalTrigger";
const di = Ee("div", {
  display: "flex",
  flexDirection: "$$direction",
  flexWrap: "$$wrap",
  justifyContent: "$$justify",
  alignContent: "$$content",
  alignItems: "$$items",
  alignSelf: "$$self",
  gap: "$$gap"
}), wi = ({
  children: e,
  justify: t = "inherit",
  direction: n = "inherit",
  wrap: r = "inherit",
  items: i = "inherit",
  self: a = "inherit",
  content: s = "inherit",
  gap: c = "inherit"
}) => /* @__PURE__ */ G(di, {
  css: {
    $$justify: t,
    $$direction: n,
    $$wrap: r,
    $$items: i,
    $$self: a,
    $$content: s,
    $$gap: c
  },
  children: e
}), fi = (e) => Ee(e, {
  color: "$font",
  fontSize: "$md",
  fontWeight: "$regular",
  variants: {
    type: {
      h1: { fontSize: "$7xl" },
      h2: { fontSize: "$6xl" },
      h3: { fontSize: "$5xl" },
      h4: { fontSize: "$4xl" },
      h5: { fontSize: "$2xl" },
      h6: { fontSize: "$md" },
      p: { fontSize: "$md" },
      span: { fontSize: "$md" },
      small: { fontSize: "$xs" },
      strong: { fontSize: "$md" },
      b: { fontSize: "$md" },
      label: { fontSize: "$md" }
    },
    weight: {
      regular: { fontWeight: "$regular" },
      normal: { fontWeight: "$normal" },
      bold: { fontWeight: "$bold" }
    }
  },
  compoundVariants: [
    {
      css: { color: "$$color", fontWeight: "$$weight" }
    }
  ]
}), ki = ({
  type: e = "p",
  weight: t = "normal",
  color: n = String(Or.colors.font),
  children: r
}) => {
  const i = fi(e);
  return /* @__PURE__ */ G(i, {
    type: e,
    css: {
      $$color: n,
      $$weight: t
    },
    children: r
  });
};
export {
  $i as Button,
  Si as Card,
  wi as Flex,
  Ci as Modal,
  Ri as ModalContent,
  ui as ModalTrigger,
  ki as Text
};
//# sourceMappingURL=lib.es.js.map
