import{W as d,j as t,a as e,b as u}from"./app-407759a4.js";import{T as c,I as p}from"./TextInput-e492f2eb.js";import{I as h}from"./InputLabel-62725a5f.js";import{P as x}from"./PrimaryButton-b548c2f1.js";import{A as g}from"./AdminLayout-36f02b15.js";import{d as f}from"./index-f8ef7e0b.js";import"./ApplicationLogo-2bd47d38.js";import"./iconify-9d0eba50.js";function A({auth:m,permission:r}){const{data:s,setData:l,post:b,processing:n,errors:o,reset:N}=d({_method:"PUT",name:r.name}),i=a=>{a.preventDefault(),f.Inertia.put(route("permission.update",{permission:r}),s)};return t(g,{user:m.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Редагування правила доступу"}),children:[e(u,{title:"Редагування правила доступу"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:t("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4 dark:text-gray-300 text-gray-800",children:[e("span",{className:"text-xl font-semibold",children:"Редагувати правило доступу"}),t("form",{className:"px-4 py-8",onSubmit:i,children:[e(h,{htmlFor:"name",value:"Назва"}),e(c,{id:"name",name:"name",value:s.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>l("name",a.target.value),required:!0}),e(p,{message:o.name,className:"mt-2"}),e(x,{className:"mt-16 w-full grid",disabled:n,children:e("span",{className:"text-[1rem]",children:"Оновити"})})]})]})})})]})}export{A as default};