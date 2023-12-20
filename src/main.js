import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import EventBus from './EventBus';
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
  .provide('eventBus', EventBus )

