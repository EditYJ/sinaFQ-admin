<template>
  <div>
    <el-container class="tab-container-userInfo">
      <el-header>
        借款信息
      </el-header>

      <el-row class="payInfoTable">
        <el-col :span="24">
          <el-header>分期信息</el-header>
          <el-main>
            <order-detail-table :table-name="'首付金额'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'资金方'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'分期金额'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'渠道交易号'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'分期期数'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'年化手续费'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'手续费'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'分期利率'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'免息券'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'实名/绑卡'" :defult-width="12">
              <template slot="userbtn">
                <el-button type="primary" size="mini" @click="cardDetail">查看</el-button>
              </template>
            </order-detail-table>
            <order-detail-table :table-name="'定金期数'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'分期计划'" :defult-width="12">
              <template slot="userbtn">
                <el-button type="primary" size="mini" @click="stagesDetail">查看</el-button>
              </template>
            </order-detail-table>
            <order-detail-table :table-name="'借款天数'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'到账金额'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'月服务费'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'总服务费'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'保险费率'" :table-data="userInfoTable.name" :defult-width="12" />
            <order-detail-table :table-name="'保费'" :table-data="userInfoTable.name" :defult-width="12" />

          </el-main>
        </el-col>
      </el-row>
    </el-container>

    <!-- 实名/绑卡 -->
    <el-dialog title="实名/绑卡" :visible.sync="cardDetailDialog" width="60%" center>
      <el-table :data="realNameTable" border>
        <el-table-column prop="name" label="姓名" width="150" align="center" />
        <el-table-column prop="id" label="身份证号" align="center" />
      </el-table>
      <br><br>
      <el-table :data="ortherMsgTable" border>
        <el-table-column prop="wayName" label="通道编号" width="150" align="center" />
        <el-table-column prop="wayCode" label="通道编号" align="center" />
        <el-table-column prop="name" label="姓名" width="150" align="center" />
        <el-table-column prop="bank" label="开户行" width="250" align="center" />
        <el-table-column prop="cardId" label="银行卡号" width="150" align="center" />
        <el-table-column prop="tel" label="预留手机号" width="150" align="center" />
        <el-table-column prop="bind" label="绑卡状态" width="150" align="center" />
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="cardDetailDialog = false">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分期计划 -->
    <el-dialog title="分期计划" :visible.sync="stagesDialog" width="50%" center>
      <el-table :data="stagesTable" border>
        <el-table-column prop="wayName" label="期数" width="150" align="center" />
        <el-table-column prop="wayCode" label="应还本金" align="center" />
        <el-table-column prop="name" label="应还手续费" align="center" />
        <el-table-column prop="bank" label="应还服务费" align="center" />
        <el-table-column prop="cardId" label="应还合计" align="center" />
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="stagesDialog = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import orderDetailTable from './orderDetailTable'
export default {
  components: { orderDetailTable },
  data() {
    return {
      logisticsDialog: false,
      cardDetailDialog: false,
      stagesDialog: false,
      logisticsHave: false, //  有没有物流信息
      userInfoTable: {
        name: '王*'
      },
      anthenMsg: [{
        type: '实名认证（号码）',
        status: '已完成',
        time: '123'

      }, {
        type: '实名认证（号码）',
        status: '已完成',
        time: '123'

      }],
      cardMsg: [{
        loadCode: '12345',
        loadName: '213455',
        name: '123123',
        bankName: '1234',
        bankId: '123123',
        bankTel: '123412',
        status: '213123'
      }
      ],
      receGoodsMsg: [{
        tags: '123',
        people: '王*',
        tel: '15001010101',
        area: '江苏省  无锡市  新吴区',
        detailMsg: '震泽路国家软件园狮子座',
        status: '正常',
        time: '1231'
      }],
      realNameTable: [{
        name: '张三',
        id: '490191230182938012'
      }],
      ortherMsgTable: [{}],
      stagesTable: [{}]
    }
  },
  methods: {
    cardDetail() { //  查看实名/绑卡
      this.cardDetailDialog = true
    },
    stagesDetail() { //  分期计划
      this.stagesDialog = true
    }
  }
}
</script>

<style lang="scss">
    .logistClass{
       .logistList{
           margin-top: 20px;
           color:#999;
           padding-left: 30px;
           position: relative;
           border-left: 2px solid #eee;
           .point{
                position: absolute;
                top: -15px;
                left: -5px;
                width:10px;
                height:10px;
                background:#67C23A;
                border-radius: 50%;
           }
       }

    }
</style>

<style lang="scss" scoped>
    .tab-container-userInfo{
        .el-header{
            color: #666666;
            font-size: 14px;
            font-weight: 500;
            height: 40px!important;
            line-height: 40px;
        }
        .el-main{
            padding: 10px 20px;
        }
        .userInfoTable{
            border-bottom: 2px solid rgba(153, 153, 153, 0.14);
            border-right: 2px solid rgba(153, 153, 153, 0.14);
        }
        .payInfoTable{
            border-bottom: 2px solid rgba(153, 153, 153, 0.14);
            border-right: 2px solid rgba(153, 153, 153, 0.14);
            .el-header{
                text-align: center;
                background: rgba(153, 153, 153, 0.14);
            }
            .el-main{
                padding:0px;
                margin:0px;
                border:2px solid rgba(153, 153, 153, 0.14);
            }
        }
        .buyerMsg{
            .el-col{
                color: #000;
                background: rgba(153, 153, 153, 0.24);
                padding: 15px;
                margin-bottom: 15px;
                border-radius: 5px;
                font-weight: bold;
                font-size: 14px;
            }
        }
    }
</style>
