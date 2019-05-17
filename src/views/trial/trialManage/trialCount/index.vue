<template>
  <div class="page">
    <el-row>
      <el-form ref="form" :model="postForm" label-width="90px" class="elForm">
        <el-col :span="5">
          <el-form-item label="输入查询:">
            <el-input v-model="postForm.name" size="small" placeholder="姓名/账号" />
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="审核组:">
            <el-select v-model="postForm.goodsType1" placeholder="请选择">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="9">
          <el-form-item label="统计时间">
            <el-col :span="10">
              <el-date-picker v-model="postForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="10">
              <el-date-picker v-model="postForm.date2" placeholder="选择日期" style="width: 100%;" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="success">查询</el-button>
          <el-button type="primary">重置</el-button>
          <el-button type="danger">导出</el-button>
        </el-col>
      </el-form>
    </el-row>
    <el-row class="elRow">
      <el-col :span="4" class="elRowFirst">
        整体统计
      </el-col>
      <el-col :span="16" offset="4">
        审单总数：5700   审核用户总数：5320    处理单量/日：225    通过率：76.77%   批款总额：¥45329322.34元
      </el-col>
    </el-row>

    <el-row>
      <el-table :data="countTable" style="width: 100%">
        <el-table-column prop="date" label="全选" />
        <el-table-column prop="date" label="姓名" />
        <el-table-column prop="date" label="权限" />
        <el-table-column prop="date" label="账号" />
        <el-table-column prop="date" label="审核组" />
        <el-table-column prop="date" label="初审数" />
        <el-table-column prop="date" label="终审数" />
        <el-table-column prop="date" label="审核用户数" />
        <el-table-column prop="date" label="拨号数/日" />
        <el-table-column prop="date" label="审核量/日" />
        <el-table-column prop="date" label="通过率" />
        <el-table-column prop="date" label="拨款总额" />
        <el-table-column prop="date" label="实际分期金额" />
        <el-table-column prop="date" label="流入率" />
        <el-table-column prop="date" label="当前逾期率" />
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      postForm: {},
      countTable: [{}]
    }
  }
}
</script>

<style lang="scss" scoped>
    .line {
        margin: 0 10px;
    }
    .elRow{
        padding: 20px 10px;
        background: #eee;
        font-size: 15px;
        color: #001;
        line-height: 20px;
        .elRowFirst{
            color: #000;
            text-align: left;
            font-weight: bold;
        }
    }
</style>
