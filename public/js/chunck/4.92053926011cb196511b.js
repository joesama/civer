(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,7,8,10,11,13],{LdYb:function(t,e,n){"use strict";n.r(e);var s={components:{},data:function(){return{isOpen:!1}}},i=n("KHd+"),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hidden h-64 lg:block"})}),[],!1,null,null,null);e.default=a.exports},TQgo:function(t,e,n){"use strict";n.r(e);var s=n("ynTf"),i={props:{stylus:Object,nav:[Array,Object]},components:{MenuLink:s.default},data:function(){return{menu:this.nav,currentOpen:""}},created:function(){},methods:{addOpen:function(t){this.currentOpen=this.currentOpen!==t&&t},getTextLink:function(t){return{stylus:{container:"sm:absolute top-0 list-reset sm:flex-1 items-center sm:mt-12 sm:w-56 rounded-b-lg",li:"py-2 px-2 bg-civer-gold text-sm leading-tight"},nav:t}}}},a=n("KHd+"),l=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"px-2 pt-2 pb-4 sm:flex sm:flex-shrink-0 sm:p-0 sm:p-r-4 leading-relaxed"},t._l(t.menu,(function(e,s){return n("div",{key:s,staticClass:"relative px-2 pr-4 sm:min-w-0 "},[void 0===e.sub?n("div",{staticClass:"py-1"},[n("inertia-link",{staticClass:"py-1",attrs:{href:e.path,method:"get"},on:{click:function(e){return t.addOpen(s)}}},[n("v-icon",{staticClass:"civer-gold fill-current",attrs:{name:void 0!==e.icon?e.icon:"link"}}),t._v("\n        "+t._s(e.title)+"\n      ")],1)],1):n("div",[n("button",{staticClass:"py-1",on:{click:function(e){return t.addOpen(s)}}},[n("v-icon",{staticClass:"civer-gold fill-current",attrs:{name:void 0!==e.icon?e.icon:"angle-right"}}),t._v("\n        "+t._s(e.title)+"\n      ")],1),t._v(" "),n("div",{class:t.currentOpen===s?"block":"hidden"},[n("menu-link",t._b({},"menu-link",t.getTextLink(e.sub),!1))],1)])])})),0)}),[],!1,null,null,null);e.default=l.exports},YHJh:function(t,e,n){"use strict";n.r(e);var s=n("rBnf"),i=n("LdYb"),a=n("tp5t"),l={components:{Navigation:s.default,Banner:i.default,PageContent:a.default},props:{},data:function(){return{}},methods:{}},r=n("KHd+"),c=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-screen w-screen"},[e("banner",{directives:[{name:"show",rawName:"v-show",value:void 0!==this.$page.nav.banner,expression:"$page.nav.banner !== undefined"}]}),this._v(" "),e("navigation"),this._v(" "),e("page-content",[this._t("default")],2)],1)}),[],!1,null,null,null);e.default=c.exports},"a7q+":function(t,e,n){"use strict";n.r(e);var s=n("if8B"),i=n.n(s),a={components:{ProfileLink:n("ynTf").default},props:{},data:function(){return{image:i.a,isOpen:!1}},methods:{getTextLink:function(){return{container:"absolute top-0 sm:right-0 list-reset flex-1 items-center mt-12 w-48",li:"py-2 px-2 bg-civer-gold text-sm leading-tight"}}}},l=n("KHd+"),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative flex items-center float-right py-1 sm:py-0"},[n("div",{staticClass:"civer-gold font-hairline"},[t._v(t._s(t.$page.nav.user.name))]),t._v(" "),n("button",{on:{click:function(e){t.isOpen=!t.isOpen}}},[n("div",{staticClass:"mx-2 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none hover:border-white focus:border-white"},[n("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.image,alt:t.$page.nav.user.name}})])]),t._v(" "),n("div",{class:t.isOpen?"block":"hidden"},[n("profile-link",{attrs:{nav:t.$page.nav.profile,stylus:t.getTextLink()}})],1)])}),[],!1,null,null,null);e.default=r.exports},if8B:function(t,e){t.exports="/images/avatar.svg?c88ea4132eba5ac2db7ce48c1840bf9f"},rBnf:function(t,e,n){"use strict";n.r(e);var s=n("a7q+"),i=n("TQgo"),a={components:{Profile:s.default,NavLink:i.default},props:{},data:function(){return{isOpen:!1}},methods:{}},l=n("KHd+"),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inset-x-0 top-0 fixed bg-civer-dark-blue border-gold border-b-8 sm:flex sm:justify-between sm:items-between sm:px-4 sm:py-3 w-full z-30"},[n("nav-link",{class:t.isOpen?"block":"hidden",attrs:{nav:t.$page.nav.menu}}),t._v(" "),n("div",{staticClass:"flex-1 items-center justify-end px-3 py-2 sm:p-0"},[n("div",{staticClass:"sm:hidden"},[n("button",{staticClass:"block text-gray-500 hover:text-white focus:text-white focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[n("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[t.isOpen?n("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}}):t._e(),t._v(" "),t.isOpen?t._e():n("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),t._v(" "),n("profile",{directives:[{name:"show",rawName:"v-show",value:null!==t.$page.nav.user,expression:"$page.nav.user !== null"}]})],1)}),[],!1,null,null,null);e.default=r.exports},tp5t:function(t,e,n){"use strict";n.r(e);var s=n("KHd+"),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-20 gradient-blue p-2 min-h-full h-auto w-full"},[n("div",{staticClass:"w-full h-auto min-h-full grid sm:grid-rows-5 sm:grid-flow-col-dense gap-4"},[n("div",{staticClass:"hidden sm:block sm:row-span-5 sm:col-span-6 bg-white rounded-lg p-1"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"row-span-1 col-span-1 bg-white rounded-lg"},[n("div",{staticClass:"civer-info-grid m-1"},[n("div",{staticClass:"civer-info-divider rounded-t-lg"},[t._v("\n            "+t._s(t.__("auth.profile.title"))+"\n          ")]),t._v(" "),n("div",{staticClass:"civer-info-label"},[t._v(t._s(t.__("auth.profile.name")))]),t._v(" "),n("div",{staticClass:"civer-info-desc"},[t._v("\n            "+t._s(t.$page.nav.user.name)+"\n          ")]),t._v(" "),n("div",{staticClass:"civer-info-label"},[t._v(t._s(t.__("auth.profile.dept")))]),t._v(" "),n("div",{staticClass:"civer-info-desc"}),t._v(" "),n("div",{staticClass:"civer-info-label"},[t._v(t._s(t.__("auth.profile.phone")))]),t._v(" "),n("div",{staticClass:"civer-info-desc"}),t._v(" "),n("div",{staticClass:"civer-info-label rounded-bl-lg"},[t._v(t._s(t.__("auth.profile.email")))]),t._v(" "),n("div",{staticClass:"civer-info-desc rounded-br-lg"},[t._v("\n            "+t._s(t.$page.nav.user.email)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"row-span-4 col-span-1 bg-white rounded-lg"})])])}),[],!1,null,null,null);e.default=i.exports},ynTf:function(t,e,n){"use strict";n.r(e);var s={props:{stylus:Object,nav:[Array,Object]},components:{},methods:{lastTab:function(t){return Object.keys(this.nav)[Object.keys(this.nav).length-1]===t}},data:function(){return{menu:this.nav}}},i=n("KHd+"),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.stylus.container},t._l(t.menu,(function(e,s){return n("li",{key:s,class:t.stylus.li+(t.lastTab(s)?" sm:rounded-b-lg":"")},[n("inertia-link",{staticClass:"flex",attrs:{href:e.path,method:"get"}},[n("v-icon",{staticClass:"w-1/6",attrs:{name:"angle-right"}}),t._v("\n      "+t._s(e.title)+"\n    ")],1)],1)})),0)}),[],!1,null,null,null);e.default=a.exports}}]);