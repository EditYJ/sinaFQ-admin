(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-653f8dcc"],{"16e3":function(t,e,a){},"77fa":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"mateTitle"},[a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content bg-purple-dark"},[t._v(t._s(t.pageName))])]),t._v(" "),a("el-col",{attrs:{span:2,offset:1}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.reload}},[t._v("刷新")])],1)],1)],1)},r=[],l={data:function(){return{pageName:""}},created:function(){this.pageName=this.$route.meta.title},methods:{reload:function(){location.reload()}}},s=l,i=(a("cb62"),a("2877")),o=Object(i["a"])(s,n,r,!1,null,"2804d192",null);e["a"]=o.exports},9196:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Titlecontent"),t._v(" "),a("div",{staticClass:"page"},[1!=t.$route.query.isNative?a("el-container",{staticClass:"goodsList"},[a("el-header",[a("el-row",[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content bg-purple-dark"},[t._v("属性类型列表")])]),t._v(" "),a("el-col",{attrs:{span:2,offset:"19"}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.addTypeList}},[t._v("+新增")])],1)])],1)],1),t._v(" "),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.attrListTable,height:"auto",border:""}},[a("el-table-column",{attrs:{prop:"attrCode",label:"编号",width:"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attrType",label:"属性类型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"attrCount",label:"属性数量",width:"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"paramsCount",label:"参数数量",width:"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"textFont",on:{click:function(e){return t.attrList("4")}}},[t._v("属性列表")]),t._v(" "),a("span",{staticClass:"textFont",on:{click:function(e){return t.paramsList("5")}}},[t._v("参数列表")])]}}],null,!1,3785034933)}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"textFont",on:{click:function(e){return t.editAttrList("4")}}},[t._v("编辑")]),t._v(" "),a("span",{staticClass:"textFont textFont2",on:{click:function(e){return t.delAttrList("5")}}},[t._v("删除")])]}}],null,!1,3408675391)})],1)],1)],1):t._e(),t._v(" "),a("router-view")],1)],1)},r=[],l=a("77fa"),s={components:{Titlecontent:l["a"]},methods:{attrList:function(){this.$router.push({name:"attrManage",query:{isNative:1}})},paramsList:function(){this.$router.push({name:"argsManage",query:{isNative:1}})},editAttrList:function(){},delAttrList:function(){}},data:function(){return{attrListTable:[{attrCode:"123",attrType:"123",attrCount:"123",paramsCount:"1234"}]}}},i=s,o=(a("fa93"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"dc37a7f0",null);e["default"]=c.exports},cb62:function(t,e,a){"use strict";var n=a("f9be"),r=a.n(n);r.a},f9be:function(t,e,a){},fa93:function(t,e,a){"use strict";var n=a("16e3"),r=a.n(n);r.a}}]);