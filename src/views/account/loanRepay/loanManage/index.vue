<template>
  <div class="page">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <el-col :span="4">筛选查询</el-col>
          <el-col :span="6" :offset="17">
            <div class="grid-content bg-purple">
              <el-button type="primary" plain @click.stop="queryGoods">查询</el-button>
              <el-button type="primary" plain @click.stop="resetQuery">重置</el-button>
            </div>
          </el-col>
        </template>
        <el-row>
          <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
            <el-col :span="4">
              <el-form-item label="编号查询:">
                <el-input v-model="postForm.name" size="small" placeholder="请输入" />
              </el-form-item>
            </el-col>

            <el-col :span="7">
              <el-form-item label="分期金额">
                <el-col :span="11">
                  <el-input v-model="postForm.name" size="small" placeholder="请输入" />
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="11">
                  <el-input v-model="postForm.name" size="small" placeholder="请输入" />
                </el-col>
              </el-form-item>
            </el-col>

            <el-col :span="4">
              <el-form-item label="资金方:">
                <el-select v-model="postForm.goodsType1" size="mini" placeholder="请选择">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="分期总数:">
                <el-select v-model="postForm.timeState" size="small" placeholder="请选择">
                  <el-option label="一期" value="oneState" />
                  <el-option label="二期" value="twoState" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="放款状态:">
                <el-select v-model="postForm.timeState" size="small" placeholder="请选择">
                  <el-option label="一期" value="oneState" />
                  <el-option label="二期" value="twoState" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="跟进时间">
                <el-col :span="11">
                  <el-date-picker v-model="postForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
                </el-col>
                <el-col class="line" :span="1">-</el-col>
                <el-col :span="11">
                  <el-date-picker v-model="postForm.date2" placeholder="选择时间" style="width: 100%;" />
                </el-col>
              </el-form-item>
            </el-col>
          </el-form>
        </el-row>
      </el-collapse-item>
    </el-collapse>

    <el-container class="groupList">
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple-dark">订单列表</div>
          </el-col>
          <el-col :span="5" offset="15">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" plain @click.native.prevent="switchDeploy">开关配置</el-button>
              <el-button type="primary" plain @click.native.prevent="checkCancel">批量取消</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="orderTable" height="auto" border style="width: 100%">
          <el-table-column prop="allCheck" label="全选" width="60" align="center" />
          <el-table-column prop="groupName" label="订单编号" align="center" />
          <el-table-column prop="businessType" label="用户ID" align="center" />
          <el-table-column prop="groupNum" label="注册手机号" align="center" />
          <el-table-column prop="leader" label="信用分" align="center" />
          <el-table-column prop="tips" label="复借/复购" align="center" />
          <el-table-column prop="time" label="分期类型" align="center" />
          <el-table-column prop="time" label="分期金额" align="center" />
          <el-table-column prop="time" label="到账金额" align="center" />
          <el-table-column prop="time" label="资产归属" align="center" />
          <el-table-column prop="time" label="分期总数" align="center" />
          <el-table-column prop="time" label="支付时间" align="center" />
          <el-table-column prop="time" label="支付方式" align="center" />
          <el-table-column prop="time" label="放款状态" align="center" />
          <el-table-column prop="time" label="跟进时间" align="center" />
          <el-table-column prop="setting" label="操作" align="center" fixed="right" width="200">
            <template scope="scope">
              <el-button-group>
                <el-button size="mini" type="primary" @click.native.prevent="orderDetail">详情</el-button>
                <!-- <el-button size="mini" type="success" @click.native.prevent="orderBank">到账银行卡</el-button> -->
                <!-- <el-button size="mini" type="danger" @click.native.prevent="failRecord">失败记录</el-button> -->
                <!-- <el-button size="mini" type="danger" @click.native.prevent="cancelOrder">取消放款</el-button> -->
                <el-button size="mini" type="danger" @click.native.prevent="cancelReason">取消原因</el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <!-- 开关配置 -->
    <el-dialog title="开关配置" :visible.sync="switchDialog">
      <el-table :data="switchTable" height="auto" border style="100%">
        <el-table-column prop="" label="序号" />
        <el-table-column prop="" label="资金方" />
        <el-table-column prop="" label="放款开关状态" />
        <el-table-column prop="" label="操作">
          <template scope="scope">
            <el-button size="mini" type="primary">禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click.native.prevent="switchDialog = false">提 交</el-button>
        <el-button type="danger" @click.native.prevent="switchDialog = false">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- 到账银行 -->
    <el-dialog title="到帐银行" :visible.sync="orderBankDialog">
      <el-table :data="ordeBankTable" height="auto" border style="width: 100%">
        <el-table-column prop="name" label="姓名" width="100" align="center" />
        <el-table-column prop="bankName" label="开户行" align="center" />
        <el-table-column prop="coderNum" label="开户卡号" align="center" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click.native.prevent="orderBankDialog = false">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- 失败记录 -->
    <el-dialog title="失败记录" :visible.sync="failRecordDialog">
      <el-table :data="ordeBankTable" height="auto" border style="width: 100%">
        <el-table-column prop="name" label="序号" width="100" align="center" />
        <el-table-column prop="bankName" label="资金方" align="center" />
        <el-table-column prop="coderNum" label="失败时间" align="center" />
        <el-table-column prop="coderNum" label="失败原因" align="center" />
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click.native.prevent="failRecordDialog = false">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- 取消放款 -->
    <el-dialog title="取消放款" :visible.sync="cancelOrderDialog">
      <el-input type="textarea" placeholder="请输入取消放款原因" />
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click.native.prevent="cancelOrderDialog = false">提 交</el-button>
        <el-button type="danger" @click.native.prevent="cancelOrderDialog = false">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- 取消放款 -->
    <el-dialog title="取消放款原因" :visible.sync="cancelReasonDialog">
      <el-input type="textarea" placeholder="取消放款原因" disabled />
      <el-row class="cancelReasonSpan">
        <el-col :span="5">取消操作人:XXX</el-col>
        <el-col :span="7" offset="1">取消时间:XXX</el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click.native.prevent="cancelReasonDialog = false">关 闭</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      postForm: {},
      orderTable: [{}],
      switchTable: [{}],
      switchDialog: false,
      orderBankDialog: false,
      failRecordDialog: false,
      cancelOrderDialog: false,
      cancelReasonDialog: false
    }
  },
  methods: {
    switchDeploy() { // 开关配置
      this.switchDialog = true
    },
    orderBank() { //  到账银行卡
      this.orderBankDialog = true
    },
    failRecord() { //  失败记录
      this.failRecordDialog = true
    },
    cancelOrder() { //  取消放款
      this.cancelOrderDialog = true
    },
    cancelReason() { //  取消原因
      this.cancelReasonDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
    .line {
        margin: 0px 5px;
        text-align: center;
    }
    .groupList{
        margin-top: 20px;
        .el-header{
            height: 58px;
            line-height: 58px;
            font-size: 16px;
            font-weight: bold;
            background: rgba(0,0,0,0.1);
            padding: 0px 10px;
        }
        .el-main{
            padding:0px;
            .goodsNameLink{
                color: #409EFF
            }
        }
    }
    .cancelReasonSpan {
        margin-top: 20px;
    }
</style>
