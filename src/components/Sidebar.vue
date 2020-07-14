<template>
  <div class="sidebar" v-chat-scroll="{smooth: true}">
      <div
        class="entry"
        v-for="(entry, index) in requests"
        :key="index"
      >
        <div class="route" v-if='entry.path'>
          Route {{ entry.path }}
        </div>
        <div v-if='entry.link'>
          <div>> {{entry.method.toUpperCase()}}  \</div>
          <div>'{{ entry.link }}' \</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    requests () {
      return this.$store.state.requests
    }
  },
  watch:{
    $route(to) {
      this.$store.commit('setRequests', to)
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    box-sizing: border-box;
    padding: 20px 20px 6px;
    height: 100vh;
    background: #232320;
    color: white;
    overflow: scroll;

    > .entry {
      margin: 0  0 20px 0;
      animation: fadein 0.3s;

      > .route {
        border: 1px dashed white;
        border-width: 1px 0 1px 0;
        padding: 10px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
</style>
