(function(t){function e(e){for(var i,r,o=e[0],u=e[1],c=e[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var u=a[r];0!==n[u]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"07a4b371"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=r(t);var c=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",c.name="ChunkLoadError",c.type=i,c.request=s,a[1](c)}n[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"03a5":function(t,e,a){var i=a("377b");t.exports={components:{VerticalProduct:i},methods:{addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.commit("addItemToCart",{itemId:t,quantity:e}),this.$store.commit("updateSnackbar",{show:!0})}}}},"0ff1":function(t,e,a){"use strict";var i=a("e7e9"),n=a.n(i);e["default"]=n.a},1215:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",[a("Header"),a("PopularProducts",{staticClass:"body"}),a("Footer",{staticClass:"footer"})],1)])},n=[]},"1c5d":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Cart")])},n=[]},"1ef9":function(t,e,a){"use strict";a.r(e);var i=a("e8a0"),n=a("368b");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},2368:function(t,e,a){"use strict";var i=a("953a"),n=a("7e50"),s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"25ad":function(t,e,a){"use strict";a.r(e);var i=a("9313"),n=a("7589");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},2664:function(t,e,a){"use strict";var i=a("8a2c"),n=a("f9e8"),s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"272d":function(t,e,a){"use strict";var i=a("e00f"),n=a.n(i);e["default"]=n.a},"285f":function(t,e,a){"use strict";a.r(e);var i=a("03a5"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"2a44":function(t,e,a){"use strict";a.r(e);var i=a("c011"),n=a("285f");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"2c52":function(t,e,a){"use strict";a.r(e);var i=a("d335"),n=a("490e");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"31ad":function(t,e,a){"use strict";a.r(e);var i=a("998b"),n=a("4109");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"368b":function(t,e,a){"use strict";a.r(e);var i=a("d5f1"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"377b":function(t,e,a){"use strict";a.r(e);var i=a("fd27"),n=a("8690");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"3bd6":function(t,e,a){"use strict";var i=a("a75f"),n=a.n(i);n.a},4109:function(t,e,a){"use strict";a.r(e);var i=a("c6c6"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"436b":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",[a("v-toolbar-title",[t._v("Saugadesign - Custom Home Address signs")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{to:"/",text:""}},[t._v(" Home ")]),a("v-btn",{attrs:{to:"aboutus",text:""}},[t._v(" About us! ")]),a("v-btn",{attrs:{href:"#cart",text:""}},[t._v(" Cart ")])],1)],1)],1)},n=[]},"43ff":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Sidebar ")])},n=[]},"450f":function(t,e){t.exports={data:function(){return{prices:["Any","Under $25","$25 to $100","$100 to $500","Over $500"],priceFilter:0,checkbox:!0}}}},"472e":function(t,e,a){"use strict";var i=a("f030"),n=a.n(i);e["default"]=n.a},"490e":function(t,e,a){"use strict";a.r(e);var i=a("9fe4"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"50af":function(t,e,a){"use strict";a.r(e);var i=a("55cb"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},5200:function(t,e,a){"use strict";var i=a("436b"),n=a("0ff1"),s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"55cb":function(t,e){t.exports={props:{next:Function,previous:Function,rules:Object,data:Object}}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("bf40");var i=a("2b0e"),n=a("ce5b"),s=a.n(n),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("TopNav"),a("v-main",[a("router-view")],1)],1)},o=[],u=a("5200"),c={name:"app",components:{TopNav:u["default"]}},l=c,d=(a("034f"),a("2877")),f=Object(d["a"])(l,r,o,!1,null,null,null),m=f.exports,v=(a("d3b7"),a("db4d"),a("8c4f")),h=a("bb51"),b=a("2664"),p=a("b789"),g=a("7cb4"),y=a("2368");i["default"].use(v["a"]);var x=[{path:"/",name:"Home",component:h["default"]},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/aboutus",name:"aboutus",component:b["default"]},{path:"/cart",name:"cart",component:p["default"]},{path:"/checkout",name:"checkout",component:g["default"]},{path:"/thank-you",name:"thankyou",component:y["default"]}],C=new v["a"]({routes:x}),_=C,w=a("2f62");i["default"].use(w["a"]);var $=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("d5e8"),a("5363");i["default"].use(s.a),i["default"].use(v["a"]),i["default"].component("app",m),new i["default"]({Vue:i["default"],vuetify:new s.a,store:$,router:_,render:function(t){return t(m)}}).$mount("#app")},"5ced":function(t,e,a){},"5fc7":function(t,e,a){"use strict";a.r(e);var i=a("962a"),n=a("50af");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},7589:function(t,e,a){"use strict";a.r(e);var i=a("f46b"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"7ad4":function(t,e,a){"use strict";var i=a("9cae"),n=a.n(i);e["default"]=n.a},"7cb4":function(t,e,a){"use strict";var i=a("f2ad"),n=a("472e"),s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"7e50":function(t,e,a){"use strict";var i=a("ab1f"),n=a.n(i);e["default"]=n.a},"7e51":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",{staticClass:"container"},[i("v-img",{attrs:{src:a("7e71"),"aspect-ratio":"3"}},[i("h1",{staticClass:"vue-typer"},[t._v("Welcome to Sauga Design!")]),i("vue-typer",{staticClass:"vue-typer2",attrs:{text:["Get a quote and place an order below"],repeat:0,shuffle:!1,"initial-action":"typing","pre-type-delay":2600,"type-delay":50,"pre-erase-delay":166,"erase-delay":60,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"expand"}}),i("v-row",{class:t.font,attrs:{align:"end"}},[i("vue-typer",{staticClass:"Banner1",attrs:{text:["123 Address Sign"],repeat:0,shuffle:!1,"initial-action":"typing","pre-type-delay":5200,"type-delay":100,"pre-erase-delay":1500,"erase-delay":200,"erase-style":"backspace","erase-on-complete":!1,"caret-animation":"expand"}})],1)],1),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("div",[i("v-row",[i("v-col",[i("v-card",[i("h2",[t._v("Font Options")]),i("v-radio-group",{staticClass:"radio",attrs:{"text-align:center":"",mandatory:!0},model:{value:t.radio.value,callback:function(e){t.$set(t.radio,"value",e)},expression:"radio.value"}},[i("div",{staticClass:"overline mb-3"},[t._v("Classic")]),i("v-row",{staticClass:"container",attrs:{dense:""}},[i("v-radio",{staticClass:"radio-1",attrs:{label:"Edward",value:"1",id:"one"}}),i("v-radio",{staticClass:"radio-2",attrs:{label:"ALS",value:"2"}}),i("v-radio",{staticClass:"radio-6",attrs:{label:"Aerolite",value:"6"}}),i("v-radio",{staticClass:"radio-7",attrs:{label:"Script",value:"7"}})],1),i("div",{staticClass:"overline mb-3"},[t._v("Modern")]),i("v-row",{staticClass:"container",attrs:{dense:""}},[i("v-radio",{staticClass:"radio-4",attrs:{label:"Slimlines",value:"4"}}),i("v-radio",{staticClass:"radio-5",attrs:{label:"COPASETIC",value:"5"}}),i("v-radio",{staticClass:"radio-3",attrs:{label:"Kavo",value:"3"}})],1),i("div",{staticClass:"overline mb-3"},[t._v("Custom")]),i("v-row",{staticClass:"container",attrs:{dense:""}},[i("v-radio",{staticClass:"radio-8",attrs:{label:"Custom Font",value:"8"}}),i("div",{staticClass:"container"},["8"==t.radio.value?i("v-text-field",{attrs:{label:"Enter font name (Preview will not be availaible, we will contact you before finalizing)",rules:t.Rules,required:""},model:{value:t.isInstructions,callback:function(e){t.isInstructions=e},expression:"isInstructions"}}):t._e()],1)],1)],1)],1),i("v-divider"),i("v-card",[i("div",[i("h3",{staticClass:"container"},[t._v("Sign Preview:")]),i("div",{staticClass:"main2"},[i("v-card",{class:t.font},[t._v(t._s(t.overlay))])],1)]),i("div",{staticClass:"container"},[i("v-text-field",{ref:"Address",staticClass:"input",attrs:{label:"Enter Address Sign here!","hide-details":"auto",rules:t.Rules,required:""},model:{value:t.overlay,callback:function(e){t.overlay="string"===typeof e?e.trim():e},expression:"overlay"}})],1),i("div",{staticClass:"container"},[i("div",{staticClass:"selection"},[i("v-row",{attrs:{sm:"2"}},[i("v-select",{attrs:{id:"colour",items:t.items.colours,"item-value":t.items.colours.color,"item-text":"color",label:"Sign Colour (Acrylic)",dense:"",rules:t.Rules,required:""},model:{value:t.items.isColor.color,callback:function(e){t.$set(t.items.isColor,"color",e)},expression:"items.isColor.color"}})],1),i("v-row",["Black"===t.items.isColor.color?[i("v-select",{attrs:{items:t.items.finish,"item-value":t.items.finish,label:"Acrylic Finish",dense:"",rules:t.Rules,required:""},model:{value:t.isFinish,callback:function(e){t.isFinish=e},expression:"isFinish"}})]:t._e()],2),i("v-row",[i("v-select",{attrs:{items:t.items.height,"item-value":t.items.height,label:"Letter Height (Capital Letter height)",dense:"",rules:t.Rules,required:""},model:{value:t.isHeight,callback:function(e){t.isHeight=e},expression:"isHeight"}})],1),i("v-row",[i("v-select",{attrs:{items:t.items.install,"item-value":t.items.install,label:"Do you require installation?",dense:"",rules:t.Rules,required:""},model:{value:t.isInstall,callback:function(e){t.isInstall=e},expression:"isInstall"}})],1),"Yes"===t.isInstall?[i("v-select",{attrs:{items:t.items.location,"item-value":t.items.location,label:"Installation Quote by Region",dense:"",rules:t.Rules,required:""},model:{value:t.isLocation,callback:function(e){t.isLocation=e},expression:"isLocation"}}),i("div",{staticClass:"blue"},[t._v(" Please note that we do not install signs beyond 12 feet of height ")]),i("v-img",{attrs:{"aspect-ratio":"2",src:"https://github.com/zubairzia0/SaugaDesign-Site/blob/master/assets/GTA.png?raw=true"}})]:t._e(),"Other"===t.isLocation&&"Yes"===t.isInstall?[i("div",{staticClass:"red"},[t._v(" We only provide quotes for installations within the GTA region. If other is selected we can discuss your installation options when we reach out to you. if you have any questions click on the chat bubble on the bottom right and leave a message. You can also email us at saugadesign@gmail.com. ")])]:t._e(),"No"===t.isInstall?void 0:t._e(),i("v-row",[i("v-col",[i("v-text-field",{staticClass:"input",attrs:{id:"price",label:"Quoted: $","hide-details":"auto",readonly:""},model:{value:t.calculateCost,callback:function(e){t.calculateCost=e},expression:"calculateCost"}})],1)],1),i("v-btn",{class:t.validater(),attrs:{disabled:!t.valid,color:"success",id:"custom-sign","data-item-id":"custom-sign","data-item-price":"0.00","data-item-url":"/","data-item-description":"Custom made house address sign","data-item-image":"/assets/SaugaSignslogo.PNG","data-item-name":"Custom Sign","data-item-custom1-name":"Address Sign Text - do not change here","data-item-custom1-type":"textarea","data-item-custom1-required":"true","data-item-custom1-value":t.overlay,"data-item-custom10-name":"Number of digits & letters - do not change","data-item-custom10-value":t.isNumber,"data-item-custom10-options":"1[+6.78]|2[+13.56]|3[+20.34]|4[+27.12]|5[+33.9]|6[+40.68]|7[+47.46]\n                    |8[+54.24]|9[+54.24]|10[+61.02]|11[+74.58]|12[+81.36]|13[+88.14]|14[+94.92]|15[+101.7]|16[+108.48]|17[+115.26]|18[+122.04]|19[+128.82]|20[+135.6]|21[+142.38]\n                    |22[+149.16]|23[+155.94]|24[+162.72]|25[+169.5]|26[+176.28]|27[+183.06]|28[+189.84]|29[+196.62]|30[+203.4]","data-item-custom2-name":"Acrylic Colour","data-item-custom2-options":"Black|Red|White|Grey","data-item-custom2-required":"true","data-item-custom2-value":t.items.isColor.color,"data-item-custom3-name":"Acrylic Finish","data-item-custom3-options":"Glossy|Matte +$10[+10]","data-item-custom3-required":"true","data-item-custom3-value":t.isFinish,"data-item-custom4-name":"Font Choice","data-item-custom4-options":"Edward|Script|ALS|Kavo|Slimlines|Copasetic|Aerolite|Custom","data-item-custom4-required":"true","data-item-custom4-value":t.font,"data-item-custom9-name":"Letter Height","data-item-custom9-options":"8.5 Inch|9.5 Inch +$10[+10]|10.5 Inch +$20[+20]|Custom","data-item-custom9-required":"true","data-item-custom9-value":t.isHeight,"data-item-custom6-name":"Installation","data-item-custom6-options":"No|Yes","data-item-custom6-required":"true","data-item-custom6-value":t.isInstall,"data-item-custom7-name":"Installation Quote by Region","data-item-custom7-options":"N/A|Halton +$80[+80]|Peel +$80[+80]|City of Toronto +$100[+100]|York +$100[+100]|Durham +$120[+120]|Hamilton +$100[+100]|Other","data-item-custom7-value":t.isLocation,"data-item-custom8-name":"Phone Number","data-item-custom8-required":"true","data-item-custom13-name":"Any Special Instructions/Requests?","data-item-custom13-type":"textarea","data-item-custom13-value":t.isInstructions},on:{click:t.validate}},[t._v("*Add to cart")]),0==this.valid?i("div",{staticClass:"container"},[i("p",{staticClass:"red"},[t._v("Please fill all required fields above")])]):t._e()],2)])])],1)],1)],1),i("div"),i("v-divider"),i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600"}},[i("h2",[t._v("Client Photos")]),i("Lingallery",{attrs:{iid:t.currentId,width:600,height:400,items:[{id:"someid1",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide1.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide1.JPG?raw=true"},{id:"someid2",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide2.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide2.JPG?raw=true"},{id:"someid3",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide3.JPG?raw=true"},{id:"someid4",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide4.JPG?raw=true"},{id:"someid5",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide5.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide5.JPG?raw=true"},{id:"someid6",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide6.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide6.JPG?raw=true"},{id:"someid7",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide7.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide7.JPG?raw=true"},{id:"someid8",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide8.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide8.JPG?raw=true"},{id:"someid9",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide9.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide9.JPG?raw=true"},{id:"someid10",src:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide10.JPG?raw=true",thumbnail:"https://github.com/zubairzia0/saugasigns/blob/master/assets/Slide10.JPG?raw=true"}]},on:{"update:iid":function(e){t.currentId=e}}})],1)],1)],1)],1)},n=[],s=(a("a15b"),a("b680"),a("ac1f"),a("1276"),a("e956")),r=a("039c"),o=a.n(r),u={name:"App2",components:{VueTyper:s["VueTyper"],Lingallery:o.a},data:function(){return{items:{colours:[{color:"Black",id:1},{color:"Red",id:2},{color:"White",id:3},{color:"Grey",id:4}],isColor:{color:""},matte:!1,surface:["Brick","Stucco","Stone","Other"],finish:["Glossy","Matte +$10"],height:["8.5 Inch","9.5 Inch +$10","10.5 Inch +$20"],install:["Yes","No"],location:["Halton +$80","Hamilton +$100","Peel +$80","City of Toronto +$100","York +$100","Durham +$120","Other"],pickup:"",payNow:["Yes","No"],Delivery:["Yes","No"]},Rules:[function(t){return!!t||"required"}],valid:!1,currentId:"someid1",isSurface:"",isFinish:"",isHeight:"",isDeliver:"",isFont:"N/A",isInstall:"",isLocation:"",isInstructions:"",overlay:"",cost:0,radio:{value:""}}},computed:{LetterHeight:function(){return"9.5 Inch +$10"==this.isHeight?10:"10.5 Inch +$20"==this.isHeight?20:0},LocationPrice:function(){return"Matte +$10"==this.isFinish?"Yes"==this.isInstall&&"Halton +$80"==this.isLocation||"Yes"==this.isInstall&&"Peel +$80"==this.isLocation?90:"Yes"==this.isInstall&&"City of Toronto +$100"==this.isLocation||"Yes"==this.isInstall&&"York +$100"==this.isLocation||"Yes"==this.isInstall&&"Hamilton +$100"==this.isLocation?110:"Yes"==this.isInstall&&"Durham +$120"==this.isLocation?130:10:"Yes"==this.isInstall&&"Halton +$80"==this.isLocation||"Yes"==this.isInstall&&"Peel +$80"==this.isLocation?80:"Yes"==this.isInstall&&"City of Toronto +$100"==this.isLocation||"Yes"==this.isInstall&&"York +$100"==this.isLocation||"Yes"==this.isInstall&&"Hamilton +$100"==this.isLocation?100:"Yes"==this.isInstall&&"Durham +$120"==this.isLocation?120:0},letters:function(){return this.overlay.length},colorIs:function(){return this.isColor.color},calculateCost:function(){var t=this.overlay,e=t.split(" ").join(""),a=this.cost+this.LetterHeight+this.LocationPrice+6.78*e.length;return a.toFixed(2)},isNumber:function(){var t=this.overlay,e=t.split(" ").join("");return e.length},font:function(){return 1==this.radio.value?"Edward":7==this.radio.value?"Script":2==this.radio.value?"ALS":3==this.radio.value?"Kavo":4==this.radio.value?"Slimlines":5==this.radio.value?"Copasetic":6==this.radio.value?"Aerolite":8==this.radio.value?"Custom":""}},methods:{validate:function(){this.$refs.form.validate()},validater:function(){return""==this.letters||""==this.isColor||""==this.isHeight||""==this.isInstall||"Yes"==this.isInstall&&""===this.isLocation.strValue?"":"No"!=this.isInstall||""===this.isLocation?"snipcart-add-item":void(this.isLocation="")}}},c=u,l=(a("3bd6"),a("2877")),d=Object(l["a"])(c,i,n,!1,null,"1428f76e",null);e["default"]=d.exports},"7e71":function(t,e,a){t.exports=a.p+"img/house.17a9628c.jpg"},"85ec":function(t,e,a){},8690:function(t,e,a){"use strict";a.r(e);var i=a("a9bd"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"8a2c":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1400"}},[a("v-card-title",[t._v("Welcome to SaugaDesign!")]),a("v-card-text",{staticClass:"text--primary"},[a("p",[t._v(" We are located in Mississauga, Ontaio, Canada and have been creating custom laser cut products since 2016. Our designs are completely customizable and beautify and update the façade of your home. ")]),a("p",[t._v(" Our mission is to provide you with a one stop shop for customizable signs without hassle or high cost. We are passionate about our work and our friendly service and detailed craftsmanship is why our clients keep returning and referring us to their family and friends. We understand that little upgrades can make a substantial difference and our home signs do just that. We hope you enjoy our products as much as we enjoy creating and offering them to you. Let us help you create pride of ownership in your home and put your best foot forward with Sauga Design. ")]),a("h3",[t._v(" Also, if you want to talk just click on the chat bubble on the bottom right! ")])])],1)},n=[]},"8f05":function(t,e,a){"use strict";a.r(e);var i=a("43ff"),n=a("a628");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},9313:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Product List")])},n=[]},"953a":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Store")])},n=[]},"962a":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Shipping Info")])},n=[]},"98c4":function(t,e){t.exports={components:{}}},9906:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",[t._v(" © "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Sauga Design")])])},n=[],s={components:{}},r=s,o=a("2877"),u=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports},"998b":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Review")])},n=[]},"9cae":function(t,e,a){var i=a("7e51").default,n=a("9906").default;t.exports={components:{PopularProducts:i,Footer:n}}},"9fe4":function(t,e){t.exports={props:{next:Function,rules:Object,data:Object}}},a628:function(t,e,a){"use strict";a.r(e);var i=a("450f"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},a75f:function(t,e,a){},a9bd:function(t,e,a){a("a9e3"),t.exports={props:{product:Object,addToCart:Function,i:Number}}},ab1f:function(t,e,a){var i=a("8f05"),n=a("2a44");t.exports={components:{Sidebar:i,ProductDisplay:n}}},b789:function(t,e,a){"use strict";var i=a("1c5d"),n=a("272d"),s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},b916:function(t,e,a){"use strict";a.r(e);var i=a("d947"),n=a("baa9");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},baa9:function(t,e,a){"use strict";a.r(e);var i=a("df1c"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},bb51:function(t,e,a){"use strict";var i=a("1215"),n=a("7ad4"),s=(a("cccb"),a("2877")),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},c011:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" Products ")])},n=[]},c6c6:function(t,e){t.exports={props:{previous:Function,submitOrder:Function,data:Object}}},cccb:function(t,e,a){"use strict";var i=a("5ced"),n=a.n(i);n.a},d335:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Contact Info")])},n=[]},d5f1:function(t,e){t.exports={data:function(){return{checkoutForm:null,nameRules:[],name:"",emailRules:[],email:""}},methods:{goToCheckout:function(){this.$router.push({name:"checkout"})}}}},d947:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Horizontal Product")])},n=[]},df1c:function(t,e,a){a("a9e3"),t.exports={props:{product:Object,updateCart:Function,btnAction:String,i:Number}}},e00f:function(t,e,a){var i=a("25ad"),n=a("1ef9");t.exports={components:{ProductList:i,CheckoutBox:n}}},e7e9:function(t,e){t.exports={data:function(){return{drawer:!1}}}},e8a0:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Checkout Box")])},n=[]},f030:function(t,e,a){var i=a("2c52"),n=a("5fc7"),s=a("31ad");t.exports={components:{ContactInfo:i,ShippingInfo:n,Review:s},data:function(){return{step:1,checkoutForm:!1,data:{email:"",name:"",phone:"",street:"",state:"",zip:""},rules:{required:function(t){return!!t||"Required."},zip:function(t){return 5==t.length||"Must be five characters"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."},phone:function(t){var e=/\d{10}/;return e.test(t)||"Invalid phone number."}}}},methods:{next:function(){this.step+=1},previous:function(){this.step-=1},submitOrder:function(){this.$router.push({name:"thankyou"})}}}},f2ad:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Checkout")])},n=[]},f46b:function(t,e,a){var i=a("b916");t.exports={components:{HorizontalProduct:i},methods:{removeFromCart:function(){}}}},f9e8:function(t,e,a){"use strict";var i=a("98c4"),n=a.n(i);e["default"]=n.a},fd27:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("Vertical Product")])},n=[]}});
//# sourceMappingURL=app.a8e00769.js.map