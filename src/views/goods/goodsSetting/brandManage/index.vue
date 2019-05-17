<template>
  <div>
    <Titlecontent />
    <div class="page">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <el-col :span="4">筛选查询</el-col>
            <el-col :span="4" :offset="16">
              <div class="grid-content bg-purple">
                <el-button type="primary" size="medium" plain @click.stop="queryGoods">查询</el-button>
                <el-button type="primary" size="medium" plain @click.stop="resetQuery">重置</el-button>
              </div>
            </el-col>
          </template>
          <el-row>
            <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
              <el-col :span="5">
                <el-form-item label="品牌名称:">
                  <el-input v-model="postForm.name" size="small" placeholder="输入品牌名称" />
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
              <div class="grid-content bg-purple-dark">品牌列表</div>
            </el-col>
            <el-col :span="5" :offset="15">
              <div class="grid-content bg-purple-dark">
                <el-button size="medium" type="primary" plain @click="addBrand">+ 新 增</el-button>
                <el-button size="medium" type="primary" plain @click="batchIpt">批量删除</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <template>
            <el-table :data="brandListTable" height="auto" border style="width: 100%">

              <el-table-column prop="attrCode" label="全选" width="120" align="center" />

              <el-table-column prop="attrType" label="品牌编号" align="center" />

              <el-table-column prop="attrCount" label="品牌名称" align="center" />

              <el-table-column prop="paramsCount" label="品牌logo" align="center" />

              <el-table-column label="品牌简介" width="150" prop="sort" />

              <el-table-column label="操作" width="150" align="center">
                <template scope="scope">
                  <span class="textFont" @click="editAttrList('4')">编辑</span>
                  <span class="textFont textFont2" @click="delList('5')">删除</span>
                </template>
              </el-table-column>

            </el-table>
          </template>
        </el-main>
      </el-container>
    </div>
    <addBrand ref="addBrand" />
  </div>
</template>

<script>
import Titlecontent from '../../../../components/Titlecontent/index'
import addBrand from './components/addBrand'
export default {
  components: { Titlecontent, addBrand },
  data() {
    return {
      activeNames: ['1'],
      postForm: {},
      brandListTable: [{}]
    }
  },
  methods: {
    queryGoods() { //  查询

    },
    resetQuery() { //  重置

    },
    addBrand() { //  新增品牌
      this.$refs.addBrand.addDialog = true
    },
    editAttrList() { // 编辑
      this.$refs.addBrand.addDialog = true
    },
    delList() { //  删除列表中的某一项
      this.$confirm('确认删除该品牌信息吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'danger'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
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
        .textFont{
            color:green;
            padding:0px 8px;
            cursor: pointer;
        }
        .textFont2{
            color: red;
        }
    }
</style>
