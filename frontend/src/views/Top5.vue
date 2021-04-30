<template>
  <div>
    <h2>Топ 5</h2>
    <Loader v-if="loading"/>
    <PlayersList
        v-else-if="players.length"
        v-bind:players="players"
        v-bind:top="top"
    />
    <p v-else>No players!</p>
  </div>
</template>

<script>
import PlayersList from "@/components/PlayersList";
import Loader from "@/components/Loader";
export default {
  name: 'App',
  data() {
    return {
      players: [],
      loading: true,
      top: true
    }
  },
  mounted() {
    fetch('http://localhost:3000/players')
        .then(response => response.json())
        .then(json => {
          this.players = json
          this.loading = false
        })
  },
  components: {
    PlayersList,
    Loader
  }
}
</script>