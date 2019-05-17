<template>
  <div>
    <el-dialog title="高级检索" :visible.sync="dialogShow">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="分期总数">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="借款方式">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="订单来源">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="借款金额">
          <el-col :span="8">
            <el-input v-model="form.date1" style="width: 100%;" />
          </el-col>
          <el-col class="line" :span="2">至</el-col>
          <el-col :span="8">
            <el-input v-model="form.date2" style="width: 100%;" />
          </el-col>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click=" dialogShow = false">查 询</el-button>
        <el-button @click=" dialogShow = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogShow: false,
      form: {

      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .line{
        text-align: center;
    }
</style>
