(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address-address"],{3282:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return d})),n.d(e,"a",(function(){return a}));var a={uniIcons:n("ae18").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"list"},t._l(t.addressLs,(function(e){return n("v-uni-view",{key:e.id,staticClass:"li",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.selectAddress(e)}}},[n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"name"},[n("v-uni-text",[t._v(t._s(e.name))]),1==e.defaultStatus?n("v-uni-text",{staticClass:"default"},[t._v("默认")]):t._e()],1),n("v-uni-view",{staticClass:"phone"},[t._v(t._s(e.phoneNumber))])],1),n("v-uni-navigator",{staticClass:"edit",attrs:{url:"./addAddress/addAddress?id="+e.id}},[n("uni-icons",{staticClass:"my-uni-icon",attrs:{type:"compose",size:"25",color:"#777"}})],1)],1)})),1),n("v-uni-view",{staticClass:"add"},[n("v-uni-navigator",{staticClass:"btn",attrs:{url:"./addAddress/addAddress"}},[t._v("新增地址")])],1)],1)},d=[]},"5dd3":function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.findAllAddress=d,e.updateAddressInfo=s,e.switchDefault=r,e.delAddressInfo=o,e.addAddressInfo=l;var i=a(n("7f42"));function d(){return(0,i.default)({url:"/lejuClient/address/findAllAddress"})}function s(t){return(0,i.default)({url:"/lejuClient/address/updateAddressInfo",method:"POST",data:t})}function r(t,e){return(0,i.default)({url:"/lejuClient/address/switchDefault/".concat(t,"/").concat(e),method:"POST"})}function o(t){return(0,i.default)({url:"/lejuClient/address/delAddressInfo/".concat(t),method:"DELETE"})}function l(t){return(0,i.default)({url:"/lejuClient/address/addAddressInfo",method:"POST",data:t})}},"8eb4":function(t,e,n){"use strict";var a=n("c441"),i=n.n(a);i.a},a32c:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.list .li[data-v-d54daa70]{width:94%;padding:10px 0;border-bottom:1Px solid #ccc;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .li .edit[data-v-d54daa70]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:40px;height:30px;border-left:solid 1px #aaa;font-size:20px;color:#777}.list .li .info[data-v-d54daa70]{margin-left:15px;font-size:12px;color:#999}.list .li .info .name[data-v-d54daa70]{margin-bottom:10px;font-size:14px;color:#000}.list .li .default[data-v-d54daa70]{font-size:11px;background-color:#354e44;color:#fff;padding:0 9px;-webkit-border-radius:4px;border-radius:4px;margin-left:10px}.list .li .edit[data-v-d54daa70]{-webkit-box-pack:right;-webkit-justify-content:right;justify-content:right;width:40px;height:30px;border-left:solid 1px #aaa;font-size:20px}.list .li .edit .my-uni-icon[data-v-d54daa70]{color:#777;margin-left:%?25?%}.add[data-v-d54daa70]{position:fixed;bottom:0;width:100%;height:60px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex}.add .btn[data-v-d54daa70]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-shadow:0 2px 5px rgba(0,0,0,.4);box-shadow:0 2px 5px rgba(0,0,0,.4);width:70%;height:40px;-webkit-border-radius:40px;border-radius:40px;background-color:#354e44;color:#fff;margin:0 auto;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:15px}',""]),t.exports=e},c028:function(t,e,n){"use strict";n.r(e);var a=n("3282"),i=n("ffbf");for(var d in i)"default"!==d&&function(t){n.d(e,t,(function(){return i[t]}))}(d);n("8eb4");var s,r=n("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"d54daa70",null,!1,a["a"],s);e["default"]=o.exports},c441:function(t,e,n){var a=n("a32c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("a1a8a136",a,!0,{sourceMap:!1,shadowMode:!1})},dc39:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("5dd3"),d=a(n("ae18")),s={components:{uniIcons:d.default},data:function(){return{addressLs:[]}},methods:{selectAddress:function(t){var e=getCurrentPages(),n=e[e.length-2].route;"pages/car/orderDetail/orderDetail"==n&&(uni.setStorageSync("address",t),uni.navigateBack({delta:1}))},getAddress:function(){var t=this;(0,i.findAllAddress)().then((function(e){t.addressLs=e.data.items,console.log(e)}))}},onShow:function(){this.getAddress()}};e.default=s},ffbf:function(t,e,n){"use strict";n.r(e);var a=n("dc39"),i=n.n(a);for(var d in a)"default"!==d&&function(t){n.d(e,t,(function(){return a[t]}))}(d);e["default"]=i.a}}]);