(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fa32bee"],{4785:function(t,e,l){"use strict";var a=l("5af7"),o=l.n(a);o.a},"5af7":function(t,e,l){},af91:function(t,e,l){"use strict";l.r(e);var a=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page"},[l("div",{staticClass:"topButton"},[l("el-row",[l("el-button",{attrs:{size:"small",type:t.waitTrial},on:{click:function(e){return t.checkState("waitTrial")}}},[t._v("待终审(888)")]),t._v(" "),l("el-button",{attrs:{size:"small",type:t.needTrial},on:{click:function(e){return t.checkState("needTrial")}}},[t._v("已驳回重审(999)")])],1)],1),t._v(" "),l("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{attrs:{name:"1"}},[l("template",{slot:"title"},[l("el-col",{attrs:{span:4}},[t._v("筛选查询")]),t._v(" "),l("el-col",{attrs:{span:6,offset:17}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.queryGoods(e)}}},[t._v("查询")]),t._v(" "),l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.resetQuery(e)}}},[t._v("重置")])],1)])],1),t._v(" "),l("el-row",[l("el-form",{ref:"form",staticClass:"elForm",attrs:{model:t.postForm,"label-width":"90px"}},[l("el-row",[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"输入查询:"}},[l("el-input",{attrs:{size:"small",placeholder:"订单编号/注册手机号"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:5}},[l("el-form-item",{attrs:{label:"分期金额"}},[l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{placeholder:""},model:{value:t.postForm.startMoney,callback:function(e){t.$set(t.postForm,"startMoney",e)},expression:"postForm.startMoney"}})],1),t._v(" "),l("el-col",{staticClass:"line",attrs:{span:.5}},[t._v("-")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{placeholder:""},model:{value:t.postForm.endMoney,callback:function(e){t.$set(t.postForm,"endMoney",e)},expression:"postForm.endMoney"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:5}},[l("el-form-item",{attrs:{label:"信用分"}},[l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{placeholder:""},model:{value:t.postForm.startMoney,callback:function(e){t.$set(t.postForm,"startMoney",e)},expression:"postForm.startMoney"}})],1),t._v(" "),l("el-col",{staticClass:"line",attrs:{span:.5}},[t._v("-")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{placeholder:""},model:{value:t.postForm.endMoney,callback:function(e){t.$set(t.postForm,"endMoney",e)},expression:"postForm.endMoney"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:5}},[l("el-form-item",{attrs:{label:"跟进时间"}},[l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{placeholder:""},model:{value:t.postForm.startMoney,callback:function(e){t.$set(t.postForm,"startMoney",e)},expression:"postForm.startMoney"}})],1),t._v(" "),l("el-col",{staticClass:"line",attrs:{span:.5}},[t._v("-")]),t._v(" "),l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{placeholder:""},model:{value:t.postForm.endMoney,callback:function(e){t.$set(t.postForm,"endMoney",e)},expression:"postForm.endMoney"}})],1)],1)],1)],1),t._v(" "),l("el-row",[l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"订单类型:"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"复借/复购:"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"初审处理人:"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"初审决策:"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"终审处理人:"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"终审决策:"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1)],1)],1)],1)],2)],1),t._v(" "),l("el-container",{staticClass:"groupList"},[l("el-header",[l("el-row",[l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content bg-purple-dark"},[t._v("审单列表")])]),t._v(" "),l("el-col",{attrs:{span:5,offset:"15"}},[l("div",{staticClass:"grid-content bg-purple-dark"},[l("el-button",{attrs:{type:"primary",plain:""},nativeOn:{click:function(e){return e.preventDefault(),t.refuseOrder(e)}}},[t._v("批量拒绝")]),t._v(" "),l("el-button",{attrs:{type:"primary",plain:""},nativeOn:{click:function(e){return e.preventDefault(),t.turnOrder(e)}}},[t._v("转 单")])],1)])],1)],1),t._v(" "),l("el-main",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[l("el-table-column",{attrs:{prop:"date",label:"全选"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"订单编号"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"支付时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"注册手机号",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"信用分"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"复借/复购",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"订单类型"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"分期金额"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"订单金额"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"分期期数"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"机审决策"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"初审处理人"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"初审决策"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"终审处理人"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"终审决策"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"跟进时间"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("el-button-group")]}}])})],1)],1)],1),t._v(" "),l("el-dialog",{attrs:{title:t.转单,visible:t.turnOrderDialog},on:{"update:visible":function(e){t.turnOrderDialog=e}}},[l("el-form",{ref:"trunForm",attrs:{model:t.trunForm,"label-width":"120px"}},[l("el-row",[l("el-col",{attrs:{span:11}},[l("el-form-item",{attrs:{label:"搜索"}},[l("el-input",{attrs:{type:"",placeholder:"请输入姓名/账号"}})],1)],1)],1),t._v(" "),l("el-form-item",{attrs:{label:"审核员"}},[l("el-select",{attrs:{placeholder:"仅初审"},model:{value:t.trunForm.region,callback:function(e){t.$set(t.trunForm,"region",e)},expression:"trunForm.region"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"success"},on:{click:function(e){t.turnOrderDialog=!1}}},[t._v("确 定")]),t._v(" "),l("el-button",{on:{click:function(e){t.turnOrderDialog=!1}}},[t._v("取 消")])],1)],1)],1)},o=[],r={data:function(){return{waitTrial:"primary",needTrial:"",activeNames:["1"],postForm:{},turnOrderDialog:!1,trunForm:{}}},methods:{checkState:function(t){"waitTrial"==t?(this.waitTrial="primary",this.needTrial=""):(this.waitTrial="",this.needTrial="primary")},refuseOrder:function(){},turnOrder:function(){this.turnOrderDialog=!0}}},s=r,n=(l("4785"),l("2877")),p=Object(n["a"])(s,a,o,!1,null,"0ff7b382",null);e["default"]=p.exports}}]);