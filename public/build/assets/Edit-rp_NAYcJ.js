import{r as o,j as i,d as I,y as h}from"./app-2UknqXgy.js";import{A as D}from"./App-OpPn3YkP.js";import{V as H}from"./index-CkMAcVi9.js";import{r as c}from"./routes-0mvJeivy.js";import{P as A}from"./page-header-mh2v6ut1.js";import{n as f}from"./notification-n4E3ZUKo.js";import L from"./edit-product-form-R1SrcONd.js";import"./index.esm-uZtfluGa.js";import"./lang-ZDB8uS83.js";import"./use-event-listener-VHGz5w7M.js";import"./constants-lPtH_bX3.js";import"./useMedia-M6gaiTeb.js";import"./index-R8Sv_q1I.js";/* empty css                      */import"./index-OfqHdAuq.js";import"./transition-ocz20r5l.js";import"./dialog-ZsqB_iXW.js";import"./index-bSPnhf_t.js";import"./product-summary-m10n70dc.js";import"./InputError-iSpwlnJD.js";import"./form-group-7tooBdgQ.js";import"./listbox-xRxU4zRi.js";import"./product-media-5rm9MBKH.js";import"./FileUpload-lWAp9xYL.js";import"./product-image-list-K625HVrG.js";import"./utils-FzIoAioV.js";import"./objectWithoutPropertiesLoose-qiKziPFZ.js";import"./defineProperty-VwQjyvUu.js";import"./pricing-inventory-pI_oAIgs.js";import"./react-number-format.es-jsVA24o-.js";import"./form-footer-a3Twr-H9.js";const S={title:"Edit Product",breadcrumb:[{href:"#",name:"Home"},{href:c.eCommerce.products,name:"Products"},{name:"Edit"}]};function de({product:t,categories:C}){const[n,p]=o.useState(t.categories??[]),[r,a]=o.useState({name:t.name??"",description:t.description??"",categories:t.categories??[],customer_price:t.customer_price??"",agent_price:t.agent_price??"",stock:t.stock??"",weight:t.weight??""}),[w,l]=o.useState([]),[P,b]=o.useState(!1),[x,d]=o.useState(!1),[E,u]=o.useState(null),_=e=>{a({...r,[e.target.name]:e.target.value})},y=e=>{n.some(s=>s.id===e.id)?v(e.id):p(s=>{const g=s.concat(e);return a({...r,categories:g}),g})},j=e=>{a({...r,description:e})},k=e=>{l(e)},v=e=>{p(m=>m.filter(s=>s.id!==e))},F=e=>{e.preventDefault(),h.post(c.eCommerce.updateProduct(t.slug),{_method:"patch",name:r.name,categories:r.categories,description:r.description,customer_price:r.customer_price,agent_price:r.agent_price,stock:r.stock,weight:r.weight,images:w},{preserveScroll:!0,onSuccess:()=>{f("Product has been updated.","success"),a({}),u({}),l([]),b(!0),h.visit(c.eCommerce.editProduct(t.slug),{only:["product"]})},onStart:()=>d(!0),onFinish:()=>d(!1),onError:m=>{f("Something went wrong.","error"),u(m)}})};return i.jsxs(D,{title:"Edit Product",children:[i.jsx(A,{title:S.title,breadcrumb:S.breadcrumb,children:i.jsx(I,{href:c.eCommerce.products,className:"mt-4 w-full @lg:mt-0 @lg:w-auto",children:i.jsx(H,{tag:"span",className:"w-full @lg:w-auto",variant:"outline",children:"Cancel"})})}),i.jsx(L,{handleSubmit:F,data:r,errors:E,isLoading:x,handleChange:_,handleSelect:y,handleDescription:j,isClearFiles:P,product:t,categories:C,selectedCategory:n,handleImages:k})]})}export{de as default};
