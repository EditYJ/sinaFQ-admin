<template>
    <div class="page">
        <Titlecontent></Titlecontent>
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
                            <el-form-item label="角色名称:">
                                <el-input size="small" v-model="postForm.name" placeholder="输入角色名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" offset="1">
                            <el-form-item label="启用状态:">
                                <el-select size="mini" v-model="postForm.goodsType1" placeholder="请选择">
                                    <el-option label="启用" value="open"></el-option>
                                    <el-option label="关闭" value="close"></el-option>
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
                            <div class="grid-content bg-purple-dark">商品列表</div>
                        </el-col>
                        <el-col :span="2" offset="18">
                            <div class="grid-content bg-purple-dark">
                                <el-button type="primary"  @click="addForm" plain>+新增</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <el-table :data="roleList" height=auto border style="width: 100%">
                        <el-table-column prop="allCheck" label="全选" width="60" align='center'>
                        </el-table-column>
                        <el-table-column prop="roleName" label="角色名称" width="200" align='center'>
                        </el-table-column>
                        <el-table-column prop="roleDes" label="角色描述" width="300"  align='center'>
                        </el-table-column>
                        <el-table-column prop="roleInner" label="在内员工" width="140" align='center'>
                            <template slot-scope="scope">
                                <p style="color:#67c23a;font-size:16px;" @click="handleRole(scope.row.roleName)">{{scope.row.roleInner}}</p>
                            </template>
                        </el-table-column>
                        <el-table-column prop="status" label="启用状态" width="100" align='center'>
                            <template slot-scope="scope">
                                <el-switch
                                    v-model="scope.row.status"
                                    active-color="#13ce66"
                                    inactive-color="#999">
                                </el-switch>
                            </template>
                        </el-table-column>
                        <el-table-column prop="done" label="操作" align='center'>
                            <template slot-scope="scope">
                                <el-button-group class="btnGroup">
                                    <el-button size="mini" @click="editForm" type="success">编辑</el-button>
                                    <el-button size="mini" @click="operaForm" type="warning">操作权限</el-button>
                                    <el-button size="mini" @click="dataForm" type="primary">数据权限</el-button>
                                    <el-button size="mini" type="danger">删除</el-button>
                                </el-button-group>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
        </el-container>
        <!-- 新增/编辑角色 -->
        <el-dialog title="新增/编辑 角色" :visible.sync="dialogSettingFormVisible" class="newDialog" @close="cancelSettingForm">
            <el-form :model="settingForm" :rules="settingForm.settingFormRules" ref="settingForm">
                <el-form-item label="角色名称" label-width="80px" prop="roleName">
                    <el-input v-model="settingForm.roleName" name="roleName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="启用状态" label-width="80px">
                        <el-switch v-model="settingForm.status"></el-switch>
                </el-form-item>
                <el-form-item label="角色描述" label-width="80px" prop="roleDesc">
                        <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入角色描述"
                        v-model="settingForm.roleDesc"
                        ></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitSettingForm('settingForm')">确 定</el-button>
                <el-button @click="cancelSettingForm('settingForm')">取 消</el-button>
            </div>
        </el-dialog>
        <!-- 在内员工 -->
        <el-dialog title="在内员工" :visible.sync="innnerEmployee">
            <el-form>
                <el-form-item label="角色名称" label-width="80px" prop="roleName">
                    <el-input v-model="innnerEmployeeTable.roleName" name="roleName" autocomplete="off" disabled></el-input>
                </el-form-item>
                <template>
                <el-table
                    :data="innnerEmployeeTable"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="account"
                    label="账号"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="people"
                    label="分配人">
                    </el-table-column>
                    <el-table-column
                    prop="time"
                    label="分配时间">
                    </el-table-column>
                </el-table>
                </template>
            </el-form>
            <div slot="footer">
                <el-button @click="innnerEmployee = false" type="danger">关闭</el-button>
            </div>
        </el-dialog>
        <!-- 操作权限 -->
        <el-dialog title="设置操作权限" :visible.sync="operaRule">
            <el-form>
                <el-tree :data="operaTree" :props="defaultProps" check-strictly=true show-checkbox @node-click="handleTreeClick"></el-tree>
            </el-form>
            <div slot="footer">
                <el-button @click="operaRule = false" type="success">提 交</el-button>
                <el-button @click="operaRule = false">取 消</el-button>
            </div>
        </el-dialog>
        <!-- 设置数据权限 -->
        <el-dialog title="设置数据权限" :visible.sync="dataRule">
            <el-table :data="dataRuleTable" border style="width: 100%" ref="multipleTable" >
                <el-table-column prop="tap"  label="选项"></el-table-column>
                <el-table-column prop="demo" label="示例"></el-table-column>
                <el-table-column label="正常">
                    <template scope="scope">
                        <el-radio v-model="scope.row.on" label='正常' @change="getData"></el-radio>
                    </template>
                </el-table-column> 
                <el-table-column label="脱敏">
                    <template scope="scope">
                        <el-radio v-model="scope.row.on" label='脱敏' @change="getData"></el-radio>
                    </template>
                </el-table-column> 
            </el-table>
            <div slot="footer">
                <el-button @click="dataRule = false" type='success'>提 交</el-button>
                <el-button @click="dataRule = false">关 闭</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Titlecontent from '@/components/Titlecontent'

export default {
    components:{Titlecontent},
    data(){
        return{
            activeNames:['1'],
            goodsName:'',
            postForm:{
                name:'',
                goodsType1:'',
                goodsType2:'',
                goodsType3:'',
                timeState:'',
            },
            roleList:[{
                allCheck:true,
                roleName:'超级管理员',
                roleDes:'初始化角色-最高权限',
                roleInner:'2',
                status:true,
            }],
            settingForm: {
                roleName:'',
                status:true,
                roleDesc:'',
                settingFormRules:{
                    roleName:[
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                        { min: 1, max: 10, message: '长度不得大于10个字符', trigger: 'blur' }
                    ],
                    roleDesc:[
                        { required: false },
                        { min: 1, max: 50, message: '长度不得大于50个字符', trigger: 'blur' }
                    ]
                }
            },
            innnerEmployeeTable:[{
                roleName:'123',
                account:'',
                name:'',
                people:'',
                time:'',
            }],
            dialogSettingFormVisible: false,
            innnerEmployee:false,
            operaRule:false,
            dataRule:false,
            operaTree:[
                {
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    },{
                    label: '三级 1-1-1'
                    },]
                }]
                }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
                }],

                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                dataRuleTable:[
                    {tap:'注册手机号',demo:'15006168888',on:'正常'}
                ]
        }
    },
    methods:{
        getData(){
            const type = this.dataRuleTable.on
            if(type == '脱敏') {    //  让数值脱敏
                // todo ... 
            }
        },
        handleRole(row){
            this.innnerEmployeeTable.roleName = row
            this.getInnnerEmployeeTable()
        },
        handleTreeClick(data){  //  设置操作权限
            console.log(data)
        },
        getInnnerEmployeeTable(x){   //  获取在内员工表格数据
            // todo...
            this.innnerEmployee = true
        },
        addForm() {
            this.dialogSettingFormVisible = true
        },
        editForm(res){
            this.dialogSettingFormVisible = true
        },
        operaForm(res){
            this.operaRule = true
        },
        dataForm(res){
            this.dataRule = true
        },
        cancelSettingForm(formName) {
            this.$refs.settingForm.resetFields()
            this.settingForm.status = true
            this.dialogSettingFormVisible = false
        },
        submitSettingForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {  // 验证成功

                    // todo ...
                    
                    this.$message({ message: '保存成功',type: 'success'})
                    this.$refs.settingForm.resetFields()
                    this.settingForm.status = true
                    this.dialogSettingFormVisible = false

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
      },
    },
}
</script>


<style lang="scss" scoped>
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
        .btnGroup{
            .el-button{
                width: 90px;
                text-align: center;
                padding:7px 10px;
            }
        }
    }
}
</style>
