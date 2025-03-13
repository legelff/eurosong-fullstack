<template>
  <div id="app">
    <NavigationComponent @setActivePage="setActivePage"/>
    <PageHome v-if="activePage === `Home`"/>
    <PageArtists v-if="activePage === `Artists`"/>
    <PageSongs v-if="activePage === `Songs`"/>
    <PageRanking v-if="activePage === `Ranking`"/>
    <PageVoting v-if="activePage === `Voting`"/>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue'
import PageArtists from './pages/PageArtists.vue';
import PageHome from './pages/PageHome.vue';
import PageRanking from './pages/PageRanking.vue';
import PageSongs from './pages/PageSongs.vue';
import PageVoting from './pages/PageVoting.vue';

export default {
  name: 'App',

  data() {
    return {
      activePage: "Home"
    }
  },

  components: {
    NavigationComponent,
    PageHome,
    PageArtists,
    PageRanking,
    PageVoting,
    PageSongs
  },

  methods: {
    setActivePage(page) {
      this.activePage = page;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
  background-color: #000;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  padding-top: 1rem;
}

h1 {
  margin-bottom: 2rem;
}

.container {
  padding: 2rem;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  margin:0 auto;
}
</style>
