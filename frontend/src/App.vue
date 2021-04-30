<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home"><button>Начало</button></router-link>
      <router-link to="/top"><button>Топ 5</button></router-link>
      <router-link to="/full"><button>Весь список</button></router-link>
    </div>

    <div class="content">
      <router-view/>
    </div>

  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body::-webkit-scrollbar {
  width: 12px;               /* ширина scrollbar */
}

body::-webkit-scrollbar-track {
  background: #ffffff;        /* цвет дорожки */
}

body::-webkit-scrollbar-thumb {
  background-color: #42b983;    /* цвет плашки */
  border-radius: 20px;       /* закругления плашки */
  border: 3px solid #ffffff;  /* padding вокруг плашки */
}

#nav {
  margin: auto;
  width: 800px;
  display: flex;
  justify-content: space-between;
}

#nav button {
  width: 140px;
  border-radius: 8px;
  border: 2px solid #42b983;
  padding: 0.5rem 1.5rem;
  outline: none;
  background: #fff;
  transition: all 0.22s;
}

#nav button:hover {
  cursor: pointer;
  opacity: 0.8;
  background: #60b983;
  color: white;
  letter-spacing: 0.03rem;
}

.content {
  margin: 40px auto;
  width: 1000px;
  height: fit-content;
  border-radius: 50px;
  border: 2px solid #42b983;
}
</style>