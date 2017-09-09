/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.07.31
 */

import CIAlert from './CIAlert.vue'

const components = [
  CIAlert
]

const CIDialog = {
  name: 'CIDialog',
  version: '1.0.0',
  plugin: plugin,

  CIAlert
}

if (window.Vue) {
  Vue.use(plugin)
}

window.CIDialog = CIDialog

export default CIDialog

function plugin(Vue) {
  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }
}
