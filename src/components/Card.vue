<template>
  <div class="card">
    <div class="url" v-if="url">
      {{ url }}
    </div>
    <iframe class="content" :src="url" v-if="url"/>
    <div class="content" v-if="!url">
      <div class="row">
        <div>{{ topLeft || '' }}</div>
        <div></div>
      </div>
      <div class="row">
        <div>{{ middleLeft || '' }}</div>
        <div></div>
      </div>
      <div class="row">
        <div>{{ bottomLeft || '' }}</div>
        <div>{{ bottomRight || '' }}</div>
      </div>
    </div>
    <div class="disclaimer" v-if="disclaimer">
      {{ disclaimer }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['disclaimer', 'url', 'topLeft', 'bottomLeft', 'middleLeft', 'bottomRight'],
}
</script>

<style scoped lang="scss">
  .card {
    min-width: 0;
  }
  .url {
    background: linear-gradient(#E0E0E0, #B0ADAA);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
    border-radius: 10px 10px 0 0;
  }
  .content {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr 30% min-content;
    text-decoration: none;
    font-family: "Roboto Mono";
    animation: fadein 0.3s;
    height: 100%;
    min-height: 140px;
    padding: 20px;
    background: #232323;
    color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;

    .row {
      display: grid;
      grid-template-columns: 1fr min-content;
    }
    #card {
      color: white;
    }
  }
  .disclaimer {
    margin-top: 20px;
    background: rgba(242, 244, 250, 0.2);
    border: 1px solid #CFCFCF;
    border-radius: 4px;
    padding: 20px;
  }
  iframe.content {
    border: none;
    border-radius: 0 0 10px 10px ;
    width: 100%;
    height: auto;
    body {
      background: white;
    }
  }
</style>
