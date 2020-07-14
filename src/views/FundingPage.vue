<template>
    <div class="funding-page">
      <Header v-bind:text="`FUNDING SOURCES`"/>
      <div
        class="row"
        v-for="source in funding"
        :key="source.token"
      >
        <Card
          v-bind:topLeft="source.type"
          v-bind:bottomRight="source.last_four"
        />
        <Info v-bind:data="source"/>
      </div>
    </div>
</template>

<script>
import Info from '../components/Info';
import Card from '../components/Card';
import Header from '../components/Header';
export default {
  name: 'FundingPage',
  async created() {
    this.funding = await this.$store.dispatch('apiRequest', '/fundingsource')
  },
  data() {
    return {
      funding: [],
    }
  },
  components: {
    Card,
    Info,
    Header,
  }
}
</script>

<style scoped lang="scss">
  .funding-page {
    box-sizing: border-box;
    padding: 20px;
    > .row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
      margin-bottom: 20px;
    }
  }
</style>