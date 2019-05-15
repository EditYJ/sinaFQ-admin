<template>
    <div class="page">
        <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
                <template slot="title">
                    <el-col :span="4">筛选查询</el-col>
                    <el-col :span="4" :offset="10"><div class="grid-content bg-purple"></div></el-col>
                        <el-button size="small" type="primary" @click.stop="queryGoods" plain>查询</el-button>
                        <el-button size="small" type="primary" @click.stop="resetQuery" plain>重置</el-button>
                        <el-button size="small" type="primary" @click.stop="topQuery" plain>高级检索</el-button>
                    </el-col>
                </template>
                <el-row>
                    <el-form ref="form" :model="searchForm" label-width="80px" class="elForm">
                        <el-col :span="6">
                            <el-form-item label="订单编号:">
                                <el-input size="small" v-model="searchForm.userMsg" placeholder="订单编号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" :offset='1'>
                            <el-form-item label="借款人:">
                                <el-input size="small" v-model="searchForm.userMsg" placeholder="注册手机号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" :offset="1">
                            <el-form-item label="订单状态:">
                                <el-select size="mini" v-model="searchForm.overTime" placeholder="请选择">
                                    <el-option label="已逾期" value="overTime"></el-option>
                                    <el-option label="未预期" value="notOverTime"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11">
                            <el-form-item label="下单时间:">
                                <el-col :span="12">
                                <el-date-picker size="small" type="date" placeholder="选择日期" v-model="searchForm.registerTime.startTime" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col :span="1">&nbsp;至&nbsp;</el-col>
                                <el-col :span="11">
                                <el-date-picker size="small" placeholder="选择时间" v-model="searchForm.registerTime.endTime" style="width: 100%;"></el-date-picker>
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
                        <div class="grid-content bg-purple-dark">订单列表</div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <template>
                    <el-table :data="orderTable" height=auto border style="width: 100%">
                        <el-table-column prop="allCheck" label="全选" width="60" align='center'>
                        </el-table-column>
                        <el-table-column prop="orderCode" label="订单编号" width="100" align='center'>
                        </el-table-column>
                        <el-table-column prop="orderTime" label="下单时间" width="140" align='center'>
                        </el-table-column>
                        <el-table-column prop="tel" label="注册手机号" width="140" align='center'>
                        </el-table-column>
                        <el-table-column prop="orderFrom" label="订单来源" width="140" align='center'>
                        </el-table-column>
                        <el-table-column prop="orderMoney" label="借款金额" width="140" align='center'>
                        </el-table-column>
                        <el-table-column prop="payMoney" label="到账金额" width="140" align='center'>
                        </el-table-column>
                        <el-table-column prop="goodsCode" label="分期总数" width="120" align='center'>
                        </el-table-column>
                        <el-table-column prop="buyType" label="支付方式" width="140" align='center'>
                        </el-table-column>
                        <el-table-column prop="orderStatus" label="订单状态" width="140" align='center'>
                        </el-table-column>
                        <el-table-column label="操作" width="260" align='center' fixed="right" >
                            <template slot-scope="scope">
                    　　　　　　<el-button size="mini" type="primary" @click="seeInfo(scope.row)">详情</el-button>
                    　　　　</template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-main>
        </el-container>
        <topQueryDialog ref="topQueryDialog"></topQueryDialog>
    </div>
</template>

<script>
import topQueryDialog from './components/topQueryDialog'
export default {
    components:{ topQueryDialog },
    data(){
        return{
            activeNames: ['1'],
            searchForm:{
                userMsg:'',
                auth:'',
                overTime:'',
                quota:'',
                registerTime:{
                    startTime:'',
                    endTime:''
                }
            },
            orderTable:[{
                
            }]
        }
    },
    methods:{
        topQuery(){ //  高级检索
            this.$refs.topQueryDialog.dialogShow = true
        },
        queryGoods(){   //  
        
        },
        seeInfo(){    // 查看用户详情
            this.$router.push({ name:'cashOrderDetail',query:{id:'12'}})
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
