<template>
  <div id="app">
    <header><myHeader></myHeader></header>
    <div id="nav"></div>
    <b-container>
      <about-me id="about-me" class="content"></about-me>
      <lazyBox><skills id="skills" class="content"></skills></lazyBox>
      <lazyBox><interns id="interns" class="content"></interns></lazyBox>
      <lazyBox
        ><archievements id="archievements" class="content"></archievements
      ></lazyBox>
      <lazyBox><portfolio id="portfolio" class="content"></portfolio></lazyBox>
      <lazyBox><other id="other" class="content"></other></lazyBox>
      <lazyBox><links id="links" class="content"></links></lazyBox>
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans",
    -apple-system, BlinkMacSystemFont, Roboto, "游ゴシック体", YuGothic,
    "Yu Gothic Medium", sans-serif;
  -webkit-font-smoothing: antialiased;
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

table.spacing-table {
  border-collapse: separate;
  border-spacing: 20px 20px;
}
.content {
  padding-top: 70px;
}
</style>

<script>
const myHeader = () => import("./components/Header");
const lazyBox = () => import("./components/LazyBox");
const archievements = () => import("./views/Achievements");
const skills = () => import("./views/Skills");
const interns = () => import("./views/Interns");
const aboutMe = () => import("./views/AboutMe");
const portfolio = () => import("./views/Portfolio");
const other = () => import("./views/Other");
const links = () => import("./views/Links");

export default {
  components: {
    myHeader,
    skills,
    interns,
    archievements,
    aboutMe,
    lazyBox,
    portfolio,
    other,
    links,
  },
};
</script>