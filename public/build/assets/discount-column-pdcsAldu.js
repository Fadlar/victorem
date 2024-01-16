import { j as s, d as $ } from "./app-2UknqXgy.js";
import { H as P, P as U, D as z } from "./delete-popover-FTqRtOPN.js";
import { B as K, S as N, E as Z, H as ee, C as te } from "./index-CkMAcVi9.js";
import { c as ne, t as O } from "./lang-ZDB8uS83.js";
import { r as ae } from "./routes-0mvJeivy.js";
import { A as re } from "./utils-FzIoAioV.js";
import { N as j } from "./react-number-format.es-jsVA24o-.js";
import { t as f, c as x } from "./constructFrom-jslXdUnP.js";
import "./createSuper-uvzpyxvK.js";
import "./defineProperty-VwQjyvUu.js";
import "./objectWithoutPropertiesLoose-qiKziPFZ.js";
import "./index.esm-uZtfluGa.js";
import "./transition-ocz20r5l.js";
import "./dialog-ZsqB_iXW.js";
import "./constants-lPtH_bX3.js";
const B = 6048e5,
    ie = 864e5;
let se = {};
function T() {
    return se;
}
function W(e, n) {
    var u, d, m, l;
    const t = T(),
        a =
            (n == null ? void 0 : n.weekStartsOn) ??
            ((d =
                (u = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : u.options) == null
                ? void 0
                : d.weekStartsOn) ??
            t.weekStartsOn ??
            ((l = (m = t.locale) == null ? void 0 : m.options) == null
                ? void 0
                : l.weekStartsOn) ??
            0,
        r = f(e),
        i = r.getDay(),
        c = (i < a ? 7 : 0) + i - a;
    return r.setDate(r.getDate() - c), r.setHours(0, 0, 0, 0), r;
}
function Y(e) {
    return W(e, { weekStartsOn: 1 });
}
function G(e) {
    const n = f(e),
        t = n.getFullYear(),
        a = x(e, 0);
    a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
    const r = Y(a),
        i = x(e, 0);
    i.setFullYear(t, 0, 4), i.setHours(0, 0, 0, 0);
    const c = Y(i);
    return n.getTime() >= r.getTime()
        ? t + 1
        : n.getTime() >= c.getTime()
        ? t
        : t - 1;
}
function C(e) {
    const n = f(e);
    return n.setHours(0, 0, 0, 0), n;
}
function Q(e) {
    const n = new Date(
        Date.UTC(
            e.getFullYear(),
            e.getMonth(),
            e.getDate(),
            e.getHours(),
            e.getMinutes(),
            e.getSeconds(),
            e.getMilliseconds(),
        ),
    );
    return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function oe(e, n) {
    const t = C(e),
        a = C(n),
        r = t.getTime() - Q(t),
        i = a.getTime() - Q(a);
    return Math.round((r - i) / ie);
}
function ce(e) {
    const n = G(e),
        t = x(e, 0);
    return t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0), Y(t);
}
function ue(e) {
    return (
        e instanceof Date ||
        (typeof e == "object" &&
            Object.prototype.toString.call(e) === "[object Date]")
    );
}
function de(e) {
    if (!ue(e) && typeof e != "number") return !1;
    const n = f(e);
    return !isNaN(Number(n));
}
function me(e) {
    const n = f(e),
        t = x(e, 0);
    return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
const le = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds",
        },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes",
        },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    },
    he = (e, n, t) => {
        let a;
        const r = le[e];
        return (
            typeof r == "string"
                ? (a = r)
                : n === 1
                ? (a = r.one)
                : (a = r.other.replace("{{count}}", n.toString())),
            t != null && t.addSuffix
                ? t.comparison && t.comparison > 0
                    ? "in " + a
                    : a + " ago"
                : a
        );
    };
function E(e) {
    return (n = {}) => {
        const t = n.width ? String(n.width) : e.defaultWidth;
        return e.formats[t] || e.formats[e.defaultWidth];
    };
}
const fe = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy",
    },
    ge = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a",
    },
    we = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
    },
    ye = {
        date: E({ formats: fe, defaultWidth: "full" }),
        time: E({ formats: ge, defaultWidth: "full" }),
        dateTime: E({ formats: we, defaultWidth: "full" }),
    },
    be = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
    },
    xe = (e, n, t, a) => be[e];
function p(e) {
    return (n, t) => {
        const a = t != null && t.context ? String(t.context) : "standalone";
        let r;
        if (a === "formatting" && e.formattingValues) {
            const c = e.defaultFormattingWidth || e.defaultWidth,
                u = t != null && t.width ? String(t.width) : c;
            r = e.formattingValues[u] || e.formattingValues[c];
        } else {
            const c = e.defaultWidth,
                u = t != null && t.width ? String(t.width) : e.defaultWidth;
            r = e.values[u] || e.values[c];
        }
        const i = e.argumentCallback ? e.argumentCallback(n) : n;
        return r[i];
    };
}
const De = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
    },
    ke = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    Me = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    Pe = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    Oe = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
        },
    },
    pe = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
        },
    },
    ve = (e, n) => {
        const t = Number(e),
            a = t % 100;
        if (a > 20 || a < 10)
            switch (a % 10) {
                case 1:
                    return t + "st";
                case 2:
                    return t + "nd";
                case 3:
                    return t + "rd";
            }
        return t + "th";
    },
    We = {
        ordinalNumber: ve,
        era: p({ values: De, defaultWidth: "wide" }),
        quarter: p({
            values: ke,
            defaultWidth: "wide",
            argumentCallback: (e) => e - 1,
        }),
        month: p({ values: Me, defaultWidth: "wide" }),
        day: p({ values: Pe, defaultWidth: "wide" }),
        dayPeriod: p({
            values: Oe,
            defaultWidth: "wide",
            formattingValues: pe,
            defaultFormattingWidth: "wide",
        }),
    };
function v(e) {
    return (n, t = {}) => {
        const a = t.width,
            r =
                (a && e.matchPatterns[a]) ||
                e.matchPatterns[e.defaultMatchWidth],
            i = n.match(r);
        if (!i) return null;
        const c = i[0],
            u =
                (a && e.parsePatterns[a]) ||
                e.parsePatterns[e.defaultParseWidth],
            d = Array.isArray(u)
                ? Ye(u, (g) => g.test(c))
                : Se(u, (g) => g.test(c));
        let m;
        (m = e.valueCallback ? e.valueCallback(d) : d),
            (m = t.valueCallback ? t.valueCallback(m) : m);
        const l = n.slice(c.length);
        return { value: m, rest: l };
    };
}
function Se(e, n) {
    for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t])) return t;
}
function Ye(e, n) {
    for (let t = 0; t < e.length; t++) if (n(e[t])) return t;
}
function Te(e) {
    return (n, t = {}) => {
        const a = n.match(e.matchPattern);
        if (!a) return null;
        const r = a[0],
            i = n.match(e.parsePattern);
        if (!i) return null;
        let c = e.valueCallback ? e.valueCallback(i[0]) : i[0];
        c = t.valueCallback ? t.valueCallback(c) : c;
        const u = n.slice(r.length);
        return { value: c, rest: u };
    };
}
const je = /^(\d+)(th|st|nd|rd)?/i,
    Ee = /\d+/i,
    Ne = {
        narrow: /^(b|a)/i,
        abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    Fe = { any: [/^b/i, /^(a|c)/i] },
    qe = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i,
    },
    _e = { any: [/1/i, /2/i, /3/i, /4/i] },
    He = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    Ce = {
        narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
        ],
        any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
        ],
    },
    Qe = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    Re = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    Xe = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    Ae = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
        },
    },
    Ie = {
        ordinalNumber: Te({
            matchPattern: je,
            parsePattern: Ee,
            valueCallback: (e) => parseInt(e, 10),
        }),
        era: v({
            matchPatterns: Ne,
            defaultMatchWidth: "wide",
            parsePatterns: Fe,
            defaultParseWidth: "any",
        }),
        quarter: v({
            matchPatterns: qe,
            defaultMatchWidth: "wide",
            parsePatterns: _e,
            defaultParseWidth: "any",
            valueCallback: (e) => e + 1,
        }),
        month: v({
            matchPatterns: He,
            defaultMatchWidth: "wide",
            parsePatterns: Ce,
            defaultParseWidth: "any",
        }),
        day: v({
            matchPatterns: Qe,
            defaultMatchWidth: "wide",
            parsePatterns: Re,
            defaultParseWidth: "any",
        }),
        dayPeriod: v({
            matchPatterns: Xe,
            defaultMatchWidth: "any",
            parsePatterns: Ae,
            defaultParseWidth: "any",
        }),
    },
    Le = {
        code: "en-US",
        formatDistance: he,
        formatLong: ye,
        formatRelative: xe,
        localize: We,
        match: Ie,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
function Be(e) {
    const n = f(e);
    return oe(n, me(n)) + 1;
}
function Ge(e) {
    const n = f(e),
        t = Y(n).getTime() - ce(n).getTime();
    return Math.round(t / B) + 1;
}
function V(e, n) {
    var l, g, k, M;
    const t = f(e),
        a = t.getFullYear(),
        r = T(),
        i =
            (n == null ? void 0 : n.firstWeekContainsDate) ??
            ((g =
                (l = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : l.options) == null
                ? void 0
                : g.firstWeekContainsDate) ??
            r.firstWeekContainsDate ??
            ((M = (k = r.locale) == null ? void 0 : k.options) == null
                ? void 0
                : M.firstWeekContainsDate) ??
            1,
        c = x(e, 0);
    c.setFullYear(a + 1, 0, i), c.setHours(0, 0, 0, 0);
    const u = W(c, n),
        d = x(e, 0);
    d.setFullYear(a, 0, i), d.setHours(0, 0, 0, 0);
    const m = W(d, n);
    return t.getTime() >= u.getTime()
        ? a + 1
        : t.getTime() >= m.getTime()
        ? a
        : a - 1;
}
function Ve(e, n) {
    var u, d, m, l;
    const t = T(),
        a =
            (n == null ? void 0 : n.firstWeekContainsDate) ??
            ((d =
                (u = n == null ? void 0 : n.locale) == null
                    ? void 0
                    : u.options) == null
                ? void 0
                : d.firstWeekContainsDate) ??
            t.firstWeekContainsDate ??
            ((l = (m = t.locale) == null ? void 0 : m.options) == null
                ? void 0
                : l.firstWeekContainsDate) ??
            1,
        r = V(e, n),
        i = x(e, 0);
    return i.setFullYear(r, 0, a), i.setHours(0, 0, 0, 0), W(i, n);
}
function Je(e, n) {
    const t = f(e),
        a = W(t, n).getTime() - Ve(t, n).getTime();
    return Math.round(a / B) + 1;
}
function o(e, n) {
    const t = e < 0 ? "-" : "",
        a = Math.abs(e).toString().padStart(n, "0");
    return t + a;
}
const y = {
        y(e, n) {
            const t = e.getFullYear(),
                a = t > 0 ? t : 1 - t;
            return o(n === "yy" ? a % 100 : a, n.length);
        },
        M(e, n) {
            const t = e.getMonth();
            return n === "M" ? String(t + 1) : o(t + 1, 2);
        },
        d(e, n) {
            return o(e.getDate(), n.length);
        },
        a(e, n) {
            const t = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (n) {
                case "a":
                case "aa":
                    return t.toUpperCase();
                case "aaa":
                    return t;
                case "aaaaa":
                    return t[0];
                case "aaaa":
                default:
                    return t === "am" ? "a.m." : "p.m.";
            }
        },
        h(e, n) {
            return o(e.getHours() % 12 || 12, n.length);
        },
        H(e, n) {
            return o(e.getHours(), n.length);
        },
        m(e, n) {
            return o(e.getMinutes(), n.length);
        },
        s(e, n) {
            return o(e.getSeconds(), n.length);
        },
        S(e, n) {
            const t = n.length,
                a = e.getMilliseconds(),
                r = Math.floor(a * Math.pow(10, t - 3));
            return o(r, n.length);
        },
    },
    D = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
    },
    $e = {
        G: function (e, n, t) {
            const a = e.getFullYear() > 0 ? 1 : 0;
            switch (n) {
                case "G":
                case "GG":
                case "GGG":
                    return t.era(a, { width: "abbreviated" });
                case "GGGGG":
                    return t.era(a, { width: "narrow" });
                case "GGGG":
                default:
                    return t.era(a, { width: "wide" });
            }
        },
        y: function (e, n, t) {
            if (n === "yo") {
                const a = e.getFullYear(),
                    r = a > 0 ? a : 1 - a;
                return t.ordinalNumber(r, { unit: "year" });
            }
            return y.y(e, n);
        },
        Y: function (e, n, t, a) {
            const r = V(e, a),
                i = r > 0 ? r : 1 - r;
            if (n === "YY") {
                const c = i % 100;
                return o(c, 2);
            }
            return n === "Yo"
                ? t.ordinalNumber(i, { unit: "year" })
                : o(i, n.length);
        },
        R: function (e, n) {
            const t = G(e);
            return o(t, n.length);
        },
        u: function (e, n) {
            const t = e.getFullYear();
            return o(t, n.length);
        },
        Q: function (e, n, t) {
            const a = Math.ceil((e.getMonth() + 1) / 3);
            switch (n) {
                case "Q":
                    return String(a);
                case "QQ":
                    return o(a, 2);
                case "Qo":
                    return t.ordinalNumber(a, { unit: "quarter" });
                case "QQQ":
                    return t.quarter(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "QQQQQ":
                    return t.quarter(a, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "QQQQ":
                default:
                    return t.quarter(a, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        q: function (e, n, t) {
            const a = Math.ceil((e.getMonth() + 1) / 3);
            switch (n) {
                case "q":
                    return String(a);
                case "qq":
                    return o(a, 2);
                case "qo":
                    return t.ordinalNumber(a, { unit: "quarter" });
                case "qqq":
                    return t.quarter(a, {
                        width: "abbreviated",
                        context: "standalone",
                    });
                case "qqqqq":
                    return t.quarter(a, {
                        width: "narrow",
                        context: "standalone",
                    });
                case "qqqq":
                default:
                    return t.quarter(a, {
                        width: "wide",
                        context: "standalone",
                    });
            }
        },
        M: function (e, n, t) {
            const a = e.getMonth();
            switch (n) {
                case "M":
                case "MM":
                    return y.M(e, n);
                case "Mo":
                    return t.ordinalNumber(a + 1, { unit: "month" });
                case "MMM":
                    return t.month(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "MMMMM":
                    return t.month(a, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "MMMM":
                default:
                    return t.month(a, { width: "wide", context: "formatting" });
            }
        },
        L: function (e, n, t) {
            const a = e.getMonth();
            switch (n) {
                case "L":
                    return String(a + 1);
                case "LL":
                    return o(a + 1, 2);
                case "Lo":
                    return t.ordinalNumber(a + 1, { unit: "month" });
                case "LLL":
                    return t.month(a, {
                        width: "abbreviated",
                        context: "standalone",
                    });
                case "LLLLL":
                    return t.month(a, {
                        width: "narrow",
                        context: "standalone",
                    });
                case "LLLL":
                default:
                    return t.month(a, { width: "wide", context: "standalone" });
            }
        },
        w: function (e, n, t, a) {
            const r = Je(e, a);
            return n === "wo"
                ? t.ordinalNumber(r, { unit: "week" })
                : o(r, n.length);
        },
        I: function (e, n, t) {
            const a = Ge(e);
            return n === "Io"
                ? t.ordinalNumber(a, { unit: "week" })
                : o(a, n.length);
        },
        d: function (e, n, t) {
            return n === "do"
                ? t.ordinalNumber(e.getDate(), { unit: "date" })
                : y.d(e, n);
        },
        D: function (e, n, t) {
            const a = Be(e);
            return n === "Do"
                ? t.ordinalNumber(a, { unit: "dayOfYear" })
                : o(a, n.length);
        },
        E: function (e, n, t) {
            const a = e.getDay();
            switch (n) {
                case "E":
                case "EE":
                case "EEE":
                    return t.day(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "EEEEE":
                    return t.day(a, { width: "narrow", context: "formatting" });
                case "EEEEEE":
                    return t.day(a, { width: "short", context: "formatting" });
                case "EEEE":
                default:
                    return t.day(a, { width: "wide", context: "formatting" });
            }
        },
        e: function (e, n, t, a) {
            const r = e.getDay(),
                i = (r - a.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case "e":
                    return String(i);
                case "ee":
                    return o(i, 2);
                case "eo":
                    return t.ordinalNumber(i, { unit: "day" });
                case "eee":
                    return t.day(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "eeeee":
                    return t.day(r, { width: "narrow", context: "formatting" });
                case "eeeeee":
                    return t.day(r, { width: "short", context: "formatting" });
                case "eeee":
                default:
                    return t.day(r, { width: "wide", context: "formatting" });
            }
        },
        c: function (e, n, t, a) {
            const r = e.getDay(),
                i = (r - a.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case "c":
                    return String(i);
                case "cc":
                    return o(i, n.length);
                case "co":
                    return t.ordinalNumber(i, { unit: "day" });
                case "ccc":
                    return t.day(r, {
                        width: "abbreviated",
                        context: "standalone",
                    });
                case "ccccc":
                    return t.day(r, { width: "narrow", context: "standalone" });
                case "cccccc":
                    return t.day(r, { width: "short", context: "standalone" });
                case "cccc":
                default:
                    return t.day(r, { width: "wide", context: "standalone" });
            }
        },
        i: function (e, n, t) {
            const a = e.getDay(),
                r = a === 0 ? 7 : a;
            switch (n) {
                case "i":
                    return String(r);
                case "ii":
                    return o(r, n.length);
                case "io":
                    return t.ordinalNumber(r, { unit: "day" });
                case "iii":
                    return t.day(a, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "iiiii":
                    return t.day(a, { width: "narrow", context: "formatting" });
                case "iiiiii":
                    return t.day(a, { width: "short", context: "formatting" });
                case "iiii":
                default:
                    return t.day(a, { width: "wide", context: "formatting" });
            }
        },
        a: function (e, n, t) {
            const r = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (n) {
                case "a":
                case "aa":
                    return t.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "aaa":
                    return t
                        .dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting",
                        })
                        .toLowerCase();
                case "aaaaa":
                    return t.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "aaaa":
                default:
                    return t.dayPeriod(r, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        b: function (e, n, t) {
            const a = e.getHours();
            let r;
            switch (
                (a === 12
                    ? (r = D.noon)
                    : a === 0
                    ? (r = D.midnight)
                    : (r = a / 12 >= 1 ? "pm" : "am"),
                n)
            ) {
                case "b":
                case "bb":
                    return t.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "bbb":
                    return t
                        .dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting",
                        })
                        .toLowerCase();
                case "bbbbb":
                    return t.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "bbbb":
                default:
                    return t.dayPeriod(r, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        B: function (e, n, t) {
            const a = e.getHours();
            let r;
            switch (
                (a >= 17
                    ? (r = D.evening)
                    : a >= 12
                    ? (r = D.afternoon)
                    : a >= 4
                    ? (r = D.morning)
                    : (r = D.night),
                n)
            ) {
                case "B":
                case "BB":
                case "BBB":
                    return t.dayPeriod(r, {
                        width: "abbreviated",
                        context: "formatting",
                    });
                case "BBBBB":
                    return t.dayPeriod(r, {
                        width: "narrow",
                        context: "formatting",
                    });
                case "BBBB":
                default:
                    return t.dayPeriod(r, {
                        width: "wide",
                        context: "formatting",
                    });
            }
        },
        h: function (e, n, t) {
            if (n === "ho") {
                let a = e.getHours() % 12;
                return (
                    a === 0 && (a = 12), t.ordinalNumber(a, { unit: "hour" })
                );
            }
            return y.h(e, n);
        },
        H: function (e, n, t) {
            return n === "Ho"
                ? t.ordinalNumber(e.getHours(), { unit: "hour" })
                : y.H(e, n);
        },
        K: function (e, n, t) {
            const a = e.getHours() % 12;
            return n === "Ko"
                ? t.ordinalNumber(a, { unit: "hour" })
                : o(a, n.length);
        },
        k: function (e, n, t) {
            let a = e.getHours();
            return (
                a === 0 && (a = 24),
                n === "ko"
                    ? t.ordinalNumber(a, { unit: "hour" })
                    : o(a, n.length)
            );
        },
        m: function (e, n, t) {
            return n === "mo"
                ? t.ordinalNumber(e.getMinutes(), { unit: "minute" })
                : y.m(e, n);
        },
        s: function (e, n, t) {
            return n === "so"
                ? t.ordinalNumber(e.getSeconds(), { unit: "second" })
                : y.s(e, n);
        },
        S: function (e, n) {
            return y.S(e, n);
        },
        X: function (e, n, t, a) {
            const i = (a._originalDate || e).getTimezoneOffset();
            if (i === 0) return "Z";
            switch (n) {
                case "X":
                    return X(i);
                case "XXXX":
                case "XX":
                    return b(i);
                case "XXXXX":
                case "XXX":
                default:
                    return b(i, ":");
            }
        },
        x: function (e, n, t, a) {
            const i = (a._originalDate || e).getTimezoneOffset();
            switch (n) {
                case "x":
                    return X(i);
                case "xxxx":
                case "xx":
                    return b(i);
                case "xxxxx":
                case "xxx":
                default:
                    return b(i, ":");
            }
        },
        O: function (e, n, t, a) {
            const i = (a._originalDate || e).getTimezoneOffset();
            switch (n) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + R(i, ":");
                case "OOOO":
                default:
                    return "GMT" + b(i, ":");
            }
        },
        z: function (e, n, t, a) {
            const i = (a._originalDate || e).getTimezoneOffset();
            switch (n) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + R(i, ":");
                case "zzzz":
                default:
                    return "GMT" + b(i, ":");
            }
        },
        t: function (e, n, t, a) {
            const r = a._originalDate || e,
                i = Math.floor(r.getTime() / 1e3);
            return o(i, n.length);
        },
        T: function (e, n, t, a) {
            const i = (a._originalDate || e).getTime();
            return o(i, n.length);
        },
    };
function R(e, n = "") {
    const t = e > 0 ? "-" : "+",
        a = Math.abs(e),
        r = Math.floor(a / 60),
        i = a % 60;
    return i === 0 ? t + String(r) : t + String(r) + n + o(i, 2);
}
function X(e, n) {
    return e % 60 === 0
        ? (e > 0 ? "-" : "+") + o(Math.abs(e) / 60, 2)
        : b(e, n);
}
function b(e, n = "") {
    const t = e > 0 ? "-" : "+",
        a = Math.abs(e),
        r = o(Math.floor(a / 60), 2),
        i = o(a % 60, 2);
    return t + r + n + i;
}
const A = (e, n) => {
        switch (e) {
            case "P":
                return n.date({ width: "short" });
            case "PP":
                return n.date({ width: "medium" });
            case "PPP":
                return n.date({ width: "long" });
            case "PPPP":
            default:
                return n.date({ width: "full" });
        }
    },
    J = (e, n) => {
        switch (e) {
            case "p":
                return n.time({ width: "short" });
            case "pp":
                return n.time({ width: "medium" });
            case "ppp":
                return n.time({ width: "long" });
            case "pppp":
            default:
                return n.time({ width: "full" });
        }
    },
    Ue = (e, n) => {
        const t = e.match(/(P+)(p+)?/) || [],
            a = t[1],
            r = t[2];
        if (!r) return A(e, n);
        let i;
        switch (a) {
            case "P":
                i = n.dateTime({ width: "short" });
                break;
            case "PP":
                i = n.dateTime({ width: "medium" });
                break;
            case "PPP":
                i = n.dateTime({ width: "long" });
                break;
            case "PPPP":
            default:
                i = n.dateTime({ width: "full" });
                break;
        }
        return i.replace("{{date}}", A(a, n)).replace("{{time}}", J(r, n));
    },
    ze = { p: J, P: Ue },
    Ke = ["D", "DD"],
    Ze = ["YY", "YYYY"];
function et(e) {
    return Ke.indexOf(e) !== -1;
}
function tt(e) {
    return Ze.indexOf(e) !== -1;
}
function I(e, n, t) {
    if (e === "YYYY")
        throw new RangeError(
            `Use \`yyyy\` instead of \`YYYY\` (in \`${n}\`) for formatting years to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
        );
    if (e === "YY")
        throw new RangeError(
            `Use \`yy\` instead of \`YY\` (in \`${n}\`) for formatting years to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
        );
    if (e === "D")
        throw new RangeError(
            `Use \`d\` instead of \`D\` (in \`${n}\`) for formatting days of the month to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
        );
    if (e === "DD")
        throw new RangeError(
            `Use \`dd\` instead of \`DD\` (in \`${n}\`) for formatting days of the month to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
        );
}
const nt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    at = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    rt = /^'([^]*?)'?$/,
    it = /''/g,
    st = /[a-zA-Z]/;
function L(e, n, t) {
    var l, g, k, M, F, q, _, H;
    const a = T(),
        r = (t == null ? void 0 : t.locale) ?? a.locale ?? Le,
        i =
            (t == null ? void 0 : t.firstWeekContainsDate) ??
            ((g =
                (l = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : l.options) == null
                ? void 0
                : g.firstWeekContainsDate) ??
            a.firstWeekContainsDate ??
            ((M = (k = a.locale) == null ? void 0 : k.options) == null
                ? void 0
                : M.firstWeekContainsDate) ??
            1,
        c =
            (t == null ? void 0 : t.weekStartsOn) ??
            ((q =
                (F = t == null ? void 0 : t.locale) == null
                    ? void 0
                    : F.options) == null
                ? void 0
                : q.weekStartsOn) ??
            a.weekStartsOn ??
            ((H = (_ = a.locale) == null ? void 0 : _.options) == null
                ? void 0
                : H.weekStartsOn) ??
            0,
        u = f(e);
    if (!de(u)) throw new RangeError("Invalid time value");
    const d = {
        firstWeekContainsDate: i,
        weekStartsOn: c,
        locale: r,
        _originalDate: u,
    };
    return n
        .match(at)
        .map(function (h) {
            const w = h[0];
            if (w === "p" || w === "P") {
                const S = ze[w];
                return S(h, r.formatLong);
            }
            return h;
        })
        .join("")
        .match(nt)
        .map(function (h) {
            if (h === "''") return "'";
            const w = h[0];
            if (w === "'") return ot(h);
            const S = $e[w];
            if (S)
                return (
                    !(t != null && t.useAdditionalWeekYearTokens) &&
                        tt(h) &&
                        I(h, n, String(e)),
                    !(t != null && t.useAdditionalDayOfYearTokens) &&
                        et(h) &&
                        I(h, n, String(e)),
                    S(u, h, r.localize, d)
                );
            if (w.match(st))
                throw new RangeError(
                    "Format string contains an unescaped latin alphabet character `" +
                        w +
                        "`",
                );
            return h;
        })
        .join("");
}
function ot(e) {
    const n = e.match(rt);
    return n ? n[1].replace(it, "'") : e;
}
function ct({ src: e, name: n, className: t, description: a, avatarProps: r }) {
    return s.jsxs("figure", {
        className: ne("flex items-center gap-3", t),
        children: [
            s.jsx(K, { name: n, src: e, ...r }),
            s.jsxs("figcaption", {
                className: "grid gap-0.5",
                children: [
                    s.jsx(N, {
                        className:
                            "font-lexend text-sm font-medium text-gray-900 dark:text-gray-700",
                        children: n,
                    }),
                    a &&
                        s.jsx(N, {
                            className: "text-[13px] text-gray-500",
                            children: a,
                        }),
                ],
            }),
        ],
    });
}
const Ot = ({
    sortConfig: e,
    onDeleteItem: n,
    onHeaderCellClick: t,
    onChecked: a,
}) => [
    {
        title: s.jsx(P, { title: O("Product Info") }),
        dataIndex: "product",
        key: "product",
        width: 150,
        render: (r, i) =>
            s.jsx(ct, {
                src: re(r.images[0].url),
                name: r.name,
                description: r.discount,
                avatarProps: {
                    name: r.name,
                    size: "lg",
                    className: "rounded-lg",
                },
            }),
    },
    {
        title: s.jsx(P, {
            title: O("Discount Price"),
            sortable: !0,
            ascending:
                (e == null ? void 0 : e.direction) === "asc" &&
                (e == null ? void 0 : e.key) === "discount_price",
        }),
        dataIndex: "discount_price",
        key: "discount_price",
        width: 150,
        onHeaderCell: () => t("name"),
        render: (r, i) =>
            s.jsxs("div", {
                children: [
                    s.jsx("small", {
                        children: s.jsx(j, {
                            displayType: "text",
                            thousandSeparator: !0,
                            decimalScale: 2,
                            fixedDecimalScale: !0,
                            prefix: "RM",
                            value: i.product.price,
                            className:
                                "text-[0.7rem] animate-pulse font-medium line-through text-gray-400",
                        }),
                    }),
                    s.jsx(Z, {
                        as: "h6",
                        className: "!text-sm font-medium text-gray-800",
                        children: s.jsx(j, {
                            displayType: "text",
                            thousandSeparator: !0,
                            decimalScale: 2,
                            fixedDecimalScale: !0,
                            prefix: "RM",
                            value: i.product.price - r,
                        }),
                    }),
                ],
            }),
    },
    {
        title: s.jsx(P, { title: O("Discount") }),
        dataIndex: "percentage",
        key: "percentage",
        width: 10,
        render: (r) =>
            s.jsx(j, {
                displayType: "text",
                decimalScale: 0,
                fixedDecimalScale: !0,
                suffix: "%",
                value: r,
            }),
    },
    {
        title: s.jsx(P, {
            title: O("Stock"),
            sortable: !0,
            ascending:
                (e == null ? void 0 : e.direction) === "asc" &&
                (e == null ? void 0 : e.key) === "stock",
        }),
        onHeaderCell: () => t("stock"),
        dataIndex: "stock",
        key: "stock",
        width: 10,
        render: (r, i) => s.jsx(N, { children: i.product.stock }),
    },
    {
        title: s.jsx(P, { title: O("Discount Period") }),
        dataIndex: "start_at",
        key: "start_at",
        width: 300,
        render: (r, i) =>
            s.jsxs("div", {
                className: "flex gap-x-1",
                children: [
                    s.jsx("div", {
                        children: s.jsx("span", {
                            className: "block",
                            children: L(new Date(r), "dd MMM yyyy HH:mm"),
                        }),
                    }),
                    s.jsx("div", { children: "-" }),
                    s.jsx("div", {
                        children: s.jsx("span", {
                            className: "block",
                            children: L(
                                new Date(i.end_at),
                                "dd MMM yyyy HH:mm",
                            ),
                        }),
                    }),
                ],
            }),
    },
    {
        title: s.jsx(s.Fragment, {}),
        dataIndex: "action",
        key: "action",
        width: 100,
        render: (r, i) =>
            s.jsxs("div", {
                className: "flex items-center justify-end gap-3 pe-4",
                children: [
                    s.jsx(ee, {
                        size: "sm",
                        content: () => "Edit Discount",
                        placement: "top",
                        color: "invert",
                        children: s.jsx($, {
                            href: ae.eCommerce.editDiscount(i.id),
                            children: s.jsx(te, {
                                size: "sm",
                                variant: "outline",
                                children: s.jsx(U, { className: "h-4 w-4" }),
                            }),
                        }),
                    }),
                    s.jsx(z, {
                        title: "Delete the discount",
                        description: `Are you sure you want to delete this #${i.slug} discount?`,
                        onDelete: () => n(i.id),
                    }),
                ],
            }),
    },
];
export { Ot as discountColumn };
