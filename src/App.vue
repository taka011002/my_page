<template>
  <div id="app">
    <header><myHeader></myHeader></header>
    <div id="nav">
    </div>
    <b-container style="padding-top: 70px;">
      <about-me id="about-me" class="content"></about-me>
      <skills id="skills" class="content"></skills>
      <interns id="interns" class="content"></interns>
<!--      <experiences id="experiences" class="content"></experiences>-->
<!--      <portfolio id="portfolio" class="content"></portfolio>-->
      <links id="links" class="content"></links>
<!--      <router-view/>-->
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
  margin-bottom: 100px;
}


</style>

<script>
  import myHeader from './components/Header'
  import skills from './views/Skills'
  import interns from './views/Interns'
  import aboutMe from './views/AboutMe'
  // import experiences from './views/Experiences'
  // import portfolio from './views/Portfolio'
  import links from './views/Links'

  export default {
    components: {
      myHeader,
      skills,
      interns,
      aboutMe,
      // experiences,
      // portfolio,
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