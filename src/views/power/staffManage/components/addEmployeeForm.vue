<template>
    <div>
        <el-dialog title="新增/编辑 员工" :visible.sync="editDiglog" class="addDialog" top="2.5vh" center="true" @close="resetForm('employeeForm')">
            <el-form ref="employeeForm" :model="employeeForm"  :rules="employeeForm.rules" label-width="80px" label-position="left">
                <el-form-item label="账号" prop="account">
                    <el-input v-model="employeeForm.account" placeholder="4~20长度的字母数字组合，须字母开头"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="employeeForm.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="tel">
                    <el-input v-model="employeeForm.tel" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="微信号" prop="wechat">
                    <el-input v-model="employeeForm.wechat" placeholder="请输入微信号"></el-input>
                </el-form-item>
                <el-form-item label="邮箱地址" prop="email">
                    <el-input v-model="employeeForm.email" placeholder="请输入邮箱地址"></el-input>
                </el-form-item>
                <el-form-item label="员工状态">
                    <el-switch v-model="employeeForm.employeeStatus"></el-switch>
                </el-form-item>
                <el-form-item label="员工描述" prop="desc">
                    <el-input type="textarea" v-model="employeeForm.desc" placeholder="请输入员工描述（选填）"></el-input>
                </el-form-item>
                <el-form-item label="所属角色">
                    <el-checkbox-group v-model="employeeForm.innerRole">
                        <el-checkbox label="超级管理员" name="type"></el-checkbox>
                        <el-checkbox label="商品售后" name="type"></el-checkbox>
                        <el-checkbox label="用户分析" name="type"></el-checkbox>
                        <el-checkbox label="商城运营" name="type"></el-checkbox>
                        <el-checkbox label="催收员" name="type"></el-checkbox>
                        <el-checkbox label="财务" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="onSubmit('employeeForm')">提 交</el-button>
                    <el-button @click="resetForm('employeeForm')">取 消</el-button>
                </el-form-item> 
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return{
            editDiglog:false,
            employeeForm: {
                rules:{
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 1, max: 10, message: '不超过10个长度', trigger: 'blur' }
                    ],
                    tel:[
                        { required:true, message: '请输入手机号', trigger: 'blur' },
                        { min: 1, max: 11, message: '手机号不超过11个长度', trigger: 'blur' },
                        // { type: 'number', message: '手机号必须为数字值', trigger: 'blur'}
                    ],
                    wechat:[
                        { required:true, message: '请输入微信号', trigger: 'blur'},
                        { min:1, max: 20, message: '不超过20个长度', trigger: 'blur' }
                    ],
                    email:[
                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                    ],
                    desc:[
                        { min:0, max:100,message:'不超过100个长度',trigger:['blur','change']}
                    ]
                },
                account: '',
                name: '',
                tel: null,
                wechat: '',
                email: '',
                employeeStatus:true,
                desc:'',
                innerRole:[]
            }
        }
    },
    methods:{
        resetForm(formName) {
            this.$refs[formName].resetFields()
            this.editDiglog = false
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
    }
}
</script>


<style lang="scss" scoped>

</style>
