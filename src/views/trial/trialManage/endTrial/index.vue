<template>
  <div class="page">
    <div class="topButton">
      <el-row>
        <el-button size="small" :type="waitTrial" @click="checkState('waitTrial')">待终审(888)</el-button>
        <el-button size="small" :type="needTrial" @click="checkState('needTrial')">已驳回重审(999)</el-button>
      </el-row>
    </div>

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
          <el-form ref="form" :model="postForm" label-width="90px" class="elForm">
            <el-row>
              <el-col :span="8">
                <el-form-item label="输入查询:">
                  <el-input v-model="postForm.name" size="small" placeholder="订单编号/注册手机号" />
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <el-form-item label="分期金额">
                  <el-col :span="10">
                    <el-input v-model="postForm.startMoney" placeholder="" />
                  </el-col>
                  <el-col class="line" :span="0.5">-</el-col>
                  <el-col :span="10">
                    <el-input v-model="postForm.endMoney" placeholder="" />
                  </el-col>
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <el-form-item label="信用分">
                  <el-col :span="10">
                    <el-input v-model="postForm.startMoney" placeholder="" />
                  </el-col>
                  <el-col class="line" :span="0.5">-</el-col>
                  <el-col :span="10">
                    <el-input v-model="postForm.endMoney" placeholder="" />
                  </el-col>
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <el-form-item label="跟进时间">
                  <el-col :span="10">
                    <el-input v-model="postForm.startMoney" placeholder="" />
                  </el-col>
                  <el-col class="line" :span="0.5">-</el-col>
                  <el-col :span="10">
                    <el-input v-model="postForm.endMoney" placeholder="" />
                  </el-col>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="4">
                <el-form-item label="订单类型:">
                  <el-select v-model="postForm.goodsType1" placeholder="请选择">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="复借/复购:">
                  <el-select v-model="postForm.goodsType1" placeholder="请选择">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="初审处理人:">
                  <el-select v-model="postForm.goodsType1" placeholder="请选择">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="初审决策:">
                  <el-select v-model="postForm.goodsType1" placeholder="请选择">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="终审处理人:">
                  <el-select v-model="postForm.goodsType1" placeholder="请选择">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="终审决策:">
                  <el-select v-model="postForm.goodsType1" placeholder="请选择">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>

            </el-row>

          </el-form>
        </el-row>
      </el-collapse-item>
    </el-collapse>

    <el-container class="groupList">
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple-dark">审单列表</div>
          </el-col>
          <el-col :span="5" offset="15">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" plain @click.native.prevent="refuseOrder">批量拒绝</el-button>
              <el-button type="primary" plain @click.native.prevent="turnOrder">转 单</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="全选" />
          <el-table-column prop="date" label="订单编号" />
          <el-table-column prop="date" label="支付时间" />
          <el-table-column prop="date" label="注册手机号" width="150" />
          <el-table-column prop="date" label="信用分" />
          <el-table-column prop="date" label="复借/复购" width="150" />
          <el-table-column prop="date" label="订单类型" />
          <el-table-column prop="date" label="分期金额" />
          <el-table-column prop="date" label="订单金额" />
          <el-table-column prop="date" label="分期期数" />
          <el-table-column prop="date" label="机审决策" />
          <el-table-column prop="date" label="初审处理人" />
          <el-table-column prop="date" label="初审决策" />
          <el-table-column prop="date" label="终审处理人" />
          <el-table-column prop="date" label="终审决策" />
          <el-table-column prop="date" label="跟进时间" />
          <el-table-column prop="date" label="操作">
            <template scope="scope">
              <el-button-group>
                <!-- todo -->
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <!-- 转单 -->
    <el-dialog :title="转单" :visible.sync="turnOrderDialog">
      <el-form ref="trunForm" :model="trunForm" label-width="120px">
        <el-row>
          <el-col :span="11">
            <el-form-item label="搜索">
              <el-input type="" placeholder="请输入姓名/账号" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="审核员">
          <el-select v-model="trunForm.region" placeholder="仅初审">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="turnOrderDialog = false">确 定</el-button>
        <el-button @click="turnOrderDialog = false">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      waitTrial: 'primary',
      needTrial: '',
      activeNames: ['1'],
      postForm: {},
      turnOrderDialog: false,
      trunForm: {}
    }
  },
  methods: {
    checkState(val) {
      if (val == 'waitTrial') {
        this.waitTrial = 'primary'
        this.needTrial = ''
      } else {
        this.waitTrial = ''
        this.needTrial = 'primary'
      }
    },
    refuseOrder() { //  批量拒单

    },
    turnOrder() { //  转单
      this.turnOrderDialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
    .topButton{
        margin-bottom:20px;
    }
    .line{
        margin: 0px 10px;
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
</style>
