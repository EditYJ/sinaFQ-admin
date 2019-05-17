<template>
  <div>
    <Titlecontent />
    <div class="page">
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
                  <el-date-picker
                    v-model="postForm.time"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    :default-time="['12:00:00']"
                  />
                </el-form-item>
              </el-col>
            </el-form>
          </el-row>
        </el-collapse-item>
      </el-collapse>

      <el-container class="dailyList">
        <el-header>
          <el-row>
            <el-col :span="4">
              <div class="grid-content bg-purple-dark">员工列表</div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-table :data="dailyTable" height="auto" border style="width: 100%">
            <el-table-column label="操作账号" prop="account" align="center" />
            <el-table-column label="操作人姓名" prop="name" align="center" />
            <el-table-column label="操作时间" prop="time" align="center" />
            <el-table-column label="ip地址" prop="ip" align="center" />
            <el-table-column label="操作记录" prop="history" align="center" />
          </el-table>
        </el-main>
      </el-container>

    </div>

  </div>
</template>

<script>
import Titlecontent from '@/components/Titlecontent'
export default {
  components: { Titlecontent },
  data() {
    return {
      activeNames: ['1'],
      postForm: {
        name: '',
        time: ''
      },
      dailyTable: [{}]
    }
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
    .dailyList{
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
</style>
