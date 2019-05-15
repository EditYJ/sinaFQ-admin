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
                            <el-form-item label="组名称:">
                                <el-input size="small" v-model="postForm.name" placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4" offset="1">
                            <el-form-item label="组员:">
                                <el-input size="small" v-model="postForm.name" placeholder="请输入"></el-input>
                            </el-form-item>
                        </el-col>

                        <el-col :span="4" offset="1">
                            <el-form-item label="业务类型:">
                                <el-select size="mini" v-model="postForm.goodsType1" placeholder="请选择">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4" offset="1">
                            <el-form-item label="组长:">
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

        <el-container class="groupList">
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">组列表</div>
                    </el-col>
                    <el-col :span="3" offset="17">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" @click.native.prevent="addGroup" plain>+ 新增组</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <el-table :data="groupTable" height=auto border style="width: 100%">
                    <el-table-column prop="allCheck" label="全选" width="60" align='center'>
                    </el-table-column>
                    <el-table-column prop="groupName" label="组名称" align='center'>
                    </el-table-column>
                    <el-table-column prop="businessType" label="业务类型" width="100" align='center'>
                    </el-table-column>
                    <el-table-column prop="groupNum" label="组员数量" width="100" align='center'>
                    </el-table-column>
                    <el-table-column prop="leader" label="组长" width="100" align='center'>
                    </el-table-column>
                    <el-table-column prop="tips" label="备注" align='center'>
                    </el-table-column>
                    <el-table-column prop="time" label="建组时间" width="100" align='center'>
                    </el-table-column>
                    <el-table-column prop="setting" label="操作" align='center'>
                        <template scope="scope">
                            <el-button-group>
                                <el-button size="mini" type="success" @click="groupDetail">详情</el-button>
                                <el-button size="mini" type="warning" @click="groupEdit">编辑</el-button>
                                <el-button size="mini" type="danger" @click="groupDel">删除</el-button>
                            </el-button-group>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>

        <!-- 新增组 -->
        <el-dialog title="新增/编辑 组" :visible.sync="addGroupDialog">
            <el-form ref="form" :model="groupForm" label-width="80px">
                <el-form-item label="组名称">
                    <el-input v-model="groupForm.name"></el-input>
                </el-form-item>
                <el-form-item label="业务类型">
                    <el-select v-model="groupForm.region" placeholder="新浪钱包">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择组长">
                    <el-select v-model="groupForm.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="添加组员">
                    <el-select v-model="groupForm.region" placeholder="请选择">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="组员列表">
                    <el-input type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="success" @click="addGroupDialog = false">提 交</el-button>
                <el-button @click="addGroupDialog = false">取 消</el-button>
            </span>
        </el-dialog>

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeNames:['1'],
            addGroupDialog:false,
            postForm:{},
            groupTable:[{}],
            groupForm:{},
        }
    },
    methods:{
        addGroup () {   //  新增组
            this.addGroupDialog = true
        },
        groupDetail () {},
        groupEdit () {},
        groupDel () {},
    }
}
</script>

<style lang="scss" scoped>
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
</style>
