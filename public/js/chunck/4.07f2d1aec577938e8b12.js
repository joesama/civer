(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,7,9,10,12],{LdYb:function(t,e,s){"use strict";s.r(e);var n={components:{},data:function(){return{isOpen:!1}}},a=s("KHd+"),i=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hidden h-64 lg:block"})}),[],!1,null,null,null);e.default=i.exports},YHJh:function(t,e,s){"use strict";s.r(e);var n=s("rBnf"),a=s("LdYb"),i=s("tp5t"),r={components:{Navigation:n.default,Banner:a.default,PageContent:i.default},props:{},data:function(){return{}},methods:{}},l=s("KHd+"),o=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"h-screen w-screen"},[e("banner",{directives:[{name:"show",rawName:"v-show",value:void 0!==this.$page.nav.banner,expression:"$page.nav.banner !== undefined"}]}),this._v(" "),e("navigation"),this._v(" "),e("page-content",[this._t("default")],2)],1)}),[],!1,null,null,null);e.default=o.exports},"a7q+":function(t,e,s){"use strict";s.r(e);var n=s("if8B"),a=s.n(n),i={components:{ProfileLink:s("ynTf").default},props:{},data:function(){return{image:a.a,isOpen:!1}},methods:{getTextLink:function(){return{stylus:{container:"absolute top-0 right-0  list-reset flex-1 items-center mt-12 w-48 border-2 border-t-4 border-gold",li:"py-2 px-2 bg-civer-blue"},nav:this.getProfileNavigation()}},getProfileNavigation:function(){return[{desc:"Logout",href:"entree",method:"Register"}]}}},r=s("KHd+"),l=Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative hidden sm:flex items-center"},[s("div",{staticClass:"civer-gold font-hairline"},[t._v(t._s(t.$page.nav.user.fullname))]),t._v(" "),s("button",{on:{click:function(e){t.isOpen=!t.isOpen}}},[s("div",{staticClass:"mx-2 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none hover:border-white focus:border-white"},[s("img",{staticClass:"h-full w-full object-cover",attrs:{src:t.image,alt:t.$page.nav.user.fullname}})])]),t._v(" "),s("div",{class:t.isOpen?"block":"hidden"},[s("profile-link",t._b({},"profile-link",t.getTextLink(),!1))],1)])}),[],!1,null,null,null);e.default=l.exports},if8B:function(t,e){t.exports="/images/avatar.svg?c88ea4132eba5ac2db7ce48c1840bf9f"},rBnf:function(t,e,s){"use strict";s.r(e);var n={components:{Profile:s("a7q+").default},props:{},data:function(){return{isOpen:!1}},methods:{}},a=s("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-civer-dark-blue border-gold border-b-8 sm:flex sm:justify-between sm:items-between sm:px-4 sm:py-3 fixed w-full z-30"},[s("nav",{staticClass:"px-2 pt-2 pb-4 sm:flex sm:p-0 sm:p-r-4",class:t.isOpen?"block":"hidden"},[s("a",{staticClass:"block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800",attrs:{href:"#"}},[t._v("List your property")]),t._v(" "),s("a",{staticClass:"mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2",attrs:{href:"#"}},[t._v("Trips")]),t._v(" "),s("a",{staticClass:"mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2",attrs:{href:"#"}},[t._v("Messages")])]),t._v(" "),s("div",{staticClass:"flex-1 items-center justify-end px-4 py-3 sm:p-0"},[s("div",{staticClass:"sm:hidden"},[s("button",{staticClass:"block text-gray-500 hover:text-white focus:text-white focus:outline-none",attrs:{type:"button"},on:{click:function(e){t.isOpen=!t.isOpen}}},[s("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[t.isOpen?s("path",{attrs:{"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}}):t._e(),t._v(" "),t.isOpen?t._e():s("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),t._v(" "),s("profile",{directives:[{name:"show",rawName:"v-show",value:null!==t.$page.nav,expression:"$page.nav !== null"}]})],1)}),[],!1,null,null,null);e.default=i.exports},tp5t:function(t,e,s){"use strict";s.r(e);var n=s("KHd+"),a=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gradient-blue pt-20 p-2 min-h-screen h-auto w-screen"},[e("div",{staticClass:"w-full h-full min-h-screen grid grid-rows-3 grid-flow-col gap-4"},[e("div",{staticClass:"row-span-3 col-span-2 bg-white rounded-lg"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"row-span-1 bg-white rounded-lg"}),this._v(" "),e("div",{staticClass:"row-span-2 bg-white rounded-lg"})])])}),[],!1,null,null,null);e.default=a.exports},ynTf:function(t,e,s){"use strict";s.r(e);var n={props:{stylus:Object,nav:[Array,Object]},components:{},data:function(){return{menu:this.nav}}},a=s("KHd+"),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{class:t.stylus.container},t._l(t.menu,(function(e,n){return s("li",{key:n,class:t.stylus.li},[s("inertia-link",{attrs:{href:"/logout",method:"post"}},[t._v("Logout")])],1)})),0)}),[],!1,null,null,null);e.default=i.exports}}]);