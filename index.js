
/* jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import PeopleListing from './components/PeopleListing.vue';
import PersonDetail from './components/PersonDetail.vue';
import App from './components/App.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'hash',
  base: window.location.href,
  routes: [
    {path: '/', component: PeopleListing},
    {name: 'person', path: '/:id', component: PersonDetail}
  ]
});


var app =
    new Vue({
      el: '#app',
      router: router,
      render: (h) => h(App)
    })
