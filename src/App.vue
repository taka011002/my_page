<template>
  <div id="app">
    <header><myHeader></myHeader></header>
    <div id="nav">
    </div>
    <b-container>
        <about-me id="about-me" class="content"></about-me>
        <lazyBox><skills id="skills" class="content"></skills></lazyBox>
        <lazyBox><interns id="interns" class="content"></interns></lazyBox>
        <lazyBox><portfolio id="portfolio" class="content"></portfolio></lazyBox>
        <lazyBox><other id="other" class="content"></other></lazyBox>
        <lazyBox><links id="links" class="content"></links></lazyBox>
<!--      <router-view/>-->
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

table.spacing-table{
  border-collapse: separate;
  border-spacing: 20px 20px;
}
.content{
  padding-top: 70px;
}

</style>

<script>
  import myHeader from './components/Header'
  import lazyBox from './components/LazyBox'
  import skills from './views/Skills'
  import interns from './views/Interns'
  import aboutMe from './views/AboutMe'
  // import experiences from './views/Experiences'
  import portfolio from './views/Portfolio'
  import other from './views/Other'
  import links from './views/Links'

  export default {
    components: {
      myHeader,
      skills,
      interns,
      aboutMe,
      lazyBox,
      // experiences,
      portfolio,
        other,
      links
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      clear () {
        this.msg = ''
      }
    }
  }

</script>