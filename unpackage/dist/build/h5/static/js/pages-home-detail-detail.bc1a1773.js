(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-detail-detail"],{"0441":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.findArticleByPage=a,e.delCartItems=o,e.addPreOrder=s,e.getPreOrderById=c,e.addConfirmOrder=l;var r=n(i("7f42"));function a(){return(0,r.default)({url:"/lejuClient/cart/findAllCartItem"})}function o(t){return(0,r.default)({url:"/lejuClient/cart/delCartItems",data:t,method:"POST"})}function s(t){return(0,r.default)({url:"/lejuClient/order/addPreOrder",data:t,method:"POST"})}function c(t){return(0,r.default)({url:"/lejuClient/order/getPreOrderById/".concat(t)})}function l(t){return(0,r.default)({url:"/lejuClient/order/addConfirmOrder",method:"POST",data:t})}},"06c5":function(t,e,i){"use strict";i("a630"),i("fb6a"),i("d3b7"),i("25f0"),i("3ca3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=r(i("6b75"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(t){if("string"===typeof t)return(0,n.default)(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,n.default)(t,e):void 0}}},"0799":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},a=[]},1782:function(t,e,i){"use strict";var n=i("5a40"),r=i.n(n);r.a},"3b15":function(t,e,i){i("ac1f"),i("1276");var n={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:r(" , ,\t,\r,\n,\f"),boolAttrs:r("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:r("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:r("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),richOnlyTags:r("a,colgroup,fieldset,legend"),selfClosingTags:r("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:r("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}};function r(t){for(var e=Object.create(null),i=t.split(","),n=i.length;n--;)e[i[n]]=!0;return e}t.exports=n},"3ed4":function(t,e,i){"use strict";i.r(e);var n=i("7219"),r=i("5dea");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("4163");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"92b0c642",null,!1,n["a"],o);e["default"]=c.exports},4163:function(t,e,i){"use strict";var n=i("7fc5"),r=i.n(n);r.a},"5a40":function(t,e,i){var n=i("f3f7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("1fd440fc",n,!0,{sourceMap:!1,shadowMode:!1})},"5dea":function(t,e,i){"use strict";i.r(e);var n=i("abe9"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},6204:function(t,e,i){"use strict";i.r(e);var n=i("6a22"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},6767:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"lc-numberBox"},[i("v-uni-view",{staticClass:"lc-minus",style:{color:t.color,"border-color":t.color,"border-radius":t.fillet?"99px":"0rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.minus.apply(void 0,arguments)}}},[t._v("-")]),i("v-uni-view",{staticClass:"lc-number"},[i("v-uni-input",{style:{width:20*t.inputValue.toString().length+"rpx"},attrs:{type:"number",disabled:t.isDisabled},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}})],1),i("v-uni-view",{staticClass:"lc-add",style:{color:t.color,"border-color":t.color,"border-radius":t.fillet?"99px":"0rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[t._v("+")])],1)},a=[]},"67f8":function(t,e,i){"use strict";i.r(e);var n=i("6767"),r=i("6204");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("1782");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"d25e83e0",null,!1,n["a"],o);e["default"]=c.exports},"6a22":function(t,e,i){"use strict";i("a9e3"),i("acd8"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"lc-number-box",props:{value:{type:[Number,String],default:1},min:{type:Number,default:-999999},max:{type:Number,default:999999},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},color:{type:[Number,String],default:"#57d07f"},fillet:{type:Boolean,default:!0}},created:function(){this.inputValue=+this.value,this.isDisabled=this.disabled,this.inputStep=parseFloat(this.step)},data:function(){return{inputValue:0,isDisabled:!1,inputStep:1}},watch:{value:function(t){this.inputValue=+t},inputValue:function(t,e){+t!==+e&&this.$emit("change",t)}},methods:{minus:function(){parseInt(this.inputValue)-parseInt(this.inputStep)<this.min||(this.inputValue=parseInt(this.inputValue)-parseInt(this.inputStep))},add:function(){parseInt(this.inputValue)+parseInt(this.inputStep)>this.max||(this.inputValue=parseInt(this.inputValue)+parseInt(this.inputStep))}}};e.default=n},"6b75":function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},7219:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={jyfParser:i("cadc").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"prodetail"},[n("v-uni-view",{staticClass:"my-swiper"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{circular:"true","indicator-dots":"true",autoplay:"true"}},t._l(t.banner,(function(t){return n("v-uni-swiper-item",{key:t.id},[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{attrs:{src:t,mode:""}})],1)],1)})),1),n("v-uni-view",{staticClass:"collect"},[n("v-uni-image",{attrs:{src:i("211d"),mode:""}})],1)],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"price"},[n("v-uni-text",[t._v("￥")]),t._v(t._s(t.product.price))],1),n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.product.name))]),n("v-uni-view",{staticClass:"detail"},[t._v(t._s(t.product.description))]),n("jyf-parser",{ref:"article",attrs:{html:t.product.detailMobileHtml}})],1),n("v-uni-view",{staticClass:"footer"},[n("v-uni-view",{staticClass:"server"},[n("v-uni-image",{attrs:{src:i("d5cc"),mode:""}})],1),n("v-uni-view",{staticClass:"btn-box"},[n("v-uni-view",{staticClass:"btn buy-car",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addCar.apply(void 0,arguments)}}},[t._v("添加购物车")]),n("v-uni-view",{staticClass:"btn buy-now",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buyNow.apply(void 0,arguments)}}},[t._v("立即购买")])],1)],1),t.isShow?n("v-uni-view",{staticClass:"mask"},[n("v-uni-view",{staticClass:"mask-c"},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:t.showData.pic,mode:""}})],1),n("v-uni-view",{staticClass:"name"},[n("v-uni-text",[t._v("单人沙发")]),n("v-uni-text",[t._v("库存数量"+t._s(t.showData.stock))])],1),n("v-uni-view",{staticClass:"close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isShow=!t.isShow}}},[n("v-uni-image",{attrs:{src:i("b32e"),mode:""}})],1),n("v-uni-view",{staticClass:"select"},[n("v-uni-view",{staticClass:"title"},[t._v("商品选择")]),t._l(t.skuList,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"li",class:{active:t.cur==i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.select(i)}}},t._l(e.spData,(function(e,i){return n("v-uni-text",{key:i},[t._v(t._s(e.key)+":"+t._s(e.value))])})),1)}))],2),n("v-uni-view",{staticClass:"select"},[n("v-uni-view",{staticClass:"title"},[t._v("特色服务")]),n("v-uni-view",{staticClass:"li"},[t._v("送货上门")]),n("v-uni-view",{staticClass:"li"},[t._v("上门安装")])],1),n("v-uni-view",{staticClass:"buy-num select"},[n("v-uni-view",{staticClass:"title"},[t._v("购买数量")]),n("lc-number-box",{attrs:{value:t.num,min:1,disabled:!0,step:1},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.numChange.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"btn",attrs:{type:"default"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.define.apply(void 0,arguments)}}},[t._v("确定")])],1)],1):t._e()],1)},a=[]},7570:function(t,e,i){"use strict";var n=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("e25e"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("841c"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=n(i("b85c")),o=uni.getSystemInfoSync(),s=o.windowWidth,c=(o.platform,i("3b15")),l={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,n=e.split("://")[0],r=n.length;i=e[r];r++){if("/"==i&&"/"!=e[r-1]&&"/"!=e[r+1])break;n+=Math.random()>.5?i.toUpperCase():i}return n+=e.substr(r),this[t]=n}if(this[t]=e,e.includes("data:image")){var a=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!a)return}}}},mounted:function(){var t=this;this.document=document.getElementById("rtf"+this._uid),r&&(this.search=function(e){return r(t,e)}),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var n=document.createElement("div");e?this.rtf?this.rtf.appendChild(n):this.rtf=n:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=n),n.innerHTML=this._handleHtml(t,e);for(var r,o=this.rtf.getElementsByTagName("style"),l=0;r=o[l++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,n=0;e=t[n++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var u=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:d[0].innerText});var f=function(t){var e=t.getAttribute("src");i.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(i.domain.includes("://")?i.domain.split("://")[0]:"")+":"+e:t.src=i.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=i.domain+"/"+e))};this.imgList.length=0;for(var p,h=this.rtf.getElementsByTagName("img"),b=0,v=0;p=h[b];b++)parseInt(p.style.width||p.getAttribute("width"))>s&&(p.style.height="auto"),f(p),p.hasAttribute("ignore")||"A"==p.parentElement.nodeName||(p.i=v++,u.imgList.push(p.getAttribute("original-src")||p.src||p.getAttribute("data-src")),p.onclick=function(t){t.stopPropagation();var e=!0;this.ignore=function(){return e=!1},u.$emit("imgtap",this),e&&uni.previewImage({current:this.i,urls:u.imgList})}),p.onerror=function(){c.errorImg&&(u.imgList[this.i]=this.src=c.errorImg),u.$emit("error",{source:"img",target:this})},u.lazyLoad&&this._observer&&p.src&&0!=p.i&&(p.setAttribute("data-src",p.src),p.removeAttribute("src"),this._observer.observe(p));var m,g=this.rtf.getElementsByTagName("a"),w=(0,a.default)(g);try{for(w.s();!(m=w.n()).done;){var y=m.value;y.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(u.$emit("linkpress",{href:i,ignore:function(){return e=!1}}),e&&i)if("#"==i[0])u.useAnchor&&u.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;uni.navigateTo({url:i})}return!1}}}catch(N){w.e(N)}finally{w.f()}var A=this.rtf.getElementsByTagName("video");u.videoContexts=A;for(var x,k=0;x=A[k++];)f(x),x.style.maxWidth="100%",x.onerror=function(){u.$emit("error",{source:"video",target:this})},x.onplay=function(){if(u.autopause)for(var t,e=0;t=u.videoContexts[e++];)t!=this&&t.pause()};var C,I,S=this.rtf.getElementsByTagName("audio"),B=(0,a.default)(S);try{for(B.s();!(C=B.n()).done;){var E=C.value;f(E),E.onerror=function(){u.$emit("error",{source:"audio",target:this})}}}catch(N){B.e(N)}finally{B.f()}if(this.autoscroll){var T,j=this.rtf.getElementsByTagName("table"),R=(0,a.default)(j);try{for(R.s();!(T=R.n()).done;){var z=T.value,L=document.createElement("div");L.style.overflow="scroll",z.parentNode.replaceChild(L,z),L.appendChild(z)}}catch(N){R.e(N)}finally{R.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==I&&(i.$emit("ready",i.rect),clearInterval(i._timer)),I=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",n=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?n.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():n.selectViewport().scrollOffset(),n.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var n=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=n:uni.pageScrollTo({scrollTop:n,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var n in c.userAgentStyles)i+="".concat(n,"{").concat(c.userAgentStyles[n],"}");for(n in this.tagStyle)i+="".concat(n,"{").concat(this.tagStyle[n],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*s/750+"px"}))),t}}};e.default=l},"7fc5":function(t,e,i){var n=i("de60");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("4dda39b8",n,!0,{sourceMap:!1,shadowMode:!1})},"85d5":function(t,e,i){"use strict";i.r(e);var n=i("7570"),r=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"9eb9":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.productDetail=a,e.addCart=o;var r=n(i("7f42"));function a(t){return(0,r.default)({url:"/lejuClient/product/productDetail/".concat(t)})}function o(t){return(0,r.default)({url:"/lejuClient/cart/addCart",method:"POST",data:t})}},abe9:function(t,e,i){"use strict";var n=i("4ea4");i("4160"),i("ac1f"),i("1276"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("9eb9"),a=i("0441"),o=n(i("cadc")),s=n(i("67f8")),c=n(i("faf1")),l={components:{jyfParser:o.default,lcNumberBox:s.default},mixins:[c.default],data:function(){return{product:"",banner:[],skuList:[],isShow:!1,showData:{},type:"",cur:0,num:1}},methods:{toBuyNow:function(){var t={orderItemList:[]},e={cartId:"",productId:this.product.id,productQuantity:this.num,productSkuId:this.showData.id};t.orderItemList.push(e),(0,a.addPreOrder)(t).then((function(t){uni.navigateTo({url:"../../car/orderDetail/orderDetail?id=".concat(t.data.orderId)}),console.log(t)}))},buyNow:function(){this.isShow=!this.isShow,this.showData=this.skuList[0],this.type="buyNow"},addToCar:function(){var t=this,e={productId:this.product.id,productSkuId:this.showData.id,quantity:this.num};(0,r.addCart)(e).then((function(e){e.success&&(wx.showToast({title:"添加成功"}),t.isShow=!t.isShow),console.log(e)}))},define:function(){"buyNow"==this.type?this.isloginFun(this.toBuyNow):this.isloginFun(this.addToCar)},numChange:function(t){this.num=t},select:function(t){this.cur=t},addCar:function(){this.isShow=!this.isShow,this.showData=this.skuList[0]},init:function(t){var e=this;(0,r.productDetail)(t).then((function(t){e.product=t.data.product,e.banner=t.data.product.albumPics.split(",");var i=t.data.product.skuList;i.forEach((function(t){return t.spData=JSON.parse(t.spData)})),e.skuList=i,uni.setNavigationBarTitle({title:t.data.product.name})}))}},onLoad:function(t){this.init(t.id)}};e.default=l},b32e:function(t,e){t.exports="data:image/png;base64,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"},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var n=r(i("06c5"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(c)throw o}}}}},bc75:function(t,e,i){"use strict";var n=i("c5f7"),r=i.n(n);r.a},c5f7:function(t,e,i){var n=i("d6ae");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("4f06").default;r("0dc7b4cd",n,!0,{sourceMap:!1,shadowMode:!1})},cadc:function(t,e,i){"use strict";i.r(e);var n=i("0799"),r=i("85d5");for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("bc75");var o,s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"8280ebf6",null,!1,n["a"],o);e["default"]=c.exports},d5cc:function(t,e){t.exports="data:image/png;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC"},d6ae:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-8280ebf6{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-8280ebf6{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},de60:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.mask[data-v-92b0c642]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(0,0,0,.4);-webkit-box-sizing:border-box;box-sizing:border-box}.mask .mask-c[data-v-92b0c642]{width:314px;height:463px;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;-webkit-border-radius:%?40?%;border-radius:%?40?%;background-color:#fff}.mask .mask-c .buy-num[data-v-92b0c642]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.mask .mask-c .li[data-v-92b0c642]{-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid transparent;float:left;width:100%;padding-left:5px;height:30px;color:#3e3e3e;font-size:13px;text-align:center;line-height:30px;background:#f2f4f3;-webkit-border-radius:10px;border-radius:10px;border-radius:10px;margin:5px}.mask .mask-c .active[data-v-92b0c642]{border:2px solid #000}.mask .mask-c .title[data-v-92b0c642]{font-size:14px;color:#3e3e3e;line-height:20px;letter-spacing:2px;font-weight:600}.mask .mask-c .select[data-v-92b0c642]{-webkit-box-sizing:border-box;box-sizing:border-box;margin:14px 28px;padding:0 4px;overflow:hidden}.mask .mask-c .img[data-v-92b0c642]{width:%?192?%;height:%?192?%;background-color:red;position:absolute;top:%?-50?%;left:%?60?%}.mask .mask-c .img uni-image[data-v-92b0c642]{width:%?192?%;height:%?192?%}.mask .mask-c .name[data-v-92b0c642]{font-size:14px;color:#3e3e3e;margin-left:142px;margin-top:42px;font-weight:600;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.mask .mask-c .name uni-text[data-v-92b0c642]:nth-child(2){font-size:12px;color:#b0b0b0;margin-top:3px;line-height:16px}.mask .mask-c .close[data-v-92b0c642]{width:%?40?%;height:%?40?%;-webkit-border-radius:50%;border-radius:50%;overflow:hidden;position:absolute;right:%?40?%;top:%?40?%}.mask .mask-c .close uni-image[data-v-92b0c642]{width:%?40?%;height:%?40?%}.mask .mask-c .btn[data-v-92b0c642]{width:104px;height:40px;background:#354e44;-webkit-border-radius:14px;border-radius:14px;border-radius:14px;margin:24px auto;color:#fff;font-size:16px;text-align:center;line-height:40px}.prodetail[data-v-92b0c642]{padding-bottom:%?120?%}.my-swiper[data-v-92b0c642]{position:relative}.my-swiper .swiper[data-v-92b0c642]{width:100%;height:%?634?%}.my-swiper .swiper uni-image[data-v-92b0c642]{width:100%;height:%?634?%}.my-swiper .collect[data-v-92b0c642]{position:absolute;right:%?100?%;bottom:%?-50?%;width:%?100?%;height:%?100?%;background-color:#354e44;-webkit-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-swiper .collect uni-image[data-v-92b0c642]{width:%?56?%;height:%?56?%}.main[data-v-92b0c642]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 34px;margin-top:%?40?%}.main .price[data-v-92b0c642]{line-height:30px;color:#f2270c;font-size:30px}.main .price uni-text[data-v-92b0c642]{font-size:16px}.main .name[data-v-92b0c642]{color:#262626;overflow:hidden;font-size:16px;font-weight:700}.main .detail[data-v-92b0c642]{font-size:12px;padding:18px 0 0;line-height:1.3;color:#666;margin-bottom:%?40?%}.footer[data-v-92b0c642]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 34px;position:fixed;bottom:0;left:0;height:%?120?%;width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.footer .btn[data-v-92b0c642]{width:119px;height:40px;font-size:15px;color:#fff;line-height:40px;text-align:center;background-color:#354e44}.footer .buy-car[data-v-92b0c642]{background-color:#e2e2e2;color:#8f8f94}.footer uni-image[data-v-92b0c642]{width:%?60?%;height:%?60?%}.footer .btn-box[data-v-92b0c642]{display:-webkit-box;display:-webkit-flex;display:flex}',""]),t.exports=e},f3f7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.lc-numberBox[data-v-d25e83e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.lc-numberBox .lc-minus[data-v-d25e83e0],\r\n.lc-numberBox .lc-add[data-v-d25e83e0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?40?%;height:%?40?%;-webkit-border-radius:%?50?%;border-radius:%?50?%;font-size:%?40?%;color:#57d07f;border:1px solid #57d07f}.lc-numberBox .lc-number[data-v-d25e83e0]{padding:0 %?30?%}',""]),t.exports=e},faf1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={methods:{isloginFun:function(t){this.checkHasLogined()&&t()},checkHasLogined:function(){var t=uni.getStorageSync("token");return!!t||(uni.showModal({title:"登录",content:"暂未登录，是否立即登录",success:function(t){t.confirm?uni.navigateTo({url:"/pages/user/login/login"}):uni.showToast({title:"您取消了"})}}),!1)}},onShow:function(){var t=getCurrentPages(),e=t[t.length-1].route;"pages/home/detail/detail"!=e&&this.checkHasLogined()}},r=n;e.default=r}}]);