<template lang="pug">
  div.view-tabs
    //- h2.app-title Tabs

    ci-tabs
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title" :customer-icon="item.icon"
        @click="tabsItemOnClick(item)")

    ci-tabs(modifier="bottom-line")
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title" @click="tabsItemOnClick(item)")

    ci-tabs(direction="vertical")
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title" :icon="item.icon"
        @click="tabsItemOnClick(item)")

    ci-tabs(direction="vertical")
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title"
        @click="tabsItemOnClick(item)")

    //- ci-tabs.ci-bottom-fixed(modifier="column")
    //-   ci-tab(v-for="(item, index) in tabs" :key="index"
    //-     :text="item.title" :icon="item.icon"
    //-     @click="tabsItemOnClick(item)")

    ci-tabs.ci-bottom-fixed(modifier="column icon-block")
      ci-tab(v-for="(item, index) in tabs" :key="index"
        :text="item.title" :icon="item.icon"
        @click="tabsItemOnClick(item)")
</template>

<script>
export default {
  name: 'view-tabs',

  data() {
    return {
      tabs: [
        { title: 'TAB A', icon: 'home', value: 111 },
        { title: 'TAB B', icon: 'language', value: 222 },
        { title: 'TAB C', icon: 'account_box', value: 333 },
      ]
    }
  },

  methods: {
    tabsItemOnClick(data) {
      console.log('tabsItemOnClick', data)
    }
  }
}
</script>
