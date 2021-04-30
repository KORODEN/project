<template>
  <div v-bind:class="[index ? activeClass : finalClass]">
<!--    <div class="row row-place">{{index + 1}}</div>-->
    <div class="row row-place">{{indexes}}</div>
    <div class="row row-fio">{{player.fio}}</div>
    <div class="row row-status">{{player.level}}</div>
    <div class="row row-rate">{{rateComputing}}</div>
    <div class="row row-money">{{moneyComputing}}</div>
  </div>
</template>

<script>
export default {
  name: "PlayerItem",
  data() {
    return {
      activeClass: 'v-table-row',
      finalClass: 'first-v-table-row'
    }
  },
  props: {
    player: {
      type: Object,
      required: true
    },
    index: Number,
    indexes: Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  },
  computed: {
    rateComputing() {
      return this.player.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[0]+
          this.player.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[1]
    },
    moneyComputing() {
      return this.player.resources.match(/(-?\d+(\.\d+)?)/g).map(v => +v)[2]
    }
  }
}
</script>

<style scoped>
  .v-table-row {
    border-top: 1px solid #60b983;
    display: flex;
    justify-content: space-around;
    padding: 1rem .5rem 0 .5rem;
    margin: 1rem 2rem;
  }

  .first-v-table-row {
    display: flex;
    justify-content: space-around;
    padding: .3rem .5rem 0 .5rem;
    margin: 1rem 2rem;
  }

  .row {
    flex-basis: 20%;
    text-align: center;
  }
</style>