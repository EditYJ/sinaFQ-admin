<template>
  <div>
    <el-container class="tab-container-userInfo">
      <el-header>
        个人信息
      </el-header>
      <el-main>
        <el-row class="userInfoTable">
          <user-info-table :table-name="'姓名'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'紧急联系人'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'性别'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'联系方式'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'年龄'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'工作职位'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'实名状态'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'月收入'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'身份证号'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'单位名称'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'实名时间'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'单位地址'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'注册手机号'" :table-data="userInfoTable.name" />
          <user-info-table :table-name="'工作信息附件'">
            <template slot="userbtn">
              <el-button type="primary" size="mini">查看</el-button>
            </template>
          </user-info-table>
        </el-row>
      </el-main>

    </el-container>

    <el-container class="tab-container-userInfo">
      <el-header>
        认证信息
      </el-header>
      <el-main>
        <el-table :data="anthenMsg" border style="width: 100%">
          <el-table-column prop="type" label="认证类型" align="center" />
          <el-table-column prop="status" label="认证/授权状态" align="center" />
          <el-table-column prop="time" label="最近认证/授权时间" align="center" />
          <el-table-column prop="operation" label="操作" align="center">
            <template solt="row.solt">
              <el-button type="primary" size="mini">操作</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>

    <el-container class="tab-container-userInfo">
      <el-header>
        绑卡信息
      </el-header>
      <el-main>
        <el-table :data="cardMsg" border style="width: 100%">
          <el-table-column prop="loadCode" label="通道编号" align="center" />
          <el-table-column prop="loadName" label="通道名称" align="center" />
          <el-table-column prop="name" label="姓名" align="center" />
          <el-table-column prop="bankName" label="开户行" align="center" />
          <el-table-column prop="bankId" label="银行卡号" align="center" />
          <el-table-column prop="bankTel" label="银行预留手机号" align="center" />
          <el-table-column prop="status" label="绑卡状态" align="center" />
        </el-table>
      </el-main>
    </el-container>

    <el-container class="tab-container-userInfo">
      <el-header>
        收货信息
      </el-header>
      <el-main>
        <el-table :data="receGoodsMsg" border style="width: 100%">
          <el-table-column prop="tags" label="地址标签" width="100" align="center" />
          <el-table-column prop="people" label="收货人" width="120" align="center" />
          <el-table-column prop="tel" label="手机号" width="120" align="center" />
          <el-table-column prop="area" label="省市区" align="center" />
          <el-table-column prop="detailMsg" label="详细信息" align="center" />
          <el-table-column prop="status" label="状态" width="120" align="center" />
          <el-table-column prop="time" label="添加时间" align="center" />
        </el-table>

      </el-main>
    </el-container>

  </div>
</template>

<script>
import userInfoTable from './userInfoTable'
export default {
  components: { userInfoTable },
  data() {
    return {
      userInfoTable: {
        name: '王*'
      },
      anthenMsg: [{
        type: '实名认证（号码）',
        status: '已完成',
        time: '123'

      }, {
        type: '实名认证（号码）',
        status: '已完成',
        time: '123'

      }],
      cardMsg: [{
        loadCode: '12345',
        loadName: '213455',
        name: '123123',
        bankName: '1234',
        bankId: '123123',
        bankTel: '123412',
        status: '213123'
      }
      ],
      receGoodsMsg: [{
        tags: '123',
        people: '王*',
        tel: '15001010101',
        area: '江苏省  无锡市  新吴区',
        detailMsg: '震泽路国家软件园狮子座',
        status: '正常',
        time: '1231'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
    .tab-container-userInfo{
        .el-header{
            color: #666666;
            font-size: 14px;
            font-weight: 500;
            height: 40px!important;
            line-height: 40px;
        }
        .el-main{
            padding: 10px 20px;
        }
        .userInfoTable{
            border-bottom: 2px solid rgba(153, 153, 153, 0.14);
            border-right: 2px solid rgba(153, 153, 153, 0.14);
        }

    }
</style>
