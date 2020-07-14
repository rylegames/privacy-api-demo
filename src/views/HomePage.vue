<template>
    <div class="home">
      <h1>CARDS</h1>
      <div class="loading" v-if="!cards">
        loading...
      </div>
      <div class="cards" v-if="cards">
        <router-link
          v-for="card in cards.slice(0, 8)"
          :key="card.token"
          :to="`/card/${card.token}`"
        >
          <Card
            v-bind:bottomLeft="card.memo || card.hostname"
            v-bind:bottomRight="card.last_four"
          />
        </router-link>
      </div>
      <h1>FUNDING SOURCES</h1>
      <div class="loading" v-if="!funding">
        loading...
      </div>
      <div class="sources" v-if="funding">
        <router-link
          v-for="source in funding"
          :key="source.token"
          :to="`/funding/${source.token}`"
        >
          <Card
            v-bind:top-left="source.type"
            v-bind:bottom-right="source.last_four"
          />
        </router-link>
      </div>
      <h1>TRANSACTIONS</h1>
      <div class="loading" v-if="!transactions">
        loading...
      </div>
      <div class="transactions" v-if="transactions">
        <List
          v-bind:items="transactions.slice(0, 9)"
        />
      </div>
    </div>
</template>

<script>
import Card from '../components/Card';
import List from '../components/List';
export default {
  name: 'HomePage',
  async created() {
    this.cards = await this.$store.dispatch('apiRequest', '/card')
    this.funding = await this.$store.dispatch('apiRequest', '/fundingsource')
    this.transactions = await this.$store.dispatch('apiRequest', '/transaction')
  },
  data() {
    return {
      cards: null,
      funding: null,
      transactions: null,
    }
  },
  components: {
    Card,
    List
  }
}
</script>

<style scoped lang="scss">
  .home {
    box-sizing: border-box;
    padding: 20px;
    > h1 {
      margin: 40px 0 20px;
    }
  }
  .loading {
    margin: 40px 0;
    text-align: center;
    animation: fadeOut 0.3s;
  }
  a {
    min-width: 0;
    text-decoration: none;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.5;
    }
  }
  .cards, .sources {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    row-gap: 10px;
    column-gap: 10px;
  }
  .sources {
    display: grid;
  }
  .transactions {
    display: grid;
  }
</style>
