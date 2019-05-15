<template>
    <div>
        <el-table :data="quotaMsg" border style="width: 100%">
            <el-table-column prop='index' label="序号" width="100" align="center"></el-table-column>
            <el-table-column prop="node" label="工作节点" align="center"></el-table-column>
            <el-table-column prop="followTime" label="跟进时间" align="center"></el-table-column>
            <el-table-column prop="Policy" label="决策" align="center"></el-table-column>
            <el-table-column prop="handlePeople" label="处理人" align="center"></el-table-column>
            <el-table-column prop="handleTime" label="处理时间"  align="center"></el-table-column>
            <el-table-column prop="remarks" label="备注" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            quotaMsg:[{}]
        }
    }
}
</script>

<style lang="scss" scoped>
    .headMsg{
        span{
            color: #666666;
            font-size: 16px;
            font-weight: 500;
            height: 40px !important;
            line-height: 40px;
            margin-right: 5px;
        }
        .span2{
            font-size: 14px;
        }
    }
</style>
