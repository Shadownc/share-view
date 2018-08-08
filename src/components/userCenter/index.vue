<template>
    <div>
       欢迎回来,{{name}}
       <div @click="logOut" style="cursor:pointer">退出登录</div>
       <router-link :to="{name:'collectList'}">收藏列表</router-link>
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
      if (this.$getUserData()) {
        this.name = this.$getUserData().name;
      }
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