<template>
  <div class="page">
    <Titlecontent />
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <el-col :span="4">筛选查询</el-col>
          <el-col :span="4" :offset="12"><div class="grid-content bg-purple" /></el-col>
          <el-button type="primary" plain @click.stop="queryGoods">查询</el-button>
          <el-button type="primary" plain @click.stop="resetQuery">重置</el-button>
          </el-col>
        </template>
        <el-row>
          <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
            <el-col :span="5">
              <el-form-item label="账号/姓名:">
                <el-input v-model="postForm.name" size="small" placeholder="请输入账号/姓名" />
              </el-form-item>
            </el-col>
            <el-col :span="8" offset="1">
              <el-form-item label="在职状态:">
                <el-select v-model="postForm.status" size="mini" placeholder="请选择">
                  <el-option label="在职" value="open" />
                  <el-option label="离职" value="close" />
                </el-select>
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
            <div class="grid-content bg-purple-dark">员工列表</div>
          </el-col>
          <el-col :span="4" offset="16">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" plain @click="addEmployee">+新增</el-button>
              <el-button type="danger" plain>批量删除</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-table :data="empListTable" height="auto" border style="width: 100%">
          <el-table-column width="60" label="全选" align="center" />
          <el-table-column prop="account" width="120" label="账号" align="center" />
          <el-table-column prop="name" width="100" label="姓名" align="center" />
          <el-table-column prop="tel" label="手机号" align="center" />
          <el-table-column prop="wechat" label="微信号" align="center" />
          <el-table-column prop="email" label="邮箱" align="center" />
          <el-table-column prop="roleDesc" label="角色描述" align="center" />
          <el-table-column prop="role" label="角色" align="center" />
          <el-table-column width="60" label="在职状态" align="center">
            <template scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#999"
              />
            </template>
          </el-table-column>
          <el-table-column label="操作" width="260" align="center">
            <template scope="scope">
              <el-button-group>
                <el-button size="mini" type="primary" @click="addEmployee">编辑</el-button>
                <el-button size="mini" type="warning">重置密码</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </el-button-group>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <!-- 新增/修改员工对话框 -->
    <add-employee-form ref="addemployeeform" />
  </div>
</template>

<script>
import Titlecontent from '@/components/Titlecontent'
import addEmployeeForm from './components/addEmployeeForm'
export default {
  components: { Titlecontent, addEmployeeForm },
  data() {
    return {
      activeNames: ['1'],
      postForm: {
        name: '',
        status: ''
      },
      empListTable: [{
        allCheck: true,
        account: '123',
        name: '哈123',
        tel: '15006168680',
        wechat: '1234123',
        email: '12345678910@database.com',
        roleDesc: '这是一个角色描述',
        role: '超级管理员',
        status: true,
        done: ''
      }]
    }
  },
  methods: {
    addEmployee() {
      this.$refs.addemployeeform.editDiglog = true
    }
  }
}
</script>

<style lang="scss" scoped>
    .page{
        .el-collapse-item__content{
            padding: 20px 10px;
        }
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
             }
        }
    }
</style>
