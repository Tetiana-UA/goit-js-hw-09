const e=document.querySelector(".btn-start"),t=document.querySelector(".btn-stop"),d=document.querySelector("body");let n;e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,n=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,t.disabled=!0})),t.disabled=!0;
//# sourceMappingURL=01-color-switcher.3e329af6.js.map