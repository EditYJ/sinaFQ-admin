<template>
  <div class="page">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <el-col :span="4">筛选查询</el-col>
          <el-col :span="4" :offset="10"><div class="grid-content bg-purple" /></el-col>
          <el-button size="small" type="primary" plain @click.stop="normalQuery">查询</el-button>
          <el-button size="small" type="primary" plain @click.stop="resetQuery">重置</el-button>
          <el-button size="small" type="primary" plain @click.stop="topQuery">高级检索</el-button>
          </el-col>
        </template>
        <el-row>
          <el-form ref="form" :model="searchForm" label-width="80px" class="elForm">
            <el-col :span="6">
              <el-form-item label="编号查询:">
                <el-input v-model="searchForm.code" size="small" placeholder="订单编号/注册手机号/用户ID" />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="借款金额:">
                <el-col :span="10">
                  <el-input size="mini" />
                </el-col>
                <el-col :span="3">&nbsp;至&nbsp;</el-col>
                <el-col :span="11">
                  <el-input size="mini" />
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="资产归属:">
                <el-select v-model="searchForm.overTime" size="mini" placeholder="请选择">
                  <el-option label="已逾期" value="overTime" />
                  <el-option label="未预期" value="notOverTime" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="分期总数:">
                <el-select v-model="searchForm.overTime" size="mini" placeholder="请选择">
                  <el-option label="已逾期" value="overTime" />
                  <el-option label="未预期" value="notOverTime" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="组包状态:">
                <el-select v-model="searchForm.overTime" size="mini" placeholder="请选择">
                  <el-option label="已逾期" value="overTime" />
                  <el-option label="未预期" value="notOverTime" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="跟进时间:">
                <el-col :span="12">
                  <el-date-picker v-model="searchForm.registerTime.startTime" size="small" type="date" placeholder="选择时间" style="width: 100%;" />
                </el-col>
                <el-col :span="1">&nbsp;至&nbsp;</el-col>
                <el-col :span="11">
                  <el-date-picker v-model="searchForm.registerTime.endTime" size="small" placeholder="选择时间" style="width: 100%;" />
                </el-col>
              </el-form-item>
            </el-col>
          </el-form>

        </el-row>
      </el-collapse-item>
    </el-collapse>

    <el-container class="userList">
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple-dark">订单列表</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <template>
          <el-table :data="orderTable" height="auto" border style="width: 100%">
            <el-table-column prop="allCheck" label="全选" width="60" align="center" />
            <el-table-column prop="orderCode" label="订单编号" width="100" align="center" />
            <el-table-column prop="orderTime" label="注册手机号" width="140" align="center" />
            <el-table-column prop="tel" label="复借/复购" width="140" align="center" />
            <el-table-column prop="orderFrom" label="借款金额" width="140" align="center" />
            <el-table-column prop="orderMoney" label="到账金额" width="140" align="center" />
            <el-table-column prop="payMoney" label="资产归属" width="140" align="center" />
            <el-table-column prop="stagesCount" label="分期总数" width="120" align="center" />
            <el-table-column prop="payTime" label="支付时间" width="140" align="center" />
            <el-table-column prop="payWay" label="支付方式" width="140" align="center" />
            <el-table-colum prop="groupStauts" label="组包状态" width="140" align="center" />
            <el-table-colum prop="groupStauts" label="跟进时间" width="140" align="center" />
            <el-table-column label="操作" width="260" align="center" fixed="right">
              <template slot-scope="scope">
                <el-button-group>
                  <el-button size="mini" type="primary">详情</el-button>
                  <el-button size="mini" type="danger" @click.native.prevent="cancelReason">取消原因</el-button>
                  <!-- <el-button size="mini" type="warning" @click.native.prevent="cancelGroup">取消组包</el-button>
                                    <el-button size="mini" type="success">提交组包</el-button>
                                    <el-button size="mini" type="danger" @click.native.prevent="failReason">失败原因</el-button> -->
                </el-button-group>
              　　　　</template>
            </el-table-column>
          </el-table>
        </template>
      </el-main>
    </el-container>

    <!-- 失败原因 -->
    <el-dialog :visible.sync="failReasonDialog" title="失败原因">
      <el-input type="textarea" placeholder="失败原因" />
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click.native.prevent="failReasonDialog = false">关闭</el-button>
      </span>
    </el-dialog>

    <!-- 取消组包 -->
    <el-dialog title="取消组包" :visible.sync="cancelGroupDialog">
      <el-input type="textarea" placeholder="取消组包" />
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click.native.prevent="cancelGroupDialog = false">关闭</el-button>
      </span>
    </el-dialog>

    <!-- 取消原因 -->
    <el-dialog title="取消原因" :visible.sync="cancelReasonDialog" class="myDialog">
      <el-input type="textarea" placeholder="取消原因" />
      <el-row>
        <el-col :span="5">取消操作人：aaa</el-col>
        <el-col :span="5" offset="1">取消时间：bbb</el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click.native.prevent=" cancelReasonDialog = false ">关闭</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      failReasonDialog: false,
      cancelGroupDialog: false,
      cancelReasonDialog: false,
      searchForm: {
        userMsg: '',
        auth: '',
        overTime: '',
        quota: '',
        registerTime: {
          startTime: '',
          endTime: ''
        }
      },
      orderTable: [{}]
    }
  },
  methods: {
    normalQuery() {},
    resetQuery() {},
    topQuery() {},
    failReason() { //  失败原因
      this.failReasonDialog = true
    },
    cancelGroup() { //  取消组包
      this.cancelGroupDialog = true
    },
    cancelReason() { // 取消原因
      this.cancelReasonDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
    .page{
        .userList{
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
        .myDialog{
            .el-row{
                margin-top: 15px;
            }
        }
    }
</style>
