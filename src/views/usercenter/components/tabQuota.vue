<template>
  <div>
    <el-row class="headMsg">
      <span>额度信息</span>
      <span class="span2">总额度：¥5999.00,&nbsp;可用额度¥5056.00</span>
    </el-row>
    <el-table :data="quotaMsg" border style="width: 100%">
      <el-table-column prop="index" label="序号" width="100" align="center" />
      <el-table-column prop="evt" label="事件" align="center" />
      <el-table-column prop="time" label="时间" align="center" />
      <el-table-column prop="availableMoney" label="可用额度明细" align="center" />
      <el-table-column prop="orderId" label="关联订单号" align="center" />
      <el-table-column prop="payId" label="关联账单号" align="center" />
    </el-table>
  </div>
</template>

<script>
export default {
  props:['userId'],
  data() {
    return {
      quotaMsg: [{
        evt: '1234',
        time: '1234',
        availableMoney: '+1000',
        orderId: '1223',
        payId: '12123'
      }, {
        evt: '1234',
        time: '1234',
        availableMoney: '+1000',
        orderId: '1223',
        payId: '12123'
      }]
    }
  },
  created() {
    console.log('额度信息')
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
        .span2{
            font-size: 14px;
        }
    }
</style>
