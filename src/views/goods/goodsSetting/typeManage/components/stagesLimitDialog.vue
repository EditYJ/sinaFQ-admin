<template>
  <div>
    <el-dialog :visible.sync="showDialog" class="dialogTitle">
      <template slot="title">
        <span class="text1">分期数限制</span>
        <span class="text2">商品数:{{ goodsCount }}</span>
      </template>
      <el-form label-position="right" label-width="140px">
        <el-form-item label="分期数限制:">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A" />
            <el-checkbox label="复选框 B" />
            <el-checkbox label="复选框 C" />
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="subitStagesLimit">确 定</el-button>
        <el-button @click="cancelStagesLimit">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showDialog: false,
      goodsCount: '652',
      checkList: []
    }
  },
  methods: {
    subitStagesLimit() {
      this.showDialog = false
    },
    cancelStagesLimit() {
      this.showDialog = false
    }

  }
}
</script>

<style lang="scss" scoped>
    .dialogTitle{
        .text1{
            font-size: 16px;
            font-weight: bold;
        }
        .text2{
            font-size: 14px;
            margin-left: 15px;
        }
    }
</style>
