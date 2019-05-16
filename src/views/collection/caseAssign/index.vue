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
                        <el-form ref="form" :model="postForm" label-width="100px" class="elForm">
                            <el-col :span="6">
                                <el-form-item label="业务类型：">
                                     <el-select v-model="postForm.region" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
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
                     <el-col :span="5" :offset="15">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" @click.native.prevent="setAssign" plain>分配配置</el-button>
                            <el-button type="primary" @click.native.prevent="dealOrder" plain>处理中分单</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-table :data="dailyTable" height=auto border style="width: 100%">
                    <el-table-column label="全选" prop="account" align='center'>
                    </el-table-column>
                    <el-table-column label="案件级别"  prop="name" align='center'>
                    </el-table-column>
                     <el-table-column label="待分配案件总数" prop="time" align='center'>
                    </el-table-column>
                    <el-table-column label="处理中案件总数"  prop="ip" align='center'>
                    </el-table-column>
                    <el-table-column label="跟进时间"  prop="history" align='center'>
                    </el-table-column>
                </el-table>
            </el-main>
            </el-container>
        </div>

        <!-- 案件分配配置Dialog -->
        <el-dialog title="案件分配配置" :visible.sync="caseTabDialog" class="myDialog">
            <el-tabs v-model="tabActiveName" @tab-click="handleClick" type="border-card">
                <el-tab-pane label="系统分配待分配" name="systemWait">
                    <el-row class="systemWaitRow">
                        <el-col :span="3">对应规则</el-col>
                        <el-col :span="20">注：系统分配开启后每日上午09:00按照已配置的具体规则开始执行</el-col>
                    </el-row>
                    <el-row class="systemWaitRow2">
                        <el-form ref="systemTabForm" :model="systemTabForm" label-width="80px">
                            <el-form-item label="启用状态:">
                                <el-switch
                                    v-model="systemTabForm.switchValue">
                                </el-switch>
                            </el-form-item>
                            <el-form-item label="分配单位:">
                                 <el-radio-group v-model="systemTabForm.unit">
                                    <el-radio label="按案件金额分配"></el-radio>
                                    <el-radio label="按案件数量分配"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="分配方式:">
                                 <el-radio-group v-model="systemTabForm.methods">
                                    <el-radio label="尽可能平分"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="暂不分配:" class="redItem">
                                <el-col :span="4">逾期天数小于</el-col>
                                <el-col :span="3"><el-input size="mini" v-model="systemTabForm.inputDay"></el-input></el-col>
                                <el-col :span="4" :offset="1">天的案件</el-col>
                            </el-form-item>
                            <el-form-item label="分配给组:">
                                <el-select v-model="postForm.region" size="mini" placeholder="请选择">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </el-row>
                </el-tab-pane>

                <el-tab-pane label="手动分配待分配" name="manualWait">
                    <el-row class="systemWaitRow">
                        <el-col :span="3">对应规则</el-col>
                        <el-col :span="20">注：手动分配未分配开启后，系统自动分配任务将禁用</el-col>
                    </el-row>
                </el-tab-pane>

                <el-tab-pane label="手动分配处理中" name="manualDoing">
                    <el-row class="systemWaitRow">
                        <el-col :span="3">对应规则</el-col>
                        <el-col :span="20">注：系统分配开启后每日上午09:00按照已配置的具体规则开始执行</el-col>
                    </el-row>
                </el-tab-pane>
                
                 <el-row>
                    <el-col class="dialogCenter">
                        <el-button type="success" @click.native.prevent="caseTabDialog = false">保 存</el-button>
                        <el-button @click.native.prevent="caseTabDialog = false">关 闭</el-button>
                    </el-col>
                </el-row>

            </el-tabs>
        </el-dialog>

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
            caseTabDialog:false,
            tabActiveName:'systemWait',
            systemTabForm:{
                switchValue:true,
                inputDay:'',
            },
            manualTabForm:{},
            
        }
    },
    methods:{
        setAssign() { // 分配配置
            this.caseTabDialog = true
        },
        dealOrder() { // 处理中分单

        },
        handleClick(tab, event) {   //  切换tabs
            console.log(event)
        }
        
    }
    
}
</script>

<style lang="scss">
    .myDialog{
        .el-tabs__header{
            margin: 0px !important;
        }
        .el-tabs__content{
            padding: 0px 0px 20px 0px;
        }
    }
    .redItem .el-form-item__label{
        color: red;
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
    .myDialog{
        .systemWaitRow{
            height: 50px;
            line-height: 20px;
            background: #eee;
            padding: 15px;
            font-size: 12px;
            border-bottom: 1px solid rgb(212, 212, 212);
            .el-col:first-child{
                font-size: 14px;
                font-weight: bold;
            }
        }
        .systemWaitRow2{
            margin-top: 20px;
        }
        .dialogCenter{
            margin-top: 30px;
            text-align: center;
        }
    }
</style>
