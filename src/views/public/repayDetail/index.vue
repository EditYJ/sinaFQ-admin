<template>
    <div class="page">
        <el-container class="userList">
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">还款详情</div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-row class="tableHeader">
                    <el-col :span="8">基本信息</el-col>
                    <el-col :span="8">渠道信息</el-col>
                    <el-col :span="8">还款信息</el-col>
                </el-row>
                <el-row class="userInfoTable">
                    <order-table :tableName="'姓名'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'资金归属'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'剩余应还总额'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'注册手机'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'合同生效日期'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'剩余应还本金'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'分期金额'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'还款起始日期'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'剩余应还手续费'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'分期总数'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'合同终止日期'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'剩余应还账户管理费'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'年化手续费'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'累计逾期天数'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'入账状态'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'分期利率'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'最大逾期天数'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                    <order-table :tableName="'账单规则编号'" :tableData="userInfoTable.name" :defultWidth="8"></order-table>
                </el-row>

                <el-table ref="orderInfoTable" :data="orderTableData" height=auto border class="orderInfoTable">
                    <el-table-column label="期数" align="center"></el-table-column>
                    <el-table-column label="还款日" align="center"></el-table-column>
                    <el-table-column label="应收本金" align="center"></el-table-column>
                    <el-table-column label="应收手续费" align="center"></el-table-column>
                    <el-table-column label="应收账户管理费" align="center"></el-table-column>
                    <el-table-column label="应收合计" align="center"></el-table-column>
                    <el-table-column label="实收本金" align="center"></el-table-column>
                    <el-table-column label="实收手续费" align="center"></el-table-column>
                    <el-table-column label="实收账户管理费" align="center"></el-table-column>
                    <el-table-column label="实收合计" align="center"></el-table-column>
                    <el-table-column label="实际还款日" align="center"></el-table-column>
                    <el-table-column label="逾期天数" align="center"></el-table-column>
                    <el-table-column label="还款状态" align="center"></el-table-column>
                    <el-table-column label="还款方式" align="center"></el-table-column>
                    <el-table-column label="核销状态" align="center"></el-table-column>
                    <el-table-column label="状态" align="center">
                        <template scope="scope">
                            <el-button-group>
                                <el-button size="mini" @click="">销帐</el-button>
                                <el-button size="mini" @click="">减免</el-button>
                            </el-button-group>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <el-row class="button_close">
            <el-col>
                <el-button type="danger" @click="lastPage">关 闭</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import orderTable from './component/orderTable'
export default {
    components:{ orderTable },
    data() {
        return {
            userInfoTable:{
                name:'王*'
            },
            orderTableData:[]
        }
    },
    methods : {
        lastPage() {
            this.$router.go(-1)
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
    .tableHeader {
        .el-col {
            background: #eee;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-right:2px solid rgba(153, 153, 153, 0.14);
            height: 60px;
            line-height: 60px;
            margin-top: 5px;
        }
    }
    .userInfoTable {
        border-bottom: 2px solid rgba(153, 153, 153, 0.14);
        border-right: 2px solid rgba(153, 153, 153, 0.14);
    }
    .orderInfoTable {
        margin-top: 20px;
    }
    .button_close{
        text-align: center;
        margin-top: 20px;
    }
}
</style>
