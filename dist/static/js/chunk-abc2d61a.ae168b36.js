(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-abc2d61a"],{"1f1a":function(t,e,a){},"500e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Titlecontent"),t._v(" "),a("div",{staticClass:"page"},[a("el-container",{staticClass:"goodsList"},[a("el-header",[a("el-row",[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple-dark"},[t._v("平台列表")])]),t._v(" "),a("el-col",{attrs:{span:2,offset:"20"}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.addThildList}},[t._v("+ 新 增")])],1)])],1)],1),t._v(" "),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.typeListTable,height:"auto",border:""}},[a("el-table-column",{attrs:{prop:"typeCode",label:"类目编号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"typeName",label:"平台名称",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"typeLevel",label:"平台logo(大)",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"typeRel",label:"平台logo(小)",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"goodsNum",label:"比价logo",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"manage",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"textFont",on:{click:function(e){return t.editList("1")}}},[t._v("编辑")]),t._v(" "),a("span",{staticClass:"textFont textFont2",on:{click:function(e){return t.delList("2")}}},[t._v("删除")])]}}])})],1)],1)],1)],1),t._v(" "),a("addThird",{ref:"thirdDialog"})],1)},l=[],i=a("77fa"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{staticClass:"addDialogTitle",attrs:{visible:t.addDialog},on:{"update:visible":function(e){t.addDialog=e}}},[a("template",{slot:"title"},[a("span",[t._v("新增/编辑 平台")]),t._v(" "),a("span",[t._v("*")]),t._v(" "),a("span",[t._v("为必填字段")])])],2)],1)},s=[],r={data:function(){return{addDialog:!1}}},c=r,d=(a("cc6e"),a("2877")),u=Object(d["a"])(c,o,s,!1,null,"5a7be28a",null),p=u.exports,f={components:{Titlecontent:i["a"],addThird:p},data:function(){return{}},methods:{editList:function(){alert("编辑")},delList:function(){alert("删除")},addThildList:function(){this.refs.thirdDialog.addDialog=!0}}},v=f,b=(a("7275"),Object(d["a"])(v,n,l,!1,null,"293e5998",null));e["default"]=b.exports},7275:function(t,e,a){"use strict";var n=a("abaf"),l=a.n(n);l.a},"77fa":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"mateTitle"},[a("el-col",{attrs:{span:21}},[a("div",{staticClass:"grid-content bg-purple-dark"},[t._v(t._s(t.pageName))])]),t._v(" "),a("el-col",{attrs:{span:2,offset:1}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.reload}},[t._v("刷新")])],1)],1)],1)},l=[],i={data:function(){return{pageName:""}},created:function(){this.pageName=this.$route.meta.title},methods:{reload:function(){location.reload()}}},o=i,s=(a("cb62"),a("2877")),r=Object(s["a"])(o,n,l,!1,null,"2804d192",null);e["a"]=r.exports},abaf:function(t,e,a){},cb62:function(t,e,a){"use strict";var n=a("f9be"),l=a.n(n);l.a},cc6e:function(t,e,a){"use strict";var n=a("1f1a"),l=a.n(n);l.a},f9be:function(t,e,a){}}]);