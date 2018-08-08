<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                分享的链接：<a :href=item.urlLink target="_blank">{{item.title || '默认标题'}}</a>--分享者：{{item.userNick}}--<span @click="del(item._id)">删除</span>
            </li>
        </ul>
        <div @click="!isNoMore&&loadMore()">加载更多</div>
        <div v-if="isNoMore">没有更多了</div>
    </div>
</template>

<script>
import { Api } from "api";
export default {
  data() {
    return {
      list: [],
      params: {
        pageSize: 5,
        page: 0
      },
      isNoMore: false
    };
  },
  mounted() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.params.page += 1;
      Api.getList(this.params).then(res => {
        if (res.data.code == "00") {
          res.data.lists.forEach(item => {
            this.list.push(item);
          });
          if (res.data.lists.length < this.params.pageSize) {
            this.isNoMore = true;
          }
        }
      });
    },
    del(id) {
      Api.delUrl({ id: id }).then(
        res => {
          if (res.data.code == "00") {
            this.loadMore();
          }
        },
        res => {
          console.log(res);
        }
      );
    }
  }
};
</script>

<style scoped>
</style>