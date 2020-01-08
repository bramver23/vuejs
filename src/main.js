import Vue from 'vue';
import App from './App';

new Vue({
  // render: function(h){
  //   return h(App);
  // }
  // render: function(createElement){
  //   return createElement(App);
  // }
  el:'#app',
  render: h => h(App)
});
