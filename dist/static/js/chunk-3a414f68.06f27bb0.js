(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a414f68"],{"464f":function(e,t,a){"use strict";var l=a("8416"),r=a.n(l);r.a},"49cf":function(e,t,a){},7970:function(e,t,a){"use strict";var l=a("c8fb"),r=a.n(l);r.a},8416:function(e,t,a){},"8e2a":function(e,t,a){"use strict";var l=a("49cf"),r=a.n(l);r.a},c8fb:function(e,t,a){},d298:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("el-container",{staticClass:"userList"},[a("el-header",[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple-dark"},[e._v("订单详情")])])],1)],1),e._v(" "),a("el-main",[[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{key:"baseMsg",attrs:{label:"交易信息",name:"baseMsg"}},[a("buy-information")],1),e._v(" "),a("el-tab-pane",{key:"quotaMsg",attrs:{label:"售后详情",name:"quotaMsg"}},[a("after-buy-detail")],1)],1)],e._v(" "),a("el-row",{staticClass:"btmBtn"},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"danger"},on:{click:e.backPage}},[e._v("关闭")])],1)],1)],2)],1)],1)},r=[],s=(a("7f7f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",{staticClass:"tab-container-userInfo"},[a("el-header",[e._v("\n            商品信息\n        ")]),e._v(" "),a("el-main",[a("el-row",{staticClass:"buyerMsg"},[a("el-col",[e._v("买家留言：12312312312")])],1),e._v(" "),a("el-row",{staticClass:"userInfoTable"},[a("order-detail-table",{attrs:{tableName:"订单编号",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"采购渠道",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"商品编号",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"渠道订单号",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"商品名称",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"下单渠道账号",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"商品属性",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"打款流水号",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"商品单价",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"渠道返点",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"商品数量",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"采购总额",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"打款手续费",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"物流信息",defultWidth:12}},[a("template",{slot:"userbtn"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.logisticsDialogShow}},[e._v("查看")])],1)],2)],1)],1)],1),e._v(" "),a("el-container",{staticClass:"tab-container-userInfo"},[a("el-header",[e._v("\n            收货信息\n        ")]),e._v(" "),a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.receGoodsMsg,border:""}},[a("el-table-column",{attrs:{prop:"tags",label:"收货人姓名",width:"120",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tel",label:"收货人手机号",width:"140",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"area",label:"收货人地址",align:"center"}})],1)],1)],1),e._v(" "),a("el-container",{staticClass:"tab-container-userInfo"},[a("el-header",[e._v("\n            支付信息\n        ")]),e._v(" "),a("el-main",[a("el-row",{staticClass:"payInfoTable"},[a("el-col",{attrs:{span:12}},[a("el-container",[a("el-header",[e._v("支付方式")]),e._v(" "),a("el-main",[a("order-detail-table",{attrs:{tableName:"支付方式",tableData:e.userInfoTable.name,defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"商品总额",tableData:e.userInfoTable.name,defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"运费",tableData:e.userInfoTable.name,defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"税费",tableData:e.userInfoTable.name,defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"现金券",tableData:e.userInfoTable.name,defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"应付金额",tableData:e.userInfoTable.name,defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{defultWidth:24}}),e._v(" "),a("order-detail-table",{attrs:{defultWidth:24}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-container",[a("el-header",[e._v("分期信息")]),e._v(" "),a("el-main",[a("order-detail-table",{attrs:{tableName:"首付金额",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"资金渠道",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"分期金额",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"渠道交易号",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"分期期数",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"年化手续费",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"手续费",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"分期利率",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"免息券",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"实名/绑卡",defultWidth:12}},[a("template",{slot:"userbtn"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.realNameDialogShow}},[e._v("查看")])],1)],2),e._v(" "),a("order-detail-table",{attrs:{tableName:"定金期数",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"分期计划",defultWidth:12}},[a("template",{slot:"userbtn"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.stagesDialogShow}},[e._v("查看")])],1)],2),e._v(" "),a("order-detail-table",{attrs:{tableName:"借款天数",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"到账金额",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"月服务费",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"总服务费",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"保险费率",tableData:e.userInfoTable.name,defultWidth:12}}),e._v(" "),a("order-detail-table",{attrs:{tableName:"保费",tableData:e.userInfoTable.name,defultWidth:12}})],1)],1)],1)],1)],1)],1),e._v(" "),a("el-dialog",{staticClass:"logistClass",attrs:{title:"物流详情",visible:e.logisticsDialog,width:"40%",center:""},on:{"update:visible":function(t){e.logisticsDialog=t}}},[e.logisticsHave?a("div",{staticClass:"noLogistMsg",staticStyle:{"text-align":"center",margin:"10px"}},[a("svg-icon",{staticStyle:{"font-size":"120px"},attrs:{"icon-class":"huojian"}}),e._v(" "),a("h2",{staticStyle:{"font-size":"16px","font-weight":"bold",color:"#999","margin-top":"40px"}},[e._v("暂无物流信息，请耐心等待")])],1):a("div",{staticClass:"haveLogistMsg"},[a("p",[e._v("物流公司:XXXXX")]),e._v(" "),a("p",[e._v("物流单号:XXXXX")]),e._v(" "),a("div",[a("div",{staticClass:"logistList"},[a("p",[e._v("订单已提交")]),e._v(" "),a("p",[e._v("2018-06-11 05:03:22")]),e._v(" "),a("p",{staticClass:"point"})])])]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.logisticsDialog=!1}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"实名/绑卡",visible:e.realNameDialog,width:"60%",center:""},on:{"update:visible":function(t){e.realNameDialog=t}}},[a("el-table",{attrs:{data:e.realNameTable,border:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"身份证号",align:"center"}})],1),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{attrs:{data:e.ortherMsgTable,border:""}},[a("el-table-column",{attrs:{prop:"wayName",label:"通道编号",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wayCode",label:"通道编号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank",label:"开户行",width:"250",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cardId",label:"银行卡号",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tel",label:"预留手机号",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bind",label:"绑卡状态",width:"150",align:"center"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.realNameDialog=!1}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"分期计划",visible:e.stagesDialog,width:"50%",center:""},on:{"update:visible":function(t){e.stagesDialog=t}}},[a("el-table",{attrs:{data:e.stagesTable,border:""}},[a("el-table-column",{attrs:{prop:"wayName",label:"期数",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"wayCode",label:"应还本金",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"应还手续费",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank",label:"应还服务费",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"cardId",label:"应还合计",align:"center"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.stagesDialog=!1}}},[e._v("确 定")])],1)],1)],1)}),o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myTableCom"},[a("el-col",{attrs:{span:e.defultWidth}},[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"bg-purple"},[e._v(e._s(e.tableName))])]),e._v(" "),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"bg-purple bg-normal"},[e._v("\n                "+e._s(e.tableData)+"\n                "),e._t("userbtn")],2)])],1)],1)},n=[],u={props:["tableName","tableData","defultWidth"],data:function(){return{}}},c=u,b=(a("dcc4"),a("2877")),d=Object(b["a"])(c,i,n,!1,null,"32b69f61",null),m=d.exports,f={components:{orderDetailTable:m},data:function(){return{logisticsDialog:!1,realNameDialog:!1,stagesDialog:!1,logisticsHave:!1,userInfoTable:{name:"王*"},anthenMsg:[{type:"实名认证（号码）",status:"已完成",time:"123"},{type:"实名认证（号码）",status:"已完成",time:"123"}],cardMsg:[{loadCode:"12345",loadName:"213455",name:"123123",bankName:"1234",bankId:"123123",bankTel:"123412",status:"213123"}],receGoodsMsg:[{tags:"123",people:"王*",tel:"15001010101",area:"江苏省  无锡市  新吴区",detailMsg:"震泽路国家软件园狮子座",status:"正常",time:"1231"}],realNameTable:[{name:"张三",id:"490191230182938012"}],ortherMsgTable:[{}],stagesTable:[{}]}},methods:{logisticsDialogShow:function(){this.logisticsDialog=!0},realNameDialogShow:function(){this.realNameDialog=!0},stagesDialogShow:function(){this.stagesDialog=!0}}},v=f,p=(a("7970"),a("464f"),Object(b["a"])(v,s,o,!1,null,"8a50cf4a",null)),y=p.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"myForm"},[a("el-form",{ref:"form",attrs:{model:e.afterBuyForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"服务类型:"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"取件方式:"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"售后数量:"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"售后原因:"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{disabled:"",type:"textarea"},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"邮政编码:"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"elForm",attrs:{label:"取件地址:"}},[a("el-row",[a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1)],1),e._v(" "),a("el-form-item",{staticClass:"elForm",attrs:{label:"返件地址:"}},[a("el-row",[a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1),e._v(" "),a("el-col",{attrs:{span:3}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"物流渠道:"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"物流单号:"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"发货运费:"}},[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"elForm2",attrs:{label:"进度说明:"}},[a("el-row",[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{type:"textarea",disabled:""},model:{value:e.afterBuyForm.surviceType,callback:function(t){e.$set(e.afterBuyForm,"surviceType",t)},expression:"afterBuyForm.surviceType"}})],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-table",{attrs:{data:e.tableData,border:"",width:"100%"}},[a("el-table-column",{attrs:{prop:"link",label:"处理环节",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"man",label:"处理人",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"time",label:"处理时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"message",label:"处理信息",align:"center"}})],1)],1)],1)],1)],1)],1)},g=[],T={name:"afterBuyDetail",data:function(){return{afterBuyForm:{surviceType:"退货"}}},methods:{}},h=T,D=(a("ff42"),Object(b["a"])(h,_,g,!1,null,"3a7b9aac",null)),F=D.exports,N=void 0,B={components:{buyInformation:y,afterBuyDetail:F},data:function(){return{activeName:"baseMsg"}},methods:{handleClick:function(e){var t=e.name;console.log(t)},backPage:function(){N.$router.go(-1)}}},I=B,w=(a("8e2a"),Object(b["a"])(I,l,r,!1,null,"6a412420",null));t["default"]=w.exports},dcc4:function(e,t,a){"use strict";var l=a("f9dc"),r=a.n(l);r.a},e8c9:function(e,t,a){},f9dc:function(e,t,a){},ff42:function(e,t,a){"use strict";var l=a("e8c9"),r=a.n(l);r.a}}]);