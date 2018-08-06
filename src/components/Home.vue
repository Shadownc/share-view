<template>
    <div>
        我是主页
        <router-link :to="{ name: 'memberCenter'}">个人中心</router-link>
    </div>
</template>

<script>
import { Api } from "api";
export default {
  data() {
    return {};
  },
  mounted() {
    
  },
  methods: {
   
  }
};
</script>

<style scoped>
</style>