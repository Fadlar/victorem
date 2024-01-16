import{j as r}from"./app-kHpnk0Pn.js";import{L as v}from"./index-K3fzOL2D.js";import{c as l}from"./class-names-ryfOvXuX.js";import{S as b}from"./index-bENqKbEs.js";/* empty css                      */import{t as h}from"./lang-5KgLvTvV.js";import j from"./product-summary-rNJ66Fk4.js";import N from"./product-media-qrCW7VX8.js";import I from"./pricing-inventory-d0Z3yrhk.js";import{V as k}from"./index-xSa8mfDq.js";import"./InputError-AT-Wt37y.js";import"./form-group-nfI7twjK.js";import"./listbox-I9oXBZYU.js";import"./transition-Wxoqj6O_.js";import"./dialog-IN25Flg0.js";import"./FileUpload-m9VpoQdZ.js";import"./index.esm-lc2mGIpf.js";import"./notification-klzMqe0S.js";import"./index-y83LnfL2.js";import"./product-image-list-DJWuhPHB.js";import"./utils-FzIoAioV.js";import"./constants-lPtH_bX3.js";import"./objectWithoutPropertiesLoose-mgTyI0mA.js";import"./react-number-format.es-7uiNrsd-.js";const s={summary:"summary",media:"media",pricingInventory:"pricingInventory",productIdentifiers:"productIdentifiers",shipping:"shipping",seo:"seo",deliveryEvent:"deliveryEvent",variantOptions:"variantOptions",tagsAndCategory:"tagsAndCategory"},w=[{label:"Summary",value:s.summary},{label:"Images & Gallery",value:s.media},{label:"Pricing & Inventory",value:s.pricingInventory}];function S({className:e}){return r.jsx("div",{className:l("sticky top-[68px] z-20 border-b border-gray-300 bg-white py-0 font-medium text-gray-500 @2xl:top-[72px] dark:bg-gray-50 2xl:top-20",e),children:r.jsx(b,{children:r.jsx("div",{className:"inline-grid grid-flow-col gap-5 md:gap-7 lg:gap-10",children:w.map((t,i)=>r.jsx(v,{to:t.value,spy:!0,hashSpy:!0,smooth:!0,offset:i===0?-250:-150,duration:500,className:"relative cursor-pointer whitespace-nowrap py-4 hover:text-gray-1000",activeClass:"active before:absolute before:bottom-0 before:left-0 before:z-[1] before:h-0.5 before:w-full before:bg-gray-1000 font-semibold text-gray-1000",children:h(t.label)},t.value))})})})}const P="-mx-4 md:-mx-5 lg:-mx-6 3xl:-mx-8 4xl:-mx-10";function B({isLoading:e,altBtnText:t="Save as Draft",submitBtnText:i="Submit",className:a,handleAltBtn:o}){return r.jsx("div",{className:l("sticky bottom-0 left-0 right-0 -mb-8 flex items-center justify-end gap-4 border-t bg-white px-4 py-4 dark:bg-gray-50 md:px-5 lg:px-6 3xl:px-8 4xl:px-10",a,P),children:r.jsx(k,{type:"submit",isLoading:e,className:"w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100",children:i})})}function $({product:e,className:t,categories:i,handleSubmit:a,data:o,errors:m,isLoading:n,handleChange:p,handleSelect:d,handleDescription:c,handleImages:x,handleSize:g,isClearFiles:u,selectedCategory:f,buttonTitle:y="Update Product"}){return r.jsxs("div",{className:"@container",children:[r.jsx(S,{}),r.jsxs("form",{onSubmit:a,className:l("[&_label.block>span]:font-medium",t),children:[r.jsxs("div",{className:"mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11",children:[r.jsx("div",{id:"summary",className:"pt-7 @2xl:pt-9 @3xl:pt-11",children:r.jsx(j,{data:o,errors:m,handleChange:p,handleSelect:d,handleDescription:c,selectedCategory:f,categories:i})}),r.jsx("div",{id:"media",className:"pt-7 @2xl:pt-9 @3xl:pt-11",children:r.jsx(N,{product:e,handleImages:x,errors:m,isClearFiles:u})}),r.jsx("div",{id:"pricingInventory",className:"pt-7 @2xl:pt-9 @3xl:pt-11",children:r.jsx(I,{data:o,errors:m,handleChange:p,handleSize:g,className:"mb-10"})})]}),r.jsx(B,{isLoading:n,submitBtnText:y})]})]})}export{$ as default};