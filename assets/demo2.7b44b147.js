var E=Object.defineProperty,F=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var l=(e,u,t)=>u in e?E(e,u,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[u]=t,a=(e,u)=>{for(var t in u||(u={}))B.call(u,t)&&l(e,t,u[t]);if(s)for(var t of s(u))C.call(u,t)&&l(e,t,u[t]);return e},c=(e,u)=>F(e,f(u));import{d as v,r as k,o as b,a as h,b as o,t as D}from"./app.edee96ff.js";import"./mitt.93f5c398.js";import{u as g}from"./index.ce78c4fe.js";import"./lodash.dce06bba.js";const A=o("p",null,"comp2",-1),x=o("div",null,"\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B debug \u4FE1\u606F",-1),O={name:"Comp2"},j=v(c(a({},O),{setup(e){const u=k(""),{emit:t,on:i,off:r,all:m}=g(),d=()=>{t("test",["a","b"])},p=()=>{r("test")},_=()=>{m.clear()};return i("test",n=>{u.value=n.toString()+" "+new Date().valueOf()}),(n,S)=>(b(),h("div",null,[A,o("button",{onClick:d},"\u89E6\u53D1 test \u4E8B\u4EF6"),o("button",{onClick:p},"\u79FB\u9664 test \u4E8B\u4EF6\u76D1\u542C"),o("button",{onClick:_},"\u79FB\u9664\u6240\u6709\u4E8B\u4EF6\u76D1\u542C"),o("div",null,"\u4F20\u9012\u6570\u636E\uFF1A"+D(u.value),1),x]))}}));export{j as default};
