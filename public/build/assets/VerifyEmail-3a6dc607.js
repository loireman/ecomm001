import{W as s,j as t,a as e,b as a,d}from"./app-e54fc346.js";import{G as l}from"./GuestLayout-c7c19550.js";import{P as m}from"./PrimaryButton-942f619e.js";import"./ApplicationLogo-c0ed8e02.js";function h({status:i}){const{post:r,processing:n}=s({});return t(l,{children:[e(a,{title:"Email Verification"}),e("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),i==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600 dark:text-green-400",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:o=>{o.preventDefault(),r(route("verification.send"))},children:t("div",{className:"mt-4 flex items-center justify-between",children:[e(m,{disabled:n,children:"Resend Verification Email"}),e(d,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Log Out"})]})})]})}export{h as default};
