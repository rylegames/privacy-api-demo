<template>
  <div class="header">
      <router-link to="/">
        Home
      </router-link>
      <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ["text"]
}
</script>

<style scoped lang="scss">
  .header {
    display: grid;
    grid-template-columns: 100px 1fr 100px;
    align-items: center;
    justify-items: center;
    margin-bottom: 20px;
    > a {
      padding: 10px 20px;
      border-radius: 20px;
      color: black;
      text-decoration: none;
      &:hover {
        background: rgba(196, 196, 196, 0.2);
      }
    }
  }
</style>
