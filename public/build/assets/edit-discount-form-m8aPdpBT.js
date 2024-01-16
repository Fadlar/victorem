import { j as e, r as _ } from "./app-2UknqXgy.js";
import { I as r } from "./InputError-iSpwlnJD.js";
import { F } from "./form-footer-a3Twr-H9.js";
import { D as g } from "./datepicker-gYb3RWou.js";
import { F as w } from "./form-group-7tooBdgQ.js";
import { A as j } from "./utils-FzIoAioV.js";
import { c as o, t as l } from "./lang-ZDB8uS83.js";
import { G as M } from "./index.esm-uZtfluGa.js";
import { N as m } from "./react-number-format.es-jsVA24o-.js";
import { B as b, S as n } from "./index-CkMAcVi9.js";
import { N as i } from "./listbox-xRxU4zRi.js";
import { t as D } from "./transition-ocz20r5l.js";
import "./createSuper-uvzpyxvK.js";
import "./defineProperty-VwQjyvUu.js";
import "./constants-lPtH_bX3.js";
import "./dialog-ZsqB_iXW.js";
function T(d) {
    return M({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true",
        },
        child: [
            {
                tag: "path",
                attr: {
                    fillRule: "evenodd",
                    d: "M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z",
                    clipRule: "evenodd",
                },
            },
        ],
    })(d);
}
function K({
    className: d,
    products: p,
    handleSubmit: v,
    data: s,
    errors: a,
    isLoading: N,
    handleChange: h,
    handleSelect: y,
    setData: f,
    buttonTitle: S = "Update Discount",
    discount: c,
}) {
    const u = !!Object.keys(s.product).length;
    return e.jsx("div", {
        className: "@container",
        children: e.jsxs("form", {
            onSubmit: v,
            className: o("[&_label.block>span]:font-medium", d),
            children: [
                e.jsx("div", {
                    className:
                        "mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11 min-h-screen",
                    children: e.jsx("div", {
                        id: "summary",
                        className: "pt-7 @2xl:pt-9 @3xl:pt-11",
                        children: e.jsxs(w, {
                            title: "Discount Info",
                            description:
                                "Edit yout discount information from here",
                            children: [
                                e.jsxs("div", {
                                    className: "col-span-full",
                                    children: [
                                        e.jsx(i, {
                                            value: s.product,
                                            onChange: y,
                                            children: e.jsxs("div", {
                                                className: "relative mt-1",
                                                children: [
                                                    e.jsx("label", {
                                                        htmlFor: "product",
                                                        className:
                                                            "font-medium block mb-1",
                                                        children:
                                                            l("Select Product"),
                                                    }),
                                                    e.jsxs(i.Button, {
                                                        className: o(
                                                            "relative w-full border rounded-md bg-white py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:border-gray-700 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-300 sm:text-sm",
                                                            c && c.id
                                                                ? "cursor-not-allowed"
                                                                : "cursor-default",
                                                        ),
                                                        "aria-disabled": !!(
                                                            c && c.id
                                                        ),
                                                        children: [
                                                            u
                                                                ? e.jsxs(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "flex gap-x-2 items-center",
                                                                          children:
                                                                              [
                                                                                  e.jsx(
                                                                                      b,
                                                                                      {
                                                                                          name: s
                                                                                              .product
                                                                                              .name,
                                                                                          src: j(
                                                                                              s
                                                                                                  .product
                                                                                                  .images[0]
                                                                                                  .url,
                                                                                          ),
                                                                                          className:
                                                                                              "rounded-md flex-shrink-0",
                                                                                      },
                                                                                  ),
                                                                                  e.jsxs(
                                                                                      "div",
                                                                                      {
                                                                                          children:
                                                                                              [
                                                                                                  e.jsx(
                                                                                                      n,
                                                                                                      {
                                                                                                          className:
                                                                                                              o(
                                                                                                                  "text-gray-800 font-medium",
                                                                                                              ),
                                                                                                          children:
                                                                                                              s
                                                                                                                  .product
                                                                                                                  .name,
                                                                                                      },
                                                                                                  ),
                                                                                                  e.jsxs(
                                                                                                      "span",
                                                                                                      {
                                                                                                          className:
                                                                                                              "-mt-1 block",
                                                                                                          children:
                                                                                                              [
                                                                                                                  e.jsx(
                                                                                                                      m,
                                                                                                                      {
                                                                                                                          displayType:
                                                                                                                              "text",
                                                                                                                          value: s
                                                                                                                              .product
                                                                                                                              .price,
                                                                                                                          prefix: "RM",
                                                                                                                          thousandSeparator:
                                                                                                                              ",",
                                                                                                                          decimalScale: 2,
                                                                                                                          fixedDecimalScale:
                                                                                                                              !0,
                                                                                                                          className:
                                                                                                                              "text-xs text-gray-700",
                                                                                                                      },
                                                                                                                  ),
                                                                                                                  e.jsxs(
                                                                                                                      n,
                                                                                                                      {
                                                                                                                          className:
                                                                                                                              "text-xs text-gray-600 block",
                                                                                                                          children:
                                                                                                                              [
                                                                                                                                  "Stock:",
                                                                                                                                  " ",
                                                                                                                                  s
                                                                                                                                      .product
                                                                                                                                      .stock,
                                                                                                                              ],
                                                                                                                      },
                                                                                                                  ),
                                                                                                              ],
                                                                                                      },
                                                                                                  ),
                                                                                              ],
                                                                                      },
                                                                                  ),
                                                                              ],
                                                                      },
                                                                  )
                                                                : e.jsx(
                                                                      "span",
                                                                      {
                                                                          children:
                                                                              l(
                                                                                  "Select Product",
                                                                              ),
                                                                      },
                                                                  ),
                                                            e.jsx("span", {
                                                                className:
                                                                    "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                                                children: e.jsx(
                                                                    T,
                                                                    {
                                                                        className:
                                                                            "h-5 w-5 text-gray-400",
                                                                        "aria-hidden":
                                                                            "true",
                                                                    },
                                                                ),
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx(D, {
                                                        as: _.Fragment,
                                                        leave: "transition ease-in duration-100",
                                                        leaveFrom:
                                                            "opacity-100",
                                                        leaveTo: "opacity-0",
                                                        children: e.jsxs(
                                                            i.Options,
                                                            {
                                                                className:
                                                                    "absolute mt-1 max-h-60 z-50 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
                                                                children: [
                                                                    p.map((t) =>
                                                                        e.jsx(
                                                                            i.Option,
                                                                            {
                                                                                className:
                                                                                    ({
                                                                                        active: x,
                                                                                        selected:
                                                                                            k,
                                                                                    }) =>
                                                                                        `relative ${
                                                                                            t.discount
                                                                                                ? "cursor-not-allowed"
                                                                                                : "cursor-default"
                                                                                        } select-none py-2 px-4 ${
                                                                                            x ||
                                                                                            k
                                                                                                ? "bg-gray-100"
                                                                                                : "text-gray-900"
                                                                                        }`,
                                                                                value: t,
                                                                                disabled:
                                                                                    !!t.discount,
                                                                                children:
                                                                                    ({
                                                                                        selected:
                                                                                            x,
                                                                                    }) =>
                                                                                        e.jsx(
                                                                                            e.Fragment,
                                                                                            {
                                                                                                children:
                                                                                                    e.jsxs(
                                                                                                        "div",
                                                                                                        {
                                                                                                            className:
                                                                                                                "flex gap-x-2 items-center",
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        b,
                                                                                                                        {
                                                                                                                            name: t.name,
                                                                                                                            src: j(
                                                                                                                                t
                                                                                                                                    .images[0]
                                                                                                                                    .url,
                                                                                                                            ),
                                                                                                                            className:
                                                                                                                                "rounded-md flex-shrink-0",
                                                                                                                        },
                                                                                                                    ),
                                                                                                                    e.jsxs(
                                                                                                                        "div",
                                                                                                                        {
                                                                                                                            children:
                                                                                                                                [
                                                                                                                                    e.jsx(
                                                                                                                                        n,
                                                                                                                                        {
                                                                                                                                            className:
                                                                                                                                                o(
                                                                                                                                                    "text-gray-800",
                                                                                                                                                    x &&
                                                                                                                                                        "font-medium",
                                                                                                                                                ),
                                                                                                                                            children:
                                                                                                                                                t.name,
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                    e.jsxs(
                                                                                                                                        "span",
                                                                                                                                        {
                                                                                                                                            className:
                                                                                                                                                "-mt-1 block",
                                                                                                                                            children:
                                                                                                                                                [
                                                                                                                                                    e.jsx(
                                                                                                                                                        m,
                                                                                                                                                        {
                                                                                                                                                            displayType:
                                                                                                                                                                "text",
                                                                                                                                                            value: t.price,
                                                                                                                                                            prefix: "RM",
                                                                                                                                                            thousandSeparator:
                                                                                                                                                                ",",
                                                                                                                                                            decimalScale: 2,
                                                                                                                                                            fixedDecimalScale:
                                                                                                                                                                !0,
                                                                                                                                                            className:
                                                                                                                                                                "text-xs text-gray-700",
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                    e.jsxs(
                                                                                                                                                        n,
                                                                                                                                                        {
                                                                                                                                                            className:
                                                                                                                                                                "text-xs text-gray-600 block",
                                                                                                                                                            children:
                                                                                                                                                                [
                                                                                                                                                                    "Stock:",
                                                                                                                                                                    " ",
                                                                                                                                                                    t.stock,
                                                                                                                                                                ],
                                                                                                                                                        },
                                                                                                                                                    ),
                                                                                                                                                ],
                                                                                                                                        },
                                                                                                                                    ),
                                                                                                                                ],
                                                                                                                        },
                                                                                                                    ),
                                                                                                                ],
                                                                                                        },
                                                                                                    ),
                                                                                            },
                                                                                        ),
                                                                            },
                                                                            t.id,
                                                                        ),
                                                                    ),
                                                                    p.length
                                                                        ? null
                                                                        : e.jsx(
                                                                              i.Option,
                                                                              {
                                                                                  value: "",
                                                                                  className:
                                                                                      "relative cursor-not-allowed select-none py-2 px-4 text-gray-700 text-center",
                                                                                  disabled:
                                                                                      !0,
                                                                                  children:
                                                                                      l(
                                                                                          "Product not found",
                                                                                      ),
                                                                              },
                                                                          ),
                                                                ],
                                                            },
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        e.jsx(r, {
                                            className: "mt-1",
                                            message: a && a.product,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("label", {
                                            htmlFor: "discount_price",
                                            className:
                                                "mb-1.5 block font-medium",
                                            children: l("Discount Price"),
                                        }),
                                        e.jsx(m, {
                                            thousandSeparator: !0,
                                            decimalScale: 2,
                                            fixedDecimalScale: !0,
                                            className:
                                                "rounded-md border border-gray-200 w-full text-base",
                                            autoComplete: "off",
                                            name: "discount_price",
                                            placeholder: "RM",
                                            onChange: h,
                                            value: s.discount_price,
                                            min: 1,
                                            disabled: !u,
                                            max: s.product && s.product.price,
                                        }),
                                        e.jsx(r, {
                                            className: "mt-1",
                                            message: a && a.discount_price,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("label", {
                                            htmlFor: "discount_price",
                                            className:
                                                "mb-1.5 block font-medium",
                                            children: l("Percentage"),
                                        }),
                                        e.jsx(m, {
                                            thousandSeparator: !0,
                                            decimalScale: 2,
                                            className:
                                                "rounded-md border border-gray-200 w-full text-base",
                                            autoComplete: "off",
                                            name: "percentage",
                                            placeholder: "%",
                                            onChange: h,
                                            value: s.percentage,
                                            disabled: !u,
                                        }),
                                        e.jsx(r, {
                                            className: "mt-1",
                                            message: a && a.percentage,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("label", {
                                            htmlFor: "start_at",
                                            className: "font-medium block mb-1",
                                            children: l("Start At"),
                                        }),
                                        e.jsx(g, {
                                            selected: s.start_at,
                                            onChange: (t) => f("start_at", t),
                                            name: "start_at",
                                            dateFormat: "d MMMM yyyy, h:mm aa",
                                            placeholderText:
                                                "Select Date & Time",
                                            showTimeSelect: !0,
                                        }),
                                        e.jsx(r, {
                                            className: "mt-1",
                                            message: a && a.start_at,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("label", {
                                            htmlFor: "end_at",
                                            className: "font-medium block mb-1",
                                            children: l("End At"),
                                        }),
                                        e.jsx(g, {
                                            selected: s.end_at,
                                            onChange: (t) => f("end_at", t),
                                            name: "end_at",
                                            dateFormat: "d MMMM yyyy, h:mm aa",
                                            placeholderText:
                                                "Select Date & Time",
                                            showTimeSelect: !0,
                                        }),
                                        e.jsx(r, {
                                            className: "mt-1",
                                            message: a && a.end_at,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
                e.jsx(F, { isLoading: N, submitBtnText: S }),
            ],
        }),
    });
}
export { K as default };
