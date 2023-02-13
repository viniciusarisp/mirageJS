import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import server from './mirage/config.js';

server().logging = true;

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')

