<template>
  <div class="page">
    <el-container class="userList">
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple-dark">用户详情</div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <template>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane :key="'baseMsg'" label="基本信息" name="baseMsg">
              <tab-base />
            </el-tab-pane>
            <el-tab-pane :key="'quotaMsg'" label="额度信息" name="quotaMsg">
              <tab-quota />
            </el-tab-pane>
            <el-tab-pane :key="'couponMsg'" label="优惠券信息" name="couponMsg">
              <tab-coupon />
            </el-tab-pane>
          </el-tabs>
        </template>
        <el-row class="btmBtn">
          <el-col :span="24">
            <el-button type="danger" @click="backPage">关闭</el-button>
          </el-col>
        </el-row>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import tabBase from './components/tabBase'
import tabQuota from './components/tabQuota'
import tabCoupon from './components/tabCoupon'

export default {
  components: { tabBase, tabQuota, tabCoupon },
  data() {
    return {
      activeName: 'baseMsg'
    }
  },
  methods: {
    handleClick: (val) => {
      const tabName = val.name
      console.log(tabName)
    },
    backPage: () => {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
    .userList{
        .el-header{
            background: rgba(0,0,0,0.1);
            height:60px;
            line-height: 60px;
            border-top-left-radius:10px;
            border-top-right-radius:10px;
        }
        .el-main{
            border:1px solid #eee;
            .btmBtn{
                .el-col{
                    text-align: center;
                }
                .el-button{
                    margin:30px 0px;
                    width: 100px;
                }
            }
        }
    }

</style>
