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
                                  <el-form-item label="合同编号:">
                                  <el-input placeholder="请输入"></el-input>
                                  </el-form-item>
                              </el-col>
                              <el-col :span="6">
                                  <el-form-item label="合同名称:">
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
                              <el-col :span="6">
                                  <el-form-item label="合同乙方:">
                                      <el-input placeholder="请输入"></el-input>
                                  </el-form-item>
                              </el-col>
                              <el-col :span="5">
                                  <el-form-item label="签订状态">
                                      <el-select v-model="postForm.region" placeholder="请选择">
                                          <el-option label="区域一" value="shanghai" />
                                          <el-option label="区域二" value="beijing" />
                                      </el-select>
                                  </el-form-item>
                              </el-col>
                              <el-col :span="10">
                                  <el-form-item label="签订时间">
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
                <div class="grid-content bg-purple-dark">合同列表</div>
                </el-col>
                <el-col :span="3" :offset="17">
                <div class="grid-content bg-purple-dark">
                    <el-button type="primary" plain @click.native.prevent="batchDownload">批量下载</el-button>
                </div>
                </el-col>
            </el-row>
            </el-header>
            <el-main>
                <el-table :data="listTable" height="auto" border style="width: 100%">
                    <el-table-column label="全选" prop="account" align="center"></el-table-column>
                    <el-table-column label="合同编号" prop="name" align="center"></el-table-column>
                    <el-table-column label="合同名称" prop="time" align="center"></el-table-column>
                    <el-table-column label="版次" prop="ip" align="center"></el-table-column>
                    <el-table-column label="甲方" prop="history" align="center"></el-table-column>
                    <el-table-column label="乙方" prop="ip" align="center"></el-table-column>
                    <el-table-column label="签订状态" prop="history" align="center"></el-table-column>
                    <el-table-column label="签订时间" prop="history" align="center"></el-table-column>
                    <el-table-column label="操作" prop="history" align="center" width="200">
                        <template scope="scope">
                            <el-button-group>
                                <el-button size="mini" type="primary" @click="previewList">预览</el-button>
                                <el-button size="mini" type="success" @click="downLoadList">下载</el-button>
                                <!-- <el-button size="mini" type="danger" @click="failReason">失败原因</el-button>
                                <el-button size="mini" type="warning" @click="writeAgain">重签</el-button> -->
                            </el-button-group>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
          </el-container>

          <!-- 合同预览Dialog -->
          <el-dialog :visible.sync="agreeDialog" title="合同预览">

          </el-dialog>
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
      postForm:{},
      agreeDialog:false,
      listTable:[{}],

    }
  },
  methods : {
    queryGoods () { // 查询
    
    },
    resetQuery () { // 重置
    
    },
    batchDownload () { // 批量下载

    },
    previewList () { // 预览
      this.agreeDialog = true
    },
    downLoadList () { // 下载
    
    },
    failReason () { // 失败原因
    
    },
    writeAgain () { // 重签

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