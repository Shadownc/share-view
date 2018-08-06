<template>
    <div>
       欢迎回来,{{name}}
       <div @click="logOut" style="cursor:pointer">退出登录</div>
    </div>
</template>

<script>
import { Api } from "api";
export default {
  data() {
    return {
      name: ""
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      Api.getUserInfo().then(res => {
        if (res.data.code == "00") {
          this.name = res.data.userInfo.name;
        }
      });
    },
    logOut() {
      Api.logOut().then(res => {
        if (res.data.code == "00") this.$router.push({ name: "Home" });
      });
    }
  }
};
</script>

<style scoped>
</style>