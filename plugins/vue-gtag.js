import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: "UA-47454681-16" },
    appName: 'XLH Training',
  }, app.router);
}
