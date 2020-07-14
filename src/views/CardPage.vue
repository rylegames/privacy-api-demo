<template>
  <div class="card-page">
    <Header v-bind:text="`CARD`"/>
    <div class="top">
      <Card
        v-bind:url="url"
        v-bind:disclaimer="`Due to regulatory constraints, a card’s expiration date, pan, and cvv can only be displayed through a hosted iframe`"
      />
      <Info v-bind:data="card"/>
    </div>
    <div class="bottom">
      <div class="header">
        <h2>TRANSACTIONS</h2>
        <div class="buttons">
        </div>
      </div>
      <div v-if="!transactions">loading...</div>
      <List
        v-bind:items="transactions"
      />
    </div>
  </div>
</template>

<script>
import Info from '../components/Info';
import Card from '../components/Card';
import List from '../components/List';
import Header from '../components/Header';
export default {
  name: 'CardPage',
  async created() {
    const { url } = await this.$store.dispatch('apiRequest', '/embed/card')
    this.url = url
    const [ first ] = await this.$store.dispatch('apiRequest', '/card')
    this.card = first;
    this.transactions = await this.$store.dispatch('apiRequest', '/transaction')
  },
  data() {
    return {
      card: {},
      transactions: null,
      url: '',
    }
  },
  components: {
    Card,
    Info,
    List,
    Header,
  }
}
</script>

<style scoped lang="scss">
  .card-page {
    box-sizing: border-box;
    padding: 20px;
  }
  .top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
</style>
