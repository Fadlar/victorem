import { W as _, j as i, d as b, y as w } from "./app-2UknqXgy.js";
import { A as x } from "./App-OpPn3YkP.js";
import { V as j } from "./index-CkMAcVi9.js";
import { r as s } from "./routes-0mvJeivy.js";
import { P as C } from "./page-header-mh2v6ut1.js";
import { n as E } from "./notification-n4E3ZUKo.js";
import v from "./edit-discount-form-m8aPdpBT.js";
import { a as P } from "./addMonths-WGVVtHj2.js";
import "./index.esm-uZtfluGa.js";
import "./lang-ZDB8uS83.js";
import "./use-event-listener-VHGz5w7M.js";
import "./constants-lPtH_bX3.js";
import "./useMedia-M6gaiTeb.js";
import "./index-R8Sv_q1I.js";
/* empty css                      */ import "./index-OfqHdAuq.js";
import "./transition-ocz20r5l.js";
import "./dialog-ZsqB_iXW.js";
import "./InputError-iSpwlnJD.js";
import "./form-footer-a3Twr-H9.js";
import "./datepicker-gYb3RWou.js";
import "./createSuper-uvzpyxvK.js";
import "./defineProperty-VwQjyvUu.js";
import "./form-group-7tooBdgQ.js";
import "./utils-FzIoAioV.js";
import "./react-number-format.es-jsVA24o-.js";
import "./listbox-xRxU4zRi.js";
import "./constructFrom-jslXdUnP.js";
const p = {
    title: "Edit Discount",
    breadcrumb: [
        { href: "#", name: "Home" },
        { href: s.eCommerce.discounts, name: "Discounts" },
        { name: "Edit" },
    ],
};
function et({ discount: t, products: u }) {
    const {
            data: e,
            setData: o,
            errors: d,
            put: l,
            processing: g,
        } = _({
            product: t.product ?? {},
            discount_price: t.discount_price ?? 0,
            percentage: t.percentage ?? 0,
            start_at: new Date(t.start_at) ?? new Date(),
            end_at: new Date(t.end_at) ?? P(new Date(), 1),
        }),
        f = (r) => {
            const { name: c, value: a } = r.target;
            if (c === "discount_price") {
                const m = e.product.price,
                    n = (a / m) * 100;
                o({ ...e, discount_price: a, percentage: n });
            } else if (c === "percentage") {
                const n = e.product.price * (a / 100);
                o({ ...e, discount_price: n, percentage: a });
            } else o({ ...e, [r.target.name]: r.target.value });
        },
        D = (r) => {
            o({ ...e, product: r });
        },
        h = (r) => {
            r.preventDefault(),
                l(s.eCommerce.udDiscount(t.id), {
                    onSuccess: () => {
                        E("Discount has been updated.", "success"),
                            w.visit(s.eCommerce.discounts, {
                                only: ["discounts"],
                            });
                    },
                });
        };
    return i.jsxs(x, {
        title: "Edit Discount",
        children: [
            i.jsx(C, {
                title: p.title,
                breadcrumb: p.breadcrumb,
                children: i.jsx(b, {
                    href: s.eCommerce.discounts,
                    className: "mt-4 w-full @lg:mt-0 @lg:w-auto",
                    children: i.jsx(j, {
                        tag: "span",
                        className: "w-full @lg:w-auto",
                        variant: "outline",
                        children: "Cancel",
                    }),
                }),
            }),
            i.jsx(v, {
                handleSubmit: h,
                data: e,
                errors: d,
                isLoading: g,
                handleChange: f,
                handleSelect: D,
                setData: o,
                products: u,
                buttonTitle: "Update Discount",
                discount: t,
            }),
        ],
    });
}
export { et as default };
