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
                        <el-col :span="4">
                            <el-form-item label="编号查询:">
                                <el-input size="small" v-model="postForm.name" placeholder=" 订单编号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" >
                            <el-form-item label="异常类型:">
                                <el-select size="small" v-model="postForm.goodsType1" placeholder="请选择">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" >
                            <el-form-item label="异常来源:">
                                <el-select size="small" v-model="postForm.timeState" placeholder="请选择">
                                    <el-option label="一期" value="oneState"></el-option>
                                    <el-option label="二期" value="twoState"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" >
                            <el-form-item label="状态:">
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
                                <el-col class="line" :span="1">至</el-col>
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
                        <div class="grid-content bg-purple-dark">异常列表</div>
                    </el-col>
                    <el-col :span="3" offset="17">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" @click.native.prevent="addOrder" plain>+ 新增</el-button>
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
                    <el-table-column prop="businessType" label="异常类型" align='center'>
                    </el-table-column>
                    <el-table-column prop="name" label="异常来源" align='center'>
                    </el-table-column>
                    <el-table-column prop="leader" label="退款金额" align='center'>
                    </el-table-column>
                    <el-table-column prop="tips" label="流水号" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="备注" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="状态" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="跟进时间" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="处理人" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="处理时间" align='center'>
                    </el-table-column>
                    <el-table-column prop="setting" label="操作" align='center' fixed="right" width="200">
                        <template scope="scope">
                            <el-button-group>
                                <el-button size="mini" type="primary" @click.native.prevent="dealOrder">处理</el-button>
                                <!-- <el-button size="mini" type="success" @click.native.prevent="detailOrder">详情</el-button> -->
                            </el-button-group>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>

        <!-- 新增异常 -->
        <el-dialog title="新增异常" :visible.sync="newExpDialog">
            新增异常
        </el-dialog>

        <!-- 异常处理 -->
        <el-dialog title="异常处理" :visible.sync="dealExpDialog">
            异常处理
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
            newExpDialog:false,
            dealExpDialog:false,
        }
    },
    methods:{
        addOrder() { // 新增
            this.newExpDialog = true
        },
        dealOrder() { // 异常处理
            this.dealExpDialog = true
        }

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
    .detailDialogRow{
        margin-top: 20px;
    }
    .failReasonRow{
        margin-bottom: 15px;
    }
</style>
