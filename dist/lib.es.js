import H from "react";
var T = "colors", O = "sizes", f = "space", jr = { gap: f, gridGap: f, columnGap: f, gridColumnGap: f, rowGap: f, gridRowGap: f, inset: f, insetBlock: f, insetBlockEnd: f, insetBlockStart: f, insetInline: f, insetInlineEnd: f, insetInlineStart: f, margin: f, marginTop: f, marginRight: f, marginBottom: f, marginLeft: f, marginBlock: f, marginBlockEnd: f, marginBlockStart: f, marginInline: f, marginInlineEnd: f, marginInlineStart: f, padding: f, paddingTop: f, paddingRight: f, paddingBottom: f, paddingLeft: f, paddingBlock: f, paddingBlockEnd: f, paddingBlockStart: f, paddingInline: f, paddingInlineEnd: f, paddingInlineStart: f, top: f, right: f, bottom: f, left: f, scrollMargin: f, scrollMarginTop: f, scrollMarginRight: f, scrollMarginBottom: f, scrollMarginLeft: f, scrollMarginX: f, scrollMarginY: f, scrollMarginBlock: f, scrollMarginBlockEnd: f, scrollMarginBlockStart: f, scrollMarginInline: f, scrollMarginInlineEnd: f, scrollMarginInlineStart: f, scrollPadding: f, scrollPaddingTop: f, scrollPaddingRight: f, scrollPaddingBottom: f, scrollPaddingLeft: f, scrollPaddingX: f, scrollPaddingY: f, scrollPaddingBlock: f, scrollPaddingBlockEnd: f, scrollPaddingBlockStart: f, scrollPaddingInline: f, scrollPaddingInlineEnd: f, scrollPaddingInlineStart: f, fontSize: "fontSizes", background: T, backgroundColor: T, backgroundImage: T, borderImage: T, border: T, borderBlock: T, borderBlockEnd: T, borderBlockStart: T, borderBottom: T, borderBottomColor: T, borderColor: T, borderInline: T, borderInlineEnd: T, borderInlineStart: T, borderLeft: T, borderLeftColor: T, borderRight: T, borderRightColor: T, borderTop: T, borderTopColor: T, caretColor: T, color: T, columnRuleColor: T, fill: T, outline: T, outlineColor: T, stroke: T, textDecorationColor: T, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: O, minBlockSize: O, maxBlockSize: O, inlineSize: O, minInlineSize: O, maxInlineSize: O, width: O, minWidth: O, maxWidth: O, height: O, minHeight: O, maxHeight: O, flexBasis: O, gridTemplateColumns: O, gridTemplateRows: O, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" }, Cr = (r, t) => typeof t == "function" ? { "()": Function.prototype.toString.call(t) } : t, ne = () => {
  const r = /* @__PURE__ */ Object.create(null);
  return (t, o, ...i) => {
    const c = ((l) => JSON.stringify(l, Cr))(t);
    return c in r ? r[c] : r[c] = o(t, ...i);
  };
}, q = Symbol.for("sxs.internal"), _e = (r, t) => Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)), Ge = (r) => {
  for (const t in r)
    return !0;
  return !1;
}, { hasOwnProperty: wr } = Object.prototype, Te = (r) => r.includes("-") ? r : r.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()), Pr = /\s+(?![^()]*\))/, re = (r) => (t) => r(...typeof t == "string" ? String(t).split(Pr) : [t]), He = { appearance: (r) => ({ WebkitAppearance: r, appearance: r }), backfaceVisibility: (r) => ({ WebkitBackfaceVisibility: r, backfaceVisibility: r }), backdropFilter: (r) => ({ WebkitBackdropFilter: r, backdropFilter: r }), backgroundClip: (r) => ({ WebkitBackgroundClip: r, backgroundClip: r }), boxDecorationBreak: (r) => ({ WebkitBoxDecorationBreak: r, boxDecorationBreak: r }), clipPath: (r) => ({ WebkitClipPath: r, clipPath: r }), content: (r) => ({ content: r.includes('"') || r.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(r) ? r : `"${r}"` }), hyphens: (r) => ({ WebkitHyphens: r, hyphens: r }), maskImage: (r) => ({ WebkitMaskImage: r, maskImage: r }), maskSize: (r) => ({ WebkitMaskSize: r, maskSize: r }), tabSize: (r) => ({ MozTabSize: r, tabSize: r }), textSizeAdjust: (r) => ({ WebkitTextSizeAdjust: r, textSizeAdjust: r }), userSelect: (r) => ({ WebkitUserSelect: r, userSelect: r }), marginBlock: re((r, t) => ({ marginBlockStart: r, marginBlockEnd: t || r })), marginInline: re((r, t) => ({ marginInlineStart: r, marginInlineEnd: t || r })), maxSize: re((r, t) => ({ maxBlockSize: r, maxInlineSize: t || r })), minSize: re((r, t) => ({ minBlockSize: r, minInlineSize: t || r })), paddingBlock: re((r, t) => ({ paddingBlockStart: r, paddingBlockEnd: t || r })), paddingInline: re((r, t) => ({ paddingInlineStart: r, paddingInlineEnd: t || r })) }, xe = /([\d.]+)([^]*)/, Br = (r, t) => r.length ? r.reduce((o, i) => (o.push(...t.map((c) => c.includes("&") ? c.replace(/&/g, /[ +>|~]/.test(i) && /&.*&/.test(c) ? `:is(${i})` : i) : i + " " + c)), o), []) : t, Ir = (r, t) => r in Or && typeof t == "string" ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (o, i, c, l) => i + (c === "stretch" ? `-moz-available${l};${Te(r)}:${i}-webkit-fill-available` : `-moz-fit-content${l};${Te(r)}:${i}fit-content`) + l) : String(t), Or = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 }, U = (r) => r ? r + "-" : "", er = (r, t, o) => r.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (i, c, l, p, d) => p == "$" == !!l ? i : (c || p == "--" ? "calc(" : "") + "var(--" + (p === "$" ? U(t) + (d.includes("$") ? "" : U(o)) + d.replace(/\$/g, "-") : d) + ")" + (c || p == "--" ? "*" + (c || "") + (l || "1") + ")" : "")), Wr = /\s*,\s*(?![^()]*\))/, zr = Object.prototype.toString, te = (r, t, o, i, c) => {
  let l, p, d;
  const a = (b, g, m) => {
    let u, h;
    const R = ($) => {
      for (u in $) {
        const E = u.charCodeAt(0) === 64, ie = E && Array.isArray($[u]) ? $[u] : [$[u]];
        for (h of ie) {
          const M = /[A-Z]/.test(y = u) ? y : y.replace(/-[^]/g, (P) => P[1].toUpperCase()), J = typeof h == "object" && h && h.toString === zr && (!i.utils[M] || !g.length);
          if (M in i.utils && !J) {
            const P = i.utils[M];
            if (P !== p) {
              p = P, R(P(h)), p = null;
              continue;
            }
          } else if (M in He) {
            const P = He[M];
            if (P !== d) {
              d = P, R(P(h)), d = null;
              continue;
            }
          }
          if (E && (w = u.slice(1) in i.media ? "@media " + i.media[u.slice(1)] : u, u = w.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (P, B, F, L, W, N) => {
            const V = xe.test(B), z = 0.0625 * (V ? -1 : 1), [A, G] = V ? [L, B] : [B, L];
            return "(" + (F[0] === "=" ? "" : F[0] === ">" === V ? "max-" : "min-") + A + ":" + (F[0] !== "=" && F.length === 1 ? G.replace(xe, (ue, Z, K) => Number(Z) + z * (F === ">" ? 1 : -1) + K) : G) + (W ? ") and (" + (W[0] === ">" ? "min-" : "max-") + A + ":" + (W.length === 1 ? N.replace(xe, (ue, Z, K) => Number(Z) + z * (W === ">" ? -1 : 1) + K) : N) : "") + ")";
          })), J) {
            const P = E ? m.concat(u) : [...m], B = E ? [...g] : Br(g, u.split(Wr));
            l !== void 0 && c(Je(...l)), l = void 0, a(h, B, P);
          } else
            l === void 0 && (l = [[], g, m]), u = E || u.charCodeAt(0) !== 36 ? u : `--${U(i.prefix)}${u.slice(1).replace(/\$/g, "-")}`, h = J ? h : typeof h == "number" ? h && M in Mr ? String(h) + "px" : String(h) : er(Ir(M, h == null ? "" : h), i.prefix, i.themeMap[M]), l[0].push(`${E ? `${u} ` : `${Te(u)}:`}${h}`);
        }
      }
      var w, y;
    };
    R(b), l !== void 0 && c(Je(...l)), l = void 0;
  };
  a(r, t, o);
}, Je = (r, t, o) => `${o.map((i) => `${i}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${r.join(";")}${t.length ? "}" : ""}${Array(o.length ? o.length + 1 : 0).join("}")}`, Mr = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 }, qe = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97)), X = (r) => ((t) => {
  let o, i = "";
  for (o = Math.abs(t); o > 52; o = o / 52 | 0)
    i = qe(o % 52) + i;
  return qe(o % 52) + i;
})(((t, o) => {
  let i = o.length;
  for (; i; )
    t = 33 * t ^ o.charCodeAt(--i);
  return t;
})(5381, JSON.stringify(r)) >>> 0), ce = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"], Ar = (r) => {
  if (r.href && !r.href.startsWith(location.origin))
    return !1;
  try {
    return !!r.cssRules;
  } catch {
    return !1;
  }
}, Dr = (r) => {
  let t;
  const o = () => {
    const { cssRules: c } = t.sheet;
    return [].map.call(c, (l, p) => {
      const { cssText: d } = l;
      let a = "";
      if (d.startsWith("--sxs"))
        return "";
      if (c[p - 1] && (a = c[p - 1].cssText).startsWith("--sxs")) {
        if (!l.cssRules.length)
          return "";
        for (const b in t.rules)
          if (t.rules[b].group === l)
            return `--sxs{--sxs:${[...t.rules[b].cache].join(" ")}}${d}`;
        return l.cssRules.length ? `${a}${d}` : "";
      }
      return d;
    }).join("");
  }, i = () => {
    if (t) {
      const { rules: d, sheet: a } = t;
      if (!a.deleteRule) {
        for (; Object(Object(a.cssRules)[0]).type === 3; )
          a.cssRules.splice(0, 1);
        a.cssRules = [];
      }
      for (const b in d)
        delete d[b];
    }
    const c = Object(r).styleSheets || [];
    for (const d of c)
      if (Ar(d)) {
        for (let a = 0, b = d.cssRules; b[a]; ++a) {
          const g = Object(b[a]);
          if (g.type !== 1)
            continue;
          const m = Object(b[a + 1]);
          if (m.type !== 4)
            continue;
          ++a;
          const { cssText: u } = g;
          if (!u.startsWith("--sxs"))
            continue;
          const h = u.slice(14, -3).trim().split(/\s+/), R = ce[h[0]];
          R && (t || (t = { sheet: d, reset: i, rules: {}, toString: o }), t.rules[R] = { group: m, index: a, cache: new Set(h) });
        }
        if (t)
          break;
      }
    if (!t) {
      const d = (a, b) => ({ type: b, cssRules: [], insertRule(g, m) {
        this.cssRules.splice(m, 0, d(g, { import: 3, undefined: 1 }[(g.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return a === "@media{}" ? `@media{${[].map.call(this.cssRules, (g) => g.cssText).join("")}}` : a;
      } });
      t = { sheet: r ? (r.head || r).appendChild(document.createElement("style")).sheet : d("", "text/css"), rules: {}, reset: i, toString: o };
    }
    const { sheet: l, rules: p } = t;
    for (let d = ce.length - 1; d >= 0; --d) {
      const a = ce[d];
      if (!p[a]) {
        const b = ce[d + 1], g = p[b] ? p[b].index : l.cssRules.length;
        l.insertRule("@media{}", g), l.insertRule(`--sxs{--sxs:${d}}`, g), p[a] = { group: l.cssRules[g + 1], index: g, cache: /* @__PURE__ */ new Set([d]) };
      }
      Fr(p[a]);
    }
  };
  return i(), t;
}, Fr = (r) => {
  const t = r.group;
  let o = t.cssRules.length;
  r.apply = (i) => {
    try {
      t.insertRule(i, o), ++o;
    } catch {
    }
  };
}, ae = Symbol(), Lr = ne(), Xe = (r, t) => Lr(r, () => (...o) => {
  let i = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const c of o)
    if (c != null)
      if (c[q]) {
        i.type == null && (i.type = c[q].type);
        for (const l of c[q].composers)
          i.composers.add(l);
      } else
        c.constructor !== Object || c.$$typeof ? i.type == null && (i.type = c) : i.composers.add(Nr(c, r));
  return i.type == null && (i.type = "span"), i.composers.size || i.composers.add(["PJLV", {}, [], [], {}, []]), Vr(r, i, t);
}), Nr = ({ variants: r, compoundVariants: t, defaultVariants: o, ...i }, c) => {
  const l = `${U(c.prefix)}c-${X(i)}`, p = [], d = [], a = /* @__PURE__ */ Object.create(null), b = [];
  for (const u in o)
    a[u] = String(o[u]);
  if (typeof r == "object" && r)
    for (const u in r) {
      g = a, m = u, wr.call(g, m) || (a[u] = "undefined");
      const h = r[u];
      for (const R in h) {
        const $ = { [u]: String(R) };
        String(R) === "undefined" && b.push(u);
        const w = h[R], y = [$, w, !Ge(w)];
        p.push(y);
      }
    }
  var g, m;
  if (typeof t == "object" && t)
    for (const u of t) {
      let { css: h, ...R } = u;
      h = typeof h == "object" && h || {};
      for (const w in R)
        R[w] = String(R[w]);
      const $ = [R, h, !Ge(h)];
      d.push($);
    }
  return [l, i, p, d, a, b];
}, Vr = (r, t, o) => {
  const [i, c, l, p] = Yr(t.composers), d = typeof t.type == "function" || t.type.$$typeof ? ((m) => {
    function u() {
      for (let h = 0; h < u[ae].length; h++) {
        const [R, $] = u[ae][h];
        m.rules[R].apply($);
      }
      return u[ae] = [], null;
    }
    return u[ae] = [], u.rules = {}, ce.forEach((h) => u.rules[h] = { apply: (R) => u[ae].push([h, R]) }), u;
  })(o) : null, a = (d || o).rules, b = `.${i}${c.length > 1 ? `:where(.${c.slice(1).join(".")})` : ""}`, g = (m) => {
    m = typeof m == "object" && m || Ur;
    const { css: u, ...h } = m, R = {};
    for (const y in l)
      if (delete h[y], y in m) {
        let E = m[y];
        typeof E == "object" && E ? R[y] = { "@initial": l[y], ...E } : (E = String(E), R[y] = E !== "undefined" || p.has(y) ? E : l[y]);
      } else
        R[y] = l[y];
    const $ = /* @__PURE__ */ new Set([...c]);
    for (const [y, E, ie, M] of t.composers) {
      o.rules.styled.cache.has(y) || (o.rules.styled.cache.add(y), te(E, [`.${y}`], [], r, (B) => {
        a.styled.apply(B);
      }));
      const J = Ze(ie, R, r.media), P = Ze(M, R, r.media, !0);
      for (const B of J)
        if (B !== void 0)
          for (const [F, L, W] of B) {
            const N = `${y}-${X(L)}-${F}`;
            $.add(N);
            const V = (W ? o.rules.resonevar : o.rules.onevar).cache, z = W ? a.resonevar : a.onevar;
            V.has(N) || (V.add(N), te(L, [`.${N}`], [], r, (A) => {
              z.apply(A);
            }));
          }
      for (const B of P)
        if (B !== void 0)
          for (const [F, L] of B) {
            const W = `${y}-${X(L)}-${F}`;
            $.add(W), o.rules.allvar.cache.has(W) || (o.rules.allvar.cache.add(W), te(L, [`.${W}`], [], r, (N) => {
              a.allvar.apply(N);
            }));
          }
    }
    if (typeof u == "object" && u) {
      const y = `${i}-i${X(u)}-css`;
      $.add(y), o.rules.inline.cache.has(y) || (o.rules.inline.cache.add(y), te(u, [`.${y}`], [], r, (E) => {
        a.inline.apply(E);
      }));
    }
    for (const y of String(m.className || "").trim().split(/\s+/))
      y && $.add(y);
    const w = h.className = [...$].join(" ");
    return { type: t.type, className: w, selector: b, props: h, toString: () => w, deferredInjector: d };
  };
  return _e(g, { className: i, selector: b, [q]: t, toString: () => (o.rules.styled.cache.has(i) || g(), i) });
}, Yr = (r) => {
  let t = "";
  const o = [], i = {}, c = [];
  for (const [l, , , , p, d] of r) {
    t === "" && (t = l), o.push(l), c.push(...d);
    for (const a in p) {
      const b = p[a];
      (i[a] === void 0 || b !== "undefined" || d.includes(b)) && (i[a] = b);
    }
  }
  return [t, o, i, new Set(c)];
}, Ze = (r, t, o, i) => {
  const c = [];
  e:
    for (let [l, p, d] of r) {
      if (d)
        continue;
      let a, b = 0, g = !1;
      for (a in l) {
        const m = l[a];
        let u = t[a];
        if (u !== m) {
          if (typeof u != "object" || !u)
            continue e;
          {
            let h, R, $ = 0;
            for (const w in u) {
              if (m === String(u[w])) {
                if (w !== "@initial") {
                  const y = w.slice(1);
                  (R = R || []).push(y in o ? o[y] : w.replace(/^@media ?/, "")), g = !0;
                }
                b += $, h = !0;
              }
              ++$;
            }
            if (R && R.length && (p = { ["@media " + R.join(", ")]: p }), !h)
              continue e;
          }
        }
      }
      (c[b] = c[b] || []).push([i ? "cv" : `${a}-${l[a]}`, p, g]);
    }
  return c;
}, Ur = {}, Gr = ne(), Hr = (r, t) => Gr(r, () => (...o) => {
  const i = () => {
    for (let c of o) {
      c = typeof c == "object" && c || {};
      let l = X(c);
      if (!t.rules.global.cache.has(l)) {
        if (t.rules.global.cache.add(l), "@import" in c) {
          let p = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
          for (let d of [].concat(c["@import"]))
            d = d.includes('"') || d.includes("'") ? d : `"${d}"`, t.sheet.insertRule(`@import ${d};`, p++);
          delete c["@import"];
        }
        te(c, [], [], r, (p) => {
          t.rules.global.apply(p);
        });
      }
    }
    return "";
  };
  return _e(i, { toString: i });
}), Jr = ne(), qr = (r, t) => Jr(r, () => (o) => {
  const i = `${U(r.prefix)}k-${X(o)}`, c = () => {
    if (!t.rules.global.cache.has(i)) {
      t.rules.global.cache.add(i);
      const l = [];
      te(o, [], [], r, (d) => l.push(d));
      const p = `@keyframes ${i}{${l.join("")}}`;
      t.rules.global.apply(p);
    }
    return i;
  };
  return _e(c, { get name() {
    return c();
  }, toString: c });
}), Xr = class {
  constructor(r, t, o, i) {
    this.token = r == null ? "" : String(r), this.value = t == null ? "" : String(t), this.scale = o == null ? "" : String(o), this.prefix = i == null ? "" : String(i);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + U(this.prefix) + U(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
}, Zr = ne(), Kr = (r, t) => Zr(r, () => (o, i) => {
  i = typeof o == "object" && o || Object(i);
  const c = `.${o = (o = typeof o == "string" ? o : "") || `${U(r.prefix)}t-${X(i)}`}`, l = {}, p = [];
  for (const a in i) {
    l[a] = {};
    for (const b in i[a]) {
      const g = `--${U(r.prefix)}${a}-${b}`, m = er(String(i[a][b]), r.prefix, a);
      l[a][b] = new Xr(b, m, a, r.prefix), p.push(`${g}:${m}`);
    }
  }
  const d = () => {
    if (p.length && !t.rules.themed.cache.has(o)) {
      t.rules.themed.cache.add(o);
      const a = `${i === r.theme ? ":root," : ""}.${o}{${p.join(";")}}`;
      t.rules.themed.apply(a);
    }
    return o;
  };
  return { ...l, get className() {
    return d();
  }, selector: c, toString: d };
}), Qr = ne(), et = ne(), rt = (r) => {
  const t = ((o) => {
    let i = !1;
    const c = Qr(o, (l) => {
      i = !0;
      const p = "prefix" in (l = typeof l == "object" && l || {}) ? String(l.prefix) : "", d = typeof l.media == "object" && l.media || {}, a = typeof l.root == "object" ? l.root || null : globalThis.document || null, b = typeof l.theme == "object" && l.theme || {}, g = { prefix: p, media: d, theme: b, themeMap: typeof l.themeMap == "object" && l.themeMap || { ...jr }, utils: typeof l.utils == "object" && l.utils || {} }, m = Dr(a), u = { css: Xe(g, m), globalCss: Hr(g, m), keyframes: qr(g, m), createTheme: Kr(g, m), reset() {
        m.reset(), u.theme.toString();
      }, theme: {}, sheet: m, config: g, prefix: p, getCssText: m.toString, toString: m.toString };
      return String(u.theme = u.createTheme(b)), u;
    });
    return i || c.reset(), c;
  })(r);
  return t.styled = (({ config: o, sheet: i }) => et(o, () => {
    const c = Xe(o, i);
    return (...l) => {
      const p = c(...l), d = p[q].type, a = H.forwardRef((b, g) => {
        const m = b && b.as || d, { props: u, deferredInjector: h } = p(b);
        return delete u.as, u.ref = g, h ? H.createElement(H.Fragment, null, H.createElement(m, u), H.createElement(h, null)) : H.createElement(m, u);
      });
      return a.className = p.className, a.displayName = `Styled.${d.displayName || d.name || d}`, a.selector = p.selector, a.toString = () => p.selector, a[q] = p[q], a;
    };
  }))(t), t;
};
const {
  styled: tt,
  css: lt,
  globalCss: st,
  keyframes: ct,
  getCssText: ut,
  theme: dt,
  createTheme: ft,
  config: pt
} = rt({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray"
    }
  }
}), nt = tt("button", {
  backgroundColor: "$gray400",
  borderRadius: "9999px",
  fontSize: "13px",
  padding: "10px 15px",
  "&:hover": {
    backgroundColor: "lightgray"
  }
});
var rr = { exports: {} }, le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function it() {
  if (Ke)
    return le;
  Ke = 1;
  var r = H, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(d, a, b) {
    var g, m = {}, u = null, h = null;
    b !== void 0 && (u = "" + b), a.key !== void 0 && (u = "" + a.key), a.ref !== void 0 && (h = a.ref);
    for (g in a)
      i.call(a, g) && !l.hasOwnProperty(g) && (m[g] = a[g]);
    if (d && d.defaultProps)
      for (g in a = d.defaultProps, a)
        m[g] === void 0 && (m[g] = a[g]);
    return { $$typeof: t, type: d, key: u, ref: h, props: m, _owner: c.current };
  }
  return le.Fragment = o, le.jsx = p, le.jsxs = p, le;
}
var se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function ot() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = H, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), d = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), R = Symbol.iterator, $ = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = R && e[R] || e[$];
      return typeof n == "function" ? n : null;
    }
    var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), v = 1; v < n; v++)
          s[v - 1] = arguments[v];
        ie("error", e, s);
      }
    }
    function ie(e, n, s) {
      {
        var v = y.ReactDebugCurrentFrame, x = v.getStackAddendum();
        x !== "" && (n += "%s", s = s.concat([x]));
        var _ = s.map(function(k) {
          return String(k);
        });
        _.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var M = !1, J = !1, P = !1, B = !1, F = !1, L;
    L = Symbol.for("react.module.reference");
    function W(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === l || F || e === c || e === b || e === g || B || e === h || M || J || P || typeof e == "object" && e !== null && (e.$$typeof === u || e.$$typeof === m || e.$$typeof === p || e.$$typeof === d || e.$$typeof === a || e.$$typeof === L || e.getModuleId !== void 0));
    }
    function N(e, n, s) {
      var v = e.displayName;
      if (v)
        return v;
      var x = n.displayName || n.name || "";
      return x !== "" ? s + "(" + x + ")" : s;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case b:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var n = e;
            return V(n) + ".Consumer";
          case p:
            var s = e;
            return V(s._context) + ".Provider";
          case a:
            return N(e, e.render, "ForwardRef");
          case m:
            var v = e.displayName || null;
            return v !== null ? v : z(e.type) || "Memo";
          case u: {
            var x = e, _ = x._payload, k = x._init;
            try {
              return z(k(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, G = 0, ue, Z, K, $e, je, Ce, we;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function nr() {
      {
        if (G === 0) {
          ue = console.log, Z = console.info, K = console.warn, $e = console.error, je = console.group, Ce = console.groupCollapsed, we = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        G++;
      }
    }
    function ir() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ue
            }),
            info: A({}, e, {
              value: Z
            }),
            warn: A({}, e, {
              value: K
            }),
            error: A({}, e, {
              value: $e
            }),
            group: A({}, e, {
              value: je
            }),
            groupCollapsed: A({}, e, {
              value: Ce
            }),
            groupEnd: A({}, e, {
              value: we
            })
          });
        }
        G < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = y.ReactCurrentDispatcher, be;
    function de(e, n, s) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (x) {
            var v = x.stack.trim().match(/\n( *(at )?)/);
            be = v && v[1] || "";
          }
        return `
` + be + e;
      }
    }
    var ve = !1, fe;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new or();
    }
    function Be(e, n) {
      if (!e || ve)
        return "";
      {
        var s = fe.get(e);
        if (s !== void 0)
          return s;
      }
      var v;
      ve = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = me.current, me.current = null, nr();
      try {
        if (n) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (Y) {
              v = Y;
            }
            Reflect.construct(e, [], k);
          } else {
            try {
              k.call();
            } catch (Y) {
              v = Y;
            }
            e.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            v = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && v && typeof Y.stack == "string") {
          for (var S = Y.stack.split(`
`), I = v.stack.split(`
`), j = S.length - 1, C = I.length - 1; j >= 1 && C >= 0 && S[j] !== I[C]; )
            C--;
          for (; j >= 1 && C >= 0; j--, C--)
            if (S[j] !== I[C]) {
              if (j !== 1 || C !== 1)
                do
                  if (j--, C--, C < 0 || S[j] !== I[C]) {
                    var D = `
` + S[j].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && fe.set(e, D), D;
                  }
                while (j >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        ve = !1, me.current = _, ir(), Error.prepareStackTrace = x;
      }
      var ee = e ? e.displayName || e.name : "", Ue = ee ? de(ee) : "";
      return typeof e == "function" && fe.set(e, Ue), Ue;
    }
    function ar(e, n, s) {
      return Be(e, !1);
    }
    function lr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function pe(e, n, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Be(e, lr(e));
      if (typeof e == "string")
        return de(e);
      switch (e) {
        case b:
          return de("Suspense");
        case g:
          return de("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return ar(e.render);
          case m:
            return pe(e.type, n, s);
          case u: {
            var v = e, x = v._payload, _ = v._init;
            try {
              return pe(_(x), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ie = {}, Oe = y.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var n = e._owner, s = pe(e.type, e._source, n ? n.type : null);
        Oe.setExtraStackFrame(s);
      } else
        Oe.setExtraStackFrame(null);
    }
    function sr(e, n, s, v, x) {
      {
        var _ = Function.call.bind(ge);
        for (var k in e)
          if (_(e, k)) {
            var S = void 0;
            try {
              if (typeof e[k] != "function") {
                var I = Error((v || "React class") + ": " + s + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              S = e[k](n, k, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              S = j;
            }
            S && !(S instanceof Error) && (he(x), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, k, typeof S), he(null)), S instanceof Error && !(S.message in Ie) && (Ie[S.message] = !0, he(x), E("Failed %s type: %s", s, S.message), he(null));
          }
      }
    }
    var cr = Array.isArray;
    function ye(e) {
      return cr(e);
    }
    function ur(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function dr(e) {
      try {
        return We(e), !1;
      } catch {
        return !0;
      }
    }
    function We(e) {
      return "" + e;
    }
    function ze(e) {
      if (dr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(e)), We(e);
    }
    var oe = y.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, Ae, Se;
    Se = {};
    function pr(e) {
      if (ge.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gr(e) {
      if (ge.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function hr(e, n) {
      if (typeof e.ref == "string" && oe.current && n && oe.current.stateNode !== n) {
        var s = z(oe.current.type);
        Se[s] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(oe.current.type), e.ref), Se[s] = !0);
      }
    }
    function mr(e, n) {
      {
        var s = function() {
          Me || (Me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function br(e, n) {
      {
        var s = function() {
          Ae || (Ae = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var vr = function(e, n, s, v, x, _, k) {
      var S = {
        $$typeof: t,
        type: e,
        key: n,
        ref: s,
        props: k,
        _owner: _
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function yr(e, n, s, v, x) {
      {
        var _, k = {}, S = null, I = null;
        s !== void 0 && (ze(s), S = "" + s), gr(n) && (ze(n.key), S = "" + n.key), pr(n) && (I = n.ref, hr(n, x));
        for (_ in n)
          ge.call(n, _) && !fr.hasOwnProperty(_) && (k[_] = n[_]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (_ in j)
            k[_] === void 0 && (k[_] = j[_]);
        }
        if (S || I) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && mr(k, C), I && br(k, C);
        }
        return vr(e, S, I, x, v, oe.current, k);
      }
    }
    var Re = y.ReactCurrentOwner, De = y.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var n = e._owner, s = pe(e.type, e._source, n ? n.type : null);
        De.setExtraStackFrame(s);
      } else
        De.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function ke(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Fe() {
      {
        if (Re.current) {
          var e = z(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Sr(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), s = e.lineNumber;
          return `

Check your code at ` + n + ":" + s + ".";
        }
        return "";
      }
    }
    var Le = {};
    function Rr(e) {
      {
        var n = Fe();
        if (!n) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (n = `

Check the top-level render call using <` + s + ">.");
        }
        return n;
      }
    }
    function Ne(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Rr(n);
        if (Le[s])
          return;
        Le[s] = !0;
        var v = "";
        e && e._owner && e._owner !== Re.current && (v = " It was passed a child from " + z(e._owner.type) + "."), Q(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), Q(null);
      }
    }
    function Ve(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var s = 0; s < e.length; s++) {
            var v = e[s];
            ke(v) && Ne(v, n);
          }
        else if (ke(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = w(e);
          if (typeof x == "function" && x !== e.entries)
            for (var _ = x.call(e), k; !(k = _.next()).done; )
              ke(k.value) && Ne(k.value, n);
        }
      }
    }
    function Er(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var s;
        if (typeof n == "function")
          s = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === a || n.$$typeof === m))
          s = n.propTypes;
        else
          return;
        if (s) {
          var v = z(n);
          sr(s, e.props, "prop", v, e);
        } else if (n.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var x = z(n);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(e) {
      {
        for (var n = Object.keys(e.props), s = 0; s < n.length; s++) {
          var v = n[s];
          if (v !== "children" && v !== "key") {
            Q(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), Q(null);
            break;
          }
        }
        e.ref !== null && (Q(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    function Ye(e, n, s, v, x, _) {
      {
        var k = W(e);
        if (!k) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = Sr(x);
          I ? S += I : S += Fe();
          var j;
          e === null ? j = "null" : ye(e) ? j = "array" : e !== void 0 && e.$$typeof === t ? (j = "<" + (z(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, S);
        }
        var C = yr(e, n, s, x, _);
        if (C == null)
          return C;
        if (k) {
          var D = n.children;
          if (D !== void 0)
            if (v)
              if (ye(D)) {
                for (var ee = 0; ee < D.length; ee++)
                  Ve(D[ee], e);
                Object.freeze && Object.freeze(D);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(D, e);
        }
        return e === i ? kr(C) : Er(C), C;
      }
    }
    function xr(e, n, s) {
      return Ye(e, n, s, !0);
    }
    function Tr(e, n, s) {
      return Ye(e, n, s, !1);
    }
    var _r = Tr, $r = xr;
    se.Fragment = i, se.jsx = _r, se.jsxs = $r;
  }()), se;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = it() : r.exports = ot();
})(rr);
const tr = rr.exports.jsx, gt = ({
  children: r,
  onClick: t
}) => /* @__PURE__ */ tr(nt, {
  "aria-hidden": "true",
  onClick: t,
  children: r
}), ht = ({
  children: r,
  onClick: t
}) => /* @__PURE__ */ tr("div", {
  "aria-hidden": "true",
  onClick: t,
  children: r
});
export {
  gt as Button,
  ht as Card
};
//# sourceMappingURL=lib.es.js.map
