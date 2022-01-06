import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import api from "../services/api";
import Caraosel3d from 'vue-carousel-3d';

Vue.use(Vuetify);
Vue.use(Caraosel3d);
Vue.prototype.$http = api;

export default new Vuetify({
  theme: { dark: true },
});
