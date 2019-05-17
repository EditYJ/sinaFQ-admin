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
            <el-col :span="7">
              <el-form-item label="编号查询:">
                <el-input v-model="postForm.name" size="small" placeholder=" 订单编号/注册手机号/用户ID" />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="支付通道:">
                <el-select v-model="postForm.goodsType1" size="small" placeholder="请选择">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="退款状态:">
                <el-select v-model="postForm.timeState" size="small" placeholder="请选择">
                  <el-option label="一期" value="oneState" />
                  <el-option label="二期" value="twoState" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="跟进时间">
                <el-col :span="11">
                  <el-date-picker v-model="postForm.date1" size="small" type="date" placeholder="选择日期" style="width: 100%;" />
                </el-col>
                <el-col class="line" :span="1">至</el-col>
                <el-col :span="11">
                  <el-date-picker v-model="postForm.date2" size="small" placeholder="选择时间" style="width: 100%;" />
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
            <div class="grid-content bg-purple-dark">退款列表</div>
          </el-col>
          <el-col :span="3" offset="17">
            <div class="grid-content bg-purple-dark">
              <el-button v-if="showReturnOrder" type="primary" plain @click.native.prevent="checkReturnOrder">批量自动退款</el-button>
              <el-button v-if="!showReturnOrder" type="primary" plain @click.native.prevent="returnOrder">确 认</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="orderTable" height="auto" border style="width: 100%">
          <el-table-column prop="allCheck" label="全选" width="60" align="center" />
          <el-table-column prop="groupName" label="订单编号" align="center" />
          <el-table-column prop="businessType" label="账单编号" align="center" />
          <el-table-column prop="name" label="姓名" align="center" />
          <el-table-column prop="leader" label="注册手机号" align="center" />
          <el-table-column prop="tips" label="用户ID" align="center" />
          <el-table-column prop="time" label="下单时间" align="center" />
          <el-table-column prop="time" label="支付通道" align="center" />
          <el-table-column prop="time" label="订单金额" align="center" />
          <el-table-column prop="time" label="实付金额" align="center" />
          <el-table-column prop="time" label="退款金额" align="center" />
          <el-table-column prop="time" label="退款状态" align="center" />
          <el-table-column prop="time" label="跟进时间" align="center" />
          <el-table-column prop="time" label="处理人" align="center" />
          <el-table-column prop="setting" label="操作" align="center" fixed="right" width="200">
            <template scope="scope">
              <el-button-group>
                <!-- <el-button size="mini" type="primary" @click.native.prevent="returnOrder">退款</el-button> -->
                <el-button size="mini" type="success" @click.native.prevent="returnDetail">详情</el-button>
                <el-button size="mini" type="danger" @click.native.prevent="failReason">失败原因</el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <!-- 详情 -->
    <el-dialog title="详情" :visible.sync="detailDialog">
      <el-row>
        <el-col>退款明细</el-col>
      </el-row>
      <el-table :data="orderTable" height="auto" border style="width: 100%">
        <el-table-column prop="needPay" label="流水号" align="center" />
        <el-table-column prop="needCharge" label="交易时间" align="center" />
        <el-table-column prop="managePay" label="交易类型" align="center" />
        <el-table-column prop="groupName" label="退款金额" align="center" />
        <el-table-column prop="groupName" label="状态" align="center" />
      </el-table>
      <el-row class="detailDialogRow">
        <el-col>原始支付明细</el-col>
      </el-row>
      <el-table :data="orderTable" height="auto" border style="width: 100%">
        <el-table-column prop="needPay" label="订单号" align="center" />
        <el-table-column prop="needCharge" label="支付时间" align="center" />
        <el-table-column prop="managePay" label="支付通道" align="center" />
        <el-table-column prop="groupName" label="支付通道账号" align="center" />
        <el-table-column prop="groupName" label="支付金额" align="center" />
        <el-table-column prop="groupName" label="支付流水" align="center" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click.native.prevent="detailDialog = false">确认退款</el-button>
        <el-button type="danger" @click.native.prevent="detailDialog = false">关 闭</el-button>
      </span>
    </el-dialog>

    <!-- 失败原因 -->
    <el-dialog title="失败原因" :visible.sync="failReasonDialog">
      <el-row class="failReasonRow">
        <el-col>失败原因:</el-col>
      </el-row>
      <el-input type="textarea" placeholder="请输入失败原因" :autosize="{ minRows:4}" />
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click.native.prevent="failReasonDialog = false">关 闭</el-button>
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
      submitTotal: '123',
      cancelAccountDialog: false,
      showReturnOrder: true,
      detailDialog: false,
      failReasonDialog: false
    }
  },
  methods: {
    returnOrder() { // 退款

    },
    returnDetail() { // 详情
      this.detailDialog = true
    },
    failReason() { // 失败原因
      this.failReasonDialog = true
    },
    checkReturnOrder() { // 批量自动退款
      this.$confirm(`仅支持批量处理相同支付通道的任务`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.showReturnOrder = false
      }).catch(() => {
        this.showReturnOrder = true
      })
    },
    returnOrder() { // 确认退款
      this.$confirm(`合计总金额xxx元，是否确认提交退款？`, '确认提交', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // todo...
        this.$message({
          type: 'success',
          message: '成功!'
        })
        this.showReturnOrder = true
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
        this.showReturnOrder = true
      })
    }

  }
}
</script>

<style lang="scss" scoped>
    .line{
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
    .detailDialogRow{
        margin-top: 20px;
    }
    .failReasonRow{
        margin-bottom: 15px;
    }
</style>
