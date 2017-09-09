<template lang="pug">
transition.ci-dialog(tabindex="0")
  div.ci-dialog.ci-dialog-alert
    div.ci-dialog__title(v-if="title")
      h3 {{title}}
    div.ci-dialog__content
      slot {{content}}
    div.ci-dialog__actions
      ci-button(color="primary" modifier="radius" :text="okText"
        @click="$emit('ok')")
</template>

<script>
/**
 * @fileoverview CIAlert
 * @author burning (www.cafeinit.com)
 * @version 2017.09.09
 */

export default {
  name: 'ci-dialog',

  props: {
    title: {
      type: String,
      default: ''
    },

    content: {
      type: String,
      default: ''
    },

    okText: {
      type: String,
      default: 'Ok'
    }
  }
}
</script>
