import { j as e } from "./app-2UknqXgy.js";
import { I as r } from "./InputError-iSpwlnJD.js";
import { F as i } from "./form-group-7tooBdgQ.js";
import { c as l } from "./lang-ZDB8uS83.js";
import { N as o } from "./react-number-format.es-jsVA24o-.js";
import { n as m } from "./index-CkMAcVi9.js";
import "./transition-ocz20r5l.js";
import "./dialog-ZsqB_iXW.js";
function j({ className: c, data: a, errors: t, handleChange: s }) {
    return e.jsxs("div", {
        className: "divide-y divide-dashed divide-gray-200",
        children: [
            e.jsxs(i, {
                title: "Pricing",
                description: "Add your product pricing here",
                className: l(c),
                children: [
                    e.jsxs("div", {
                        className: "col-span-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "price",
                                className:
                                    "mb-1 block text-gray-600 font-medium",
                                children: "Customer Price",
                            }),
                            e.jsx(o, {
                                thousandSeparator: !0,
                                decimalScale: 2,
                                fixedDecimalScale: !0,
                                className:
                                    "rounded-md border border-gray-200 w-full text-base",
                                autoComplete: "off",
                                name: "price",
                                placeholder: "RM",
                                onChange: s,
                                value: a.price,
                                min: 1,
                            }),
                            e.jsx(r, {
                                className: "mt-1",
                                message: t && t.price,
                            }),
                        ],
                    }),
                    e.jsxs("div", {
                        className: "col-span-full",
                        children: [
                            e.jsx("label", {
                                htmlFor: "agent_price",
                                className:
                                    "mb-1 block text-gray-600 font-medium",
                                children: "Agent Price",
                            }),
                            e.jsx(o, {
                                thousandSeparator: !0,
                                decimalScale: 2,
                                fixedDecimalScale: !0,
                                className:
                                    "rounded-md border border-gray-200 w-full text-base",
                                autoComplete: "off",
                                name: "agent_price",
                                placeholder: "RM",
                                onChange: s,
                                value: a.agent_price,
                                min: 1,
                            }),
                            e.jsx(r, {
                                className: "mt-1",
                                message: t && t.agent_price,
                            }),
                        ],
                    }),
                ],
            }),
            e.jsx(i, {
                title: "Product Management",
                description: "Add your product management info here",
                className: l(c, "pt-10"),
                children: e.jsxs("div", {
                    children: [
                        e.jsx(m, {
                            name: "stock",
                            type: "number",
                            label: "Product Stock",
                            value: a.stock,
                            onChange: s,
                            placeholder: "Enter product stock",
                        }),
                        e.jsx(r, {
                            message: t && t.stock,
                            className: "col-span-full mt-1",
                        }),
                    ],
                }),
            }),
            e.jsx(i, {
                title: "Weight",
                description: "",
                className: l(c, "pt-10"),
                children: e.jsxs("div", {
                    children: [
                        e.jsx(m, {
                            type: "number",
                            name: "weight",
                            value: a.weight,
                            onChange: s,
                            label: "Weight (Grams)",
                            placeholder: "Product weight",
                        }),
                        e.jsx(r, {
                            message: t && t.weight,
                            className: "col-span-full mt-1",
                        }),
                    ],
                }),
            }),
        ],
    });
}
export { j as default };
