import{r as g,W as I,j as n,d as R,y as V}from"./app-kHpnk0Pn.js";import{A as L}from"./App-KU6meY23.js";import{V as N}from"./index-xSa8mfDq.js";import{r as p}from"./routes-0mvJeivy.js";import{P as T}from"./page-header-F4_Q8xur.js";import{n as f}from"./notification-klzMqe0S.js";import W from"./edit-product-form-NsQO_RMM.js";import"./app-9CQCoNsK.js";import"./index.esm-lc2mGIpf.js";import"./class-names-ryfOvXuX.js";import"./use-event-listener-LdyNP7-S.js";import"./constants-lPtH_bX3.js";import"./lang-5KgLvTvV.js";import"./useMedia-5eA1lWOg.js";import"./index-bENqKbEs.js";/* empty css                      */import"./index-y83LnfL2.js";import"./transition-Wxoqj6O_.js";import"./dialog-IN25Flg0.js";import"./index-K3fzOL2D.js";import"./product-summary-rNJ66Fk4.js";import"./InputError-AT-Wt37y.js";import"./form-group-nfI7twjK.js";import"./listbox-I9oXBZYU.js";import"./product-media-qrCW7VX8.js";import"./FileUpload-m9VpoQdZ.js";import"./product-image-list-DJWuhPHB.js";import"./utils-FzIoAioV.js";import"./objectWithoutPropertiesLoose-mgTyI0mA.js";import"./pricing-inventory-d0Z3yrhk.js";import"./react-number-format.es-7uiNrsd-.js";const h={title:"Add Product",breadcrumb:[{href:"#",name:"Home"},{href:p.eCommerce.products,name:"Products"},{name:"Create"}]};function Se({product:C,categories:S}){const[d,l]=g.useState([]),{data:r,setData:i,errors:P,reset:x,processing:b,post:y,clearErrors:j}=I({name:"",description:"",categories:[],price:0,discount:0,discount_percent:0,weight:0,images:[],sizes:[]}),[w,E]=g.useState(!1),F=e=>{const{name:s,value:t}=e.target;if(s==="discount"){const o=parseFloat(r.price.toString().replace(/\,/g,"")),c=t.toString().replace(/\,/g,"")/o*100;i({...r,discount:t,discount_percent:c})}else if(s==="discount_percent"){const c=parseFloat(r.price.toString().replace(/\,/g,""))*(t/100);i({...r,discount:c,discount_percent:t})}else i({...r,[s]:t})},v=e=>{d.some(t=>t.id===e.id)?k(e.id):l(t=>{const o=t.concat(e);return i({...r,categories:o}),o})},z=e=>{i({...r,description:e})},A=e=>{i({...r,images:e})},_=(e,s)=>{const{name:t,value:o}=e.target;i(c=>{const a=[...c.sizes],u=a.findIndex(m=>m.name===s);u!==-1?a[u][t]=o:a.push({name:s,stock:o});const H=a.filter(m=>m.stock!==null&&m.stock!=="");return{...c,sizes:H}})},k=e=>{l(s=>{const t=s.filter(o=>o.id!==e);return i({...r,categories:t}),t})},D=e=>{e.preventDefault(),y(p.eCommerce.products,{preserveScroll:!0,onSuccess:()=>{f("Product has been created.","success"),x(),j(),E(!0),V.visit(p.eCommerce.products,{only:["products"]})},onError:()=>f("Something went wrong","error")})};return n.jsxs(L,{title:"Add Product",children:[n.jsx(T,{title:h.title,breadcrumb:h.breadcrumb,children:n.jsx(R,{href:p.eCommerce.categories,className:"mt-4 w-full @lg:mt-0 @lg:w-auto",children:n.jsx(N,{tag:"span",className:"w-full @lg:w-auto",variant:"outline",children:"Cancel"})})}),n.jsx(W,{handleSubmit:D,data:r,errors:P,isLoading:b,handleChange:F,handleSelect:v,handleDescription:z,handleSize:_,isClearFiles:w,product:C,categories:S,selectedCategory:d,handleImages:A,buttonTitle:"Create Product"})]})}export{Se as default};
