<template>
  <div>
    <Titlecontent />
    <div class="page">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template slot="title">
            <el-col :span="4">筛选查询</el-col>
            <el-col :span="4" :offset="10"><div class="grid-content bg-purple" /></el-col>
            <el-button size="small" type="primary" plain @click.stop="queryGoods">查询</el-button>
            <el-button size="small" type="primary" plain @click.stop="resetQuery">重置</el-button>
            <el-button size="small" type="primary" plain @click.stop="topQuery">高级检索</el-button>
            </el-col>
          </template>
          <el-row>
            <el-form ref="form" :model="searchForm" label-width="80px" class="elForm">
              <el-col :span="6">
                <el-form-item label="输入搜索:">
                  <el-input v-model="searchForm.userMsg" size="small" placeholder="输入用户ID/姓名/注册手机号" />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="实名认证:">
                  <el-select v-model="searchForm.auth" size="mini" placeholder="请选择">
                    <el-option label="已认证" value="authed" />
                    <el-option label="未认证" value="notAuth" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="逾期状态:">
                  <el-select v-model="searchForm.overTime" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overTime" />
                    <el-option label="未预期" value="notOverTime" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="额度状态:">
                  <el-select v-model="searchForm.quota" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overTime" />
                    <el-option label="未预期" value="notOverTime" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="账号状态:">
                  <el-select v-model="searchForm.quota" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overTime" />
                    <el-option label="未预期" value="notOverTime" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label="注册源:">
                  <el-select v-model="searchForm.quota" size="mini" placeholder="请选择">
                    <el-option label="已逾期" value="overTime" />
                    <el-option label="未预期" value="notOverTime" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="18">
                <el-form-item label="注册时间:">
                  <el-col :span="6">
                    <el-date-picker v-model="searchForm.registerTime.startTime" size="mini" type="date" placeholder="选择日期" style="width: 100%;" />
                  </el-col>
                  <el-col :span=".5">&nbsp;-&nbsp;</el-col>
                  <el-col :span="6">
                    <el-date-picker v-model="searchForm.registerTime.endTime" size="mini" placeholder="选择时间" style="width: 100%;" />
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
            <el-table :data="tableData" height="auto" border style="width: 100%">
              <el-table-column prop="allCheck" label="全选" width="60" align="center" />
              <el-table-column prop="userId" label="用户ID" width="100" align="center" />
              <el-table-column prop="userName" label="姓名" width="120" align="center" />
              <el-table-column prop="userPhone" label="注册手机号" width="140" align="center" />
              <el-table-column prop="registTime" label="注册时间" width="140" align="center" />
              <el-table-column prop="Authentication" label="实名认证" width="140" align="center">
                <template slot-scope="scope">
                  <p v-if="scope.row.Authentication">已认证</p>
                  <p v-else>未认证</p>
                </template>
              </el-table-column>
              <el-table-column prop="quota" label="可用额度" width="140" align="center" />
              <el-table-column prop="overTime" label="逾期状态" width="140" align="center" />
              <el-table-column prop="quotaState" label="额度状态" width="140" align="center" />
              <el-table-column prop="accountState" label="账号状态" width="140" align="center" />
              <el-table-column prop="accountFrom" label="注册源" width="140" align="center" />
              <el-table-column label="操作" width="260" align="center" fixed="right">
                <template slot-scope="scope">
                  <el-button-group>
                    　　　　　　<el-button size="mini" type="primary" @click="seeInfo(scope.row)">详情</el-button>
                    　　　　　　<el-button size="mini" type="danger">禁止登录</el-button>
                    <!-- 　　　　　　<el-button size="mini" type="success">允许登录</el-button> -->
                    　　　　　　<el-button size="mini" type="info">解冻额度</el-button>
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
export default {
  components: { Titlecontent },
  data() {
    return {
      activeNames: ['1'],
      searchForm: {
        userMsg: '',
        auth: '',
        overTime: '',
        quota: '',
        registerTime: {
          startTime: '',
          endTime: ''
        }
      },
      tableData: [{
        allCheck: '',
        userId: 'abc123',
        userName: '王五',
        userPhone: '18712509282',
        registTime: '12345667',
        Authentication: true,
        quota: '1000',
        overTime: '/',
        quotaState: '正常',
        accountState: '正常',
        accountFrom: '手机',
        operation: true
      }, {
        allCheck: '',
        userId: 'abc123',
        userName: '王五',
        userPhone: '18712509282',
        registTime: '12345667',
        Authentication: true,
        quota: '1000',
        overTime: '/',
        quotaState: '正常',
        accountState: '正常',
        accountFrom: '手机',
        operation: true
      }]
    }
  },
  methods: {
    // 查看用户详情
    seeInfo() {
      	this.$router.push({ name: 'userDetail', query: { id: '12' }})
    },
    created() { //

    }
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
