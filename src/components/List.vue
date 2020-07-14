<template>
  <div>
    <router-link
      class="item"
      v-for="item in items"
      :key="item.token"
      :to="`/transaction/${item.token}`"
    >
      <div class="amount">${{ (item.amount / 100).toFixed(2) }}</div>
      <div>{{ item.merchant.descriptor }}</div>
      <div>{{ item.status }}</div>
      <div>{{ new Date(item.created).toString().slice(4, 16) }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: ['items'],
}
</script>

<style scoped lang="scss">
  .item {
    color: black;
    text-decoration: none;
    display: grid;
    align-items: center;
    width: 100%;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    font-family: 'Roboto Mono';
    margin-bottom: 20px;
    animation: fadein 0.3s;
    .amount {
      font-size: 24px;
    }
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.5;
    }
  }
</style>
