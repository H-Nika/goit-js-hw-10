import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form");document.querySelector(".form-fieldset");const m=document.querySelector('[name = "delay"]'),c=document.querySelectorAll('[name = "state"]');i.addEventListener("submit",a);function a(n){n.preventDefault();const o=m.value;let t=null;c.forEach(e=>{e.checked&&(t=e.value)});const s={backgroundColor:"",messageColor:"white",messageSize:"24",timeout:3e3,position:"topRight"};new Promise((e,l)=>{setTimeout(()=>{t==="fulfilled"?(r.show({...s,backgroundColor:"green",message:`✅ Fulfilled promise in ${o}ms`}),e(o)):(r.show({...s,backgroundColor:"darkred",message:`❌ Rejected promise in ${o}ms`}),l(new Error(`❌ Rejected promise in ${o}ms`)))},o)}).then(e=>{console.log(`✅ Fulfilled promise in ${e}ms`)}).catch(e=>{console.error(e.message)}),i.reset()}
//# sourceMappingURL=commonHelpers2.js.map