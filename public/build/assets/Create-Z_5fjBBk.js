import { r as p, W as E, j as s, d as D, y as F } from "./app-2UknqXgy.js";
import { A as H } from "./App-OpPn3YkP.js";
import { V as I } from "./index-CkMAcVi9.js";
import { r as a } from "./routes-0mvJeivy.js";
import { P as N } from "./page-header-mh2v6ut1.js";
import { n as R } from "./notification-n4E3ZUKo.js";
import V from "./edit-product-form-R1SrcONd.js";
import "./index.esm-uZtfluGa.js";
import "./lang-ZDB8uS83.js";
import "./use-event-listener-VHGz5w7M.js";
import "./constants-lPtH_bX3.js";
import "./useMedia-M6gaiTeb.js";
import "./index-R8Sv_q1I.js";
/* empty css                      */ import "./index-OfqHdAuq.js";
import "./transition-ocz20r5l.js";
import "./dialog-ZsqB_iXW.js";
import "./index-bSPnhf_t.js";
import "./product-summary-m10n70dc.js";
import "./InputError-iSpwlnJD.js";
import "./form-group-7tooBdgQ.js";
import "./listbox-xRxU4zRi.js";
import "./product-media-5rm9MBKH.js";
import "./FileUpload-lWAp9xYL.js";
import "./product-image-list-K625HVrG.js";
import "./utils-FzIoAioV.js";
import "./objectWithoutPropertiesLoose-qiKziPFZ.js";
import "./defineProperty-VwQjyvUu.js";
import "./pricing-inventory-pI_oAIgs.js";
import "./react-number-format.es-jsVA24o-.js";
import "./form-footer-a3Twr-H9.js";
const d = {
    title: "Add Product",
    breadcrumb: [
        { href: "#", name: "Home" },
        { href: a.eCommerce.products, name: "Products" },
        { name: "Create" },
    ],
};
function le({ product: l, categories: u }) {
    const [m, c] = p.useState([]),
        {
            data: t,
            setData: o,
            errors: g,
            reset: f,
            processing: C,
            post: h,
            clearErrors: b,
        } = E({
            name: "",
            description: "",
            categories: [],
            price: "",
            agent_price: "",
            stock: "",
            weight: "",
            images: [],
        }),
        [x, y] = p.useState(!1),
        P = (e) => {
            o({ ...t, [e.target.name]: e.target.value });
        },
        S = (e) => {
            m.some((r) => r.id === e.id)
                ? v(e.id)
                : c((r) => {
                      const i = r.concat(e);
                      return o({ ...t, categories: i }), i;
                  });
        },
        j = (e) => {
            o({ ...t, description: e });
        },
        w = (e) => {
            o({ ...t, images: e });
        },
        v = (e) => {
            c((n) => {
                const r = n.filter((i) => i.id !== e);
                return o({ ...t, categories: r }), r;
            });
        },
        A = (e) => {
            e.preventDefault(),
                h(a.eCommerce.products, {
                    preserveScroll: !0,
                    onSuccess: () => {
                        R("Product has been created.", "success"),
                            f(),
                            b(),
                            y(!0),
                            F.visit(a.eCommerce.products, {
                                only: ["products"],
                            });
                    },
                });
        };
    return s.jsxs(H, {
        title: "Add Product",
        children: [
            s.jsx(N, {
                title: d.title,
                breadcrumb: d.breadcrumb,
                children: s.jsx(D, {
                    href: a.eCommerce.categories,
                    className: "mt-4 w-full @lg:mt-0 @lg:w-auto",
                    children: s.jsx(I, {
                        tag: "span",
                        className: "w-full @lg:w-auto",
                        variant: "outline",
                        children: "Cancel",
                    }),
                }),
            }),
            s.jsx(V, {
                handleSubmit: A,
                data: t,
                errors: g,
                isLoading: C,
                handleChange: P,
                handleSelect: S,
                handleDescription: j,
                isClearFiles: x,
                product: l,
                categories: u,
                selectedCategory: m,
                handleImages: w,
                buttonTitle: "Create Product",
            }),
        ],
    });
}
export { le as default };
