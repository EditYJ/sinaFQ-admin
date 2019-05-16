<template>
    <div>
        <Titlecontent />
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

                    <el-row>
                        <el-form ref="form" :model="postForm" label-width="120px" class="elForm" align="left">
                            <el-col :span="6">
                                <el-form-item label="用户信息:">
                                    <el-input size="small" v-model="postForm.name" placeholder="用户ID/注册手机号/姓名"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="订单编号:">
                                    <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="应还总额:">
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="逾期订单:">
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col> 
                            <el-col :span="6">
                                <el-form-item label="逾期期数:">
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="最大逾期天数:">
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="处理状态">
                                    <el-select v-model="postForm.region" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="催熟员">
                                    <el-select v-model="postForm.region" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="催收进度">
                                    <el-select v-model="postForm.start" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="催收结果">
                                    <el-select v-model="postForm.result" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="最小还款日:">
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="跟进时间:">
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
                                    <el-col class="line" :span="2">-</el-col>
                                    <el-col :span="11">
                                        <el-input size="small" v-model="postForm.name" placeholder=""></el-input>
                                    </el-col>
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
                        <div class="grid-content bg-purple-dark">案件列表</div>
                    </el-col>
                    <el-col :span="2" offset="18">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" @click.native.prevent="turnOrder" plain>转单</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-table :data="dailyTable" height=auto border style="width: 100%">
                    <el-table-column label="用户ID" prop="account" align='center'>
                    </el-table-column>
                    <el-table-column label="注册手机号"  prop="name" align='center'>
                    </el-table-column>
                     <el-table-column label="姓名" prop="time" align='center'>
                    </el-table-column>
                    <el-table-column label="性别"  prop="ip" align='center'>
                    </el-table-column>
                    <el-table-column label="逾期总额"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="应还总额"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="逾期订单"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="逾期期数"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="最小还款日"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="最大逾期天数"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="处理状态"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="催收员"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="拨打数"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="催收进度"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="催收结果"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="跟进时间"  prop="history" align='center'>
                    </el-table-column>
                    <el-table-column label="操作"  prop="history" align='center' fixed="right">
                        <template slot="setting">
                            <el-button-group>
                                <el-button type="success" size="mini">处理</el-button>
                                <el-button type="danger" size="mini">置后</el-button>
                                <el-button type="danger" size="mini">恢复</el-button>
                            </el-button-group>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
            </el-container>

            <!-- 转单 -->
            <el-dialog :visible.sync="turnOrderDialog" title="转单" class="caseTurnOrder">
                <el-form ref="turnOrderForm" :model="turnOrderForm" label-width="100px">
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="搜索">
                                <el-input v-model="turnOrderForm.search"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="10">
                            <el-form-item label="催收员">
                                <el-select v-model="turnOrderForm.executor" placeholder="请选择催收员">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <span slot="footer" class="dialog-footer" align="center">
                    <el-button type="success" @click.native.prevent="turnOrderDialog = false">确 认</el-button>
                    <el-button @click.native.prevent="turnOrderDialog = false">取 消</el-button>
                </span>
            </el-dialog>

        </div>

    </div>
</template>

<script>
import Titlecontent from '@/components/Titlecontent'
export default {
    components:{Titlecontent},
    data(){
        return {
            activeNames:['1'],
            postForm:{
                name:'',
                time:''
            },
            dailyTable:[{}],
            turnOrderDialog:false,
            turnOrderForm:{},
        }
    },
    methods:{
        turnOrder() { // 转单
            this.turnOrderDialog = true
        }
    }
    
}
</script>

<style lang="scss"> 
    .caseTurnOrder{
        .el-dialog__footer{
            text-align: center !important;
        }
    }
</style>


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
