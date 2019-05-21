<template>
    <div>
        <Titlecontent></Titlecontent>
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
                        <el-form ref="form" :model="postForm" label-width="100px" class="elForm">
                            <el-row>
                                <el-col :span="6">
                                    <el-form-item label="模版编号:">
                                    <el-input placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="6">
                                    <el-form-item label="模版名称:">
                                        <el-input placeholder="请输入"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="版次">
                                        <el-select v-model="postForm.region" placeholder="请选择">
                                            <el-option label="区域一" value="shanghai" />
                                            <el-option label="区域二" value="beijing" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="5">
                                    <el-form-item label="模版状态">
                                        <el-select v-model="postForm.region" placeholder="请选择">
                                            <el-option label="区域一" value="shanghai" />
                                            <el-option label="区域二" value="beijing" />
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="9">
                                    <el-form-item label="创建时间">
                                        <el-date-picker
                                        v-model="createdTime"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="10">
                                    <el-form-item label="更新时间">
                                        <el-date-picker
                                        v-model="resetTime"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-row>
                </el-collapse-item>
            </el-collapse>

            <el-container class="dailyList">
                <el-header>
                <el-row>
                    <el-col :span="4">
                    <div class="grid-content bg-purple-dark">模版列表</div>
                    </el-col>
                    <el-col :span="4" :offset="16">
                    <div class="grid-content bg-purple-dark">
                        <el-button type="primary" plain @click.native.prevent="setAssign">+新增合同模版</el-button>
                    </div>
                    </el-col>
                </el-row>
                </el-header>
                <el-main>
                    <el-table :data="listTable" height="auto" border style="width: 100%">
                        <el-table-column label="模版编号" prop="account" align="center"></el-table-column>
                        <el-table-column label="模版名称" prop="name" align="center"></el-table-column>
                        <el-table-column label="版次" prop="time" align="center"></el-table-column>
                        <el-table-column label="模版状态" prop="ip" align="center"></el-table-column>
                        <el-table-column label="创建时间" prop="history" align="center"></el-table-column>
                        <el-table-column label="最近更新时间" prop="ip" align="center"></el-table-column>
                        <el-table-column label="操作" prop="history" align="center"></el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import Titlecontent from '../../../components/Titlecontent/index'
export default {
  components: { Titlecontent },
  data () {
      return {
          activeNames: ['1'],
          postForm: {},
          listTable: [{}],
      }
  },
  methods : {
      queryGoods () { // 查询
      
      },
      resetQuery () { // 重置
      
      },

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