import{j as a,a as e,b as r}from"./app-407759a4.js";import{A as l}from"./AuthenticatedLayout-021441f6.js";import"./iconify-9d0eba50.js";import{P as i}from"./PhotoSlider-e16c80e1.js";import"./ApplicationLogo-2bd47d38.js";import"./Dropdown-ef505e20.js";import"./transition-0cae9fd1.js";function c({auth:s,article:t}){return a(l,{user:s.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:t.name}),children:[e(r,{title:t.name}),e("div",{className:"py-12 grid gap-6 xl:flex xl:gap-0 justify-center",children:e("div",{className:"xl:max-w-7xl w-full sm:px-9s lg:px-8",children:a("div",{className:"grid justify-between bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100",children:[e("div",{className:"p-6 w-full",children:t.photo_path?e(i,{photos:JSON.parse(t.photo_path)}):e("img",{src:"/img/gps.png",alt:"123.",class:"h-full w-full aspect-square md:h-96 object-contain object-center lg:h-[36rem]"})}),e("span",{className:"p-12 font-medium text-lg whitespace-pre-wrap",children:t.body})]})})})]})}export{c as default};