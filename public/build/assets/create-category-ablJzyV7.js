import{W as u,j as e,y as x}from"./app-kHpnk0Pn.js";import{F as f}from"./FileUpload-m9VpoQdZ.js";import{I as h}from"./InputError-AT-Wt37y.js";import{r as l}from"./routes-0mvJeivy.js";import{t as r}from"./lang-5KgLvTvV.js";import{n as C}from"./notification-klzMqe0S.js";import{n as y,a as b,V as c}from"./index-xSa8mfDq.js";import"./index.esm-lc2mGIpf.js";import"./index-bENqKbEs.js";import"./index-y83LnfL2.js";import"./class-names-ryfOvXuX.js";import"./transition-Wxoqj6O_.js";import"./dialog-IN25Flg0.js";function S({closeModal:s}){const{data:o,setData:i,errors:t,post:m,processing:p}=u({name:"",description:"",icon:null}),n=a=>{i({...o,[a.target.name]:a.target.value})},g=a=>{i({...o,icon:a[0]})},d=a=>{a.preventDefault(),m(l.eCommerce.categories,{onSuccess:()=>{C("Category has been created.","success"),s(),x.visit(l.eCommerce.categories,{only:["categories"]})}})};return e.jsxs("form",{onSubmit:d,className:"isomorphic-form flex flex-grow flex-col @container",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-3",children:[e.jsx(y,{label:r("Category Name"),name:"name",onChange:n,value:o.name,placeholder:r("Category name"),error:t.name}),e.jsx(b,{label:r("Description"),name:"description",onChange:n,value:o.description,placeholder:r("Description"),error:t.description}),e.jsxs("div",{className:"mb-5",children:[e.jsx(f,{label:"Category Icon",multiple:!1,placeholder:"PNG, JPG, JPEG up to 2MB",onChangeFile:g}),e.jsx(h,{message:t.icon})]})]}),e.jsxs("div",{className:"sticky bottom-0 z-40 flex items-center justify-end gap-3 bg-gray-0/10 backdrop-blur @lg:gap-4 @xl:grid @xl:auto-cols-max @xl:grid-flow-col",children:[e.jsx(c,{variant:"outline",className:"w-full @xl:w-auto",onClick:()=>s(),children:r("Cancel")}),e.jsx(c,{type:"submit",isLoading:p,className:"w-full @xl:w-auto dark:bg-gray-100 dark:text-white dark:active:bg-gray-100",children:r("Create Category")})]})]})}export{S as default};
