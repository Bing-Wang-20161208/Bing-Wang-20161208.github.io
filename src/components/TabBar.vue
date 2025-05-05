<template>
  <div class="tab-bar-container">
    <van-tabbar v-model="active" route fixed>
      <van-tabbar-item icon="home-o" to="/" name="home">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/community" name="community">社区</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/creation" name="creation">创作</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/message" name="message">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/profile" name="profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(0);
</script>

<style scoped>
.tab-bar-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
}
</style>