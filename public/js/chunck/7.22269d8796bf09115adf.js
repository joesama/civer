(window.webpackJsonp=window.webpackJsonp||[]).push([[7,12],{"a7q+":function(e,t,n){"use strict";n.r(t);var i=n("if8B"),r=n.n(i),s={components:{ProfileLink:n("ynTf").default},props:{},data:function(){return{image:r.a,isOpen:!1}},methods:{getTextLink:function(){return{stylus:{container:"absolute top-0 right-0  list-reset flex-1 items-center mt-12 w-48 border-2 border-t-4 border-gold",li:"py-2 px-2 bg-civer-blue"},nav:this.getProfileNavigation()}},getProfileNavigation:function(){return[{desc:"Logout",href:"entree",method:"Register"}]}}},o=n("KHd+"),l=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative hidden sm:flex items-center"},[n("div",{staticClass:"civer-gold font-hairline"},[e._v(e._s(e.$page.nav.user.name))]),e._v(" "),n("button",{on:{click:function(t){e.isOpen=!e.isOpen}}},[n("div",{staticClass:"mx-2 h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none hover:border-white focus:border-white"},[n("img",{staticClass:"h-full w-full object-cover",attrs:{src:e.image,alt:e.$page.nav.user.name}})])]),e._v(" "),n("div",{class:e.isOpen?"block":"hidden"},[n("profile-link",e._b({},"profile-link",e.getTextLink(),!1))],1)])}),[],!1,null,null,null);t.default=l.exports},if8B:function(e,t){e.exports="/images/avatar.svg?c88ea4132eba5ac2db7ce48c1840bf9f"},ynTf:function(e,t,n){"use strict";n.r(t);var i={props:{stylus:Object,nav:[Array,Object]},components:{},data:function(){return{menu:this.nav}}},r=n("KHd+"),s=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{class:e.stylus.container},e._l(e.menu,(function(t,i){return n("li",{key:i,class:e.stylus.li},[n("inertia-link",{attrs:{href:"/logout",method:"post"}},[e._v("Logout")])],1)})),0)}),[],!1,null,null,null);t.default=s.exports}}]);