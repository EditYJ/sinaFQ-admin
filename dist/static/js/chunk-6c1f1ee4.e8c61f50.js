(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c1f1ee4"],{"1aef":function(t,e,o){"use strict";o.r(e);var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("titlecontent"),t._v(" "),o("div",{staticClass:"page"},[o("div",{staticClass:"topButton"},[o("el-row",[o("el-button",{attrs:{size:"small",type:t.jdGoods},on:{click:function(e){return t.checkState("jd")}}},[t._v("京东买断(888)")]),t._v(" "),o("el-button",{attrs:{size:"small",type:t.inputGoods},on:{click:function(e){return t.checkState("")}}},[t._v("手动发布(999)")])],1)],1),t._v(" "),o("keep-alive",[o(t.goodsTableComponent,{tag:"component"})],1)],1)],1)},a=[],s=o("77fa"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[o("el-collapse-item",{attrs:{name:"1"}},[o("template",{slot:"title"},[o("el-col",{attrs:{span:4}},[t._v("筛选查询")]),t._v(" "),o("el-col",{attrs:{span:6,offset:13}},[o("div",{staticClass:"grid-content bg-purple"},[o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.queryGoods(e)}}},[t._v("查询")]),t._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.resetQuery(e)}}},[t._v("重置")]),t._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.topQuery(e)}}},[t._v("高级检索")])],1)])],1),t._v(" "),o("el-row",[o("el-form",{ref:"form",staticClass:"elForm",attrs:{model:t.postForm,"label-width":"80px"}},[o("el-col",{attrs:{span:5}},[o("el-form-item",{attrs:{label:"输入搜索:"}},[o("el-input",{attrs:{size:"small",placeholder:"输入商品编号/商品名称"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:8,offset:"1"}},[o("el-form-item",{attrs:{label:"商品类目:"}},[o("el-select",{attrs:{size:"mini",placeholder:"一级类目"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),t._v(" "),o("el-select",{attrs:{size:"small",placeholder:"二级类目"},model:{value:t.postForm.goodsType2,callback:function(e){t.$set(t.postForm,"goodsType2",e)},expression:"postForm.goodsType2"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),t._v(" "),o("el-select",{attrs:{size:"small",placeholder:"三级类目"},model:{value:t.postForm.goodsType3,callback:function(e){t.$set(t.postForm,"goodsType3",e)},expression:"postForm.goodsType3"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4,offset:"1"}},[o("el-form-item",{attrs:{label:"分期限制:"}},[o("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.postForm.timeState,callback:function(e){t.$set(t.postForm,"timeState",e)},expression:"postForm.timeState"}},[o("el-option",{attrs:{label:"一期",value:"oneState"}}),t._v(" "),o("el-option",{attrs:{label:"二期",value:"twoState"}})],1)],1)],1)],1)],1)],2)],1),t._v(" "),o("el-container",{staticClass:"goodsList"},[o("el-header",[o("el-row",[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"grid-content bg-purple-dark"},[t._v("商品列表")])]),t._v(" "),o("el-col",{attrs:{span:6,offset:"14"}},[o("div",{staticClass:"grid-content bg-purple-dark"},[o("el-button",{attrs:{type:"primary",plain:""},on:{click:t.resetGoods}},[t._v("更新商品")]),t._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:t.modifyGoods}},[t._v("批量修改")])],1)])],1)],1),t._v(" "),o("el-main",[[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"auto",border:""}},[o("el-table-column",{attrs:{prop:"allCheck",label:"全选",width:"60",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsId",label:"商品编号",width:"100",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsPic",label:"商品主图",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("img",{attrs:{src:t.row.goodsPic,width:"60",height:"60"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"商品名称/品牌",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("a",{staticClass:"goodsNameLink",attrs:{href:"http://"+e.row.goodsName}},[t._v(t._s(e.row.goodsName))]),t._v(" "),o("div",[t._v("品牌："+t._s(e.row.goodsName))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsType",label:"商品类目",width:"100",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsPrice",label:"京东售价",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            ¥"+t._s(e.row.goodsPrice)+"\n                        ")]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsPriceJD",label:"京东协议价",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            ¥"+t._s(e.row.goodsPriceJD)+"\n                        ")]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsPriceSina",label:"新浪定价",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{staticStyle:{width:"80px"},attrs:{size:"mini",placeholder:"新浪定价"},model:{value:e.row.goodsPriceSina,callback:function(o){t.$set(e.row,"goodsPriceSina",o)},expression:"scope.row.goodsPriceSina"}},[o("template",{slot:"prepend"},[t._v("¥")])],2)]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"stageLimit",label:"分期限制",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-select",{attrs:{size:"mini",placeholder:"不限制"},model:{value:e.row.stageLimit,callback:function(o){t.$set(e.row,"stageLimit",o)},expression:"scope.row.stageLimit"}},[o("el-option",{attrs:{label:"不限制",value:"noLimit"}}),t._v(" "),o("el-option",{attrs:{label:"限制",value:"Limit"}})],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsStatus",label:"状态",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999"},model:{value:e.row.goodsStatus,callback:function(o){t.$set(e.row,"goodsStatus",o)},expression:"scope.row.goodsStatus"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsIptTime",label:"导入时间",align:"center"}})],1)]],2)],1)],1)},r=[],n={data:function(){return{activeNames:["1"],postForm:{name:"",goodsType1:"",goodsType2:"",goodsType3:"",timeState:""},tableData:[{allCheck:!1,goodsId:"abc123",goodsPic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556092750677&di=0b0c5254ac19b246b2b076f895db1335&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1369025_192645024000_2.jpg",goodsName:"绿色食品",goodsType:"食品",goodsPrice:"213",goodsPriceJD:"123",goodsPriceSina:"123",stageLimit:"不限制",goodsStatus:!0,goodsIptTime:"123123"}]}},methods:{queryGoods:function(){},resetQuery:function(){},topQuery:function(){},resetGoods:function(){},modifyGoods:function(){},hoverGoodsImg:function(){alert("1")}}},c=n,p=o("2877"),d=Object(p["a"])(c,i,r,!1,null,"db3a0ed0",null),u=d.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[o("el-collapse-item",{attrs:{name:"1"}},[o("template",{slot:"title"},[o("el-col",{attrs:{span:4}},[t._v("筛选查询")]),t._v(" "),o("el-col",{attrs:{span:6,offset:13}},[o("div",{staticClass:"grid-content bg-purple"},[o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.queryGoods(e)}}},[t._v("查询")]),t._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.resetQuery(e)}}},[t._v("重置")]),t._v(" "),o("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return e.stopPropagation(),t.topQuery(e)}}},[t._v("高级检索")])],1)])],1),t._v(" "),o("el-row",[o("el-form",{ref:"form",staticClass:"elForm",attrs:{model:t.postForm,"label-width":"80px"}},[o("el-col",{attrs:{span:5}},[o("el-form-item",{attrs:{label:"输入搜索:"}},[o("el-input",{attrs:{size:"small",placeholder:"输入商品编号/商品名称"},model:{value:t.postForm.name,callback:function(e){t.$set(t.postForm,"name",e)},expression:"postForm.name"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:8,offset:"1"}},[o("el-form-item",{attrs:{label:"商品类目:"}},[o("el-select",{attrs:{size:"mini",placeholder:"一级类目"},model:{value:t.postForm.goodsType1,callback:function(e){t.$set(t.postForm,"goodsType1",e)},expression:"postForm.goodsType1"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),t._v(" "),o("el-select",{attrs:{size:"small",placeholder:"二级类目"},model:{value:t.postForm.goodsType2,callback:function(e){t.$set(t.postForm,"goodsType2",e)},expression:"postForm.goodsType2"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1),t._v(" "),o("el-select",{attrs:{size:"small",placeholder:"三级类目"},model:{value:t.postForm.goodsType3,callback:function(e){t.$set(t.postForm,"goodsType3",e)},expression:"postForm.goodsType3"}},[o("el-option",{attrs:{label:"区域一",value:"shanghai"}}),t._v(" "),o("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4,offset:"1"}},[o("el-form-item",{attrs:{label:"商品品牌:"}},[o("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.postForm.goodsBrand,callback:function(e){t.$set(t.postForm,"goodsBrand",e)},expression:"postForm.goodsBrand"}},[o("el-option",{attrs:{label:"一",value:"oneState"}}),t._v(" "),o("el-option",{attrs:{label:"二",value:"twoState"}})],1)],1)],1),t._v(" "),o("el-col",{attrs:{span:4,offset:"1"}},[o("el-form-item",{attrs:{label:"商品状态:"}},[o("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:t.postForm.goodsStatus,callback:function(e){t.$set(t.postForm,"goodsStatus",e)},expression:"postForm.goodsStatus"}},[o("el-option",{attrs:{label:"下架",value:"oneState"}}),t._v(" "),o("el-option",{attrs:{label:"上架",value:"twoState"}})],1)],1)],1)],1)],1)],2)],1),t._v(" "),o("el-container",{staticClass:"goodsList"},[o("el-header",[o("el-row",[o("el-col",{attrs:{span:4}},[o("div",{staticClass:"grid-content bg-purple-dark"},[t._v("商品列表")])]),t._v(" "),o("el-col",{attrs:{span:2,offset:"17"}},[o("div",{staticClass:"grid-content bg-purple-dark"},[o("el-button",{attrs:{type:"primary",plain:""},on:{click:t.modifyGoods}},[t._v("批量修改")])],1)])],1)],1),t._v(" "),o("el-main",[[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,height:"auto",border:""}},[o("el-table-column",{attrs:{prop:"allCheck",label:"全选",width:"60",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsId",label:"商品编号",width:"100",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsPic",label:"商品主图",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("img",{attrs:{src:t.row.goodsPic,width:"60",height:"60"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"商品名称/品牌",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("a",{staticClass:"goodsNameLink",attrs:{href:"http://"+e.row.goodsName}},[t._v(t._s(e.row.goodsName))]),t._v(" "),o("div",[t._v("品牌："+t._s(e.row.goodsName))])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsType",label:"商品类目",width:"100",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"marketPrice",label:"市面售价",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            ¥"+t._s(e.row.marketPrice)+"\n                        ")]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"platformPrice",label:"平台售价",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                            ¥"+t._s(e.row.platformPrice)+"\n                        ")]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"SKU库存",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",{staticClass:"lookSku",on:{click:t.lookSku}},[t._v("查看")])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"stageLimit",label:"分期限制",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-select",{attrs:{size:"mini",placeholder:"不限制"},model:{value:e.row.stageLimit,callback:function(o){t.$set(e.row,"stageLimit",o)},expression:"scope.row.stageLimit"}},[o("el-option",{attrs:{label:"不限制",value:"noLimit"}}),t._v(" "),o("el-option",{attrs:{label:"限制",value:"Limit"}})],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsStatus",label:"状态",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999"},model:{value:e.row.goodsStatus,callback:function(o){t.$set(e.row,"goodsStatus",o)},expression:"scope.row.goodsStatus"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsIptTime",label:"导入时间",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"setting",label:"操作",align:"center",fixed:"right",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button-group",[o("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("查看")]),t._v(" "),o("el-button",{attrs:{type:"success",size:"mini"}},[t._v("编辑")]),t._v(" "),o("el-button",{attrs:{type:"warning",size:"mini"}},[t._v("日志")]),t._v(" "),o("el-button",{attrs:{type:"danger",size:"mini"}},[t._v("删除")])],1)]}}])})],1)]],2)],1),t._v(" "),o("el-dialog",{attrs:{title:"编辑货品信息",visible:t.goodsMsgDialog},on:{"update:visible":function(e){t.goodsMsgDialog=e}}},[o("el-form",{ref:"form",staticClass:"elForm",attrs:{model:t.goodsMsg,"label-width":"80px"}},[o("el-row",[o("el-col",{attrs:{span:15}},[o("div",{staticClass:"grid-content bg-purple"},[o("el-form-item",{attrs:{label:"商品编号:",span:20}},[o("el-input",{attrs:{size:"small",placeholder:"输入商品编号/商品名称"},model:{value:t.goodsSku,callback:function(e){t.goodsSku=e},expression:"goodsSku"}})],1)],1)]),t._v(" "),o("el-col",{attrs:{span:6}},[o("div",{staticClass:"grid-content bg-purple"},[o("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("查询")])],1)])],1),t._v(" "),o("el-row",[o("el-col",{attrs:{span:24}},[[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.goodsMsgTable}},[o("el-table-column",{attrs:{prop:"skuCode",label:"sku编号"}}),t._v(" "),o("el-table-column",{attrs:{prop:"location",label:"奶源地"}}),t._v(" "),o("el-table-column",{attrs:{prop:"type",label:"分类"}}),t._v(" "),o("el-table-column",{attrs:{prop:"salePrice",label:"销售价格"}}),t._v(" "),o("el-table-column",{attrs:{prop:"Stock",label:"商品库存"}}),t._v(" "),o("el-table-column",{attrs:{prop:"warningValue",label:"库存预警值"}})],1)]],2)],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"success"},on:{click:function(e){t.goodsMsgDialog=!1}}},[t._v("确 定")]),t._v(" "),o("el-button",{on:{click:function(e){t.goodsMsgDialog=!1}}},[t._v("取 消")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"批量修改",visible:t.modifyDialog},on:{"update:visible":function(e){t.modifyDialog=e}}},[o("template",{slot:"title"},[o("span",{staticClass:"title-name"},[t._v("已选择商品数："+t._s(t.goodsCount))])]),t._v(" "),o("el-form",{ref:"modifyDialogForm",attrs:{model:t.modifyDialogForm}},[o("el-form-item",{attrs:{label:"商品状态"}},[o("el-switch",{model:{value:t.modifyDialogForm.type,callback:function(e){t.$set(t.modifyDialogForm,"type",e)},expression:"modifyDialogForm.type"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"分期数限制"}},[o("el-checkbox-group",{model:{value:t.modifyDialogForm.limitNormal,callback:function(e){t.$set(t.modifyDialogForm,"limitNormal",e)},expression:"modifyDialogForm.limitNormal"}},t._l(t.modifyDialogForm.limit,function(e){return o("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}),1)],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"success"},on:{click:function(e){t.modifyDialog=!1}}},[t._v("提 交")]),t._v(" "),o("el-button",{on:{click:function(e){t.modifyDialog=!1}}},[t._v("取 消")])],1)],2)],1)},g=[],v={data:function(){return{activeNames:["1"],postForm:{name:"",goodsType1:"",goodsType2:"",goodsType3:"",goodsBrand:"",goodsStatus:""},tableData:[{allCheck:!1,goodsId:"abc123",goodsPic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556092750677&di=0b0c5254ac19b246b2b076f895db1335&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1369025_192645024000_2.jpg",goodsName:"绿色食品",goodsType:"食品",goodsPrice:"213",marketPrice:"123",platformPrice:"123",sku:"11",goodsStatus:!0,goodsIptTime:"123123"}],goodsCount:12,goodsMsgDialog:!1,modifyDialog:!1,goodsSku:"",goodsMsgTable:{},modifyDialogForm:{type:!0,limitNormal:["不限制"],limit:["不限制","3期","4期","5期"]}}},methods:{queryGoods:function(){},resetQuery:function(){},topQuery:function(){},resetGoods:function(){},modifyGoods:function(){this.modifyDialog=!0},lookSku:function(){this.goodsMsgDialog=!0}}},f=v,b=(o("e0ac"),Object(p["a"])(f,m,g,!1,null,"5f54dbe6",null)),_=b.exports,y={data:function(){return{goodsTableComponent:"jdGoods",jdGoods:"primary",inputGoods:"",goodsName:""}},components:{Titlecontent:s["a"],jdGoods:u,mineGoods:_},methods:{checkState:function(t){"jd"==t?(this.jdGoods="primary",this.inputGoods="",this.goodsTableComponent="jdGoods"):(this.jdGoods="",this.inputGoods="primary",this.goodsTableComponent="mineGoods")}}},h=y,k=(o("ef14"),Object(p["a"])(h,l,a,!1,null,null,null));e["default"]=k.exports},"77fa":function(t,e,o){"use strict";var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("el-row",{staticClass:"mateTitle"},[o("el-col",{attrs:{span:21}},[o("div",{staticClass:"grid-content bg-purple-dark"},[t._v(t._s(t.pageName))])]),t._v(" "),o("el-col",{attrs:{span:2,offset:1}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.reload}},[t._v("刷新")])],1)],1)],1)},a=[],s={data:function(){return{pageName:""}},created:function(){this.pageName=this.$route.meta.title},methods:{reload:function(){location.reload()}}},i=s,r=(o("cb62"),o("2877")),n=Object(r["a"])(i,l,a,!1,null,"2804d192",null);e["a"]=n.exports},a603:function(t,e,o){},a856:function(t,e,o){},cb62:function(t,e,o){"use strict";var l=o("f9be"),a=o.n(l);a.a},e0ac:function(t,e,o){"use strict";var l=o("a603"),a=o.n(l);a.a},ef14:function(t,e,o){"use strict";var l=o("a856"),a=o.n(l);a.a},f9be:function(t,e,o){}}]);