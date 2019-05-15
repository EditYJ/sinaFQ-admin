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
                        <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
                            <el-col :span="5">
                                <el-form-item label="组名称:">
                                    <el-input size="small" v-model="postForm.name" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="5">
                                <el-form-item label="组员:">
                                    <el-input size="small" v-model="postForm.name" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" >
                                <el-form-item label="业务类型:">
                                    <el-select size="small" v-model="postForm.goodsType1" placeholder="请选择">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4" >
                                <el-form-item label="组长:">
                                    <el-select size="small" v-model="postForm.goodsType1" placeholder="请选择">
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
                            <div class="grid-content bg-purple-dark">组列表</div>
                        </el-col>
                        <el-col :span="3" offset="17">
                            <div class="grid-content bg-purple-dark">
                                <el-button type="primary" @click.native.prevent="addList" plain>+ 新增组</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <el-table :data="groupTable" height=auto border style="width: 100%">
                        <el-table-column label="序号" prop="account" align='center'>
                        </el-table-column>
                        <el-table-column label="组名称"  prop="name" align='center'>
                        </el-table-column>
                        <el-table-column label="业务类型" prop="time" align='center'>
                        </el-table-column>
                        <el-table-column label="组员"  prop="ip" align='center'>
                        </el-table-column>
                        <el-table-column label="处理阶段"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="备注"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="组长"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="创建时间"  prop="history" align='center'>
                        </el-table-column>
                        <el-table-column label="操作"  prop="history" align='center' width="200" fixed="right">
                            <el-button-group>
                                <el-button type="primary" size="mini">详情</el-button>
                                <el-button type="success" size="mini">编辑</el-button>
                                <el-button type="danger" size="mini">删除</el-button>
                            </el-button-group>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>

        </div>

        <!-- 新增/编辑组 -->
        <!-- <el-dialog :visible.sync="" title="新增/编辑 组">新增/编辑 组</el-dialog> -->

        <!-- 组员管理 -->
        <!-- <el-dialog :visible.sync="" title="（请假组员不会分配案件）"></el-dialog> -->


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
            groupTable:[{}],
        }
    },
    methods:{
        addList() { // 新增组列表
        
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
