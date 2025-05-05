<template>
  <div class="app-container">
    <!-- 内容区域 -->
    <div class="content-container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // 适配移动端
  document.documentElement.style.fontSize = '16px';
});
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
  color: #333;
}

.app-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.content-container {
  padding-bottom: 50px; /* 为底部导航栏留出空间 */
}
</style>
