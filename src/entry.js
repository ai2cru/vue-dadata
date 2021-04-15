import VueDadataTextarea from './components/VueDadataTextarea.vue';

const install = Vue => {
  if (install.installed) {
    return;
  }
  install.installed = true;
  Vue.component('vue-dadata-textarea', VueDadataTextarea);
};

const plugin = {
  install,
};

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueDadataTextarea.install = install;

export default VueDadataTextarea;
