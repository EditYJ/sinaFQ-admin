<template>
  <div>
    <Titlecontent v-if="this.$route.name!='orderDetail'" />
    <router-view />
  </div>
</template>

<script>
import Titlecontent from '../../../components/Titlecontent/index'
export default {
  components: { Titlecontent }

}
</script>

<style lang="scss" scoped>

</style>

