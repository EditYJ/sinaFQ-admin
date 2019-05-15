<template>
    <div>
        <el-dialog :visible.sync="addDialog" class="addDialogTitle">
            <template slot="title">
                <span>新增/编辑 平台</span>
                <span>*</span>
                <span>为必填字段</span>
            </template>
            
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addDialog:false
        }
    }
}
</script>

<style lang="scss" scoped>
    .addDialogTitle{
        .text1{
            font-weight: bold;
            margin-right: 10px;
        }
        .text2{
            color: red;
            position: relative;
            top: 3px;
        }
        .text3{
            font-size: 13px;
        }
    }
</style>
