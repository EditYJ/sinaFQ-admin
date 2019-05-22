<template>
  <div>
    <Titlecontent />
    <div class="page">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <el-col :span="4">筛选查询</el-col>
            <el-col :span="4" :offset="10"><div class="grid-content bg-purple" /></el-col>
            <el-button type="primary" plain @click.stop="queryGoods">查询</el-button>
            <el-button type="primary" plain @click.stop="resetQuery">重置</el-button>
            <el-button type="primary" plain @click.stop="topQuery">高级检索</el-button>
            </el-col>
          </template>
          <el-row>
            <el-form ref="form" :model="searchForm" label-width="100px" class="elForm">
              <el-col :span="6">
                <el-form-item label="用户ID:">
                  <el-input v-model="searchForm.userId" size="mini" placeholder="输入用户ID" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="姓名:">
                  <el-input v-model="searchForm.name" size="mini" placeholder="姓名" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="注册手机号:">
                  <el-input v-model="searchForm.mobile" size="mini" placeholder="注册手机号" />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="实名认证:">
                  <el-select v-model="searchForm.isRealName" size="mini" placeholder="请选择">
                    <el-option label="已认证" value="real" />
                    <el-option label="未认证" value="noReal" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="逾期状态:">
                  <el-select v-model="searchForm.isOverdue" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overdue" />
                    <el-option label="未预期" value="noOverdue" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="额度状态:">
                  <el-select v-model="searchForm.limitStatus" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overTime" />
                    <el-option label="未预期" value="notOverTime" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="账号状态:">
                  <el-select v-model="searchForm.userStatus" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overTime" />
                    <el-option label="未预期" value="notOverTime" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="注册源:">
                  <el-select v-model="searchForm.source" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overTime" />
                    <el-option label="未预期" value="notOverTime" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="注册时间:">
                  <el-col :span="6">
                    <el-date-picker v-model="searchForm.joinDateStart" size="mini" type="date" placeholder="选择日期" style="width: 100%;" />
                  </el-col>
                  <el-col :span=".5">&nbsp;-&nbsp;</el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="searchForm.joinDateEnd" size="mini" placeholder="选择时间" style="width: 100%;" />
                  </el-col>
                </el-form-item>
              </el-col>
            </el-form>

          </el-row>
        </el-collapse-item>
      </el-collapse>

      <el-container class="userList">
        <el-header>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple-dark">用户列表</div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <template>
            <el-table :data="userTableData" border style="width: 100%"  v-loading="dataLoading">
              <el-table-column prop="allCheck" label="全选" width="60" align="center" />
              <el-table-column prop="userId" label="用户ID" width="100" align="center" />
              <el-table-column prop="name" label="姓名" width="120" align="center">
                <template slot-scope="scope">
                  <p v-if="!scope.row.name">/</p>
                  <p v-else>{{scope.row.name}}</p>
                </template>
              </el-table-column>
              <el-table-column prop="mobile" label="注册手机号" width="140" align="center" />
              <el-table-column prop="joinDate" label="注册时间" width="140" align="center" />
              <el-table-column prop="isRealName" label="实名认证" width="140" align="center">
                <template slot-scope="scope">
                  <p v-if="scope.row.isRealName==1">已实名</p>
                  <p v-else>未实名</p>
                </template>
              </el-table-column>
              <el-table-column prop="limit" label="可用额度" width="140" align="center">
                <template slot-scope="scope">
                  <p v-if="!scope.row.limit">/</p>
                  <p v-else>{{scope.row.limit}}</p>
                </template>
              </el-table-column>
              <el-table-column prop="isOverdue" label="逾期状态" width="140" align="center">
                <template slot-scope="scope">
                  <p v-if="scope.row.isOverdue==1">逾期</p>
                  <p v-else>未逾期</p>
                </template>
              </el-table-column>
              <el-table-column prop="limitStatus" label="额度状态" width="140" align="center">
                <template slot-scope="scope">
                  <p v-if="scope.row.limitStatus==0">逾期冻结</p>
                  <p v-else-if="scope.row.limitStatus==1">整除</p>
                  <p v-else>人工冻结</p>
                </template>
              </el-table-column>
              <el-table-column prop="userStatus" label="账号状态" width="140" align="center">
                <template slot-scope="scope">
                  <p v-if="scope.row.userStatus==0">正常</p>
                  <p v-else>冻结</p>
                </template>
              </el-table-column>
              <el-table-column prop="source" label="注册源" width="140" align="center">
                <template slot-scope="scope">
                  <p v-if="scope.row.source==0">正常</p>
                  <p v-else>冻结</p>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="260" align="center" fixed="right">
                <template slot-scope="scope">
                  <el-button-group>
                    　　　　　　<el-button size="mini" type="primary" @click.native.prevent="userDetail(scope.row.userId)">详情</el-button>
                    　　　　　　<el-button size="mini" type="danger" @click.native.prevent="noLogin(scope.row.userId)">禁止登录</el-button>
                    <!-- 　　　　　　<el-button size="mini" type="success" @click.native.prevent="allowLogin(scope.row.userId)">允许登录</el-button> -->
                    　　　　　　<el-button size="mini" type="info" @click.native.prevent="removeQuota(scope.row.userId)">解冻额度</el-button>
                  </el-button-group>
                　　　　</template>
              </el-table-column>
            </el-table>
          </template>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

import Titlecontent from '../../components/Titlecontent/index'
import { getUserList } from '@/api/userManage'
import { util } from '@/utils/util'
export default {
  components: { Titlecontent },
  data() {
    return {
      activeNames: ['1'],
      searchForm: {
        userId:'',
        name:'',
        mobile:'',
        isRealName:'',
        isOverdue:'',
        limitStatus:'',
        userStatus:'',
        source:'',
        joinDateStart:'',
        joinDateEnd:'',
      },
      queryData:{
        pageSize : 10,
        pageNum : 0,
      },
      dataLoading:true,
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    queryGoods (val) { // 查询
      this.dataLoading = true
      this.getUserList()
    },
    resetQuery (val) { // 重置
      for(let i in this.searchForm) {
        this.searchForm[i] = ''
      }
    },
    topQuery (val) { // 高级检索
    
    },
    getUserList (val) { // 获取用户列表
      let queryData = this.queryData
      if(util.dealObjectValue(this.searchForm)) {
        queryData = {...queryData, ...util.dealObjectValue(this.searchForm)}
      }
      getUserList(queryData).then(res=>{
        this.userTableData = res.body
        this.dataLoading = false
      })
    },
    userDetail (val) { // 查看用户详情
      this.$router.push({ name: 'userDetail', query: { id: val }})
    },
    noLogin (val) { // 禁止登录

    },
    allowLogin (val) { // 允许登录
    
    },
    removeQuota (val) { // 解除额度

    },
  }
}
</script>

<style lang="scss" scoped>
    .page{
      .userList{
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
      }
    }
</style>
