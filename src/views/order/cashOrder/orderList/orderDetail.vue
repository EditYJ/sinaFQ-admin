<template>
    <div class="page">
        <el-container class="userList">
                <el-header>
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content bg-purple-dark">订单详情</div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <template>
                        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="交易信息" name="baseMsg" :key="'baseMsg'">
                                <buy-information></buy-information>
                            </el-tab-pane>
                            <el-tab-pane label="审单报告" name="quotaMsg" :key="'quotaMsg'">
                                <check-report></check-report>
                            </el-tab-pane>
                            <el-tab-pane label="流程报告" name="couponMsg" :key="'couponMsg'">
                                <flow-report></flow-report>
                            </el-tab-pane>
                        </el-tabs>
                    </template>
                    <el-row class="btmBtn">
                        <el-col :span="24" >
                            <el-button @click="backPage" type="danger">关闭</el-button>
                        </el-col>
                    </el-row>
                </el-main>
               
        </el-container>
    </div>
</template>

<script>
import buyInformation from './components/buyInformation'
import checkReport from './components/checkReport'
import flowReport from './components/flowReport'

export default {
    components:{ buyInformation,checkReport,flowReport },
    data() {
      return {
        activeName: 'baseMsg',
      };
    },
    methods:{
        handleClick:(val)=>{
            let tabName = val.name
            console.log(tabName)
        },
        backPage:()=>{
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .userList{
        .el-header{
            background: rgba(0,0,0,0.1);
            height:60px;
            line-height: 60px;
            border-top-left-radius:10px;
            border-top-right-radius:10px;
        }
        .el-main{
            border:1px solid #eee;
            .btmBtn{
                .el-col{
                    text-align: center;
                }
                .el-button{
                    margin:30px 0px;
                    width: 100px;
                }
            }
        }
    }

</style>
