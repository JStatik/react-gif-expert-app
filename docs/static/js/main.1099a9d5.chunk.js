(this["webpackJsonp28-gif-expert-app"]=this["webpackJsonp28-gif-expert-app"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setCategorias,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim()&&t((function(e){return[i].concat(Object(l.a)(e))})),o("")}},r.a.createElement("span",null,"Buscar categoria:"),r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}))},s=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeInLeftBig"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},m=a(4),p=a.n(m),f=a(7),g=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,r,c,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=hGGR7G2E7Sa78gB2fGLC2L95qRIt2lN2"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.original.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=Object(n.useState)({imagenes:[],cargando:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){g(e).then((function(e){return c({imagenes:e,cargando:!1})}))}),[e]),r},E=function(e){var t=e.categoria,a=d(t),n=a.imagenes,c=a.cargando;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"centrado animate__animated animate__jackInTheBox"},t),r.a.createElement("p",{className:"centrado"},c&&"Cargando..."),r.a.createElement("div",{className:"card-grid"},n.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))},v=function(){var e=Object(n.useState)(["Vikingos"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"GifExpertApp"),r.a.createElement(o,{setCategorias:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(E,{key:e,categoria:e})}))))};a(15),a(16);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.1099a9d5.chunk.js.map