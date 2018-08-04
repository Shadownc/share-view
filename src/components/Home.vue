<template>
    <div>
        我是主页test
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