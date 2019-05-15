<template>
    <div>
        <titlecontent></titlecontent>
        <div class="page">
            <div class="topButton">
                <el-row>
                    <el-button size="small" :type="jdGoods" @click="checkState('jd')">京东买断(888)</el-button>
                    <el-button size="small" :type="inputGoods" @click="checkState('')">手动发布(999)</el-button>
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
import jdGoods from './components/jdGoods'
import mineGoods from './components/mineGoods'
export default {
    data(){
        return{
            goodsTableComponent:'jdGoods',
            jdGoods:'primary',
            inputGoods:'',
            goodsName:'',
        }
    },
    components:{ Titlecontent,jdGoods,mineGoods },
    methods:{
        checkState(state) {
            if(state=='jd'){
                this.jdGoods = 'primary'
                this.inputGoods = ''
                this.goodsTableComponent = 'jdGoods'
            }else{
                this.jdGoods = ''
                this.inputGoods = 'primary'
                this.goodsTableComponent = 'mineGoods'
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
