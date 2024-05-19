import{r as g,j as r,a as e,b as h}from"./app-dd1d5806.js";import{A as m}from"./AuthenticatedLayout-3a18f507.js";import{P as u}from"./Pagination-00fa4e2b.js";import"./iconify-d56e2275.js";import{D as a}from"./Dropdown-982e440f.js";import"./ApplicationLogo-e02496f2.js";import"./react-paginate-a8abe76c.js";import"./transition-bdbc5356.js";function j({auth:s,tovaries:i}){const[d,o]=g.useState(""),c=t=>{const l=new URL(window.location);l.searchParams.set("search",t),window.location=l},n=t=>{const l=new URL(window.location);l.searchParams.set("sort",t),window.location=l};return r(m,{user:s.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Товари"}),children:[e(h,{title:"Товари"}),e("div",{className:"py-12",children:r("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[r("div",{className:"bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg mb-3 p-3 grid md:flex md:justify-between gap-3",children:[e("div",{className:"w-full md:max-w-md border border-gray-300 rounded-full",children:r("form",{onSubmitCapture:t=>{t.preventDefault(),c(d)},className:"relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden",children:[e("button",{class:"grid place-items-center h-full w-16 text-gray-900 dark:text-gray-100",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e("input",{class:"peer h-full w-full outline-none text-md pr-4 bg-transparent border-0 text-gray-900 dark:text-gray-100",type:"search",value:d,onChange:t=>o(t.target.value),placeholder:"Шукати за назвою.."})]})}),r(a,{children:[e(a.Trigger,{children:e("span",{className:"inline-flex w-full justify-end rounded-md",children:e("button",{type:"button",className:"inline-flex items-center justify-center text-xl font-semibold py-2 w-full md:w-36 mx-auto border border-gray-300 rounded-full text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:"Сортування"})})}),r(a.Content,{children:[e(a.Link,{onClick:()=>n("name"),children:"Ім'я (від А до Я)"}),e(a.Link,{onClick:()=>n("-name"),children:"Ім'я (від Я до А)"}),e(a.Link,{onClick:()=>n("price"),children:"Спочатку найдешевші"}),e(a.Link,{onClick:()=>n("-price"),children:"Спочатку найдорожчі"})]})]})]}),e("div",{className:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-4 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100",children:i.data.map(t=>r("div",{class:"group relative",children:[e("div",{class:"min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700 lg:aspect-none group-hover:opacity-75 lg:h-80",children:e("img",{src:"/img/gps.png",alt:"123.",class:"h-full w-full object-contain object-center lg:h-full lg:w-full"})}),r("div",{class:"mt-4 flex justify-between",children:[r("div",{children:[e("h3",{class:"text-xl text-gray-700 dark:text-gray-100",children:r("a",{href:"/products/"+t.slug,children:[e("span",{"aria-hidden":"true",class:"absolute inset-0"}),t.name]})}),r("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300 hidden",children:["Тип: ",t.property1]})]}),r("div",{className:"grid justify-items-end pr-1",children:[r("p",{class:"text-xl font-medium text-gray-900 dark:text-gray-100",children:["$",t.price]}),r("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",children:["К-сть: ",t.property2]})]})]})]}))}),e(u,{nameContent:"товари",pageContent:i})]})})]})}export{j as default};
