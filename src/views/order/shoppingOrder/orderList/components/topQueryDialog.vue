<template>
    <div>
        <el-dialog title="高级检索" :visible.sync="dialogShow">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="输入搜索">
                    <el-input v-model="form.name" placeholder="商品名称/收货人"></el-input>
                </el-form-item>
                <el-form-item label="商品来源">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="订单来源">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="订单金额">
                    <el-col :span="11">
                    <el-input v-model="form.date1" style="width: 100%;"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">至</el-col>
                    <el-col :span="11">
                    <el-input v-model="form.date2" style="width: 100%;"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="支付时间">
                    <el-col :span="11">
                    <el-input v-model="form.date1" style="width: 100%;"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">至</el-col>
                    <el-col :span="11">
                    <el-input v-model="form.date2" style="width: 100%;"></el-input>
                    </el-col>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button type="success" @click=" dialogShow = false">查 询</el-button>
                <el-button @click=" dialogShow = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
             dialogShow:false,
             form:{

             }
        }
    }
}
</script>

<style lang="scss" scoped>
    .line{
        text-align: center;
    }
</style>
