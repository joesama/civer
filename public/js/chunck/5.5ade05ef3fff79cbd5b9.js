(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,7,9,11,12,14],{LdYb:function(t,e,n){"use strict";n.r(e);var i={components:{},data:function(){return{isOpen:!1}}},s=n("KHd+"),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hidden h-64 lg:block"})}),[],!1,null,null,null);e.default=a.exports},TQgo:function(t,e,n){"use strict";n.r(e);var i=n("ynTf"),s={directives:{onClickaway:n("x9sl").directive},props:{stylus:Object,nav:[Array,Object]},components:{MenuLink:i.default},data:function(){return{menu:this.nav,currentOpen:null}},methods:{away:function(){this.currentOpen=null},addOpen:function(t){this.currentOpen=this.currentOpen!==t&&t},getTextLink:function(t){return{stylus:{container:"sm:absolute top-0 list-reset sm:flex-1 items-center sm:mt-12 sm:w-56 rounded-b-lg",li:"py-2 px-2 bg-civer-gold text-sm leading-tight"},nav:t}}}},a=n("KHd+"),l=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.away,expression:"away"}],staticClass:"px-2 pt-2 pb-4 sm:flex sm:flex-shrink-0 sm:p-0 sm:p-r-4 leading-relaxed"},t._l(t.menu,(function(e,i){return n("div",{key:i,staticClass:"relative px-2 pr-4 sm:min-w-0 "},[void 0===e.sub?n("div",{staticClass:"py-1"},[n("inertia-link",{staticClass:"py-1",attrs:{href:e.path,method:"get"},on:{click:function(e){return t.addOpen(i)}}},[n("v-icon",{staticClass:"civer-gold fill-current",attrs:{name:void 0!==e.icon?e.icon:"link",label:e.title}}),t._v("\n        "+t._s(e.title)+"\n      ")],1)],1):n("div",[n("button",{staticClass:"py-1",on:{click:function(e){return t.addOpen(i)}}},[n("v-icon",{staticClass:"civer-gold fill-current",attrs:{name:void 0!==e.icon?e.icon:"angle-right",label:e.title}}),t._v("\n        "+t._s(e.title)+"\n      ")],1),t._v(" "),n("div",{class:t.currentOpen===i?"block":"hidden"},[n("menu-link",t._b({},"menu-link",t.getTextLink(e.sub),!1))],1)])])})),0)}),[],!1,null,null,null);e.default=l.exports},YHJh:function(t,e,n){"use strict";n.r(e);var i=n("rBnf"),s=n("LdYb"),a=n("tp5t"),l={components:{Navigation:i.default,Banner:s.default,PageContent:a.default},props:{},data:function(){return{}},methods:{}},r=n("KHd+"),c=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-screen w-screen"},[e("banner",{directives:[{name:"show",rawName:"v-show",value:void 0!==this.$page.nav.banner,expression:"$page.nav.banner !== undefined"}]}),this._v(" "),e("navigation"),this._v(" "),e("page-content",[this._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports},"a7q+":function(t,e,n){"use strict";n.r(e);var i=n("if8B"),s=n.n(i),a=n("ynTf"),l={directives:{onClickaway:n("x9sl").directive},components:{ProfileLink:a.default},props:{},data:function(){return{image:s.a,isOpen:!1}},methods:{away:function(){this.isOpen=!1},getTextLink:function(){return{container:"absolute top-0 sm:right-0 list-reset flex-1 items-center mt-12 w-48",li:"py-2 px-2 bg-civer-gold text-sm leading-tight"}}}},r=n("KHd+"),c=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.away,expression:"away"}],staticClass:"relative flex items-center float-right py-1 sm:py-0"},[n("div",{staticClass:"civer-gold font-hairline"},[t._v(t._s(t.$page.nav.user.name))]),t._v(" "),n("button",{on:{click:function(e){t.isOpen=!t.isOpen}}},[n("div",{staticClass:"mx-2 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none hover:border-white focus:border-white"},[n("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.image,alt:t.$page.nav.user.name}})])]),t._v(" "),n("div",{class:t.isOpen?"block":"hidden"},[n("profile-link",{attrs:{nav:t.$page.nav.profile,stylus:t.getTextLink()}})],1)])}),[],!1,null,null,null);e.default=c.exports},if8B:function(t,e){t.exports="/images/avatar.svg?c88ea4132eba5ac2db7ce48c1840bf9f"},rBnf:function(t,e,n){"use strict";n.r(e);var i=n("a7q+"),s=n("TQgo"),a={components:{Profile:i.default,NavLink:s.default},props:{},data:function(){return{isOpen:!1}},methods:{}},l=n("KHd+"),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inset-x-0 top-0 fixed bg-civer-dark-blue border-gold border-b-8 sm:flex sm:justify-between sm:items-between sm:px-4 sm:py-3 w-full z-30"},[n("div",{staticClass:"pr-4 text-center",staticStyle:{width:"48px","max-width":"120px","max-height":"36px"}},[void 0!==t.$page.site.logo?n("img",{staticClass:"object-center object-fill h-full",attrs:{src:t.$page.site.logo}}):t._e()]),t._v(" "),n("nav-link",{class:t.isOpen?"block":"hidden",attrs:{nav:t.$page.nav.menu}}),t._v(" "),n("div",{staticClass:"flex-1 items-center justify-end px-3 py-2 sm:p-0"},[n("div",{staticClass:"sm:hidden"},[n("button",{staticClass:"block text-gray-500 hover:text-white focus:text-white focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[t.isOpen?n("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}}):t._e(),t._v(" "),t.isOpen?t._e():n("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),t._v(" "),n("profile",{directives:[{name:"show",rawName:"v-show",value:null!==t.$page.nav.user,expression:"$page.nav.user !== null"}]})],1)}),[],!1,null,null,null);e.default=r.exports},tp5t:function(t,e,n){"use strict";n.r(e);var i=n("KHd+"),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-20 gradient-blue p-2 min-h-full h-auto w-full"},[n("div",{staticClass:"grid gap-1 grid-cols-3 gap-2"},[n("div",{staticClass:"col-span-2"},[n("div",{staticClass:"w-full h-auto min-h-full hidden sm:block bg-white rounded-lg p-1"},[t._t("default")],2)]),t._v(" "),n("div",{staticClass:"col-span-1"},[n("div",{staticClass:"grid grid-flow-col grid-cols-1 grid-rows-3 gap-4"},[n("div",{staticClass:"row-span-1 col-span-1 bg-white rounded-lg"},[n("div",{staticClass:"civer-info-grid m-1"},[n("div",{staticClass:"civer-info-divider rounded-t-lg"},[t._v("\n                "+t._s(t.__("auth.profile.title"))+"\n              ")]),t._v(" "),n("div",{staticClass:"civer-info-label"},[t._v(t._s(t.__("auth.profile.name")))]),t._v(" "),n("div",{staticClass:"civer-info-desc"},[t._v("\n                "+t._s(t.$page.nav.user.name)+"\n              ")]),t._v(" "),n("div",{staticClass:"civer-info-label"},[t._v(t._s(t.__("auth.profile.dept")))]),t._v(" "),n("div",{staticClass:"civer-info-desc"}),t._v(" "),n("div",{staticClass:"civer-info-label"},[t._v(t._s(t.__("auth.profile.phone")))]),t._v(" "),n("div",{staticClass:"civer-info-desc"}),t._v(" "),n("div",{staticClass:"civer-info-label rounded-bl-lg"},[t._v(t._s(t.__("auth.profile.email")))]),t._v(" "),n("div",{staticClass:"civer-info-desc rounded-br-lg"},[t._v("\n                "+t._s(t.$page.nav.user.email)+"\n              ")])])]),t._v(" "),n("div",{staticClass:"row-span-2 col-span-1 bg-white rounded-lg"})])])])])}),[],!1,null,null,null);e.default=s.exports},x9sl:function(t,e,n){"use strict";var i=n("XuX8");i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+i.version);var s="_vue_clickaway_handler";function a(t,e,n){l(t);var i=n.context,a=e.value;if("function"==typeof a){var r=!1;setTimeout((function(){r=!0}),0),t[s]=function(e){var n=e.path||(e.composedPath?e.composedPath():void 0);if(r&&(n?n.indexOf(t)<0:!t.contains(e.target)))return a.call(i,e)},document.documentElement.addEventListener("click",t[s],!1)}}function l(t){document.documentElement.removeEventListener("click",t[s],!1),delete t[s]}var r={bind:a,update:function(t,e){e.value!==e.oldValue&&a(t,e)},unbind:l},c={directives:{onClickaway:r}};e.version="2.2.2",e.directive=r,e.mixin=c},ynTf:function(t,e,n){"use strict";n.r(e);var i={props:{stylus:Object,nav:[Array,Object]},components:{},methods:{lastTab:function(t){return Object.keys(this.nav)[Object.keys(this.nav).length-1]===t}},data:function(){return{menu:this.nav}}},s=n("KHd+"),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.stylus.container},t._l(t.menu,(function(e,i){return n("li",{key:i,class:t.stylus.li+(t.lastTab(i)?" sm:rounded-b-lg":"")},[n("inertia-link",{staticClass:"flex",attrs:{href:e.path,method:void 0===e.method?"get":e.method}},[n("v-icon",{staticClass:"w-1/6",attrs:{name:void 0!==e.icon?e.icon:"angle-double-right"}}),t._v("\n      "+t._s(e.title)+"\n    ")],1)],1)})),0)}),[],!1,null,null,null);e.default=a.exports}}]);