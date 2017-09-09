<template lang="pug">
  div.view-dialog
    h2.app-title Dialog

    ci-list
      ci-list-cell(title="Show Dialog" extend-icon="chevron_right"
        @click="isShowDialog = true")

    ci-dialog(v-if="isShowDialog"
      title="My Dialog" content="Hello CafeInit"
      @ok="isShowDialog = false")
</template>

<script>
export default {
  name: 'view-dialog',

  data() {
    return {
      isShowDialog: false
    }
  },

  methods: {
    // ...
  }
}
</script>
