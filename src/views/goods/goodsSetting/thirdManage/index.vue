<template>
    <div>
        <Titlecontent></Titlecontent>
        <div class="page">
            <el-container class="goodsList">
                <el-header>
                    <el-row>
                        <el-col :span="2">
                            <div class="grid-content bg-purple-dark">平台列表</div>
                        </el-col>
                        <el-col :span="2" offset="20">
                            <div class="grid-content bg-purple-dark">
                                <el-button type="primary" @click="addThildList" plain>+ 新 增</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <el-table :data="typeListTable" height=auto border style="width: 100%">
                        <el-table-column prop="typeCode" label="类目编号" align='center'>
                        </el-table-column>
                        <el-table-column prop="typeName" label="平台名称" align='center'>
                        </el-table-column>
                        <el-table-column prop="typeLevel" label="平台logo(大)" align='center'>
                        </el-table-column>
                        <el-table-column prop="typeRel" label="平台logo(小)" align='center'>
                        </el-table-column>
                        <el-table-column prop="goodsNum" label="比价logo" align='center'>
                        </el-table-column>
                        <el-table-column prop="manage" label="操作" align='center'>
                            <template scope="scope">
                                <span class="textFont" @click="editList('1')">编辑</span>
                                <span class="textFont textFont2" @click="delList('2')">删除</span>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </div>
        
        <!-- 新增 -->
        <addThird ref="thirdDialog"></addThird>
    </div>
</template>

<script>
import Titlecontent from "../../../../components/Titlecontent/index"
import addThird from "./component/addThird"
export default {
    components:{ Titlecontent,addThird },
    data(){
        return { 

        }
    },
    methods:{
        editList() { // 编辑
            alert('编辑')
        },
        delList() { // 删除
            alert('删除')
        },
        addThildList() { //  新增
            this.refs.thirdDialog.addDialog = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .goodsList{
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
        .textFont{
            color:green;
            padding:0px 5px;
            cursor: pointer;
        }
        .textFont2{
            color: red;
        }
    }
</style>
