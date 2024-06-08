import{u as A}from"./chunks/theme.CSv0_5Bc.js";import{d,Z as l,o as h,a as r,b as a,j as k,A as i,z as s}from"./chunks/framework.OwRBq4ez.js";import{C as E}from"./chunks/ColorsWatches.CoHrH9rY.js";const o=d({__name:"useDarkMode",setup(p){const{currentMode:n,changeMode:t}=A(),e=()=>{console.log(n()),t()};return(W,j)=>{const C=l("l-button");return h(),r("div",null,[a(C,{onClick:e},{default:k(()=>[i("light/dark mode")]),_:1})])}}}),F=s("h1",{id:"暗黑模式",tabindex:"-1"},[i("暗黑模式 "),s("a",{class:"header-anchor",href:"#暗黑模式","aria-label":'Permalink to "暗黑模式"'},"​")],-1),c=s("h2",{id:"usedarkmode",tabindex:"-1"},[i("useDarkMode "),s("a",{class:"header-anchor",href:"#usedarkmode","aria-label":'Permalink to "useDarkMode"'},"​")],-1),D=s("p",null,[i("通过预设的 "),s("code",null,"useDarkMode()"),i(" 钩子函数, 可以实现暗黑模式切换。")],-1),B=s("h2",{id:"primary",tabindex:"-1"},[i("Primary "),s("a",{class:"header-anchor",href:"#primary","aria-label":'Permalink to "Primary"'},"​")],-1),g=s("p",null,"常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。",-1),u=s("h2",{id:"normal",tabindex:"-1"},[i("Normal "),s("a",{class:"header-anchor",href:"#normal","aria-label":'Permalink to "Normal"'},"​")],-1),y=s("p",null,"常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。",-1),m=s("h2",{id:"success",tabindex:"-1"},[i("Success "),s("a",{class:"header-anchor",href:"#success","aria-label":'Permalink to "Success"'},"​")],-1),_=s("p",null,"常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。",-1),b=s("h2",{id:"warning",tabindex:"-1"},[i("Warning "),s("a",{class:"header-anchor",href:"#warning","aria-label":'Permalink to "Warning"'},"​")],-1),f=s("p",null,"常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。",-1),v=s("h2",{id:"danger",tabindex:"-1"},[i("Danger "),s("a",{class:"header-anchor",href:"#danger","aria-label":'Permalink to "Danger"'},"​")],-1),x=s("p",null,"常规、悬浮(hover)、点击(click)、特殊场景、激活(active)、禁用(disabled)、浅色、浅色悬浮、浅色禁用。",-1),M=s("h2",{id:"边框颜色",tabindex:"-1"},[i("边框颜色 "),s("a",{class:"header-anchor",href:"#边框颜色","aria-label":'Permalink to "边框颜色"'},"​")],-1),P=s("p",null,"浅色/禁用、一般、深/悬浮、重/按钮描边。",-1),w=s("h2",{id:"填充颜色",tabindex:"-1"},[i("填充颜色 "),s("a",{class:"header-anchor",href:"#填充颜色","aria-label":'Permalink to "填充颜色"'},"​")],-1),N=s("p",null,"浅色/禁用、常规/白底悬浮、深/灰底悬浮、重/特殊场景。",-1),T=s("h2",{id:"文字颜色",tabindex:"-1"},[i("文字颜色 "),s("a",{class:"header-anchor",href:"#文字颜色","aria-label":'Permalink to "文字颜色"'},"​")],-1),S=s("p",null,"强调/正文标题、次强调/正文标题、次要信息、置灰信息。",-1),Z=JSON.parse('{"title":"暗黑模式","description":"","frontmatter":{"search":false,"next":{"link":"/components/button","text":"Button 按钮"}},"headers":[],"relativePath":"guide/dark-mode.md","filePath":"guide/dark-mode.md"}'),V={name:"guide/dark-mode.md"},$=Object.assign(V,{setup(p){return(n,t)=>{const e=l("demo-preview");return h(),r("div",null,[F,c,D,a(e,{title:"",description:"",code:"%3Cscript%20setup%20lang=%22ts%22%3E%0D%0Aimport%20%7B%20useDarkMode%20%7D%20from%20%22lotus-plus%22;%0D%0Aconst%20%7B%20currentMode,%20changeMode%20%7D%20=%20useDarkMode();%0D%0Aconst%20changeTheme%20=%20()%20=%3E%20%7B%0D%0A%20%20console.log(currentMode());%20//%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E4%B8%BB%E9%A2%98%E6%A8%A1%E5%BC%8F%0D%0A%20%20changeMode();%20//%20%E5%88%87%E6%8D%A2%E4%B8%BB%E9%A2%98%E6%A8%A1%E5%BC%8F%0D%0A%7D;%0D%0A%3C/script%3E%0D%0A%0D%0A%3Ctemplate%3E%0D%0A%20%20%3Cdiv%3E%0D%0A%20%20%20%20%3Cl-button%20@click=%22changeTheme%22%3Elight/dark%20mode%3C/l-button%3E%0D%0A%20%20%3C/div%3E%0D%0A%3C/template%3E%0D%0A",showCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20setup%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20lang%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22ts%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20useDarkMode%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%20%22lotus-plus%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3EcurrentMode%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%2C%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23005CC5%3B--shiki-dark%3A%2379B8FF%22%3EchangeMode%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20useDarkMode%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E()%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20changeTheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%20%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20()%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23D73A49%3B--shiki-dark%3A%23F97583%22%3E%3D%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3EcurrentMode%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E())%3B%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236A737D%3B--shiki-dark%3A%236A737D%22%3E%2F%2F%20%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E4%B8%BB%E9%A2%98%E6%A8%A1%E5%BC%8F%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20%20changeMode%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E()%3B%20%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236A737D%3B--shiki-dark%3A%236A737D%22%3E%2F%2F%20%E5%88%87%E6%8D%A2%E4%B8%BB%E9%A2%98%E6%A8%A1%E5%BC%8F%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3El-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%40%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3Eclick%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3EchangeTheme%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3Elight%2Fdark%20mode%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3El-button%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ediv%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/home/runner/work/lotus-plus/lotus-plus/packages/docs/demo/useDarkMode.vue",relativePath:"../demo/useDarkMode.vue"},{default:k(()=>[s("p",null,[a(o)])]),_:1}),B,g,a(E,{colors:["#3C7EFF","#306FFF","#689FFF","#1D4DD2","#0E32A6","#041B79","rgba(60, 126, 255, 0.2)","rgba(60, 126, 255, 0.35)","rgba(60, 126, 255, 0.5)"]}),u,y,a(E,{colors:["#929293","#78787A","#ABABAC","#5F5F60","#484849","#2E2E30","rgba(146, 146, 147, 0.2)","rgba(146, 146, 147, 0.35)","rgba(146, 146, 147, 0.5)"]}),m,_,a(E,{colors:["#27C346","#1DB440","#50D266","#129A37","#0A802D","#046625","rgba(39, 195, 70, 0.2)","rgba(39, 195, 70, 0.35)","rgba(39, 195, 70, 0.5)"]}),b,f,a(E,{colors:["#FF9626","#FF8D1F","#FFB357","#D26913","#A64B0A","#793004","rgba(255, 150, 38, 0.2)","rgba(255, 150, 38, 0.35)","rgba(255, 150, 38, 0.5)"]}),v,x,a(E,{colors:["#F76965","#F54E4E","#F98D86","#CB2E34","#A1161F","#770611","rgba(247, 105, 101, 0.2)","rgba(247, 105, 101, 0.35)","rgba(247, 105, 101, 0.5)"]}),M,P,a(E,{colors:["#2E2E30","#484849","#5F5F60","#929293"]}),w,N,a(E,{colors:["#17171A","#2E2E30","#484849","#5F5F60"]}),T,S,a(E,{colors:["#F6F6F6","#C5C5C5","#929293","#5F5F60"]})])}}});export{Z as __pageData,$ as default};
