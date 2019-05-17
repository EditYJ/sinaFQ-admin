<template>
  <div class="page">
    <div class="topButton">
      <el-row>
        <el-button size="small" :type="jdGoods" @click="checkState('jd')">京东买断</el-button>
        <el-button size="small" :type="inputGoods" @click="checkState('')">苏宁买断</el-button>
      </el-row>
    </div>

    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <el-col :span="4">筛选查询</el-col>
          <el-col :span="6" :offset="13">
            <div class="grid-content bg-purple">
              <el-button type="primary" plain @click.stop="queryGoods">查询</el-button>
              <el-button type="primary" plain @click.stop="resetQuery">重置</el-button>
              <el-button type="primary" plain @click.stop="topQuery">高级检索</el-button>
            </div>
          </el-col>
        </template>
        <el-row>
          <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
            <el-col :span="5">
              <el-form-item label="输入搜索:">
                <el-input v-model="postForm.name" size="small" placeholder="输入商品编号/商品名称" />
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="注册手机:">
                <el-input v-model="postForm.name" size="small" placeholder="输入注册手机号" />
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="支付方式:">
                <el-select v-model="postForm.timeState" size="small" placeholder="请选择">
                  <el-option label="一期" value="oneState" />
                  <el-option label="二期" value="twoState" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="物流状态:">
                <el-select v-model="postForm.timeState" size="small" placeholder="请选择">
                  <el-option label="一期" value="oneState" />
                  <el-option label="二期" value="twoState" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="售后状态:">
                <el-select v-model="postForm.timeState" size="small" placeholder="请选择">
                  <el-option label="一期" value="oneState" />
                  <el-option label="二期" value="twoState" />
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker v-model="postForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-date-picker v-model="postForm.date2" placeholder="选择日期" style="width: 100%;" />
                  </el-form-item>
                </el-col>
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="跟进时间">
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker v-model="postForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-date-picker v-model="postForm.date2" placeholder="选择日期" style="width: 100%;" />
                  </el-form-item>
                </el-col>
              </el-form-item>
            </el-col>

          </el-form>
        </el-row>
      </el-collapse-item>
    </el-collapse>

    <el-container class="goodsList">
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple-dark">物流列表</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <template>
          <el-table :data="purchaseList" height="auto" border style="width: 100%">

            <el-table-column prop="allCheck" label="全选" width="60" align="center" />

            <el-table-column prop="orderCode" label="订单编号" width="100" align="center" />

            <el-table-column prop="goodsCode" label="商品编号" width="100" align="center" />

            <el-table-column prop="orderContent" label="订单内容" width="100" align="center" />

            <el-table-column prop="tel" label="注册手机" width="100" align="center" />

            <el-table-column prop="money" label="订单金额" width="100" align="center" />

            <el-table-column prop="freight" label="运费" width="100" align="center" />

            <el-table-column prop="truePay" label="实付金额" width="100" align="center" />

            <el-table-column prop="orderFrom" label="订单来源" width="100" align="center" />

            <el-table-column prop="payWay" label="支付方式" width="100" align="center" />

            <el-table-column prop="payTime" label="支付时间" width="80" align="center" />

            <el-table-column prop="payTime" label="物流状态" width="80" align="center" />

            <el-table-column prop="flowTime" label="跟进时间" align="center" />

            <el-table-column prop="type" label="售后状态" align="center" />

            <el-table-column prop="setting" label="操作" align="center" width="200" fixed="right">
              <template scope="scope">
                <el-button-group>
                  <el-button type="success" size="mini" @click.native.prevent="listDetail">详情</el-button>
                  <el-button type="warning" size="mini" @click.native.prevent="addLogist">补充物流</el-button>
                  <!-- <el-button type="info" size='mini' disabled="">已处理</el-button>
                                    <el-button type="primary" size='mini' @click.native.prevent="applyAfterBuy">申请售后</el-button>
                                    <el-button type="primary" size='mini' @click.native.prevent="handleList">处理</el-button>
                                    <el-button type="danger" size='mini' @click.native.prevent="cancelAfterBuy">取消售后</el-button> -->
                </el-button-group>
              </template>
            </el-table-column>

          </el-table>
        </template>
      </el-main>
    </el-container>

    <!-- 高级检索 -->
    <el-dialog title="高级检索" :visible.sync="topQueryDialog">

      <el-form ref="topQueryForm" :model="topQueryForm" label-width="80px" size="mini">
        <el-form-item label="订单金额">
          <el-col :span="11">
            <el-input v-model="topQueryForm.startPrice" size="small" />
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-input v-model="topQueryForm.endPrice" size="small" />
          </el-col>
        </el-form-item>
        <el-form-item label="支付时间">
          <el-col :span="11">
            <el-input v-model="topQueryForm.payTimeStart" size="small" />
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-input v-model="topQueryForm.payTimeEnd" size="small" />
          </el-col>
        </el-form-item>
        <el-form-item label="跟进时间">
          <el-col :span="11">
            <el-input v-model="topQueryForm.followTimeStart" size="small" />
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="11">
            <el-input v-model="topQueryForm.followTimeEnd" size="small" />
          </el-col>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="topQueryDialog = false">查 询</el-button>
        <el-button @click="topQueryDialog = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 取消售后 -->
    <el-dialog title="取消售后" :visible.sync="cancelAfterBuyDialog">
      <div class="sub-title">取消原因:</div>
      <el-input v-model="cancelAfterBuyReason" type="textarea" placeholder="请输入取消原因" maxlength="200" show-word-limit />
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="cancelAfterBuyDialog = false">查 询</el-button>
        <el-button @click="cancelAfterBuyDialog = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 申请售后 -->
    <el-dialog :visible.sync="applyAfterBuyDialog" class="applyDialog" top="3vh">
      <template slot="title">
        <span class="text1">申请售后</span>
        <span class="text2">*</span>
        <span class="text3">为必填字段</span>
      </template>
      <el-form ref="addDialogForm" label-position="center" :model="applyDialigForm" label-width="140px">

        <el-form-item label="服务类型:">
          <el-select v-model="applyDialigForm.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="取件方式:">
          <el-select v-model="applyDialigForm.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="售后数量:" prop="num">
          <el-col :span="14">
            <el-input v-model="applyDialigForm.num" placeholder="请输入" />
          </el-col>
        </el-form-item>

        <el-form-item label="售后原因:" prop="num">
          <el-col :span="14">
            <el-input v-model="applyDialigForm.reason" type="areatext" placeholder="请输入售后原因（选填）" />
          </el-col>
        </el-form-item>

        <el-form-item label="邮件编码:" prop="num">
          <el-col :span="14">
            <el-input v-model="applyDialigForm.num" placeholder="选填" />
          </el-col>
        </el-form-item>

        <el-form-item label="取件地址:" class="elForm">
          <el-row>
            <el-col :span="4">
              <el-select v-model="applyDialigForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="applyDialigForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="applyDialigForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="14">
              <el-input v-model="applyDialigForm.surviceType" placeholder="详情地址" />
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="返件地址:" class="elForm">
          <el-row>
            <el-col :span="4">
              <el-select v-model="applyDialigForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="applyDialigForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-col>
            <el-col :span="4">
              <el-select v-model="applyDialigForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="14">
              <el-input v-model="applyDialigForm.surviceType" placeholder="详情地址" />
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="applyAfterBuyDialog = false">提 交</el-button>
        <el-button @click="applyAfterBuyDialog = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 补充物流 -->
    <el-dialog ref="addLogistDialog" title="补充物流" :visible.sync="addLogistDialog" label-position="center" class="addLogist" label-width="140px">
      <el-form>
        <el-form-item label="物流渠道:">
          <el-col :span="10">
            <el-input placeholder="请输入" />
          </el-col>
        </el-form-item>
        <el-form-item label="物流单号:">
          <el-col :span="10">
            <el-input placeholder="请输入" />
          </el-col>
        </el-form-item>
        <el-form-item label="发货运费:">
          <el-col :span="10">
            <el-input placeholder="请输入" />
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="addLogistDialog = false">提 交</el-button>
        <el-button @click="addLogistDialog = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topQueryDialog: false,
      cancelAfterBuyDialog: false,
      applyAfterBuyDialog: false,
      addLogistDialog: false,
      cancelAfterBuyReason: '',
      jdGoods: 'primary',
      inputGoods: '',
      activeNames: ['1'],
      postForm: {
        name: '',
        goodsType1: '',
        goodsType2: '',
        goodsType3: '',
        timeState: ''
      },
      purchaseList: [{}],
      topQueryForm: {
        startPrice: '',
        endPrice: '',
        payTimeStart: '',
        payTimeEnd: '',
        followTimeStart: '',
        followTimeEnd: ''
      },
      applyDialigForm: {

      }

    }
  },
  methods: {
    topQuery() { //  高级检索
      this.topQueryDialog = true
    },
    listDetail() { //  点击列表详情
      this.$router.push({ name: 'listDetail' })
    },
    cancelAfterBuy() { //  取消售后
      // todo...
      //     校验接口
      this.cancelAfterBuyDialog = true
    },
    handleList() { //  处理
      this.$confirm('确认进行处理吗？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '处理成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    applyAfterBuy() { //  申请售后
      // todo...
      this.applyAfterBuyDialog = true
    },
    addLogist() { //  补充物流
      this.addLogistDialog = true
    },
    checkState(state) {
      if (state == 'jd') {
        this.jdGoods = 'primary'
        this.inputGoods = ''
      } else {
        this.jdGoods = ''
        this.inputGoods = 'primary'
      }
    }

  }
}
</script>

<style lang="scss" scoped>
    .topButton{
        margin-bottom:20px;
    }
    .goodsList{
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
    .sub-title{
        margin-bottom:10px;
    }
    .applyDialog{
        .text1{
            font-weight: bold;
            margin-right: 10px;
        }
        .text2{
            color: red;
            position: relative;
            top: 3px;
        }
        .text3{
            font-size: 13px;
        }
    }
    .elForm{
        .el-row{
            margin-bottom: 20px;
            .el-col:not(:first-child){
                margin-left: 17px;
            }
        }
    }
</style>

