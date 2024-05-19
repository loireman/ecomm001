import{W as g,j as u,a as e,b as y}from"./app-dd1d5806.js";import{F as h}from"./FileInputDropdown-41514c90.js";import{T as m,I as o}from"./TextInput-3e23c72d.js";import{I as s}from"./InputLabel-bcbbf9e3.js";import{P as f}from"./PrimaryButton-70b79cca.js";import{A as b}from"./AdminLayout-88506c95.js";import"./ApplicationLogo-e02496f2.js";import"./iconify-d56e2275.js";function I({auth:p}){const{data:t,setData:r,post:n,processing:i,errors:l,reset:d}=g({name:"",price:0,slug:"",property1:0,property2:0,body:"",photo_path:[]}),c=a=>{a.preventDefault(),n(route("tovary.store"),{onSuccess:()=>{d()}})};return u(b,{user:p.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Створення товару"}),children:[e(y,{title:"Створення товару"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:u("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-4 text-gray-800 dark:text-gray-300",children:[e("span",{className:"text-xl font-semibold",children:"Створити товар"}),u("form",{className:"px-4 py-8",onSubmit:c,children:[e(s,{htmlFor:"filedropdown",value:"Додати фото"}),e(h,{selectedFiles:t.photo_path,setSelectedFiles:a=>r("photo_path",a)}),e(s,{htmlFor:"name",value:"Назва"}),e(m,{id:"name",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>r("name",a.target.value),required:!0}),e(o,{message:l.name,className:"mt-2"}),e(s,{htmlFor:"slug",value:"Посилання"}),e(m,{id:"slug",name:"slug",value:t.slug,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>r("slug",a.target.value),required:!0}),e(o,{message:l.slug,className:"mt-2"}),e(s,{htmlFor:"price",value:"Ціна"}),e(m,{id:"price",name:"price",type:"number",step:"any",value:t.price,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>r("price",a.target.value),required:!0}),e(o,{message:l.price,className:"mt-2"}),e(s,{htmlFor:"property1",value:"Властивість 1"}),e(m,{id:"property1",name:"property1",type:"number",value:t.property1,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>r("property1",a.target.value),required:!0}),e(o,{message:l.property1,className:"mt-2"}),e(s,{htmlFor:"property2",value:"Властивість 2"}),e(m,{id:"property2",name:"property2",type:"number",value:t.property2,className:"mt-1 block w-full",autoComplete:"off",isFocused:!1,onChange:a=>r("property2",a.target.value),required:!0}),e(o,{message:l.property2,className:"mt-2"}),e(s,{htmlFor:"body",value:"Опис"}),e("textarea",{id:"body",name:"body",value:t.body,className:"mt-1 block w-full h-32 rounded-lg bg-gray-200 dark:bg-gray-900",autoComplete:"off",onChange:a=>r("body",a.target.value),required:!0}),e(o,{message:l.body,className:"mt-2"}),e(f,{className:"mt-16 w-full grid",disabled:i,children:e("span",{className:"text-[1rem]",children:"Створити"})})]})]})})})]})}export{I as default};
