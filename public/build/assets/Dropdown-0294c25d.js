import{r as a,a as e,j as m,F as d,d as f}from"./app-e54fc346.js";import{t as u}from"./transition-f6ecd901.js";const c=a.createContext(),s=({children:t})=>{const[r,o]=a.useState(!1),n=()=>{o(i=>!i)};return e(c.Provider,{value:{open:r,setOpen:o,toggleOpen:n},children:e("div",{className:"relative",children:t})})},h=({children:t})=>{const{open:r,setOpen:o,toggleOpen:n}=a.useContext(c);return m(d,{children:[e("div",{onClick:n,children:t}),r&&e("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)})]})},x=({align:t="right",width:r="48",contentClasses:o="py-1 bg-white dark:bg-gray-700",children:n})=>{const{open:i,setOpen:p}=a.useContext(c);let l="origin-top";t==="left"?l="origin-top-left left-0":t==="right"&&(l="origin-top-right right-0");let g="";return r==="48"&&(g="w-48"),e(d,{children:e(u,{as:a.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${g}`,onClick:()=>p(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:n})})})})},y=({className:t="",children:r,...o})=>e(f,{...o,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+t,children:r});s.Trigger=h;s.Content=x;s.Link=y;const C=s;export{C as D};
