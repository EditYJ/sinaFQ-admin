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
                <el-select v-model="postForm.goodsType1" size="mini" placeholder="一级类目">
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
              <el-form-item label="商品品牌:">
                <el-select v-model="postForm.goodsBrand" size="small" placeholder="请选择">
                  <el-option label="一" value="oneState" />
                  <el-option label="二" value="twoState" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="4" offset="1">
              <el-form-item label="商品状态:">
                <el-select v-model="postForm.goodsStatus" size="small" placeholder="请选择">
                  <el-option label="下架" value="oneState" />
                  <el-option label="上架" value="twoState" />
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
          <el-col :span="2" offset="17">
            <div class="grid-content bg-purple-dark">
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
            <el-table-column prop="marketPrice" label="市面售价" width="100" align="center">
              <template scope="scope">
                ¥{{ scope.row.marketPrice }}
              </template>
            </el-table-column>
            <el-table-column prop="platformPrice" label="平台售价" width="100" align="center">
              <template scope="scope">
                ¥{{ scope.row.platformPrice }}
              </template>
            </el-table-column>
            <el-table-column label="SKU库存" width="100" align="center">
              <template scope="scope">
                <span class="lookSku" @click="lookSku">查看</span>
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
            <el-table-column prop="setting" label="操作" align="center" fixed="right" width="280">
              <template slot-scope="scope">
                <el-button-group>
                  <el-button type="primary" size="mini">查看</el-button>
                  <el-button type="success" size="mini">编辑</el-button>
                  <el-button type="warning" size="mini">日志</el-button>
                  <el-button type="danger" size="mini">删除</el-button>
                </el-button-group>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-main>
    </el-container>

    <!-- 编辑货品信息 -->
    <el-dialog title="编辑货品信息" :visible.sync="goodsMsgDialog">
      <el-form ref="form" :model="goodsMsg" label-width="80px" class="elForm">
        <el-row>
          <el-col :span="15">
            <div class="grid-content bg-purple">
              <el-form-item label="商品编号:" :span="20">
                <el-input v-model="goodsSku" size="small" placeholder="输入商品编号/商品名称" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary" size="mini">查询</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <template>
              <el-table :data="goodsMsgTable" style="width: 100%">
                <el-table-column prop="skuCode" label="sku编号" />
                <el-table-column prop="location" label="奶源地" />
                <el-table-column prop="type" label="分类" />
                <el-table-column prop="salePrice" label="销售价格" />
                <el-table-column prop="Stock" label="商品库存" />
                <el-table-column prop="warningValue" label="库存预警值" />
              </el-table>
            </template>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="goodsMsgDialog = false">确 定</el-button>
        <el-button @click="goodsMsgDialog = false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 批量修改 -->
    <el-dialog title="批量修改" :visible.sync="modifyDialog">
      <template slot="title">
        <span class="title-name">已选择商品数：{{ goodsCount }}</span>
      </template>
      <el-form ref="modifyDialogForm" :model="modifyDialogForm">
        <el-form-item label="商品状态">
          <el-switch v-model="modifyDialogForm.type" />
        </el-form-item>
        <el-form-item label="分期数限制">
          <el-checkbox-group v-model="modifyDialogForm.limitNormal">
            <el-checkbox v-for="limit in modifyDialogForm.limit" :key="limit" :label="limit">{{ limit }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="modifyDialog = false">提 交</el-button>
        <el-button @click="modifyDialog = false">取 消</el-button>
      </span>
    </el-dialog>

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
      bigImgSrc:'',
      bigImgShow:false,
      postForm: {
        name: '',
        goodsType1: '',
        goodsType2: '',
        goodsType3: '',
        goodsBrand: '',
        goodsStatus: ''
      },
      tableData: [{
        allCheck: false,
        goodsId: 'abc123',
        goodsPic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556092750677&di=0b0c5254ac19b246b2b076f895db1335&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110628%2F1369025_192645024000_2.jpg',
        goodsName: '绿色食品',
        goodsType: '食品',
        goodsPrice: '213',
        marketPrice: '123',
        platformPrice: '123',
        sku: '11',
        goodsStatus: true,
        goodsIptTime: '123123'
      }],
      goodsCount: 12,
      goodsMsgDialog: false,
      modifyDialog: false,
      goodsSku: '',
      goodsMsgTable: {},
      modifyDialogForm: {
        type: true,
        limitNormal: ['不限制'],
        limit: ['不限制', '3期', '4期', '5期']
      }
    }
  },
  methods: {
    queryGoods() {},
    resetQuery() {},
    topQuery() {},
    resetGoods() {},
    modifyGoods() {
      this.modifyDialog = true
    },
    lookSku() {
      this.goodsMsgDialog = true
    },
    bigImg(val) {
      this.bigImgSrc = val
      this.bigImgShow = true
    },
  }

}
</script>

<style lang="scss" scoped>
    .lookSku{
        color:green;
        cursor: pointer;
    }
    .grid-content{
        .el-button{
            margin-top: 7px;
            margin-left: 5px;
        }
    }
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

