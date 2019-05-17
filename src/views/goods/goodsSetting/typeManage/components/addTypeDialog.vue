<template>
  <div>

    <!-- 新增/编辑 类目 -->
    <el-dialog :visible.sync="addDialog" class="addDialogTitle">
      <template slot="title">
        <span class="text1">新增/编辑 类目</span>
        <span class="text2">*</span>
        <span class="text3">为必填字段</span>
      </template>
      <el-form ref="addDialogForm" label-position="right" :model="addDialogForm" :rules="addDialogForm.rules" label-width="140px">

        <el-form-item label="商品类目:" prop="goodsType">
          <el-input v-model="addDialog.goodsType" placeholder="不超过10个长度" />
        </el-form-item>

        <el-form-item label="映射关系:">
          <el-row>
            <el-col :span="11">
              <el-input placeholder="请输入映射ID" />
            </el-col>
            <el-col :span="9" :offset="1">
              <el-select v-model="addDialogForm.mapSource" placeholder="映射源">
                <el-option
                  v-for="item in mapOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col :span="1" :offset="1">
              <i class="el-icon-circle-plus" @click="addMapSource" />
            </el-col>
          </el-row>
        </el-form-item>

        <!--  addItem  -->
        <el-form-item v-for="(item,key) in newMapSource" label="映射关系:">
          <el-row>
            <el-col :span="11">
              <el-input placeholder="请输入映射ID" />
            </el-col>
            <el-col :span="9" :offset="1">
              <el-select v-model="addDialogForm.mapSource" placeholder="映射源">
                <el-option
                  v-for="item in mapOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col :span="1" :offset="1">
              <i class="el-icon-remove" @click="removeMapSource(key)" />
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="上级类目">
          <el-select v-model="addDialogForm.superType" placeholder="请选择">
            <el-option
              v-for="item in mapOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <p class="selectTips">不选默认新建为一级类目</p>
        </el-form-item>

        <el-form-item label="类目描述">
          <el-input v-model="addDialogForm.textarea" type="textarea" maxlength="100" show-word-limit placeholder="请输入类目描述（选填）" />
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
      newMapSource: [],
      addDialog: false,
      mapOptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }
      ],
      addDialogForm: {
        rules: {
          goodsType: [
            { required: true, message: '请输入商品类目', trigger: 'blur' },
            { min: 1, max: 10, message: '长度不得超过10个字符', trigger: 'blur' }
          ]
        },
        goodsType: '',
        textarea: ''
      }
    }
  },
  methods: {
    addMapSource() { //  新增映射源
      this.newMapSource.push({})
    },
    removeMapSource(key) { //  移除映射源
      this.newMapSource = []
    },
    importDialog() {
      this.addDialog = false
    },
    cancelDialog() {
      this.addDialog = false
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
        .el-icon-circle-plus,.el-icon-remove{
            font-size: 25px;
            position: relative;
            top: 5px;
        }
        .selectTips{
            color: #999;
            margin: 0;
            line-height: 30px;
        }
    }
</style>

