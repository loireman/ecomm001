import{r as u,j as c,a as e,b as k,c as h}from"./app-fc355f1a.js";import{I as w}from"./InputLabel-ea9c66bd.js";import{P as D}from"./PrimaryButton-678017d6.js";import{A as j}from"./AuthenticatedLayout-588c39d3.js";import{I as f}from"./iconify-4fe7a804.js";import"./index-38922898.js";import"./ApplicationLogo-854bae3c.js";import"./Dropdown-f81f2fe4.js";import"./transition-953f2c15.js";function A({auth:i,tovar:t}){const[o,y]=u.useState(!1),[s,x]=u.useState(1),[l,b]=u.useState(t.price);async function p(){const r=(await h.get("/api/cart/"+i.user.id).then(n=>n.data.products)).filter(n=>n.product_id==t.id);y(r.length!=0),r.length!=0&&(x(r[0].product_count),b((r[0].product_count*t.price).toFixed(2)))}u.useEffect(()=>{p()},[]);async function N(a){a.preventDefault(),Date.prototype.addDays=function(d){var g=new Date(this.valueOf());return g.setDate(g.getDate()+d),g};var r=new Date;const n=r.addDays(5).toISOString().split("T")[0]+" "+r.toISOString().split("T")[1].slice(0,8),v={client_id:i.user.id,total_price:l,status:"Очікує підтвердження",arrival:n,products:JSON.stringify([{product_id:t.id,product_count:s,product_price:l}])};fetch("/api/orders/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)}).then(d=>d.json()).then(()=>{window.location.replace(route("dashboard"))}).catch(d=>console.log(d))}async function m(a,r){if(a.preventDefault(),o==!0&&(await h({method:"DELETE",url:"/api/cart/"+i.user.id+"/"+t.id}),p()),r==0&&o==!1)await h({method:"POST",url:"/api/cart/",data:{client_id:i.user.id,product_id:t.id,product_count:s,product_price:l}}),p();else if(r>0){const n=r==1?s-1:s+1;x(n),b((n*t.price).toFixed(2))}}return c(j,{user:i.user,header:e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Інформація про товар"}),children:[e(k,{title:"Інформація про товар"}),e("div",{className:"py-12",children:e("div",{className:"max-w-5xl sm:px-9s lg:px-8",children:c("div",{className:"flex max-md:flex-col-reverse justify-between bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100",children:[c("div",{className:"p-6",children:[e("div",{className:"p-6 font-bold text-2xl",children:t.name}),c("div",{className:"mt-3 ml-5 text-xl font-medium",children:["Ціна: $",t.price]}),c("div",{className:"ml-5 text-xl font-medium",children:["Тип: ",t.property1]}),c("div",{className:"ml-5 text-xl font-medium",children:["Кількість: ",t.property2]}),c("div",{className:"grid gap-3 mt-5 ml-5",children:[e(w,{className:"text-xl",for:"productCount",value:"Замовити:"}),c("div",{className:"flex gap-3 items-center",children:[e("span",{className:"font-bold text-2xl",children:s}),e("button",{onClick:a=>m(a,1),className:`grid content-center justify-center aspect-square px-2 h-full
                                        rounded-md text-gray-200 border bg-gray-600 dark:bg-gray-700
                                        hover:bg-gray-500 dark:hover:bg-gray-600 border-gray-600`,children:e("span",{className:"text-base",children:e(f,{icon:"mdi:minus",height:24,width:24})})}),e("button",{onClick:a=>m(a,2),className:`grid content-center justify-center aspect-square px-2 h-full
                                        rounded-md text-gray-200 border bg-gray-600 dark:bg-gray-700
                                        hover:bg-gray-500 dark:hover:bg-gray-600 border-gray-600`,children:e("span",{className:"text-base",children:e(f,{icon:"mdi:plus",height:24,width:24})})})]}),c("span",{className:"font-bold text-2xl",children:["Остаточна ціна: ",l]}),c("div",{className:"flex items-stretch gap-3",children:[e(D,{onClick:N,children:e("span",{className:"text-[0.9rem]",children:"Замовити зараз"})}),e("button",{onClick:a=>m(a,0),className:"grid content-center justify-center aspect-square px-2 h-full rounded-md text-gray-200 border "+(o===!0?"bg-green-600 dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600 border-green-600":"bg-orange-600 dark:bg-orange-700 hover:bg-orange-500 dark:hover:bg-orange-600 border-orange-600"),children:e("span",{className:"text-base",children:e(f,{icon:o===!0?"mdi:done":"mdi:cart",height:24,width:24})})})]})]})]}),e("img",{src:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",alt:"Front of men's Basic Tee in black.",class:"h=full aspect-square md:h-96 object-cover object-center lg:h-[36rem]"})]})})})]})}export{A as default};
