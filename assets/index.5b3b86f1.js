import{g,h as u}from"./app.edee96ff.js";import{m as d}from"./mitt.93f5c398.js";import{l as f}from"./lodash.dce06bba.js";var m=Object.defineProperty,b=Object.defineProperties,P=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,l=(e,r,o)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,v=(e,r)=>{for(var o in r||(r={}))_.call(r,o)&&l(e,o,r[o]);if(p)for(var o of p(r))O.call(r,o)&&l(e,o,r[o]);return e},y=(e,r)=>b(e,P(r));const s=g({});function n(){let e;s.config.globalProperties.$emitter||(s.config.globalProperties.$emitter=d()),e=s.config.globalProperties.$emitter;const r="padding:4px;border-radius:2x 0 0 2px;background:#00ADB5;color:#EEEEEE;",o="padding:4px;border-radius:0 2px 2px 0;background:#393E46;color:white;",t={instance:u(),uid(){return t.instance?t.instance.uid:void 0},componentName(){return t.instance?t.instance.proxy.$options.name:t.uid()}};return e.on("*",(a,c)=>{const i=e.all.get(a);n.$config.debug&&i&&i.length&&(console.log(c),console.log(`%c${t.componentName()||t.uid()}\u{1F4E5}: %c${String(a)}`,r,o))}),e.emit=new Proxy(e.emit,{apply(a,c,i){return n.$config.debug&&console.log(`%c${t.componentName()||t.uid()}\u{1F4E4}: %c${String(i[0])}`,r,o),a.apply(c,i)}}),e}n.$config={debug:!1};n.config=f.exports.once(e=>{n.$config=e,e&&e.debug&&console.warn("useEventBus: debug mode is open."),Object.defineProperties(n,{$config:y(v({},Object.getOwnPropertyDescriptors(n.config)),{writable:!1})})});
