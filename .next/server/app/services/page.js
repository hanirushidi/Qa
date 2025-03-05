(()=>{var e={};e.id=469,e.ids=[469],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3430:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>d}),r(9737),r(5886),r(5866);var i=r(3191),s=r(8716),n=r(7922),a=r.n(n),l=r(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);r.d(t,o);let d=["",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9737)),"/Users/admin/Documents/Qa/src/app/services/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5886)),"/Users/admin/Documents/Qa/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/admin/Documents/Qa/src/app/services/page.tsx"],u="/services/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/services/page",pathname:"/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7810:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},9737:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var i=r(9510),s=r(539),n=r(7371);r(1159);let a=[{label:"Manual Testing",description:"Manual execution of test cases to identify defects and ensure quality.",href:"/services/manual-testing"},{label:"Automated Testing",description:"Using tools to automatically execute tests, enhancing efficiency and coverage.",href:"/services/automated-testing"},{label:"Web Application Testing",description:"Evaluating web apps for functionality and usability across browsers and devices.",href:"/services/web-application-testing"},{label:"Mobile Application Testing",description:"Testing mobile apps on various devices to ensure performance and compatibility.",href:"/services/mobile-application-testing"},{label:"iOS Application Testing",description:"Testing iOS apps for functionality and compliance with App Store guidelines.",href:"/services/ios-application-testing"},{label:"Android Application Testing",description:"Validating Android apps for performance and security across devices.",href:"/services/android-application-testing"},{label:"Desktop Application Testing",description:"Testing desktop applications for functionality across different operating systems.",href:"/services/desktop-application-testing"},{label:"API Testing",description:"Evaluating APIs for functionality, data integrity, and security vulnerabilities.",href:"/services/api-testing"},{label:"Dedicated QA Team",description:"A specialized team providing tailored testing services for your projects.",href:"/services/dedicated-qa-team"},{label:"QA Consulting & Audit",description:"Assessment and guidance to improve your QA processes and methodologies.",href:"/services/qa-consulting-audit"},{label:"Cybersecurity",description:"Identifying vulnerabilities and security flaws in software applications.",href:"/services/cybersecurity"},{label:"Hire QA Engineers",description:"Connecting businesses with qualified QA engineers for testing support.",href:"/services/hire-qa-engineers"}],l=()=>(0,i.jsxs)("div",{className:"min-h-screen pt-32 md:pt-32 xl:pt-0 flex flex-col gap-10 items-center justify-center p-3",children:[i.jsx("h1",{className:"text-3xl font-bold text-primary",children:"Our Services"}),i.jsx("div",{className:"max-w-screen-xl gap-5 grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2   ",children:a.map((e,t)=>(0,i.jsxs)("div",{className:"max-w-[300px] flex flex-col items-center justify-between  gap-2 px-2 py-4 border border-primary rounded-md hover:shadow-md cursor-pointer hover:scale-105",children:[i.jsx("div",{className:"text-lg font-semibold ",children:e.label}),i.jsx("div",{className:"xl:text-sm text-xs  text-gray-600 text-center ",children:e.description}),i.jsx(n.default,{href:e.href,children:i.jsx(s.z,{className:"mt-4 my-auto",children:"Learn more"})})]},t))})]})},539:(e,t,r)=>{"use strict";let i,s;r.d(t,{z:()=>v});var n=r(9510),a=r(1159),l=a.forwardRef((e,t)=>{let{children:r,...i}=e,s=a.Children.toArray(r),l=s.find(c);if(l){let e=l.props.children,r=s.map(t=>t!==l?t:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,n.jsx)(o,{...i,ref:t,children:a.isValidElement(e)?a.cloneElement(e,void 0,r):null})}return(0,n.jsx)(o,{...i,ref:t,children:r})});l.displayName="Slot";var o=a.forwardRef((e,t)=>{let{children:r,...i}=e;if(a.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r);return a.cloneElement(r,{...function(e,t){let r={...t};for(let i in t){let s=e[i],n=t[i];/^on[A-Z]/.test(i)?s&&n?r[i]=(...e)=>{n(...e),s(...e)}:s&&(r[i]=s):"style"===i?r[i]={...s,...n}:"className"===i&&(r[i]=[s,n].filter(Boolean).join(" "))}return{...e,...r}}(i,r.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,e):e})}return a.Children.count(r)>1?a.Children.only(null):null});o.displayName="SlotClone";var d=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function c(e){return a.isValidElement(e)&&e.type===d}let u=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,p=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,i,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(i=e(t[r]))&&(s&&(s+=" "),s+=i);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(i&&(i+=" "),i+=t);return i};var f=r(644);let g=(i="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",s={variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var t;if((null==s?void 0:s.variants)==null)return p(i,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:r,defaultVariants:n}=s,a=Object.keys(r).map(t=>{let i=null==e?void 0:e[t],s=null==n?void 0:n[t];if(null===i)return null;let a=u(i)||u(s);return r[t][a]}),l=e&&Object.entries(e).reduce((e,t)=>{let[r,i]=t;return void 0===i||(e[r]=i),e},{});return p(i,a,null==s?void 0:null===(t=s.compoundVariants)||void 0===t?void 0:t.reduce((e,t)=>{let{class:r,className:i,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...n,...l}[t]):({...n,...l})[t]===r})?[...e,r,i]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),v=a.forwardRef(({className:e,variant:t,size:r,asChild:i=!1,...s},a)=>{let o=i?l:"button";return n.jsx(o,{className:(0,f.cn)(g({variant:t,size:r,className:e})),ref:a,...s})});v.displayName="Button"}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[780,930],()=>r(3430));module.exports=i})();