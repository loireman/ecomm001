import{r as g,j as a,a as e,b}from"./app-dd1d5806.js";import{A as p}from"./AdminLayout-88506c95.js";import{P as f}from"./Pagination-00fa4e2b.js";import{I as l}from"./iconify-d56e2275.js";import{D as d}from"./Dropdown-982e440f.js";import"./ApplicationLogo-e02496f2.js";import"./react-paginate-a8abe76c.js";import"./transition-bdbc5356.js";function L({auth:c,permissions:i,can:t}){const[s,h]=g.useState(""),m=()=>{const r=new URL(window.location);r.searchParams.set("search",s),window.location=r},o=r=>{const n=new URL(window.location);n.searchParams.set("sort",r),window.location=n};function u(r){if(confirm("Are you sure you want to delete?")){const n=document.querySelector('meta[name="csrf-token"]').content;fetch(route("permission.destroy",r),{method:"DELETE",headers:{"X-CSRF-TOKEN":n}}).then(()=>{window.location.reload()})}}return a(p,{user:c.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Права користувачів"}),children:[e(b,{title:"Права користувачів"}),e("div",{className:"py-12",children:a("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[a("div",{className:"bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg mb-3 p-3 grid md:flex gap-3",children:[t.create&&e("a",{href:route("permission.create"),children:a("div",{className:"px-4 py-2 rounded-full bg-green-600 dark:bg-green-900 hover:bg-green-500 dark:hover:bg-green-800 text-white flex gap-1 justify-center md:w-fit",children:[e(l,{icon:"mdi:plus",width:24}),e("span",{className:"font-medium text-xl",children:"Створити"})]})}),e("div",{className:"w-full md:max-w-md mx-auto border border-gray-300 rounded-full",children:a("div",{className:"relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden",children:[e("button",{onClick:m,class:"grid place-items-center h-full w-16 text-gray-900 dark:text-gray-100",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e("input",{class:"peer h-full w-full outline-none text-md pr-4 bg-transparent border-0 text-gray-900 dark:text-gray-100",type:"search",value:s,onChange:r=>h(r.target.value),placeholder:"Шукати за назвою.."})]})}),a(d,{children:[e(d.Trigger,{children:e("span",{className:"inline-flex w-full justify-end rounded-md",children:e("button",{type:"button",className:"inline-flex items-center justify-center text-xl font-semibold py-2 w-full md:w-36 mx-auto border border-gray-300 rounded-full text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:"Сортування"})})}),a(d.Content,{children:[e(d.Link,{onClick:()=>o("id"),children:"Id (за зростанням)"}),e(d.Link,{onClick:()=>o("-id"),children:"Id (за спаданням)"}),e(d.Link,{onClick:()=>o("name"),children:"Ім'я (від А до Я)"}),e(d.Link,{onClick:()=>o("-name"),children:"Ім'я (від Я до А)"})]})]})]}),a("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[a("table",{className:"w-full text-gray-900 dark:text-gray-100",children:[a("thead",{children:[e("td",{className:"p-3 border-b border-gray-300",children:"ID"}),e("td",{className:"p-3 border-b border-gray-300",children:"Назва"}),(t.edit||t.delete)&&e("td",{className:"p-3 border-b border-gray-300",children:"Дії"})]}),e("tbody",{children:i.data.map(r=>a("tr",{className:"p-2",children:[e("td",{className:"p-3 border-b border-gray-600",children:r.id}),e("td",{className:"p-3 border-b border-gray-600",children:r.name}),a("td",{className:"p-3 border-b border-gray-600 text-white",children:[e("a",{href:route("permission.show",r.id),children:e("div",{className:"px-4 py-2 rounded-full bg-green-600 dark:bg-green-900 hover:bg-green-500 dark:hover:bg-green-800",children:e(l,{className:"m-auto",icon:"mdi:eye-outline"})})}),t.edit&&e("a",{className:"",href:route("permission.edit",r.id),children:e("div",{className:"mt-2 px-4 py-2 rounded-full bg-blue-600 dark:bg-blue-900 hover:bg-blue-500 dark:hover:bg-blue-800",children:e(l,{className:"m-auto",icon:"mdi:pencil"})})}),t.delete&&e("button",{className:"mt-2 px-4 py-2 w-full bg-red-600 dark:bg-red-900 hover:bg-red-500 dark:hover:bg-red-800 rounded-full",onClick:()=>u(r.id),children:e(l,{className:"m-auto",icon:"mdi:trash"})})]})]},r))})]}),e(f,{pageContent:i})]})]})})]})}export{L as default};
