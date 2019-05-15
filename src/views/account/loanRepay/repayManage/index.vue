<template>
    <div class="page">
        <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
                <template slot="title">
                    <el-col :span="4">筛选查询</el-col> 
                    <el-col :span="6" :offset="17">
                        <div class="grid-content bg-purple">
                            <el-button type="primary" @click.stop="queryGoods" plain>查询</el-button>
                            <el-button type="primary" @click.stop="resetQuery" plain>重置</el-button>
                        </div>
                    </el-col>
                </template>
                <el-row> 
                    <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
                        <el-col :span="5">
                            <el-form-item label="编号查询:">
                                <el-input size="small" v-model="postForm.name" placeholder="账单编号/订单编号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" >
                            <el-form-item label="收款账户:">
                                <el-select size="small" v-model="postForm.goodsType1" placeholder="请选择">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" >
                            <el-form-item label="备注:">
                                <el-select size="small" v-model="postForm.timeState" placeholder="请选择">
                                    <el-option label="一期" value="oneState"></el-option>
                                    <el-option label="二期" value="twoState"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="跟进时间">
                                <el-col :span="11">
                                <el-date-picker size="small" type="date" placeholder="选择日期" v-model="postForm.date1" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col class="line" :span="1">-</el-col>
                                <el-col :span="11">
                                <el-date-picker size="small" placeholder="选择时间" v-model="postForm.date2" style="width: 100%;"></el-date-picker>
                                </el-col>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-row>
            </el-collapse-item>
        </el-collapse>

        <el-container class="groupList">
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">还款列表</div>
                    </el-col>
                    <el-col :span="5" offset="15">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" @click.native.prevent="orderRecord" plain>挂帐记录</el-button>
                            <el-button type="primary" @click.native.prevent="checkRepay" plain>批量核销</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-table :data="orderTable" height=auto border style="width: 100%">
                    <el-table-column prop="allCheck" label="全选" width="60" align='center'>
                    </el-table-column>
                    <el-table-column prop="groupName" label="订单编号" align='center'>
                    </el-table-column>
                    <el-table-column prop="businessType" label="账单编号" align='center'>
                    </el-table-column>
                    <el-table-column prop="groupNum" label="还款方式" align='center'>
                    </el-table-column>
                    <el-table-column prop="leader" label="还款金额" align='center'>
                    </el-table-column>
                    <el-table-column prop="tips" label="收款账户" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="流水号" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="备注" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="销账申请人" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="跟进时间" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="核销状态" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="核销人" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="核销时间" align='center'>
                    </el-table-column>
                    <el-table-column prop="setting" label="操作" align='center' fixed="right" width="200">
                        <template scope="scope">
                            <el-button size="mini" type="primary" @click.native.prevent="submitOrder">核销</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>

        <!-- cancelAccount -->
        <el-dialog title="销账" :visible.sync="cancelAccountDialog">
            <el-row>
                <el-col>第3/6期</el-col>
            </el-row>
            <el-table :data="orderTable" height=auto border style="width: 100%">
                <el-table-column prop="needPay" label="应收本金" align='center'>
                </el-table-column>
                <el-table-column prop="needCharge" label="应收手续费" align='center'>
                </el-table-column>
                <el-table-column prop="managePay" label="应收账户管理费" align='center'>
                </el-table-column>
                <el-table-column prop="groupName" label="应收合计" align='center'>
                </el-table-column>
                <el-table-column prop="groupName" label="合同还款日" align='center'>
                </el-table-column>
            </el-table>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeNames:['1'],
            postForm:{},
            orderTable:[{}],
            submitTotal:'123',
            cancelAccountDialog:false,
        }
    },
    methods:{
        orderRecord() { // 挂帐记录
        
        },
        checkRepay() { // 批量核销

        },
        submitOrder() { // 核销
            this.$confirm(`合计总金额${this.submitTotal}元，是否确认核销?`, '提交确认', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '核销成功!'
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                })      
            });
        },

    }
}
</script>

<style lang="scss" scoped>
    .line{
        margin: 0px 5px;
        text-align: center;
    }
    .groupList{
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
    .cancelReasonSpan {
        margin-top: 20px;
    }
</style>
