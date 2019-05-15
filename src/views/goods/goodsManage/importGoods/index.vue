<template>
    <div>
        <titlecontent></titlecontent>
        <div class="page">
            <div class="topButton">
                <el-row>
                    <el-button size="small" :type="jdBuyBtn" @click="checkState('jd')">京东买断</el-button>
                    <el-button size="small" :type="suningBuyBtn" @click="checkState('')">苏宁买断</el-button>
                </el-row>
            </div>
            
            <keep-alive>
                <component :is="goodsTableComponent"></component>
            </keep-alive>
            
        </div>
    </div>
</template>

<script>
import Titlecontent from "../../../../components/Titlecontent/index"
import jdBuy from './components/jdBuy'
import suningBuy from './components/suningBuy'
export default {
    data(){
        return{
            goodsTableComponent:'jdBuy',
            jdBuyBtn:'primary',
            suningBuyBtn:'',
        }
    },
    components:{ Titlecontent,jdBuy,suningBuy },
    methods:{
        checkState(state) {
            if(state=='jd'){
                this.jdBuyBtn = 'primary'
                this.suningBuyBtn = ''
                this.goodsTableComponent = 'jdBuy'
                // alert('京东买断')
            }else{
                this.jdBuyBtn = ''
                this.suningBuyBtn = 'primary'
                this.goodsTableComponent = 'suningBuy'
                // alert('苏宁买断')
            }
        }
        
    }
    
}
</script>


<style lang="scss" scope>
    .page{
        .topButton{
            margin-bottom:20px;
        }
    }
    .elForm{
        .el-select {
            width: 100px;
        }
    }
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
    .el-input-group__prepend{
        padding: 0px 5px;
    } 
    .el-input__inner{
        padding: 0 3px;
    }
    
    
    
</style>
