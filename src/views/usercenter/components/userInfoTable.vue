<template>
  <div class="myTableCom">
    <el-col :span="12">
      <el-col :span="10">
        <div class="bg-purple">{{ tableName }}</div>
      </el-col>
      <el-col :span="14">
        <div class="bg-purple bg-normal">
          {{ tableData }}
          <slot name="userbtn" class="userbtn" />
        </div>
      </el-col>
    </el-col>
  </div>
</template>

<script>
export default {
  props: ['tableName', 'tableData']
}
</script>

<style lang="scss" scoped>
    .myTableCom{
        font-size: 14px;
        .bg-purple{
            height: 45px;
            line-height: 45px;
            padding-left: 15px;
            background: rgba(153, 153, 153, 0.14);
            border-top: 2px solid rgba(153, 153, 153, 0.14);
            border-left:2px solid rgba(153, 153, 153, 0.14);
        }
        .bg-normal{
            background: #fff;
        }
    }
</style>
