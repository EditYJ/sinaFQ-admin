(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c5e3102"],{8419:function(t,e,l){},da60:function(t,e,l){"use strict";var a=l("8419"),o=l.n(a);o.a},e05a:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page"},[l("div",{staticClass:"topButton"},[l("el-row",[l("el-button",{attrs:{size:"small",type:t.jdGoods},on:{click:function(e){return t.checkState("jd")}}},[t._v("京东买断")]),t._v(" "),l("el-button",{attrs:{size:"small",type:t.inputGoods},on:{click:function(e){return t.checkState("")}}},[t._v("苏宁买断")])],1)],1),t._v(" "),l("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{attrs:{name:"1"}},[l("template",{slot:"title"},[l("el-col",{attrs:{span:4}},[t._v("筛选查询")]),t._v(" "),l("el-col",{attrs:{span:6,offset:13}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.queryGoods(e)}}},[t._v("查询")]),t._v(" "),l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.resetQuery(e)}}},[t._v("重置")]),t._v(" "),l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.topQuery(e)}}},[t._v("高级检索")])],1)])],1),t._v(" "),l("el-row",[l("el-form",{ref:"form",staticClass:"elForm",attrs:{model:t.postForm,"label-width":"80px"}},[l("el-col",{attrs:{span:5}},[l("el-form-item",{attrs:{label:"输入搜索:"}},[l("el-input",{attrs:{size:"small",placeholder:"输入商品编号/商品名称"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:5}},[l("el-form-item",{attrs:{label:"注册手机:"}},[l("el-input",{attrs:{size:"small",placeholder:"输入注册手机号"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"订单来源:"}},[l("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.postForm.timeState,callback:function(e){t.$set(t.postForm,"timeState",e)},expression:"postForm.timeState"}},[l("el-option",{attrs:{label:"一期",value:"oneState"}}),t._v(" "),l("el-option",{attrs:{label:"二期",value:"twoState"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"支付方式:"}},[l("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.postForm.timeState,callback:function(e){t.$set(t.postForm,"timeState",e)},expression:"postForm.timeState"}},[l("el-option",{attrs:{label:"一期",value:"oneState"}}),t._v(" "),l("el-option",{attrs:{label:"二期",value:"twoState"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"采购状态:"}},[l("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.postForm.timeState,callback:function(e){t.$set(t.postForm,"timeState",e)},expression:"postForm.timeState"}},[l("el-option",{attrs:{label:"一期",value:"oneState"}}),t._v(" "),l("el-option",{attrs:{label:"二期",value:"twoState"}})],1)],1)],1)],1)],1)],2)],1),t._v(" "),l("el-container",{staticClass:"goodsList"},[l("el-header",[l("el-row",[l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content bg-purple-dark"},[t._v("采购列表")])])],1)],1),t._v(" "),l("el-main",[[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.purchaseList,height:"auto",border:""}},[l("el-table-column",{attrs:{prop:"allCheck",label:"全选",width:"60",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"orderCode",label:"订单编号",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"goodsCode",label:"商品编号",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"orderContent",label:"订单内容",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"tel",label:"注册手机",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"money",label:"订单金额",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"freight",label:"运费",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"truePay",label:"实付金额",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"orderFrom",label:"订单来源",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"payWay",label:"支付方式",width:"100",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"payTime",label:"支付时间",width:"80",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"flowTime",label:"跟进时间",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"type",label:"采购状态",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{prop:"setting",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){}}])})],1)]],2)],1),t._v(" "),l("el-dialog",{attrs:{title:"高级检索",visible:t.topQueryDialog},on:{"update:visible":function(e){t.topQueryDialog=e}}},[l("el-form",{ref:"topQueryForm",attrs:{model:t.topQueryForm,"label-width":"80px",size:"mini"}},[l("el-form-item",{attrs:{label:"订单金额"}},[l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{size:"small"},model:{value:t.topQueryForm.startPrice,callback:function(e){t.$set(t.topQueryForm,"startPrice",e)},expression:"topQueryForm.startPrice"}})],1),t._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[t._v("至")]),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{size:"small"},model:{value:t.topQueryForm.endPrice,callback:function(e){t.$set(t.topQueryForm,"endPrice",e)},expression:"topQueryForm.endPrice"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"支付时间"}},[l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{size:"small"},model:{value:t.topQueryForm.payTimeStart,callback:function(e){t.$set(t.topQueryForm,"payTimeStart",e)},expression:"topQueryForm.payTimeStart"}})],1),t._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[t._v("至")]),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{size:"small"},model:{value:t.topQueryForm.payTimeEnd,callback:function(e){t.$set(t.topQueryForm,"payTimeEnd",e)},expression:"topQueryForm.payTimeEnd"}})],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"跟进时间"}},[l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{size:"small"},model:{value:t.topQueryForm.followTimeStart,callback:function(e){t.$set(t.topQueryForm,"followTimeStart",e)},expression:"topQueryForm.followTimeStart"}})],1),t._v(" "),l("el-col",{staticClass:"line",attrs:{span:2}},[t._v("至")]),t._v(" "),l("el-col",{attrs:{span:11}},[l("el-input",{attrs:{size:"small"},model:{value:t.topQueryForm.followTimeEnd,callback:function(e){t.$set(t.topQueryForm,"followTimeEnd",e)},expression:"topQueryForm.followTimeEnd"}})],1)],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"success"},on:{click:function(e){t.topQueryDialog=!1}}},[t._v("查 询")]),t._v(" "),l("el-button",{on:{click:function(e){t.topQueryDialog=!1}}},[t._v("取 消")])],1)],1)],1)},o=[],r={data:function(){return{topQueryDialog:!1,jdGoods:"primary",inputGoods:"",activeNames:["1"],postForm:{name:"",goodsType1:"",goodsType2:"",goodsType3:"",timeState:""},purchaseList:[{}],topQueryForm:{startPrice:"",endPrice:"",payTimeStart:"",payTimeEnd:"",followTimeStart:"",followTimeEnd:""}}},methods:{topQuery:function(){this.topQueryDialog=!0},checkState:function(t){"jd"==t?(this.jdGoods="primary",this.inputGoods=""):(this.jdGoods="",this.inputGoods="primary")}}},s=r,n=(l("da60"),l("2877")),i=Object(n["a"])(s,a,o,!1,null,"64f8be34",null);e["default"]=i.exports}}]);