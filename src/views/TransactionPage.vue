<template>
  <div class="transaction-page">
    <Header v-bind:text="`TRANSACTION`"/>
    <div class="top">
      <Card
        v-bind:topLeft="transaction.amount ? ('$' + (transaction.amount / 100).toFixed(2)) : ''"
        v-bind:middleLeft="transaction.merchant && transaction.merchant.descriptor"
        v-bind:bottomLeft="transaction.created ? (new Date(transaction.created).toString().slice(4, 16)) : ''"
      />
      <Info v-bind:data="transaction" />
    </div>
    <div class="merchant" v-if="transaction.merchant">
      <div class="row">
        <div><b>{{ transaction.merchant.descriptor }}</b></div>
        <div>{{ transaction.merchant.state }}, {{ transaction.merchant.country }}</div>
      </div>
      <div>{{ transaction.merchant.mcc }}</div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card';
import Header from '../components/Header';
import Info from '../components/Info';
import get from 'lodash/get';
export default {
  name: 'TransactionPage',
  async created() {
    const data = await this.$store.dispatch('apiRequest', '/transaction')
    this.transaction = get(data, '0', {});
    this.events = get(data, '0.events', []);
  },
  data() {
    return {
      transaction: {},
      events: [],
    }
  },
  components: {
    Header,
    Card,
    Info
  }
}
</script>

<style scoped lang="scss">
  .transaction-page {
    box-sizing: border-box;
    padding: 20px;
  }
  .top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }
  .merchant {
    margin-top: 20px;
    background: rgba(242, 244, 250, 0.2);
    border: 1px solid #CFCFCF;
    border-radius: 4px;
    padding: 20px;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  }
</style>
