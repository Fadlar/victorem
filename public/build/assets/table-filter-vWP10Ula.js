import{r as f,j as e}from"./app-kHpnk0Pn.js";import{a as C}from"./delete-popover-AOK2rmJg.js";import{m as d,C as F}from"./index.esm-lc2mGIpf.js";import{n as j,V as b}from"./index-xSa8mfDq.js";import{c as v}from"./class-names-ryfOvXuX.js";import{_ as k}from"./useMedia-5eA1lWOg.js";import"./objectWithoutPropertiesLoose-mgTyI0mA.js";import"./lang-5KgLvTvV.js";import"./transition-Wxoqj6O_.js";import"./dialog-IN25Flg0.js";function S({isOpen:t,drawerTitle:i,hasSearched:n,setOpenDrawer:o,children:p}){return e.jsx(e.Fragment,{})}function W({searchTerm:t,onSearchClear:i,onSearchChange:n,columns:o,checkedColumns:p,setCheckedColumns:h,hideIndex:g,drawerTitle:N="Table Filters",hasSearched:y,enableDrawerFilter:s=!1,showSearchOnTheRight:m=!1,menu:c,children:a}){const r=k("(max-width: 1860px)",!1),[l,w]=f.useState(!0),[x,u]=f.useState(!1);return e.jsxs("div",{className:"table-filter mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[m?null:e.jsx(j,{type:"search",placeholder:"Search by anything...",value:t,onClear:i,onChange:n,inputClassName:"h-9",clearable:!0,prefix:e.jsx(d,{className:"h-4 w-4"})}),m&&s?e.jsx(e.Fragment,{children:c||null}):null,a&&e.jsx(e.Fragment,{children:r||s?e.jsx(S,{isOpen:x,setOpenDrawer:u,drawerTitle:N,hasSearched:y,children:a}):e.jsx(e.Fragment,{children:l?a:null})})]}),e.jsxs("div",{className:"ms-4 flex flex-shrink-0 items-center",children:[m?e.jsx(j,{type:"search",placeholder:"Search by anything...",value:t,onClear:i,onChange:n,inputClassName:"h-9",clearable:!0,prefix:e.jsx(d,{className:"h-4 w-4"}),className:"me-2.5"}):null,a?e.jsxs(b,{...r||s?{onClick:()=>{u(()=>!x)}}:{onClick:()=>w(()=>!l)},variant:"outline",className:v("me-2.5 h-9 pe-3 ps-2.5",!(r||s)&&l&&"border-dashed border-gray-700"),children:[e.jsx(F,{className:"me-1.5 h-[18px] w-[18px]",strokeWidth:1.7}),!(r||s)&&l?"Hide Filters":"Filters"]}):null,e.jsx(C,{columns:o,checkedColumns:p,setCheckedColumns:h,hideIndex:g})]})]})}export{W as default};
