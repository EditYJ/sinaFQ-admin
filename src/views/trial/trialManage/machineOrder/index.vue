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
            <el-row>
              <el-col :span="8">
                <el-form-item label="输入查询:">
                  <el-input v-model="postForm.name" size="small" placeholder="用户ID / 姓名/订单编号/注册手机号" />
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
                <el-form-item label="订单来源:">
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
                <el-form-item label="分期期数:">
                  <el-select v-model="postForm.goodsType1" placeholder="请选择">
                    <el-option label="区域一" value="shanghai" />
                    <el-option label="区域二" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item label="支付方式:">
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
          <el-col :span="3" offset="17">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" plain @click.native.prevent="manualPolicy">手动分单</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="全选" />
          <el-table-column prop="date" label="订单编号" />
          <el-table-column prop="date" label="用户ID" />
          <el-table-column prop="date" label="姓名" />
          <el-table-column prop="date" label="注册手机号" width="150" />
          <el-table-column prop="date" label="信用分" />
          <el-table-column prop="date" label="复借/复购" width="150" />
          <el-table-column prop="date" label="订单来源" />
          <el-table-column prop="date" label="订单类型" />
          <el-table-column prop="date" label="支付方式" />
          <el-table-column prop="date" label="分期金额" />
          <el-table-column prop="date" label="分期期数" />
          <el-table-column prop="date" label="机审决策" />
          <el-table-column prop="date" label="跟进时间" />

        </el-table>
      </el-main>
    </el-container>

    <!-- 手动分单 -->
    <el-dialog :visible.sync="listDialog">
      <template slot="title">
        <span style="margin-right:5px;font-weight:bold;">手动分单</span>
        <span class="title-name" style="font-size:13px;">已选择审单数：{{ orderNum }}</span>
      </template>
      <el-form ref="listForm" :model="listForm" label-width="120px" class="elCheckedForm">
        <el-form-item label="审核员筛选">
          <el-select v-model="listForm.region" placeholder="仅初审">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
          <span>已选择11人</span>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedChange">
            <el-checkbox label="复选框 A" />
            <el-checkbox label="复选框 B" />
            <el-checkbox label="复选框 C" />
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="listDialog = false">确 定</el-button>
        <el-button @click="listDialog = false">取 消</el-button>
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
      orderNum: 1,
      listDialog: false,
      checkAll: false,
      isIndeterminate: false,
      listForm: {}
    }
  },
  methods: {
    manualPolicy() { // 手动分单
      this.listDialog = true
    },
    handleCheckAllChange(val) { // 全选
      console.log(val)
    },
    handleCheckedChange() { // 选择
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
    .elCheckedForm{
        .el-form-item{
            .el-form-item__content{
                margin-left: 35px !important;
            }
        }
    }
</style>

<style lang="scss" scoped>
    .line{
        text-align: center;
        margin:0 10px;
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
