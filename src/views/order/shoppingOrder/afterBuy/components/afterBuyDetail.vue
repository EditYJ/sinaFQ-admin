<template>
    <div class="myForm">
        <el-form ref="form" :model="afterBuyForm" label-width="80px">
            <el-form-item label="服务类型:">
                <el-col :span="8">
                    <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="取件方式:">
                <el-col :span="8">
                    <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="售后数量:">
                <el-col :span="8">
                    <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="售后原因:">
                <el-col :span="10">
                    <el-input v-model="afterBuyForm.surviceType" disabled type="textarea"></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="邮政编码:">
                <el-col :span="10">
                    <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                </el-col>
            </el-form-item>

            <el-form-item label="取件地址:" class="elForm">
                <el-row>
                    <el-col :span="3">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                    <el-col :span="3">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                    <el-col :span="3">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="返件地址:" class="elForm">
                <el-row>
                    <el-col :span="3">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                    <el-col :span="3">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                    <el-col :span="3">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item label="物流渠道:">
                <el-col :span="10">
                    <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                </el-col>
            </el-form-item>

             <el-form-item label="物流单号:">
                <el-col :span="10">
                    <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                </el-col>
            </el-form-item>

             <el-form-item label="发货运费:">
                <el-col :span="10">
                    <el-input v-model="afterBuyForm.surviceType" disabled></el-input>
                </el-col>
            </el-form-item>

             <el-form-item label="进度说明:" class="elForm2">
                <el-row>
                    <el-col :span="10">
                        <el-input v-model="afterBuyForm.surviceType" type="textarea" disabled></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="10">
                        <el-table :data="tableData" border width="100%">
                        <el-table-column prop="link" label="处理环节" align="center">
                        </el-table-column>
                        <el-table-column prop="man" label="处理人" align="center">
                        </el-table-column>
                        <el-table-column prop="time" label="处理时间" align="center">
                        </el-table-column>
                        <el-table-column prop="message" label="处理信息" align="center">
                        </el-table-column>
                    </el-table>
                </el-col>
                </el-row>
            </el-form-item>
        </el-form>

    </div>
</template>

<script>
export default {
    name:'afterBuyDetail',
    data(){
        return{
            afterBuyForm:{
                surviceType:'退货',
            }   
        }
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
    .myForm{
        margin-top: 40px;
        .elForm{
            .el-row{
                margin-bottom: 20px;
                .el-col:not(:first-child){
                    margin-left: 17px;
                }
            }
        }
        .elForm2{
            .el-table{
                margin-top:20px;
            }
        }
    }
</style>
