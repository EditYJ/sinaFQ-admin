<template>
    <div>
        <Titlecontent></Titlecontent>
        <div class="page">
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
                            <el-col :span="8" offset="1">
                                    <el-form-item label="商品类目:">
                                        <el-row>
                                            <el-col :span="8">
                                                <el-select size="small" v-model="postForm.goodsType1" placeholder="一级类目">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-select size="small"  v-model="postForm.goodsType2" placeholder="二级类目">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-select size="small"  v-model="postForm.goodsType3" placeholder="三级类目">
                                                    <el-option label="区域一" value="shanghai"></el-option>
                                                    <el-option label="区域二" value="beijing"></el-option>
                                                </el-select>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                            </el-col>
                            <el-col :span="4" offset="1">
                                <el-form-item label="商品品牌:">
                                    <el-select size="small" v-model="postForm.goodsBrand" placeholder="请选择">
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
                            <div class="grid-content bg-purple-dark">商品列表-{{goodsType}}</div>
                        </el-col>
                        <el-col :span="3" offset="17">
                            <div class="grid-content bg-purple-dark">
                                <el-button type="primary" @click="modifyGoods" plain>批量导入</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-header>
                <el-main>
                    <template>
                        <el-table :data="poolTableData" height=auto border style="width: 100%">
                            <el-table-column prop="allCheck" label="全选" width="60" align='center'>
                            </el-table-column>
                            <el-table-column prop="goodsId" label="商品编号" width="100" align='center'>
                            </el-table-column>
                            <el-table-column prop="goodsPic" label="商品主图" width="120" align='center'>
                                <template scope="scope">
                                    <img :src="scope.row.goodsPic" width="60" height="60"/>
                                </template>
                            </el-table-column>
                            <el-table-column label="商品名称/品牌" width="180" align='left'>
                                <template scope="scope">
                                    <a :href="'http://'+scope.row.goodsName" class="goodsNameLink">{{scope.row.goodsName}}</a>
                                    <div>品牌：{{scope.row.goodsName}}</div> 
                                </template>
                            </el-table-column>
                            <el-table-column prop="goodsType" label="商品类目" width="100" align='center'>
                            </el-table-column>
                            <el-table-column prop="goodsPrice" label="京东售价" width="100" align='center'>
                                <template scope="scope">
                                    ¥{{scope.row.goodsPrice}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="goodsPriceJD" label="京东协议价" width="100" align='center'>
                                <template scope="scope">
                                    ¥{{scope.row.goodsPriceJD}}
                                </template>
                            </el-table-column>
                            <el-table-column prop="goodsPriceSina" label="新浪定价" align='center'>
                                <template scope="scope">
                                    <el-input size="mini" style="width:140px" placeholder="新浪定价" v-model="scope.row.goodsPriceSina">
                                        <template slot="prepend">¥</template>
                                    </el-input>
                                </template>
                            </el-table-column>
                            <el-table-column prop="stageLimit" label="分期限制" align='center'>
                                <template scope="scope">
                                    <el-select size="mini" v-model="scope.row.stageLimit" placeholder="不限制">
                                        <el-option label="不限制" value="noLimit"></el-option>
                                        <el-option label="限制" value="Limit"></el-option>
                                    </el-select>
                                </template>
                            </el-table-column>
                            <el-table-column prop="goodsIptTime" label="操作" align='center'>
                                <template scope="scope">
                                    <span @click="importGoods" style="color:green;cursor:pointer">导入</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </el-main>
            </el-container>

            <!-- 高级检索 -->
            <el-dialog title="高级检索" :visible.sync="topQuaryDialog">
                <el-form ref="queryDialogForm" label-position="right" :model="queryDialogForm" label-width="180px" >
                    <el-form-item label="商品类目:">
                        <el-row>
                            <el-col :span="6">
                                <el-select size="small" v-model="postForm.goodsType1" placeholder="一级类目">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="6">
                                <el-select size="small"  v-model="postForm.goodsType2" placeholder="二级类目">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="6">
                                <el-select size="small"  v-model="postForm.goodsType3" placeholder="三级类目">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                    </el-form-item>

                    <el-form-item label="价格区间:">
                        <el-row>
                            <el-col :span="8">
                                <el-input size='small' type="number" v-model="queryDialogForm.startPrice"></el-input>
                            </el-col>
                            <el-col :span="1" offset="1">-</el-col>
                             <el-col :span="8">
                                <el-input size='small' type="number" v-model="queryDialogForm.endPrice"></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>

                    <el-form-item label="协议价低于京东价超过:">
                        <el-row>
                            <el-col :span="10">
                                <el-input size='small' type="number" v-model="queryDialogForm.price">
                                    <template slot="append">元</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
                
                <span slot="footer" class="dialog-footer">
                    <el-button type="success" @click="importQueryDialog">导 入</el-button>
                    <el-button @click="importQueryDialog">取 消</el-button>
                </span>

            </el-dialog>

            <!-- 批量导入 -->
            <el-dialog title="批量导入" :visible.sync="modifyDialog">
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
                    <el-button type="success" @click="closeModifyDialog">导 入</el-button>
                    <el-button @click="closeModifyDialog">取 消</el-button>
                </span>
            </el-dialog>

        </div> 
    </div>
</template>

<script>
import Titlecontent from "../../../../components/Titlecontent/index"
export default {
    components:{ Titlecontent },
    data(){
        return{
            activeNames:['1'],
            goodsType:'母婴商品池',
            topQuaryDialog:false,
            modifyDialog:false,
            goodsCount:'12',
            postForm:{
                name:'',
                goodsType1:'',
                goodsType2:'',
                goodsType3:'',
                goodsBrand:'',
            },
            poolTableData:[
                {
                    allCheck: false,
                    goodsId: 'abc123',
                    goodsPic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556092750677&di=0b0c5254ac19b246b2b076f895db1335&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1369025_192645024000_2.jpg',
                    goodsName:'绿色食品',
                    goodsType:'食品',
                    goodsPrice:'213',
                    goodsPriceJD:'123',
                    goodsPriceSina:'123',
                    stageLimit:'不限制',
                }
            ],
            queryDialogForm:{
                startPrice:'',
                endPrice:'',
                price:''
            },
            modifyDialogForm:{
                limitNormal:['不限制'],
                limit:['不限制','3期','4期','5期']
            }
        }
    },
    methods:{
        topQuery(){
            this.topQuaryDialog = true
        },
        closeQueryDialog(){
            this.topQueryDialog = false
        },
        modifyGoods(){
            this.modifyDialog = true
        },
        closeModifyDialog(){
            this.modifyDialog = false
        }
    }
    
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
            
        }
    }
</style>

