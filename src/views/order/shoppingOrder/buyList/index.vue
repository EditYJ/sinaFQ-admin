<template>
    <div class="page">
        <div class="topButton">
            <el-row>
                <el-button size="small" :type="jdGoods" @click="checkState('jd')">京东买断</el-button>
                <el-button size="small" :type="inputGoods" @click="checkState('')">苏宁买断</el-button>
            </el-row>
        </div>
        
         <el-collapse v-model="activeNames">
            <el-collapse-item name="1">
                <template slot="title">
                    <el-col :span="4">筛选查询</el-col> 
                    <el-col :span="6" :offset="13">
                        <div class="grid-content bg-purple">
                            <el-button type="primary" @click.stop="queryGoods" plain>查询</el-button>
                            <el-button type="primary" @click.stop="resetQuery" plain>重置</el-button>
                            <el-button type="primary" @click.stop="topQuery" plain>高级检索</el-button>
                        </div>
                    </el-col>
                </template>
                <el-row>
                    <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
                        <el-col :span="5">
                            <el-form-item label="输入搜索:">
                                <el-input size="small" v-model="postForm.name" placeholder="输入商品编号/商品名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item label="注册手机:">
                                <el-input size="small" v-model="postForm.name" placeholder="输入注册手机号"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" >
                            <el-form-item label="订单来源:">
                                <el-select size="small" v-model="postForm.timeState" placeholder="请选择">
                                    <el-option label="一期" value="oneState"></el-option>
                                    <el-option label="二期" value="twoState"></el-option>
                                    </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" >
                            <el-form-item label="支付方式:">
                                <el-select size="small" v-model="postForm.timeState" placeholder="请选择">
                                    <el-option label="一期" value="oneState"></el-option>
                                    <el-option label="二期" value="twoState"></el-option>
                                    </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-form-item label="采购状态:">
                                <el-select size="small" v-model="postForm.timeState" placeholder="请选择">
                                    <el-option label="一期" value="oneState"></el-option>
                                    <el-option label="二期" value="twoState"></el-option>
                                    </el-select>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-row>
            </el-collapse-item>
        </el-collapse>

        <el-container class="goodsList">
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">采购列表</div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <template>
                    <el-table :data="purchaseList" height=auto border style="width: 100%">

                        <el-table-column prop="allCheck" label="全选" width="60" align='center'>
                        </el-table-column>

                         <el-table-column prop="orderCode" label="订单编号" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="goodsCode" label="商品编号" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="orderContent" label="订单内容" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="tel" label="注册手机" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="money" label="订单金额" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="freight" label="运费" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="truePay" label="实付金额" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="orderFrom" label="订单来源" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="payWay" label="支付方式" width="100" align='center'>
                        </el-table-column>

                        <el-table-column prop="payTime" label="支付时间" width="80" align='center'>
                        </el-table-column>

                        <el-table-column prop="flowTime" label="跟进时间" align='center'>
                        </el-table-column>

                        <el-table-column prop="type" label="采购状态" align='center'>
                        </el-table-column>

                        <el-table-column prop="setting" label="操作" align='center'>
                            <template scope="scope">
                               
                            </template>
                        </el-table-column>

                    </el-table>
                </template>
            </el-main>
        </el-container>

        <!-- 高级检索 -->
        <el-dialog title="高级检索" :visible.sync="topQueryDialog">

            <el-form ref="topQueryForm" :model="topQueryForm" label-width="80px" size="mini">
                <el-form-item label="订单金额">
                    <el-col :span="11">
                        <el-input size='small' v-model="topQueryForm.startPrice"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">至</el-col>
                    <el-col :span="11">
                        <el-input  size='small' v-model="topQueryForm.endPrice"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="支付时间">
                    <el-col :span="11">
                        <el-input size='small' v-model="topQueryForm.payTimeStart"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">至</el-col>
                    <el-col :span="11">
                        <el-input  size='small' v-model="topQueryForm.payTimeEnd"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="跟进时间">
                    <el-col :span="11">
                        <el-input size='small' v-model="topQueryForm.followTimeStart"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">至</el-col>
                    <el-col :span="11">
                        <el-input  size='small' v-model="topQueryForm.followTimeEnd"></el-input>
                    </el-col>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button type="success" @click="topQueryDialog = false">查 询</el-button>
                <el-button @click="topQueryDialog = false">取 消</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data(){
        return {
            topQueryDialog:false,
            jdGoods:'primary',
            inputGoods:'',
            activeNames:['1'],
            postForm:{
                name:'',
                goodsType1:'',
                goodsType2:'',
                goodsType3:'',
                timeState:'',
            },
            purchaseList:[{}],
            topQueryForm:{
                startPrice:'',
                endPrice:'',
                payTimeStart:'',
                payTimeEnd:'',
                followTimeStart:'',
                followTimeEnd:'',
            },
            
        }
    },
    methods:{
        topQuery(){ //  高级检索
            this.topQueryDialog = true
        },
        checkState(state) {
            if(state=='jd'){
                this.jdGoods = 'primary'
                this.inputGoods = ''
            }else{
                this.jdGoods = ''
                this.inputGoods = 'primary'
            }
        }
        
    }
}
</script>

<style lang="scss" scoped>
    .topButton{
        margin-bottom:20px;
    }
    .goodsList{
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
</style>

