<template>
  <div class="content-card" :class="{ 'video-card': item.type === 'video' }">
    <!-- 视频内容 -->
    <template v-if="item.type === 'video'">
      <div class="video-container">
        <video
          ref="videoElement"
          class="video-player"
          :src="item.url"
          controls
          preload="metadata"
          @play="onVideoPlay"
        ></video>
        <div class="video-cover" v-show="!isPlaying">
          <van-image class="cover-img" :src="item.cover" fit="cover">
            <template v-slot:error>加载失败</template>
          </van-image>
          <div class="play-icon" @click="playVideo">
            <van-icon name="play" size="20" color="#fff" />
          </div>
        </div>
      </div>
    </template>

    <!-- 图片内容 -->
    <template v-else>
      <van-image :src="item.cover" fit="cover" class="content-image">
        <template v-slot:error>加载失败</template>
      </van-image>
    </template>

    <!-- 内容信息 -->
    <div class="content-info">
      <div class="content-title">{{ item.title }}</div>
      <p class="game-name">{{ item.gameName }}</p>
      <div class="content-meta-row">
        <div class="content-author">
          <van-image
            class="author-avatar"
            :src="item.avatar"
            round
            width="24"
            height="24"
          />
          <span class="author-name">{{ item.author }}</span>
        </div>
        <div class="content-stats">
          <span class="stat-item">
            <van-icon name="thumb-circle-o" size="15" />
            <span class="stat-num">{{ item.comments }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { ContentItem } from "../mock/data";

const props = defineProps<{
  item: ContentItem;
}>();

const isPlaying = ref(false);

const onVideoPlay = () => {
  isPlaying.value = true;
};

const videoElement = ref<HTMLVideoElement | null>(null);

const playVideo = () => {
  if (videoElement.value) {
    videoElement.value.play();
    isPlaying.value = true;
  }
};
</script>

<style scoped>
.content-card {
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0);
  margin-bottom: 3px;
}

.video-container {
  position: relative;
  width: 100%;
}

.video-player {
  width: 100%;
  height: 100px;
}

.video-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
}
.cover-img {
  width: 100%;
  height: 100%;
}
.play-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-image {
  width: 100%;
  height: 200px;
}

.content-info {
  padding: 12px 12px 10px 12px;
  background: #fff;
  border-radius: 0 0 12px 12px;
}
.content-title {
  font-size: 16px;
  font-weight: 500;
  color: #222;
  line-height: 1.4;
  word-break: break-all;
}
.content-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.content-author {
  display: flex;
  align-items: center;
  gap: 6px;
}
.author-avatar {
  border: 1.5px solid #f0f0f0;
  box-sizing: border-box;
}
.game-name {
  font-size: 10px;
  color: #999;
  margin: 4px 0;
  background-color: #f9f9f9;
  padding: 2px 8px 2px 2px;
  border-radius: 6px;
  display: inline-block;
}
.author-name {
  font-size: 12px;
  color: #666;
  font-weight: 400;
}
.content-stats {
  display: flex;
  align-items: center;
  gap: 12px;
}
.stat-item {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #999;
  gap: 3px;
}
.stat-num {
  margin-left: 2px;
}
@media (max-width: 400px) {
  .content-title {
    font-size: 14px;
  }
  .game-name {
    font-size: 10px;
  }
  .author-name,
  .stat-item {
    font-size: 12px;
  }
  .content-info {
    padding: 10px 8px 8px 8px;
  }
}
</style>
