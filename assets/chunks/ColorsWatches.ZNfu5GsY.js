import{d as p,o as s,a as e,$ as d,a0 as f,u as r,l as u,y as C,A as m,_ as h}from"./framework.eICATqZP.js";const y={class:"color-container"},k=["onClick"],v={class:"color-name"},g=p({__name:"ColorsWatches",props:{colors:{},fontColor:{default:"#fff"}},setup(c){const n=c,{colors:l,fontColor:i}=n,_=async t=>{try{await navigator.clipboard.writeText(t)}catch(a){console.error(a)}};return(t,a)=>(s(),e("div",y,[(s(!0),e(d,null,f(r(l),o=>(s(),e("div",{key:o,class:"color-swatch",style:u({backgroundColor:o,color:r(i)}),onClick:x=>_(o)},[C("span",v,m(o),1)],12,k))),128))]))}}),w=h(g,[["__scopeId","data-v-cba05388"]]);export{w as C};
