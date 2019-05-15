<template>
    <div>
        <el-container class="goodsList">
            <el-header>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">商品池列表</div>
                    </el-col>
                    <el-col :span="2" :offset="18">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" @click="batchIpt" plain>批量导入</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <template>

                    <el-table :data="goodsTable" height=auto border style="width: 100%">

                        <el-table-column prop="allCheck" label="全选" width="60" align='center'>
                        </el-table-column>

                        <el-table-column prop="goodsCode" label="商品池编号" align='center'>
                        </el-table-column>

                        <el-table-column prop="goodsName" label="商品池名称" align='center'>
                        </el-table-column>

                        <el-table-column prop="goodsNum" label="池内商品数" align="center">
                        </el-table-column>

                        <el-table-column prop="goodsWaitNum" label="待添加商品数" align='center'>
                        </el-table-column>

                        <el-table-column prop="goodsSetting" label="操作" align='center'>
                            <template scope="scope">
                                <router-link :to="{name:'goodsPoolDetail'}" class="link-type">
                                    <span @click="goodsDetail" class="goodsDetailSpan">详情</span>
                                </router-link>
                            </template>
                        </el-table-column>

                    </el-table>

                </template>
            </el-main>
        </el-container>

        <!-- 批量修改 -->
        <el-dialog title="批量修改" :visible.sync="modifyDialog">
            <template slot="title">
                <span style="margin-right:5px;font-weight:bold;">批量导入</span>
                <span class="title-name">已选择商品数：{{goodsCount}}</span>
            </template>
            <el-form ref="modifyDialogForm" label-position="left" :model="modifyDialogForm" label-width="160px" >
                <el-form-item label="分期数限制">
                     <el-checkbox-group v-model="modifyDialogForm.limitNormal">
                        <el-checkbox v-for="limit in modifyDialogForm.limit" :label="limit" :key="limit">{{limit}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>

                <el-form-item label="新浪定价高于协议价：">
                    <el-row>
                        <el-col :span="10">
                            <el-input type="number" v-model="modifyDialogForm.price">
                                <template slot="append">%</template>
                            </el-input>
                        </el-col>
                    </el-row>
                     
                </el-form-item>

            </el-form>
             <span slot="footer" class="dialog-footer">
                <el-button type="success" @click="modifyDialog = false">导 入</el-button>
                <el-button @click="modifyDialog = false">取 消</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            modifyDialog:false,
            goodsCount:'12',
            goodsTable:[
                {
                    allCheck:true,
                    goodsCode:'123',
                    goodsName:'母婴商品池',
                    goodsNum:'111',
                    goodsWaitNum:'222',
                }
            ],
            modifyDialogForm:{
                limitNormal:['不限制'],
                limit:['不限制','3期','4期','5期']
            }
        }
    },
    methods:{
        goodsDetail(){
            // alert('查看详情')
        },
        batchIpt(){   //  批量导入
            this.modifyDialog = true
        }
    }
}
</script>

<style lang="scss" scoped>
    .goodsDetailSpan{
        color: green
    }
</style>
