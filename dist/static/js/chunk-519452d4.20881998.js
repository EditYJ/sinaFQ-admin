(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519452d4"],{"0fde":function(e,t,l){},"61ed":function(e,t,l){"use strict";var a=l("0fde"),r=l.n(a);r.a},f745:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"page"},[l("el-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[l("el-collapse-item",{attrs:{name:"1"}},[l("template",{slot:"title"},[l("el-col",{attrs:{span:4}},[e._v("筛选查询")]),e._v(" "),l("el-col",{attrs:{span:6,offset:17}},[l("div",{staticClass:"grid-content bg-purple"},[l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return t.stopPropagation(),e.queryGoods(t)}}},[e._v("查询")]),e._v(" "),l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){return t.stopPropagation(),e.resetQuery(t)}}},[e._v("重置")])],1)])],1),e._v(" "),l("el-row",[l("el-form",{ref:"form",staticClass:"elForm",attrs:{model:e.postForm,"label-width":"80px"}},[l("el-col",{attrs:{span:5}},[l("el-form-item",{attrs:{label:"编号查询:"}},[l("el-input",{attrs:{size:"small",placeholder:"账单编号/订单编号"},model:{value:e.postForm.name,callback:function(t){e.$set(e.postForm,"name",t)},expression:"postForm.name"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"收款账户:"}},[l("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.postForm.goodsType1,callback:function(t){e.$set(e.postForm,"goodsType1",t)},expression:"postForm.goodsType1"}},[l("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),l("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"备注:"}},[l("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.postForm.timeState,callback:function(t){e.$set(e.postForm,"timeState",t)},expression:"postForm.timeState"}},[l("el-option",{attrs:{label:"一期",value:"oneState"}}),e._v(" "),l("el-option",{attrs:{label:"二期",value:"twoState"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"跟进时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{size:"small",type:"date",placeholder:"选择日期"},model:{value:e.postForm.date1,callback:function(t){e.$set(e.postForm,"date1",t)},expression:"postForm.date1"}})],1),e._v(" "),l("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-")]),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"选择时间"},model:{value:e.postForm.date2,callback:function(t){e.$set(e.postForm,"date2",t)},expression:"postForm.date2"}})],1)],1)],1)],1)],1)],2)],1),e._v(" "),l("el-container",{staticClass:"groupList"},[l("el-header",[l("el-row",[l("el-col",{attrs:{span:4}},[l("div",{staticClass:"grid-content bg-purple-dark"},[e._v("还款列表")])]),e._v(" "),l("el-col",{attrs:{span:5,offset:"15"}},[l("div",{staticClass:"grid-content bg-purple-dark"},[l("el-button",{attrs:{type:"primary",plain:""},nativeOn:{click:function(t){return t.preventDefault(),e.orderRecord(t)}}},[e._v("挂帐记录")]),e._v(" "),l("el-button",{attrs:{type:"primary",plain:""},nativeOn:{click:function(t){return t.preventDefault(),e.checkRepay(t)}}},[e._v("批量核销")])],1)])],1)],1),e._v(" "),l("el-main",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderTable,height:"auto",border:""}},[l("el-table-column",{attrs:{prop:"allCheck",label:"全选",width:"60",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"groupName",label:"订单编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"businessType",label:"账单编号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"groupNum",label:"还款方式",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"leader",label:"还款金额",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tips",label:"收款账户",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time",label:"流水号",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time",label:"备注",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time",label:"销账申请人",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time",label:"跟进时间",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time",label:"核销状态",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time",label:"核销人",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"time",label:"核销时间",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"setting",label:"操作",align:"center",fixed:"right",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.submitOrder(t)}}},[e._v("核销")])]}}])})],1)],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"销账",visible:e.cancelAccountDialog},on:{"update:visible":function(t){e.cancelAccountDialog=t}}},[l("el-row",[l("el-col",[e._v("第3/6期")])],1),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderTable,height:"auto",border:""}},[l("el-table-column",{attrs:{prop:"needPay",label:"应收本金",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"needCharge",label:"应收手续费",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"managePay",label:"应收账户管理费",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"groupName",label:"应收合计",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{prop:"groupName",label:"合同还款日",align:"center"}})],1)],1)],1)},r=[],o={data:function(){return{activeNames:["1"],postForm:{},orderTable:[{}],submitTotal:"123",cancelAccountDialog:!1}},methods:{orderRecord:function(){},checkRepay:function(){},submitOrder:function(){var e=this;this.$confirm("合计总金额".concat(this.submitTotal,"元，是否确认核销?"),"提交确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"核销成功!"})}).catch(function(){e.$message({type:"info",message:"已取消"})})}}},n=o,s=(l("61ed"),l("2877")),i=Object(s["a"])(n,a,r,!1,null,"c139dcb0",null);t["default"]=i.exports}}]);