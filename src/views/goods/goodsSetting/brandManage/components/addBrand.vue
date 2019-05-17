<template>
  <div>
    <el-dialog :visible.sync="addDialog" class="addDialogTitle">
      <template slot="title">
        <span class="text1">新增/编辑 品牌</span>
        <span class="text2">*</span>
        <span class="text3">为必填字段</span>
      </template>
      <el-form ref="addDialogForm" label-position="right" :model="addDialogForm" :rules="addDialogForm.rules" label-width="140px">

        <el-form-item label="品牌编号:" prop="brandCode">
          <el-input v-model="addDialog.goodsType" placeholder="不超过10个长度" />
        </el-form-item>

        <el-form-item label="品牌名称:" prop="brandName">
          <el-input v-model="addDialog.goodsType" placeholder="不超过30个长度" />
        </el-form-item>

        <el-form-item label="平台logo（大）:" prop="brandLogo">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">+ 点击上传图片</el-button>
            <div slot="tip" class="el-upload__tip">仅支持上传jpg/png格式图片，单个图片不超过500kb</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="品牌简介" prop="brandDesc">
          <el-input type="textarea" placeholder="请输入品牌简介" />
        </el-form-item>

      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="importDialog">提 交</el-button>
        <el-button @click="cancelDialog">取 消</el-button>
      </span>

    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      addDialog: false,
      addDialogForm: {
        rules: {

        }

      }

    }
  },
  methods: {
    importDialog() { // 提交
      this.addDialog = false
    },
    cancelDialog() { // 取消
      this.addDialog = false
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }

}
</script>

<style lang="scss" scoped>
    .addDialogTitle{
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
</style>
