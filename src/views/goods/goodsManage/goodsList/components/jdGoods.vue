<template>
  <div>
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template slot="title">
          <el-col :span="4">筛选查询</el-col>
          <el-col :span="6" :offset="13">
            <div class="grid-content bg-purple">
              <el-button type="primary" plain @click.stop="queryGoods">查询</el-button>
              <el-button type="primary" plain @click.stop="resetQuery">重置</el-button>
              <el-button type="primary" plain @click.stop="topQuery">高级检索</el-button>
            </div>
          </el-col>
        </template>
        <el-row>
          <el-form ref="form" :model="postForm" label-width="80px" class="elForm">
            <el-col :span="5">
              <el-form-item label="输入搜索:">
                <el-input v-model="postForm.name" size="small" placeholder="输入商品编号/商品名称" />
              </el-form-item>
            </el-col>
            <el-col :span="8" offset="1">
              <el-form-item label="商品类目:">
                <el-select v-model="postForm.goodsType1" size="small" placeholder="一级类目">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
                <el-select v-model="postForm.goodsType2" size="small" placeholder="二级类目">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
                <el-select v-model="postForm.goodsType3" size="small" placeholder="三级类目">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4" offset="1">
              <el-form-item label="分期限制:">
                <el-select v-model="postForm.timeState" size="small" placeholder="请选择">
                  <el-option label="一期" value="oneState" />
                  <el-option label="二期" value="twoState" />
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
            <div class="grid-content bg-purple-dark">商品列表</div>
          </el-col>
          <el-col :span="6" offset="14">
            <div class="grid-content bg-purple-dark">
              <el-button type="primary" plain @click="resetGoods">更新商品</el-button>
              <el-button type="primary" plain @click="modifyGoods">批量修改</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <template>
          <el-table :data="tableData" height="auto" border style="width: 100%">
            <el-table-column prop="allCheck" label="全选" width="60" align="center" />
            <el-table-column prop="goodsId" label="商品编号" width="100" align="center" />
            <el-table-column prop="goodsPic" label="商品主图" width="120" align="center">
              <template scope="scope">
                <img :src="scope.row.goodsPic" width="60" height="60" @mouseenter="bigImg(scope.row.goodsPic)">
              </template>
            </el-table-column>
            <el-table-column label="商品名称/品牌" width="140" align="center">
              <template scope="scope">
                <a :href="'http://'+scope.row.goodsName" class="goodsNameLink">{{ scope.row.goodsName }}</a>
                <div>品牌：{{ scope.row.goodsName }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="goodsType" label="商品类目" width="100" align="center" />
            <el-table-column prop="goodsPrice" label="京东售价" width="100" align="center">
              <template scope="scope">
                ¥{{ scope.row.goodsPrice }}
              </template>
            </el-table-column>
            <el-table-column prop="goodsPriceJD" label="京东协议价" width="100" align="center">
              <template scope="scope">
                ¥{{ scope.row.goodsPriceJD }}
              </template>
            </el-table-column>
            <el-table-column prop="goodsPriceSina" label="新浪定价" width="100" align="center">
              <template scope="scope">
                <el-input v-model="scope.row.goodsPriceSina" size="mini" style="width:80px" placeholder="新浪定价">
                  <template slot="prepend">¥</template>
                </el-input>
              </template>
            </el-table-column>
            <el-table-column prop="stageLimit" label="分期限制" width="100" align="center">
              <template scope="scope">
                <el-select v-model="scope.row.stageLimit" size="mini" placeholder="不限制">
                  <el-option label="不限制" value="noLimit" />
                  <el-option label="限制" value="Limit" />
                </el-select>
              </template>
            </el-table-column>
            <el-table-column prop="goodsStatus" label="状态" width="80" align="center">
              <template scope="scope">
                <el-switch
                  v-model="scope.row.goodsStatus"
                  active-color="#13ce66"
                  inactive-color="#999"
                />
              </template>
            </el-table-column>
            <el-table-column prop="goodsIptTime" label="导入时间" align="center" />
          </el-table>
        </template>
      </el-main>
    </el-container>

    <!-- 点击放大图片 -->
    <div class="pop-box" v-show="bigImgShow" @click="bigImgShow = !bigImgShow">
      <div class="imgPopBox">
        <img :src="bigImgSrc">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
      bigImgShow:false,
      bigImgSrc:'',
      postForm: {
        name: '',
        goodsType1: '',
        goodsType2: '',
        goodsType3: '',
        timeState: ''
      },
      tableData: [{
        allCheck: false,
        goodsId: 'abc123',
        goodsPic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556092750677&di=0b0c5254ac19b246b2b076f895db1335&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1369025_192645024000_2.jpg',
        goodsName: '绿色食品',
        goodsType: '食品',
        goodsPrice: '213',
        goodsPriceJD: '123',
        goodsPriceSina: '123',
        stageLimit: '不限制',
        goodsStatus: true,
        goodsIptTime: '123123'
      }]
    }
  },
  methods: {
    queryGoods () {},
    resetQuery () {},
    topQuery() {},
    resetGoods () {},
    modifyGoods () {},
    bigImg(val) {
      this.bigImgSrc = val
      this.bigImgShow = true
    },
  }

}
</script>

<style lang="scss" scoped>
  .pop-box{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100000;
    background-color: rgba(0,0,0,.6);
  }
  .imgPopBox{
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
  }
  .imgPopBox img {
    width: 500px;
  }
</style>

