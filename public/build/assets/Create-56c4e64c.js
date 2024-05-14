import{W as g,j as u,a as e,b as y}from"./app-e579c818.js";import{T as m,I as l}from"./TextInput-616859f1.js";import{I as o}from"./InputLabel-ab57c492.js";import{P as f}from"./PrimaryButton-5d7794a0.js";import{A as h}from"./AdminLayout-7f0da3ed.js";import"./ApplicationLogo-7ab71130.js";import"./iconify-6a1666af.js";function k({auth:p}){const{data:r,setData:t,post:n,processing:i,errors:s,reset:d}=g({name:"",price:0,slug:"",property1:0,property2:0,body:""}),c=a=>{a.preventDefault(),n(route("tovary.store"),{onSuccess:()=>{d()}})};return u(h,{user:p.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Створення товару"}),children:[e(y,{title:"Створення товару"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:u("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4 text-gray-800 dark:text-gray-300",children:[e("span",{className:"text-xl font-semibold",children:"Створити товар"}),u("form",{className:"px-4 py-8",onSubmit:c,children:[e(o,{htmlFor:"name",value:"Назва"}),e(m,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>t("name",a.target.value),required:!0}),e(l,{message:s.name,className:"mt-2"}),e(o,{htmlFor:"slug",value:"Посилання"}),e(m,{id:"slug",name:"slug",value:r.slug,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>t("slug",a.target.value),required:!0}),e(l,{message:s.slug,className:"mt-2"}),e(o,{htmlFor:"price",value:"Ціна"}),e(m,{id:"price",name:"price",type:"number",step:"any",value:r.price,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>t("price",a.target.value),required:!0}),e(l,{message:s.price,className:"mt-2"}),e(o,{htmlFor:"property1",value:"Властивість 1"}),e(m,{id:"property1",name:"property1",type:"number",value:r.property1,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>t("property1",a.target.value),required:!0}),e(l,{message:s.property1,className:"mt-2"}),e(o,{htmlFor:"property2",value:"Властивість 2"}),e(m,{id:"property2",name:"property2",type:"number",value:r.property2,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>t("property2",a.target.value),required:!0}),e(l,{message:s.property2,className:"mt-2"}),e(o,{htmlFor:"body",value:"Опис"}),e("textarea",{id:"body",name:"body",value:r.body,className:"mt-1 block w-full h-32 rounded-lg bg-gray-200 dark:bg-gray-900",autoComplete:"off",onChange:a=>t("body",a.target.value),required:!0}),e(l,{message:s.body,className:"mt-2"}),e(f,{className:"mt-16 w-full grid",disabled:i,children:e("span",{className:"text-[1rem]",children:"Створити"})})]})]})})})]})}export{k as default};