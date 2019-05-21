<template>
    <div>
        <div class="pop-box" v-show="bigImgShow" @click="bigImgShow = !bigImgShow">
            <div class="imgPopBox">
                <img :src="bigImgSrc">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            bigImgShow : false,
            bigImgSrc : '',
        }
    },
    methods : {
      bigImg(index) {
        this.bigImgSrc = this.index
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
