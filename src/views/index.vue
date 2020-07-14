<template>
  <div id="app">
    <router-view></router-view>
    <Sidebar/>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar';
export default {
  name: 'App',
  components: {
    Sidebar
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Mono:wght@400;600&display=swap');
  body {
    margin: 0;
  }
  div, a {
    font-family: 'lato';
  }
  #app {
    display: grid;
    grid-template-columns: 1fr 400px;
    > div {
      max-height: 100vh;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes fadeout {
    from { opacity: 1; }
    to   { opacity: 0; }
  }
</style>