import { W as b, j as o, d as C, y as x } from "./app-2UknqXgy.js";
import { A as _ } from "./App-OpPn3YkP.js";
import { V as j } from "./index-CkMAcVi9.js";
import { r as s } from "./routes-0mvJeivy.js";
import { P as w } from "./page-header-mh2v6ut1.js";
import { n as v } from "./notification-n4E3ZUKo.js";
import P from "./edit-discount-form-m8aPdpBT.js";
import { a as y } from "./addMonths-WGVVtHj2.js";
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
const m = {
    title: "Add Discount",
    breadcrumb: [
        { href: "#", name: "Home" },
        { href: s.eCommerce.discounts, name: "Discounts" },
        { name: "Edit" },
    ],
};
function et({ discount: p, products: u }) {
    const {
            data: t,
            setData: r,
            errors: d,
            post: l,
            processing: f,
        } = b({
            product: {},
            discount_price: 0,
            percentage: 0,
            start_at: new Date(),
            end_at: y(new Date(), 1),
        }),
        g = (e) => {
            const { name: c, value: i } = e.target;
            if (c === "discount_price") {
                const n = t.product.price,
                    a = (i / n) * 100;
                r({ ...t, discount_price: i, percentage: a });
            } else if (c === "percentage") {
                const a = t.product.price * (i / 100);
                r({ ...t, discount_price: a, percentage: i });
            } else r({ ...t, [e.target.name]: e.target.value });
        },
        h = (e) => {
            r({ ...t, product: e });
        },
        D = (e) => {
            e.preventDefault(),
                l(s.eCommerce.discounts, {
                    onSuccess: () => {
                        v("Discount has been created.", "success"),
                            x.visit(s.eCommerce.discounts, {
                                only: ["discounts"],
                            });
                    },
                });
        };
    return o.jsxs(_, {
        title: "Create Discount",
        children: [
            o.jsx(w, {
                title: m.title,
                breadcrumb: m.breadcrumb,
                children: o.jsx(C, {
                    href: s.eCommerce.discounts,
                    className: "mt-4 w-full @lg:mt-0 @lg:w-auto",
                    children: o.jsx(j, {
                        tag: "span",
                        className: "w-full @lg:w-auto",
                        variant: "outline",
                        children: "Cancel",
                    }),
                }),
            }),
            o.jsx(P, {
                handleSubmit: D,
                data: t,
                errors: d,
                isLoading: f,
                handleChange: g,
                handleSelect: h,
                setData: r,
                products: u,
                buttonTitle: "Create Discount",
                discount: p,
            }),
        ],
    });
}
export { et as default };
