<template>
  <div>
    <Titlecontent />
    <div class="page">
      <el-container class="goodsList">
        <el-header>
          <el-row>
            <el-col :span="2">
              <div class="grid-content bg-purple-dark">类目列表</div>
            </el-col>
            <el-col :span="2" offset="20">
              <div class="grid-content bg-purple-dark">
                <el-button type="primary" plain @click="addTypeList">+新增</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main>
          <template>
            <el-table :data="typeListTable" height="auto" border style="width: 100%">
              <el-table-column prop="typeCode" label="类目编号" width="100" align="center" />
              <el-table-column prop="typeName" label="类目名称" width="100" align="center" />
              <el-table-column prop="typeLevel" label="类目级别" width="100" align="center" />
              <el-table-column prop="typeRel" label="映射关系" align="center" />
              <el-table-column prop="goodsNum" label="商品数量" width="100" align="center" />
              <el-table-column prop="manage" label="管理" align="center">
                <template scope="scope">
                  <span class="textFont" @click="addLowLevel('1')">新增下级</span>
                  <span class="textFont" @click="seeLowLevel('2')">查看下级</span>
                  <span class="textFont" @click="stagesLimit('3')">分期数限制</span>
                </template>
              </el-table-column>
              <el-table-column prop="setting" label="操作" align="center">
                <template scope="scope">
                  <span class="textFont" @click="editTypeList('4')">编辑</span>
                  <span class="textFont textFont2" @click="delType('5')">删除</span>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-main>
      </el-container>
    </div>

    <!-- 新增/编辑 类目 对话框 -->
    <addTypeDialog ref="addTypeDialog" />

    <!-- 分期数限制 -->
    <stagesLimitDialog ref="stagesLimitDialog" />

  </div>
</template>

<script>
import Titlecontent from '../../../../components/Titlecontent/index'
import addTypeDialog from './components/addTypeDialog.vue'
import stagesLimitDialog from './components/stagesLimitDialog.vue'

export default {
  components: { Titlecontent, addTypeDialog, stagesLimitDialog },
  data() {
    return {
      typeListTable: [
        {
          typeCode: '123',
          typeName: '母婴',
          typeLevel: '一级',
          typeRel: '8797（京东），7767（苏宁）',
          goodsNum: '123'
        }
      ]
    }
  },
  methods: {
    addTypeList(e) { //  新增类目
      this.$refs.addTypeDialog.addDialog = true
    },
    editTypeList(e) { //  编辑类目
      this.$refs.addTypeDialog.addDialog = true
    },
    addLowLevel(e) { //  新增下级
      this.$refs.addTypeDialog.addDialog = true
    },
    seeLowLevel(e) { //  查看下级

    },
    stagesLimit(e) { //  分期数限制
      this.$refs.stagesLimitDialog.showDialog = true
    },
    editType(e) { //  编辑
      alert(e)
    },
    delType(e) { //  删除
      alert(e)
    }
  }
}
</script>

<style lang="scss" scoped>
    .goodsList{
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
        .textFont{
            color:green;
            padding:0px 5px;
            cursor: pointer;
        }
        .textFont2{
            color: red;
        }
    }
</style>
