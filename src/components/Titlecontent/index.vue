<template>
    <div>
        <el-row class="mateTitle">
            <el-col :span="21">
                <div class="grid-content bg-purple-dark">{{pageName}}</div>
            </el-col>
            <el-col :span="2" :offset="1">
                <el-button type="primary" icon="el-icon-refresh" @click="reload">刷新</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageName:''
        }
    },
    created(){
        this.pageName = this.$route.meta.title
    },
    methods:{
        reload(){
            location.reload()
        }
    }
    
}
</script>


<style lang="scss" scoped>
    .mateTitle{
        height: 60px;
        line-height: 60px;
        position: relative;
        padding-left: 40px;
        font-size: 20px;
        border-bottom: 1px solid rgb(230, 230, 230);
        border-top: 1px solid rgb(230, 230, 230);
        &::before{
            position: absolute;
            top: 20px;
            left: 20px;
            content: '';
            height: 18px;
            width: 3px;
            background: #000;
        }
    }
</style>
