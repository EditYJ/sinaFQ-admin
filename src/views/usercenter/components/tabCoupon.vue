<template>
  <div>
    <el-row class="headMsg">
      <span>优惠券信息</span>
    </el-row>
    <el-row>
      <el-col :span="3">
        <el-select v-model="couponType" placeholder="优惠券类型">
          <el-option
            v-for="item in couponTypeArr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="3" offset="1">
        <el-select v-model="couponStatus" placeholder="优惠券状态">
          <el-option
            v-for="item in couponStatusArr"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="7" offset="1">
        <el-date-picker
          v-model="searchTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </el-col>
      <el-col :span="2" offset="1">
        <el-button type="primary">查询</el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">重置</el-button>
      </el-col>
    </el-row>
    <el-row class="couponTable">
      <el-table :data="couponMsg" border style="width: 100%">
        <el-table-column prop="index" label="序号" width="100" align="center" />
        <el-table-column prop="couponId" label="优惠券编号" align="center" />
        <el-table-column prop="couponName" label="优惠券名称" align="center" />
        <el-table-column prop="couponType" label="优惠券类型" align="center" />
        <el-table-column prop="couponStatus" label="优惠券状态" align="center" />
        <el-table-column prop="sendTime" label="发放时间" align="center" />
        <el-table-column prop="useOrderId" label="使用单号" align="center" />
        <el-table-column prop="useTime" label="使用时间" align="center" />
        <el-table-column prop="overTime" label="过期时间" align="center" />
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Tabcoupon',
  data() {
    return {
      couponType: '',
      couponTypeArr: [{
        value: 'coupon1',
        label: 'coupon1'
      }, {
        value: 'coupon3',
        label: 'coupon2'
      }
      ],
      couponStatus: '',
      couponStatusArr: [{
        value: 'coupon1',
        label: 'coupon1'
      }, {
        value: 'coupon3',
        label: 'coupon2'
      }
      ],
      searchTime: '',
      couponMsg: [{}]
    }
  },
  mounted() {
    console.log('优惠券信息')
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
    .headMsg{
        span{
            color: #666666;
            font-size: 16px;
            font-weight: 500;
            height: 40px !important;
            line-height: 40px;
            margin-right: 5px;
        }
    }
    .couponTable{
        margin-top: 20px;
    }
</style>
