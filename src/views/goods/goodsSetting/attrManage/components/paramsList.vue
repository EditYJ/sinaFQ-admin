<template>
    <div>
        <el-container class="goodsList">
            <el-header>
                <el-row>
                    <el-col :span="2">
                        参数列表
                    </el-col>
                    <el-col :span="2" offset="20">
                        <el-button size="medium" type="primary" plain="">+新增</el-button>
                    </el-col>

                </el-row>
            </el-header>

            <el-main>
                <el-table :data="attrTable" height=auto border style="width: 100%">

                    <el-table-column prop="attrCode" label="编号" width="150" align='center'>
                    </el-table-column>

                    <el-table-column prop="attrType" label="属性类型" align='center'>
                    </el-table-column>

                    <el-table-column prop="attrCount" label="所属类型" align='center'>
                    </el-table-column>

                    <el-table-column prop="paramsCount" label="可选值列表" align='center'>
                    </el-table-column>

                    <el-table-column label="排序" width="150" prop="sort">
                    </el-table-column>

                    <el-table-column label="操作" width="150" align='center'>
                        <template scope="scope">
                            <span class="textFont" @click="editAttrList('4')">编辑</span>
                            <span class="textFont textFont2" @click="delAttrList('5')">删除</span>
                        </template>
                    </el-table-column>
                    
                    
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            attrTable:[
                
            ]
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
            padding:0px 8px;
            cursor: pointer;
        }
        .textFont2{
            color: red;
        }
    }
</style>
