import{R as p,r as R,j as b}from"./app-NZ2NpT9t.js";import{d as Ie}from"./index.esm-JqGhFYUb.js";import{_ as Se,a as M}from"./objectWithoutPropertiesLoose-0VpOByGv.js";import{_ as de,a as he,b as ve,c as d,d as fe,e as E}from"./createSuper-unE3q42P.js";import{_ as c}from"./defineProperty-9_qlZ_aL.js";import{p as Ee}from"./table-hf8euEO4.js";import{c as V}from"./class-names-zUl3OLOi.js";import{S as je}from"./select-wYEZGn2Z.js";import"./index-QcYY8NJ7.js";import"./transition-hzLCq6B9.js";import"./dialog-V6YP2pjW.js";import"./lang-f8Sp7Z3Y.js";import"./isString-uVlGihNP.js";import"./isTypedArray-_VjyL2x9.js";import"./isNumber-a6Y14N7s.js";import"./use-event-listener-k3gDFRfB.js";import"./listbox-S4T_3ONW.js";var T={ZERO:48,NINE:57,NUMPAD_ZERO:96,NUMPAD_NINE:105,BACKSPACE:8,DELETE:46,ENTER:13,ARROW_UP:38,ARROW_DOWN:40};const we={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};var Y=function(g){de(l,g);var s=he(l);function l(){var n;ve(this,l);for(var e=arguments.length,t=new Array(e),m=0;m<e;m++)t[m]=arguments[m];return n=s.call.apply(s,[this].concat(t)),c(d(n),"state",{goInputText:""}),c(d(n),"getValidValue",function(){var i=n.state.goInputText;return!i||Number.isNaN(i)?void 0:Number(i)}),c(d(n),"buildOptionText",function(i){return"".concat(i," ").concat(n.props.locale.items_per_page)}),c(d(n),"changeSize",function(i){n.props.changeSize(Number(i))}),c(d(n),"handleChange",function(i){n.setState({goInputText:i.target.value})}),c(d(n),"handleBlur",function(i){var u=n.props,a=u.goButton,r=u.quickGo,o=u.rootPrefixCls,f=n.state.goInputText;a||f===""||(n.setState({goInputText:""}),!(i.relatedTarget&&(i.relatedTarget.className.indexOf("".concat(o,"-item-link"))>=0||i.relatedTarget.className.indexOf("".concat(o,"-item"))>=0))&&r(n.getValidValue()))}),c(d(n),"go",function(i){var u=n.state.goInputText;u!==""&&(i.keyCode===T.ENTER||i.type==="click")&&(n.setState({goInputText:""}),n.props.quickGo(n.getValidValue()))}),n}return fe(l,[{key:"getPageSizeOptions",value:function(){var e=this.props,t=e.pageSize,m=e.pageSizeOptions;return m.some(function(i){return i.toString()===t.toString()})?m:m.concat([t.toString()]).sort(function(i,u){var a=Number.isNaN(Number(i))?0:Number(i),r=Number.isNaN(Number(u))?0:Number(u);return a-r})}},{key:"render",value:function(){var e=this,t=this.props,m=t.pageSize,i=t.locale,u=t.rootPrefixCls,a=t.changeSize,r=t.quickGo,o=t.goButton,f=t.selectComponentClass,h=t.buildOptionText,x=t.selectPrefixCls,I=t.disabled,z=this.state.goInputText,C="".concat(u,"-options"),k=f,D=null,K=null,B=null;if(!a&&!r)return null;var A=this.getPageSizeOptions();if(a&&k){var W=A.map(function(_,v){return p.createElement(k.Option,{key:v,value:_.toString()},(h||e.buildOptionText)(_))});D=p.createElement(k,{disabled:I,prefixCls:x,showSearch:!1,className:"".concat(C,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(m||A[0]).toString(),onChange:this.changeSize,getPopupContainer:function(v){return v.parentNode},"aria-label":i.page_size,defaultOpen:!1},W)}return r&&(o&&(B=typeof o=="boolean"?p.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:I,className:"".concat(C,"-quick-jumper-button")},i.jump_to_confirm):p.createElement("span",{onClick:this.go,onKeyUp:this.go},o)),K=p.createElement("div",{className:"".concat(C,"-quick-jumper")},i.jump_to,p.createElement("input",{disabled:I,type:"text",value:z,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":i.page}),i.page,B)),p.createElement("li",{className:"".concat(C)},D,K)}}]),l}(p.Component);c(Y,"defaultProps",{pageSizeOptions:["10","20","50","100"]});var q=function(s){var l,n=s.rootPrefixCls,e=s.page,t=s.active,m=s.className,i=s.showTitle,u=s.onClick,a=s.onKeyPress,r=s.itemRender,o="".concat(n,"-item"),f=E(o,"".concat(o,"-").concat(e),(l={},c(l,"".concat(o,"-active"),t),c(l,"".concat(o,"-disabled"),!e),c(l,s.className,m),l)),h=function(){u(e)},x=function(C){a(C,u,e)},I=r(e,"page",p.createElement("a",{rel:"nofollow"},e));return I?p.createElement("li",{title:i?e.toString():null,className:f,onClick:h,onKeyPress:x,tabIndex:0},I):null};function H(){}function me(g){var s=Number(g);return typeof s=="number"&&!Number.isNaN(s)&&isFinite(s)&&Math.floor(s)===s}var ze=function(s,l,n){return n};function j(g,s,l){var n=typeof g>"u"?s.pageSize:g;return Math.floor((l.total-1)/n)+1}var xe=function(g){de(l,g);var s=he(l);function l(n){var e;ve(this,l),e=s.call(this,n),c(d(e),"paginationNode",p.createRef()),c(d(e),"getJumpPrevPage",function(){return Math.max(1,e.state.current-(e.props.showLessItems?3:5))}),c(d(e),"getJumpNextPage",function(){return Math.min(j(void 0,e.state,e.props),e.state.current+(e.props.showLessItems?3:5))}),c(d(e),"getItemIcon",function(a,r){var o=e.props.prefixCls,f=a||p.createElement("button",{type:"button","aria-label":r,className:"".concat(o,"-item-link")});return typeof a=="function"&&(f=p.createElement(a,Se({},e.props))),f}),c(d(e),"isValid",function(a){var r=e.props.total;return me(a)&&a!==e.state.current&&me(r)&&r>0}),c(d(e),"shouldDisplayQuickJumper",function(){var a=e.props,r=a.showQuickJumper,o=a.total,f=e.state.pageSize;return o<=f?!1:r}),c(d(e),"handleKeyDown",function(a){(a.keyCode===T.ARROW_UP||a.keyCode===T.ARROW_DOWN)&&a.preventDefault()}),c(d(e),"handleKeyUp",function(a){var r=e.getValidValue(a),o=e.state.currentInputValue;r!==o&&e.setState({currentInputValue:r}),a.keyCode===T.ENTER?e.handleChange(r):a.keyCode===T.ARROW_UP?e.handleChange(r-1):a.keyCode===T.ARROW_DOWN&&e.handleChange(r+1)}),c(d(e),"handleBlur",function(a){var r=e.getValidValue(a);e.handleChange(r)}),c(d(e),"changePageSize",function(a){var r=e.state.current,o=j(a,e.state,e.props);r=r>o?o:r,o===0&&(r=e.state.current),typeof a=="number"&&("pageSize"in e.props||e.setState({pageSize:a}),"current"in e.props||e.setState({current:r,currentInputValue:r})),e.props.onShowSizeChange(r,a),"onChange"in e.props&&e.props.onChange&&e.props.onChange(r,a)}),c(d(e),"handleChange",function(a){var r=e.props,o=r.disabled,f=r.onChange,h=e.state,x=h.pageSize,I=h.current,z=h.currentInputValue;if(e.isValid(a)&&!o){var C=j(void 0,e.state,e.props),k=a;return a>C?k=C:a<1&&(k=1),"current"in e.props||e.setState({current:k}),k!==z&&e.setState({currentInputValue:k}),f(k,x),k}return I}),c(d(e),"prev",function(){e.hasPrev()&&e.handleChange(e.state.current-1)}),c(d(e),"next",function(){e.hasNext()&&e.handleChange(e.state.current+1)}),c(d(e),"jumpPrev",function(){e.handleChange(e.getJumpPrevPage())}),c(d(e),"jumpNext",function(){e.handleChange(e.getJumpNextPage())}),c(d(e),"hasPrev",function(){return e.state.current>1}),c(d(e),"hasNext",function(){return e.state.current<j(void 0,e.state,e.props)}),c(d(e),"runIfEnter",function(a,r){if(a.key==="Enter"||a.charCode===13){for(var o=arguments.length,f=new Array(o>2?o-2:0),h=2;h<o;h++)f[h-2]=arguments[h];r.apply(void 0,f)}}),c(d(e),"runIfEnterPrev",function(a){e.runIfEnter(a,e.prev)}),c(d(e),"runIfEnterNext",function(a){e.runIfEnter(a,e.next)}),c(d(e),"runIfEnterJumpPrev",function(a){e.runIfEnter(a,e.jumpPrev)}),c(d(e),"runIfEnterJumpNext",function(a){e.runIfEnter(a,e.jumpNext)}),c(d(e),"handleGoTO",function(a){(a.keyCode===T.ENTER||a.type==="click")&&e.handleChange(e.state.currentInputValue)}),c(d(e),"renderPrev",function(a){var r=e.props,o=r.prevIcon,f=r.itemRender,h=f(a,"prev",e.getItemIcon(o,"prev page")),x=!e.hasPrev();return R.isValidElement(h)?R.cloneElement(h,{disabled:x}):h}),c(d(e),"renderNext",function(a){var r=e.props,o=r.nextIcon,f=r.itemRender,h=f(a,"next",e.getItemIcon(o,"next page")),x=!e.hasNext();return R.isValidElement(h)?R.cloneElement(h,{disabled:x}):h});var t=n.onChange!==H,m="current"in n;m&&!t&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var i=n.defaultCurrent;"current"in n&&(i=n.current);var u=n.defaultPageSize;return"pageSize"in n&&(u=n.pageSize),i=Math.min(i,j(u,void 0,n)),e.state={current:i,currentInputValue:i,pageSize:u},e}return fe(l,[{key:"componentDidUpdate",value:function(e,t){var m=this.props.prefixCls;if(t.current!==this.state.current&&this.paginationNode.current){var i=this.paginationNode.current.querySelector(".".concat(m,"-item-").concat(t.current));if(i&&document.activeElement===i){var u;i==null||(u=i.blur)===null||u===void 0||u.call(i)}}}},{key:"getValidValue",value:function(e){var t=e.target.value,m=j(void 0,this.state,this.props),i=this.state.currentInputValue,u;return t===""?u=t:Number.isNaN(Number(t))?u=i:t>=m?u=m:u=Number(t),u}},{key:"getShowSizeChanger",value:function(){var e=this.props,t=e.showSizeChanger,m=e.total,i=e.totalBoundaryShowSizeChanger;return typeof t<"u"?t:m>i}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,m=e.className,i=e.style,u=e.disabled,a=e.hideOnSinglePage,r=e.total,o=e.locale,f=e.showQuickJumper,h=e.showLessItems,x=e.showTitle,I=e.showTotal,z=e.simple,C=e.itemRender,k=e.showPrevNextJumpers,D=e.jumpPrevIcon,K=e.jumpNextIcon,B=e.selectComponentClass,A=e.selectPrefixCls,W=e.pageSizeOptions,_=this.state,v=_.current,O=_.pageSize,ye=_.currentInputValue;if(a===!0&&r<=O)return null;var y=j(void 0,this.state,this.props),P=[],X=null,ee=null,te=null,ae=null,J=null,G=f&&f.goButton,S=h?1:2,ne=v-1>0?v-1:0,ie=v+1<y?v+1:y,re=Ee(this.props,{aria:!0,data:!0}),oe=I&&p.createElement("li",{className:"".concat(t,"-total-text")},I(r,[r===0?0:(v-1)*O+1,v*O>r?r:v*O]));if(z){G&&(typeof G=="boolean"?J=p.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},o.jump_to_confirm):J=p.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},G),J=p.createElement("li",{title:x?"".concat(o.jump_to).concat(v,"/").concat(y):null,className:"".concat(t,"-simple-pager")},J));var ce=this.renderPrev(ne);return p.createElement("ul",M({className:E(t,"".concat(t,"-simple"),c({},"".concat(t,"-disabled"),u),m),style:i,ref:this.paginationNode},re),oe,ce?p.createElement("li",{title:x?o.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:E("".concat(t,"-prev"),c({},"".concat(t,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},ce):null,p.createElement("li",{title:x?"".concat(v,"/").concat(y):null,className:"".concat(t,"-simple-pager")},p.createElement("input",{type:"text",value:ye,disabled:u,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:3}),p.createElement("span",{className:"".concat(t,"-slash")},"/"),y),p.createElement("li",{title:x?o.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:E("".concat(t,"-next"),c({},"".concat(t,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(ie)),p.createElement(Y,{disabled:u,locale:o,rootPrefixCls:t,selectComponentClass:B,selectPrefixCls:A,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:v,pageSize:O,pageSizeOptions:W,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:J}))}if(y<=3+S*2){var se={locale:o,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:x,itemRender:C};y||P.push(p.createElement(q,M({},se,{key:"noPager",page:1,className:"".concat(t,"-item-disabled")})));for(var L=1;L<=y;L+=1){var Ce=v===L;P.push(p.createElement(q,M({},se,{key:L,page:L,active:Ce})))}}else{var Ne=h?o.prev_3:o.prev_5,Pe=h?o.next_3:o.next_5,le=C(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(D,"prev page")),ue=C(this.getJumpNextPage(),"jump-next",this.getItemIcon(K,"next page"));k&&(X=le?p.createElement("li",{title:x?Ne:null,key:"prev",onClick:this.jumpPrev,tabIndex:0,onKeyPress:this.runIfEnterJumpPrev,className:E("".concat(t,"-jump-prev"),c({},"".concat(t,"-jump-prev-custom-icon"),!!D))},le):null,ee=ue?p.createElement("li",{title:x?Pe:null,key:"next",tabIndex:0,onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:E("".concat(t,"-jump-next"),c({},"".concat(t,"-jump-next-custom-icon"),!!K))},ue):null),ae=p.createElement(q,{locale:o,last:!0,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:y,page:y,active:!1,showTitle:x,itemRender:C}),te=p.createElement(q,{locale:o,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:x,itemRender:C});var $=Math.max(1,v-S),F=Math.min(v+S,y);v-1<=S&&(F=1+S*2),y-v<=S&&($=y-S*2);for(var U=$;U<=F;U+=1){var ke=v===U;P.push(p.createElement(q,{locale:o,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:U,page:U,active:ke,showTitle:x,itemRender:C}))}v-1>=S*2&&v!==3&&(P[0]=R.cloneElement(P[0],{className:"".concat(t,"-item-after-jump-prev")}),P.unshift(X)),y-v>=S*2&&v!==y-2&&(P[P.length-1]=R.cloneElement(P[P.length-1],{className:"".concat(t,"-item-before-jump-next")}),P.push(ee)),$!==1&&P.unshift(te),F!==y&&P.push(ae)}var Q=!this.hasPrev()||!y,Z=!this.hasNext()||!y,pe=this.renderPrev(ne),ge=this.renderNext(ie);return p.createElement("ul",M({className:E(t,m,c({},"".concat(t,"-disabled"),u)),style:i,ref:this.paginationNode},re),oe,pe?p.createElement("li",{title:x?o.prev_page:null,onClick:this.prev,tabIndex:Q?null:0,onKeyPress:this.runIfEnterPrev,className:E("".concat(t,"-prev"),c({},"".concat(t,"-disabled"),Q)),"aria-disabled":Q},pe):null,P,ge?p.createElement("li",{title:x?o.next_page:null,onClick:this.next,tabIndex:Z?null:0,onKeyPress:this.runIfEnterNext,className:E("".concat(t,"-next"),c({},"".concat(t,"-disabled"),Z)),"aria-disabled":Z},ge):null,p.createElement(Y,{disabled:u,locale:o,rootPrefixCls:t,selectComponentClass:B,selectPrefixCls:A,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:v,pageSize:O,pageSizeOptions:W,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:G}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var m={};if("current"in e&&(m.current=e.current,e.current!==t.current&&(m.currentInputValue=m.current)),"pageSize"in e&&e.pageSize!==t.pageSize){var i=t.current,u=j(e.pageSize,t,e);i=i>u?u:i,"current"in e||(m.current=i,m.currentInputValue=i),m.pageSize=e.pageSize}return m}}]),l}(p.Component);c(xe,"defaultProps",{defaultCurrent:1,total:0,defaultPageSize:10,onChange:H,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:H,locale:we,style:{},itemRender:ze,totalBoundaryShowSizeChanger:50});const _e=xe,w={base:{item:"[&>.rc-pagination-item>a]:text-gray-700 [&>.rc-pagination-item>a]:font-medium [&>li.rc-pagination-item]:border-gray-300 [&>.rc-pagination-item>a]:hover:text-gray-900 [&>.rc-pagination-item>a]:focus:text-gray-700 [&>.rc-pagination-item:not(.rc-pagination-item-active)]:bg-transparent",icon:"[&>.rc-pagination-prev]:align-baseline [&>.rc-pagination-next]:align-baseline",outline:"[&>.rc-pagination-item]:leading-7 [&>.rc-pagination-item]:border-0",jumperDiv:"[&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper]:text-gray-500",jumperInput:"[&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:!py-[3px] [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:text-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:border-gray-300 [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:ring-0"},rounded:{none:"[&>.rc-pagination-item]:rounded-none [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-none",sm:"[&>.rc-pagination-item]:rounded-sm [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-sm",DEFAULT:"[&>.rc-pagination-item]:rounded-md [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-md",lg:"[&>.rc-pagination-item]:rounded-lg [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-lg",full:"[&>.rc-pagination-item]:rounded-full [&>.rc-pagination-options>.rc-pagination-options-quick-jumper>input]:rounded-full"},variant:{solid:{base:"[&>.rc-pagination-item-active>a]:!text-gray-0 [&>.rc-pagination-item-active>a]:hover:text-gray-0",color:{DEFAULT:"[&>.rc-pagination-item-active]:bg-gray-900 [&>li.rc-pagination-item-active]:border-gray-900 [&>.rc-pagination-item-active]:hover:border-gray-900 [&>.rc-pagination-item-active]:focus:border-gray-900 dark:[&>.rc-pagination-item-active]:bg-gray-200 dark:[&>.rc-pagination-item-active>a]:!text-gray-700 dark:[&>.rc-pagination-item-active>a]:hover:text-gray-700 dark:[&>li.rc-pagination-item-active]:border-gray-200 dark:[&>.rc-pagination-item-active]:hover:border-gray-200 dark:[&>.rc-pagination-item-active]:focus:border-gray-200",primary:"[&>.rc-pagination-item-active]:bg-primary  [&>li.rc-pagination-item-active]:border-primary [&>.rc-pagination-item-active]:hover:border-primary [&>.rc-pagination-item-active]:focus:border-primary",secondary:"[&>.rc-pagination-item-active]:bg-secondary [&>li.rc-pagination-item-active]:border-secondary [&>.rc-pagination-item-active]:hover:border-secondary [&>.rc-pagination-item-active]:focus:border-secondary",danger:"[&>.rc-pagination-item-active]:bg-red [&>li.rc-pagination-item-active]:border-red [&>.rc-pagination-item-active]:hover:border-red [&>.rc-pagination-item-active]:focus:border-red",info:"[&>.rc-pagination-item-active]:bg-blue [&>li.rc-pagination-item-active]:border-blue [&>.rc-pagination-item-active]:hover:border-blue [&>.rc-pagination-item-active]:focus:border-blue",success:"[&>.rc-pagination-item-active]:bg-green [&>li.rc-pagination-item-active]:border-green [&>.rc-pagination-item-active]:hover:border-green [&>.rc-pagination-item-active]:focus:border-green",warning:"[&>.rc-pagination-item-active]:bg-orange [&>li.rc-pagination-item-active]:border-orange [&>.rc-pagination-item-active]:hover:border-orange [&>.rc-pagination-item-active]:focus:border-orange"}},flat:{base:"",color:{DEFAULT:"[&>.rc-pagination-item-active]:bg-gray-100 [&>li.rc-pagination-item-active]:border-gray-100 [&>.rc-pagination-item-active>a]:!text-gray-900 [&>.rc-pagination-item-active>a]:hover:!text-gray-900 [&>.rc-pagination-item-active>a]:focus:!text-gray-900 [&>.rc-pagination-item-active]:hover:border-gray-100 [&>.rc-pagination-item-active]:focus:border-gray-100",primary:"[&>.rc-pagination-item-active]:bg-primary-lighter [&>li.rc-pagination-item-active]:border-primary-lighter [&>.rc-pagination-item-active>a]:text-primary-dark [&>.rc-pagination-item-active>a]:hover:text-primary-dark [&>.rc-pagination-item-active>a]:focus:text-primary-dark [&>.rc-pagination-item-active]:hover:border-primary-lighter [&>.rc-pagination-item-active]:focus:border-primary-lighter",secondary:"[&>.rc-pagination-item-active]:bg-secondary-lighter [&>li.rc-pagination-item-active]:border-secondary-lighter [&>.rc-pagination-item-active>a]:text-secondary-dark [&>.rc-pagination-item-active>a]:hover:text-secondary-dark [&>.rc-pagination-item-active>a]:focus:text-secondary-dark [&>.rc-pagination-item-active]:hover:border-secondary-lighter [&>.rc-pagination-item-active]:focus:border-secondary-lighter",danger:"[&>.rc-pagination-item-active]:bg-red-lighter [&>li.rc-pagination-item-active]:border-red-lighter [&>.rc-pagination-item-active>a]:text-red-dark [&>.rc-pagination-item-active>a]:hover:text-red-dark [&>.rc-pagination-item-active>a]:focus:text-red-dark [&>.rc-pagination-item-active]:hover:border-red-lighter [&>.rc-pagination-item-active]:focus:border-red-lighter",info:"[&>.rc-pagination-item-active]:bg-blue-lighter [&>li.rc-pagination-item-active]:border-blue-lighter [&>.rc-pagination-item-active>a]:text-blue-dark [&>.rc-pagination-item-active>a]:hover:text-blue-dark [&>.rc-pagination-item-active>a]:focus:text-blue-dark [&>.rc-pagination-item-active]:hover:border-blue-lighter [&>.rc-pagination-item-active]:focus:border-blue-lighter",success:"[&>.rc-pagination-item-active]:bg-green-lighter [&>li.rc-pagination-item-active]:border-green-lighter [&>.rc-pagination-item-active>a]:text-green-dark [&>.rc-pagination-item-active>a]:hover:text-green-dark [&>.rc-pagination-item-active>a]:focus:text-green-dark [&>.rc-pagination-item-active]:hover:border-green-lighter [&>.rc-pagination-item-active]:focus:border-green-lighter",warning:"[&>.rc-pagination-item-active]:bg-orange-lighter [&>li.rc-pagination-item-active]:border-orange-lighter [&>.rc-pagination-item-active>a]:text-orange-dark [&>.rc-pagination-item-active>a]:hover:text-orange-dark [&>.rc-pagination-item-active>a]:focus:text-orange-dark [&>.rc-pagination-item-active]:hover:border-orange-lighter [&>.rc-pagination-item-active]:focus:border-orange-lighter"}}}},N={base:"text-gray-500",outline:"border border-gray-300 p-[5px]",center:"inline-block align-middle",rounded:{none:"rounded-none",sm:"rounded-sm",DEFAULT:"rounded-md",lg:"rounded-lg",full:"rounded-full"}},Te=({icon:g,rounded:s,outline:l,className:n})=>b.jsx("div",{className:V(N.base,l?N.outline:N.center,N.rounded[s],n),children:g||b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"m-auto h-4 w-4 rtl:-rotate-180",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})})}),Oe=({icon:g,rounded:s,outline:l,className:n})=>b.jsx("div",{className:V(N.base,l?N.outline:N.center,N.rounded[s],n),children:g||b.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"m-auto h-4 w-4 rtl:rotate-180",children:b.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})})}),Re=({icon:g,rounded:s,outline:l,className:n})=>b.jsx("div",{className:V(N.base,l?N.outline:N.center,N.rounded[s],!g&&l&&"py-0 leading-[26px]",n),children:g||"•••"}),Ve=({icon:g,rounded:s,outline:l,className:n})=>b.jsx("div",{className:V(N.base,l?N.outline:N.center,N.rounded[s],!g&&l&&"py-0 leading-[26px]",n),children:g||"•••"}),De={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};function be({outline:g=!1,rounded:s="DEFAULT",variant:l="solid",color:n="DEFAULT",locale:e,nextIcon:t,prevIcon:m,prevIconClassName:i,nextIconClassName:u,jumpPrevIcon:a,jumpNextIcon:r,jumpPrevIconClassName:o,jumpNextIconClassName:f,className:h,...x}){return b.jsx(_e,{locale:e||De,nextIcon:b.jsx(Oe,{icon:t,rounded:s,outline:g,className:u}),prevIcon:b.jsx(Te,{icon:m,rounded:s,outline:g,className:i}),jumpPrevIcon:b.jsx(Re,{icon:a,rounded:s,outline:g,className:o}),jumpNextIcon:b.jsx(Ve,{icon:r,rounded:s,outline:g,className:f}),className:V(w.base.item,w.base.jumperDiv,w.base.jumperInput,!g&&w.base.outline,!g&&w.base.icon,w.rounded[s],w.variant[l].base,w.variant[l].color[n],h),...x})}be.displayName="Pagination";const Ke=[5,10,15,20,25].map((g,s)=>({id:s,name:String(g),value:g}));function tt({pageSize:g,setPageSize:s,total:l,paginatorClassName:n="mt-5 xs:mt-6 sm:mt-7",...e}){return l&&l<g?null:b.jsxs("div",{className:V("table-pagination flex items-center justify-center sm:justify-between",n),children:[s?b.jsxs("div",{className:"hidden items-center sm:flex",children:["Rows per page:"," ",b.jsx(je,{options:Ke,onChange:s,size:"sm",variant:"flat",value:g,getOptionValue:({value:t})=>t,suffix:b.jsx(Ie,{}),useContainerWidth:!1,dropdownClassName:"p-1 border w-12 border-gray-100 shadow-lg",className:"ms-1 [&_button]:font-medium"})]}):l&&b.jsxs("div",{className:"hidden text-gray-500 sm:inline-flex",children:[e.current," of ",Math.ceil(l/g)," pages"]}),b.jsx(be,{total:l,pageSize:g,defaultCurrent:1,showLessItems:!0,prevIconClassName:"py-0 text-gray-500 !leading-[26px]",nextIconClassName:"py-0 text-gray-500 !leading-[26px]",...e})]})}export{tt as default};
