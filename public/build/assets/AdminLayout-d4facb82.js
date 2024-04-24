import{a as e,d as c,r as h,j as r}from"./app-e54fc346.js";import{A as d}from"./ApplicationLogo-c0ed8e02.js";import{I as l}from"./iconify-51b6e160.js";function t({active:s=!1,className:n="",children:i,...o}){return e(c,{...o,className:"flex items-center w-full h-12 px-3 mt-2 rounded transition duration-150 ease-in-out focus:outline-none "+(s?" text-gray-200 bg-gray-700":"hover:bg-gray-700 hover:text-gray-300")+n,children:i})}function w({user:s,header:n,children:i}){const[o,a]=h.useState(!1);return r("div",{className:"flex min-h-screen bg-gray-100 dark:bg-gray-900",children:[o?r("div",{class:"flex flex-col items-center w-64 min-h-screen fixed overflow-hidden text-gray-400 bg-gray-900 border-r-2 border-gray-800",children:[r("button",{onClick:()=>a(!1),class:"flex w-full items-center justify-center mt-3",children:[e(d,{width:"32",class:"fill-gray-400"}),e("span",{class:"ml-2 text-sm font-bold",children:"Admin page"})]}),r("div",{class:"w-full px-2",children:[r("div",{class:"flex flex-col items-center w-full mt-3 border-t border-gray-700",children:[r(t,{href:route("admin"),active:route().current("admin"),children:[e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})}),e("span",{class:"ml-2 text-sm font-medium",children:"Dasboard"})]}),r(t,{href:route("tovary.index"),active:route().current("tovary.index"),children:[e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),e("span",{class:"ml-2 text-sm font-medium",children:"Products"})]}),r(t,{href:route("orders.index"),active:route().current("orders.index"),children:[e(l,{width:24,height:24,icon:"mdi:order-bool-descending-variant"}),e("span",{class:"ml-2 text-sm font-medium",children:"Orders"})]})]}),r("div",{class:"flex flex-col items-center w-full mt-2 border-t border-gray-700",children:[r(t,{href:route("user.index"),active:route().current("user.index"),children:[e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})}),e("span",{class:"ml-2 text-sm font-medium",children:"Users"})]}),r(t,{href:route("role.index"),active:route().current("role.index"),children:[e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})}),e("span",{class:"ml-2 text-sm font-medium",children:"Permissions"})]}),r(t,{href:route("permission.index"),active:route().current("permission.index"),children:[e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})}),e("span",{class:"ml-2 text-sm font-medium",children:"Roles"})]})]})]}),r("a",{class:"flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300",href:"/dashboard",children:[e(l,{icon:"material-symbols:exit-to-app-rounded",fill:"none",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor"}),e("span",{class:"ml-2 text-sm font-medium",children:"На головну"})]})]}):r("div",{class:"min-h-screen fixed flex flex-col items-center w-16 overflow-hidden text-gray-400 bg-gray-900 border-r-2 border-gray-800",children:[e("button",{onClick:()=>a(!0),class:"flex items-center justify-center mt-3",children:e(d,{width:"32",class:"fill-gray-400"})}),r("div",{class:"flex flex-col items-center mt-3 border-t border-gray-700",children:[e(t,{href:route("admin"),active:route().current("admin"),children:e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),e(t,{href:route("tovary.index"),active:route().current("tovary.index"),children:e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})})}),e(t,{href:route("orders.index"),active:route().current("orders.index"),children:e(l,{width:24,height:24,icon:"mdi:order-bool-descending-variant"})})]}),r("div",{class:"flex flex-col items-center mt-2 border-t border-gray-700",children:[e(t,{href:route("user.index"),active:route().current("user.index"),children:e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})})}),e(t,{href:route("role.index"),active:route().current("role.index"),children:e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})})}),e(t,{href:route("permission.index"),active:route().current("permission.index"),children:e("svg",{class:"w-6 h-6 stroke-current",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"})})})]}),e("a",{class:"flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300",href:"/dashboard",children:e(l,{icon:"material-symbols:exit-to-app-rounded",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"})})]}),r("div",{className:o?"w-full pl-64":"w-full pl-16",children:[n&&e("header",{className:"bg-white dark:bg-gray-800 shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:n})}),e("main",{children:i})]})]})}export{w as A};
