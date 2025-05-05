import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 导入Vant组件
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';


// 创建应用实例
const app = createApp(App)

// Mount the app
app.use(Vant);
app.use(router);
app.mount('#app');
