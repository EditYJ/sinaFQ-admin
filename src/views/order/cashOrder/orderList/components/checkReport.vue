<template>
  <div>
    <el-row class="headerTab">
      <el-table :data="checkReportTable" border style="width: 100%">
        <el-table-column prop="node" label="审核节点" width="100" align="center" />
        <el-table-column prop="policy" label="决策" align="center" />
        <el-table-column prop="policyReason" label="决策主原因" align="center" />
        <el-table-column prop="policyReason2" label="决策子原因" align="center" />
        <el-table-column prop="policyTime" label="决策时间" align="center" />
        <el-table-column prop="policymaker" label="决策人" align="center" />
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button type="primary" size="mini" @click="stagesDialogShow">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Tabcoupon',
  data() {
    return {
      checkReportTable: [{}]
    }
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
    .headerTab{
        margin-top: 20px;
    }
</style>
