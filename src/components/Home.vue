<template>
    <div>
        我是主页test--服务器没起服务。。
    </div>
</template>

<script>
import { Api } from "api";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      Api.getUserInfo().then(res => {});
    }
  }
};
</script>

<style scoped>
</style>