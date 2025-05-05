<template>
  <div class="content-feed">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="waterfall-container">
          <div class="waterfall-column">
            <content-card
              v-for="item in leftColumn"
              :key="item.id"
              :item="item"
            />
          </div>
          <div class="waterfall-column">
            <content-card
              v-for="item in rightColumn"
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import ContentCard from "./ContentCard.vue";
import { getContentList, type ContentItem } from "../mock/data";
import { useRoute } from "vue-router";

// 状态管理
const contentList = ref<ContentItem[]>([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const currentPage = ref(1);
const route = useRoute();
const productType = ref<string>(route.query.productType as string);
// 瀑布流布局 - 左右两列
const leftColumn = computed(() => {
  return contentList.value.filter((_, index) => index % 2 === 0);
});

const rightColumn = computed(() => {
  return contentList.value.filter((_, index) => index % 2 === 1);
});

// 加载数据
const loadData = async (page: number) => {
  try {
    loading.value = true;
    const { list, hasMore } = await getContentList(page, 10, productType.value);
    if (refreshing.value) {
      contentList.value = list;
      refreshing.value = false;
    } else {
      contentList.value = [...contentList.value, ...list];
    }

    loading.value = false;
    finished.value = !hasMore;
  } catch (error) {
    console.error("加载数据失败", error);
    loading.value = false;
  }
};

// 上拉加载更多
const onLoad = () => {
  loadData(currentPage.value);
  currentPage.value++;
};

// 下拉刷新
const onRefresh = () => {
  finished.value = false;
  currentPage.value = 1;
  loadData(currentPage.value);
  currentPage.value++;
};

</script>

<style scoped>
.content-feed {
  padding: 6px;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.waterfall-container {
  display: flex;
  width: 100%;
  gap: 3px;
}

.waterfall-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
