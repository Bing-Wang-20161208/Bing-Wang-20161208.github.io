// 模拟数据
export interface ContentItem {
  id: number;
  type: 'video' | 'image';
  title: string;
  author: string;
  avatar: string;
  cover: string;
  url?: string;
  likes: number;
  comments: number;
  productType: string;
  gameName: string;
}

// 模拟内容列表数据
export const contentList: ContentItem[] = [
  {
    "id": 1,
    "type": "video",
    "title": "奔花选图一醉花酒鲜",
    "author": "花花世界",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 9,
    "comments": 2,
    "productType": "default",
    "gameName": "Clash Royale"
  },
  {
    "id": 2,
    "type": "video",
    "title": "三角洲行动: 全面战场提升性能",
    "author": "游戏发烧友",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 544,
    "comments": 32,
    "productType": "default",
    "gameName": "Candy Crush Saga"
  },
  {
    "id": 3,
    "type": "video",
    "title": "梅雨连连小技巧！用这个方法去霉",
    "author": "生活小妙招",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 233,
    "comments": 45,
    "productType": "default",
    "gameName": "Assassin's Creed"
  },
  {
    "id": 4,
    "type": "image",
    "title": "今日美食分享",
    "author": "美食达人",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg",
    "likes": 188,
    "comments": 36,
    "productType": "default",
    "gameName": "Fortnite"
  },
  {
    "id": 5,
    "type": "image",
    "title": "旅行日记",
    "author": "旅行者",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "likes": 366,
    "comments": 41,
    "productType": "default",
    "gameName": "Battlefield"
  },
  {
    "id": 6,
    "type": "video",
    "title": "学习新技能",
    "author": "知识分享",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-5.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 257,
    "comments": 28,
    "productType": "default",
    "gameName": "Hearthstone"
  },
  {
    "id": 7,
    "type": "video",
    "title": "科技新品发布",
    "author": "科技达人",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-6.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 120,
    "comments": 15,
    "productType": "phone",
    "gameName": "Battlefield"
  },
  {
    "id": 8,
    "type": "image",
    "title": "豪车展示",
    "author": "车迷",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-7.jpeg",
    "likes": 300,
    "comments": 50,
    "productType": "phone",
    "gameName": "Pokémon GO"
  },
  {
    "id": 9,
    "type": "video",
    "title": "手机评测",
    "author": "数码达人",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-8.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 450,
    "comments": 60,
    "productType": "phone",
    "gameName": "StarCraft II"
  },
  {
    "id": 10,
    "type": "video",
    "title": "新手机发布会",
    "author": "科技先锋",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-9.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 500,
    "comments": 70,
    "productType": "phone",
    "gameName": "Battlefield"
  },
  {
    "id": 11,
    "type": "video",
    "title": "手机摄影技巧",
    "author": "摄影达人",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-10.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 320,
    "comments": 45,
    "productType": "phone",
    "gameName": "Assassin's Creed"
  },
  {
    "id": 12,
    "type": "video",
    "title": "手机游戏推荐",
    "author": "游戏达人",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-11.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 410,
    "comments": 55,
    "productType": "phone",
    "gameName": "Super Mario"
  },
  {
    "id": 13,
    "type": "video",
    "title": "手机应用评测",
    "author": "应用专家",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-12.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 290,
    "comments": 40,
    "productType": "phone",
    "gameName": "Fortnite"
  },
  {
    "id": 14,
    "type": "video",
    "title": "手机维修技巧",
    "author": "维修大师",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-13.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 270,
    "comments": 35,
    "productType": "phone",
    "gameName": "Clash Royale"
  },
  {
    "id": 15,
    "type": "video",
    "title": "手机安全指南",
    "author": "安全专家",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-14.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 310,
    "comments": 50,
    "productType": "phone",
    "gameName": "Diablo III"
  },
  {
    "id": 16,
    "type": "video",
    "title": "手机配件推荐",
    "author": "配件达人",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-15.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 330,
    "comments": 60,
    "productType": "phone",
    "gameName": "StarCraft II"
  },
  {
    "id": 17,
    "type": "video",
    "title": "手机摄影比赛",
    "author": "摄影大师",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-16.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 450,
    "comments": 65,
    "productType": "phone",
    "gameName": "Minecraft"
  },
  {
    "id": 18,
    "type": "video",
    "title": "手机使用技巧",
    "author": "技巧达人",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-17.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 370,
    "comments": 55,
    "productType": "phone",
    "gameName": "League of Legends"
  },
  {
    "id": 19,
    "type": "video",
    "title": "手机市场分析",
    "author": "市场专家",
    "avatar": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/apple-18.jpeg",
    "url": "https://www.w3schools.com/html/mov_bbb.mp4",
    "likes": 390,
    "comments": 60,
    "productType": "phone",
    "gameName": "Call of Duty"
  }
]

// 获取内容列表数据（模拟分页）
export function getContentList(page: number, pageSize: number = 10, productType?: string) {
  // 模拟网络延迟
  return new Promise<{ list: ContentItem[], hasMore: boolean }>((resolve) => {
    setTimeout(() => {
      // 循环数据以模拟更多内容
      const allData = [...Array(5)].flatMap(() => contentList.map(item => ({
        ...item,
        id: Math.floor(Math.random() * 10000) // 生成随机ID以区分项目
      })));
      const filteredData = productType ? allData.filter(item => item.productType === productType) : allData;
      const start = (page - 1) * pageSize;
      const end = page * pageSize;
      const list = filteredData.slice(start, end);
      const hasMore = end < filteredData.length;
      resolve({
        list,
        hasMore
      });
    }, 1000);
  });
}