import{j as e,r as n,W as j}from"./app-kHpnk0Pn.js";import{I as b}from"./InputError-AT-Wt37y.js";import{I as v}from"./InputLabel-ApQxUf4u.js";import{a as m}from"./transition-Wxoqj6O_.js";import{_ as x}from"./dialog-IN25Flg0.js";import{T as N}from"./TextInput-vPnUbyAI.js";import{n as F}from"./notification-klzMqe0S.js";import"./index-y83LnfL2.js";import"./index.esm-lc2mGIpf.js";import"./class-names-ryfOvXuX.js";import"./lang-5KgLvTvV.js";function f({className:a="",disabled:t,children:s,...o}){return e.jsx("button",{...o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+a,disabled:t,children:s})}function C({children:a,show:t=!1,maxWidth:s="2xl",closeable:o=!0,onClose:r=()=>{}}){const l=()=>{o&&r()},i={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[s];return e.jsx(m,{show:t,as:n.Fragment,leave:"duration-200",children:e.jsxs(x,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:l,children:[e.jsx(m.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"absolute inset-0 bg-gray-500/75"})}),e.jsx(m.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e.jsx(x.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${i}`,children:a})})]})})}function D({type:a="button",className:t="",disabled:s,children:o,...r}){return e.jsx("button",{...r,type:a,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+t,disabled:s,children:o})}function O({className:a=""}){const[t,s]=n.useState(!1),o=n.useRef(),{data:r,setData:l,delete:i,processing:y,reset:u,errors:g}=j({password:""}),h=()=>{s(!0)},w=d=>{d.preventDefault(),i(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>{F("User has been deleted.","success"),c()},onError:()=>{var p;return(p=o.current)==null?void 0:p.focus()},onFinish:()=>u()})},c=()=>{s(!1),u()};return e.jsxs("section",{className:`space-y-6 ${a}`,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e.jsx(f,{onClick:h,children:"Delete Account"}),e.jsx(C,{show:t,onClose:c,children:e.jsxs("form",{onSubmit:w,className:"p-6",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),e.jsxs("div",{className:"mt-6",children:[e.jsx(v,{htmlFor:"password",value:"Password",className:"sr-only"}),e.jsx(N,{id:"password",type:"password",name:"password",ref:o,value:r.password,onChange:d=>l("password",d.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e.jsx(b,{message:g.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-6 flex justify-end",children:[e.jsx(D,{onClick:c,children:"Cancel"}),e.jsx(f,{className:"ms-3",disabled:y,children:"Delete Account"})]})]})})]})}export{O as default};