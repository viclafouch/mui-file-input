"use strict";(self.webpackChunkmui_file_input=self.webpackChunkmui_file_input||[]).push([[162],{5493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151);const a={sidebar_position:1},r="Getting Started",l={id:"getting-started",title:"Getting Started",description:"Install",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/mui-file-input/docs/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Reference",permalink:"/mui-file-input/docs/api-reference"}},o={},c=[{value:"Install",id:"install",level:2},{value:"Simple usage",id:"simple-usage",level:2},{value:"Next.js integration",id:"nextjs-integration",level:2},{value:"Congratulations !",id:"congratulations-",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,i.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install mui-file-input --save\n"})}),"\n",(0,i.jsxs)(n.p,{children:["or you can use ",(0,i.jsx)(n.strong,{children:"yarn"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn add mui-file-input\n"})}),"\n",(0,i.jsx)(n.p,{children:"We have completed installing the package."}),"\n",(0,i.jsx)(n.h2,{id:"simple-usage",children:"Simple usage"}),"\n",(0,i.jsx)(n.p,{children:"Here is a simple usage for using the component:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import React from 'react'\nimport { MuiFileInput } from 'mui-file-input'\n\nconst MyComponent = () => {\n  const [file, setFile] = React.useState(null)\n\n  const handleChange = (newFile) => {\n    setFile(newFile)\n  }\n\n  return (\n    <MuiFileInput value={file} onChange={handleChange} />\n  )\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"nextjs-integration",children:"Next.js integration"}),"\n",(0,i.jsxs)(n.p,{children:["Learn how to use MUI File Input with ",(0,i.jsx)(n.a,{href:"https://nextjs.org/",children:"Next.js"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Once you have installed ",(0,i.jsx)(n.code,{children:"MUI File Input"})," in your next.js project, it is important to transpile it as it is an ESM package first."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n transpilePackages: ['mui-file-input'],\n // your config\n}\n\nmodule.exports = nextConfig\n"})}),"\n",(0,i.jsx)(n.h2,{id:"congratulations-",children:"Congratulations !"}),"\n",(0,i.jsxs)(n.p,{children:["That's all, now let's deep dive into the ",(0,i.jsx)(n.a,{href:"/docs/api-reference",children:"props"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);