<template>
  <div>
    <Titlecontent />
    <div class="page">
      <el-container v-if="$route.query.isNative!=1" class="goodsList">
        <el-header>
          <el-row>
            <el-col :span="3">
              <div class="grid-content bg-purple-dark">属性类型列表</div>
            </el-col>
            <el-col :span="2" offset="19">
              <div class="grid-content bg-purple-dark">
                <el-button type="primary" plain @click="addTypeList">+新增</el-button>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-table :data="attrListTable" height="auto" border style="width: 100%">
            <el-table-column prop="attrCode" label="编号" width="150" align="center" />

            <el-table-column prop="attrType" label="属性类型" align="center" />

            <el-table-column prop="attrCount" label="属性数量" width="150" align="center" />

            <el-table-column prop="paramsCount" label="参数数量" width="150" align="center" />

            <el-table-column label="管理" align="center">
              <template scope="scope">
                <span class="textFont" @click="attrList('4')">属性列表</span>
                <span class="textFont" @click="paramsList('5')">参数列表</span>
              </template>
            </el-table-column>

            <el-table-column label="操作" align="center">
              <template scope="scope">
                <span class="textFont" @click="editAttrList('4')">编辑</span>
                <span class="textFont textFont2" @click="delAttrList('5')">删除</span>
              </template>
            </el-table-column>

          </el-table>
        </el-main>
      </el-container>
      <router-view />
    </div>
  </div>
</template>

<script>
import Titlecontent from '../../../../components/Titlecontent/index'
export default {
  components: { Titlecontent },
  data() {
    return {
      attrListTable: [
        {
          attrCode: '123',
          attrType: '123',
          attrCount: '123',
          paramsCount: '1234'
        }
      ]
    }
  },
  methods: {
    attrList() { //  属性列表
      this.$router.push({ name: 'attrManage', query: { isNative: 1 }})
    },
    paramsList() { //  参数列表
      this.$router.push({ name: 'argsManage', query: { isNative: 1 }})
    },
    editAttrList() { //  编辑

    },
    delAttrList() { //  删除

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
                padding:0px 8px;
                cursor: pointer;
            }
            .textFont2{
                color: red;
            }
    }
</style>
