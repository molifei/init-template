import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 初始化css
// pc
// import "@/assets/css/pc/base.css"
// 移动
// import "@/assets/css/mb/base.css"


// 按需加载element-UI
import {Button,Message} from "element-ui"
Vue.use(Button)
Vue.prototype.$message = Message

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
