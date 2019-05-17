<template>
    <div>   
        <Titlecontent/>
        <div class="page">
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <template slot="title">
                        <el-col :span="4">筛选查询</el-col> 
                        <el-col :span="4" :offset="12"><div class="grid-content bg-purple"></div></el-col>
                            <el-button type="primary" @click.stop="queryGoods" plain>查询</el-button>
                            <el-button type="primary" @click.stop="resetQuery" plain>重置</el-button>
                        </el-col>
                    </template>
                    <el-form ref="form" :model="postForm" label-width="100px" class="elForm">
                        <el-row>
                            <el-col :span="5">
                                <el-form-item label="编号查询:">
                                    <el-input size="small" v-model="postForm.name" placeholder="账单编号/订单编号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="借款人:">
                                    <el-input size="small" v-model="postForm.name" placeholder="用户ID/注册手机号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="逾期状态">
                                    <el-select size="small" v-model="postForm.region" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="支付时间:">
                                    <el-date-picker
                                        v-model="postForm.time"
                                        type="datetimerange"
                                        size="small" 
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :default-time="['12:00:00']"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                <el-form-item label="分期类型">
                                    <el-select size="small" v-model="postForm.region" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item label="分期数">
                                    <el-select size="small" v-model="postForm.region" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="分期金额">
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name"></el-input>
                                    </el-col>
                                    <el-col class="line" :span="2">至</el-col>
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name"></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7">
                                <el-form-item label="最近还款日:">
                                    <el-date-picker
                                        v-model="postForm.time"
                                        type="datetimerange"
                                        size="small" 
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :default-time="['12:00:00']"
                                    >
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                   
                </el-collapse-item>
            </el-collapse>

            <el-container class="dailyList">
                <el-header>
                    <el-row>
                        <el-col :span="4">
                            <div class="grid-content bg-purple-dark">账单列表</div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <el-table :data="dailyTable" height=auto border style="width: 100%">
                        <el-table-column label="全选" prop="account" align='center'>
                        </el-table-column>
                        <el-table-column label="账单编号"  prop="name" align='center'>
                        </el-table-column>
                        <el-table-column label="订单编号" prop="time" align='center'>
                        </el-table-column>
                        <el-table-column label="注册手机号"  prop="ip" align='center'>
                        </el-table-column>
                        <el-table-column label="用户ID"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="支付时间" prop="time" align='center'>
                        </el-table-column>
                        <el-table-column label="分期类型"  prop="ip" align='center'>
                        </el-table-column>
                        <el-table-column label="订单金额"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="分期数"  prop="ip" align='center'>
                        </el-table-column>
                        <el-table-column label="最近还款日"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="账单状态"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="逾期状态"  prop="ip" align='center'>
                        </el-table-column>
                        <el-table-column label="已还期数"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="未还期数"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="操作" width="120"  prop="history" align='center' fixed="right">
                            <template scope="scope">
                                <el-button @click="returnDetail" size="mini" type="success">还款详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import Titlecontent from '@/components/Titlecontent'
export default {
    components:{ Titlecontent },
    data(){
        return {
            activeNames:['1'],
            postForm:{
                name:'',
                time:''
            },
            dailyTable:[{}]
        }
    },
    methods:{
        queryGoods() { // 查询
        },
        resetQuery() { // 重置
        },
        returnDetail() { // 还款详情
            this.$router.push({name:'repayDetail',query:{id:'10'}})
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
