/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

import CIAlert from './CIAlert.vue'
import CIModal from './CIModal.vue'

const components = [
  CIAlert,
  CIModal
]

const CIDialog = {
  name: 'CIDialog',
  version: '1.0.0',
  plugin: plugin,

  CIAlert,
  CIModal
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
